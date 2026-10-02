// The galaxy: a barred-free four-arm spiral 100,000 light-years across, populated lazily in
// 10 ly sectors. Stellar density, class mix and luminosities follow the real solar neighbourhood
// closely enough that the night sky and jump distances feel right.

import { Rng, hash32 } from '../core/rng.js';
import { blackbodyRGB } from '../core/color.js';
import { smoothstep } from '../core/units.js';
import { properName, catalogName } from './names.js';

export const GALAXY_SEED = 0x7e57a11;
export const SECTOR = 10; // ly
export const SOL_POS = [0, 18, 26000];
export const GALAXY = {
  R0: 26000,
  Rd: 9000,
  h0: 330,
  pitch: 12.5 * Math.PI / 180,
  arms: 4,
  armOffset: 0.6,
  bulgeR: 2600,
};

// Unnormalised stellar density (shared with the sky shader in render/sky.js).
export function rawDensity(x, y, z) {
  const r = Math.hypot(x, z);
  const theta = Math.atan2(z, x);
  const radial = Math.exp(-(r - GALAXY.R0) / GALAXY.Rd) * smoothstep(52000, 38000, r);
  const h = GALAXY.h0 + r * 0.006;
  const ch = Math.cosh(y / h);
  const vert = 1 / (ch * ch);
  const k = 1 / Math.tan(GALAXY.pitch);
  const phase = theta - k * Math.log(Math.max(r, 400) / GALAXY.R0);
  const a = 0.5 + 0.5 * Math.cos(GALAXY.arms * phase + GALAXY.armOffset);
  const arm = a * a * a * a * smoothstep(2500, 7000, r);
  const disk = radial * vert * (0.42 + 1.25 * arm);
  const b2 = (r * r + y * y * 3.2) / (2 * GALAXY.bulgeR * GALAXY.bulgeR);
  const bulge = 18 * Math.exp(-b2);
  return disk + bulge;
}

const RHO_SOL = 0.0040; // stars per cubic light-year near Sol
const DENSITY_NORM = RHO_SOL / rawDensity(SOL_POS[0], SOL_POS[1], SOL_POS[2]);
export function stellarDensity(x, y, z) {
  return rawDensity(x, y, z) * DENSITY_NORM;
}

// Spectral classes. Weights are tilted slightly toward visible stars compared to reality
// (where three in four stars are dim M dwarfs), so the neighbourhood is not only red.
const CLASSES = [
  { cls: 'M', kind: 'main', w: 0.55, T: [2400, 3700], M: [0.08, 0.47], R: [0.12, 0.62] },
  { cls: 'K', kind: 'main', w: 0.17, T: [3700, 5200], M: [0.47, 0.8], R: [0.66, 0.93] },
  { cls: 'G', kind: 'main', w: 0.095, T: [5200, 6000], M: [0.8, 1.05], R: [0.93, 1.16] },
  { cls: 'F', kind: 'main', w: 0.05, T: [6000, 7500], M: [1.05, 1.4], R: [1.16, 1.5] },
  { cls: 'A', kind: 'main', w: 0.022, T: [7500, 10000], M: [1.4, 2.1], R: [1.5, 2.2] },
  { cls: 'B', kind: 'main', w: 0.006, T: [10000, 28000], M: [2.1, 14], R: [2.2, 6.5] },
  { cls: 'O', kind: 'main', w: 0.0005, T: [30000, 42000], M: [16, 40], R: [6.6, 12] },
  { cls: 'K', kind: 'giant', w: 0.007, T: [3900, 4800], M: [1.0, 2.5], R: [10, 40] },
  { cls: 'M', kind: 'giant', w: 0.003, T: [3100, 3800], M: [1.0, 3.0], R: [40, 160] },
  { cls: 'D', kind: 'dwarf', w: 0.045, T: [5500, 32000], M: [0.5, 1.2], R: [0.008, 0.015] },
  { cls: 'L', kind: 'brown', w: 0.03, T: [900, 2200], M: [0.03, 0.075], R: [0.08, 0.11] },
  { cls: 'N', kind: 'neutron', w: 0.0012, T: [400000, 900000], M: [1.3, 2.0], R: [1.6e-5, 1.9e-5] },
  { cls: 'X', kind: 'blackhole', w: 0.0004, T: [0, 0], M: [5, 18], R: [0, 0] },
];

function makeStar(id, pos, seed, forced) {
  const r = new Rng(seed);
  const c = forced?.classDef || r.weighted(CLASSES);
  const u = forced?.u ?? r.next();
  const lerp = (a) => a[0] + (a[1] - a[0]) * u;
  const temp = c.kind === 'blackhole' ? 0 : lerp(c.T) * (0.97 + 0.06 * r.next());
  const mass = c.M[0] * Math.pow(c.M[1] / c.M[0], u);
  let radius = lerp(c.R);
  if (c.kind === 'blackhole') radius = (2 * 6.674e-11 * mass * 1.989e30 / (299792458 ** 2)) / 6.957e8;
  const lum = c.kind === 'blackhole' ? 0 : radius * radius * Math.pow(temp / 5772, 4);
  const sub = c.kind === 'blackhole' || c.kind === 'neutron' ? 0 : Math.min(9, Math.floor(10 * (1 - u)));
  const lumClass = { main: 'V', giant: 'III', dwarf: '', brown: '', neutron: '', blackhole: '' }[c.kind];
  let spectral = `${c.cls}${sub}${lumClass}`;
  if (c.kind === 'dwarf') spectral = `DA${Math.max(1, Math.min(9, Math.round(50400 / temp)))}`;
  if (c.kind === 'brown') spectral = temp < 1300 ? `T${sub}` : `L${sub}`;
  if (c.kind === 'neutron') spectral = 'Neutron star';
  if (c.kind === 'blackhole') spectral = 'Black hole';
  const bright = lum > 4 || c.kind === 'giant';
  const name = forced?.name || (bright || r.chance(0.28) ? properName(seed) : catalogName(seed));
  const color = c.kind === 'blackhole' ? [0, 0, 0] : blackbodyRGB(Math.min(temp, 40000));
  const scoopable = c.kind === 'main' || c.kind === 'giant';
  return {
    id, name, pos, seed,
    cls: c.cls, kind: c.kind, spectral,
    temp, mass, radius, lum, color, scoopable,
  };
}

export class Galaxy {
  constructor(seed = GALAXY_SEED) {
    this.seed = seed;
    this.sectors = new Map();
    this.overrides = new Map(); // star id -> forced properties
    this.sol = makeStar('SOL', SOL_POS.slice(), hash32(seed, 1), {
      classDef: CLASSES[2], u: 0.72, name: 'Sol',
    });
    this.sol.temp = 5772; this.sol.mass = 1; this.sol.radius = 1; this.sol.lum = 1;
    this.sol.spectral = 'G2V'; this.sol.color = blackbodyRGB(5772);
    this.solSector = this.sectorOf(SOL_POS);
  }

  sectorOf(p) {
    return [Math.floor(p[0] / SECTOR), Math.floor(p[1] / SECTOR), Math.floor(p[2] / SECTOR)];
  }

  sectorStars(ix, iy, iz) {
    const key = `${ix},${iy},${iz}`;
    let list = this.sectors.get(key);
    if (list) return list;
    const seed = hash32(this.seed, ix, iy, iz);
    const r = new Rng(seed);
    const cx = (ix + 0.5) * SECTOR, cy = (iy + 0.5) * SECTOR, cz = (iz + 0.5) * SECTOR;
    const lambda = stellarDensity(cx, cy, cz) * SECTOR ** 3;
    const n = Math.min(r.poisson(lambda), 400);
    list = [];
    const isSol = ix === this.solSector[0] && iy === this.solSector[1] && iz === this.solSector[2];
    for (let i = 0; i < n; i++) {
      const pos = [(ix + r.next()) * SECTOR, (iy + r.next()) * SECTOR, (iz + r.next()) * SECTOR];
      if (isSol && Math.hypot(pos[0] - SOL_POS[0], pos[1] - SOL_POS[1], pos[2] - SOL_POS[2]) < 4) continue;
      const id = `${ix}.${iy}.${iz}.${i}`;
      const s = makeStar(id, pos, hash32(seed, i, 77), this.overrides.get(id));
      list.push(s);
    }
    if (isSol) list.push(this.sol);
    if (this.sectors.size > 60000) this.sectors.clear();
    this.sectors.set(key, list);
    return list;
  }

  starsInRadius(p, radius) {
    const out = [];
    const r2 = radius * radius;
    const a = this.sectorOf([p[0] - radius, p[1] - radius, p[2] - radius]);
    const b = this.sectorOf([p[0] + radius, p[1] + radius, p[2] + radius]);
    for (let ix = a[0]; ix <= b[0]; ix++)
      for (let iy = a[1]; iy <= b[1]; iy++)
        for (let iz = a[2]; iz <= b[2]; iz++)
          for (const s of this.sectorStars(ix, iy, iz)) {
            const dx = s.pos[0] - p[0], dy = s.pos[1] - p[1], dz = s.pos[2] - p[2];
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 <= r2) out.push({ star: s, d: Math.sqrt(d2) });
          }
    return out;
  }

  starById(id) {
    if (id === 'SOL') return this.sol;
    const [ix, iy, iz] = id.split('.').map(Number);
    return this.sectorStars(ix, iy, iz).find((s) => s.id === id) || null;
  }

  // Re-roll a star with forced properties (used for story systems).
  forceStar(id, props) {
    this.overrides.set(id, props);
    const [ix, iy, iz] = id.split('.').map(Number);
    this.sectors.delete(`${ix},${iy},${iz}`);
    return this.starById(id);
  }

  classDef(cls, kind = 'main') {
    return CLASSES.find((c) => c.cls === cls && c.kind === kind);
  }
}

export function distLy(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}
