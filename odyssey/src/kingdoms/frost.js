// Frost Kingdom: snowy island with Shiverpeak mountain, a frozen lake, igloo village and a penguin race.
import * as THREE from 'three';
import { kit } from './kit.js';
import { decor } from './decor.js';
import { fbm2, smoothstep, lerp, rng, TAU } from '../core/math.js';
import { Goomba, ChainChomp, Piranha } from '../entities/enemies.js';
import { NPC, CarryItem, IceCrystal, Snowman, PenguinRacer } from '../entities/misc.js';

const SEA = -1.0;
const PEAK = { x: 8, z: -18, h: 50, R: 66 };
const LAKE = { x: -62, z: 44, r: 20 };

export function frostHeight(x, z) {
  const r = Math.hypot(x, z * 0.95);
  const edge = smoothstep(134, 108, r + fbm2(x * 0.02, z * 0.02, 2) * 10);
  let h = -9 + edge * 10.5;
  h += edge * (fbm2(x * 0.02 + 5, z * 0.02 - 1, 3) * 3.0 + 0.8);
  // Shiverpeak
  const dm = Math.hypot(x - PEAK.x, z - PEAK.z) + fbm2(x * 0.035, z * 0.035, 2) * 7;
  const m = Math.max(0, 1 - dm / PEAK.R);
  let mh = Math.pow(m, 1.3) * PEAK.h;
  mh = Math.min(mh, PEAK.h * 0.93 + fbm2(x * 0.1, z * 0.1) * 0.5);
  // gentle terraces so the hike has resting spots
  mh = mh - Math.sin(mh * 0.55) * 0.7;
  h += mh;
  // frozen lake basin
  const dl = Math.hypot(x - LAKE.x, z - LAKE.z);
  h -= smoothstep(LAKE.r + 8, LAKE.r - 4, dl) * 4.5;
  // flatten spawn & village
  h = lerp(h, 1.6, smoothstep(18, 8, Math.hypot(x, z - 84)));
  h = lerp(h, 2.0, smoothstep(24, 12, Math.hypot(x + 74, z + 6)));
  return h;
}

function frostColor(x, z, h, n) {
  if (h < SEA - 0.5) return '#7d93a8';
  if (h < SEA + 0.6) return '#d8e4ee';
  if (n.y < 0.66) {
    const b = Math.sin(h * 1.3 + fbm2(x * 0.1, z * 0.1) * 2);
    return b > 0.2 ? '#8b93a6' : '#7a8296';
  }
  const v = fbm2(x * 0.07, z * 0.07, 3);
  if (n.y < 0.82) return v > 0 ? '#dbe6f2' : '#cfdcec';
  return v > 0.18 ? '#f4f8fd' : v > -0.1 ? '#e8eff8' : '#dbe5f2';
}

const MOONS = [
  { id: 'peak', name: 'Peak of Shiverpeak' },
  { id: 'race', name: 'Penguin Race Champion', multi: true },
  { id: 'bridge', name: 'Across the Ice Bridge' },
  { id: 'carrot', name: "The Snowman's Lost Nose" },
  { id: 'crystals', name: 'Smash the Ice Crystals' },
  { id: 'cave', name: 'Treasure of the Ice Cave' },
  { id: 'falls', name: 'Up the Frozen Falls' },
  { id: 'sparkle', name: 'Sparkle in the Snow' },
  { id: 'shards', name: 'Moon Shards on the Floes' },
  { id: 'igloo', name: 'Above the Igloos' },
  { id: 'timer', name: 'Timer Steps: Icicle Stairs' },
  { id: 'dive', name: 'Under the Ice Floe' },
  { id: 'lake', name: 'Center of the Frozen Lake' },
  { id: 'chomp', name: 'Chomp Cracks the Glacier' },
  { id: 'collector', name: 'Regional Coin Collector' },
];

export default {
  id: 'frost',
  name: 'Frost Kingdom',
  short: 'Frost',
  region: 'Kingdom 3',
  subtitle: 'Shiverpeak Glacier',
  music: 'snow',
  moonColor: '#5fd4ff',
  orb: 'radial-gradient(circle at 35% 30%, #ffffff, #a8dcf5 55%, #4f8fc8)',
  purpleColor: '#9a6bff',
  purpleShape: 'star',
  moonsToLeave: 8,
  killY: -30,
  killYAt: (x) => (x > 300 ? -175 : -30),
  seed: 37,
  bounds: { minX: -135, maxX: 135, minZ: -135, maxZ: 135 },
  titleCam: { x: 0, y: 50, z: 10, r: 95, ly: 18 },
  env: {
    sky: { top: '#5e98e0', horizon: '#e9f4ff', bottom: '#d8e8f6', sunColor: '#fffaf0', clouds: 0.85, cloudColor: '#f6faff' },
    fog: { color: '#e4effa', near: 90, far: 480 },
    sunDir: [-0.35, 0.72, 0.5],
    sunColor: '#fff8ec', sunIntensity: 1.9,
    hemiSky: '#dce9ff', hemiGround: '#9aaac0', hemiIntensity: 0.85,
    mapBg: '#5a8ab8',
    snow: true,
    exposure: 1.0,
    envIntensity: 0.4,
  },
  moonList: MOONS,
  build(L) {
    const K = kit(L), D = decor(L);
    const M = {};
    const def = (id) => MOONS.find((m) => m.id === id);
    const moon = (id, x, y, z, extra = {}) => (M[id] = K.moon({ ...def(id), x, y, z, ...extra }));
    const r = rng(17);
    const BLUE = '#3f6fd0';

    L.terrain({ size: 280, cell: 2, height: frostHeight, color: frostColor });
    L.water({ x: 0, z: 0, w: 280, d: 280, y: SEA, shallow: '#7fd8e8', deep: '#2a5f9a', foam: '#ffffff', cold: true });
    for (const [x, z, w, d] of [[0, -142, 300, 10], [0, 142, 300, 10], [-142, 0, 10, 300], [142, 0, 10, 300]]) L.box(x, 80, z, w, 140, d, '#000', { visible: false, cam: false });

    // ================================================== landing
    L.spawn = { x: 0, y: K.gy(0, 78) + 0.2, z: 78, facing: Math.PI };
    K.ship(10, 90, -0.4);
    K.checkpoint('odyssey', 'The Odyssey', -6, 88, Math.PI);
    K.sign(-6, 74, ['FROST KINGDOM', 'Watch your step: ice is slippery for plumbers, but not for Goombas.', 'And whatever you do, do not go swimming. The sea is freezing!'], 0.4);
    K.line(0, 70, 0, 52, 6, 1);

    // ================================================== Shiverpeak
    {
      const top = frostHeight(PEAK.x, PEAK.z);
      L.cylinder(PEAK.x, top - 2, PEAK.z, 3.2, 6.5, '#a8b4c8', { top: '#f4f8ff' });
      L.box(PEAK.x + 4, top + 7.5, PEAK.z, 2.6, 0.7, 2.6, '#9aa6ba', { top: '#ffffff', band: 0.2 });
      L.box(PEAK.x + 1, top + 9.8, PEAK.z + 4, 2.6, 0.7, 2.6, '#9aa6ba', { top: '#ffffff', band: 0.2 });
      moon('peak', PEAK.x, top + 6.5 + 1.6, PEAK.z);
      D.flagPole(PEAK.x - 2, top + 4.5, PEAK.z - 1, '#e0202a');
      K.checkpoint('summit', 'Summit Camp', PEAK.x + 8, PEAK.z + 10, 0.6);
      // switchback coins up the south face
      for (let i = 0; i < 14; i++) {
        const t = i / 13;
        const a = 1.4 + t * 2.6;
        const rr = 48 - t * 36;
        const x = PEAK.x + Math.cos(a) * rr * 0.6, z = PEAK.z + Math.sin(a) * rr;
        K.coin(x, K.gy(x, z) + 1, z);
      }
    }

    // ================================================== frozen falls (west face) - wall jump climb
    {
      const x = -26, z = -30, g = K.gy(x, z);
      D.iceWall(x - 2.2, g + 20, z, 1.6, 22, 7);
      D.iceWall(x + 2.2, g + 20, z, 1.6, 22, 7);
      L.box(x, g + 20, z - 3.4, 2.8, 22, 0.6, '#9fd4f0', { kind: 'glossy' });
      L.platform(x, g + 20.6, z + 5.4, 7, 4, { h: 1, side: '#9aa6ba', top: '#ffffff' });
      moon('falls', x - 1.8, g + 22, z + 5.4);
      for (let i = 0; i < 7; i++) K.coin(x, g + 3 + i * 2.5, z);
    }

    // ================================================== igloo village (west)
    {
      const vx = -74, vz = -6;
      D.igloo(vx - 6, vz - 6, 0.6, 3.2);
      D.igloo(vx + 8, vz - 2, -0.4, 2.8);
      D.igloo(vx - 2, vz + 10, 2.2, 3.4);
      moon('igloo', vx - 6, K.gy(vx - 6, vz - 6) + 8.2, vz - 6, { hidden: true });
      K.block(vx - 6, K.gy(vx - 6, vz - 6) + 5.6, vz - 6, 'hidden', 'moon', { moon: M.igloo });
      new NPC(L, vx + 3, K.gy(vx + 3, vz + 3), vz + 3, { name: 'Brrrnie', body: '#f2f6ff', accent: '#3f6fd0', hat: 'beanie', lines: [
        'Welcome to Igloo Town! Pengo the penguin thinks nobody can beat him in a race.',
        'You can find him near where your ship landed. Go show him!',
      ] });
      new NPC(L, vx - 10, K.gy(vx - 10, vz + 4), vz + 4, { name: 'Flurry', body: '#f2f6ff', accent: '#d84a7a', hat: 'beanie', lines: [
        'Ice crystals are popping up all over the island. Five of them!',
        'Smash them all with your cap and something nice might happen.',
      ] });
      K.checkpoint('village', 'Igloo Town', vx + 12, vz + 10, -1.2);
      // snowman & carrot
      moon('carrot', vx + 14, K.gy(vx + 14, vz - 12) + 1.4, vz - 12, { hidden: true });
      const carrot = new CarryItem(L, -26 + 1.8, K.gy(-26, -30) + 20.7, -30 + 5.4, { name: 'carrot' });
      new Snowman(L, vx + 14, vz - 14, carrot, M.carrot);
      // timer: icicle steps up to a ledge on the cliff
      const lx = vx - 22, lz = vz - 20, top = K.gy(lx, lz) + 15;
      L.cylinder(lx, K.gy(lx, lz) - 1, lz, 2.6, 16, '#9aa6ba', { top: '#ffffff' });
      moon('timer', lx, top + 1.4, lz);
      const steps = [];
      const sx = vx - 8, sz = vz - 14;
      for (let i = 0; i < 6; i++) {
        const t = (i + 1) / 7;
        steps.push(K.ghost(sx + (lx - sx) * t, K.gy(sx, sz) + 2.2 + i * 2.2, sz + (lz - sz) * t, 2.6, 0.6, 2.6, '#7fd8ff'));
      }
      K.timerSwitch(sx, sz, { duration: 8.5, targets: steps, color: '#3fb8ff' });
    }

    // ================================================== frozen lake (south-west)
    {
      const ly = 0.6;
      L.cylinder(LAKE.x, ly - 1.2, LAKE.z, LAKE.r + 4, 1.2, '#bfe6fa', { kind: 'glossy', surface: 'ice', seg: 48 });
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * TAU;
        L.rock(LAKE.x + Math.cos(a) * 9, LAKE.z + Math.sin(a) * 9, 1.0, '#c9d6e4', { y: ly });
      }
      moon('lake', LAKE.x, ly + 1.5, LAKE.z);
      for (const [x, z] of [[LAKE.x + 8, LAKE.z - 3], [LAKE.x - 6, LAKE.z + 7], [LAKE.x + 2, LAKE.z + 10], [LAKE.x - 10, LAKE.z - 6]]) new Goomba(L, x, z, { color: '#7a8cc8', y: ly });
      K.ring(LAKE.x, ly + 1, LAKE.z, 6, 10, true);
    }

    // ================================================== ice bridge over the sea (south-east)
    {
      const pts = [[54, 66], [64, 72], [70, 82], [80, 86], [88, 96], [98, 100]];
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        const len = Math.hypot(bx - ax, bz - az) + 0.6;
        D.iceSheet((ax + bx) / 2, 0.5, (az + bz) / 2, 1.8, len, Math.atan2(bx - ax, bz - az), { h: 1.2 });
        K.coin((ax + bx) / 2, 1.6, (az + bz) / 2);
      }
      L.cylinder(104, -6, 104, 5, 6.5, '#c9d6e4', { top: '#ffffff' });
      moon('bridge', 104, 2.1, 104);
    }

    // ================================================== ice floes, shards, dive moon
    {
      const floes = [[-40, 112, 4], [-60, 100, 3.5], [-20, 120, 3], [30, 118, 3.5], [-90, 80, 4]];
      floes.forEach(([x, z, s]) => D.iceSheet(x, 0.3, z, s * 2, s * 2, r() * 3, { h: 1.0, surface: 'ice' }));
      moon('shards', -6, K.gy(-6, 96) + 1.5, 96, { hidden: true });
      K.shards(M.shards, floes.map(([x, z]) => [x, 1.6, z, true]));
      moon('dive', -30, -6, 102);
      L.box(-30, -9, 102, 6, 1, 6, '#7d93a8', { round: 0.3 });
    }

    // ================================================== ice crystals (5)
    {
      moon('crystals', -10, K.gy(-10, 40) + 1.4, 40, { hidden: true });
      const group = { moon: M.crystals };
      for (const [x, z] of [[40, 40], [-30, 30], [70, -10], [-50, -60], [30, -70]]) new IceCrystal(L, x, K.gy(x, z), z, group);
    }

    // ================================================== sparkle in the pines (north-east)
    {
      moon('sparkle', 78, K.gy(78, -64) + 1.4, -64, { hidden: true });
      K.sparkle(78, -64, () => M.sparkle.appear(new THREE.Vector3(78, K.gy(78, -64), -64)));
    }

    // ================================================== chain chomp & glacier boulder
    {
      new ChainChomp(L, 58, 20, { chain: 7 });
      moon('chomp', 66, K.gy(66, 14) + 1.4, 14, { hidden: true });
      K.breakable(66, 14, { style: 'rock', size: 2.4, need: 'heavy', contents: M.chomp, color: '#a8c8e0' });
      K.breakable(52, 28, { style: 'rock', size: 2.0, need: 'heavy', contents: 'coins', color: '#a8c8e0' });
    }

    // ================================================== ice cave (pipe)
    {
      K.pipe(56, -30, { h: 1.6, dest: { x: 400, y: -148, z: 8, facing: Math.PI }, color: '#4fa8d8' });
      const ox = 400, oy = -150;
      L.box(ox, oy, 0, 24, 2, 40, '#9fc4dc', { top: '#d8ecf8' });
      L.box(ox, oy + 14, 0, 24, 2, 40, '#7d93a8');
      for (const [wx, wz, w, d] of [[ox - 12, 0, 1, 40], [ox + 12, 0, 1, 40], [ox, -20, 24, 1], [ox, 20, 24, 1]]) L.box(wx, oy + 13, wz, w, 15, d, '#8fb4cc');
      L.trigger(ox, 0, 24, 40, oy - 10, oy + 16, () => { L.game.respawnPoint = { x: ox, y: oy + 1, z: 8, facing: Math.PI }; });
      K.pipe(ox, 14, { h: 1.2, dest: { x: 56, y: K.gy(56, -26) + 0.4, z: -26, facing: 0 }, color: '#4fa8d8' }, oy);
      // slippery ice platforms over freezing water
      L.water({ x: ox, z: -6, w: 22, d: 22, y: oy - 0.5, cold: true, bottom: oy - 8, shallow: '#9fe2f0', deep: '#3a7ab8' });
      L.box(ox, oy - 3, -6, 22, 1, 22, '#5a7a98', { collide: true });
      for (let i = 0; i < 5; i++) D.iceSheet(ox + (i % 2 ? 4 : -4), oy + 0.2 + i * 1.2, 2 - i * 4.2, 3.2, 3.2, 0, { h: 1 });
      L.box(ox, oy + 6, -17, 10, 6, 5, '#8fb4cc', { top: '#d8ecf8' });
      moon('cave', ox, oy + 7.5, -17);
      K.ring(ox, oy + 7.2, -17, 3, 8, true);
      for (let i = 0; i < 8; i++) L.addStatic(new THREE.OctahedronGeometry(0.8 + (i % 3) * 0.3, 0), '#bfeaff', 'glossy', { p: [ox - 11 + i * 3, oy + 1 + (i % 2), 19], s: [0.6, 2.2, 0.6], r: [0.2 * (i % 3), i, 0.15] });
    }

    // ================================================== penguin race
    {
      const path = [[-12, 66], [-34, 58], [-56, 40], [-70, 16], [-62, -10], [-66, -36], [-48, -60], [-24, -80], [0, -96]];
      moon('race', 0, 0, -96, { hidden: true });
      const racer = new PenguinRacer(L, path, { moon: M.race, speed: 8.3 });
      void racer;
      D.lighthouse(8, -102);
      D.flagPole(0, K.gy(0, -96), -96, '#ffcf3a');
      path.slice(1, -1).forEach(([x, z], i) => { if (i % 2 === 0) D.post(x + 3, K.gy(x + 3, z), z, '#e0402a'); });
      K.checkpoint('lighthouse', 'Old Lighthouse', 18, -96, -1.4);
    }

    // ================================================== enemies
    for (const [x, z] of [[20, 50], [-20, 50], [40, 0], [-30, 0], [10, -60], [60, -50], [-50, 70], [80, 30]]) new Goomba(L, x, z, { color: '#7a8cc8' });
    new Piranha(L, -40, -40); new Piranha(L, 40, -40);

    // ================================================== regional coins (35)
    const P = [
      [PEAK.x + 4, frostHeight(PEAK.x, PEAK.z) + 8.6, PEAK.z, true], [PEAK.x + 1, frostHeight(PEAK.x, PEAK.z) + 10.9, PEAK.z + 4, true], [-26, 6, -30], [-26, 14, -30], [-74 - 6, 12, -12, true],
      [-74 + 8, 6.5, -8, true], [-96, 17.5, -26, true], [LAKE.x + 5, 1.6, LAKE.z + 5, true], [LAKE.x - 5, 1.6, LAKE.z - 5, true], [64, 1.8, 72, true],
      [88, 1.8, 96, true], [104, 2.6, 106, true], [-40, 1.5, 112, true], [30, 1.5, 118, true], [-90, 1.5, 80, true],
      [-30, -5, 98, true], [40, 1.5, 40], [70, 1.5, -10], [-50, 1.5, -60], [78, 1.5, -60],
      [400, -146, -17, true], [404, -147, -2, true], [56, 1.5, -24], [0, 1.5, -100], [-66, 1.5, -36],
      [-56, 1.5, 40], [100, 1.5, 0], [-110, 1.5, 0], [0, 1.5, 110], [110, 1.5, 60],
      [PEAK.x - 20, 1.2, PEAK.z + 20], [PEAK.x + 22, 1.2, PEAK.z - 10], [PEAK.x, 1.2, PEAK.z + 30], [-20, 1.5, -100], [96, 1.5, -80],
    ];
    P.forEach(([x, y, z, abs], i) => K.purple('f' + i, x, y, z, abs));
    moon('collector', 4, K.gy(4, 96) + 1.6, 96, { hidden: true });
    L.onPurpleComplete = () => M.collector.appear(new THREE.Vector3(10, K.gy(10, 90) + 4, 90));

    // ================================================== scenery
    for (let i = 0; i < 110; i++) {
      const x = (r() - 0.5) * 230, z = (r() - 0.5) * 230;
      const h = frostHeight(x, z);
      if (h < SEA + 1.2 || h > 30 || Math.hypot(x, z - 84) < 18 || Math.hypot(x + 74, z + 6) < 20 || Math.hypot(x - LAKE.x, z - LAKE.z) < LAKE.r + 6) continue;
      L.tree(x, z, { kind: 'snowpine', leaf: '#2f6e4a', leaf2: '#3a8058', trunk: '#6b4a2e', scale: 0.9 + r() * 0.6 });
    }
    for (let i = 0; i < 30; i++) {
      const x = (r() - 0.5) * 220, z = (r() - 0.5) * 220;
      if (frostHeight(x, z) < SEA + 0.6) continue;
      L.rock(x, z, 0.6 + r() * 1.5, '#b4c2d4');
    }
    void BLUE;
  },
};
