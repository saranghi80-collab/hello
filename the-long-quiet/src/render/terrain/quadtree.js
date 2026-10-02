// Cube-sphere quadtree with screen-space-error LOD. Patches are generated off-thread and
// cached; while a finer level is loading, its parent keeps drawing, so there are no holes.

import * as THREE from 'three';
import { createTerrainLib } from './terrainlib.js';

export const PATCH_N = 32;
const LIB = createTerrainLib();
let INDEX = null;
function sharedIndex() {
  if (!INDEX) INDEX = new THREE.BufferAttribute(LIB.buildIndex(PATCH_N), 1);
  return INDEX;
}
export function terrainLib() { return LIB; }

// ---------------- worker pool ----------------
class WorkerPool {
  constructor() {
    this.workers = [];
    this.queue = [];
    this.inflight = new Map();
    this.nextId = 1;
    this.inits = new Map();
    this.syncGens = new Map();
    const n = Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 4) - 1));
    try {
      const src = `const LIB = (${createTerrainLib.toString()})();
const gens = new Map();
onmessage = (e) => {
  const m = e.data;
  if (m.type === 'init') { gens.set(m.planet, LIB.makeGenerator(m.params)); return; }
  if (m.type === 'drop') { gens.delete(m.planet); return; }
  if (m.type === 'build') {
    const g = gens.get(m.planet);
    if (!g) { postMessage({ id: m.id, missing: true }); return; }
    const out = LIB.buildPatch(g, m.face, m.level, m.ix, m.iy, m.N);
    out.id = m.id;
    postMessage(out, [out.pos.buffer, out.nor.buffer, out.hgt.buffer, out.mat.buffer, out.unit.buffer]);
  }
};`;
      const url = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
      for (let i = 0; i < n; i++) {
        const w = new Worker(url);
        w.busy = 0;
        w.onmessage = (e) => this.onResult(w, e.data);
        w.onerror = () => { this.failed = true; };
        this.workers.push(w);
      }
    } catch (err) {
      this.workers = [];
    }
  }

  init(planet, params) {
    this.inits.set(planet, params);
    for (const w of this.workers) w.postMessage({ type: 'init', planet, params });
    if (!this.workers.length) this.syncGens.set(planet, LIB.makeGenerator(params));
  }

  drop(planet) {
    this.inits.delete(planet);
    this.syncGens.delete(planet);
    for (const w of this.workers) w.postMessage({ type: 'drop', planet });
    this.queue = this.queue.filter((j) => j.planet !== planet);
    for (const [id, j] of this.inflight) if (j.planet === planet) j.cancelled = true;
  }

  request(job) {
    this.queue.push(job);
  }

  pump() {
    if (!this.queue.length) return;
    this.queue.sort((a, b) => b.priority - a.priority);
    if (this.workers.length && !this.failed) {
      for (const w of this.workers) {
        while (w.busy < 2 && this.queue.length) {
          const job = this.queue.shift();
          if (job.cancelled) continue;
          const id = this.nextId++;
          job.id = id;
          job.worker = w;
          this.inflight.set(id, job);
          w.busy++;
          w.postMessage({ type: 'build', id, planet: job.planet, face: job.face, level: job.level, ix: job.ix, iy: job.iy, N: PATCH_N });
        }
      }
      // Drop stale requests so the queue reflects what the camera needs now.
      for (const j of this.queue) j.node.pending = false;
      this.queue.length = 0;
    } else {
      const t0 = performance.now();
      while (this.queue.length && performance.now() - t0 < 6) {
        const job = this.queue.shift();
        if (job.cancelled) continue;
        let g = this.syncGens.get(job.planet);
        if (!g) { g = LIB.makeGenerator(this.inits.get(job.planet)); this.syncGens.set(job.planet, g); }
        job.done(LIB.buildPatch(g, job.face, job.level, job.ix, job.iy, PATCH_N));
      }
      for (const j of this.queue) j.node.pending = false;
      this.queue.length = 0;
    }
  }

  onResult(w, data) {
    w.busy = Math.max(0, w.busy - 1);
    const job = this.inflight.get(data.id);
    this.inflight.delete(data.id);
    if (!job) return;
    if (job.cancelled) { job.node.pending = false; return; }
    if (data.missing) {
      const params = this.inits.get(job.planet);
      if (params) w.postMessage({ type: 'init', planet: job.planet, params });
      job.node.pending = false;
      return;
    }
    job.done(data);
  }
}

let POOL = null;
export function workerPool() {
  if (!POOL) POOL = new WorkerPool();
  return POOL;
}

// ---------------- quadtree ----------------
class Node {
  constructor(face, level, ix, iy, parent) {
    this.face = face; this.level = level; this.ix = ix; this.iy = iy;
    this.parent = parent;
    this.key = `${face}/${level}/${ix}/${iy}`;
    this.children = null;
    this.data = null;
    this.mesh = null;
    this.pending = false;
    this.lastUsed = 0;
    // approximate centre on the unit sphere and angular size, before data arrives
    const size = 2 / (1 << level);
    const c = LIB.cubeToSphere(face, -1 + (ix + 0.5) * size, -1 + (iy + 0.5) * size, [0, 0, 0]);
    this.unitCenter = c;
    this.arc = (Math.PI / 2) * (size / 2) * 1.25; // radians across, slightly padded
  }
}

let planetCounter = 0;

export class TerrainQuadtree {
  constructor(params, material, group) {
    this.params = params;
    this.R = params.radius;
    this.material = material;
    this.group = group;
    this.planetKey = `p${++planetCounter}`;
    this.pool = workerPool();
    this.pool.init(this.planetKey, params);
    this.gen = LIB.makeGenerator(params);
    this.roots = [];
    for (let f = 0; f < 6; f++) this.roots.push(new Node(f, 0, 0, 0, null));
    this.frame = 0;
    this.loaded = 0;
    this.budget = 900;
    this.maxLevel = Math.max(4, Math.min(19, Math.floor(Math.log2((this.R * 0.785) / (1.2 * PATCH_N)))));
    this.threshold = 5.0;
    this.drawn = 0;
    this.minPossible = -params.amp * 1.4 + (this.gen.seaLevel ?? -1e9) * 0;
    for (const r of this.roots) this.requestNode(r, 1e9);
  }

  get ready() {
    return this.roots.every((r) => r.data);
  }

  requestNode(node, priority) {
    if (node.pending || node.data) return;
    node.pending = true;
    this.pool.request({
      planet: this.planetKey, face: node.face, level: node.level, ix: node.ix, iy: node.iy, priority, node,
      done: (d) => this.onData(node, d),
    });
  }

  onData(node, d) {
    node.pending = false;
    if (this.disposed) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3));
    g.setAttribute('aHeight', new THREE.BufferAttribute(d.hgt, 1));
    g.setAttribute('aMat', new THREE.BufferAttribute(d.mat, 2));
    g.setAttribute('aUnit', new THREE.BufferAttribute(d.unit, 3));
    g.setIndex(sharedIndex());
    const r = Math.max(this.R * node.arc * 0.75, (d.maxH - d.minH));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), r);
    const mesh = new THREE.Mesh(g, this.material);
    mesh.position.set(d.center[0], d.center[1], d.center[2]);
    mesh.frustumCulled = false;
    mesh.visible = false;
    mesh.matrixAutoUpdate = true;
    this.group.add(mesh);
    node.mesh = mesh;
    node.data = { center: d.center, minH: d.minH, maxH: d.maxH, radius: r };
    node.lastUsed = this.frame;
    this.loaded++;
  }

  // cam: camera position in body-fixed coordinates (metres)
  // toView(x,y,z) -> view-space position for frustum tests, provided by caller
  update(cam, frustum, bodyToCam, projScale) {
    this.frame++;
    this.drawn = 0;
    this.cam = cam;
    this.frustum = frustum;
    this.bodyToCam = bodyToCam;
    this.projScale = projScale;
    const D = Math.hypot(cam[0], cam[1], cam[2]);
    const Rm = this.R - this.params.amp * 1.2;
    this.horizonBase = D > Rm ? Math.sqrt(D * D - Rm * Rm) : 0;
    this.Rm = Rm;
    this.camD = D;
    for (const m of this.visibleList || []) m.visible = false;
    this.visibleList = [];
    for (const r of this.roots) this.select(r);
    this.evict();
    this.pool.pump();
  }

  nodeBounds(node) {
    if (node.data) {
      const c = node.data.center;
      return { x: c[0], y: c[1], z: c[2], r: node.data.radius, top: this.R + node.data.maxH };
    }
    const u = node.unitCenter;
    const pr = node.parent?.data;
    const top = this.R + (pr ? pr.maxH : this.params.amp);
    return { x: u[0] * this.R, y: u[1] * this.R, z: u[2] * this.R, r: this.R * node.arc * 0.75 + this.params.amp, top };
  }

  visible(b) {
    const c = this.cam;
    const dx = b.x - c[0], dy = b.y - c[1], dz = b.z - c[2];
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    // horizon
    if (this.camD > this.Rm) {
      const topR = Math.max(b.top, this.Rm + 1);
      const maxVis = this.horizonBase + Math.sqrt(topR * topR - this.Rm * this.Rm);
      if (dist - b.r > maxVis) return { vis: false, dist };
    }
    // frustum (in camera space)
    const p = this.bodyToCam(dx, dy, dz);
    for (const pl of this.frustum.planes) {
      if (pl.normal.x * p[0] + pl.normal.y * p[1] + pl.normal.z * p[2] + pl.constant < -b.r) return { vis: false, dist };
    }
    return { vis: true, dist };
  }

  select(node) {
    const b = this.nodeBounds(node);
    const { vis, dist } = this.visible(b);
    node.lastUsed = this.frame;
    if (!vis) {
      if (!node.data && node.level === 0) this.requestNode(node, 1e8);
      return false;
    }
    const d = Math.max(dist - b.r * 0.5, 1);
    const err = ((this.R * node.arc) / PATCH_N / d) * this.projScale;
    const wantSplit = err > this.threshold && node.level < this.maxLevel;
    if (wantSplit) {
      if (!node.children) {
        const L = node.level + 1, x = node.ix * 2, y = node.iy * 2;
        node.children = [new Node(node.face, L, x, y, node), new Node(node.face, L, x + 1, y, node), new Node(node.face, L, x, y + 1, node), new Node(node.face, L, x + 1, y + 1, node)];
      }
      let ready = true;
      for (const ch of node.children) {
        if (!ch.data) {
          ready = false;
          this.requestNode(ch, err);
        }
      }
      if (ready) {
        for (const ch of node.children) this.select(ch);
        return true;
      }
    }
    if (node.data) {
      node.mesh.visible = true;
      this.visibleList.push(node.mesh);
      this.drawn++;
    } else {
      this.requestNode(node, err + 1e6);
    }
    return true;
  }

  evict() {
    if (this.loaded <= this.budget) return;
    const list = [];
    const walk = (n) => {
      if (n.data && n.level > 0 && this.frame - n.lastUsed > 30) list.push(n);
      if (n.children) for (const c of n.children) walk(c);
    };
    for (const r of this.roots) walk(r);
    list.sort((a, b) => a.lastUsed - b.lastUsed);
    let i = 0;
    while (this.loaded > this.budget * 0.8 && i < list.length) {
      this.freeNode(list[i++]);
    }
    // prune empty subtrees
    const prune = (n) => {
      if (!n.children) return !n.data && !n.pending;
      let empty = true;
      for (const c of n.children) if (!prune(c)) empty = false;
      if (empty && this.frame - n.lastUsed > 120) n.children = null;
      return empty && !n.data && !n.pending;
    };
    for (const r of this.roots) prune(r);
  }

  freeNode(n) {
    if (n.mesh) {
      this.group.remove(n.mesh);
      n.mesh.geometry.dispose();
      n.mesh = null;
    }
    if (n.data) this.loaded--;
    n.data = null;
  }

  dispose() {
    this.disposed = true;
    this.pool.drop(this.planetKey);
    const walk = (n) => { this.freeNode(n); if (n.children) n.children.forEach(walk); };
    this.roots.forEach(walk);
  }

  // Full-detail ground height under a body-fixed direction.
  heightAt(x, y, z) {
    const l = Math.hypot(x, y, z);
    return this.gen.height(x / l, y / l, z / l);
  }
}
