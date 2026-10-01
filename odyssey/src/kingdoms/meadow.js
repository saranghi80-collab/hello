// Meadow Kingdom: rolling green island, waterfall plateau with the Old Tower, lake, ruins, floating islands.
import * as THREE from 'three';
import { kit } from './kit.js';
import { fbm2, smoothstep, lerp, clamp, rng, TAU } from '../core/math.js';
import { Goomba, Frog, ChainChomp, Piranha } from '../entities/enemies.js';
import { GoombaKing, Goombette } from '../entities/bosses.js';
import { NPC, JumpRope } from '../entities/misc.js';
import { decor } from './decor.js';

const SEA = -1.2;

function segDist(px, pz, ax, az, bx, bz) {
  const abx = bx - ax, abz = bz - az;
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / (abx * abx + abz * abz), 0, 1);
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}
const PATHS = [
  [[0, 46], [4, 30], [14, 14], [30, 2], [46, -2]],
  [[0, 46], [-14, 34], [-30, 24], [-42, 14]],
  [[14, 14], [34, 18], [44, 22]],
  [[-4, 30], [-10, 10], [-8, -18]],
];
function pathDist(x, z) {
  let d = Infinity;
  for (const p of PATHS) for (let i = 0; i < p.length - 1; i++) d = Math.min(d, segDist(x, z, p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]));
  return d;
}

export function meadowHeight(x, z) {
  const r = Math.hypot(x, z * 0.92);
  const island = smoothstep(130, 102, r + fbm2(x * 0.02, z * 0.02, 2) * 10);
  let h = -8 + island * 9.2;
  h += island * (fbm2(x * 0.017 + 3.1, z * 0.017 - 2.3, 3) * 3.4 + 0.8);
  // north plateau
  const px = smoothstep(84, 68, Math.abs(x + 4) + fbm2(z * 0.05, 1.3, 2) * 4);
  const pz = smoothstep(-35, -45, z + fbm2(x * 0.05, 7.1, 2) * 3) * smoothstep(-122, -108, z);
  const plateau = px * pz;
  h = lerp(h, 20 + fbm2(x * 0.04, z * 0.04, 2) * 1.0, plateau);
  // river on the plateau feeding the waterfall
  const rv = smoothstep(5, 3, Math.abs(x - Math.sin(z * 0.06) * 3)) * smoothstep(-36, -41, z) * smoothstep(-104, -96, z);
  h -= rv * 1.6 * plateau;
  // west lake basin
  const dl = Math.hypot(x + 64, z - 10);
  h -= smoothstep(32, 12, dl) * 7;
  // plunge pool below the waterfall
  const dp = Math.hypot(x, (z + 31) * 1.2);
  h -= smoothstep(13, 4, dp) * 5;
  // east ruins mesa: a low raised shelf
  const ex = smoothstep(32, 38, x) * smoothstep(92, 84, x) * smoothstep(-6, 0, z) * smoothstep(52, 46, z);
  h = lerp(h, Math.max(h, 4.2), ex);
  // flatten the landing meadow + paths
  const dSpawn = Math.hypot(x - 2, z - 52);
  h = lerp(h, 1.4, smoothstep(16, 6, dSpawn) * island);
  // boss arena flat
  const da = Math.hypot(x - 32, z + 80);
  h = lerp(h, 20.2, smoothstep(22, 17, da) * plateau);
  const pd = pathDist(x, z);
  if (pd < 4 && plateau < 0.5) h = lerp(h, h * 0.85 + 0.2, smoothstep(4, 1, pd));
  return h;
}

function meadowColor(x, z, h, n) {
  if (h < SEA - 0.4) return h < SEA - 3 ? '#9fb59a' : '#d9c690';
  if (h < SEA + 0.7) return '#f2deaa';
  if (n.y < 0.62) {
    const band = Math.sin(h * 1.4 + fbm2(x * 0.1, z * 0.1, 2) * 2);
    return band > 0.3 ? '#a8957d' : band > -0.4 ? '#9a8670' : '#8b7863';
  }
  if (n.y < 0.8) return '#7aa84a';
  const pd = pathDist(x, z);
  if (pd < 2.2 && h < 12) return pd < 1.4 ? '#d9b77a' : '#c7b073';
  if (x > 36 && x < 88 && z > -4 && z < 50 && h > 3.8 && h < 5) return fbm2(x * 0.3, z * 0.3) > 0.1 ? '#a3c463' : '#8fb455';
  const v = fbm2(x * 0.06, z * 0.06, 3);
  if (h > 17) return v > 0.12 ? '#86d35a' : v > -0.15 ? '#73c24c' : '#64b244';
  return v > 0.15 ? '#8ad85c' : v > -0.1 ? '#74c64b' : '#62b440';
}

const MOONS = [
  { id: 'lookout', name: 'Atop the Lookout Pillar' },
  { id: 'tower', name: 'Summit of the Old Tower' },
  { id: 'pool', name: 'Treasure of the Plunge Pool' },
  { id: 'frog', name: "A Frog's-Eye View" },
  { id: 'chomp', name: 'Chomp Through the Rocks' },
  { id: 'goombette', name: 'Goomba Tower Romance' },
  { id: 'sparkle', name: 'Something Sparkly in the Flowers' },
  { id: 'shards', name: 'Moon Shards in the Meadow' },
  { id: 'timer', name: 'Timer Steps to the Sky' },
  { id: 'block', name: 'Ruins Block Party' },
  { id: 'rope', name: 'Jump Rope Champion' },
  { id: 'isles', name: 'Hop the Floating Isles' },
  { id: 'sky', name: 'Sky Garden Course' },
  { id: 'boss', name: "King Goombo's Crown Jewel", multi: true },
  { id: 'chimney', name: 'Wall-Jump Chimney' },
  { id: 'ship', name: 'Hidden Behind the Odyssey' },
  { id: 'collector', name: 'Regional Coin Collector' },
];

export default {
  id: 'meadow',
  name: 'Meadow Kingdom',
  short: 'Meadow',
  region: 'Kingdom 1',
  subtitle: 'Blossomfall Plateau',
  music: 'meadow',
  moonColor: '#ffcf2e',
  orb: 'radial-gradient(circle at 35% 30%, #b8f28a, #4fae3a 60%, #2f7a2a)',
  purpleColor: '#c45cff',
  purpleShape: 'star',
  moonsToLeave: 5,
  killY: -30,
  seed: 11,
  bounds: { minX: -130, maxX: 130, minZ: -130, maxZ: 130 },
  titleCam: { x: 0, y: 34, z: 10, r: 78, ly: 8 },
  env: {
    sky: { top: '#2a78e4', horizon: '#c4ecff', bottom: '#a6d4f0', sunColor: '#fff3d1', clouds: 0.75 },
    fog: { color: '#c4ecff', near: 110, far: 560 },
    sunDir: [0.5, 0.78, 0.38],
    sunColor: '#fff2d8', sunIntensity: 2.8,
    hemiSky: '#d8efff', hemiGround: '#6b8f4e', hemiIntensity: 1.3,
    mapBg: '#3a8fd0',
  },
  moonList: MOONS,
  build(L) {
    const K = kit(L);
    const D = decor(L);
    const M = {};
    const def = (id) => MOONS.find((m) => m.id === id);
    const moon = (id, x, y, z, extra = {}) => (M[id] = K.moon({ ...def(id), x, y, z, ...extra }));

    L.terrain({ size: 280, cell: 2, height: meadowHeight, color: meadowColor });
    L.water({ x: 0, z: 0, w: 280, d: 280, y: SEA, shallow: '#58e3d6', deep: '#1c74c8' });
    for (const [x, z, w, d] of [[0, -138, 300, 10], [0, 138, 300, 10], [-138, 0, 10, 300], [138, 0, 10, 300]]) {
      L.box(x, 80, z, w, 120, d, '#000', { visible: false, cam: false });
    }

    // ================================================== landing meadow
    L.spawn = { x: 0, y: K.gy(0, 46) + 0.2, z: 46, facing: Math.PI };
    K.ship(9, 60, -0.5);
    K.checkpoint('odyssey', 'The Odyssey', -5, 56, Math.PI);
    K.sign(-6, 42, [
      'Welcome to the MEADOW KINGDOM!',
      'Power Moons are hidden all over: on high ledges, inside blocks, under sparkling soil, and with the locals.',
      'Gather 5 to charge the Odyssey. Press Esc for the map and the moon list.',
    ], 0.6);
    new NPC(L, 4, K.gy(4, 38), 38, { name: 'Sproutling', body: '#ffe2b8', accent: '#ff8a5c', hat: 'sprout', facing: Math.PI, lines: [
      'Whoa, a flying hat-ship! Did it come from the sky?',
      'If you want a view, try the Lookout Pillar just over there. A triple jump might get you up!',
    ] });
    // Lookout pillar (moon 1)
    {
      const g = K.gy(14, 33);
      L.cylinder(14, g - 1, 33, 1.7, 5.6, '#b8ad9a', { top: '#7fcf52' });
      moon('lookout', 14, g + 5.6, 33);
      K.ring(14, 1, 33, 3.2, 8);
    }
    K.ring(0, 0.9, 28, 4, 8);
    K.line(-10, 40, -30, 26, 6);
    K.blocks(-9, K.gy(-9, 30) + 3.2, 30, 'qbq', 1.5, 0.3, { 0: 'coin', 1: 'none', 2: 'heart' });
    // Hidden block behind the Odyssey (moon)
    moon('ship', 15, K.gy(15, 67) + 4.6, 67, { hidden: true });
    K.block(15, K.gy(15, 67) + 2.6, 67, 'hidden', 'moon', { moon: M.ship });
    // goombas on the meadow
    for (const [x, z] of [[18, 22], [24, 30], [30, 24], [36, 32], [22, 38], [-18, 18], [-6, 4]]) new Goomba(L, x, z);
    new Goombette(L, 30, 40, 4, moon('goombette', 32, K.gy(32, 40) + 1.4, 40, { hidden: true }));
    // sparkle spot (moon 7)
    moon('sparkle', -22, K.gy(-22, 20) + 1.4, 20, { hidden: true });
    K.sparkle(-22, 20, () => M.sparkle.appear(new THREE.Vector3(-22, K.gy(-22, 20), 20)));

    // ================================================== jump rope garden (south-west)
    {
      const x = -32, z = 50;
      moon('rope', x, K.gy(x, z) + 1.4, z, { hidden: true });
      new JumpRope(L, x, z, 0.5, { moon: M.rope, target: 30 });
      for (let i = 0; i < 10; i++) D.giantFlower(x + Math.cos(i) * 11, z + Math.sin(i * 1.3) * 8, i);
    }

    // ================================================== timer steps (west meadow)
    {
      const sx = -30, sz = 34;
      moon('timer', -46, 17.4, 40);
      L.platform(-46, 16, 40, 6, 6, { h: 2.5, side: '#a39582', top: '#7fcf52' });
      const steps = [];
      for (let i = 0; i < 6; i++) steps.push(K.ghost(-33 - i * 2.3, K.gy(sx, sz) + 2.2 + i * 2.25, 36 + (i % 2) * 2.5, 2.6, 0.6, 2.6));
      K.timerSwitch(sx, sz, { duration: 9, targets: steps });
      K.line(-34, 36, -44, 40, 5, 0, { abs: true, y0: 4, y1: 16 });
    }

    // ================================================== waterfall & pool
    L.waterfall(0, 20.6, -39.2, 8, 22.5, 0);
    L.water({ x: 0, z: -70, w: 12, d: 62, y: 19.4, bottom: 15, shallow: '#6ee8de', deep: '#2a86cf' });
    moon('pool', 0, -3.0, -35);
    K.ring(0, -2.4, -31, 3, 8, true);

    // vertical lift to the plateau (west of the falls)
    K.mover([[-14, K.gy(-14, -33) + 0.4, -33], [-14, 21.5, -33]], 3.6, 3.6, { speed: 3.2, pause: 1.6, color: '#b98b55', top: '#e8c88a' });
    K.line(-14, -36, -14, -46, 4, 1.2, { from: 40 });

    // ================================================== terraces up the east side
    for (let i = 0; i < 9; i++) {
      const top = 3.2 + i * 2.1;
      const x = 56 + (i % 2 ? 6 : -2), z = -2 - i * 4.6;
      L.platform(x, top, z, 9, 6.5, { h: top + 4, side: '#a39582', top: '#7fcf52' });
      if (i % 2) K.coin(x, top + 1.1, z);
    }
    K.checkpoint('terraces', 'Terrace Top', 52, -48, Math.PI);

    // wall-jump chimney (between two tall slabs near the terraces)
    {
      const cx = 30, cz = -24, g = K.gy(cx, cz);
      L.box(cx - 2.0, g + 15, cz, 1.6, 16, 6, '#a8957d', { top: '#7fcf52' });
      L.box(cx + 2.0, g + 15, cz, 1.6, 16, 6, '#a8957d', { top: '#7fcf52' });
      L.platform(cx + 4.6, g + 15, cz, 3.2, 4, { h: 1.2, side: '#a8957d' });
      moon('chimney', cx + 4.6, g + 16.4, cz);
      K.line(cx, cz, cx, cz, 1, 3);
      for (let i = 0; i < 5; i++) K.coin(cx, g + 3 + i * 2.4, cz);
    }

    // ================================================== plateau
    // bridges over the river
    for (const bz of [-58, -86]) D.bridge(Math.sin(bz * 0.06) * 3, 19.6, bz, 10, 3, Math.PI / 2);
    // Old Tower with a spiral of ledges
    {
      const tx = -30, tz = -78, base = 19.5, top = 46;
      L.cylinder(tx, base - 2, tz, 5.2, top - base + 2, '#b7ab97', { seg: 28, top: '#8fd35e' });
      for (let i = 0; i < 12; i++) {
        const a = i * 0.62 + 0.4;
        const r = 6.4;
        const y = base + 2.2 + i * 2.0;
        L.box(tx + Math.cos(a) * r, y, tz + Math.sin(a) * r, 3.6, 0.7, 2.8, '#9d917f', { rot: Math.PI / 2 - a, top: '#c9bfa8', band: 0.2 });
        K.coin(tx + Math.cos(a) * r, y + 1.0, tz + Math.sin(a) * r);
      }
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * TAU;
        L.box(tx + Math.cos(a) * 4.8, top + 0.9, tz + Math.sin(a) * 4.8, 1.2, 0.9, 1.2, '#a89c88', { rot: -a });
      }
      D.flagPole(tx + 2.5, top, tz - 2.5, '#e0202a');
      moon('tower', tx, top + 1.6, tz);
      K.checkpoint('tower', 'Old Tower', tx + 9, tz + 6, 0.8);
    }
    // the boss arena
    {
      const ax = 32, az = -80;
      L.cylinder(ax, 18.5, az, 17, 2.0, '#b9ae98', { seg: 40, top: '#c9bfa8', band: 0.4 });
      for (let i = 0; i < 20; i++) {
        const a = (i / 20) * TAU;
        D.post(ax + Math.cos(a) * 17.6, 20.5, az + Math.sin(a) * 17.6, '#8a5a2b');
      }
      moon('boss', ax, 23, az, { hidden: true });
      new GoombaKing(L, ax, az - 4, { arena: 17, moon: M.boss });
      K.checkpoint('arena', 'Royal Arena', ax - 20, az + 16, -0.9);
    }
    // plateau goombas & piranhas
    for (const [x, z] of [[-10, -60], [14, -70], [-46, -64], [18, -100], [-50, -95]]) new Goomba(L, x, z);
    new Piranha(L, 8, -52);
    new Piranha(L, -20, -96);

    // ================================================== west lake: lily pads, frog, rock pillar
    {
      const pads = [[-48, 6], [-52, 12], [-56, 6], [-58, 14], [-62, 20], [-70, 18], [-74, 8], [-68, 2]];
      for (const [x, z] of pads) D.lilyPad(x, SEA, z);
      L.cylinder(-60, -8, 11.5, 1.6, 10.6, '#9a8670', { top: '#7fcf52' }); // stepping rock (top ~2.6)
      L.cylinder(-65, -8, 9, 2.4, 14.6, '#a8957d', { top: '#7fcf52', seg: 18 }); // tall pillar (top 6.6)
      moon('frog', -65, 8.0, 9);
      new Frog(L, -44, 15);
      new Frog(L, -42, 4);
      new Frog(L, -60, 11.5, { y: 2.6 });
      K.checkpoint('lake', 'Lakeshore', -38, 20, -1.2);
      // lakeside village
      D.hut(-34, -4, 0.3, '#f2b8a0');
      D.hut(-26, -12, -0.4, '#a8d8f0');
      new NPC(L, -30, K.gy(-30, -6), -6, { name: 'Lily', body: '#ffe0c0', accent: '#b07cff', hat: 'bow', lines: [
        'The frogs around the lake can leap higher than anybody.',
        "If you were a frog, I bet you could reach the top of that tall rock in the water!",
      ] });
      new NPC(L, -40, K.gy(-40, 26), 26, { name: 'Old Root', body: '#e8d0a8', accent: '#6aa84f', hat: 'beanie', lines: [
        'Hmm, a stranger. You know, the soil in the flower field sometimes sparkles...',
        'My grandpa always said: when something sparkles, give it a good ground pound!',
      ] });
    }

    // ================================================== east ruins
    {
      // pillars and arches
      const pillars = [[42, 6, 6], [42, 18, 4.5], [50, 4, 7], [70, 8, 3], [80, 20, 6], [76, 36, 5.5], [56, 42, 4], [46, 34, 7]];
      for (const [x, z, h] of pillars) D.pillar(x, z, h);
      D.arch(62, 12, 0, 6);
      D.arch(48, 26, Math.PI / 2, 5);
      for (let i = 0; i < 6; i++) D.wallChunk(40 + i * 7, 46 + (i % 2) * 2, 1.5 + (i % 3) * 1.2, 0.1 * i);
      // Block party moon: a floating ? block over the arch
      moon('block', 62, 15, 12, { hidden: true });
      L.platform(62, 4.2 + 5.6, 12, 7, 3, { h: 1.0, side: '#b7ab97', top: '#c9bfa8' });
      K.block(62, 4.2 + 9.2, 12, 'question', 'moon', { moon: M.block });
      K.blocks(62, 4.2 + 9.2, 15.5, 'b b', 1.5, 0);
      // Chain chomp and boulders
      new ChainChomp(L, 68, 28, { chain: 7 });
      moon('chomp', 74, 6.2, 22, { hidden: true });
      K.breakable(74, 22, { style: 'rock', size: 2.4, need: 'heavy', contents: M.chomp });
      K.breakable(62, 34, { style: 'rock', size: 2.2, need: 'heavy', contents: 'coins' });
      K.breakable(73, 34, { style: 'rock', size: 2.0, need: 'heavy', contents: 'heart' });
      K.checkpoint('ruins', 'Ancient Ruins', 44, 12, -1.6);
      for (const [x, z] of [[54, 16], [66, 40], [80, 12]]) new Goomba(L, x, z);
      K.ring(56, 0.9, 26, 3, 6);
      // pipe to the sky garden
      const pipe = K.pipe(84, 42, { h: 2.2, dest: { x: 0, y: 151.5, z: 212, facing: Math.PI } });
      void pipe;
    }

    // ================================================== floating isles (south-east)
    {
      K.spring(48, 66, 25);
      const isles = [[60, 13, 76, 7], [74, 16, 86, 6], [90, 19, 80, 5.5], [100, 21, 64, 6.5]];
      isles.forEach(([x, y, z, s], i) => {
        D.floatingIsle(x, y, z, s);
        K.ring(x, y + 1.2, z, s * 0.45, 6, true);
      });
      K.mover([[83, 18, 84], [86, 18, 80]], 3.4, 3.4, { speed: 1.6, pause: 0.4 });
      moon('isles', 100, 22.6, 64);
    }

    // ================================================== moon shards
    moon('shards', 0, K.gy(0, 22) + 1.6, 22, { hidden: true });
    K.shards(M.shards, [
      [8, 6.4, 2], [-52, 2.2, -8], [62, 4.2 + 7.0, 12, true], [-62, 3.6, 11.5, true], [36, 1.2, 60],
    ]);

    // ================================================== sky garden bonus course (via the ruins pipe)
    {
      const y = 150, z0 = 212;
      L.platform(0, y, z0, 9, 9, { h: 3, side: '#c9b28a', top: '#9ee070' });
      K.pipe(0, z0 + 3.5, { h: 1.6, dest: { x: 84, y: K.gy(84, 38) + 0.2, z: 38, facing: 0 }, color: '#2f9ad8' }, y);
      L.trigger(0, z0, 10, 10, y - 2, y + 6, () => { L.game.respawnPoint = { x: 0, y: y + 0.5, z: z0 - 2, facing: Math.PI }; });
      K.line(0, z0 - 5, 0, z0 - 15, 4, 0, { abs: true, y0: y + 1, y1: y + 1 });
      K.mover([[-6, y, z0 - 16], [6, y, z0 - 16]], 3.5, 3.5, { speed: 4 });
      K.mover([[6, y + 1, z0 - 23], [-6, y + 1, z0 - 23]], 3.5, 3.5, { speed: 4.5 });
      L.platform(0, y + 1.5, z0 - 31, 5, 5, { h: 2, side: '#c9b28a', top: '#9ee070' });
      K.mover([[0, y + 1.5, z0 - 40]], 9, 1.6, { spin: 1.1, color: '#e9d9b0', top: '#ff8a5c' });
      L.platform(0, y + 2, z0 - 49, 5, 5, { h: 2, side: '#c9b28a', top: '#9ee070' });
      for (let i = 0; i < 5; i++) K.faller(0 + (i % 2 ? 2 : -2), y + 2.5 + i * 0.6, z0 - 55 - i * 4, 3, 3);
      L.platform(0, y + 6, z0 - 80, 8, 8, { h: 3, side: '#c9b28a', top: '#9ee070' });
      for (let i = 0; i < 5; i++) K.coin(0, y + 3.5 + i * 0.6, z0 - 55 - i * 4);
      moon('sky', 0, y + 7.6, z0 - 80);
    }

    // ================================================== regional coins (40)
    const P = [
      [14, 1, 33 + 2.6], [-60, 3.4, 11.5, true], [-65, 8.2, 11.3, true], [0, -2.6, -27, true], [-14, 23, -34, true],
      [60, 1.2, -36], [30, 1, -24], [26, 1, -24], [-30, 47.5, -78, true], [-26, 34, -74, true],
      [32, 21.5, -96, true], [50, 21.5, -80, true], [-60, 1.2, -60], [-8, 21, -110, true], [62, 4.2 + 7, 15.5, true],
      [80, 8.5, 20, true], [42, 13, 6, true], [74, 5.2, 34], [60, 14.5, 76, true], [100, 22.5, 64, true],
      [-46, 17.5, 42, true], [-32, 1, 56], [-40, 1, 62], [12, 1, 72], [-12, 1, 64],
      [0, 152, 200, true], [0, 153, 178, true], [0, 157, 132, true], [-74, -0.1, 8, true], [-68, -0.1, 2, true],
      [88, 1, -10], [-80, 1, -20], [-90, 1, 30], [40, 1, 80], [-20, 1, 90],
      [20, 21, -60, true], [-55, 21, -45, true], [95, 1, 20], [-30, 22, -100, true], [30, 1, -10],
    ];
    P.forEach(([x, y, z, abs], i) => K.purple('p' + i, x, y, z, abs));
    // collector reward: appears at the ship when all regional coins are found
    moon('collector', 4, K.gy(4, 66) + 1.6, 66, { hidden: true });
    L.onPurpleComplete = () => M.collector.appear(new THREE.Vector3(9, K.gy(9, 60) + 4, 60));

    // ================================================== scenery
    const r = rng(5);
    for (let i = 0; i < 90; i++) {
      const x = (r() - 0.5) * 230, z = (r() - 0.5) * 230;
      const h = meadowHeight(x, z);
      if (h < SEA + 1.2 || Math.hypot(x - 2, z - 52) < 18 || pathDist(x, z) < 3) continue;
      if (h > 2.5 && h < 18 && z < -30 && z > -50) continue; // cliff face
      if (x > 34 && x < 90 && z > -6 && z < 50) continue; // ruins
      if (Math.hypot(x - 32, z + 80) < 21 || Math.hypot(x + 30, z + 78) < 9) continue; // arena, tower
      if (Math.hypot(x + 32, z - 50) < 14 || Math.hypot(x - 30, z + 24) < 6) continue;
      L.tree(x, z, { kind: h > 17 && r() < 0.6 ? 'pine' : 'round' });
    }
    for (let i = 0; i < 40; i++) {
      const x = (r() - 0.5) * 220, z = (r() - 0.5) * 220;
      if (meadowHeight(x, z) < SEA + 0.5 || Math.hypot(x - 2, z - 52) < 14 || pathDist(x, z) < 2.5) continue;
      L.rock(x, z, 0.5 + r() * 1.4);
    }
    D.windmill(-58, -24);
    D.fenceAlong([[-2, 40], [-14, 32], [-28, 22]], 3.2);
    D.fenceAlong([[8, 30], [14, 16], [28, 6]], 3.2);
    L.scatterFoliage({ count: 10000, flowers: 420, ok: (x, z, h) => h > SEA + 0.8 && pathDist(x, z) > 2.2 && !(x > 36 && x < 88 && z > -4 && z < 50) && Math.hypot(x - 32, z + 80) > 18, grassColor: (x, z) => (fbm2(x * 0.05, z * 0.05) > 0 ? '#8fdc5e' : '#79c94e') });
    D.clouds(14, 60, 90, 220);
  },
};
