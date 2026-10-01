// Cinder Keep: Bowser's volcanic stronghold on a lava sea. Final kingdom.
import * as THREE from 'three';
import { kit } from './kit.js';
import { decor } from './decor.js';
import { fbm2, smoothstep, rng, TAU } from '../core/math.js';
import { Goomba, Podoboo, Thwomp, FireBar, Cannon, ChainChomp, Piranha } from '../entities/enemies.js';
import { Bowser } from '../entities/bosses.js';
import { FloatingCappy } from '../entities/misc.js';

const LAVA = -1.5;
const VOLC = { x: 74, z: 6, r: 36, h: 44 };
const ARENA = { x: 0, z: -94, r: 21, y: 26 };

function island(x, z, cx, cz, r, top, edge = 6) {
  const d = Math.hypot(x - cx, z - cz) + fbm2(x * 0.06, z * 0.06, 2) * 4;
  return -9 + (top + 9) * smoothstep(r, r - edge, d);
}

export function cinderHeight(x, z) {
  let h = -9;
  h = Math.max(h, island(x, z, 0, 86, 22, 2.2));          // landing island
  h = Math.max(h, island(x, z, 0, 22, 12, 1.8, 4));        // gauntlet rock
  h = Math.max(h, island(x, z, 0, -62, 50, 3.6));          // castle island
  h = Math.max(h, island(x, z, -72, 30, 9, 2.4, 3));       // podoboo lake islet
  h = Math.max(h, island(x, z, 40, 60, 10, 2.0, 4));       // cannon islet
  // volcano
  const dv = Math.hypot(x - VOLC.x, z - VOLC.z) + fbm2(x * 0.05, z * 0.05, 2) * 4;
  const m = Math.max(0, 1 - dv / VOLC.r);
  let vh = -9 + Math.pow(m, 1.05) * (VOLC.h + 9);
  vh -= smoothstep(0.82, 0.95, m) * 8; // crater
  h = Math.max(h, vh);
  h += fbm2(x * 0.08, z * 0.08, 2) * 0.6;
  return h;
}

function cinderColor(x, z, h, n) {
  if (h < LAVA + 0.4) return '#ff6a1a';
  if (h < LAVA + 1.4) return '#8a3a1e';
  if (n.y < 0.65) return Math.sin(h * 1.7 + x * 0.1) > 0 ? '#3e3330' : '#4a3d38';
  const v = fbm2(x * 0.09, z * 0.09, 3);
  if (Math.hypot(x - VOLC.x, z - VOLC.z) < VOLC.r * 0.3 && h > 30) return '#5a2a1e';
  return v > 0.2 ? '#5d524c' : v > -0.1 ? '#4f4540' : '#463c38';
}

const MOONS = [
  { id: 'gate', name: 'Crashing the Castle Gate' },
  { id: 'podoboo', name: 'A Swim Through the Lava' },
  { id: 'thwomp', name: 'Past the Thwomp Bridge' },
  { id: 'firebars', name: 'Fire Bar Gauntlet' },
  { id: 'volcano', name: 'Volcano Summit' },
  { id: 'shards', name: 'Moon Shards over Magma' },
  { id: 'bullet', name: 'Bullet Bill Across the Magma' },
  { id: 'rampart', name: 'Hidden on the Ramparts' },
  { id: 'chomp', name: 'Chomp Breaks the Vault' },
  { id: 'sparkle', name: 'Sparkle in the Ashes' },
  { id: 'timer', name: 'Timer Steps: Magma Stairs' },
  { id: 'bowser', name: 'The Grand Moon', multi: true, final: true },
  { id: 'collector', name: 'Regional Coin Collector' },
];

export default {
  id: 'cinder',
  name: 'Cinder Keep',
  short: 'Cinder',
  region: 'Kingdom 4',
  subtitle: "Bowser's Stronghold",
  music: 'lava',
  moonColor: '#ff5a3a',
  orb: 'radial-gradient(circle at 35% 30%, #ffb37a, #d8402a 55%, #4a1010)',
  purpleColor: '#ff5ad8',
  purpleShape: 'hex',
  moonsToLeave: 0,
  killY: -25,
  seed: 51,
  bounds: { minX: -110, maxX: 115, minZ: -130, maxZ: 115 },
  titleCam: { x: 0, y: 46, z: 0, r: 90, ly: 10 },
  env: {
    sky: { top: '#140a24', horizon: '#ff6a3a', bottom: '#3a0f0a', sunColor: '#ffb08a', clouds: 0.55, cloudColor: '#5a2a3a', stars: 0.6 },
    fog: { color: '#4a1f1c', near: 70, far: 420 },
    sunDir: [0.3, 0.6, -0.6],
    sunColor: '#ffc4a0', sunIntensity: 1.6,
    hemiSky: '#ff9a7a', hemiGround: '#ff5a1a', hemiIntensity: 0.9,
    mapBg: '#5a1a10',
    exposure: 1.08,
    envIntensity: 0.35,
  },
  moonList: MOONS,
  isleTop: '#5d524c',
  isleRock: '#3e3330',
  build(L) {
    const K = kit(L), D = decor(L);
    const M = {};
    const def = (id) => MOONS.find((m) => m.id === id);
    const moon = (id, x, y, z, extra = {}) => (M[id] = K.moon({ ...def(id), x, y, z, ...extra }));
    const r = rng(29);
    const STONE = '#5a5058', DARK = '#3e363e', RED = '#8a1f2a';

    L.terrain({ size: 270, cell: 2, height: cinderHeight, color: cinderColor, x0: -130, z0: -140 });
    L.water({ x: 0, z: -10, w: 280, d: 280, y: LAVA, lava: true });
    for (const [x, z, w, d] of [[0, -138, 300, 10], [0, 120, 300, 10], [-115, 0, 10, 300], [120, 0, 10, 300]]) L.box(x, 80, z, w, 140, d, '#000', { visible: false, cam: false });

    // ================================================== landing island
    L.spawn = { x: 0, y: K.gy(0, 84) + 0.2, z: 84, facing: Math.PI };
    K.ship(10, 94, -0.4);
    K.checkpoint('odyssey', 'The Odyssey', -6, 92, Math.PI);
    new FloatingCappy(L, -5, K.gy(-5, 80) + 1.6, 80, { lines: [
      { who: 'Cappy', text: "This is it, Mario: Bowser's castle. He's holed up on the roof of the keep with the Grand Moon." },
      { who: 'Cappy', text: "Lava burns but won't finish you right away. Bounce out fast! And knock off that silly hat of his with me." },
    ] });
    K.line(0, 76, 0, 66, 4, 1);

    // ================================================== A: podoboo stepping stones (z 64 -> 44)
    {
      const stones = [[0, 62], [4, 57], [-1, 52], [3, 47], [0, 42]];
      stones.forEach(([x, z], i) => { L.cylinder(x, -6, z, 2.1, 7.6, DARK, { top: '#6e6470' }); K.coin(x, 2.8, z); });
      for (const [x, z, d] of [[2, 59.5, 0], [1, 54.5, 1.2], [1.5, 49.5, 0.6]]) new Podoboo(L, x, z, LAVA, { delay: d, jump: 15 });
    }

    // ================================================== B: thwomp bridge (z 40 -> 30)
    {
      L.box(0, 1.6, 36, 5, 2, 12, STONE, { top: '#7a7076' });
      for (const [x, z] of [[0, 39], [0, 35], [0, 31]]) new Thwomp(L, x, 8.5, z);
      moon('thwomp', 0, 3.2, 26.5);
      K.checkpoint('bridge', 'Thwomp Bridge', 3, 24, Math.PI);
    }

    // ================================================== C: fire bar gauntlet (gauntlet rock z 26 -> 14)
    {
      new FireBar(L, -3, K.gy(-3, 20) + 1.2, 20, { n: 5, speed: 1.5 });
      new FireBar(L, 4, K.gy(4, 16) + 1.2, 16, { n: 5, speed: -1.8, phase: 1 });
      K.mover([[0, 2.5, 8], [0, 2.5, -4]], 4, 4, { speed: 3.5, color: '#6e6470', top: '#ff8a3a' });
      K.mover([[0, 2.5, -8], [0, 3.5, -16]], 4, 4, { speed: 3, color: '#6e6470', top: '#ff8a3a', phase: 1 });
      L.box(0, 2.4, 13.5, 6, 2, 4, STONE, { top: '#7a7076' });
      moon('firebars', 0, 3.9, 13.5);
    }

    // ================================================== castle island & gate
    {
      // outer wall with a gate at z = -24
      D.castleWall(-36, -24, -6, -24, 9);
      D.castleWall(6, -24, 36, -24, 9);
      D.castleWall(-36, -24, -36, -86, 9);
      D.castleWall(36, -24, 36, -86, 9);
      L.box(0, 3.6 + 13, -24, 12, 4, 3, STONE, { top: '#6e6470' }); // gate lintel
      D.tower(-36, -24, 4.2, 14); D.tower(36, -24, 4.2, 14);
      D.tower(-36, -86, 4.2, 16); D.tower(36, -86, 4.2, 16);
      for (const x of [-10, 10]) D.banner(x, 3.6 + 12, -22.4, 0, 5);
      moon('gate', 0, K.gy(0, -18) + 1.6, -18);
      K.checkpoint('gate', 'Castle Gate', 8, -16, Math.PI);
      for (const x of [-4, 4]) D.torch(x, K.gy(x, -20), -20);
      // ramparts walkway + hidden block
      L.box(-36, 3.6 + 9.2, -55, 3.4, 0.4, 60, STONE, { top: '#7a7076', collide: true });
      moon('rampart', -36, 3.6 + 13.4, -55, { hidden: true });
      K.block(-36, 3.6 + 11.2, -55, 'hidden', 'moon', { moon: M.rampart });
      for (let i = 0; i < 6; i++) L.box(-31 + i * 0.01, 3.6 + 1.5 + i * 1.3, -30 - i * 2.4, 3, 1.4, 2.4, STONE, { top: '#7a7076' });
    }

    // ================================================== courtyard
    {
      const cy = K.gy(0, -45);
      for (const [x, z] of [[-14, -40], [14, -44], [-6, -60], [10, -64]]) new Goomba(L, x, z, { color: '#6a3a6a' });
      new Cannon(L, -24, -70, 0.7, { interval: 4.5 });
      new Cannon(L, 24, -70, -0.7, { interval: 5.0 });
      new Piranha(L, -22, -38); new Piranha(L, 22, -38);
      // vault + chain chomp
      new ChainChomp(L, 20, -52, { chain: 7 });
      moon('chomp', 27, cy + 1.6, -48, { hidden: true });
      K.breakable(27, -48, { style: 'rock', size: 2.6, need: 'heavy', contents: M.chomp, color: '#6e6470' });
      // sparkle in the ash garden
      moon('sparkle', -20, cy + 1.6, -58, { hidden: true });
      K.sparkle(-20, -58, () => M.sparkle.appear(new THREE.Vector3(-20, cy, -58)));
      // timer stairs to a balcony high on the east wall
      const steps = [];
      for (let i = 0; i < 6; i++) steps.push(K.ghost(20 + i * 1.6, cy + 2 + i * 2.1, -32 - i * 2.4, 2.6, 0.6, 2.6, '#ff6a3a'));
      L.box(31.5, cy + 15, -48, 4, 1.2, 5, STONE, { top: '#7a7076' });
      moon('timer', 31.5, cy + 16.4, -48);
      K.timerSwitch(16, -30, { duration: 8, targets: steps, color: '#ff4a2a' });
      // the keep: spiral ramps up to Bowser's arena
      const kx = ARENA.x, kz = ARENA.z;
      L.cylinder(kx, cy - 2, kz, 17, ARENA.y - cy + 0.5, DARK, { seg: 32, top: '#6e6470' });
      for (let i = 0; i < 12; i++) {
        const a = Math.PI / 2 + i * 0.5;
        const rr = 23.4;
        const y = cy + 1.8 + i * ((ARENA.y - cy) / 12);
        L.box(kx + Math.cos(a) * rr, y, kz + Math.sin(a) * rr, 4.4, 0.9, 3.6, STONE, { rot: Math.PI / 2 - a, top: '#7a7076', band: 0.2 });
        if (i % 3 === 1) D.torch(kx + Math.cos(a) * (rr + 1.2), y, kz + Math.sin(a) * (rr + 1.2));
      }
      K.checkpoint('keep', 'Foot of the Keep', 0, -64, Math.PI);
    }

    // ================================================== Bowser's arena on the keep roof
    {
      L.cylinder(ARENA.x, ARENA.y - 1.5, ARENA.z, ARENA.r, 1.5, '#4a4048', { seg: 48, top: '#6a5f68' });
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * TAU;
        if (i % 4 === 0) D.torch(ARENA.x + Math.cos(a) * (ARENA.r - 0.8), ARENA.y, ARENA.z + Math.sin(a) * (ARENA.r - 0.8));
      }
      moon('bowser', ARENA.x, ARENA.y + 2.4, ARENA.z, { hidden: true });
      new Bowser(L, ARENA.x, ARENA.z - 10, { y: ARENA.y, cx: ARENA.x, cz: ARENA.z, arena: ARENA.r, moon: M.bowser });
      L.trigger(ARENA.x, ARENA.z, ARENA.r * 2, ARENA.r * 2, ARENA.y - 1, ARENA.y + 12, () => { L.game.respawnPoint = { x: ARENA.x, y: ARENA.y + 0.5, z: ARENA.z + ARENA.r - 3, facing: Math.PI }; });
    }

    // ================================================== volcano (east) + bullet bill flight
    {
      for (let i = 0; i < 14; i++) {
        const a = Math.PI * 0.9 + i * 0.45;
        const rr = VOLC.r * (0.85 - i * 0.045);
        const x = VOLC.x + Math.cos(a) * rr, z = VOLC.z + Math.sin(a) * rr;
        const y = cinderHeight(x, z) + 1.5;
        L.box(x, y, z, 4, 1.6, 3.4, DARK, { rot: -a, top: '#6e6470' });
        K.coin(x, y + 1.1, z);
      }
      const top = cinderHeight(VOLC.x, VOLC.z);
      L.cylinder(VOLC.x, top - 2, VOLC.z, 3, 4, DARK, { top: '#6e6470' });
      moon('volcano', VOLC.x, top + 3.4, VOLC.z);
      L.water({ x: VOLC.x, z: VOLC.z, r: 8, y: top - 3, lava: true });
      // bullet bill flight from the cannon islet to a lone pillar
      new Cannon(L, 40, 66, Math.PI * 0.75, { interval: 3.4, range: 40 });
      L.cylinder(70, -8, 92, 2.6, 18, DARK, { top: '#6e6470' });
      moon('bullet', 70, 11.6, 92);
      K.sign(36, 56, ['Bullet Bill Express: ride to the lone pillar. No refunds.'], 0.8);
    }

    // ================================================== podoboo lava lake (west)
    {
      L.cylinder(-72, -6, -10, 3, 8.2, DARK, { top: '#6e6470' });
      moon('podoboo', -72, 3.8, -10);
      for (const [x, z] of [[-60, 24], [-66, 16], [-74, 10]]) new Podoboo(L, x, z, LAVA, { delay: Math.random() * 2 });
      K.sign(-64, 34, ['Only lava bubbles can swim here.', 'Capture one with Cappy!'], -0.6);
      K.checkpoint('islet', 'Magma Islet', -72, 36, -2.6);
    }

    // ================================================== moon shards on floating rocks
    {
      moon('shards', 0, K.gy(0, 72) + 1.6, 72, { hidden: true });
      const rocks = [[-30, 6, 50], [30, 7, 40], [-44, 8, -6], [46, 9, -40], [-20, 10, 100]];
      rocks.forEach(([x, y, z]) => { D.floatingIsle(x, y, z, 3.2); });
      K.shards(M.shards, rocks.map(([x, y, z]) => [x, y + 1.4, z, true]));
      // a path of floating rocks toward the shards
      for (let i = 0; i < 4; i++) D.floatingIsle(-12 - i * 5, 2.5 + i, 70 - i * 6, 2.2);
      for (let i = 0; i < 4; i++) D.floatingIsle(12 + i * 5, 3 + i, 50 - i * 3, 2.2);
    }

    // ================================================== regional coins (30)
    const P = [
      [2, 3, 62, true], [3, 3, 47, true], [0, 3.4, 36, true], [0, 5, 20, true], [0, 3.6, -2, true],
      [-36, 14.2, -40, true], [-36, 14.2, -70, true], [36, 14.6, -30, true], [-20, 5, -48], [20, 5, -78],
      [ARENA.x + 12, ARENA.y + 1, ARENA.z, true], [ARENA.x - 12, ARENA.y + 1, ARENA.z, true], [VOLC.x - 20, 12, VOLC.z, true], [VOLC.x + 4, 34, VOLC.z - 14, true], [70, 11.6, 96, true],
      [-72, 4, -14, true], [-72, 3.2, 30], [40, 3, 60], [-30, 7.4, 50, true], [30, 8.4, 40, true],
      [-44, 9.4, -6, true], [46, 10.4, -40, true], [-20, 11.4, 100, true], [-27, 7, 52, true], [27, 7, 41, true],
      [0, 3, 100], [-14, 3, 86], [14, 3, 86], [0, 16, -80, true], [-6, 17.6, -80, true],
    ];
    P.forEach(([x, y, z, abs], i) => K.purple('c' + i, x, y, z, abs));
    moon('collector', 4, K.gy(4, 100) + 1.6, 100, { hidden: true });
    L.onPurpleComplete = () => M.collector.appear(new THREE.Vector3(10, K.gy(10, 94) + 4, 94));

    // ================================================== ambience
    for (let i = 0; i < 40; i++) {
      const x = (r() - 0.5) * 220, z = (r() - 0.5) * 220;
      const h = cinderHeight(x, z);
      if (h < LAVA + 1 || Math.abs(x) < 38 && z < -20 && z > -92) continue;
      L.rock(x, z, 0.6 + r() * 1.6, '#4a3d38');
    }
    // drifting embers over the lava
    let et = 0;
    L.updaters.push((dt) => {
      et += dt;
      if (et > 0.05 && L.game.fx) {
        et = 0;
        const c = L.game.camera.position;
        L.game.fx.embers(c.x + (Math.random() - 0.5) * 60, LAVA + 0.2, c.z + (Math.random() - 0.5) * 60, 1);
      }
    });
    D.clouds(10, 70, 100, 210, '#5a2a3a');
    void RED;
  },
};
