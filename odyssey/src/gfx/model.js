// Helpers for building low-draw-call procedural models: geometry pieces are
// transformed and merged per (group, material) bucket.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const matCache = new Map();
export function mat(color, opts = {}) {
  const k = JSON.stringify([color, opts]);
  let m = matCache.get(k);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0, ...opts });
    matCache.set(k, m);
  }
  return m;
}

const tmpM = new THREE.Matrix4();
const tmpQ = new THREE.Quaternion();
const tmpE = new THREE.Euler();
const tmpS = new THREE.Vector3();
const tmpP = new THREE.Vector3();

// Normalize a geometry to have position/normal/uv, non-indexed or indexed consistently.
function prep(geo) {
  if (!geo.attributes.uv) {
    const n = geo.attributes.position.count;
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  }
  if (!geo.attributes.normal) geo.computeVertexNormals();
  for (const name of Object.keys(geo.attributes)) {
    if (!['position', 'normal', 'uv', 'color'].includes(name)) geo.deleteAttribute(name);
  }
  if (!geo.index) {
    const n = geo.attributes.position.count;
    const idx = new (n > 65535 ? Uint32Array : Uint16Array)(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  return geo;
}

export function xform(geo, { p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1], order = 'XYZ' } = {}) {
  const g = geo.clone();
  tmpE.set(r[0], r[1], r[2], order);
  tmpQ.setFromEuler(tmpE);
  tmpS.set(...(typeof s === 'number' ? [s, s, s] : s));
  tmpP.set(...p);
  tmpM.compose(tmpP, tmpQ, tmpS);
  g.applyMatrix4(tmpM);
  return g;
}

const vcMats = new Map();
function vertexColorMaterial(kind) {
  if (!vcMats.has(kind)) {
    vcMats.set(kind, kind === 'gloss'
      ? new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.32, metalness: 0.2 })
      : new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.02 }));
  }
  return vcMats.get(kind);
}

export class ModelBuilder {
  constructor() { this.buckets = new Map(); }
  add(group, geo, material, t = {}) {
    const key = group.uuid + '|' + material.uuid;
    let b = this.buckets.get(key);
    if (!b) this.buckets.set(key, (b = { group, material, geos: [] }));
    b.geos.push(prep(xform(geo, t)));
    return this;
  }
  // merge: bake each part's material color into vertex colors so a whole group is 1-2 draw calls.
  build({ castShadow = true, receiveShadow = false, merge = false } = {}) {
    const meshes = [];
    if (merge) {
      const groups = new Map();
      for (const b of this.buckets.values()) {
        const m = b.material;
        const special = m.transparent || (m.emissive && m.emissiveIntensity > 0.05 && m.emissive.getHex() !== 0) || m.map || m.side === THREE.DoubleSide;
        if (special) { groups.set(b.group.uuid + b.material.uuid, { group: b.group, material: b.material, geos: b.geos }); continue; }
        const kind = m.roughness < 0.4 || m.metalness > 0.4 ? 'gloss' : 'matte';
        const k = b.group.uuid + kind;
        let g = groups.get(k);
        if (!g) groups.set(k, (g = { group: b.group, material: vertexColorMaterial(kind), geos: [] }));
        for (const geo of b.geos) {
          const n = geo.attributes.position.count;
          const col = new Float32Array(n * 3);
          for (let i = 0; i < n; i++) { col[i * 3] = m.color.r; col[i * 3 + 1] = m.color.g; col[i * 3 + 2] = m.color.b; }
          geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
          g.geos.push(geo);
        }
      }
      for (const g of groups.values()) {
        if (g.material.vertexColors) {
          for (const geo of g.geos) if (!geo.attributes.color) {
            const n = geo.attributes.position.count;
            geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
          }
        } else for (const geo of g.geos) if (geo.attributes.color) geo.deleteAttribute('color');
        const merged = g.geos.length === 1 ? g.geos[0] : mergeGeometries(g.geos, false);
        const mesh = new THREE.Mesh(merged, g.material);
        mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
        g.group.add(mesh);
        meshes.push(mesh);
      }
      this.buckets.clear();
      return meshes;
    }
    for (const b of this.buckets.values()) {
      const merged = b.geos.length === 1 ? b.geos[0] : mergeGeometries(b.geos, false);
      const m = new THREE.Mesh(merged, b.material);
      m.castShadow = castShadow;
      m.receiveShadow = receiveShadow;
      b.group.add(m);
      meshes.push(m);
    }
    this.buckets.clear();
    return meshes;
  }
}

// Bake a set of [geo, transform, color] into one vertex-colored geometry.
export function bakeColored(parts) {
  const geos = [];
  const c = new THREE.Color();
  for (const [geo, t, color] of parts) {
    const g = prep(xform(geo, t));
    c.set(color);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geos.push(g);
  }
  return mergeGeometries(geos, false);
}

// Push vertices of a flat decal outward onto an ellipsoid surface (for curved emblems).
export function wrapOnEllipsoid(geo, center, radii, offset = 0.004) {
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).sub(center);
    const sx = v.x / radii.x, sy = v.y / radii.y, sz = v.z / radii.z;
    const len = Math.sqrt(sx * sx + sy * sy + sz * sz) || 1;
    v.multiplyScalar(1 / len);
    v.multiplyScalar(1 + offset);
    v.add(center);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export const G = {
  sphere: (r = 1, w = 20, h = 14) => new THREE.SphereGeometry(r, w, h),
  box: (x = 1, y = 1, z = 1) => new THREE.BoxGeometry(x, y, z),
  cyl: (rt = 1, rb = 1, h = 1, seg = 16, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open),
  capsule: (r = 0.5, len = 1, cap = 6, rad = 12) => new THREE.CapsuleGeometry(r, len, cap, rad),
  cone: (r = 1, h = 1, seg = 16) => new THREE.ConeGeometry(r, h, seg),
  torus: (r = 1, t = 0.2, rs = 10, ts = 24, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, ts, arc),
  ico: (r = 1, d = 1) => new THREE.IcosahedronGeometry(r, d),
  dodeca: (r = 1, d = 0) => new THREE.DodecahedronGeometry(r, d),
};

// Rounded box (good-looking blocks and platforms).
export function roundedBox(w, h, d, r = 0.1, seg = 3) {
  const geo = new THREE.BoxGeometry(w, h, d, seg * 2, seg * 2, seg * 2);
  const pos = geo.attributes.position, nor = geo.attributes.normal;
  const v = new THREE.Vector3();
  const hw = w / 2 - r, hh = h / 2 - r, hd = d / 2 - r;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const cx = Math.max(-hw, Math.min(hw, v.x));
    const cy = Math.max(-hh, Math.min(hh, v.y));
    const cz = Math.max(-hd, Math.min(hd, v.z));
    const dx = v.x - cx, dy = v.y - cy, dz = v.z - cz;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (len > 1e-6) {
      pos.setXYZ(i, cx + (dx / len) * r, cy + (dy / len) * r, cz + (dz / len) * r);
      nor.setXYZ(i, dx / len, dy / len, dz / len);
    }
  }
  return geo;
}
