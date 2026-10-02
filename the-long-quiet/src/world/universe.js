// Ties the galaxy to the handful of hand-placed places: Sol, the system you wake up in,
// and the route of beacons Surveyor Ilse Marrow left behind.

import { Galaxy, SOL_POS, distLy } from './galaxy.js';
import { generateSystem, qAxis, qRotate } from './system.js';
import { Rng, hash32 } from '../core/rng.js';
import { AU, R_EARTH, M_EARTH, R_JUP, M_JUP, G } from '../core/units.js';
import { hexToLinear } from '../core/color.js';
import { properName } from './names.js';

const TRAIL_NAMES = ['Wren', 'Halloran', 'Ostrey', 'Calder', 'Mirrin', 'Saelith', 'Tamsin', 'Lowe'];
export const TRAIL_LENGTH = 8; // beacons after the first; the last one is her ship

export class Universe {
  constructor() {
    this.galaxy = new Galaxy();
    this.special = new Map();
    this.systemCache = new Map();
    this.buildStory();
  }

  buildStory() {
    const g = this.galaxy;
    const r = new Rng(hash32(g.seed, 0x5701));
    // Starting system: an orange or yellow star 7-13 ly from Sol.
    let cands = g.starsInRadius(SOL_POS, 13)
      .filter((c) => c.d > 7 && c.star.kind === 'main' && 'KGF'.includes(c.star.cls))
      .sort((a, b) => a.star.id.localeCompare(b.star.id));
    let start;
    if (cands.length) start = cands[0].star;
    else {
      const any = g.starsInRadius(SOL_POS, 13).filter((c) => c.d > 6 && c.star.id !== 'SOL').sort((a, b) => b.d - a.d)[0];
      start = g.forceStar(any.star.id, { classDef: g.classDef('K'), u: 0.4 });
    }
    start = g.forceStar(start.id, { classDef: g.classDef(start.cls), u: 0.45, name: 'Vesper' });
    this.start = start;

    // The trail heads away from Sol, wandering.
    let dir = norm(sub(start.pos, SOL_POS));
    dir = norm([dir[0], dir[1] * 0.2, dir[2]]);
    const trail = [start];
    let prev = start;
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const step = r.range(18, 27);
      const yaw = r.range(-0.55, 0.55);
      dir = norm([dir[0] * Math.cos(yaw) - dir[2] * Math.sin(yaw), dir[1] * 0.5 + r.range(-0.08, 0.08), dir[0] * Math.sin(yaw) + dir[2] * Math.cos(yaw)]);
      const target = add(prev.pos, scale(dir, step));
      const near = g.starsInRadius(target, 9)
        .filter((c) => c.star.kind === 'main' && c.star.cls !== 'O' && c.star.cls !== 'B' && !trail.includes(c.star) && distLy(c.star.pos, prev.pos) > 12)
        .sort((a, b) => a.d - b.d);
      let pick = near[0]?.star;
      if (!pick) {
        const any = g.starsInRadius(target, 14).filter((c) => !trail.includes(c.star) && c.star.id !== 'SOL').sort((a, b) => a.d - b.d)[0];
        pick = any.star;
      }
      const cls = i === TRAIL_LENGTH - 1 ? 'K' : pick.cls === 'M' || pick.kind !== 'main' ? 'K' : pick.cls;
      pick = g.forceStar(pick.id, { classDef: g.classDef(cls), u: r.range(0.2, 0.8), name: TRAIL_NAMES[i] });
      trail.push(pick);
      prev = pick;
    }
    this.trail = trail;

    this.special.set(start.id, {
      minPlanets: 5,
      noRandomSignals: true,
      after: (sys, rr, h) => ensureStartSystem(sys, rr, h),
    });
    for (let i = 1; i < trail.length; i++) {
      const last = i === trail.length - 1;
      this.special.set(trail[i].id, {
        minPlanets: 3,
        noRandomSignals: true,
        after: (sys, rr, h) => (last ? ensureFinalSystem(sys, rr, h) : addBeacon(sys, rr, h, i)),
      });
    }
    this.special.set('SOL', { build: buildSol, noRandomSignals: true });

    // Erebus: an intermediate-mass black hole within one jump of the start. Massive
    // enough that its tides are gentle at the horizon, so a ship can actually fall in.
    const used = new Set(trail.map((t) => t.id));
    const away = norm(sub(start.pos, trail[1].pos));
    const bhCands = g.starsInRadius(start.pos, 13.5)
      .filter((c) => c.d > 8 && c.star.id !== 'SOL' && !used.has(c.star.id))
      .sort((a, b) => {
        const da = dot(norm(sub(a.star.pos, start.pos)), away), db = dot(norm(sub(b.star.pos, start.pos)), away);
        return db - da;
      });
    if (bhCands.length) {
      const e = g.forceStar(bhCands[0].star.id, { classDef: g.classDef('X', 'blackhole'), u: 0.5, name: 'Erebus', mass: 60000, diskLum: 0.6 });
      this.erebus = e;
      this.special.set(e.id, { build: buildErebus, noRandomSignals: true });
    }

    // J1407: a young orange star 434 ly away toward Centaurus (galactic l 318.5, b +20.8).
    // In 2007 something passed in front of it and dimmed it for 56 days: J1407b, a giant
    // planet or brown dwarf wrapped in rings 180 million km across. Placed where it really is.
    const jPos = [SOL_POS[0] + 268.69, SOL_POS[1] + 154.01, SOL_POS[2] - 304.04];
    let jc = [];
    for (let rad = 6; !jc.length && rad < 60; rad *= 1.6) {
      jc = g.starsInRadius(jPos, rad).filter((c) => c.star.kind === 'main' || c.star.kind === 'brown').sort((a, b) => a.d - b.d);
    }
    if (jc.length) {
      const j = g.forceStar(jc[0].star.id, { classDef: g.classDef('K'), u: 0.47, name: 'J1407', mass: 0.9, temp: 4400, radius: 0.96, spectral: 'K5 IVe' });
      this.j1407 = j;
      // the drive brings you in on the sunlit face of the rings, 2.2 AU out, rather than
      // beside the star where its glare would drown them
      this.special.set(j.id, { build: buildJ1407, noRandomSignals: true, arrivalTarget: 'J1407b', arriveNear: { body: 'J1407b', dist: 2.2 * AU } });
    }

    // Places worth finding by name, for the map search.
    this.landmarks = [
      { name: 'Sol', star: g.sol, aliases: ['home', 'sun', 'solar system'] },
      ...['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Io', 'Europa', 'Ganymede', 'Callisto', 'Saturn', 'Titan', 'Uranus', 'Neptune', 'Triton']
        .map((b) => ({ name: b, star: g.sol, body: b, aliases: b === 'Earth' ? ['home'] : b === 'Saturn' ? ['rings'] : [] })),
      { name: 'Vesper', star: start, aliases: ['start'] },
    ];
    if (this.erebus) {
      this.landmarks.push({ name: 'Erebus', star: this.erebus, aliases: ['black hole', 'blackhole', 'bh'] });
      this.landmarks.push({ name: 'Erebus b', star: this.erebus, body: 'Erebus b', aliases: [] });
    }
    if (this.j1407) {
      this.landmarks.push({ name: 'J1407', star: this.j1407, aliases: ['1swasp j1407', 'centaurus'] });
      this.landmarks.push({ name: 'J1407b', star: this.j1407, body: 'J1407b', priority: 1, aliases: ['super saturn', 'super-saturn', 'giant rings', 'big rings', 'rings', 'ringed planet', 'j1407 b'] });
      this.landmarks.push({ name: 'J1407b I', star: this.j1407, body: 'J1407b I', aliases: ['exomoon', 'ring gap moon'] });
    }
  }

  trailIndex(starId) {
    return this.trail.findIndex((s) => s.id === starId);
  }

  system(star) {
    let sys = this.systemCache.get(star.id);
    if (!sys) {
      sys = generateSystem(star, this.special.get(star.id));
      if (this.systemCache.size > 24) this.systemCache.clear();
      this.systemCache.set(star.id, sys);
    }
    return sys;
  }
}

function qFromTo(a, b) {
  const c = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const q = [c[0], c[1], c[2], 1 + dot(a, b)];
  const l = Math.hypot(q[0], q[1], q[2], q[3]) || 1;
  return [q[0] / l, q[1] / l, q[2] / l, q[3] / l];
}
function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
function scale(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
function norm(a) { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }

function addPlanet(sys, h, rr, body, aAU, name) {
  body.kind = 'planet';
  body.parent = -1;
  body.index = sys.bodies.length;
  body.name = name;
  body.orbit = h.makeOrbit(rr, aAU * AU, sys.star.mass, 0.03);
  body.eqTemp = 278 * Math.pow(Math.max(sys.star.lum, 1e-5), 0.25) / Math.sqrt(aAU);
  h.spinFor(body, rr, false);
  sys.bodies.push(body);
  return body;
}

function addMoon(sys, h, rr, parent, body, a, name) {
  body.kind = 'moon';
  body.parent = parent.index;
  body.index = sys.bodies.length;
  body.name = name;
  body.orbit = h.makeOrbit(rr, a, parent.mass, 0.03);
  body.eqTemp = parent.eqTemp;
  body.spin = { locked: true, tilt: [0, 0, 0, 1], period: body.orbit.period, phase0: 0 };
  sys.bodies.push(body);
  return body;
}

function pickBeaconHost(sys, rr) {
  const pref = sys.bodies.filter((b) => b.rings) // ringed giants make for a better view
    .concat(sys.bodies.filter((b) => b.kind === 'moon' && b.parent >= 0 && sys.bodies[b.parent].rings))
    .concat(sys.bodies.filter((b) => b.type === 'gas' || b.type === 'icegiant'))
    .concat(sys.bodies);
  return pref[0];
}

function addBeacon(sys, rr, h, n) {
  if (!sys.bodies.length) {
    const T = 200;
    addPlanet(sys, h, rr, h.makeSolid(sys, rr, 'barren', R_EARTH * 0.4, M_EARTH * 0.06, T), 1.2 * Math.sqrt(sys.star.lum), `${sys.starData.name} b`);
  }
  const host = pickBeaconHost(sys, rr);
  const sig = h.orbitSignal('beacon', host, rr, host.rings ? 1.0 : rr.range(1.25, 1.6));
  sig.trail = n;
  sys.signals.push(sig);
}

function ensureStartSystem(sys, rr, h) {
  // Make sure the first system has a ringed gas giant with a landable moon, which is
  // where the first beacon waits.
  let giant = sys.bodies.find((b) => b.type === 'gas' && b.parent < 0);
  if (!giant) {
    const L = Math.max(sys.star.lum, 1e-3);
    const aAU = 5.2 * Math.sqrt(L) * 1.1;
    giant = addPlanet(sys, h, rr, h.makeGas(rr, false, R_JUP * 0.92, M_JUP * 0.8, 278 * Math.pow(L, 0.25) / Math.sqrt(aAU)), aAU, `${sys.starData.name} ${'bcdefghij'[sys.bodies.filter((b) => b.parent < 0).length]}`);
  }
  if (!giant.rings) {
    giant.rings = { inner: giant.radius * 1.3, outer: giant.radius * 2.25, seed: rr.int(1, 1e9), color: hexToLinear('#d4c6ad'), opacity: 0.85 };
  }
  // remove moons inside the rings
  for (const m of sys.bodies) if (m.parent === giant.index && m.orbit.a < giant.rings.outer * 1.2) m.orbit.a = giant.rings.outer * 1.3 + m.radius * 4;
  let moon = sys.bodies.find((b) => b.parent === giant.index && b.solid);
  if (!moon) {
    moon = addMoon(sys, h, rr, giant, h.makeSolid(sys, rr, 'ice', 1.3e6, 0.011 * M_EARTH, giant.eqTemp), giant.radius * 4.2, `${giant.name} I`);
  }
  sys.signals.push({ ...h.orbitSignal('beacon', giant, rr, 1.0), trail: 0 });
  sys.signals[sys.signals.length - 1].orbit.a = giant.rings.outer * 1.12;
}

function ensureFinalSystem(sys, rr, h) {
  const L = Math.max(sys.star.lum, 1e-3);
  const aAU = 3.4 * Math.sqrt(L);
  const T = 278 * Math.pow(L, 0.25) / Math.sqrt(aAU);
  const giant = addPlanet(sys, h, rr, h.makeGas(rr, false, R_JUP * 1.02, M_JUP * 1.4, T), aAU, `${sys.starData.name} ${'bcdefghij'[sys.bodies.filter((b) => b.parent < 0).length]}`);
  giant.rings = { inner: giant.radius * 1.35, outer: giant.radius * 2.4, seed: rr.int(1, 1e9), color: hexToLinear('#d8ccb6'), opacity: 0.9 };
  giant.spin.tilt = qAxis(1, 0, 0, 0.42);
  const moon = addMoon(sys, h, rr, giant, h.makeSolid(sys, rr, 'barren', 1.05e6, 0.0075 * M_EARTH, T), giant.radius * 5.5, `${giant.name} I`);
  moon.terrain.mare = 0.3;
  moon.restingPlace = true;
  const sig = h.surfaceSignal('petrel', moon, rr, 0.22, -0.18); // near-side, so the giant hangs in her sky
  sig.trail = TRAIL_LENGTH;
  sys.signals.push(sig);
}

function buildSol(sys, rr, h) {
  const mk = (type, rE, mE, aAU, name, extra = {}) => {
    const T = 278 / Math.sqrt(aAU);
    const b = h.makeSolid(sys, rr, type, rE * R_EARTH, mE * M_EARTH, T, extra);
    return addPlanet(sys, h, rr, b, aAU, name);
  };
  const gas = (ice, rJ, mJ, aAU, name, palette) => {
    const T = 278 / Math.sqrt(aAU);
    const b = h.makeGas(rr, ice, rJ * R_JUP, mJ * M_JUP, T);
    if (palette) b.gas.palette = palette.map(hexToLinear);
    return addPlanet(sys, h, rr, b, aAU, name);
  };
  mk('barren', 0.383, 0.055, 0.387, 'Mercury');
  mk('venus', 0.949, 0.815, 0.723, 'Venus');
  const earth = mk('terran', 1.0, 1.0, 1.0, 'Earth', { life: true });
  earth.terrain.sea = -0.06; earth.life = true; earth.terrain.life = true; earth.home = true;
  earth.atmosphere = h.atmosphere('terran', 1, 9.81, 288, rr);
  addMoon(sys, h, rr, earth, h.makeSolid(sys, rr, 'barren', 1.737e6, 0.0123 * M_EARTH, 270), 3.844e8, 'Moon');
  const mars = mk('desert', 0.532, 0.107, 1.524, 'Mars');
  const jup = gas(false, 1.0, 1.0, 5.2, 'Jupiter', ['#c8a27a', '#ebdfc8', '#9b6a45', '#f2e7d2', '#7a4a33']);
  addMoon(sys, h, rr, jup, h.makeSolid(sys, rr, 'lava', 1.8216e6, 0.015 * M_EARTH, 900, { moon: true }), 4.217e8, 'Io');
  addMoon(sys, h, rr, jup, h.makeSolid(sys, rr, 'ice', 1.5608e6, 0.008 * M_EARTH, 102), 6.709e8, 'Europa');
  addMoon(sys, h, rr, jup, h.makeSolid(sys, rr, 'ice', 2.6341e6, 0.025 * M_EARTH, 110), 1.0704e9, 'Ganymede');
  addMoon(sys, h, rr, jup, h.makeSolid(sys, rr, 'barren', 2.4103e6, 0.018 * M_EARTH, 134), 1.8827e9, 'Callisto');
  const sat = gas(false, 0.832, 0.299, 9.54, 'Saturn', ['#d8c49a', '#efe2c0', '#b39b6e', '#e8d5a8']);
  sat.rings = { inner: sat.radius * 1.24, outer: sat.radius * 2.27, seed: 4242, color: hexToLinear('#d9cdb4'), opacity: 0.92 };
  sat.spin.tilt = qAxis(1, 0, 0, 0.466);
  addMoon(sys, h, rr, sat, h.makeSolid(sys, rr, 'titan', 2.5747e6, 0.0225 * M_EARTH, 94), 1.2219e9, 'Titan');
  const ur = gas(true, 0.362, 0.0457, 19.2, 'Uranus', ['#a6d8de', '#b7e0e3', '#98ced6', '#c6e7e8']);
  ur.spin.tilt = qAxis(1, 0, 0, 1.706);
  ur.rings = { inner: ur.radius * 1.6, outer: ur.radius * 2.0, seed: 77, color: hexToLinear('#3a3a3a'), opacity: 0.25 };
  const nep = gas(true, 0.352, 0.054, 30.07, 'Neptune', ['#3f6fc4', '#5a86d4', '#2d58a8', '#7ea2e0']);
  addMoon(sys, h, rr, nep, h.makeSolid(sys, rr, 'ice', 1.3534e6, 0.0036 * M_EARTH, 38), 3.548e8, 'Triton');
  sys.home = true;
}

function buildJ1407(sys, rr, h) {
  // J1407b: about 20 Jupiter masses and only 16 million years old, so it still glows a
  // little with the heat of its own formation. Its ring system reaches 0.6 AU, 90 million
  // km, some 200 times the span of Saturn's, with dozens of rings and a broad clear gap at
  // 0.4 AU that a moon may have swept out.
  const giant = addPlanet(sys, h, rr, h.makeGas(rr, false, R_JUP * 1.4, M_JUP * 20, 1100), 5.0, 'J1407b');
  giant.gas.palette = ['#6e3a24', '#a2633e', '#4a2618', '#bd8259', '#2b150d'].map(hexToLinear);
  giant.gas.glow = 0.16;
  giant.gas.bands = 14;
  // tilt the rings steeply, leaning toward the star so it lights their face from about 50
  // degrees for the first few years you are likely to spend here (the year is 12 long)
  const o = giant.orbit;
  const th = o.phase0 + (2 * Math.PI * 3e6) / o.period;
  const toStar = qRotate(o.q, [-Math.cos(th), 0, -Math.sin(th)]);
  const orbitN = qRotate(o.q, [0, 1, 0]);
  const beta = 0.87;
  const n = norm(add(scale(orbitN, Math.cos(beta)), scale(toStar, Math.sin(beta))));
  giant.spin.tiltAngle = beta;
  giant.spin.tilt = qFromTo([0, 1, 0], n);
  giant.rings = { inner: 3.2e9, outer: 9.0e10, seed: 1407, color: hexToLinear('#c39a74'), opacity: 1, style: 'super', gapAt: 6.0e10, gapWidth: 5.0e9 };
  giant.landmark = 'Its rings span 180 million km, 200 times the width of Saturn\'s. Seen from Earth they eclipsed the star for 56 days in 2007.';
  const moon = addMoon(sys, h, rr, giant, h.makeSolid(sys, rr, 'ice', 4.4e6, 0.45 * M_EARTH, 80), 6.0e10, 'J1407b I');
  moon.orbit.q = giant.spin.tilt.slice(); // in the ring plane, keeping the great gap clear
}

function buildErebus(sys, rr, h) {
  // Only far out is the pull gentle enough for slow orbits: a frozen ice giant with a moon,
  // which is also the only fuel for the way back, and a small airless world beyond it.
  const T = 30;
  const giant = addPlanet(sys, h, rr, h.makeGas(rr, true, R_EARTH * 3.9, 17 * M_EARTH, T), 42, 'Erebus b');
  giant.rings = { inner: giant.radius * 1.5, outer: giant.radius * 2.1, seed: 9177, color: hexToLinear('#5a5a5e'), opacity: 0.3 };
  addMoon(sys, h, rr, giant, h.makeSolid(sys, rr, 'ice', 1.2e6, 0.008 * M_EARTH, T), giant.radius * 6, 'Erebus b I');
  addPlanet(sys, h, rr, h.makeSolid(sys, rr, 'barren', 2.2e6, 0.04 * M_EARTH, T), 74, 'Erebus c');
}
