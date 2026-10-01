// Reusable scenery pieces (merged into static geometry where possible).
import * as THREE from 'three';
import { CylinderCollider, BoxCollider, SphereCollider } from '../physics/colliders.js';
import { rng, TAU } from '../core/math.js';
import { mat } from '../gfx/model.js';

const FLOWER_COLORS = ['#ff6fa8', '#ffd84a', '#ff8a3d', '#b48cff', '#ffffff', '#5ad1ff'];

export function decor(L) {
  const r = rng((L.def.seed ?? 7) * 13);
  const gy = (x, z, from = 300) => L.groundAt(x, z, from);
  const S = (geo, color, t, kind = 'std', opts) => L.addStatic(geo, color, kind, t, opts);
  const D = {
    giantFlower(x, z, i = 0, opts = {}) {
      const y = opts.y ?? gy(x, z);
      const h = opts.h ?? 2.8 + (i % 3) * 0.8;
      const col = opts.color ?? FLOWER_COLORS[i % FLOWER_COLORS.length];
      S(new THREE.CylinderGeometry(0.16, 0.22, h, 8), '#4ea83a', { p: [x, y + h / 2, z] });
      for (let k = 0; k < 2; k++) S(new THREE.SphereGeometry(0.6, 10, 6), '#5cbf45', { p: [x + (k ? 0.5 : -0.5), y + h * (0.35 + k * 0.2), z], s: [1.2, 0.25, 0.6], r: [0, k * 2, k ? 0.4 : -0.4] });
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * TAU;
        S(new THREE.SphereGeometry(0.85, 12, 8), col, { p: [x + Math.cos(a) * 0.95, y + h + 0.05, z + Math.sin(a) * 0.95], s: [1.1, 0.28, 0.8], r: [0, -a, 0] });
      }
      S(new THREE.SphereGeometry(0.55, 14, 10), '#ffcf3a', { p: [x, y + h + 0.15, z], s: [1, 0.5, 1] });
      const c = new CylinderCollider(x, z, y + h - 0.2, y + h + 0.25, 1.75);
      c.oneWay = true; c.cam = false;
      L.world.add(c);
      const st = new CylinderCollider(x, z, y, y + h - 0.2, 0.22);
      st.cam = false;
      L.world.add(st);
    },
    bridge(x, y, z, len, w, rot) {
      const n = Math.ceil(len / 0.6);
      const c = Math.cos(rot), s = Math.sin(rot);
      for (let i = 0; i < n; i++) {
        const t = (i + 0.5) / n - 0.5;
        S(new THREE.BoxGeometry(w, 0.18, 0.5), i % 2 ? '#a8723f' : '#b98247', { p: [x + s * t * len, y, z + c * t * len], r: [0, rot, 0] });
      }
      for (const side of [1, -1]) {
        const ox = c * side * (w / 2), oz = -s * side * (w / 2);
        S(new THREE.BoxGeometry(0.12, 0.12, len), '#7a4f24', { p: [x + ox, y + 0.9, z + oz], r: [0, rot, 0] });
        for (let i = 0; i <= 4; i++) {
          const t = i / 4 - 0.5;
          S(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 6), '#7a4f24', { p: [x + ox + s * t * len, y + 0.45, z + oz + c * t * len] });
        }
      }
      L.world.add(new BoxCollider(x, y - 0.15, z, w / 2, 0.25, len / 2, rot));
    },
    post(x, y, z, color = '#8a5a2b') {
      S(new THREE.CylinderGeometry(0.22, 0.26, 1.4, 8), color, { p: [x, y + 0.7, z] });
      S(new THREE.SphereGeometry(0.24, 8, 6), '#ffcf3a', { p: [x, y + 1.45, z] });
      L.world.add(new CylinderCollider(x, z, y, y + 1.4, 0.26));
    },
    flagPole(x, y, z, color) {
      S(new THREE.CylinderGeometry(0.08, 0.08, 4, 8), '#e8e8f0', { p: [x, y + 2, z] }, 'smooth');
      const flag = new THREE.BufferGeometry();
      flag.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1.6, -0.45, 0, 0, -0.9, 0, 0, -0.9, 0, 1.6, -0.45, 0, 0, 0, 0], 3));
      flag.computeVertexNormals();
      S(flag, color, { p: [x + 0.05, y + 3.9, z] });
    },
    lilyPad(x, y, z) {
      const g = new THREE.CylinderGeometry(1.35, 1.35, 0.14, 16, 1, false, 0.3, TAU - 0.6);
      S(g, '#4fb84a', { p: [x, y + 0.05, z], r: [0, r() * 6, 0] }, 'smooth', { noShadow: true });
      if (r() < 0.4) S(new THREE.SphereGeometry(0.22, 8, 6), '#ff9fc6', { p: [x + 0.4, y + 0.25, z + 0.3], s: [1, 0.6, 1] });
      const c = new CylinderCollider(x, z, y - 0.4, y + 0.14, 1.3);
      c.oneWay = true; c.cam = false; c.surface = 'wood';
      L.world.add(c);
    },
    hut(x, z, rot, roof) {
      const y = gy(x, z);
      S(new THREE.CylinderGeometry(2.4, 2.6, 3, 16), '#f3e3c3', { p: [x, y + 1.5, z] });
      S(new THREE.ConeGeometry(3.3, 2.6, 16), roof, { p: [x, y + 4.2, z] });
      S(new THREE.SphereGeometry(0.3, 8, 6), '#ffcf3a', { p: [x, y + 5.6, z] });
      const dx = Math.sin(rot) * 2.45, dz = Math.cos(rot) * 2.45;
      S(new THREE.BoxGeometry(1.2, 2, 0.3), '#7a4f24', { p: [x + dx, y + 1, z + dz], r: [0, rot, 0] });
      S(new THREE.CircleGeometry(0.45, 12), '#8fd3ff', { p: [x + Math.sin(rot + 1) * 2.55, y + 2, z + Math.cos(rot + 1) * 2.55], r: [0, rot + 1, 0] });
      L.world.add(new CylinderCollider(x, z, y - 1, y + 3, 2.55));
      const roofC = new CylinderCollider(x, z, y + 3, y + 3.6, 2.4);
      L.world.add(roofC);
    },
    pillar(x, z, h, opts = {}) {
      const y = opts.y ?? gy(x, z);
      const col = opts.color || '#c9bfa8';
      S(new THREE.BoxGeometry(2.0, 0.5, 2.0), '#b7ab97', { p: [x, y + 0.25, z] });
      S(new THREE.CylinderGeometry(0.75, 0.82, h - 0.9, 14), col, { p: [x, y + 0.5 + (h - 0.9) / 2, z] });
      if (h > 5) S(new THREE.BoxGeometry(1.9, 0.45, 1.9), '#b7ab97', { p: [x, y + h - 0.2, z] });
      else S(new THREE.DodecahedronGeometry(0.8, 0), col, { p: [x, y + h - 0.4, z], s: [1, 0.6, 1], r: [0.3, r() * 3, 0] });
      L.world.add(new CylinderCollider(x, z, y - 1, y + h, h > 5 ? 0.95 : 0.82));
    },
    arch(x, z, rot, h) {
      const y = gy(x, z);
      const c = Math.cos(rot), s = Math.sin(rot);
      for (const side of [1, -1]) {
        const px = x + c * side * 3, pz = z - s * side * 3;
        D.pillar(px, pz, h, { y });
      }
      S(new THREE.BoxGeometry(8.4, 1.2, 2.0), '#b7ab97', { p: [x, y + h + 0.6, z], r: [0, rot, 0] });
      L.world.add(new BoxCollider(x, y + h + 0.6, z, 4.2, 0.6, 1.0, rot));
    },
    wallChunk(x, z, h, rot) {
      const y = gy(x, z);
      const w = 4 + r() * 2;
      S(new THREE.BoxGeometry(w, h, 1.2), '#b9ad97', { p: [x, y + h / 2 - 0.3, z], r: [0, rot, 0] });
      S(new THREE.BoxGeometry(w * 0.4, 0.6, 1.25), '#a89c88', { p: [x + Math.cos(rot) * w * 0.2, y + h - 0.1, z - Math.sin(rot) * w * 0.2], r: [0, rot, 0] });
      L.world.add(new BoxCollider(x, y + h / 2 - 0.3, z, w / 2, h / 2, 0.6, rot));
    },
    floatingIsle(x, y, z, s, opts = {}) {
      const top = opts.top ?? L.def.isleTop ?? '#7fcf52', rock = opts.rock ?? L.def.isleRock ?? '#9b7b56';
      S(new THREE.CylinderGeometry(s, s * 0.85, 1.2, 14), top, { p: [x, y - 0.6, z] });
      S(new THREE.ConeGeometry(s * 0.88, s * 1.6, 12), rock, { p: [x, y - 1.2 - s * 0.8, z], r: [Math.PI, 0, 0] });
      for (let i = 0; i < 3; i++) S(new THREE.DodecahedronGeometry(s * 0.25, 0), rock, { p: [x + (r() - 0.5) * s, y - 1.5 - r() * s, z + (r() - 0.5) * s] });
      L.world.add(new CylinderCollider(x, z, y - 1.2, y, s));
      if (s > 5 && opts.tree !== false && !L.def.isleTop) L.tree(x + s * 0.4, z - s * 0.3, { y, scale: 0.7 });
    },
    windmill(x, z) {
      const y = gy(x, z);
      S(new THREE.CylinderGeometry(1.6, 2.6, 9, 12), '#f1e4c8', { p: [x, y + 4.5, z] });
      S(new THREE.ConeGeometry(2.4, 2.6, 12), '#c8453a', { p: [x, y + 10.3, z] });
      L.world.add(new CylinderCollider(x, z, y - 1, y + 9, 2.4));
      const blades = new THREE.Group();
      const m = mat('#e8dcc0', { roughness: 0.8 });
      for (let i = 0; i < 4; i++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.9, 5.2, 0.12), m);
        b.position.y = 2.7;
        const arm = new THREE.Group();
        arm.rotation.z = (i / 4) * TAU;
        arm.add(b);
        blades.add(arm);
        b.castShadow = true;
      }
      blades.position.set(x, y + 8.2, z + 2.0);
      L.root.add(blades);
      L.updaters.push((dt) => { blades.rotation.z += dt * 0.6; });
    },
    fenceAlong(pts, spacing = 3) {
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        const len = Math.hypot(bx - ax, bz - az);
        const n = Math.max(1, Math.floor(len / spacing));
        const rot = Math.atan2(bx - ax, bz - az);
        for (let k = 0; k <= n; k++) {
          const t = k / n;
          const x = ax + (bx - ax) * t, z = az + (bz - az) * t, y = gy(x, z);
          S(new THREE.BoxGeometry(0.22, 1.1, 0.22), '#9a6a3a', { p: [x, y + 0.5, z] });
          if (k < n) {
            const mx = x + (bx - ax) / n / 2, mz = z + (bz - az) / n / 2, my = gy(mx, mz);
            S(new THREE.BoxGeometry(0.1, 0.16, len / n), '#b07a44', { p: [mx, my + 0.8, mz], r: [0, rot, 0] });
            S(new THREE.BoxGeometry(0.1, 0.16, len / n), '#b07a44', { p: [mx, my + 0.4, mz], r: [0, rot, 0] });
          }
        }
      }
    },
    adobe(x, z, rot, i = 0) {
      const y = gy(x, z);
      const w = 6 + (i % 2) * 1.5, d = 6, h = 4.5 + (i % 3) * 1.2;
      const wall = ['#f0d8b0', '#f2cfa0', '#ead2b2'][i % 3];
      L.box(x, y + h, z, w, h + 2, d, wall, { rot, top: '#e2c08c', band: 0.3, round: 0.18 });
      // parapet
      const c = Math.cos(rot), s = Math.sin(rot);
      for (const [ox, oz, pw, pd] of [[0, d / 2 - 0.2, w, 0.4], [0, -d / 2 + 0.2, w, 0.4], [w / 2 - 0.2, 0, 0.4, d], [-w / 2 + 0.2, 0, 0.4, d]]) {
        L.box(x + c * ox + s * oz, y + h + 0.6, z - s * ox + c * oz, pw, 0.6, pd, '#e2c08c', { rot, round: 0.08 });
      }
      if (i % 2 === 0) S(new THREE.SphereGeometry(1.8, 16, 10, 0, TAU, 0, Math.PI / 2), i % 4 === 0 ? '#3a8fd0' : '#e8784a', { p: [x, y + h, z] });
      // door, windows, awning
      const fx = s * (d / 2 + 0.03), fz = c * (d / 2 + 0.03);
      S(new THREE.PlaneGeometry(1.3, 2.2), '#5a3a1e', { p: [x + fx, y + 1.1, z + fz], r: [0, rot, 0] });
      S(new THREE.PlaneGeometry(0.9, 0.9), '#3a2a1a', { p: [x + fx + c * 1.8, y + h - 1.4, z + fz - s * 1.8], r: [0, rot, 0] });
      S(new THREE.PlaneGeometry(0.9, 0.9), '#3a2a1a', { p: [x + fx - c * 1.8, y + h - 1.4, z + fz + s * 1.8], r: [0, rot, 0] });
      S(new THREE.BoxGeometry(2.4, 0.08, 1.2), i % 2 ? '#e0402a' : '#2a8fd0', { p: [x + fx * 1.15, y + 2.6, z + fz * 1.15], r: [0.35, rot, 0] });
    },
    cactus(x, z, s = 1) {
      const y = gy(x, z);
      const g = '#5fa646', g2 = '#4e9238';
      const h = 3.4 * s;
      S(new THREE.CylinderGeometry(0.42 * s, 0.5 * s, h, 10), g, { p: [x, y + h / 2, z] });
      S(new THREE.SphereGeometry(0.42 * s, 10, 8), g, { p: [x, y + h, z] });
      const arms = r() < 0.5 ? [1] : [1, -1];
      for (const a of arms) {
        const rot = r() * TAU;
        const ax = Math.cos(rot) * a, az = Math.sin(rot) * a;
        const ay = y + h * (0.4 + r() * 0.2);
        S(new THREE.CylinderGeometry(0.28 * s, 0.28 * s, 0.9 * s, 8), g2, { p: [x + ax * 0.65 * s, ay, z + az * 0.65 * s], r: [0, -rot, Math.PI / 2] });
        S(new THREE.CylinderGeometry(0.28 * s, 0.28 * s, 1.3 * s, 8), g2, { p: [x + ax * 1.1 * s, ay + 0.6 * s, z + az * 1.1 * s] });
        S(new THREE.SphereGeometry(0.28 * s, 8, 6), g2, { p: [x + ax * 1.1 * s, ay + 1.25 * s, z + az * 1.1 * s] });
      }
      if (r() < 0.4) S(new THREE.SphereGeometry(0.18 * s, 8, 6), '#ff6fa8', { p: [x, y + h + 0.38 * s, z] });
      L.world.add(new CylinderCollider(x, z, y - 0.5, y + h, 0.5 * s));
    },
    ruinArch(x, z, rot) {
      const y = gy(x, z) - 0.5;
      const c = Math.cos(rot), s = Math.sin(rot);
      for (const side of [1, -1]) {
        const px = x + c * side * 2.6, pz = z - s * side * 2.6;
        L.box(px, y + 5, pz, 1.4, 6, 1.4, '#d9b383', { rot, round: 0.15 });
      }
      if (r() < 0.7) L.box(x, y + 6, z, 7, 1.0, 1.6, '#c9a070', { rot, round: 0.15 });
    },
    igloo(x, z, rot = 0, r0 = 3) {
      const y = gy(x, z);
      const dome = new THREE.SphereGeometry(r0, 20, 10, 0, TAU, 0, Math.PI / 2);
      L.addStatic(dome, (px, py, pz) => ((Math.floor((py - y) * 1.6) + Math.floor(Math.atan2(pz - z, px - x) * 3)) % 2 ? '#f2f7ff' : '#e2ecf8'), 'smooth', { p: [x, y - 0.2, z] });
      const c = Math.cos(rot), s = Math.sin(rot);
      S(new THREE.CylinderGeometry(1.1, 1.1, 2.2, 12, 1, false, 0, Math.PI), '#e8f0fb', { p: [x + s * (r0 + 0.6), y + 0.2, z + c * (r0 + 0.6)], r: [Math.PI / 2, rot, 0] }, 'smooth');
      S(new THREE.CircleGeometry(0.85, 12, 0, Math.PI), '#2a3550', { p: [x + s * (r0 + 1.72), y - 0.1, z + c * (r0 + 1.72)], r: [0, rot, 0] });
      L.world.add(new SphereCollider(x, y - 0.2, z, r0));
    },
    iceSheet(x, yTop, z, w, d, rot = 0, opts = {}) {
      L.box(x, yTop, z, w, opts.h ?? 0.6, d, opts.color || '#bfe6fa', { rot, kind: 'glossy', surface: 'ice', round: 0.15, ...opts });
    },
    iceWall(x, yTop, z, w, h, d, rot = 0) {
      L.box(x, yTop, z, w, h, d, '#a8dcf5', { rot, kind: 'glossy', round: 0.2, surface: 'ice' });
    },
    lighthouse(x, z) {
      const y = gy(x, z);
      for (let i = 0; i < 4; i++) S(new THREE.CylinderGeometry(2.2 - i * 0.25, 2.4 - i * 0.25, 3, 16), i % 2 ? '#e0402a' : '#f4f4f8', { p: [x, y + 1.5 + i * 3, z] });
      S(new THREE.CylinderGeometry(1.6, 1.6, 2, 12), '#ffe9a0', { p: [x, y + 13, z] }, 'glow');
      S(new THREE.ConeGeometry(2.0, 2, 12), '#2a3550', { p: [x, y + 15, z] });
      L.world.add(new CylinderCollider(x, z, y - 1, y + 12, 2.3));
    },
    castleWall(x0, z0, x1, z1, h, opts = {}) {
      const lo = Math.min(gy(x0, z0), gy(x1, z1));
      const y = opts.y ?? lo;
      const len = Math.hypot(x1 - x0, z1 - z0);
      const rot = Math.atan2(x1 - x0, z1 - z0);
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const th = opts.thick ?? 3;
      const color = opts.color || '#5a5058';
      // reach down past the lowest ground under the wall so its ends never float
      L.box(cx, y + h, cz, th, Math.max(h + 4, y + h - lo + 3), len, color, { rot, top: '#6e6470', band: 0.3, round: 0.1 });
      // merlons along both edges keep the middle of the wall top walkable
      const n = Math.floor(len / 2.4);
      const nx = Math.cos(rot), nz = -Math.sin(rot), mt = th * 0.24;
      for (let i = 0; i < n; i++) {
        if (i % 2) continue;
        const t = (i + 0.5) / n - 0.5;
        for (const side of [-1, 1]) {
          const off = side * (th / 2 - mt / 2);
          L.box(cx + Math.sin(rot) * t * len + nx * off, y + h + 1.2, cz + Math.cos(rot) * t * len + nz * off, mt, 1.2, 1.4, color, { rot, round: 0.05 });
        }
      }
    },
    tower(x, z, r0, h, opts = {}) {
      const g0 = gy(x, z);
      const y = opts.y ?? g0;
      const y0 = Math.min(g0, y) - 2;
      L.cylinder(x, y0, z, r0, y + h - y0, opts.color || '#5a5058', { seg: 20, top: '#6e6470' });
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU;
        if (i % 2) L.box(x + Math.cos(a) * (r0 - 0.4), y + h + 1.1, z + Math.sin(a) * (r0 - 0.4), 1.2, 1.1, 1.2, '#5a5058', { rot: -a, round: 0.05 });
      }
      if (opts.roof !== false) S(new THREE.ConeGeometry(r0 + 0.6, r0 * 1.6, 16), opts.roofColor || '#8a1f2a', { p: [x, y + h + 3 + r0 * 0.8, z] });
      if (opts.window !== false) S(new THREE.CircleGeometry(0.7, 12), '#ffb03a', { p: [x, y + h * 0.7, z + r0 + 0.02] }, 'glow');
    },
    banner(x, y, z, rot, h = 4) {
      const g = new THREE.PlaneGeometry(2.2, h, 1, 4);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) if (p.getY(i) < -h / 2 + 0.01) p.setY(i, p.getY(i) - (Math.abs(p.getX(i)) < 0.2 ? -0.6 : 0));
      S(g, '#7a1020', { p: [x, y - h / 2, z], r: [0, rot, 0] });
      S(new THREE.CircleGeometry(0.7, 16), '#f0c040', { p: [x + Math.sin(rot) * 0.02, y - 1.4, z + Math.cos(rot) * 0.02], r: [0, rot, 0] });
    },
    torch(x, y, z) {
      S(new THREE.CylinderGeometry(0.18, 0.25, 1.6, 8), '#3a3036', { p: [x, y + 0.8, z] });
      S(new THREE.CylinderGeometry(0.42, 0.3, 0.4, 10), '#5a5058', { p: [x, y + 1.7, z] });
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.9, 10), new THREE.MeshStandardMaterial({ color: '#ffb02a', emissive: '#ff7a10', emissiveIntensity: 3 }));
      flame.position.set(x, y + 2.3, z);
      L.root.add(flame);
      L.updaters.push((dt, t) => { flame.scale.set(1 + Math.sin(t * 13 + x) * 0.12, 1 + Math.sin(t * 17 + z) * 0.2, 1); });
      L.world.add(new CylinderCollider(x, z, y, y + 1.9, 0.3));
    },
    clouds(n, yMin, yMax, radius, color = '#ffffff') {
      const group = new THREE.Group();
      const m = new THREE.MeshStandardMaterial({ color, roughness: 1, emissive: color, emissiveIntensity: 0.25, flatShading: false });
      const geo = new THREE.IcosahedronGeometry(1, 2);
      for (let i = 0; i < n; i++) {
        const c = new THREE.Group();
        const a = (i / n) * TAU + r() * 0.4;
        const rad = radius * (0.75 + r() * 0.5);
        c.position.set(Math.cos(a) * rad, yMin + r() * (yMax - yMin), Math.sin(a) * rad);
        const parts = 4 + Math.floor(r() * 4);
        for (let k = 0; k < parts; k++) {
          const s = 5 + r() * 7;
          const p = new THREE.Mesh(geo, m);
          p.scale.set(s * 1.3, s * 0.75, s);
          p.position.set((k - parts / 2) * 6 + r() * 3, r() * 3, r() * 5);
          c.add(p);
        }
        c.userData.speed = 0.5 + r() * 0.8;
        group.add(c);
      }
      L.root.add(group);
      L.updaters.push((dt) => { group.rotation.y += dt * 0.004; });
      return group;
    },
  };
  return D;
}
