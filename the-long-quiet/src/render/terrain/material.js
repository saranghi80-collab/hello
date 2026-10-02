// Surface shading for rocky and icy worlds: regolith with a Lommel-Seeliger lunar term,
// ice with lineae, dune fields, oceans with sun glint, lava that glows on the night side,
// aerial perspective through the planet's own atmosphere, eclipses, and the ship's floodlight.

import * as THREE from 'three';
import { NOISE, ATMOSPHERE, ECLIPSE } from '../glsl.js';

export const TERRAIN_TYPES = { barren: 0, ice: 1, desert: 2, lava: 3, venus: 4, titan: 5, terran: 6 };

const VERT = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
attribute float aHeight;
attribute vec2 aMat;
attribute vec3 aUnit;
uniform vec3 uPatchOffset;
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec3 vUpW;
varying vec3 vUnit;
varying vec3 vDetail;
varying float vH;
varying vec2 vMat;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vUpW = normalize(mat3(modelMatrix) * aUnit);
  vUnit = aUnit;
  vDetail = position + uPatchOffset;
  vH = aHeight;
  vMat = aMat;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}
`;

const FRAG = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFillDir;
uniform vec3 uFillColor;
uniform vec3 uAmbient;
uniform vec3 uLo;
uniform vec3 uHi;
uniform vec3 uAcc;
uniform int uType;
uniform float uSea;
uniform float uAmp;
uniform float uRadius;
uniform float uLife;
uniform float uLunar;
uniform float uTime;
uniform float uProj;
uniform vec3 uSpotPos;
uniform vec3 uSpotDir;
uniform vec3 uSpotColor;
uniform float uSpotCos;
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec3 vUpW;
varying vec3 vUnit;
varying vec3 vDetail;
varying float vH;
varying vec2 vMat;
${NOISE}
${ATMOSPHERE}
${ECLIPSE}

// thin bright-or-dark lines (ice lineae, lava cracks), anti-aliased and faded by scale
float lineae(vec3 u, float f0, float w0, float dist) {
  float c = 0.0;
  for (int i = 0; i < 3; i++) {
    float f = f0 * pow(2.4, float(i));
    vec3 q = u * f + float(i) * 11.0;
    q += 0.25 * vec3(snoise(u * 2.1 + float(i)), snoise(u * 2.1 + 5.0), snoise(u * 2.1 - 3.0));
    float n = abs(snoise(q));
    float w = max(w0 / (1.0 + float(i) * 0.3), fwidth(n) * 1.2);
    float px = (uRadius / f) / dist * uProj;
    c = max(c, (1.0 - smoothstep(0.0, w, n)) / (1.0 + float(i) * 0.6) * smoothstep(2.0, 8.0, px));
  }
  return c;
}

float layer(vec3 p, float waveM, float dist) {
  // noise of a given wavelength, faded out before it can alias
  float px = waveM / dist * uProj;
  float w = smoothstep(1.5, 5.0, px);
  return w > 0.0 ? snoise(p) * w : 0.0;
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vNormalW);
  vec3 up = normalize(vUpW);
  float dist = length(vWorldPos);
  vec3 V = -vWorldPos / dist;
  float slope = 1.0 - clamp(dot(N, up), 0.0, 1.0);
  float h = vH;
  vec2 m = vMat;
  float lat = abs(vUnit.y);

  // detail: far layers from the unit sphere, near layers from a local anchor
  float dFar = layer(vUnit * 90.0, uRadius / 90.0, dist) * 0.5 + layer(vUnit * 900.0, uRadius / 900.0, dist) * 0.3
             + layer(vUnit * 7000.0, uRadius / 7000.0, dist) * 0.2;
  float dNear = layer(vDetail * 0.06, 16.0, dist) * 0.5 + layer(vDetail * 0.4, 2.5, dist) * 0.35 + layer(vDetail * 2.2, 0.45, dist) * 0.25;
  float detail = dFar + dNear;

  vec3 albedo = uLo;
  vec3 emissive = vec3(0.0);
  float waterMask = 0.0;
  float depth = uSea - h;
  float hn = clamp(0.5 + h / (uAmp * 1.6), 0.0, 1.0);

  if (uType == 0) {            // airless rock
    albedo = mix(uLo, uHi, clamp(hn * 0.7 + 0.25 + detail * 0.18, 0.0, 1.0));
    albedo = mix(albedo, uAcc, m.x * 0.85);
    albedo = mix(albedo, uHi * 1.35, clamp(m.y, 0.0, 1.0) * 0.55);
    albedo *= 1.0 - slope * 0.12 + slope * slope * 0.25;
  } else if (uType == 1) {     // ice
    albedo = mix(uLo, uHi, clamp(0.55 + detail * 0.25 + m.y * 0.3, 0.0, 1.0));
    float lin = mix(lineae(vUnit + 3.7, 3.5, 0.06, dist), clamp(m.x, 0.0, 1.0), smoothstep(8000.0, 2500.0, dist));
    albedo = mix(albedo, uAcc, clamp(lin * 1.1, 0.0, 0.85));
    albedo = mix(albedo, uLo * 0.8, slope * 0.4);
  } else if (uType == 2) {     // arid
    vec3 sand = mix(uHi, uHi * vec3(1.05, 0.95, 0.85), detail * 0.5 + 0.5);
    vec3 rock = mix(uLo, uAcc, clamp(0.5 + detail * 0.6, 0.0, 1.0));
    float sandAmt = clamp(m.x * 1.3 - slope * 2.5 + detail * 0.2, 0.0, 1.0);
    albedo = mix(rock, sand, sandAmt);
    albedo = mix(albedo, uAcc * 0.8, m.y * 0.5);
    albedo = mix(albedo, vec3(0.85, 0.82, 0.8), smoothstep(0.86, 0.95, lat + detail * 0.04) * 0.85);
  } else if (uType == 3) {     // molten
    albedo = mix(uLo, uHi, clamp(0.4 + detail * 0.4 + m.y * 0.3, 0.0, 1.0));
    float crack = mix(lineae(vUnit, 9.0, 0.05, dist), clamp(m.x, 0.0, 1.0), smoothstep(6000.0, 1500.0, dist));
    vec3 hot = mix(vec3(1.0, 0.22, 0.03), vec3(1.0, 0.6, 0.2), crack);
    float sunE = max(dot(uSunColor, vec3(0.2126, 0.7152, 0.0722)), 0.0);
    // glow that reads at night and stays subtle in full daylight
    float glowK = 0.004 + sunE * 0.05;
    emissive = hot * crack * crack * glowK * 5.0 + vec3(1.0, 0.2, 0.03) * smoothstep(0.45, 0.0, hn) * glowK * 0.4;
    albedo *= 1.0 - crack * 0.7;
  } else if (uType == 4) {     // greenhouse
    albedo = mix(uLo, uHi, clamp(0.35 + detail * 0.3 + m.x * 0.4, 0.0, 1.0));
    albedo = mix(albedo, uAcc, m.y * 0.4);
  } else if (uType == 5) {     // hazy cryogenic
    albedo = mix(uLo, uHi, clamp(0.45 + detail * 0.35, 0.0, 1.0));
    albedo = mix(albedo, uLo * 0.55, m.x * 0.5);
    if (depth > 0.0) waterMask = 1.0;
  } else {                     // temperate
    vec3 soil = mix(uLo, uHi, clamp(0.45 + detail * 0.35, 0.0, 1.0));
    vec3 rock = mix(uLo * 0.9, uHi * 0.85, clamp(0.5 + detail * 0.5, 0.0, 1.0));
    vec3 veg = mix(vec3(0.03, 0.075, 0.025), vec3(0.11, 0.13, 0.045), clamp(m.x + detail * 0.3, 0.0, 1.0));
    // dry belts in the subtropics, green where it is wet
    vec3 dry = mix(vec3(0.42, 0.33, 0.2), vec3(0.55, 0.45, 0.3), clamp(0.5 + detail, 0.0, 1.0));
    soil = mix(soil, dry, smoothstep(0.45, 0.25, m.x) * (1.0 - smoothstep(0.55, 0.7, lat)));
    float vegAmt = uLife * smoothstep(0.36, 0.56, m.x + detail * 0.08) * (1.0 - smoothstep(0.35, 0.6, slope))
                 * (1.0 - smoothstep(uAmp * 0.25, uAmp * 0.45, h)) * (1.0 - smoothstep(0.62, 0.78, lat));
    albedo = mix(soil, veg, vegAmt);
    albedo = mix(albedo, rock, smoothstep(0.3, 0.6, slope));
    float beach = (1.0 - smoothstep(4.0, 40.0, h)) * (1.0 - smoothstep(0.2, 0.4, slope));
    albedo = mix(albedo, vec3(0.42, 0.38, 0.3), beach * 0.7);
    float snow = max(smoothstep(0.72, 0.84, lat + detail * 0.05), smoothstep(uAmp * 0.5, uAmp * 0.7, h + detail * 300.0));
    albedo = mix(albedo, vec3(0.82, 0.84, 0.86), snow * (1.0 - smoothstep(0.55, 0.8, slope)));
    if (depth > 0.0) waterMask = 1.0;
  }
  albedo = max(albedo, vec3(0.0));

  // ------------- lighting -------------
  vec3 L = uSunDir;
  float NdL = dot(N, L);
  float mu0 = max(NdL, 0.0);
  float mu = max(dot(N, V), 0.0);
  float lommel = 2.0 * mu0 / (mu0 + mu + 1e-3);
  float diffuse = mix(mu0, lommel * 0.5, uLunar);
  // mountains catch light after the terminator, but the far side of the planet is dark
  float hgt = max(h + uAmp, 0.0);
  float horizon = smoothstep(-0.015 - sqrt(2.0 * hgt / uRadius), 0.02, dot(up, L));
  float shadow = horizon * eclipse(vWorldPos, L);

  vec3 sunCol = uSunColor;
  vec3 sky = vec3(0.0);
  vec3 pPlanet = (vWorldPos - aCenter) / aR;
  if (aEnabled > 0.5) {
    vec3 tSun = aTransmittanceSun(pPlanet * (1.0 + 2e-6));
    sunCol *= tSun;
    float dayAmt = smoothstep(-0.25, 0.3, dot(up, L));
    vec3 tint = aBetaR / max(max(aBetaR.r, max(aBetaR.g, aBetaR.b)), 1e-6) + aBetaM / max(max(aBetaM.r, max(aBetaM.g, aBetaM.b)), 1e-6) * 0.6;
    float tau = clamp((aBetaR.b + aBetaM.g) * aHR * 1.0, 0.0, 3.0);
    sky = uSunColor * tint * (1.0 - exp(-tau)) * 0.35 * dayAmt;
  }
  vec3 E = sunCol * diffuse * shadow + uFillColor * max(dot(N, uFillDir), 0.0) + sky * (0.6 + 0.4 * dot(N, up)) + uAmbient;

  // floodlight
  vec3 toF = vWorldPos - uSpotPos;
  float dS = length(toF);
  vec3 sdir = toF / max(dS, 1e-3);
  float cone = smoothstep(uSpotCos, mix(uSpotCos, 1.0, 0.35), dot(sdir, uSpotDir));
  E += uSpotColor * cone * max(dot(N, -sdir), 0.0) / (dS * dS + 4.0);

  vec3 col = albedo / PI * E + emissive;

  if (waterMask > 0.5) {
    vec3 deep = uType == 5 ? vec3(0.006, 0.004, 0.002) : vec3(0.004, 0.018, 0.035);
    vec3 shallow = uType == 5 ? vec3(0.02, 0.014, 0.008) : vec3(0.02, 0.07, 0.08);
    vec3 wcol = mix(shallow, deep, 1.0 - exp(-depth / 60.0));
    vec3 wn = up;
    float near = smoothstep(4000.0, 200.0, dist);
    if (near > 0.0) {
      vec3 q = vDetail * 0.08 + vec3(0.0, uTime * 0.4, 0.0);
      wn = normalize(up + (vec3(snoise(q), snoise(q + 7.1), snoise(q + 13.7)) - up * 0.0) * 0.06 * near);
    }
    float NdLw = max(dot(wn, L), 0.0);
    vec3 Hh = normalize(L + V);
    float rough = mix(0.22, 0.06, near);
    float a2 = rough * rough * rough * rough;
    float nh = max(dot(wn, Hh), 0.0);
    float dd = nh * nh * (a2 - 1.0) + 1.0;
    float D = a2 / (PI * dd * dd);
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(wn, V), 0.0), 5.0);
    vec3 spec = sunCol * shadow * D * fres * NdLw * 0.25;
    col = wcol / PI * E + spec + sky * fres * 0.3;
  }

  if (aEnabled > 0.5) {
    vec3 ro = -aCenter / aR;
    vec4 sc = aScatter(ro, -V, dist / aR, 10);
    col = col * sc.a + sc.rgb;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;

export function makeTerrainMaterial(body) {
  const t = body.terrain;
  const pal = t.palette;
  const uniforms = {
    uSunDir: { value: new THREE.Vector3(1, 0, 0) },
    uSunColor: { value: new THREE.Vector3(1, 1, 1) },
    uFillDir: { value: new THREE.Vector3(0, 1, 0) },
    uFillColor: { value: new THREE.Vector3() },
    uAmbient: { value: new THREE.Vector3(0.0004, 0.0004, 0.0005) },
    uLo: { value: new THREE.Vector3(...pal.lo) },
    uHi: { value: new THREE.Vector3(...pal.hi) },
    uAcc: { value: new THREE.Vector3(...pal.acc) },
    uType: { value: TERRAIN_TYPES[t.type] ?? 0 },
    uSea: { value: t.type === 'terran' ? 0 : t.type === 'titan' ? -0.32 * t.amp : -1e9 },
    uAmp: { value: t.amp },
    uRadius: { value: body.radius },
    uLife: { value: t.life ? 1 : 0 },
    uLunar: { value: { barren: 1, ice: 0.35, lava: 0.5, desert: 0.25 }[t.type] ?? 0 },
    uTime: { value: 0 },
    uProj: { value: 800 },
    uPatchOffset: { value: new THREE.Vector3() },
    uSpotPos: { value: new THREE.Vector3() },
    uSpotDir: { value: new THREE.Vector3(0, 0, -1) },
    uSpotColor: { value: new THREE.Vector3() },
    uSpotCos: { value: 0.9 },
    uOcc: { value: [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] },
    uOccCount: { value: 0 },
    uSunAngR: { value: 0.005 },
    ...atmosphereUniforms(),
  };
  return new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms });
}

export function atmosphereUniforms() {
  return {
    aCenter: { value: new THREE.Vector3() },
    aR: { value: 1 },
    aRa: { value: 1.02 },
    aBetaR: { value: new THREE.Vector3() },
    aBetaM: { value: new THREE.Vector3() },
    aHR: { value: 0.001 },
    aHM: { value: 0.0002 },
    aG: { value: 0.76 },
    aSunDir: { value: new THREE.Vector3(1, 0, 0) },
    aSunColor: { value: new THREE.Vector3(1, 1, 1) },
    aEnabled: { value: 0 },
  };
}

// Fill atmosphere uniforms from a body's atmosphere description (planet-radius units).
export function setAtmosphereParams(u, body) {
  const a = body.atmosphere;
  if (!a) { u.aEnabled.value = 0; return; }
  const R = body.radius;
  u.aR.value = R;
  u.aRa.value = 1 + a.top / R;
  const H = a.H / R, Hm = a.Hm / R;
  u.aHR.value = H;
  u.aHM.value = Hm;
  // beta = tau / H, in planet units
  u.aBetaR.value.set(a.tauR[0] / H, a.tauR[1] / H, a.tauR[2] / H);
  const mc = a.mieColor;
  u.aBetaM.value.set((a.tauM * mc[0]) / Hm, (a.tauM * mc[1]) / Hm, (a.tauM * mc[2]) / Hm);
  u.aG.value = a.g;
  u.aEnabled.value = 1;
}
