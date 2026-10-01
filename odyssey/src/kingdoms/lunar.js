// Lunar Kingdom (post-game): low-gravity craters under a starry sky with the home planet overhead.
import * as THREE from 'three';
import { kit } from './kit.js';
import { decor } from './decor.js';
import { fbm2, smoothstep, rng, TAU } from '../core/math.js';
import { Goomba, Frog, ChainChomp } from '../entities/enemies.js';
import { FloatingCappy, NPC } from '../entities/misc.js';
import { makeCanvas } from '../gfx/textures.js';

const CRATERS = [
  [0, 0, 26, 7], [-60, -40, 18, 6], [55, -50, 22, 8], [-50, 55, 16, 5], [60, 50, 14, 5], [-90, 0, 12, 4], [95, -5, 11, 4],
  [10, -95, 20, 7], [-20, 95, 15, 5], [30, 25, 8, 3], [-30, -10, 9, 3], [-75, -85, 10, 4], [80, 90, 10, 4],
];

export function lunarHeight(x, z) {
  const r = Math.hypot(x, z);
  const edge = smoothstep(130, 112, r + fbm2(x * 0.02, z * 0.02, 2) * 8);
  let h = -30 + edge * 32;
  h += edge * (fbm2(x * 0.02, z * 0.02, 4) * 5);
  for (const [cx, cz, cr, depth] of CRATERS) {
    const d = Math.hypot(x - cx, z - cz) / cr;
    if (d < 1.6) {
      const bowl = d < 1 ? -(1 - d * d) * depth : 0;
      const rim = Math.exp(-Math.pow((d - 1) * 4, 2)) * depth * 0.45;
      h += (bowl + rim) * edge;
    }
  }
  return h;
}

function lunarColor(x, z, h, n) {
  const v = fbm2(x * 0.08, z * 0.08, 3);
  if (n.y < 0.7) return v > 0 ? '#8d8f99' : '#7f818c';
  for (const [cx, cz, cr] of CRATERS) if (Math.hypot(x - cx, z - cz) < cr * 0.7) return v > 0 ? '#a7a9b3' : '#9c9ea8';
  return v > 0.2 ? '#c9cbd3' : v > -0.1 ? '#bcbec8' : '#b0b2bc';
}

function planetTexture() {
  const c = makeCanvas(512, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#2a6fd0'; g.fillRect(0, 0, 512, 256);
  const r = rng(77);
  for (let i = 0; i < 18; i++) {
    g.fillStyle = r() < 0.5 ? '#4fb84a' : '#7ac85a';
    g.beginPath();
    const x = r() * 512, y = 40 + r() * 176, s = 20 + r() * 60;
    for (let k = 0; k < 9; k++) { const a = (k / 9) * TAU; const rr = s * (0.6 + r() * 0.5); g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr * 0.6); }
    g.fill();
  }
  g.fillStyle = 'rgba(255,255,255,0.75)';
  for (let i = 0; i < 40; i++) { g.beginPath(); g.ellipse(r() * 512, r() * 256, 20 + r() * 50, 6 + r() * 10, r(), 0, TAU); g.fill(); }
  g.fillStyle = '#f2f6ff'; g.fillRect(0, 0, 512, 16); g.fillRect(0, 240, 512, 16);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const MOONS = [
  { id: 'welcome', name: 'Welcome to the Lunar Kingdom' },
  { id: 'crater', name: 'Bottom of the Great Crater' },
  { id: 'spire', name: 'Top of the Moon Spire' },
  { id: 'float', name: 'Hop the Floating Moon Rocks' },
  { id: 'sparkle', name: 'Moondust Sparkles' },
  { id: 'shards', name: 'Shards Across the Craters' },
  { id: 'chomp', name: 'Chomp in Low Gravity' },
  { id: 'frog', name: 'Frog Jump to the Stars' },
  { id: 'course', name: 'Lunar Sky Course' },
  { id: 'grand', name: 'Grand Celebration', multi: true },
];

export default {
  id: 'lunar',
  name: 'Lunar Kingdom',
  short: 'Lunar',
  region: 'Post-game',
  subtitle: 'The Tranquil Craters',
  music: 'moon',
  moonColor: '#fff3a0',
  orb: 'radial-gradient(circle at 35% 30%, #ffffff, #c9cbd3 55%, #6f7180)',
  purpleColor: '#7affd8',
  purpleShape: 'star',
  moonsToLeave: 0,
  gravity: 0.42,
  killY: -40,
  seed: 63,
  bounds: { minX: -130, maxX: 130, minZ: -130, maxZ: 130 },
  titleCam: { x: 0, y: 40, z: 0, r: 80, ly: 0 },
  env: {
    sky: { top: '#02030a', horizon: '#1a1f3a', bottom: '#05060c', sunColor: '#fff6e0', clouds: 0, stars: 1 },
    fog: { color: '#0b0d1c', near: 160, far: 700 },
    sunDir: [0.6, 0.55, -0.4],
    sunColor: '#fff6e8', sunIntensity: 2.6,
    hemiSky: '#8a9ad0', hemiGround: '#2a2c38', hemiIntensity: 0.55,
    mapBg: '#10121e',
    exposure: 1.05,
    envIntensity: 0.3,
  },
  moonList: MOONS,
  isleTop: '#c9cbd3',
  isleRock: '#8d8f99',
  build(L) {
    const K = kit(L), D = decor(L);
    const M = {};
    const def = (id) => MOONS.find((m) => m.id === id);
    const moon = (id, x, y, z, extra = {}) => (M[id] = K.moon({ ...def(id), x, y, z, ...extra }));
    const r = rng(41);

    L.terrain({ size: 280, cell: 2, height: lunarHeight, color: lunarColor });
    for (const [x, z, w, d] of [[0, -142, 300, 10], [0, 142, 300, 10], [-142, 0, 10, 300], [142, 0, 10, 300]]) L.box(x, 80, z, w, 140, d, '#000', { visible: false, cam: false });
    // the home planet hanging in the sky
    const planet = new THREE.Mesh(new THREE.SphereGeometry(110, 48, 32), new THREE.MeshStandardMaterial({ map: planetTexture(), roughness: 0.9, emissive: '#1a3a70', emissiveIntensity: 0.35, fog: false }));
    planet.position.set(-320, 260, -560);
    L.root.add(planet);
    L.updaters.push((dt) => { planet.rotation.y += dt * 0.01; });

    // ================================================== landing
    L.spawn = { x: 0, y: K.gy(0, 70) + 0.2, z: 70, facing: Math.PI };
    K.ship(10, 82, -0.4);
    K.checkpoint('odyssey', 'The Odyssey', -6, 80, Math.PI);
    new FloatingCappy(L, -6, K.gy(-6, 66) + 1.6, 66, { lines: [
      { who: 'Cappy', text: 'We did it, Mario! The Grand Moon is shining again, and look where it led us.' },
      { who: 'Cappy', text: 'Gravity is low here. Your jumps go way higher. Try a triple jump!' },
    ] });
    moon('welcome', 0, K.gy(0, 56) + 6, 56);
    K.vring(0, K.gy(0, 56) + 6, 56, 3, 10, 0);

    // ================================================== great crater (center)
    moon('crater', 0, lunarHeight(0, 0) + 1.6, 0);
    K.ring(0, 1, 0, 8, 12);
    new ChainChomp(L, 12, -6, { chain: 8 });
    moon('chomp', 20, lunarHeight(20, -12) + 1.6, -12, { hidden: true });
    K.breakable(20, -12, { style: 'rock', size: 2.4, need: 'heavy', contents: M.chomp, color: '#9c9ea8' });

    // ================================================== moon spire (tall, low gravity makes it climbable)
    {
      const x = 55, z = -50, g = lunarHeight(x, z);
      L.cylinder(x, g - 2, z, 3, 14, '#9c9ea8', { top: '#d8dae2' });
      L.cylinder(x + 6, g - 2, z + 4, 2, 24, '#9c9ea8', { top: '#d8dae2' });
      L.cylinder(x - 2, g - 2, z + 9, 2.2, 34, '#9c9ea8', { top: '#d8dae2' });
      L.cylinder(x - 9, g - 2, z + 3, 2.6, 44, '#9c9ea8', { top: '#d8dae2' });
      moon('spire', x - 9, g + 43.6, z + 3);
    }

    // ================================================== floating moon rocks
    {
      const pts = [];
      for (let i = 0; i < 8; i++) {
        const a = i * 0.7;
        pts.push([-50 + Math.cos(a) * (10 + i * 3), 8 + i * 4, 55 + Math.sin(a) * (10 + i * 3)]);
      }
      pts.forEach(([x, y, z]) => { D.floatingIsle(x, y, z, 3); K.coin(x, y + 1.2, z); });
      const last = pts[pts.length - 1];
      moon('float', last[0], last[1] + 1.6, last[2]);
    }

    // ================================================== frog jump to a star platform
    {
      new Frog(L, -60, -40);
      new Frog(L, -66, -34);
      L.platform(-60, lunarHeight(-60, -40) + 34, -52, 6, 6, { h: 2, side: '#9c9ea8', top: '#fff3a0' });
      moon('frog', -60, lunarHeight(-60, -40) + 35.6, -52);
    }

    // ================================================== sparkle + shards
    moon('sparkle', -30, lunarHeight(-30, -10) + 1.6, -10, { hidden: true });
    K.sparkle(-30, -10, () => M.sparkle.appear(new THREE.Vector3(-30, lunarHeight(-30, -10), -10)));
    moon('shards', 0, K.gy(0, 40) + 1.6, 40, { hidden: true });
    K.shards(M.shards, [[60, 1.4, 50], [-50, 1.4, 55], [10, 1.4, -95], [-90, 1.4, 0], [95, 1.4, -5]]);

    // ================================================== lunar sky course (spring launch)
    {
      K.spring(30, 60, 26);
      const y0 = lunarHeight(30, 60);
      const plats = [[40, 22, 70], [55, 30, 78], [70, 38, 72], [82, 46, 60], [86, 54, 44]];
      plats.forEach(([x, y, z], i) => {
        if (i === 2) K.mover([[x - 4, y0 + y, z], [x + 4, y0 + y, z]], 4, 4, { speed: 3, color: '#c9cbd3', top: '#fff3a0' });
        else L.platform(x, y0 + y, z, 5, 5, { h: 1.2, side: '#9c9ea8', top: '#fff3a0' });
        K.coin(x, y0 + y + 1.2, z);
      });
      moon('course', 86, y0 + 55.6, 44);
    }

    // ================================================== the celebration monument
    {
      const x = 0, z = -60, g = lunarHeight(x, z);
      for (let i = 0; i < 3; i++) L.cylinder(x, g - 1 + i * 2, z, 10 - i * 2.5, 2, i % 2 ? '#d8dae2' : '#b0b2bc', { top: '#ece6c8' });
      moon('grand', x, g + 7.6, z, { hidden: !L.game.save.data.ending });
      new NPC(L, x + 8, g + 1, z + 8, { name: 'Moon Rabbit', body: '#f4f4fa', accent: '#ff9ac8', hat: 'bow', lines: () => [] }).onTalk = () => {
        const total = L.game.save.totalMoons();
        if (total >= 60 && !M.grand.visible && !M.grand.collected) {
          M.grand.appear(new THREE.Vector3(x, g + 8, z));
          return [`${total} Power Moons! You're a legend. The monument is glowing just for you!`];
        }
        return [`You've found ${total} Power Moons so far. Collect 60 and come back. Something special will happen at the monument!`];
      };
    }

    // ================================================== a few moon goombas
    for (const [x, z] of [[20, 40], [-20, 30], [40, -20], [-40, 20], [30, -80], [-60, 80]]) new Goomba(L, x, z, { color: '#8a8cb0' });

    // ================================================== scenery: rocks + glowing crystals
    for (let i = 0; i < 50; i++) {
      const x = (r() - 0.5) * 230, z = (r() - 0.5) * 230;
      if (lunarHeight(x, z) < 0) continue;
      L.rock(x, z, 0.5 + r() * 1.8, '#a7a9b3');
    }
    for (let i = 0; i < 20; i++) {
      const x = (r() - 0.5) * 200, z = (r() - 0.5) * 200;
      const y = lunarHeight(x, z);
      if (y < 0) continue;
      L.addStatic(new THREE.OctahedronGeometry(0.9, 0), i % 2 ? '#9fe8ff' : '#fff3a0', 'glow', { p: [x, y + 0.8, z], s: [0.6, 1.6, 0.6], r: [0.2, r() * 3, 0.1] }, { noShadow: true });
    }
  },
};
