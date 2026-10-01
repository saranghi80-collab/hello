// Dune Kingdom: sun-baked mesa with the Great Pyramid, an oasis town, Bullet Bill skies and a stone golem.
import * as THREE from 'three';
import { kit } from './kit.js';
import { decor } from './decor.js';
import { fbm2, smoothstep, lerp, clamp, rng, TAU } from '../core/math.js';
import { Goomba, Cannon, ChainChomp, Piranha, FireBar } from '../entities/enemies.js';
import { SandGolem } from '../entities/bosses.js';
import { NPC } from '../entities/misc.js';
import { CylinderCollider, BoxCollider } from '../physics/colliders.js';

const PYR = { x: 0, z: -22, size: 46, tiers: 9, step: 2.4, inset: 2.3 };
const ARENA = { x: -58, z: -56, r: 19, y: -2.5 };
const OASIS = { x: -58, z: 22, r: 15 };
const MESA = { x: 88, z: -6, r: 17, y: 30 };

export function duneHeight(x, z) {
  const r = Math.hypot(x, z * 0.95);
  const edge = smoothstep(136, 116, r + fbm2(x * 0.02, z * 0.02, 2) * 10);
  let h = -24 + edge * 26;
  const warp = fbm2(x * 0.012, z * 0.012, 2) * 3;
  const ridge = 1 - Math.abs(Math.sin(x * 0.04 + z * 0.018 + warp));
  h += edge * (ridge * ridge * 4.2 + fbm2(x * 0.03 + 7, z * 0.03, 3) * 2.2);
  // flatten pyramid base & spawn
  const dp = Math.max(Math.abs(x - PYR.x), Math.abs(z - PYR.z));
  h = lerp(h, 2.0, smoothstep(PYR.size / 2 + 12, PYR.size / 2 + 2, dp));
  const ds = Math.hypot(x - 0, z - 78);
  h = lerp(h, 2.2, smoothstep(18, 8, ds));
  // town plaza
  const dt = Math.hypot(x + 50, z - 52);
  h = lerp(h, 2.4, smoothstep(26, 14, dt));
  // oasis basin
  const doa = Math.hypot(x - OASIS.x, z - OASIS.z);
  h -= smoothstep(OASIS.r + 6, OASIS.r - 6, doa) * 7;
  // sunken golem courtyard
  const da = Math.hypot(x - ARENA.x, z - ARENA.z);
  h = lerp(h, ARENA.y, smoothstep(ARENA.r + 4, ARENA.r - 1, da));
  // east mesa
  const dm = Math.hypot(x - MESA.x, z - MESA.z) + fbm2(x * 0.1, z * 0.1, 2) * 3;
  h = lerp(h, MESA.y + fbm2(x * 0.05, z * 0.05) * 0.6, smoothstep(MESA.r + 3, MESA.r - 1, dm));
  return h;
}

function duneColor(x, z, h, n) {
  if (h < -6) return '#c48a52';
  if (n.y < 0.6) {
    const b = Math.sin(h * 1.1 + fbm2(x * 0.08, z * 0.08) * 1.5);
    return b > 0.4 ? '#c98d55' : b > -0.3 ? '#b97d48' : '#d39b62';
  }
  const da = Math.hypot(x - ARENA.x, z - ARENA.z);
  if (da < ARENA.r - 1) return (Math.floor(x / 3) + Math.floor(z / 3)) % 2 ? '#d8b383' : '#cfa877';
  const v = fbm2(x * 0.08, z * 0.08, 3);
  const doa = Math.hypot(x - OASIS.x, z - OASIS.z);
  if (doa < OASIS.r + 5 && h > -1.5) return v > 0 ? '#9fcf5a' : '#8cc04c';
  return v > 0.2 ? '#f0c27a' : v > -0.1 ? '#e8b46a' : '#dda45c';
}

const MOONS = [
  { id: 'summit', name: 'On Top of the Great Pyramid' },
  { id: 'inverted', name: 'The Floating Upside-Down Pyramid' },
  { id: 'mesa', name: 'Bullet Bill Flight to the Mesa' },
  { id: 'oasis', name: 'Deep in the Oasis' },
  { id: 'cactus', name: 'Something Sparkly by the Cacti' },
  { id: 'explorer', name: 'An Explorer Is Welcome' },
  { id: 'shards', name: 'Moon Shards on the Dunes' },
  { id: 'chamber', name: "The Pyramid's Secret Chamber" },
  { id: 'chomp', name: "Chomp's Buried Treasure" },
  { id: 'tower', name: 'Wall-Jump up the Sandstone Tower' },
  { id: 'timer', name: 'Timer Steps: Sun-Baked Stairs' },
  { id: 'rooftop', name: 'Rooftop Hidden Block' },
  { id: 'boss', name: "The Sentinel's Heartstone", multi: true },
  { id: 'spire', name: 'Lookout on the Sand Spire' },
  { id: 'well', name: 'Down the Old Well' },
  { id: 'collector', name: 'Regional Coin Collector' },
];

export default {
  id: 'dune',
  name: 'Dune Kingdom',
  short: 'Dune',
  region: 'Kingdom 2',
  subtitle: 'The Sun-Scorched Sands',
  music: 'desert',
  moonColor: '#ff9a2e',
  orb: 'radial-gradient(circle at 35% 30%, #ffe7a8, #f0b25c 60%, #b8762f)',
  purpleColor: '#d05cf0',
  purpleShape: 'hex',
  moonsToLeave: 8,
  killY: -40,
  killYAt: (x) => (x > 300 ? -175 : -40),
  seed: 23,
  bounds: { minX: -135, maxX: 135, minZ: -135, maxZ: 135 },
  titleCam: { x: 0, y: 40, z: 0, r: 85, ly: 10 },
  env: {
    sky: { top: '#2563d8', horizon: '#ffe8bf', bottom: '#f0cfa0', sunColor: '#fff0c8', clouds: 0.35 },
    fog: { color: '#f2d7a8', near: 150, far: 680 },
    sunDir: [0.42, 0.78, 0.44],
    sunColor: '#fff0cc', sunIntensity: 2.6,
    hemiSky: '#cfe2ff', hemiGround: '#b08452', hemiIntensity: 0.95,
    mapBg: '#c99a62',
    exposure: 0.9,
  },
  moonList: MOONS,
  build(L) {
    const K = kit(L), D = decor(L);
    const M = {};
    const def = (id) => MOONS.find((m) => m.id === id);
    const moon = (id, x, y, z, extra = {}) => (M[id] = K.moon({ ...def(id), x, y, z, ...extra }));
    const r = rng(9);
    const SAND = '#e3ad66', STONE = '#d9a86a', STONE2 = '#c48a4a', BRICK = '#b97a3e';

    L.terrain({ size: 280, cell: 2, height: duneHeight, color: duneColor });
    for (const [x, z, w, d] of [[0, -142, 300, 10], [0, 142, 300, 10], [-142, 0, 10, 300], [142, 0, 10, 300]]) L.box(x, 80, z, w, 140, d, '#000', { visible: false, cam: false });

    // ================================================== landing
    L.spawn = { x: 0, y: K.gy(0, 72) + 0.2, z: 72, facing: Math.PI };
    K.ship(10, 84, -0.4);
    K.checkpoint('odyssey', 'The Odyssey', -6, 82, Math.PI);
    K.sign(-5, 70, ['Welcome to the DUNE KINGDOM!', 'Bullet Bills patrol the skies here. Capture one with Cappy and you can fly.', 'The townsfolk by the oasis know all the local secrets.'], 0.5);
    K.line(0, 64, 0, 40, 8, 1);

    // ================================================== the Great Pyramid
    {
      const { x, z, size, tiers, step, inset } = PYR;
      const base = 2;
      for (let i = 0; i < tiers; i++) {
        const s = size - i * inset * 2;
        const top = base + (i + 1) * step;
        L.box(x, top, z, s, step + (i === 0 ? 4 : 0), s, i % 2 ? STONE : STONE2, { top: i % 2 ? '#e8bf84' : '#dcae72', band: 0.25, round: 0.15 });
      }
      const summit = base + tiers * step;
      // capstone shrine
      L.box(x, summit + 1.2, z, 6, 1.2, 6, '#e8c486', { round: 0.2 });
      moon('summit', x, summit + 2.8, z);
      for (const [cx, cz, yaw] of [[x - 2.4, z + 2.4, Math.PI * 0.75], [x + 2.4, z - 2.4, -Math.PI * 0.25]]) new Cannon(L, cx, cz, yaw, { y: summit + 1.2, interval: 4.2, range: 30 });
      // decorative entrance
      L.box(x, base + 5.5, z + size / 2 + 0.6, 7, 5.5, 1.2, STONE2, { round: 0.1 });
      L.box(x, base + 4.2, z + size / 2 + 1.25, 4, 4.2, 0.2, '#3a2412', { collide: false, round: 0.02 });
      // pipe to the secret chamber, tucked on tier 3 of the east face
      const t3 = base + 3 * step, sEast = size / 2 - 3 * inset + 1.2;
      K.pipe(x + sEast, z + 6, { h: 1.4, dest: { x: 400, y: -148, z: 6, facing: Math.PI } }, t3);
      for (let i = 0; i < tiers; i++) K.coin(x, base + (i + 1) * step + 1, z + size / 2 - i * inset - 1);
      K.checkpoint('pyramid', 'Pyramid Steps', x - 14, z + size / 2 + 6, Math.PI);
      // explorer NPC
      new NPC(L, x + 6, K.gy(x + 6, z + size / 2 + 4), z + size / 2 + 4, { name: 'Tomb Keeper', body: '#e8c9a0', accent: '#3a6fb0', hat: 'sombrero', facing: 0, onTalk: (n) => {
        if (L.game.player.outfit === 'explorer') {
          if (!M.explorer.visible && !M.explorer.collected) {
            n.afterTalk = () => M.explorer.appear(new THREE.Vector3(n.pos.x, n.pos.y + 2, n.pos.z), { at: new THREE.Vector3(n.pos.x - 2.5, n.pos.y + 1.4, n.pos.z + 1.5) });
            return ['A true explorer! Look at that hat, those boots!', 'The pyramid rewards those who dress the part. Take this!'];
          }
          return ['Fine outfit, explorer. The pyramid hides one more secret: a green pipe on its east side.'];
        }
        return ['Halt! Only a proper EXPLORER may receive the blessing of the pyramid.', 'They say the Odyssey has a shop... check the pause menu for outfits.'];
      } });
      moon('explorer', x + 3.5, K.gy(x + 3.5, z + size / 2 + 5.5) + 1.4, z + size / 2 + 5.5, { hidden: true });
    }

    // ================================================== the upside-down pyramid in the sky
    {
      const x = 0, z = -22, top = 62;
      const g = new THREE.ConeGeometry(13, 18, 4, 1);
      L.addStatic(g, '#d9a86a', 'std', { p: [x, top - 9, z], r: [Math.PI, Math.PI / 4, 0] });
      L.box(x, top, z, 18.2, 0.8, 18.2, '#e8c486', { rot: 0, round: 0.2, top: '#f0d39a' });
      L.addStatic(new THREE.TorusGeometry(2.2, 0.35, 8, 4), '#ffcf3a', { p: [x, top + 0.6, z], r: [Math.PI / 2, 0, Math.PI / 4] });
      moon('inverted', x, top + 1.5, z);
      K.ring(x, top + 1.2, z, 6, 10, true);
      K.purple('pinv', x + 7, top + 1, z + 7, true);
    }

    // ================================================== oasis town (south-west)
    {
      const oy = duneHeight(OASIS.x, OASIS.z);
      L.water({ x: OASIS.x, z: OASIS.z, r: OASIS.r + 4, y: -0.6, shallow: '#62e8d0', deep: '#1e88b8', bottom: -12 });
      moon('oasis', OASIS.x + 2, oy + 1.4, OASIS.z - 1);
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * TAU + 0.3;
        const px = OASIS.x + Math.cos(a) * (OASIS.r + 5), pz = OASIS.z + Math.sin(a) * (OASIS.r + 5);
        L.tree(px, pz, { kind: 'palm', leaf: '#3fa640', leaf2: '#5ac24e', trunk: '#a8783e', scale: 1 + r() * 0.3 });
      }
      // houses
      const houses = [[-36, 46, 0.2], [-48, 62, -0.3], [-64, 50, 0.6], [-30, 62, 0.1], [-70, 70, -0.2]];
      houses.forEach(([hx, hz, rot], i) => D.adobe(hx, hz, rot, i));
      // rooftop hidden block over house 2
      moon('rooftop', -48, K.gy(-48, 62) + 11.5, 62, { hidden: true });
      K.block(-48, K.gy(-48, 62) + 9.2, 62, 'hidden', 'moon', { moon: M.rooftop });
      new NPC(L, -44, K.gy(-44, 54), 54, { name: 'Sunny', body: '#f5d4ac', accent: '#ff7a3a', hat: 'sombrero', lines: [
        'Hola! Hot enough for you? The oasis is the only cool spot for miles.',
        'I dropped something shiny in the water ages ago. Dive down and see!',
      ] });
      new NPC(L, -62, K.gy(-62, 42), 42, { name: 'Pepper', body: '#f2c9a0', accent: '#3ab0a0', hat: 'sombrero', lines: [
        'See those floating stones above the pyramid? A Bullet Bill could get you up there!',
        'Hold Jump while flying one to climb. Crouch to hop off.',
      ] });
      K.checkpoint('town', 'Oasis Town', -40, 40, -0.8);
      // the old well
      const wx = -54, wz = 38, wy = K.gy(wx, wz);
      L.cylinder(wx, wy - 0.2, wz, 1.6, 1.4, '#b97a3e', { top: '#d9a86a' });
      D.post(wx - 1.4, wy + 1.2, wz, '#7a4f24'); D.post(wx + 1.4, wy + 1.2, wz, '#7a4f24');
      K.pipe(wx, wz + 4.5, { h: 0.6, dest: { x: 400, y: -148, z: 60, facing: Math.PI }, color: '#7aa0b8' }, wy);
    }

    // ================================================== secret chamber & well cave (under the world)
    {
      const ox = 400, oy = -150;
      const walls = (cx, cz, w, d, h, floor = true) => {
        if (floor) L.box(cx, oy, cz, w, 2, d, '#8a6a44', { top: '#a8865a' });
        L.box(cx, oy + h + 2, cz, w, 2, d, '#6b5034', { collide: true });
        L.box(cx - w / 2, oy + h, cz, 1, h + 2, d, '#7a5c3a');
        L.box(cx + w / 2, oy + h, cz, 1, h + 2, d, '#7a5c3a');
        L.box(cx, oy + h, cz - d / 2, w, h + 2, 1, '#7a5c3a');
        L.box(cx, oy + h, cz + d / 2, w, h + 2, 1, '#7a5c3a');
      };
      // chamber: fire bars and platforms over a pit
      walls(ox, -10, 22, 44, 14, false);
      L.box(ox, oy, 7, 22, 2, 10, '#8a6a44', { top: '#a8865a' });
      L.box(ox, oy - 4, -13, 22, 2, 30, '#3a2a1a');
      L.trigger(ox, -10, 22, 44, oy - 10, oy + 16, () => { L.game.respawnPoint = { x: ox, y: oy + 1, z: 6, facing: Math.PI }; });
      K.pipe(ox, 9, { h: 1.2, dest: { x: PYR.x + 17.3, y: 2 + 3 * PYR.step + 0.2, z: PYR.z + 2, facing: Math.PI / 2 }, color: '#2fb84a' }, oy);
      L.water({ x: ox, z: -13, w: 20, d: 30, y: oy - 1.5, lava: true });
      for (let i = 0; i < 6; i++) L.box(ox + (i % 2 ? 3 : -3), oy + 0.4 + i * 0.8, -2 - i * 4.4, 3.4, 1.2, 3.4, '#a8865a', { top: '#c9a878' });
      new FireBar(L, ox, oy + 2.4 + 2, -12, { n: 5, speed: 1.4 });
      new FireBar(L, ox, oy + 2.4 + 3.6, -22, { n: 5, speed: -1.7 });
      L.box(ox, oy + 6, -29, 8, 10, 6, '#a8865a', { top: '#c9a878' });
      moon('chamber', ox, oy + 7.5, -30);
      L.box(ox, oy + 10, -10, 22, 1, 44, '#000', { visible: false, cam: false, collide: false });
      // well cave: underground spring with coins
      walls(ox, 60, 18, 18, 9);
      L.trigger(ox, 60, 18, 18, oy - 10, oy + 12, () => { L.game.respawnPoint = { x: ox, y: oy + 1, z: 60, facing: Math.PI }; });
      L.water({ x: ox, z: 56, w: 16, d: 8, y: oy + 0.4, bottom: oy - 6, shallow: '#62e8d0', deep: '#1e88b8' });
      K.ring(ox, oy + 2, 57, 3, 10, true);
      moon('well', ox, oy + 1.5, 53);
      K.pipe(ox + 5, 64, { h: 1.2, dest: { x: -54, y: K.gy(-54, 43) + 0.5, z: 44, facing: 0 }, color: '#7aa0b8' }, oy);
    }

    // ================================================== mesa (Bullet Bill flight)
    {
      moon('mesa', MESA.x + 4, MESA.y + 1.6, MESA.z - 3);
      K.ring(MESA.x, MESA.y + 1, MESA.z, 6, 10);
      new Cannon(L, MESA.x - 30, MESA.z + 6, -Math.PI / 2, { interval: 3.4, range: 40 });
      new Cannon(L, MESA.x - 26, MESA.z - 14, -Math.PI / 2 - 0.4, { interval: 4.0, range: 40 });
      L.tree(MESA.x - 4, MESA.z + 5, { kind: 'palm', leaf: '#3fa640', leaf2: '#5ac24e', trunk: '#a8783e' });
      K.sign(MESA.x - 34, MESA.z + 10, ['The mesa: no stairs, no ropes.', 'Only fliers welcome.'], -Math.PI / 2);
    }

    // ================================================== golem courtyard (boss)
    {
      const { x, z, r: R, y } = ARENA;
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * TAU;
        if (Math.abs(Math.sin(a) + 1) < 0.35) continue;
        D.pillar(x + Math.cos(a) * (R + 1.5), z + Math.sin(a) * (R + 1.5), 6 + (i % 3), { color: '#d9b383' });
      }
      // stairs down into the courtyard from the south-east
      for (let i = 0; i < 6; i++) L.box(x + 10 + i * 1.6, y + 0.6 + i * 0.9, z + 15 + i * 1.6, 5, 4, 3, '#cfa877', { rot: -Math.PI / 4, top: '#e0bc8a' });
      moon('boss', x, y + 2.2, z, { hidden: true });
      new SandGolem(L, x, z - R + 1, { cx: x, cz: z, arena: R, moon: M.boss });
      K.checkpoint('courtyard', 'Golem Courtyard', x + 24, z + 22, -0.8);
    }

    // ================================================== sandstone tower (wall jumps)
    {
      const x = 46, z = -64, g = K.gy(x, z);
      L.box(x - 2.1, g + 18, z, 1.8, 20, 7, STONE2, { top: '#e8bf84' });
      L.box(x + 2.1, g + 18, z, 1.8, 20, 7, STONE2, { top: '#e8bf84' });
      L.box(x, g + 18, z - 3.2, 2.4, 20, 0.6, STONE, {});
      L.platform(x, g + 18.6, z + 5.5, 6, 4, { h: 1, side: STONE, top: '#e8bf84' });
      moon('tower', x, g + 20, z + 5.5);
      for (let i = 0; i < 6; i++) K.coin(x, g + 3 + i * 2.6, z);
    }

    // ================================================== sand spire (cap-jump lookout)
    {
      const x = 30, z = 30, g = K.gy(x, z);
      L.cylinder(x, g - 1, z, 2.2, 10, '#c48a4a', { top: '#e8bf84' });
      L.cylinder(x + 7, g - 1, z + 3, 1.6, 6.5, '#c98d55', { top: '#e8bf84' });
      L.cylinder(x + 3, g - 1, z + 9, 1.3, 3.5, '#c98d55', { top: '#e8bf84' });
      moon('spire', x, g + 10.6, z);
    }

    // ================================================== cactus field + sparkle
    {
      for (let i = 0; i < 26; i++) {
        const x = 40 + r() * 50, z = 40 + r() * 50;
        if (duneHeight(x, z) < 0) continue;
        D.cactus(x, z, 0.8 + r() * 0.7);
      }
      moon('cactus', 66, K.gy(66, 62) + 1.4, 62, { hidden: true });
      K.sparkle(66, 62, () => M.cactus.appear(new THREE.Vector3(66, K.gy(66, 62), 62)));
      new Piranha(L, 58, 74); new Piranha(L, 78, 52);
    }

    // ================================================== chain chomp & treasure
    {
      new ChainChomp(L, 40, 2, { chain: 7 });
      moon('chomp', 47, K.gy(47, -2) + 1.4, -2, { hidden: true });
      K.breakable(47, -2, { style: 'rock', size: 2.4, need: 'heavy', contents: M.chomp, color: '#c49a6a' });
      K.breakable(34, 6, { style: 'rock', size: 2.0, need: 'heavy', contents: 'coins', color: '#c49a6a' });
    }

    // ================================================== timer steps
    {
      const sx = -24, sz = 10;
      const tx = -40, tz = -14, top = K.gy(tx, tz) + 16;
      L.cylinder(tx, K.gy(tx, tz) - 1, tz, 2.6, 17, '#c48a4a', { top: '#e8bf84' });
      moon('timer', tx, top + 1.4, tz);
      const steps = [];
      for (let i = 0; i < 7; i++) {
        const t = (i + 1) / 8;
        steps.push(K.ghost(sx + (tx - sx) * t, K.gy(sx, sz) + 2 + i * 2.1, sz + (tz - sz) * t, 2.6, 0.6, 2.6, '#ff8a3a'));
      }
      K.timerSwitch(sx, sz, { duration: 9, targets: steps, color: '#ff8a3a' });
    }

    // ================================================== enemies
    for (const [x, z] of [[-10, 50], [14, 40], [24, 58], [-30, 20], [-14, -60], [20, -66], [60, -30], [-80, 10], [-20, 90]]) new Goomba(L, x, z, { color: '#b5713a' });
    new Cannon(L, -30, -30, Math.PI / 4, { interval: 4.5 });
    new Cannon(L, 60, 60, -Math.PI * 0.75, { interval: 5 });

    // ================================================== moon shards on dune crests
    moon('shards', 0, K.gy(0, 52) + 1.6, 52, { hidden: true });
    K.shards(M.shards, [[-90, 3, -10], [96, 3, 40], [-20, 3, -96], [70, 3, -80], [-96, 3, 60]]);

    // ================================================== regional coins (35)
    const P = [
      [0, 25.6 + 1.6, -22 + 6, true], [-10, 2 + 4 * 2.4 + 1, -22 + 14, true], [22, 1, -22], [-22, 1, -22], [0, 1, 6],
      [-58, -3, 18, true], [-66, -3, 26, true], [-50, 2, 70], [-80, 2, 64], [-48, 11, 62, true],
      [88, 31, -2, true], [96, 31, -12, true], [80, 31, 4, true], [46, 21, -58.5, true], [46, 12, -64, true],
      [30, 11.5, 30, true], [37, 7.5, 33, true], [-40, 18.5, -14, true], [70, 2, 70], [80, 2, 86],
      [-58, -1.5, -56, true], [-70, 1, -36], [-40, 1, -80], [40, 1, -100], [-100, 1, 20],
      [100, 1, 20], [0, 1, 110], [-60, 1, 100], [60, 1, 100], [400, -146, -30, true],
      [400, -148.5, 58, true], [12, 63, -12, true], [-12, 63, -32, true], [-30, 1, 80], [30, 1, 80],
    ];
    P.forEach(([x, y, z, abs], i) => K.purple('d' + i, x, y, z, abs));
    moon('collector', 4, K.gy(4, 90) + 1.6, 90, { hidden: true });
    L.onPurpleComplete = () => M.collector.appear(new THREE.Vector3(10, K.gy(10, 84) + 4, 84));

    // ================================================== scenery
    for (let i = 0; i < 40; i++) {
      const x = (r() - 0.5) * 230, z = (r() - 0.5) * 230;
      const h = duneHeight(x, z);
      if (h < 0 || Math.max(Math.abs(x - PYR.x), Math.abs(z - PYR.z)) < PYR.size / 2 + 6) continue;
      if (Math.hypot(x - ARENA.x, z - ARENA.z) < ARENA.r + 6 || Math.hypot(x - MESA.x, z - MESA.z) < MESA.r + 2) continue;
      if (r() < 0.6) D.cactus(x, z, 0.7 + r() * 0.6); else L.rock(x, z, 0.6 + r() * 1.6, '#c9925a');
    }
    for (let i = 0; i < 10; i++) {
      const x = (r() - 0.5) * 200, z = (r() - 0.5) * 200;
      if (duneHeight(x, z) < 1 || Math.max(Math.abs(x), Math.abs(z + 22)) < 32) continue;
      if (Math.hypot(x + 50, z - 45) < 40 || Math.hypot(x - ARENA.x, z - ARENA.z) < ARENA.r + 8 || Math.hypot(x, z - 78) < 20) continue;
      D.ruinArch(x, z, r() * TAU);
    }
    L.scatterFoliage({ count: 1400, flowers: 60, area: { minX: OASIS.x - 26, maxX: OASIS.x + 26, minZ: OASIS.z - 26, maxZ: OASIS.z + 26 }, ok: (x, z, h) => h > -0.3 && Math.hypot(x - OASIS.x, z - OASIS.z) < OASIS.r + 8, grassColor: () => '#8fd35a', flowerColors: ['#ff6fa8', '#ffd84a'] });
    D.clouds(8, 80, 110, 240, '#fff6e6');
  },
};
