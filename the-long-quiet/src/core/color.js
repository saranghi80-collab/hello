// Blackbody colours computed from the Planck spectrum against the CIE 1931 observer
// (Wyman, Sloan & Shirley 2013 multi-lobe fit), converted to linear sRGB.

function g(x, mu, s1, s2) {
  const t = (x - mu) / (x < mu ? s1 : s2);
  return Math.exp(-0.5 * t * t);
}
function cieX(l) { return 1.056 * g(l, 599.8, 37.9, 31.0) + 0.362 * g(l, 442.0, 16.0, 26.7) - 0.065 * g(l, 501.1, 20.4, 26.2); }
function cieY(l) { return 0.821 * g(l, 568.8, 46.9, 40.5) + 0.286 * g(l, 530.9, 16.3, 31.1); }
function cieZ(l) { return 1.217 * g(l, 437.0, 11.8, 36.0) + 0.681 * g(l, 459.0, 26.0, 13.8); }

const cache = new Map();

// Returns linear sRGB normalised so the brightest channel is 1.
export function blackbodyRGB(T) {
  const key = Math.round(T / 25);
  if (cache.has(key)) return cache.get(key).slice();
  let X = 0, Y = 0, Z = 0;
  for (let l = 380; l <= 780; l += 5) {
    const lm = l * 1e-9;
    const B = 1 / (Math.pow(lm, 5) * (Math.exp(1.4387769e-2 / (lm * T)) - 1));
    X += B * cieX(l); Y += B * cieY(l); Z += B * cieZ(l);
  }
  let r = 3.2406 * X - 1.5372 * Y - 0.4986 * Z;
  let gg = -0.9689 * X + 1.8758 * Y + 0.0415 * Z;
  let b = 0.0557 * X - 0.2040 * Y + 1.0570 * Z;
  r = Math.max(r, 0); gg = Math.max(gg, 0); b = Math.max(b, 0);
  const m = Math.max(r, gg, b) || 1;
  const out = [r / m, gg / m, b / m];
  cache.set(key, out);
  return out.slice();
}

export function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function hexToLinear(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [srgbToLinear(((n >> 16) & 255) / 255), srgbToLinear(((n >> 8) & 255) / 255), srgbToLinear((n & 255) / 255)];
}

export function mixRGB(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

export function scaleRGB(a, s) {
  return [a[0] * s, a[1] * s, a[2] * s];
}
