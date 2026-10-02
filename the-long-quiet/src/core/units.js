// Physical constants. The simulation runs in SI units (metres, seconds, kilograms);
// the galaxy map runs in light-years.

export const C = 299792458;
export const G = 6.674e-11;
export const LY = 9.4607e15;
export const AU = 1.495978707e11;
export const YEAR = 31557600;
export const DAY = 86400;

export const R_SUN = 6.957e8;
export const M_SUN = 1.989e30;
export const T_SUN = 5772;

export const R_EARTH = 6.371e6;
export const M_EARTH = 5.972e24;
export const R_JUP = 6.9911e7;
export const M_JUP = 1.898e27;

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

export function fmtDistance(m) {
  const a = Math.abs(m);
  if (a < 1000) return `${a.toFixed(0)} m`;
  if (a < 1e6) return `${(a / 1000).toFixed(a < 1e4 ? 2 : 1)} km`;
  if (a < 0.05 * AU) return `${Math.round(a / 1000).toLocaleString('en-US')} km`;
  if (a < 0.2 * LY) return `${(a / AU).toFixed(a < 10 * AU ? 2 : 1)} AU`;
  return `${(a / LY).toFixed(2)} ly`;
}

export function fmtSpeed(v) {
  const a = Math.abs(v);
  if (a < 1000) return `${a.toFixed(a < 10 ? 1 : 0)} m/s`;
  if (a < 0.01 * C) return `${(a / 1000).toFixed(a < 1e4 ? 2 : 1)} km/s`;
  if (a >= 1e4 * C) return `${Math.round(a / C).toLocaleString('en-US')} c`;
  return `${(a / C).toFixed(a < 10 * C ? 2 : a < 100 * C ? 1 : 0)} c`;
}

export function fmtYears(y) {
  if (y < 1) return `${(y * 365.25).toFixed(0)} days`;
  if (y < 10) return `${y.toFixed(2)} yr`;
  return `${y.toFixed(1)} yr`;
}

export function fmtDuration(s) {
  if (s < 60) return `${s.toFixed(0)} s`;
  if (s < 3600) return `${(s / 60).toFixed(0)} min`;
  if (s < 2 * DAY) return `${(s / 3600).toFixed(1)} h`;
  if (s < YEAR) return `${(s / DAY).toFixed(1)} days`;
  return `${(s / YEAR).toFixed(2)} yr`;
}
