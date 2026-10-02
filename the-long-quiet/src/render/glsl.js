// Shared GLSL chunks.

export const NOISE = /* glsl */ `
// Ashima / Gustavson 3D simplex noise (MIT)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm3(vec3 p, int oct) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 8; i++) {
    if (i >= oct) break;
    s += a * snoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s;
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
`;

// Single-scattering atmosphere, evaluated in planet-radius units.
// The planet centre is passed relative to the camera.
export const ATMOSPHERE = /* glsl */ `
uniform vec3 aCenter;     // planet centre relative to camera, metres
uniform float aR;         // planet radius, metres
uniform float aRa;        // atmosphere top radius / planet radius
uniform vec3 aBetaR;      // rayleigh scattering per planet radius
uniform vec3 aBetaM;      // mie scattering per planet radius (tinted)
uniform float aHR;        // scale heights / planet radius
uniform float aHM;
uniform float aG;
uniform vec3 aSunDir;
uniform vec3 aSunColor;
uniform float aEnabled;

const float A_PI = 3.14159265;

vec2 aRaySphere(vec3 ro, vec3 rd, float r) {
  // ro relative to sphere centre. Robust form for distant observers.
  float tc = -dot(ro, rd);
  vec3 p = ro + rd * tc;
  float h2 = dot(p, p);
  float r2 = r * r;
  if (h2 > r2) return vec2(1e30, -1e30);
  float dt = sqrt(r2 - h2);
  return vec2(tc - dt, tc + dt);
}

float aChapman(float X, float cosChi) {
  float c = sqrt(X * 1.5707963);
  if (cosChi >= 0.0) return c / ((c - 1.0) * cosChi + 1.0);
  float sinChi = sqrt(clamp(1.0 - cosChi * cosChi, 0.0, 1.0));
  return c / ((c - 1.0) * cosChi - 1.0) + 2.0 * c * exp(min(X - X * sinChi, 60.0)) * sqrt(sinChi);
}

// optical depth (rayleigh, mie) from point at radius r (planet units) toward direction with zenith cosine mu
vec2 aOpticalToTop(float r, float mu) {
  float h = max(r - 1.0, 0.0);
  float dr = aHR * exp(-h / aHR) * aChapman(r / aHR, mu);
  float dm = aHM * exp(-h / aHM) * aChapman(r / aHM, mu);
  return vec2(dr, dm);
}

vec3 aTransmittanceSun(vec3 p) {
  float r = length(p);
  vec3 up = p / r;
  float mu = dot(up, aSunDir);
  // ground shadow
  vec2 hit = aRaySphere(p, aSunDir, 1.0);
  if (hit.x > 0.0 && hit.y > 0.0) return vec3(0.0);
  vec2 od = aOpticalToTop(r, mu);
  return exp(-(aBetaR * od.x + aBetaM * 1.1 * od.y));
}

// Integrate inscattered light along a ray segment. ro, rd in planet units relative to centre.
// Returns inscatter (rgb) and average transmittance (a).
vec4 aScatter(vec3 ro, vec3 rd, float tMax, int steps) {
  vec2 hit = aRaySphere(ro, rd, aRa);
  float t0 = max(hit.x, 0.0);
  float t1 = min(hit.y, tMax);
  if (t1 <= t0) return vec4(0.0, 0.0, 0.0, 1.0);
  float ds = (t1 - t0) / float(steps);
  vec3 sumR = vec3(0.0), sumM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  for (int i = 0; i < 24; i++) {
    if (i >= steps) break;
    float t = t0 + ds * (float(i) + 0.5);
    vec3 p = ro + rd * t;
    float r = length(p);
    float h = max(r - 1.0, 0.0);
    float dR = exp(-h / aHR) * ds;
    float dM = exp(-h / aHM) * ds;
    odR += dR * 0.5; odM += dM * 0.5;
    vec3 tView = exp(-(aBetaR * odR + aBetaM * 1.1 * odM));
    vec3 tSun = aTransmittanceSun(p);
    sumR += tView * tSun * dR;
    sumM += tView * tSun * dM;
    odR += dR * 0.5; odM += dM * 0.5;
  }
  float mu = dot(rd, aSunDir);
  float pR = 3.0 / (16.0 * A_PI) * (1.0 + mu * mu);
  float g = aG, g2 = g * g;
  float pM = 3.0 / (8.0 * A_PI) * ((1.0 - g2) * (1.0 + mu * mu)) / ((2.0 + g2) * pow(max(1.0 + g2 - 2.0 * g * mu, 1e-4), 1.5));
  vec3 trans = exp(-(aBetaR * odR + aBetaM * 1.1 * odM));
  vec3 single = (sumR * aBetaR * pR + sumM * aBetaM * pM);
  // cheap multiple-scattering fill for thick atmospheres
  float day = clamp(dot(normalize(ro + rd * (t0 + t1) * 0.5), aSunDir) * 2.0 + 0.4, 0.0, 1.0);
  vec3 fill = (1.0 - trans) * (aBetaR / max(aBetaR.b, 1e-6) * 0.06 + aBetaM / max(max(aBetaM.r, aBetaM.g), 1e-6) * 0.10) * day * 0.5;
  vec3 col = (single + fill) * aSunColor;
  return vec4(col, dot(trans, vec3(0.3333)));
}
`;

// Shadowing by up to four spheres (moons, planets) and an optional ring plane.
export const ECLIPSE = /* glsl */ `
uniform vec4 uOcc[4];       // xyz centre relative to camera (m), w radius (m)
uniform int uOccCount;
uniform float uSunAngR;     // angular radius of the star as seen from here
float eclipse(vec3 p, vec3 sunDir) {
  float lit = 1.0;
  for (int i = 0; i < 4; i++) {
    if (i >= uOccCount) break;
    vec3 c = uOcc[i].xyz - p;
    float d = length(c);
    float r = uOcc[i].w;
    float along = dot(c, sunDir);
    if (along <= 0.0) continue;
    float angSep = atan(length(cross(c, sunDir)), along);
    float angOcc = asin(clamp(r / d, 0.0, 1.0));
    float s = uSunAngR;
    // fraction of solar disc covered, smooth approximation
    float cover = clamp((angOcc + s - angSep) / (2.0 * s), 0.0, 1.0);
    float maxCover = clamp((angOcc * angOcc) / (s * s), 0.0, 1.0);
    lit *= 1.0 - cover * maxCover;
  }
  return lit;
}
`;

export const LOGDEPTH_VERT_PARS = '#include <common>\n#include <logdepthbuf_pars_vertex>\n';
export const LOGDEPTH_VERT = '#include <logdepthbuf_vertex>\n';
export const LOGDEPTH_FRAG_PARS = '#include <logdepthbuf_pars_fragment>\n';
export const LOGDEPTH_FRAG = '#include <logdepthbuf_fragment>\n';

// Per-pixel view ray, rebuilt from the fragment position. Used by large shells
// (atmospheres, cloud decks) whose interpolated positions are too coarse near the horizon.
export const VIEW_RAY = /* glsl */ `
uniform mat3 uCamRot;
uniform vec2 uTanFov;
uniform vec2 uRes;
vec3 viewRay() {
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  return normalize(uCamRot * vec3(ndc.x * uTanFov.x, ndc.y * uTanFov.y, -1.0));
}
`;
