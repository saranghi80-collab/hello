// Instanced grass tufts and flowers with wind sway and player push, chunked for culling.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { rng } from '../core/math.js';
import { shared } from './materials.js';

export const foliageUniforms = { uPlayer: { value: new THREE.Vector3(0, -999, 0) } };

function bladeGeometry(seed = 3) {
  const r = rng(seed);
  const geos = [];
  for (let b = 0; b < 5; b++) {
    const h = 0.38 + r() * 0.32, w = 0.07 + r() * 0.04;
    const segs = 2;
    const pos = [], uv = [], col = [], idx = [];
    const lean = (r() - 0.5) * 0.5;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const y = t * h;
      const ww = w * (1 - t * 0.9);
      const off = lean * t * t * h;
      pos.push(-ww, y, off, ww, y, off);
      uv.push(0, t, 1, t);
      const c0 = 0.72 + 0.28 * t;
      col.push(c0, c0, c0, c0, c0, c0);
    }
    for (let i = 0; i < segs; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.rotateY(r() * Math.PI);
    g.translate((r() - 0.5) * 0.35, 0, (r() - 0.5) * 0.35);
    geos.push(g);
  }
  const m = mergeGeometries(geos);
  const n = m.attributes.position.count;
  const nor = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) nor[i * 3 + 1] = 1;
  m.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  return m;
}

function flowerGeometry() {
  const parts = [];
  const stem = new THREE.CylinderGeometry(0.015, 0.02, 0.4, 5, 1, true);
  stem.translate(0, 0.2, 0);
  parts.push([stem, [0.35, 0.65, 0.25]]);
  for (let i = 0; i < 5; i++) {
    const p = new THREE.SphereGeometry(0.075, 8, 6);
    p.scale(1, 0.35, 0.6);
    const a = (i / 5) * Math.PI * 2;
    p.translate(Math.cos(a) * 0.075, 0.41, Math.sin(a) * 0.075);
    parts.push([p, [1, 1, 1]]);
  }
  const c = new THREE.SphereGeometry(0.05, 8, 6);
  c.scale(1, 0.6, 1);
  c.translate(0, 0.43, 0);
  parts.push([c, [1.0, 0.85, 0.2]]);
  const geos = parts.map(([g, color]) => {
    g = g.index ? g : g;
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = color[0]; col[i * 3 + 1] = color[1]; col[i * 3 + 2] = color[2]; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const uvs = new Float32Array(n * 2);
    const p = g.attributes.position;
    for (let i = 0; i < n; i++) uvs[i * 2 + 1] = Math.min(1, p.getY(i) / 0.45);
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    return g;
  });
  return mergeGeometries(geos);
}

function windMaterial(opts = {}) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, side: THREE.DoubleSide, ...opts });
  m.onBeforeCompile = (s) => {
    s.uniforms.uTime = shared.time;
    s.uniforms.uPlayer = foliageUniforms.uPlayer;
    s.vertexShader = 'uniform float uTime;\nuniform vec3 uPlayer;\n' + s.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vec4 gwp = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      float sway = sin(uTime * 1.7 + gwp.x * 0.27 + gwp.z * 0.21) * 0.6 + sin(uTime * 3.1 + gwp.x * 0.8 - gwp.z * 0.6) * 0.25;
      float k = uv.y * uv.y;
      transformed.x += sway * 0.12 * k;
      transformed.z += sway * 0.05 * k;
      vec3 toP = gwp.xyz - uPlayer;
      float pd = length(toP.xz);
      if (pd < 1.1 && abs(toP.y) < 1.5) {
        vec3 push = vec3(toP.x, 0.0, toP.z) / max(pd, 0.001) * (1.1 - pd) * 0.6 * k;
        mat3 im = mat3(instanceMatrix);
        transformed += transpose(im) * push / max(dot(im[0], im[0]), 0.01);
        transformed.y -= (1.1 - pd) * 0.25 * k;
      }`);
  };
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (s, r) => {
    prev(s, r);
    // blades use upward normals on both sides: don't flip them for back faces
    s.fragmentShader = s.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\nnormal = normalize(vNormal);');
  };
  m.customProgramCacheKey = () => 'wind';
  return m;
}

export class Foliage {
  constructor(parent, chunk = 32) {
    this.parent = parent;
    this.chunk = chunk;
    this.chunks = [];
    this.grassGeo = bladeGeometry();
    this.flowerGeo = flowerGeometry();
    this.grassMat = windMaterial();
    this.flowerMat = windMaterial({ roughness: 0.7 });
    this.pending = new Map();
    this.viewDist = 85;
  }
  // items: {x,y,z, rot, scale, color}
  addGrass(x, y, z, scale, color, rot) { this._add('g', x, y, z, scale, color, rot); }
  addFlower(x, y, z, scale, color, rot) { this._add('f', x, y, z, scale, color, rot); }
  _add(kind, x, y, z, scale, color, rot) {
    const key = kind + Math.floor(x / this.chunk) + ',' + Math.floor(z / this.chunk);
    let arr = this.pending.get(key);
    if (!arr) this.pending.set(key, (arr = []));
    arr.push({ x, y, z, scale, color, rot });
  }
  build() {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
    const up = new THREE.Vector3(0, 1, 0);
    for (const [key, items] of this.pending) {
      const isFlower = key[0] === 'f';
      const mesh = new THREE.InstancedMesh(isFlower ? this.flowerGeo : this.grassGeo, isFlower ? this.flowerMat : this.grassMat, items.length);
      let cx = 0, cz = 0;
      items.forEach((it, i) => {
        q.setFromAxisAngle(up, it.rot);
        s.setScalar(it.scale);
        p.set(it.x, it.y, it.z);
        m.compose(p, q, s);
        mesh.setMatrixAt(i, m);
        c.set(it.color);
        mesh.setColorAt(i, c);
        cx += it.x; cz += it.z;
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.computeBoundingSphere();
      mesh.receiveShadow = true;
      mesh.castShadow = false;
      this.parent.add(mesh);
      this.chunks.push({ mesh, x: cx / items.length, z: cz / items.length });
    }
    this.pending.clear();
  }
  update(camera) {
    const vd2 = this.viewDist * this.viewDist;
    for (const ch of this.chunks) {
      const dx = ch.x - camera.position.x, dz = ch.z - camera.position.z;
      ch.mesh.visible = dx * dx + dz * dz < vd2;
    }
  }
  dispose() {
    for (const ch of this.chunks) { ch.mesh.removeFromParent(); ch.mesh.dispose(); }
    this.chunks = [];
  }
}
