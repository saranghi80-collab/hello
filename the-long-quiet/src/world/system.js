// Star system generation. Orbits are circular Keplerian, bodies spin on tilted axes and
// moons are tidally locked. Everything is in SI units.

import { Rng, hash32 } from '../core/rng.js';
import { G, AU, R_SUN, M_SUN, R_EARTH, M_EARTH, R_JUP, M_JUP, DAY, clamp } from '../core/units.js';
import { hexToLinear, mixRGB, scaleRGB } from '../core/color.js';
import { planetLetter, moonNumeral } from './names.js';

const TAU = Math.PI * 2;

// ---------- small vector/quaternion helpers (plain arrays, double precision) ----------
export function qMul(a, b) {
  return [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
}
export function qAxis(ax, ay, az, angle) {
  const s = Math.sin(angle / 2);
  return [ax * s, ay * s, az * s, Math.cos(angle / 2)];
}
export function qRotate(q, v) {
  const [x, y, z, w] = q;
  const ix = w * v[0] + y * v[2] - z * v[1];
  const iy = w * v[1] + z * v[0] - x * v[2];
  const iz = w * v[2] + x * v[1] - y * v[0];
  const iw = -x * v[0] - y * v[1] - z * v[2];
  return [
    ix * w + iw * -x + iy * -z - iz * -y,
    iy * w + iw * -y + iz * -x - ix * -z,
    iz * w + iw * -z + ix * -y - iy * -x,
  ];
}
export function qConj(q) { return [-q[0], -q[1], -q[2], q[3]]; }

// ---------- palettes ----------
const PAL = {
  barren: [
    { lo: '#4a4744', hi: '#8b8781', acc: '#2c2a28' },
    { lo: '#5a5048', hi: '#9c8f80', acc: '#3a332c' },
    { lo: '#3d3a38', hi: '#77726b', acc: '#26221f' },
    { lo: '#5f4b3e', hi: '#a08672', acc: '#3b2c22' },
    { lo: '#545354', hi: '#a3a19f', acc: '#2f2e30' },
  ],
  ice: [
    { lo: '#a9b4bb', hi: '#e8ecee', acc: '#8a6f5a' },
    { lo: '#b8b0a2', hi: '#efe8dc', acc: '#7d5b45' },
    { lo: '#9fb0bf', hi: '#dfe9f0', acc: '#6a7d8f' },
  ],
  desert: [
    { lo: '#6e3b22', hi: '#b8784c', acc: '#4a2817' },
    { lo: '#7b5a3c', hi: '#c49a6c', acc: '#4f3826' },
    { lo: '#5b4537', hi: '#a28468', acc: '#3a2a20' },
    { lo: '#80452c', hi: '#c98d5e', acc: '#5a2e1c' },
  ],
  lava: [{ lo: '#1c1716', hi: '#3a302b', acc: '#ff6a1a' }, { lo: '#211a17', hi: '#453832', acc: '#ff8a2a' }],
  sulfur: [{ lo: '#7a5a24', hi: '#d9c27a', acc: '#3a2414' }, { lo: '#8a6428', hi: '#e2cf8a', acc: '#4a2c18' }],
  venus: [{ lo: '#5a3d22', hi: '#9a7448', acc: '#3a2814' }],
  titan: [{ lo: '#3a2a1a', hi: '#6e5232', acc: '#120d08' }],
  terran: [
    { lo: '#4b4033', hi: '#8c7a63', acc: '#2d3b22' },
    { lo: '#57493b', hi: '#9a8b76', acc: '#3a3a24' },
    { lo: '#4a4440', hi: '#8a8178', acc: '#33281f' },
  ],
};

const GAS_PALETTES = {
  cold: ['#9fb4b9', '#c9d6d2', '#7d989f', '#e1e6de'],
  jovian: ['#c8a27a', '#e9dcc4', '#9b6a45', '#f2e7d2', '#7a4a33'],
  saturnian: ['#d8c49a', '#efe2c0', '#b39b6e', '#e8d5a8'],
  water: ['#e8e6e0', '#cfd4d6', '#f4f2ea', '#b9c1c4'],
  azure: ['#3e6fa8', '#5d8cc0', '#2b5486', '#88aad0'],
  hot: ['#3a2a2a', '#5a3a30', '#22181a', '#7a4a32'],
  icegiant: ['#8fc7d1', '#a9d8de', '#76b2c0', '#c3e4e6'],
  neptunian: ['#3f6fc4', '#5a86d4', '#2d58a8', '#7ea2e0'],
};

function pal(list, r) {
  const p = r.pick(list);
  const jitter = (c) => {
    const lin = hexToLinear(c);
    const s = 0.85 + 0.3 * r.next();
    return lin.map((v) => clamp(v * s, 0, 1));
  };
  return { lo: jitter(p.lo), hi: jitter(p.hi), acc: jitter(p.acc) };
}

// ---------- atmosphere presets (vertical optical depths per channel) ----------
function atmosphere(kind, P, g, T, r) {
  const H = clamp(8000 * (9.81 / g) * (T / 288), 3000, 60000);
  const top = H * 9;
  const earthR = [0.0464, 0.108, 0.265];
  let tauR, tauM, mieColor, g_ = 0.76, Hm = H * 0.15, sunsetTint = 0;
  switch (kind) {
    case 'terran':
      tauR = scaleRGB(earthR, P);
      tauM = 0.02 * P; mieColor = [1, 1, 1];
      break;
    case 'desert': // thin, dusty, butterscotch by day
      tauR = scaleRGB(earthR, P * 0.6);
      tauM = 0.25 + 0.6 * r.next(); mieColor = [1.0, 0.62, 0.38]; Hm = H * 0.8; g_ = 0.65;
      break;
    case 'venus':
      tauR = [3.2, 3.0, 2.2]; tauM = 6; mieColor = [1.0, 0.86, 0.55]; Hm = H * 1.4; g_ = 0.7;
      break;
    case 'titan':
      tauR = [0.25, 0.35, 0.45]; tauM = 3.5; mieColor = [1.0, 0.55, 0.22]; Hm = H * 1.2; g_ = 0.6;
      break;
    case 'gas':
      tauR = [0.08, 0.12, 0.2]; tauM = 0.05; mieColor = [1, 1, 1];
      break;
    default:
      return null;
  }
  return { P, H, Hm, top, tauR, tauM, mieColor, g: g_, sunsetTint };
}

// ---------- system ----------
function starPhysical(star) {
  return {
    kind: 'star',
    name: star.name,
    radius: star.kind === 'blackhole' ? star.radius * R_SUN : star.radius * R_SUN,
    mass: star.mass * M_SUN,
    lum: star.lum,
    temp: star.temp,
    color: star.color,
    starKind: star.kind,
    spectral: star.spectral,
  };
}

function hillRadius(a, m, M) { return a * Math.cbrt(m / (3 * M)); }

function makeOrbit(r, a, parentMass, incMax) {
  const inc = r.range(-incMax, incMax);
  const lan = r.range(0, TAU);
  const q = qMul(qAxis(0, 1, 0, lan), qAxis(1, 0, 0, inc));
  return {
    a,
    q,
    phase0: r.range(0, TAU),
    period: TAU * Math.sqrt((a * a * a) / (G * parentMass)),
  };
}

function surfaceType(T, massE, r, isMoon) {
  if (T > 750) return 'lava';
  if (T > 400) return massE > 0.6 && !isMoon && r.chance(0.65) ? 'venus' : 'barren';
  if (T >= 235 && T <= 330 && massE > 0.35 && massE < 4 && !isMoon) {
    const x = r.next();
    if (x < 0.4) return 'terran';
    if (x < 0.7) return 'desert';
    return 'barren';
  }
  if (T >= 170 && T < 420 && massE > 0.25) return r.chance(0.55) ? 'desert' : 'barren';
  if (T < 170) return r.chance(0.6) ? 'ice' : 'barren';
  return 'barren';
}

function gasPaletteFor(T, ice, r) {
  if (ice) return T < 60 && r.chance(0.6) ? GAS_PALETTES.neptunian : GAS_PALETTES.icegiant;
  if (T < 80) return GAS_PALETTES.cold;
  if (T < 170) return r.chance(0.6) ? GAS_PALETTES.jovian : GAS_PALETTES.saturnian;
  if (T < 360) return GAS_PALETTES.water;
  if (T < 850) return GAS_PALETTES.azure;
  return GAS_PALETTES.hot;
}

function makeSolid(sys, r, type, radius, mass, T, opts = {}) {
  const g = (G * mass) / (radius * radius);
  const seed = r.int(1, 2 ** 31 - 1);
  const p = pal(type === 'lava' && opts.moon ? PAL.sulfur : PAL[type] || PAL.barren, r);
  let atmo = null;
  let P = 0;
  let hasLife = false;
  if (type === 'terran') { P = r.range(0.5, 2.2); atmo = atmosphere('terran', P, g, T, r); hasLife = opts.life ?? r.chance(0.3); }
  if (type === 'desert') { P = r.logRange(0.004, 0.25); atmo = atmosphere('desert', P, g, T, r); }
  if (type === 'venus') { P = r.range(40, 95); atmo = atmosphere('venus', P, g, T, r); }
  if (type === 'titan') { P = r.range(1.2, 1.8); atmo = atmosphere('titan', P, g, T, r); }
  const relief = {
    barren: 0.0045, ice: 0.0022, desert: 0.0032, lava: 0.0022, venus: 0.0018, titan: 0.0013, terran: 0.0028,
  }[type];
  const amp = clamp(radius * relief * (radius < 1.2e6 ? 1.6 : 1), 1500, 14000);
  const surfaceT = T + (type === 'venus' ? 420 + r.range(0, 60) : type === 'terran' ? 14 * P : type === 'titan' ? 6 : 0);
  const terrain = {
    seed,
    type,
    radius,
    amp,
    craters: { barren: 1.0, ice: 0.45, desert: 0.45, lava: 0.05, venus: 0.08, titan: 0.12, terran: 0.06 }[type] * r.range(0.7, 1.2),
    sea: type === 'terran' ? r.range(-0.18, 0.1) : type === 'titan' ? -0.35 : null,
    mare: type === 'barren' ? r.range(0, 0.9) : 0,
    life: hasLife,
    palette: p,
  };
  return {
    solid: true,
    type,
    radius,
    mass,
    gravity: g,
    tempK: surfaceT,
    atmosphere: atmo,
    pressure: P,
    terrain,
    life: hasLife,
    landable: g < 26,
    oceans: terrain.sea !== null && type === 'terran',
  };
}

export function generateSystem(star, special) {
  const r = new Rng(hash32(star.seed, 0xb0d1e5));
  const sStar = starPhysical(star);
  const sys = { starData: star, star: sStar, bodies: [], signals: [], seed: star.seed };
  const L = Math.max(star.lum, 1e-5);
  const Mstar = sStar.mass;

  if (special?.build) {
    special.build(sys, r, helpers);
    finalize(sys);
    return sys;
  }

  let nPlanets;
  switch (star.kind) {
    case 'main':
      nPlanets = star.cls === 'O' ? r.int(0, 3) : star.cls === 'M' ? r.int(1, 6) : r.int(2, 9);
      break;
    case 'giant': nPlanets = r.int(1, 5); break;
    case 'dwarf': nPlanets = r.int(0, 3); break;
    case 'brown': nPlanets = r.int(0, 4); break;
    case 'neutron': nPlanets = r.int(0, 2); break;
    default: nPlanets = r.int(0, 3);
  }
  if (special?.minPlanets) nPlanets = Math.max(nPlanets, special.minPlanets);

  const frost = 4.85 * Math.sqrt(L);
  let a = Math.max(r.logRange(0.12, 0.45) * Math.sqrt(L), (sStar.radius * 6) / AU, 0.012);
  if (star.kind === 'giant') a = Math.max(a, (sStar.radius * 8) / AU) * 1.5;
  if (star.kind === 'brown' || star.kind === 'dwarf') a = r.logRange(0.004, 0.02);
  if (star.kind === 'blackhole' || star.kind === 'neutron') a = r.logRange(0.3, 2);

  for (let i = 0; i < nPlanets; i++) {
    const aAU = a;
    a *= r.range(1.45, 2.15);
    const T = 278 * Math.pow(L, 0.25) / Math.sqrt(aAU);
    let body;
    const beyond = aAU > frost;
    const roll = r.next();
    if (beyond && roll < 0.5 && star.kind !== 'brown') {
      const mass = r.logRange(0.12, 6) * M_JUP;
      const radius = R_JUP * r.range(0.82, 1.08) * (T > 800 ? 1.25 : 1);
      body = makeGas(r, false, radius, mass, T);
    } else if (beyond && roll < 0.78 && star.kind !== 'brown') {
      const mass = r.range(10, 24) * M_EARTH;
      const radius = R_EARTH * r.range(3.5, 4.2);
      body = makeGas(r, true, radius, mass, T);
    } else if (!beyond && roll < 0.04 && star.cls !== 'M' && star.kind === 'main') {
      const mass = r.logRange(0.4, 3) * M_JUP;
      body = makeGas(r, false, R_JUP * r.range(1.1, 1.4), mass, T);
    } else {
      const massE = beyond ? r.logRange(0.005, 0.6) : r.logRange(0.02, 4.5);
      const radius = R_EARTH * Math.pow(massE, massE < 1 ? 0.3 : 0.27) * r.range(0.95, 1.05);
      const type = surfaceType(T, massE, r, false);
      body = makeSolid(sys, r, type, radius, massE * M_EARTH, T);
    }
    body.kind = 'planet';
    body.parent = -1;
    body.index = sys.bodies.length;
    body.name = `${star.name} ${planetLetter(i)}`;
    body.orbit = makeOrbit(r, aAU * AU, Mstar, 0.06);
    body.eqTemp = T;
    spinFor(body, r, aAU < 0.11 * Math.sqrt(L) || star.kind === 'brown');
    sys.bodies.push(body);
    const pi = body.index;

    // Moons
    const hill = hillRadius(body.orbit.a, body.mass, Mstar);
    let nMoons = 0;
    if (body.type === 'gas' || body.type === 'icegiant') nMoons = r.int(1, body.type === 'gas' ? 5 : 3);
    else if (body.radius > 3e6 && r.chance(0.35)) nMoons = r.int(1, 2);
    let ma = body.radius * r.range(2.8, 4.5);
    if (body.rings) ma = Math.max(ma, body.rings.outer * 1.25);
    for (let m = 0; m < nMoons; m++) {
      if (ma > hill * 0.35) break;
      const giant = body.type === 'gas' || body.type === 'icegiant';
      const massE = giant ? r.logRange(0.0015, 0.03) : r.logRange(0.0004, 0.012);
      const radius = R_EARTH * Math.pow(massE, 0.3) * r.range(0.95, 1.08);
      let type = T < 170 ? (r.chance(0.65) ? 'ice' : 'barren') : 'barren';
      if (giant && m === 0 && r.chance(0.25)) type = 'lava';
      if (giant && T < 130 && massE > 0.012 && r.chance(0.3)) type = 'titan';
      const mt = type === 'lava' ? 900 : T * 0.98;
      const moon = makeSolid(sys, r, type, radius, massE * M_EARTH, mt, { moon: true });
      moon.kind = 'moon';
      moon.parent = pi;
      moon.index = sys.bodies.length;
      moon.name = `${body.name} ${moonNumeral(m)}`;
      moon.orbit = makeOrbit(r, ma, body.mass, 0.04);
      moon.eqTemp = T;
      moon.spin = { locked: true, tilt: [0, 0, 0, 1], period: moon.orbit.period, phase0: 0 };
      sys.bodies.push(moon);
      ma *= r.range(1.5, 2.3);
    }
  }

  if (special?.after) special.after(sys, r, helpers);
  finalize(sys);
  generateSignals(sys, r, special);
  return sys;
}

function makeGas(r, ice, radius, mass, T) {
  const palette = gasPaletteFor(T, ice, r).map(hexToLinear);
  const g = (G * mass) / (radius * radius);
  const body = {
    solid: false,
    type: ice ? 'icegiant' : 'gas',
    radius,
    mass,
    gravity: g,
    tempK: T,
    landable: false,
    atmosphere: atmosphere('gas', 1, g, Math.max(T, 60), r),
    gas: {
      seed: r.int(1, 2 ** 31 - 1),
      palette,
      bands: ice ? r.range(4, 9) : r.range(10, 22),
      turbulence: ice ? r.range(0.15, 0.4) : r.range(0.5, 1.0),
      storms: r.range(0, 1),
      glow: T > 850 ? clamp((T - 850) / 900, 0, 1) : 0,
    },
  };
  body.atmosphere.top = radius * 0.012;
  body.atmosphere.H = body.atmosphere.top / 8;
  body.atmosphere.Hm = body.atmosphere.H * 0.5;
  const tint = mixRGB(palette[1], [0.6, 0.75, 1.0], ice ? 0.6 : 0.35);
  body.atmosphere.tauR = scaleRGB([0.15 / tint[0], 0.15 / tint[1], 0.15 / tint[2]], 0.6).map((v, k) => v * [0.5, 0.8, 1.4][k]);
  if (r.chance(ice ? 0.3 : 0.38)) {
    const inner = radius * r.range(1.22, 1.5);
    const outer = radius * r.range(1.85, 2.6);
    body.rings = {
      inner,
      outer,
      seed: r.int(1, 2 ** 31 - 1),
      color: T < 170 ? mixRGB(hexToLinear('#d9cfbf'), hexToLinear('#b8a58a'), r.next()) : hexToLinear('#6b5f55'),
      opacity: ice ? r.range(0.15, 0.5) : r.range(0.5, 0.95),
    };
  }
  return body;
}

function spinFor(body, r, locked) {
  const tiltAngle = r.chance(0.06) ? r.range(0.5, 1.6) : r.range(0, 0.5);
  const tilt = qMul(qAxis(0, 1, 0, r.range(0, TAU)), qAxis(1, 0, 0, tiltAngle));
  if (locked) {
    body.spin = { locked: true, tilt: [0, 0, 0, 1], period: body.orbit.period, phase0: 0 };
  } else {
    const period = body.solid ? r.logRange(9, 90) * 3600 : r.range(9, 18) * 3600;
    body.spin = { locked: false, tilt, period: r.chance(0.1) ? -period : period, phase0: r.range(0, TAU), tiltAngle };
  }
}

function finalize(sys) {
  // Sphere of influence and a few derived values.
  for (const b of sys.bodies) {
    const parentMass = b.parent < 0 ? sys.star.mass : sys.bodies[b.parent].mass;
    b.soi = Math.max(b.radius * 3, b.orbit.a * Math.pow(b.mass / parentMass, 0.4));
    if (b.parent >= 0) b.soi = Math.min(b.soi, b.orbit.a * 0.45);
    b.children = sys.bodies.filter((c) => c.parent === b.index).map((c) => c.index);
    b.id = `${sys.starData.id}/${b.index}`;
  }
  sys.extent = sys.bodies.reduce((m, b) => Math.max(m, b.parent < 0 ? b.orbit.a : 0), 0) || AU;
}

// ---------- signals ----------
function generateSignals(sys, r, special) {
  const bodies = sys.bodies;
  if (!bodies.length) return;
  const landables = bodies.filter((b) => b.solid && b.landable && b.type !== 'venus');
  const roll = r.next();
  if (special?.noRandomSignals) return;
  if (roll < 0.11) {
    const b = r.pick(bodies);
    sys.signals.push(orbitSignal('probe', b, r));
  } else if (roll < 0.16 && landables.length) {
    sys.signals.push(surfaceSignal('wreck', r.pick(landables), r));
  } else if (roll < 0.185 && landables.length) {
    sys.signals.push(surfaceSignal('monolith', r.pick(landables), r));
  } else if (roll < 0.2) {
    const big = bodies.filter((b) => b.kind === 'planet').sort((x, y) => y.radius - x.radius)[0];
    if (big) sys.signals.push(orbitSignal('ring', big, r, r.range(1.8, 3.2)));
  }
}

export function orbitSignal(type, body, r, altFactor) {
  const alt = altFactor ?? r.range(1.12, 1.6);
  const a = body.radius * alt + (body.rings ? 0 : 0);
  return {
    type,
    body: body.index,
    placement: 'orbit',
    orbit: { a: body.rings && alt < body.rings.outer / body.radius + 0.1 ? body.rings.outer * 1.15 : a, inc: r.range(-0.5, 0.5), phase0: r.range(0, TAU), lan: r.range(0, TAU) },
    seed: r.int(1, 2 ** 31 - 1),
  };
}

export function surfaceSignal(type, body, r, lat, lon) {
  return {
    type,
    body: body.index,
    placement: 'surface',
    lat: lat ?? r.range(-0.9, 0.9),
    lon: lon ?? r.range(-Math.PI, Math.PI),
    seed: r.int(1, 2 ** 31 - 1),
  };
}

const helpers = { makeSolid, makeGas, makeOrbit, spinFor, orbitSignal, surfaceSignal, hillRadius, PAL, GAS_PALETTES, atmosphere };

// ---------- kinematics ----------
// Position of a body in the star-centred inertial frame at time t (seconds).
export function bodyPosition(sys, idx, t, out = [0, 0, 0]) {
  const b = sys.bodies[idx];
  const o = b.orbit;
  const th = o.phase0 + (TAU * t) / o.period;
  const local = qRotate(o.q, [o.a * Math.cos(th), 0, o.a * Math.sin(th)]);
  if (b.parent >= 0) {
    const pp = bodyPosition(sys, b.parent, t);
    out[0] = pp[0] + local[0]; out[1] = pp[1] + local[1]; out[2] = pp[2] + local[2];
  } else {
    out[0] = local[0]; out[1] = local[1]; out[2] = local[2];
  }
  return out;
}

export function bodyVelocity(sys, idx, t) {
  const dt = 1;
  const a = bodyPosition(sys, idx, t - dt);
  const b = bodyPosition(sys, idx, t + dt);
  return [(b[0] - a[0]) / (2 * dt), (b[1] - a[1]) / (2 * dt), (b[2] - a[2]) / (2 * dt)];
}

// Body-fixed -> inertial rotation quaternion at time t.
export function bodyOrientation(sys, idx, t) {
  const b = sys.bodies[idx];
  const s = b.spin;
  if (s.locked) {
    const o = b.orbit;
    const th = o.phase0 + (TAU * t) / o.period;
    return qMul(o.q, qAxis(0, 1, 0, Math.PI - th));
  }
  return qMul(s.tilt, qAxis(0, 1, 0, s.phase0 + (TAU * t) / s.period));
}

export function bodyAngularVelocity(sys, idx) {
  const b = sys.bodies[idx];
  const w = TAU / b.spin.period;
  const axis = b.spin.locked ? qRotate(b.orbit.q, [0, -1, 0]) : qRotate(b.spin.tilt, [0, 1, 0]);
  return [axis[0] * w, axis[1] * w, axis[2] * w];
}

export function signalPosition(sys, sig, t, bodyPos) {
  const b = sys.bodies[sig.body];
  const bp = bodyPos || bodyPosition(sys, sig.body, t);
  if (sig.placement === 'orbit') {
    const o = sig.orbit;
    // Artificial objects hold station (a slow drift rather than a true orbit), so a
    // pilot can come alongside without matching tens of kilometres per second.
    const period = TAU * Math.sqrt((o.a ** 3) / (G * b.mass)) * 60000;
    const th = o.phase0 + (TAU * t) / period;
    const q = qMul(qAxis(0, 1, 0, o.lan), qAxis(1, 0, 0, o.inc));
    const p = qRotate(q, [o.a * Math.cos(th), 0, o.a * Math.sin(th)]);
    return [bp[0] + p[0], bp[1] + p[1], bp[2] + p[2]];
  }
  const q = bodyOrientation(sys, sig.body, t);
  const local = sig.local || latLonToVec(sig.lat, sig.lon, b.radius);
  const p = qRotate(q, local);
  return [bp[0] + p[0], bp[1] + p[1], bp[2] + p[2]];
}

export function latLonToVec(lat, lon, r) {
  return [r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.sin(lon)];
}

export function describeBody(b) {
  const lines = [];
  const typeName = {
    barren: 'Airless rocky body', ice: 'Ice world', desert: 'Arid world, thin atmosphere', lava: 'Molten world',
    venus: 'Greenhouse world', titan: 'Hazy cryogenic world', terran: b.life ? 'Temperate world, biosphere' : 'Temperate world',
    gas: 'Gas giant', icegiant: 'Ice giant',
  }[b.type];
  lines.push(typeName);
  return lines;
}

export const TYPE_LABEL = {
  barren: 'Airless rock', ice: 'Ice world', desert: 'Arid world', lava: 'Molten world', venus: 'Greenhouse world',
  titan: 'Hazy world', terran: 'Temperate world', gas: 'Gas giant', icegiant: 'Ice giant',
};

export { DAY };
