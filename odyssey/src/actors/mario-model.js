// Procedural Mario: jointed hierarchy built from primitives, merged per joint/material.
import * as THREE from 'three';
import { ModelBuilder, G, mat, wrapOnEllipsoid } from '../gfx/model.js';
import { emblemTexture } from '../gfx/textures.js';

export const PALETTES = {
  classic: { cap: '#e0202a', shirt: '#e0202a', overalls: '#2a4bd7', shoes: '#7a4422', gloves: '#f7f7f7', buttons: '#ffd23a', emblem: '#e0202a' },
  builder: { cap: '#ffc21a', shirt: '#e0202a', overalls: '#2a4bd7', shoes: '#5a3a1c', gloves: '#f7f7f7', buttons: '#ffd23a', emblem: '#e0202a' },
  fire: { cap: '#ffffff', shirt: '#ffffff', overalls: '#e0202a', shoes: '#7a4422', gloves: '#f7f7f7', buttons: '#ffd23a', emblem: '#e0202a' },
  luigi: { cap: '#1fa83c', shirt: '#1fa83c', overalls: '#25329c', shoes: '#6b3d1c', gloves: '#f7f7f7', buttons: '#ffd23a', emblem: '#1fa83c' },
  wario: { cap: '#f5d117', shirt: '#f5d117', overalls: '#7b2fa8', shoes: '#2d8a3e', gloves: '#f7f7f7', buttons: '#ffffff', emblem: '#2d5ad1' },
  gold: { cap: '#e9b52c', shirt: '#e9b52c', overalls: '#b8861b', shoes: '#a07018', gloves: '#fff2c4', buttons: '#fff4c0', emblem: '#e9b52c', metal: true },
  shadow: { cap: '#3b3b46', shirt: '#3b3b46', overalls: '#18181f', shoes: '#101014', gloves: '#d8d8e0', buttons: '#9a9aa8', emblem: '#3b3b46' },
  explorer: { cap: '#c8a36a', shirt: '#f2efe4', overalls: '#7a6142', shoes: '#4e3420', gloves: '#f7f7f7', buttons: '#c8a36a', emblem: '#7a6142' },
};

const SKIN = '#f8c69a', HAIR = '#3d2414';

export function createMario(paletteName = 'classic') {
  const P = PALETTES[paletteName] || PALETTES.classic;
  const metal = P.metal ? { metalness: 0.85, roughness: 0.28 } : {};
  const M = {
    cap: mat(P.cap, { roughness: 0.55, ...metal }),
    shirt: mat(P.shirt, { roughness: 0.75, ...metal }),
    overalls: mat(P.overalls, { roughness: 0.82, ...metal }),
    shoes: mat(P.shoes, { roughness: 0.42, ...metal }),
    gloves: mat(P.gloves, { roughness: 0.6 }),
    buttons: mat(P.buttons, { roughness: 0.3, metalness: 0.4 }),
    skin: mat(SKIN, { roughness: 0.62 }),
    hair: mat(HAIR, { roughness: 0.85 }),
    eyeW: mat('#ffffff', { roughness: 0.25 }),
    iris: mat('#2f74e0', { roughness: 0.2 }),
    pupil: mat('#0d0d12', { roughness: 0.2 }),
  };

  const root = new THREE.Group();
  root.name = 'mario';
  const squash = new THREE.Group(); root.add(squash);
  const spin = new THREE.Group(); spin.position.y = 0.78; squash.add(spin);
  const pelvis = new THREE.Group(); pelvis.position.y = -0.23; spin.add(pelvis);
  const torso = new THREE.Group(); torso.position.y = 0.07; pelvis.add(torso);
  const head = new THREE.Group(); head.position.y = 0.38; torso.add(head);
  const capGroup = new THREE.Group(); head.add(capGroup);
  const hairTop = new THREE.Group(); head.add(hairTop); hairTop.visible = false;

  const mk = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
  const legL = mk(pelvis, 0.1, -0.03, 0), legR = mk(pelvis, -0.1, -0.03, 0);
  const kneeL = mk(legL, 0, -0.22, 0), kneeR = mk(legR, 0, -0.22, 0);
  const footL = mk(kneeL, 0, -0.2, 0), footR = mk(kneeR, 0, -0.2, 0);
  const armL = mk(torso, 0.215, 0.27, 0), armR = mk(torso, -0.215, 0.27, 0);
  const elbowL = mk(armL, 0, -0.17, 0), elbowR = mk(armR, 0, -0.17, 0);
  const handL = mk(elbowL, 0, -0.15, 0), handR = mk(elbowR, 0, -0.15, 0);

  const B = new ModelBuilder();
  // Pelvis / overalls bottom
  B.add(pelvis, G.sphere(0.22, 22, 16), M.overalls, { p: [0, 0.02, 0], s: [1.08, 0.86, 0.96] });
  // Torso
  B.add(torso, G.sphere(0.2, 22, 16), M.shirt, { p: [0, 0.17, -0.005], s: [1.12, 1.0, 0.95] });
  B.add(torso, G.sphere(0.2, 22, 16), M.overalls, { p: [0, 0.075, 0.022], s: [1.04, 0.72, 0.97] });
  for (const s of [1, -1]) {
    B.add(torso, G.box(0.055, 0.2, 0.03), M.overalls, { p: [s * 0.095, 0.2, 0.165], r: [-0.25, 0, s * 0.08] });
    B.add(torso, G.box(0.055, 0.22, 0.03), M.overalls, { p: [s * 0.095, 0.19, -0.175], r: [0.25, 0, s * 0.08] });
    B.add(torso, G.sphere(0.03, 12, 8), M.buttons, { p: [s * 0.095, 0.155, 0.19], s: [1, 1, 0.6] });
  }
  // Legs
  for (const [leg, knee, foot] of [[legL, kneeL, footL], [legR, kneeR, footR]]) {
    B.add(leg, G.capsule(0.088, 0.14, 6, 12), M.overalls, { p: [0, -0.11, 0] });
    B.add(knee, G.capsule(0.078, 0.12, 6, 12), M.overalls, { p: [0, -0.1, 0] });
    B.add(foot, G.sphere(0.105, 18, 12), M.shoes, { p: [0, -0.035, 0.055], s: [1.0, 0.72, 1.55] });
    B.add(foot, G.cyl(0.1, 0.105, 0.03, 16), M.hair, { p: [0, -0.09, 0.05], s: [1.0, 1, 1.6] });
  }
  // Arms
  for (const [arm, elbow, hand, s] of [[armL, elbowL, handL, 1], [armR, elbowR, handR, -1]]) {
    B.add(arm, G.sphere(0.07, 14, 10), M.shirt, { p: [0, 0, 0] });
    B.add(arm, G.capsule(0.062, 0.1, 6, 10), M.shirt, { p: [0, -0.085, 0] });
    B.add(elbow, G.capsule(0.058, 0.08, 6, 10), M.shirt, { p: [0, -0.07, 0] });
    B.add(hand, G.cyl(0.072, 0.064, 0.05, 14), M.gloves, { p: [0, 0.03, 0] });
    B.add(hand, G.sphere(0.082, 16, 12), M.gloves, { p: [0, -0.045, 0.005], s: [0.95, 1.0, 0.85] });
    B.add(hand, G.sphere(0.036, 10, 8), M.gloves, { p: [s * 0.055, -0.02, 0.045] });
  }
  // Head
  B.add(head, G.sphere(0.25, 28, 20), M.skin, { p: [0, 0.2, 0], s: [1.04, 0.98, 0.98] });
  B.add(head, G.sphere(0.19, 20, 14), M.skin, { p: [0, 0.115, 0.06], s: [1.12, 0.82, 1.0] });
  B.add(head, G.sphere(0.09, 18, 14), M.skin, { p: [0, 0.158, 0.262], s: [1.06, 0.94, 1.0] });
  for (const s of [1, -1]) {
    B.add(head, G.sphere(0.055, 12, 10), M.skin, { p: [s * 0.25, 0.185, -0.01], s: [0.55, 1, 0.8] });
    B.add(head, G.sphere(0.062, 16, 12), M.eyeW, { p: [s * 0.073, 0.242, 0.222], s: [0.72, 1.22, 0.55], r: [0, s * 0.3, 0] });
    B.add(head, G.sphere(0.034, 14, 10), M.iris, { p: [s * 0.077, 0.236, 0.252], s: [0.82, 1.2, 0.35], r: [0, s * 0.3, 0] });
    B.add(head, G.sphere(0.019, 10, 8), M.pupil, { p: [s * 0.078, 0.236, 0.259], s: [0.82, 1.2, 0.35], r: [0, s * 0.3, 0] });
    B.add(head, G.sphere(0.009, 6, 6), M.eyeW, { p: [s * 0.07, 0.252, 0.262] });
    B.add(head, G.capsule(0.015, 0.05, 4, 8), M.hair, { p: [s * 0.082, 0.322, 0.228], r: [0.25, 0, Math.PI / 2 + s * 0.2] });
    // mustache lobes
    B.add(head, G.sphere(0.058, 14, 10), M.hair, { p: [s * 0.046, 0.108, 0.27], s: [1.25, 0.72, 0.72], r: [0, 0, s * -0.12] });
    B.add(head, G.sphere(0.056, 14, 10), M.hair, { p: [s * 0.106, 0.097, 0.243], s: [1.15, 0.78, 0.72], r: [0, s * 0.35, s * 0.32] });
    B.add(head, G.sphere(0.046, 12, 10), M.hair, { p: [s * 0.153, 0.11, 0.203], s: [1.0, 0.85, 0.75], r: [0, s * 0.7, s * 0.55] });
    // sideburns
    B.add(head, G.sphere(0.05, 10, 8), M.hair, { p: [s * 0.228, 0.235, 0.075], s: [0.6, 1.3, 0.9] });
  }
  // back hair (below the cap)
  const backHair = new THREE.SphereGeometry(0.25, 22, 12, Math.PI * 0.86, Math.PI * 1.28, Math.PI * 0.3, Math.PI * 0.52);
  B.add(head, backHair, M.hair, { p: [0, 0.2, -0.004], s: [1.065, 1.0, 1.03] });
  // Hair visible when Cappy is thrown
  const hairGeo = new THREE.SphereGeometry(0.258, 22, 12, 0, Math.PI * 2, 0, Math.PI * 0.4);
  B.add(hairTop, hairGeo, M.hair, { p: [0, 0.2, -0.012], s: [1.05, 0.99, 1.0], r: [-0.3, 0, 0] });
  for (let i = 0; i < 5; i++) {
    const a = -0.5 + i * 0.25;
    B.add(hairTop, G.cone(0.05, 0.11, 8), M.hair, { p: [Math.sin(a) * 0.13, 0.42, Math.cos(a) * 0.13 + 0.03], r: [0.9, a, 0] });
  }

  // Cap
  buildCap(B, capGroup, M.cap, P.emblem, false);

  B.build({ castShadow: true });

  // Emblem decal is built separately (transparent material)
  capGroup.add(makeEmblem(P.emblem));

  const joints = { root, squash, spin, pelvis, torso, head, legL, legR, kneeL, kneeR, footL, footR, armL, armR, elbowL, elbowR, handL, handR };
  return {
    root, joints, capGroup, hairTop,
    setCapVisible(v) { capGroup.visible = v; hairTop.visible = !v; },
  };
}

// Cap geometry shared by Mario's head cap and thrown Cappy.
export const CAP = { center: new THREE.Vector3(0, 0.297, -0.012), radii: new THREE.Vector3(0.276, 0.216, 0.286) };

export function buildCap(B, group, capMat, emblemColor, withEyes) {
  const dome = new THREE.SphereGeometry(0.27, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.5);
  B.add(group, dome, capMat, { p: [CAP.center.x, CAP.center.y, CAP.center.z], s: [CAP.radii.x / 0.27, CAP.radii.y / 0.27, CAP.radii.z / 0.27] });
  // band
  B.add(group, G.cyl(0.276, 0.282, 0.045, 28, true), capMat, { p: [0, CAP.center.y - 0.02, CAP.center.z], s: [1.0, 1, 1.036] });
  // brim (front half disc)
  const brim = new THREE.CylinderGeometry(0.215, 0.215, 0.03, 24, 1, false, -Math.PI / 2, Math.PI);
  B.add(group, brim, capMat, { p: [0, CAP.center.y - 0.012, 0.15], r: [0.12, 0, 0], s: [1.08, 1, 1.02] });
  if (withEyes) {
    const eyeW = mat('#ffffff', { roughness: 0.25 }), pupil = mat('#0d0d12', { roughness: 0.2 });
    for (const s of [1, -1]) {
      B.add(group, G.sphere(0.06, 14, 10), eyeW, { p: [s * 0.13, 0.355, 0.226], s: [0.7, 1.15, 0.45], r: [0.35, s * 0.45, 0] });
      B.add(group, G.sphere(0.03, 10, 8), pupil, { p: [s * 0.137, 0.355, 0.248], s: [0.75, 1.1, 0.45], r: [0.35, s * 0.45, 0] });
    }
  }
}

export function makeEmblem(color) {
  const tex = emblemTexture('M', color, '#ffffff');
  const m = new THREE.MeshStandardMaterial({
    map: tex, transparent: true, alphaTest: 0.4, roughness: 0.5,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  const geo = new THREE.CircleGeometry(0.088, 24);
  // place in front of the dome then wrap onto its surface
  const a = 0.62; // elevation angle of emblem on the dome
  const dir = new THREE.Vector3(0, Math.sin(a), Math.cos(a));
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
  geo.applyQuaternion(q);
  const p = CAP.center.clone().add(new THREE.Vector3(0, CAP.radii.y * dir.y, CAP.radii.z * dir.z));
  geo.translate(p.x, p.y, p.z);
  wrapOnEllipsoid(geo, CAP.center, CAP.radii, 0.012);
  const mesh = new THREE.Mesh(geo, m);
  mesh.castShadow = false;
  return mesh;
}

// The thrown cap with eyes.
export function createCappy(paletteName = 'classic') {
  const P = PALETTES[paletteName] || PALETTES.classic;
  const metal = P.metal ? { metalness: 0.85, roughness: 0.28 } : {};
  const group = new THREE.Group();
  const inner = new THREE.Group();
  inner.position.y = -0.28; // center the cap on the group origin
  group.add(inner);
  const B = new ModelBuilder();
  buildCap(B, inner, mat(P.cap, { roughness: 0.55, ...metal }), P.emblem, true);
  B.build({ castShadow: true });
  inner.add(makeEmblem(P.emblem));
  return group;
}

// Little cap + mustache worn by captured creatures.
export function createCaptureHat(paletteName = 'classic', scale = 1) {
  const P = PALETTES[paletteName] || PALETTES.classic;
  const group = new THREE.Group();
  const capG = new THREE.Group();
  capG.position.y = -0.24;
  group.add(capG);
  const B = new ModelBuilder();
  buildCap(B, capG, mat(P.cap, { roughness: 0.55 }), P.emblem, false);
  B.build();
  capG.add(makeEmblem(P.emblem));
  group.scale.setScalar(scale);
  return group;
}

export function createMustache(scale = 1) {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const hair = mat(HAIR, { roughness: 0.85 });
  for (const s of [1, -1]) {
    B.add(g, G.sphere(0.058, 12, 8), hair, { p: [s * 0.045, 0, 0], s: [1.25, 0.72, 0.72] });
    B.add(g, G.sphere(0.056, 12, 8), hair, { p: [s * 0.105, -0.012, -0.028], s: [1.15, 0.78, 0.72], r: [0, s * 0.35, s * 0.32] });
    B.add(g, G.sphere(0.046, 10, 8), hair, { p: [s * 0.152, 0, -0.068], s: [1.0, 0.85, 0.75], r: [0, s * 0.7, s * 0.55] });
  }
  B.build();
  g.scale.setScalar(scale);
  return g;
}
