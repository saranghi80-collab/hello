// Mesh factories for collectibles and props (moons, coins, hearts, blocks, flags, pipes, springs, the Odyssey).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ModelBuilder, G, mat, roundedBox } from './model.js';
import { blockTexture, radialGlowTexture, emblemTexture, makeCanvas } from './textures.js';
import { shared } from './materials.js';

// ---------------------------------------------------------------- moon
let crescentGeo = null;
function crescentShape(R = 0.62, r = 0.5, ox = 0.3, oy = 0.12) {
  // intersection points of circle(0,R) and circle((ox,oy), r)
  const d = Math.hypot(ox, oy);
  const a = (R * R - r * r + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, R * R - a * a));
  const mx = (a * ox) / d, my = (a * oy) / d;
  const p1 = [mx + (h * oy) / d, my - (h * ox) / d];
  const p2 = [mx - (h * oy) / d, my + (h * ox) / d];
  const ang = (p, cx, cy) => Math.atan2(p[1] - cy, p[0] - cx);
  const s = new THREE.Shape();
  const a1 = ang(p1, 0, 0), a2 = ang(p2, 0, 0);
  s.moveTo(p1[0], p1[1]);
  // outer arc from p1 the long way to p2 (clockwise through the left side)
  s.absarc(0, 0, R, a1, a2, true);
  const b2 = ang(p2, ox, oy), b1 = ang(p1, ox, oy);
  s.absarc(ox, oy, r, b2, b1, false);
  return s;
}
export function moonGeometry() {
  if (crescentGeo) return crescentGeo;
  const shape = crescentShape();
  const g = new THREE.ExtrudeGeometry(shape, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.13, bevelSize: 0.09, bevelSegments: 5, curveSegments: 40 });
  g.center();
  g.rotateZ(0.35);
  g.computeVertexNormals();
  crescentGeo = g;
  return g;
}

export function createMoonMesh(color = '#ffd43b', { ghost = false, multi = false, scale = 1 } = {}) {
  const group = new THREE.Group();
  const c = new THREE.Color(color);
  const m = ghost
    ? new THREE.MeshStandardMaterial({ color: c, transparent: true, opacity: 0.38, roughness: 0.3, metalness: 0.2, emissive: c, emissiveIntensity: 0.25, depthWrite: false })
    : new THREE.MeshStandardMaterial({ color: c, roughness: 0.22, metalness: 0.35, emissive: c, emissiveIntensity: 1.6 });
  const mesh = new THREE.Mesh(moonGeometry(), m);
  mesh.castShadow = !ghost;
  group.add(mesh);
  if (multi) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.07, 10, 48), m);
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);
    group.userData.ring = ring;
  }
  if (!ghost) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialGlowTexture('#ffffff'), color: c, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(2.6 * (multi ? 1.6 : 1));
    group.add(glow);
    group.userData.glow = glow;
  }
  group.userData.mesh = mesh;
  group.scale.setScalar(scale * (multi ? 1.5 : 1));
  return group;
}

// ---------------------------------------------------------------- coins (instanced, synced spin in shader)
function spinMaterial(params, speed = 3.4) {
  const m = new THREE.MeshStandardMaterial(params);
  m.onBeforeCompile = (s) => {
    s.uniforms.uTime = shared.time;
    s.vertexShader = 'uniform float uTime;\n' + s.vertexShader
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        float spA = uTime * ${speed.toFixed(2)};
        float spC = cos(spA), spS = sin(spA);
        mat3 spinM = mat3(spC, 0.0, -spS, 0.0, 1.0, 0.0, spS, 0.0, spC);
        objectNormal = spinM * objectNormal;`)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed = spinM * transformed;');
  };
  m.customProgramCacheKey = () => 'spin' + speed;
  return m;
}

export function coinGeometry() {
  const disc = new THREE.CylinderGeometry(0.46, 0.46, 0.11, 28);
  disc.rotateX(Math.PI / 2);
  const rim = new THREE.TorusGeometry(0.44, 0.045, 8, 28);
  const slot1 = roundedBox(0.13, 0.4, 0.16, 0.05, 1);
  const parts = [disc, rim, slot1].map((g) => {
    const geo = g.index ? g : g;
    for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(k)) geo.deleteAttribute(k);
    return geo.index ? geo.toNonIndexed() : geo;
  });
  return mergeGeometries(parts);
}

export function coinMaterial() {
  return spinMaterial({ color: '#ffc828', roughness: 0.25, metalness: 0.85, emissive: '#7a4a00', emissiveIntensity: 0.35 });
}

export function purpleCoinGeometry(shape = 'leaf') {
  const s = new THREE.Shape();
  const N = shape === 'star' ? 10 : shape === 'hex' ? 6 : 8;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + Math.PI / 2;
    const r = shape === 'star' ? (i % 2 ? 0.26 : 0.5) : 0.48;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r); else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2 });
  g.center();
  return g.toNonIndexed();
}
export function purpleCoinMaterial(color = '#b25cff') {
  return spinMaterial({ color, roughness: 0.3, metalness: 0.6, emissive: color, emissiveIntensity: 0.35 }, 2.6);
}

// ---------------------------------------------------------------- hearts
export function heartGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.45);
  s.bezierCurveTo(0.55, -0.05, 0.55, 0.45, 0.24, 0.45);
  s.bezierCurveTo(0.08, 0.45, 0, 0.32, 0, 0.22);
  s.bezierCurveTo(0, 0.32, -0.08, 0.45, -0.24, 0.45);
  s.bezierCurveTo(-0.55, 0.45, -0.55, -0.05, 0, -0.45);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.07, bevelSegments: 4 });
  g.center();
  return g;
}

// ---------------------------------------------------------------- blocks
const blockMats = {};
export function blockMaterial(kind) {
  if (!blockMats[kind]) {
    blockMats[kind] = new THREE.MeshStandardMaterial({ map: blockTexture(kind), roughness: kind === 'question' ? 0.35 : 0.8, metalness: kind === 'question' ? 0.15 : 0, emissive: kind === 'question' ? '#3a2400' : '#000000', emissiveIntensity: 0.3 });
  }
  return blockMats[kind];
}
let blockGeo = null;
export function blockGeometry() {
  if (!blockGeo) blockGeo = roundedBox(1.5, 1.5, 1.5, 0.08, 2);
  return blockGeo;
}

// ---------------------------------------------------------------- checkpoint flag
export function flagTexture(active) {
  const c = makeCanvas(128, 96);
  const g = c.getContext('2d');
  g.fillStyle = active ? '#e0202a' : '#5b4a7a';
  g.fillRect(0, 0, 128, 96);
  g.fillStyle = active ? '#b01019' : '#463862';
  g.fillRect(0, 84, 128, 12);
  if (active) {
    g.fillStyle = '#fff'; g.beginPath(); g.arc(64, 44, 30, 0, 7); g.fill();
    g.fillStyle = '#e0202a';
    g.font = 'bold 40px Arial Black, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('M', 64, 46);
  } else {
    // stylised spiked shell emblem
    g.fillStyle = '#f0d36a'; g.beginPath(); g.arc(64, 46, 26, 0, 7); g.fill();
    g.fillStyle = '#5b4a7a';
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; g.beginPath(); g.arc(64 + Math.cos(a) * 14, 46 + Math.sin(a) * 14, 5, 0, 7); g.fill(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createFlag() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  B.add(g, G.cyl(0.07, 0.07, 3.6, 10), mat('#d8d8e0', { roughness: 0.3, metalness: 0.7 }), { p: [0, 1.8, 0] });
  B.add(g, G.sphere(0.16, 12, 10), mat('#ffd23a', { roughness: 0.3, metalness: 0.6 }), { p: [0, 3.65, 0] });
  B.add(g, G.cyl(0.45, 0.55, 0.25, 16), mat('#6f6f80', { roughness: 0.6 }), { p: [0, 0.12, 0] });
  B.build();
  const cloth = new THREE.PlaneGeometry(1.4, 1.0, 10, 4);
  cloth.translate(0.72, 0, 0);
  const flagMat = new THREE.MeshStandardMaterial({ map: flagTexture(false), side: THREE.DoubleSide, roughness: 0.8 });
  flagMat.onBeforeCompile = (s) => {
    s.uniforms.uTime = shared.time;
    s.vertexShader = 'uniform float uTime;\n' + s.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float fw = position.x / 1.4;
      transformed.z += sin(uTime * 5.0 - position.x * 3.5) * 0.12 * fw;
      transformed.y += sin(uTime * 3.0 - position.x * 2.0) * 0.04 * fw;`);
  };
  flagMat.customProgramCacheKey = () => 'flagwave';
  const flag = new THREE.Mesh(cloth, flagMat);
  flag.position.set(0.05, 3.0, 0);
  flag.castShadow = true;
  g.add(flag);
  g.userData.flag = flag;
  return g;
}

// ---------------------------------------------------------------- pipe & spring
export function createPipe(h = 2, color = '#2fb84a') {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const m = mat(color, { roughness: 0.35, metalness: 0.05 });
  const dark = mat('#0b2a10', { roughness: 0.9 });
  B.add(g, G.cyl(0.95, 0.95, h - 0.6, 24), m, { p: [0, (h - 0.6) / 2, 0] });
  B.add(g, G.cyl(1.15, 1.15, 0.6, 24), m, { p: [0, h - 0.3, 0] });
  B.add(g, G.cyl(0.92, 0.92, 0.02, 24), dark, { p: [0, h + 0.005, 0] });
  // highlight stripe
  B.add(g, G.box(0.12, h - 0.7, 0.05), mat('#9cf0a8', { roughness: 0.3 }), { p: [-0.55, (h - 0.6) / 2, 0.76], r: [0, -0.6, 0] });
  B.build();
  return g;
}

export function createSpring() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const coil = new THREE.Group(); g.add(coil);
  const top = new THREE.Group(); g.add(top);
  B.add(g, G.cyl(0.85, 0.9, 0.2, 20), mat('#e0202a', { roughness: 0.4 }), { p: [0, 0.1, 0] });
  for (let i = 0; i < 4; i++) B.add(coil, G.torus(0.55, 0.07, 8, 20), mat('#cfd3dc', { roughness: 0.25, metalness: 0.9 }), { p: [0, 0.25 + i * 0.22, 0], r: [Math.PI / 2, 0, 0] });
  B.add(top, G.cyl(0.85, 0.85, 0.22, 20), mat('#ffd23a', { roughness: 0.35 }), { p: [0, 0, 0] });
  B.build();
  top.position.y = 1.1;
  g.userData.coil = coil; g.userData.top = top;
  return g;
}

// ---------------------------------------------------------------- the Odyssey
export function createOdyssey() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const wood = mat('#9a5a2c', { roughness: 0.7 });
  const woodDark = mat('#6b3b1a', { roughness: 0.8 });
  const red = mat('#e0202a', { roughness: 0.45 });
  const gold = mat('#ffcf3a', { roughness: 0.3, metalness: 0.7 });
  const white = mat('#f4f1ea', { roughness: 0.6 });
  // hull
  const hull = new THREE.SphereGeometry(1, 28, 14, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  B.add(g, hull, wood, { p: [0, 1.8, 0], s: [2.6, 1.6, 5.2] });
  B.add(g, G.cyl(1, 1, 0.3, 28), woodDark, { p: [0, 1.95, 0], s: [2.7, 1, 5.3] });
  B.add(g, G.cyl(1, 1, 0.08, 28), gold, { p: [0, 2.12, 0], s: [2.72, 1, 5.32] });
  // deck house
  B.add(g, roundedBox(2.6, 1.4, 3.0, 0.2), white, { p: [0, 2.8, -0.6] });
  B.add(g, roundedBox(2.8, 0.25, 3.2, 0.1), red, { p: [0, 3.55, -0.6] });
  // bow figure: cap emblem
  B.add(g, G.sphere(0.55, 16, 12), gold, { p: [0, 2.4, 5.0], s: [1, 1, 0.5] });
  // mast holding the balloon
  B.add(g, G.cyl(0.18, 0.22, 4.5, 10), woodDark, { p: [0, 5.5, -0.6] });
  // top-hat balloon
  B.add(g, G.cyl(4.0, 4.0, 0.5, 40), red, { p: [0, 7.6, -0.6], s: [1, 1, 1.25] });
  B.add(g, G.cyl(2.6, 2.8, 4.2, 36), red, { p: [0, 10.0, -0.6], s: [1, 1, 1.2] });
  B.add(g, G.cyl(2.82, 2.82, 0.9, 36), gold, { p: [0, 8.4, -0.6], s: [1, 1, 1.2] });
  B.add(g, G.cyl(2.65, 2.6, 0.3, 36), red, { p: [0, 12.2, -0.6], s: [1, 1, 1.2] });
  // eyes on the band (it is a hat after all)
  for (const s of [1, -1]) {
    B.add(g, G.sphere(0.45, 14, 10), white, { p: [s * 0.9, 8.4, 2.6], s: [0.8, 1.2, 0.4] });
    B.add(g, G.sphere(0.2, 10, 8), mat('#111', { roughness: 0.2 }), { p: [s * 0.95, 8.4, 2.75], s: [0.8, 1.2, 0.4] });
  }
  // propellers
  for (const s of [1, -1]) B.add(g, G.cyl(0.25, 0.25, 0.8, 10), gold, { p: [s * 2.5, 2.3, -3.5], r: [Math.PI / 2, 0, 0] });
  // anchor rope
  B.add(g, G.cyl(0.05, 0.05, 2.0, 6), mat('#d8c8a0'), { p: [2.3, 1.2, 3.0] });
  B.add(g, G.torus(0.35, 0.08, 8, 16), mat('#7a7a88', { metalness: 0.8, roughness: 0.3 }), { p: [2.3, 0.2, 3.0] });
  B.build();
  // glowing "fuel" globe on deck
  const globe = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 14), new THREE.MeshStandardMaterial({ color: '#ffe680', emissive: '#ffc800', emissiveIntensity: 0.4, roughness: 0.2 }));
  globe.position.set(0, 4.1, -0.6);
  g.add(globe);
  g.userData.globe = globe;
  return g;
}

export function glowSprite(color = '#ffffff', size = 2, opacity = 0.6) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialGlowTexture('#ffffff'), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size);
  return s;
}

export { emblemTexture };
