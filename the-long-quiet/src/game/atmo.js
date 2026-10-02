// Physical atmospheres for flight: density, pressure and temperature with altitude.
//
// Rocky worlds use an isothermal exponential atmosphere scaled to their surface pressure.
// Gas giants are measured from the 1-bar level (their visible cloud tops) and continue
// downward along a dry adiabat, so pressure and heat keep climbing the deeper you go.

const BAR = 1e5;
const ATM = 101325;

export function atmoModel(body) {
  if (!body.atmosphere) return null;
  if (body._atmoModel) return body._atmoModel;
  let m;
  if (body.solid) {
    const P0 = body.pressure * ATM;
    const H = body.atmosphere.H;
    m = { gas: false, P0, H, T0: body.tempK, rho0: P0 / (body.gravity * H), top: H * 14 };
  } else {
    // hydrogen-helium envelope: H = kT / (mu m_H g), mu about 2.3
    const T0 = Math.max(body.tempK, 50);
    const H = (3614 * T0) / body.gravity;
    m = { gas: true, P0: BAR, H, T0, rho0: BAR / (body.gravity * H), top: H * 16 };
  }
  body._atmoModel = m;
  return m;
}

// State of the air at an altitude (metres above the surface, or above the 1-bar level).
export function airAt(body, alt) {
  const m = atmoModel(body);
  if (!m || !isFinite(alt) || alt > m.top) return { rho: 0, P: 0, T: 0, light: 1, depth: 0, gas: m ? m.gas : false };
  const f = Math.exp(Math.min(-alt / m.H, 60));
  const P = m.P0 * f;
  let T = m.T0;
  let rho = m.rho0 * f;
  let light = 1;
  let depth = 0;
  if (m.gas && alt < 0) {
    // below the cloud tops: a dry adiabat. Temperature climbs at g/cp per metre and
    // pressure follows as (T/T0)^(cp/R). Sunlight is drowned by the cloud decks.
    depth = -alt;
    T = m.T0 + (body.gravity / 12000) * depth;
    const bars = Math.pow(T / m.T0, 3.5);
    rho = (bars * BAR) / (3615 * T);
    light = Math.exp(-1.3 * Math.pow(bars, 0.8));
    return { rho, P: bars * BAR, T, light, depth, gas: true };
  } else if (!m.gas && body.pressure > 20) {
    // greenhouse worlds: the cloud deck swallows most of the light near the ground
    light = Math.max(0.03, Math.exp(-3 * Math.min(1, P / m.P0)));
  }
  return { rho, P, T, light, depth, gas: m.gas };
}

// Highest cruise speed the drive governor allows in air of density rho, chosen so entry
// heating stays survivable.
export function safeEntrySpeed(rho) {
  if (rho <= 1e-9) return Infinity;
  return 1000 * Math.cbrt(1.1 / Math.sqrt(rho));
}

// Entry heating in the game's heat units per second (Sutton-Graves: sqrt(rho) v^3).
export function entryHeating(rho, v) {
  const k = v / 1000;
  return 0.035 * Math.sqrt(rho) * k * k * k;
}

export const SHIP_DRAG_K = 30 / (2 * 40000); // Cd*A / 2m, per (kg/m^3)
export { BAR, ATM };
