// A loaded kingdom: physics world, merged static scenery, entities, water, foliage.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PhysicsWorld } from '../physics/world.js';
import { BoxCollider, CylinderCollider, RampCollider, HeightfieldCollider, SphereCollider } from '../physics/colliders.js';
import { levelMaterial, shared } from '../gfx/materials.js';
import { Foliage } from '../gfx/foliage.js';
import { createWaterMaterial, makeHeightTexture, attachHeightfield, createFallMaterial } from '../gfx/water.js';
import { roundedBox, xform } from '../gfx/model.js';
import { rng, clamp, lerp, smoothstep } from '../core/math.js';

const CHUNK = 48;
const _c = new THREE.Color();

function prepGeo(geo) {
  if (geo.index === null) {
    const n = geo.attributes.position.count;
    const idx = new (n > 65535 ? Uint32Array : Uint16Array)(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  if (!geo.attributes.normal) geo.computeVertexNormals();
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
  for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) geo.deleteAttribute(k);
  return geo;
}

// Color a geometry: either a single color or a function (x,y,z,nx,ny,nz) => color
export function paint(geo, color) {
  const pos = geo.attributes.position, nor = geo.attributes.normal;
  const n = pos.count;
  const col = new Float32Array(n * 3);
  if (typeof color === 'function') {
    for (let i = 0; i < n; i++) {
      _c.set(color(pos.getX(i), pos.getY(i), pos.getZ(i), nor.getX(i), nor.getY(i), nor.getZ(i)));
      col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b;
    }
  } else {
    _c.set(color);
    for (let i = 0; i < n; i++) { col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

// top / side coloring for platforms (grass caps etc.)
export function capColor(top, side, bottom = side, band = 0.35, topY = 0) {
  return (x, y, z, nx, ny) => (ny > 0.55 && y > topY - band ? top : y > topY - band && ny > -0.2 ? top : ny < -0.6 ? bottom : side);
}

export class Level {
  constructor(game, def) {
    this.game = game;
    this.def = def;
    this.id = def.id;
    this.world = new PhysicsWorld();
    this.root = new THREE.Group();
    this.root.name = 'level-' + def.id;
    game.scene.add(this.root);
    this.entities = [];
    this.waters = [];
    this.updaters = [];
    this.killY = def.killY ?? -40;
    this.buckets = new Map();
    this.foliage = new Foliage(this.root);
    this.checkpoints = [];
    this.moonDefs = [];
    this.purple = [];
    this.time = 0;
    this.spawn = { x: 0, y: 0, z: 0, facing: 0 };
    this.hf = null;
    this.materials = [];
    this.rand = rng(def.seed ?? 42);
    this.flags = {};
    this.triggers = [];
    this.bounds = def.bounds || { minX: -150, maxX: 150, minZ: -150, maxZ: 150 };
  }

  // ------------------------------------------------------------------ statics
  addStatic(geo, color, kind = 'std', t = null, opts = {}) {
    let g = t ? xform(geo, t) : geo.clone();
    g = prepGeo(g);
    paint(g, color);
    g.computeBoundingBox();
    const bb = g.boundingBox;
    const cx = (bb.min.x + bb.max.x) / 2, cz = (bb.min.z + bb.max.z) / 2;
    const key = kind + '|' + (opts.noShadow ? 'n' : 's') + '|' + Math.floor(cx / CHUNK) + ',' + Math.floor(cz / CHUNK);
    let b = this.buckets.get(key);
    if (!b) this.buckets.set(key, (b = { kind, geos: [], noShadow: !!opts.noShadow }));
    b.geos.push(g);
    return g;
  }

  finalize() {
    for (const b of this.buckets.values()) {
      const merged = mergeGeometries(b.geos, false);
      if (!merged) continue;
      const m = new THREE.Mesh(merged, levelMaterial(b.kind));
      m.castShadow = !b.noShadow;
      m.receiveShadow = true;
      m.matrixAutoUpdate = false;
      this.root.add(m);
    }
    this.buckets.clear();
    this.foliage.build();
  }

  addCollider(c) { this.world.add(c); return c; }

  // ------------------------------------------------------------------ builders
  // Box with its TOP at yTop.
  box(x, yTop, z, w, h, d, color = '#c8b48a', opts = {}) {
    const rot = opts.rot || 0;
    const cy = yTop - h / 2;
    if (opts.visible !== false) {
      const r = opts.round ?? Math.min(0.25, w * 0.1, h * 0.2, d * 0.1);
      const geo = r > 0.01 ? roundedBox(w, h, d, r, 2) : new THREE.BoxGeometry(w, h, d);
      const col = opts.top ? capColor(opts.top, color, opts.bottom || color, opts.band ?? 0.35, h / 2) : color;
      this.addStatic(geo, col, opts.kind || 'std', { p: [x, cy, z], r: [0, rot, 0] }, opts);
    }
    if (opts.collide !== false) {
      const c = new BoxCollider(x, cy, z, w / 2, h / 2, d / 2, rot);
      Object.assign(c, opts.col || {});
      if (opts.surface) c.surface = opts.surface;
      if (opts.oneWay) c.oneWay = true;
      if (opts.cam === false) c.cam = false;
      this.world.add(c);
      return c;
    }
    return null;
  }

  // Grass-topped (or custom-topped) platform: top at yTop
  platform(x, yTop, z, w, d, opts = {}) {
    const h = opts.h ?? 2;
    return this.box(x, yTop, z, w, h, d, opts.side || '#a5743f', { top: opts.top || '#6fc043', band: opts.band ?? 0.3, round: opts.round ?? 0.3, ...opts });
  }

  cylinder(x, yBottom, z, r, h, color = '#bbb', opts = {}) {
    if (opts.visible !== false) {
      const seg = opts.seg || Math.max(10, Math.min(32, Math.round(r * 8)));
      const geo = new THREE.CylinderGeometry(opts.rTop ?? r, r, h, seg, 1);
      const col = opts.top ? (px, py, pz, nx, ny) => (ny > 0.5 ? opts.top : py > h / 2 - (opts.band ?? 0.25) ? opts.top : color) : color;
      this.addStatic(geo, col, opts.kind || 'std', { p: [x, yBottom + h / 2, z] }, opts);
    }
    if (opts.collide !== false) {
      const c = new CylinderCollider(x, z, yBottom, yBottom + h, opts.colR ?? r);
      if (opts.surface) c.surface = opts.surface;
      if (opts.cam === false) c.cam = false;
      if (opts.oneWay) c.oneWay = true;
      Object.assign(c, opts.col || {});
      this.world.add(c);
      return c;
    }
    return null;
  }

  // Ramp: center (x,z), width w, length len along its local +z (rotated by rot), from y0 to y1, solid down to yb
  ramp(x, z, w, len, rot, y0, y1, color = '#c8b48a', opts = {}) {
    const yb = opts.yb ?? Math.min(y0, y1) - (opts.thick ?? 1);
    const hz = len / 2, hx = w / 2;
    // build a wedge geometry in local space
    const v = [
      [-hx, yb, -hz], [hx, yb, -hz], [hx, yb, hz], [-hx, yb, hz],
      [-hx, y0, -hz], [hx, y0, -hz], [hx, y1, hz], [-hx, y1, hz],
    ];
    const faces = [[4, 5, 6, 7], [3, 2, 1, 0], [0, 1, 5, 4], [2, 3, 7, 6], [1, 2, 6, 5], [3, 0, 4, 7]];
    const pos = [];
    for (const f of faces) {
      const [a, b, c, d] = f.map((i) => v[i]);
      pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    }
    let geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const col = opts.top ? (px, py, pz, nx, ny) => (ny > 0.5 ? opts.top : color) : color;
    if (opts.visible !== false) this.addStatic(geo, col, opts.kind || 'std', { p: [x, 0, z], r: [0, rot, 0] }, opts);
    const c = new RampCollider(x, z, hx, hz, rot, yb, y0, y1);
    if (opts.surface) c.surface = opts.surface;
    this.world.add(c);
    return c;
  }

  dome(x, y, z, r, color, opts = {}) {
    const geo = new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    this.addStatic(geo, color, opts.kind || 'std', { p: [x, y, z], s: [1, opts.sy ?? 1, 1] });
    if (opts.collide !== false) {
      const c = new SphereCollider(x, y, z, r);
      this.world.add(c);
      return c;
    }
  }

  // Terrain heightfield. opts: {x0,z0,size,cell,height(x,z),color(x,z,h,n),kind}
  terrain(opts) {
    const cell = opts.cell ?? 2;
    const sizeX = opts.sizeX ?? opts.size, sizeZ = opts.sizeZ ?? opts.size;
    const nx = Math.round(sizeX / cell) + 1, nz = Math.round(sizeZ / cell) + 1;
    const x0 = opts.x0 ?? -sizeX / 2, z0 = opts.z0 ?? -sizeZ / 2;
    const H = new Float32Array(nx * nz);
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) H[j * nx + i] = opts.height(x0 + i * cell, z0 + j * cell);
    const hf = new HeightfieldCollider(x0, z0, cell, nx, nz, H);
    if (opts.surface) hf.surface = opts.surface;
    this.world.add(hf);
    this.hf = hf;
    // mesh
    const pos = new Float32Array(nx * nz * 3), col = new Float32Array(nx * nz * 3), nor = new Float32Array(nx * nz * 3);
    const n = { x: 0, y: 1, z: 0 };
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, x = x0 + i * cell, z = z0 + j * cell, h = H[k];
      pos[k * 3] = x; pos[k * 3 + 1] = h; pos[k * 3 + 2] = z;
      // smooth normal from central differences
      const hl = H[j * nx + Math.max(0, i - 1)], hr = H[j * nx + Math.min(nx - 1, i + 1)];
      const hd = H[Math.max(0, j - 1) * nx + i], hu = H[Math.min(nz - 1, j + 1) * nx + i];
      let gx = (hr - hl) / (2 * cell), gz = (hu - hd) / (2 * cell);
      const inv = 1 / Math.sqrt(gx * gx + 1 + gz * gz);
      n.x = -gx * inv; n.y = inv; n.z = -gz * inv;
      nor[k * 3] = n.x; nor[k * 3 + 1] = n.y; nor[k * 3 + 2] = n.z;
      _c.set(opts.color(x, z, h, n));
      col[k * 3] = _c.r; col[k * 3 + 1] = _c.g; col[k * 3 + 2] = _c.b;
    }
    // index in tiles so frustum culling works
    const TILE = 32;
    const posAttr = new THREE.BufferAttribute(pos, 3), norAttr = new THREE.BufferAttribute(nor, 3), colAttr = new THREE.BufferAttribute(col, 3);
    for (let tj = 0; tj < nz - 1; tj += TILE) for (let ti = 0; ti < nx - 1; ti += TILE) {
      const idx = [];
      for (let j = tj; j < Math.min(tj + TILE, nz - 1); j++) for (let i = ti; i < Math.min(ti + TILE, nx - 1); i++) {
        const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
        if (opts.hole && opts.hole(x0 + (i + 0.5) * cell, z0 + (j + 0.5) * cell)) continue;
        idx.push(a, c, b, b, c, d);
      }
      if (!idx.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', posAttr);
      geo.setAttribute('normal', norAttr);
      geo.setAttribute('color', colAttr);
      geo.setIndex(idx);
      // bounds of this tile only (attributes are shared across tiles)
      const box = new THREE.Box3();
      const v = new THREE.Vector3();
      for (let j = tj; j <= Math.min(tj + TILE, nz - 1); j++) for (let i = ti; i <= Math.min(ti + TILE, nx - 1); i++) {
        const k = j * nx + i;
        box.expandByPoint(v.set(pos[k * 3], pos[k * 3 + 1], pos[k * 3 + 2]));
      }
      geo.boundingBox = box;
      geo.boundingSphere = box.getBoundingSphere(new THREE.Sphere());
      const m = new THREE.Mesh(geo, levelMaterial(opts.kind || 'terrain'));
      m.receiveShadow = true;
      m.castShadow = opts.castShadow ?? true;
      m.matrixAutoUpdate = false;
      this.root.add(m);
    }
    this.hfTexture = makeHeightTexture(hf);
    return hf;
  }

  killYAt(x, z) { return this.def.killYAt ? this.def.killYAt(x, z) : this.killY; }

  heightAt(x, z) { return this.hf ? this.hf.heightAt(x, z) : -Infinity; }
  groundAt(x, z, fromY = 500) {
    const f = this.world.groundBelow(x, z, fromY);
    return f ? f.y : -Infinity;
  }

  // Water rectangle or circle. {x,z,w,d} or {x,z,r}; y = surface; bottom
  water(o) {
    const vol = { y: o.y, bottom: o.bottom ?? -1000, lava: !!o.lava, poison: !!o.poison, cold: !!o.cold };
    let geo;
    if (o.r) {
      vol.cx = o.x; vol.cz = o.z; vol.r = o.r;
      geo = new THREE.CircleGeometry(o.r, 48);
    } else {
      vol.minX = o.x - o.w / 2; vol.maxX = o.x + o.w / 2; vol.minZ = o.z - o.d / 2; vol.maxZ = o.z + o.d / 2;
      geo = new THREE.PlaneGeometry(o.w, o.d, Math.min(64, Math.ceil(o.w / 4)), Math.min(64, Math.ceil(o.d / 4)));
    }
    geo.rotateX(-Math.PI / 2);
    const mat = createWaterMaterial({ ...o, lava: o.lava });
    mat.uniforms.uSunDir.value.copy(this.game.sunDir);
    if (o.sky) mat.uniforms.uSky.value.set(o.sky);
    if (this.hf && !o.lava) attachHeightfield(mat, this.hf, this.hfTexture);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(o.x, o.y, o.z);
    mesh.renderOrder = 2;
    mesh.receiveShadow = false;
    this.root.add(mesh);
    vol.mesh = mesh;
    this.waters.push(vol);
    this.materials.push(mat);
    return vol;
  }

  waterAt(x, z, y = 0) {
    let best = -Infinity;
    this.waterVol = null;
    for (const w of this.waters) {
      if (w.lava || w.poison || y < w.bottom) continue;
      if (w.r !== undefined) { const dx = x - w.cx, dz = z - w.cz; if (dx * dx + dz * dz > w.r * w.r) continue; }
      else if (x < w.minX || x > w.maxX || z < w.minZ || z > w.maxZ) continue;
      if (w.y > best) { best = w.y; this.waterVol = w; }
    }
    return best;
  }

  lavaAt(x, z) {
    let best = -Infinity;
    for (const w of this.waters) {
      if (!w.lava && !w.poison) continue;
      if (w.r !== undefined) { const dx = x - w.cx, dz = z - w.cz; if (dx * dx + dz * dz > w.r * w.r) continue; }
      else if (x < w.minX || x > w.maxX || z < w.minZ || z > w.maxZ) continue;
      if (w.y > best) best = w.y;
    }
    return best;
  }

  waterfall(x, yTop, z, w, h, rot = 0, opts = {}) {
    const geo = new THREE.PlaneGeometry(w, h, 1, 8);
    // gentle outward curve at the top
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const t = (p.getY(i) + h / 2) / h; // 0 bottom, 1 top
      p.setZ(i, Math.pow(t, 3) * -1.2 + (1 - t) * 0.6);
    }
    geo.computeVertexNormals();
    const mat = createFallMaterial(opts.a || '#86d6ff', opts.b || '#ffffff', opts.speed ?? 1.8);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, yTop - h / 2, z);
    mesh.rotation.y = rot;
    mesh.renderOrder = 3;
    this.root.add(mesh);
    this.materials.push(mat);
    const fx = this.game.fx;
    let t = 0;
    const bx = x + Math.sin(rot) * 0.6, bz = z + Math.cos(rot) * 0.6;
    this.updaters.push((dt) => {
      t += dt;
      if (t > 0.05 && fx) {
        t = 0;
        const off = (Math.random() - 0.5) * w;
        fx.spawn({ x: bx + Math.cos(rot) * off, y: yTop - h + 0.3, z: bz - Math.sin(rot) * off, vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5) * 2, g: 9, life: 0.8, size: 1.2, size1: 2.2, kind: 0, alpha: 0.5 });
      }
    });
    return mesh;
  }

  // ------------------------------------------------------------------ decor
  tree(x, z, opts = {}) {
    const y = opts.y ?? this.groundAt(x, z);
    const s = opts.scale ?? (0.8 + this.rand() * 0.5);
    const kind = opts.kind || 'round';
    const trunkH = (kind === 'pine' || kind === 'snowpine' ? 2.2 : 3.2) * s;
    const trunkCol = opts.trunk || '#8a5a2b';
    this.addStatic(new THREE.CylinderGeometry(0.22 * s, 0.38 * s, trunkH, 8), trunkCol, 'std', { p: [x, y + trunkH / 2, z] });
    const leaf = opts.leaf || '#4caf3c';
    const leaf2 = opts.leaf2 || '#6cd04a';
    if (kind === 'pine' || kind === 'snowpine') {
      for (let i = 0; i < 3; i++) {
        const r = (2.0 - i * 0.5) * s, h = 2.4 * s;
        const rot = this.rand() * 3;
        this.addStatic(new THREE.ConeGeometry(r, h, 9), i % 2 ? leaf2 : leaf, 'std', { p: [x, y + trunkH + i * 1.25 * s + h / 2 - 0.4, z], r: [0, rot, 0] });
        if (kind === 'snowpine') this.addStatic(new THREE.ConeGeometry(r * 0.72, h * 0.55, 9), '#f4f8ff', 'std', { p: [x, y + trunkH + i * 1.25 * s + h * 0.78 - 0.4, z], r: [0, rot, 0] });
      }
    } else if (kind === 'palm') {
      const bend = this.rand() * Math.PI * 2;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + bend;
        const g = new THREE.SphereGeometry(1, 8, 6);
        this.addStatic(g, i % 2 ? leaf : leaf2, 'std', { p: [x + Math.cos(a) * 1.2 * s, y + trunkH + 0.9 * s, z + Math.sin(a) * 1.2 * s], s: [1.6 * s, 0.18 * s, 0.5 * s], r: [0, -a, -0.35] });
      }
      this.addStatic(new THREE.SphereGeometry(0.35 * s, 8, 6), '#7a4a1e', 'std', { p: [x, y + trunkH + 0.75 * s, z] });
    } else {
      const blobs = opts.blobs ?? 4;
      for (let i = 0; i < blobs; i++) {
        const a = this.rand() * Math.PI * 2, rr = i === 0 ? 0 : 0.9 * s;
        const r = (i === 0 ? 1.7 : 1.15 + this.rand() * 0.35) * s;
        const g = new THREE.IcosahedronGeometry(r, 1);
        this.addStatic(g, i % 2 ? leaf2 : leaf, 'std', { p: [x + Math.cos(a) * rr, y + trunkH + 0.6 * s + (i === 0 ? 0.4 : this.rand() * 0.9) * s, z + Math.sin(a) * rr] });
      }
    }
    if (opts.collide !== false) {
      const c = new CylinderCollider(x, z, y - 1, y + trunkH + (kind === 'pine' || kind === 'snowpine' ? 3 * s : 1.5 * s), 0.38 * s);
      c.cam = false;
      this.world.add(c);
      if (kind === 'round' && opts.canopy !== false) {
        // canopy top is a soft landing spot
        const top = new CylinderCollider(x, z, y + trunkH + 0.3 * s, y + trunkH + 2.4 * s, 1.55 * s);
        top.cam = false;
        top.oneWay = true;
        this.world.add(top);
      }
    }
  }

  rock(x, z, size = 1, color = '#9c9488', opts = {}) {
    const y = opts.y ?? this.groundAt(x, z);
    const g = new THREE.DodecahedronGeometry(size, 1);
    const p = g.attributes.position;
    const r = this.rand;
    const seed = r() * 100;
    for (let i = 0; i < p.count; i++) {
      const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
      const k = 1 + Math.sin(vx * 2.1 + seed) * 0.08 + Math.cos(vz * 1.7 + seed) * 0.08;
      p.setXYZ(i, vx * k, vy * k * (opts.flat ?? 0.75), vz * k);
    }
    g.computeVertexNormals();
    this.addStatic(g, color, 'std', { p: [x, y + size * 0.3 * (opts.flat ?? 0.75), z], r: [0, r() * 6, 0] });
    if (opts.collide !== false && size > 0.6) {
      const c = new CylinderCollider(x, z, y - 1, y + size * (opts.flat ?? 0.75) * 1.0, size * 0.85);
      this.world.add(c);
    }
  }

  // Scatter grass tufts/flowers over terrain where predicate allows.
  scatterFoliage({ count = 6000, flowers = 400, area = null, ok = () => true, grassColor = (x, z) => '#7ccf4f', flowerColors = ['#ffffff', '#ffe14d', '#ff6fa8', '#ff8a3d', '#b48cff'] }) {
    const hf = this.hf;
    if (!hf) return;
    const r = rng(this.def.seed ?? 5);
    const a = area || { minX: hf.minX, maxX: hf.maxX, minZ: hf.minZ, maxZ: hf.maxZ };
    const n = { x: 0, y: 1, z: 0 };
    let placed = 0, tries = 0;
    while (placed < count && tries < count * 4) {
      tries++;
      const x = lerp(a.minX, a.maxX, r()), z = lerp(a.minZ, a.maxZ, r());
      const h = hf.heightAt(x, z, n);
      if (n.y < 0.8 || !ok(x, z, h)) continue;
      if (this.waterAt(x, z, h) > h - 0.1) continue;
      const g = this.world.floor(x, z, h + 0.05, h + 50, 0.01, null);
      if (g && g.y > h + 0.3) continue; // covered by a platform
      this.foliage.addGrass(x, h - 0.02, z, 0.8 + r() * 0.7, grassColor(x, z), r() * 6.28);
      placed++;
    }
    placed = 0; tries = 0;
    while (placed < flowers && tries < flowers * 6) {
      tries++;
      const x = lerp(a.minX, a.maxX, r()), z = lerp(a.minZ, a.maxZ, r());
      const h = hf.heightAt(x, z, n);
      if (n.y < 0.85 || !ok(x, z, h)) continue;
      if (this.waterAt(x, z, h) > h - 0.1) continue;
      // flowers grow in clumps
      const fc = flowerColors[Math.floor(r() * flowerColors.length)];
      for (let k = 0; k < 4; k++) {
        const fx = x + (r() - 0.5) * 2, fz = z + (r() - 0.5) * 2;
        const fh = hf.heightAt(fx, fz);
        this.foliage.addFlower(fx, fh, fz, 0.8 + r() * 0.6, fc, r() * 6.28);
      }
      placed++;
    }
  }

  // ------------------------------------------------------------------ entities
  add(e) { this.entities.push(e); return e; }

  update(dt) {
    this.time += dt;
    shared.time.value += dt;
    this.world.snapshotDynamic();
    for (const u of this.updaters) u(dt, this.time);
    for (const m of this.materials) if (m.uniforms?.uTime) m.uniforms.uTime.value += dt;
    if (this.def.env?.snow && this.game.fx) {
      const cam = this.game.camera.position;
      this._snowAcc = (this._snowAcc || 0) + dt * 70;
      while (this._snowAcc > 1) {
        this._snowAcc--;
        const a = Math.random() * Math.PI * 2, rr = 5 + Math.random() * 30;
        this.game.fx.spawn({ x: cam.x + Math.cos(a) * rr, y: cam.y - 4 + Math.random() * 16, z: cam.z + Math.sin(a) * rr,
          vx: 0.6 + Math.random() * 0.6, vy: -1.6 - Math.random() * 0.8, vz: (Math.random() - 0.5) * 0.6, life: 4, size: 0.1 + Math.random() * 0.06, kind: 2, alpha: 0.85, fadeIn: 0.6 });
      }
    }
    const game = this.game, player = game.player;
    const actor = player.capture || player;
    const ap = actor.pos, ar = actor.radius ?? 0.4, ah = actor.height ?? 1.5;
    const ents = this.entities;
    for (let i = 0; i < ents.length; i++) {
      const e = ents[i];
      if (!e.alive) continue;
      if (e.update) e.update(dt);
      if (!e.alive || !e.onPlayer || player.dead || e === actor) continue;
      const r = ar + e.radius;
      const dx = e.pos.x - ap.x, dz = e.pos.z - ap.z;
      if (dx * dx + dz * dz > r * r) continue;
      if (ap.y > e.pos.y + e.height || ap.y + ah < e.pos.y) continue;
      e.onPlayer(player, actor);
    }
    if (this._removeT === undefined) this._removeT = 0;
    this._removeT += dt;
    if (this._removeT > 1) {
      this._removeT = 0;
      this.entities = this.entities.filter((e) => e.alive || e.keep);
    }
    // triggers (regions)
    for (const t of this.triggers) {
      if (t.done) continue;
      const inside = Math.abs(ap.x - t.x) < t.w / 2 && Math.abs(ap.z - t.z) < t.d / 2 && ap.y > t.y0 && ap.y < t.y1;
      if (inside && !t.inside) { t.inside = true; t.enter?.(); if (t.once) t.done = true; }
      else if (!inside && t.inside) { t.inside = false; t.exit?.(); }
    }
  }

  trigger(x, z, w, d, y0, y1, enter, exit, once = false) {
    const t = { x, z, w, d, y0, y1, enter, exit, once, inside: false };
    this.triggers.push(t);
    return t;
  }

  groundPound(x, y, z, player) {
    for (const e of this.entities) {
      if (!e.alive || !e.onGroundPound) continue;
      const dx = e.pos.x - x, dz = e.pos.z - z;
      const r = (e.gpRadius ?? 1.6) + (e.radius || 0);
      if (dx * dx + dz * dz < r * r && y > e.pos.y - 1.0 && y < e.pos.y + e.height + 1.0) e.onGroundPound(player, x, y, z);
    }
    const g = player.body.ground.c;
    if (g && g.entity && g.entity.onGroundPound && !g.entity._gpHandled) g.entity.onGroundPound(player, x, y, z);
  }

  handleEvents(player) {
    for (const ev of player.events) {
      if (ev.type === 'bonk' && ev.c?.entity?.onBonk) ev.c.entity.onBonk(player);
      if (ev.type === 'land') {
        const c = player.body.ground.c;
        if (c?.entity?.onLand) c.entity.onLand(player);
      }
    }
    player.events.length = 0;
  }

  nearestInteractable(pos, maxD = 2.2) {
    let best = null, bd = maxD * maxD;
    for (const e of this.entities) {
      if (!e.alive || !e.interact) continue;
      const dx = e.pos.x - pos.x, dz = e.pos.z - pos.z, dy = e.pos.y - pos.y;
      const r = (e.interactRadius ?? maxD);
      const d2 = dx * dx + dz * dz;
      if (d2 < Math.min(bd, r * r) && Math.abs(dy) < 2.5) { bd = d2; best = e; }
    }
    return best;
  }

  dispose() {
    for (const e of this.entities) e.dispose?.();
    this.foliage.dispose();
    this.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    for (const m of this.materials) m.dispose?.();
    this.root.removeFromParent();
    this.hfTexture?.dispose();
  }
}
