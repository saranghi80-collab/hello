// Renderers for everything in a star system: the star, gas giants, rocky worlds (quadtree
// terrain), atmospheres, rings, and point "glints" for bodies too small to resolve.
// All positions are relative to the camera (floating origin), computed in double precision.

import * as THREE from 'three';
import { NOISE, ATMOSPHERE, ECLIPSE, VIEW_RAY } from './glsl.js';
import { CAMERA_UNIFORMS } from './engine.js';
import { TerrainQuadtree } from './terrain/quadtree.js';
import { makeTerrainMaterial, atmosphereUniforms, setAtmosphereParams } from './terrain/material.js';
import { bodyPosition, bodyOrientation, qRotate, qConj } from '../world/system.js';
import { AU } from '../core/units.js';
import { Rng } from '../core/rng.js';

const LOGV = '#include <common>\n#include <logdepthbuf_pars_vertex>\n';
const LOGF = '#include <common>\n#include <logdepthbuf_pars_fragment>\n';

function lumNorm(c) {
  const y = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return [c[0] / y, c[1] / y, c[2] / y];
}

// ---------------------------------------------------------------- star
const STAR_VERT = `${LOGV}
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
void main() {
  vObj = position;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vV = -wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`;
const STAR_FRAG = `${LOGF}
uniform vec3 uColor; uniform float uRadiance; uniform float uTime; uniform float uGran; uniform float uSpots; uniform float uSeed;
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
${NOISE}
void main() {
  #include <logdepthbuf_fragment>
  float mu = clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
  vec3 ld = vec3(1.0) - vec3(0.5, 0.62, 0.78) * (1.0 - pow(mu, 0.75));
  vec3 p = normalize(vObj);
  float t = uTime * 0.004;
  float g1 = snoise(p * uGran + vec3(t, -t, t * 0.7));
  float g2 = snoise(p * uGran * 2.3 + vec3(-t * 1.3, t, 0.0));
  float cells = 1.0 - abs(g1);
  float gran = 0.82 + 0.18 * (cells * 0.7 + g2 * 0.3);
  float spot = smoothstep(0.62, 0.78, fbm3(p * 3.0 + uSeed, 4)) * uSpots;
  float fac = smoothstep(0.4, 0.75, fbm3(p * 5.0 + uSeed * 2.0, 3)) * (1.0 - mu) * 0.25;
  vec3 c = uColor * uRadiance * ld * gran * (1.0 - spot * 0.75) * (1.0 + fac);
  gl_FragColor = vec4(c, 1.0);
}`;

const CORONA_VERT = `${LOGV}
varying vec2 vQ;
uniform float uScale;
void main() {
  vQ = position.xy * uScale;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float r = length(mv.xyz);
  mv.xy += position.xy * uScale * uRad;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`.replace('uniform float uScale;', 'uniform float uScale; uniform float uRad;');
const CORONA_FRAG = `${LOGF}
uniform vec3 uColor; uniform float uIntensity; uniform float uTime; uniform float uSeed;
varying vec2 vQ;
${NOISE}
void main() {
  #include <logdepthbuf_fragment>
  float r = length(vQ);
  if (r < 0.98) discard;
  float a = atan(vQ.y, vQ.x);
  float streak = 0.6 + 0.4 * fbm3(vec3(cos(a) * 3.0, sin(a) * 3.0, uSeed + uTime * 0.002), 4);
  float fall = pow(1.0 / r, 6.0) * 0.6 + pow(1.0 / r, 2.5) * 0.04 * streak;
  fall *= smoothstep(0.98, 1.02, r);
  gl_FragColor = vec4(uColor * uIntensity * fall, 1.0);
}`;

export class StarRenderer {
  constructor(star) {
    this.star = star;
    this.group = new THREE.Group();
    const col = lumNorm(star.color);
    this.color = col;
    const visible = star.starKind !== 'blackhole';
    const gran = star.starKind === 'giant' ? 9 : star.starKind === 'dwarf' ? 80 : 40;
    this.mat = new THREE.ShaderMaterial({
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG,
      uniforms: {
        uColor: { value: new THREE.Vector3(...col) }, uRadiance: { value: 1 }, uTime: { value: 0 }, uGran: { value: gran },
        uSpots: { value: star.temp < 6200 ? 0.8 : 0.1 }, uSeed: { value: (star.radius % 97) },
      },
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 64), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.visible = visible;
    this.group.add(this.mesh);
    this.coronaMat = new THREE.ShaderMaterial({
      vertexShader: CORONA_VERT, fragmentShader: CORONA_FRAG, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
      uniforms: { uColor: { value: new THREE.Vector3(...col) }, uIntensity: { value: 1 }, uTime: { value: 0 }, uSeed: { value: 3.7 }, uScale: { value: 7 }, uRad: { value: 1 } },
    });
    this.corona = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.coronaMat);
    this.corona.frustumCulled = false;
    this.corona.visible = visible && star.starKind !== 'neutron';
    this.group.add(this.corona);
    // radiance such that irradiance at distance d is lum * (AU/d)^2
    this.radiance = (Math.max(star.lum, 1e-6) * AU * AU) / (Math.PI * star.radius * star.radius);
    if (star.starKind === 'neutron') this.buildPulsar();
  }

  buildAccretion() {
    const rs = this.star.radius;
    const g = new THREE.RingGeometry(rs * 3, rs * 14, 256, 1);
    const mat = new THREE.ShaderMaterial({
      vertexShader: `${LOGV} varying vec3 vP; varying vec3 vW; void main(){ vP = position; vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; \n#include <logdepthbuf_vertex>\n}`,
      fragmentShader: `${LOGF} uniform float uTime; uniform float uRs; uniform vec3 uAxisX; varying vec3 vP; varying vec3 vW; ${NOISE}
      void main(){
        #include <logdepthbuf_fragment>
        float r = length(vP.xy) / uRs;
        float a = atan(vP.y, vP.x);
        float spin = uTime * 0.6 / pow(r, 1.5);
        float n = fbm3(vec3(cos(a + spin) * r * 0.8, sin(a + spin) * r * 0.8, r * 0.3), 5);
        float T = pow(3.0 / r, 0.75);
        vec3 hot = mix(vec3(1.0, 0.45, 0.15), vec3(0.85, 0.9, 1.0), clamp(T - 0.4, 0.0, 1.0));
        // doppler beaming: one side approaches
        vec3 vel = normalize(cross(vec3(0.0, 0.0, 1.0), vP));
        vec3 viewDir = normalize(vW);
        float beam = 1.0 + 0.8 * dot(mat3(modelMatrix) * vel, -viewDir);
        float fade = smoothstep(3.0, 3.6, r) * smoothstep(14.0, 8.0, r);
        gl_FragColor = vec4(hot * T * T * (0.55 + 0.45 * n) * beam * beam * fade * 40.0, 1.0);
      }`,
      uniforms: { uTime: { value: 0 }, uRs: { value: rs }, uAxisX: { value: new THREE.Vector3(1, 0, 0) } },
      side: THREE.DoubleSide, transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    this.accretion = new THREE.Mesh(g, mat);
    this.accretion.rotation.x = Math.PI / 2 + 0.25;
    this.accretion.frustumCulled = false;
    this.group.add(this.accretion);
  }

  buildPulsar() {
    const len = 4e9;
    const g = new THREE.ConeGeometry(len * 0.06, len, 32, 1, true);
    g.translate(0, len / 2, 0);
    const mat = new THREE.ShaderMaterial({
      vertexShader: `${LOGV} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ vT = position.y / ${len.toExponential()}; vN = normalize(mat3(modelMatrix)*normal); vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; \n#include <logdepthbuf_vertex>\n}`,
      fragmentShader: `${LOGF} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ \n#include <logdepthbuf_fragment>\n float edge = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 2.0); float f = (1.0 - edge) * pow(1.0 - vT, 3.0); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * f * 0.6, 1.0); }`,
      side: THREE.DoubleSide, transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    this.beams = new THREE.Group();
    const b1 = new THREE.Mesh(g, mat); const b2 = new THREE.Mesh(g, mat); b2.rotation.z = Math.PI;
    b1.frustumCulled = b2.frustumCulled = false;
    this.beams.add(b1, b2);
    this.beams.rotation.z = 0.5;
    this.spinner = new THREE.Group();
    this.spinner.add(this.beams);
    this.group.add(this.spinner);
  }

  update(ctx, rel, dist, angR) {
    this.group.position.set(rel[0], rel[1], rel[2]);
    this.mesh.scale.setScalar(this.star.radius);
    this.mat.uniforms.uRadiance.value = this.radiance;
    this.mat.uniforms.uTime.value = ctx.time;
    this.coronaMat.uniforms.uRad.value = this.star.radius;
    this.coronaMat.uniforms.uIntensity.value = this.radiance * 0.02;
    this.coronaMat.uniforms.uTime.value = ctx.time;
    const tiny = angR < ctx.pixelAngle * 0.7;
    this.mesh.visible = this.star.starKind !== 'blackhole' && !tiny;
    this.corona.visible = this.mesh.visible && this.star.starKind !== 'neutron';
    if (this.accretion) this.accretion.material.uniforms.uTime.value = ctx.time;
    if (this.spinner) this.spinner.rotation.y = ctx.time * 2 * Math.PI * 1.3;
    return tiny;
  }

  dispose() {
    this.group.traverse((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
  }
}

// ---------------------------------------------------------------- rings
// A ring system like J1407b's: dozens of distinct rings with sharp edges and clear gaps,
// thinning toward the outside, and one broad gap swept clean by a moon.
function superRingTexture(rings) {
  const n = 4096;
  const data = new Uint8Array(n * 4);
  const r = new Rng(rings.seed);
  const span = rings.outer - rings.inner;
  const gx = rings.gapAt ? (rings.gapAt - rings.inner) / span : -1;
  const gw = rings.gapAt ? (rings.gapWidth || span * 0.05) / span / 2 : 0;
  // ring boundaries: 40-odd rings of varied width
  const edges = [0];
  while (edges[edges.length - 1] < 1) edges.push(edges[edges.length - 1] + r.logRange(0.006, 0.05));
  const levels = edges.map(() => (r.chance(0.18) ? r.range(0.02, 0.12) : r.range(0.35, 1)));
  const tints = edges.map(() => r.range(0.72, 1));
  let k = 0;
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1);
    while (k < edges.length - 2 && x > edges[k + 1]) k++;
    // soften each edge over a texel or two, so rings stay crisp without aliasing
    const e0 = edges[k], e1 = edges[k + 1];
    const soft = 1.5 / n;
    const inRing = Math.min(1, (x - e0) / soft, (e1 - x) / soft);
    const fine = 0.85 + 0.15 * Math.sin(x * 900 + k * 1.7) * Math.sin(x * 2300 + k);
    let d = levels[k] * (0.6 + 0.4 * Math.max(0, inRing)) * fine;
    // thinner and dustier toward the outer edge, a ragged inner edge
    d *= 1 - 0.55 * Math.pow(x, 1.6);
    d *= Math.min(1, x / 0.03);
    d *= Math.min(1, (1 - x) / 0.01);
    if (gw > 0) d *= Math.min(1, Math.max(0, (Math.abs(x - gx) - gw) / (gw * 0.15)));
    data[i * 4] = Math.round(Math.max(0, Math.min(1, d)) * 255);
    data[i * 4 + 1] = Math.round(tints[k] * 255);
    data[i * 4 + 2] = 0;
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, n, 1, THREE.RGBAFormat);
  // mipmapped: dozens of rings squeezed into a few hundred pixels would otherwise shimmer
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

// Rings many times wider than their planet get logarithmically spaced vertices, so the
// triangles near the planet stay small while the outer edge still reaches 90 million km.
function ringGeometry(inner, outer) {
  const ratio = outer / inner;
  if (ratio < 6) {
    const g = new THREE.RingGeometry(inner, outer, 256, 4);
    g.rotateX(-Math.PI / 2);
    return g;
  }
  const segs = 720;
  const nr = Math.min(200, Math.ceil(Math.log(ratio) * 28));
  const pos = new Float32Array((nr + 1) * (segs + 1) * 3);
  const idx = [];
  let o = 0;
  for (let j = 0; j <= nr; j++) {
    const rad = inner * Math.pow(ratio, j / nr);
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      pos[o++] = Math.cos(a) * rad; pos[o++] = 0; pos[o++] = -Math.sin(a) * rad;
    }
  }
  for (let j = 0; j < nr; j++) {
    for (let i = 0; i < segs; i++) {
      const a = j * (segs + 1) + i, b = a + segs + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

function ringTexture(rings) {
  if (rings.style === 'super') return superRingTexture(rings);
  const n = 1024;
  const data = new Uint8Array(n * 4);
  const r = new Rng(rings.seed);
  const gaps = [];
  for (let i = 0; i < r.int(1, 4); i++) gaps.push({ x: r.range(0.15, 0.85), w: r.range(0.004, 0.03) });
  const waves = [];
  for (let i = 0; i < 18; i++) waves.push({ f: r.logRange(6, 260), p: r.range(0, 6.28), a: r.range(0.1, 1) / (1 + i * 0.2) });
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1);
    let d = 0.55;
    for (const w of waves) d += 0.18 * w.a * Math.sin(x * w.f + w.p);
    d = Math.max(0, Math.min(1, d));
    for (const g of gaps) d *= Math.min(1, Math.abs(x - g.x) / g.w);
    d *= Math.min(1, x / 0.04) * Math.min(1, (1 - x) / 0.02);
    const tint = 0.85 + 0.15 * Math.sin(x * 9 + rings.seed);
    data[i * 4] = Math.round(d * 255);
    data[i * 4 + 1] = Math.round(tint * 255);
    data[i * 4 + 2] = 0;
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, n, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

const RING_GLSL = `
uniform sampler2D tRing; uniform float uInner; uniform float uOuter; uniform float uOpacity;
float ringDensity(float r) {
  if (r < uInner || r > uOuter) return 0.0;
  return texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).r * uOpacity;
}`;

const RING_VERT = `${LOGV}
varying vec3 vObj; varying vec3 vW;
void main() { vObj = position; vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`;
const RING_FRAG = `${LOGF}
uniform vec3 uColor; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uCamLocal; uniform float uR; uniform float uDusty;
varying vec3 vObj; varying vec3 vW;
${RING_GLSL}
void main() {
  #include <logdepthbuf_fragment>
  vec3 p = vObj / uR;
  float r = length(p.xz);
  float d = ringDensity(r);
  if (d <= 0.001) discard;
  vec2 tex = texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).rg;
  // planet shadow
  vec3 s = uSunLocal;
  float tc = -dot(p, s);
  float sh = 1.0;
  if (tc > 0.0) { float h2 = dot(p + s * tc, p + s * tc); sh = smoothstep(0.985, 1.015, sqrt(h2)); }
  vec3 v = normalize(uCamLocal - p);
  float sunSide = sign(s.y), viewSide = sign(v.y);
  float mu = abs(v.y);
  if (uDusty > 0.5) {
    // dusty rings: single scattering in a slab of optical depth tau. The sunlit face
    // reflects; seen from the dark side, thin rings glow with light filtering through,
    // strongly so when you look back toward the star.
    float tau = d * 2.2;
    float mu0 = max(abs(s.y), 0.03);
    float muv = max(mu, 0.03);
    float cosT = -dot(v, s);
    float g1 = 0.55;
    float P = 0.45 + 0.55 * (1.0 - g1 * g1) / pow(1.0 + g1 * g1 - 2.0 * g1 * cosT, 1.5);
    float Tv = exp(-tau / muv);
    float I;
    if (sunSide == viewSide) I = mu0 / (mu0 + muv) * (1.0 - exp(-tau * (1.0 / mu0 + 1.0 / muv)));
    else if (abs(mu0 - muv) < 1e-3) I = tau / mu0 * exp(-tau / mu0);
    else I = mu0 / (mu0 - muv) * (exp(-tau / mu0) - Tv);
    gl_FragColor = vec4(uColor * tex.g * uSunColor * (P * I * 0.6 * sh), Tv);
    return;
  }
  float alpha = 1.0 - exp(-d * 2.2 / max(mu, 0.03));
  float lit = sunSide == viewSide ? 1.0 : 0.35 * (1.0 - d);
  float fwd = pow(max(dot(-v, s), 0.0), 8.0) * 2.5 * (1.0 - d);
  vec3 col = uColor * tex.g * uSunColor * (abs(s.y) * 0.9 + 0.1) * lit * sh / 3.14159;
  col += uColor * uSunColor * fwd * sh * 0.3;
  gl_FragColor = vec4(col * alpha, 1.0 - alpha);
}`;

class Rings {
  constructor(body) {
    const rings = body.rings;
    this.body = body;
    this.tex = ringTexture(rings);
    const g = ringGeometry(rings.inner, rings.outer);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: RING_VERT, fragmentShader: RING_FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.SrcAlphaFactor,
      uniforms: {
        tRing: { value: this.tex }, uInner: { value: rings.inner / body.radius }, uOuter: { value: rings.outer / body.radius },
        uOpacity: { value: rings.opacity }, uColor: { value: new THREE.Vector3(...rings.color) }, uSunColor: { value: new THREE.Vector3() },
        uSunLocal: { value: new THREE.Vector3() }, uCamLocal: { value: new THREE.Vector3() }, uR: { value: body.radius },
        uDusty: { value: rings.style === 'super' ? 1 : 0 },
      },
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
  }
}

// ---------------------------------------------------------------- gas giants
const GAS_VERT = `${LOGV}
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main() {
  vObj = position; vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`;
const GAS_FRAG = `#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uP0; uniform vec3 uP1; uniform vec3 uP2; uniform vec3 uP3; uniform vec3 uP4;
uniform float uBands; uniform float uTurb; uniform float uStorms; uniform float uSeed; uniform float uTime; uniform float uGlow;
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uFillDir; uniform vec3 uFillColor;
uniform float uHasRings; uniform float uDist; uniform float uProj; uniform float uR; uniform vec4 uSpot;
uniform vec3 uCenterRel; uniform mat3 uToBody; uniform vec3 uCamFwd;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${NOISE}
${ECLIPSE}
${RING_GLSL}
${VIEW_RAY}
vec3 bandColor(float b) {
  // alternate light zones and darker belts, each with its own tint
  float i = floor(b);
  float t = fract(b);
  float h = hash13(vec3(i, uSeed, 1.0));
  float h2 = hash13(vec3(i + 1.0, uSeed, 1.0));
  vec3 c0 = mod(i, 2.0) < 0.5 ? mix(uP1, uP3, h) : mix(uP0, uP2, h);
  vec3 c1 = mod(i + 1.0, 2.0) < 0.5 ? mix(uP1, uP3, h2) : mix(uP0, uP2, h2);
  return mix(c0, c1, smoothstep(0.2, 0.8, t));
}
void main() {
  // The mesh is only a proxy; the cloud tops are found by intersecting the true sphere,
  // so they stay smooth and correct even a few kilometres above them.
  vec3 rd = viewRay();
  vec3 ro = -uCenterRel / uR;
  float tc = -dot(ro, rd);
  vec3 pc = ro + rd * tc;
  float h2 = dot(pc, pc);
  if (h2 > 1.0) discard;
  float th = tc - sqrt(1.0 - h2);
  if (th <= 0.0) discard;
  vec3 hitW = rd * th * uR;
  vec3 nW = normalize(hitW - uCenterRel);
  #if defined( USE_LOGDEPTHBUF )
    gl_FragDepth = log2(1.0 + th * uR * dot(rd, uCamFwd)) * logDepthBufFC * 0.5;
  #endif
  vec3 vNh = nW;
  vec3 vWh = hitW;
  vec3 p = uToBody * nW;
  float lat = p.y;
  // differential rotation: the bands slide past each other
  float shear = uTime * 1.2e-4 * sin(lat * uBands * 1.3 + uSeed);
  float c = cos(shear), s = sin(shear);
  vec3 q = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
  float detailFade = smoothstep(0.5, 4.0, uR / uDist * uProj / 400.0);
  vec3 w1 = vec3(fbm3(q * 3.0 + uSeed, 4), fbm3(q * 3.0 + uSeed + 11.0, 4), fbm3(q * 3.0 + uSeed + 23.0, 4));
  vec3 qs = vec3(q.x * 2.2, q.y * 14.0, q.z * 2.2) + w1 * uTurb * 1.4;
  float turb = fbm3(qs, 4 + int(detailFade * 3.0));
  float b = (lat + 1.0) * 0.5 * uBands + turb * 0.35 * uTurb + fbm3(vec3(0.0, lat * 6.0, uSeed), 3) * 0.6;
  vec3 col = bandColor(b);
  float fine = fbm3(vec3(q.x * 6.0, q.y * 60.0, q.z * 6.0) + w1 * 2.5 * uTurb, 5);
  col = mix(col, uP4, clamp(fine * 0.6 + 0.1, 0.0, 1.0) * 0.14);
  col *= 0.88 + 0.24 * fine;
  // storms
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec3 sc = normalize(vec3(cos(uSeed * 3.1 + fi * 2.4), sin(uSeed + fi * 1.7) * 0.55, sin(uSeed * 3.1 + fi * 2.4)));
    float d = length((q - sc) * vec3(0.6, 1.4, 0.6));
    float size = 0.06 + 0.12 * hash13(vec3(fi, uSeed, 7.0));
    float st = smoothstep(size, size * 0.3, d) * uStorms * step(hash13(vec3(fi, uSeed, 3.0)), 0.6 + 0.4 * uStorms);
    float swirl = fbm3(vec3(d * 30.0, atan(q.z - sc.z, q.x - sc.x) * 2.0, fi), 3);
    col = mix(col, mix(uP2, uP1, 0.5 + 0.5 * swirl) * vec3(1.08, 0.95, 0.85), st * 0.8);
  }
  // one great long-lived storm
  if (uSpot.w > 0.0) {
    vec3 sc = normalize(vec3(cos(uSpot.x) * cos(uSpot.y), sin(uSpot.y), sin(uSpot.x) * cos(uSpot.y)));
    vec3 dq = q - sc;
    float d = length(dq * vec3(0.55, 1.6, 0.55));
    float st = smoothstep(uSpot.z, uSpot.z * 0.55, d);
    float ring = smoothstep(uSpot.z * 1.25, uSpot.z, d) - st;
    float sw = fbm3(vec3(d * 40.0, atan(dq.z, dq.x) * 3.0 + d * 30.0, uSeed), 3);
    col = mix(col, uP3 * 1.02, ring * 0.5 * uSpot.w);
    col = mix(col, vec3(0.62, 0.3, 0.18) * (0.9 + 0.2 * sw), st * uSpot.w);
  }
  vec3 N = vNh;
  vec3 V = -rd;
  float NdL = dot(N, uSunDir);
  float mu = max(dot(N, V), 0.0);
  float diff = smoothstep(-0.08, 0.3, NdL) * (0.6 * max(NdL, 0.0) + 0.4 * smoothstep(-0.05, 0.4, NdL));
  float limb = 0.75 + 0.25 * pow(mu, 0.4);
  float sh = eclipse(vWh, uSunDir);
  if (uHasRings > 0.5 && abs(uSunLocal.y) > 1e-4) {
    float t = -p.y / uSunLocal.y;
    if (t > 0.0) {
      vec3 hit = p + uSunLocal * t;
      sh *= 1.0 - ringDensity(length(hit.xz)) * 0.9;
    }
  }
  vec3 E = uSunColor * diff * sh * limb + uFillColor * max(dot(N, uFillDir), 0.0);
  vec3 outc = col / 3.14159 * E;
  // heat from inside: the darker belts are deeper and hotter, and glow more
  float belt = 1.0 - clamp(dot(col, vec3(0.3, 0.55, 0.15)) * 2.0, 0.0, 1.0);
  outc += vec3(1.0, 0.3, 0.1) * uGlow * (0.45 + 0.4 * belt + 0.15 * turb) * pow(mu, 0.3) * 0.08;
  gl_FragColor = vec4(outc, 1.0);
}`;

// ---------------------------------------------------------------- atmosphere shell
const ATMO_VERT = `${LOGV}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`;
const ATMO_FRAG = `${LOGF}
uniform float uSolid;
varying vec3 vW;
${ATMOSPHERE}
${VIEW_RAY}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  vec3 ro = -aCenter / aR;
  vec2 g = aRaySphere(ro, rd, 1.0);
  float tMax = 1e9;
  if (g.x > 0.0) {
    if (uSolid > 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
    tMax = g.x;
  }
  vec4 sc = aScatter(ro, rd, tMax, 16);
  gl_FragColor = vec4(sc.rgb, sc.a);
}`;

class AtmosphereShell {
  constructor(body) {
    this.body = body;
    this.uniforms = { ...atmosphereUniforms(), ...CAMERA_UNIFORMS, uSolid: { value: body.solid ? 1 : 0 } };
    setAtmosphereParams(this.uniforms, body);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: ATMO_VERT, fragmentShader: ATMO_FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.SrcAlphaFactor, side: THREE.FrontSide,
    });
    const R = body.radius * this.uniforms.aRa.value;
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(R, 128, 64), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
  }
}


// ---------------------------------------------------------------- clouds
// A proxy sphere decides which pixels run; the cloud deck itself is found by an exact
// ray-sphere intersection, so it stays smooth even a few hundred metres below it.
const CLOUD_VERT = `${LOGV}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`;
const CLOUD_FRAG = `${LOGF}
uniform vec3 cCenter; uniform float cRadius; uniform float cGround; uniform mat3 cToBody;
uniform vec3 cSunDir; uniform vec3 cSunColor; uniform vec3 cColor; uniform float cCover; uniform float cOpacity;
uniform float cSeed; uniform float cTime; uniform float cVenus; uniform float cProj;
varying vec3 vW;
${NOISE}
${VIEW_RAY}
float density(vec3 p, float detail) {
  float lon = cTime * 2.0e-6;
  float c = cos(lon), s = sin(lon);
  p = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
  if (cVenus > 0.5) {
    vec3 w = vec3(fbm3(p * 2.0 + cSeed, 3), 0.0, fbm3(p * 2.0 + cSeed + 7.0, 3));
    float band = fbm3(vec3(p.x * 2.0, p.y * 9.0, p.z * 2.0) + w * 1.5, 5);
    return 0.82 + 0.18 * band;
  }
  vec3 q = p * 2.0;
  vec3 w = vec3(fbm3(q * 0.6 + cSeed, 4), fbm3(q * 0.6 + cSeed + 5.2, 4), fbm3(q * 0.6 + cSeed + 9.7, 4));
  vec3 qq = vec3(q.x, q.y * 1.5, q.z) + w * 1.15;
  float n = fbm3(qq * 1.6, 4 + int(detail * 3.0));
  // billowed small-scale structure so the deck breaks into cells, not paint
  float b = 1.0 - abs(fbm3(qq * 7.0 + 3.1, 3 + int(detail * 3.0)));
  n = n + (b - 0.55) * 0.35;
  float lat = abs(p.y);
  float belts = 0.12 * cos(lat * 9.0) + 0.05;
  float d = smoothstep(1.0 - cCover, 1.0 - cCover + 0.3, n * 0.5 + 0.5 + belts);
  return d;
}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  vec3 ro = -cCenter;
  float tc = -dot(ro, rd);
  vec3 pc = ro + rd * tc;
  float h2 = dot(pc, pc);
  float r2 = cRadius * cRadius;
  if (h2 > r2) discard;
  float dt = sqrt(r2 - h2);
  float camR = length(ro);
  float t = camR > cRadius ? tc - dt : tc + dt;
  if (t <= 0.0) discard;
  // hidden behind the ground
  float g2 = cGround * cGround;
  if (h2 < g2) { float tg = tc - sqrt(g2 - h2); if (tg > 0.0 && tg < t) discard; }
  vec3 hit = ro + rd * t;
  vec3 n = normalize(hit);
  vec3 pb = cToBody * n;
  float dist = t;
  float detail = clamp(cRadius / dist * cProj / 900.0, 0.0, 1.0);
  float d = density(pb, detail) * cOpacity;
  // thin out at the very limb so the deck does not draw a hard ring
  d *= smoothstep(0.0, 0.08, abs(dot(n, -rd)));
  if (d < 0.003) discard;
  float NdL = dot(n, cSunDir);
  float day = smoothstep(-0.12, 0.2, NdL);
  float below = camR < cRadius ? 1.0 : 0.0;
  float light = (0.25 + 0.75 * max(NdL, 0.0)) * day;
  float self = mix(1.0, 0.35, below * d);
  vec3 col = cColor * cSunColor * light * self / 3.14159;
  gl_FragColor = vec4(col * d, d);
}`;

class CloudLayer {
  constructor(body) {
    this.body = body;
    const venus = body.type === 'venus';
    this.alt = venus ? 62000 : 9000;
    const Rc = body.radius + this.alt;
    this.uniforms = {
      cCenter: { value: new THREE.Vector3() }, cRadius: { value: Rc }, cGround: { value: body.radius + (body.terrain?.sea === null ? 0 : 0) },
      cToBody: { value: new THREE.Matrix3() }, cSunDir: { value: new THREE.Vector3() }, cSunColor: { value: new THREE.Vector3() },
      cColor: { value: new THREE.Vector3(...(venus ? [0.92, 0.84, 0.62] : [0.95, 0.96, 0.98])) },
      cCover: { value: venus ? 1 : 0.42 + ((body.terrain?.seed || 0) % 100) / 100 * 0.2 },
      cOpacity: { value: venus ? 1 : 0.92 }, cSeed: { value: ((body.terrain?.seed || 7) % 997) / 31 }, cTime: { value: 0 },
      cVenus: { value: venus ? 1 : 0 }, cProj: { value: 800 },
      ...CAMERA_UNIFORMS,
    };
    this.mat = new THREE.ShaderMaterial({
      vertexShader: CLOUD_VERT, fragmentShader: CLOUD_FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.FrontSide,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(Rc * 1.003, 96, 48), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 0.5;
  }
  update(ctx, rel, q, light, dist) {
    const u = this.uniforms;
    u.cCenter.value.set(rel[0], rel[1], rel[2]);
    u.cSunDir.value.set(light.sunDir[0], light.sunDir[1], light.sunDir[2]);
    u.cSunColor.value.set(light.sun[0], light.sun[1], light.sun[2]);
    u.cTime.value = ctx.time;
    u.cProj.value = ctx.projScale;
    const m = new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(q[0], q[1], q[2], q[3])).invert();
    u.cToBody.value.setFromMatrix4(m);
    const inside = dist < u.cRadius.value * 1.002;
    this.mat.side = inside ? THREE.BackSide : THREE.FrontSide;
  }
}


// ---------------------------------------------------------------- gas giant interior
// Below the cloud tops there is nothing to see but the gas itself: daylight diffusing down
// through the decks and dying with depth, lightning in the water clouds, and far down,
// the gas beginning to glow with its own heat.
const INTERIOR_FRAG = `${LOGF}
uniform vec3 iUp; uniform vec3 iSunDir; uniform vec3 iSunColor; uniform vec3 iHaze;
uniform float iLight; uniform float iTauUp; uniform float iFlash; uniform vec3 iFlashDir; uniform float iThermal;
uniform vec3 iLampDir; uniform float iLamp;
varying vec3 vW;
${VIEW_RAY}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  float mu = dot(rd, iUp);
  float alpha = mu > 0.0 ? 1.0 - exp(-iTauUp / max(mu, 0.03)) : 1.0;
  float glow = iLight * (0.2 + 0.8 * smoothstep(-0.6, 1.0, mu));
  vec3 col = iHaze * iSunColor * glow / 3.14159;
  col += iSunColor * pow(max(dot(rd, iSunDir), 0.0), 6.0) * iLight * 0.12;
  col += iHaze * iFlash * (0.25 + 0.75 * pow(max(dot(rd, iFlashDir), 0.0), 3.0));
  col += vec3(1.0, 0.33, 0.1) * iThermal * (0.55 + 0.45 * (1.0 - mu));
  // the floodlight lights up the gas in front of the ship
  float beam = max(dot(rd, iLampDir), 0.0);
  col += iHaze * iLamp * (pow(beam, 24.0) * 1.2 + pow(beam, 4.0) * 0.15);
  gl_FragColor = vec4(col * alpha, alpha);
}`;

class GasInterior {
  constructor(body) {
    this.body = body;
    this.uniforms = {
      iUp: { value: new THREE.Vector3(0, 1, 0) }, iSunDir: { value: new THREE.Vector3() }, iSunColor: { value: new THREE.Vector3() },
      iHaze: { value: new THREE.Vector3(0.8, 0.7, 0.6) }, iLight: { value: 1 }, iTauUp: { value: 0 }, iFlash: { value: 0 },
      iFlashDir: { value: new THREE.Vector3(0, -1, 0) }, iThermal: { value: 0 },
      iLampDir: { value: new THREE.Vector3(0, 0, -1) }, iLamp: { value: 0 },
      ...CAMERA_UNIFORMS,
    };
    this.mat = new THREE.ShaderMaterial({
      vertexShader: ATMO_VERT, fragmentShader: INTERIOR_FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.BackSide,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(body.radius * 1.0004, 96, 48), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1.5;
    this.mesh.visible = false;
  }
}

// ---------------------------------------------------------------- black hole
// Light paths are integrated through Schwarzschild spacetime per pixel, in units of the
// Schwarzschild radius: x'' = -3/2 h^2 x / r^5, with h = |x cross x'| conserved. Rays that
// cross the disk pick up its light (Doppler-beamed and gravitationally redshifted), rays
// that fall below r = 1 are lost, and the rest sample the sky in the direction they leave.
const BH_FRAG = `${LOGF}
uniform vec3 bCenter;
uniform mat3 bToDisk;
uniform float bRb;
uniform float bIn;
uniform float bOut;
uniform float bEmit;
uniform float bTime;
uniform float bSkyI;
uniform float bInside;
uniform samplerCube tSky;
varying vec3 vW;
${VIEW_RAY}
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1.0, 0.0)), f.x), mix(hh(i + vec2(0.0, 1.0)), hh(i + vec2(1.0, 1.0)), f.x), f.y); }
vec3 ramp(float t) {
  vec3 c0 = vec3(0.35, 0.05, 0.01), c1 = vec3(1.0, 0.28, 0.06), c2 = vec3(1.0, 0.62, 0.28), c3 = vec3(1.0, 0.93, 0.82), c4 = vec3(0.72, 0.84, 1.0);
  if (t < 0.5) return mix(c0, c1, t / 0.5);
  if (t < 1.0) return mix(c1, c2, (t - 0.5) / 0.5);
  if (t < 1.6) return mix(c2, c3, (t - 1.0) / 0.6);
  return mix(c3, c4, clamp((t - 1.6) / 1.0, 0.0, 1.0));
}
vec3 sky(vec3 dDisk) { return textureLod(tSky, transpose(bToDisk) * dDisk, 0.0).rgb * bSkyI; }
// cheap point stars for the squeezed sky seen from inside (the cube holds only the glow)
vec3 pointStars(vec3 d) {
  vec3 p = d * 160.0;
  vec3 i = floor(p);
  vec3 f = fract(p) - 0.5;
  float h = fract(sin(dot(i, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  float s = step(0.975, h) * exp(-dot(f, f) * 40.0) * (h - 0.975) * 40.0;
  return s * mix(vec3(1.0, 0.82, 0.66), vec3(0.72, 0.84, 1.0), fract(h * 91.7));
}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = bToDisk * viewRay();
  vec3 ro = bToDisk * (-bCenter);
  if (bInside > 0.0) {
    // Inside the horizon every path leads inward. Behind you, the outside universe
    // shrinks to a bright, blueshifted circle as the singularity approaches.
    vec3 outw = normalize(ro);
    float a = acos(clamp(dot(rd, outw), -1.0, 1.0));
    float halfA = mix(1.3, 0.015, bInside);
    float m = smoothstep(halfA, halfA * 0.92, a);
    vec3 perp = rd - outw * dot(rd, outw);
    float pl = length(perp);
    float sa = min(a / halfA, 1.0) * 1.5707963;
    vec3 sd = pl > 1e-5 ? normalize(outw * cos(sa) + perp / pl * sin(sa)) : outw;
    vec3 col = (sky(sd) * (3.0 + 40.0 * bInside * bInside) + pointStars(sd) * bEmit * (0.25 + bInside)) * m;
    col *= mix(vec3(1.0), vec3(0.75, 0.9, 1.25), bInside);
    col += vec3(1.0, 0.4, 0.15) * bEmit * 0.6 * exp(-pow((a - halfA) / (halfA * 0.08 + 0.004), 2.0));
    gl_FragColor = vec4(min(col, vec3(6e4)), 1.0);
    return;
  }
  vec3 pos = ro;
  float camR = length(ro);
  if (camR > bRb) {
    float tc = -dot(ro, rd);
    vec3 pc = ro + rd * tc;
    float h2c = dot(pc, pc);
    if (h2c > bRb * bRb) { gl_FragColor = vec4(sky(rd), 1.0); return; }
    pos = ro + rd * max(tc - sqrt(bRb * bRb - h2c), 0.0);
  }
  vec3 vel = rd;
  vec3 hv = cross(pos, vel);
  float h2 = dot(hv, hv);
  vec3 col = vec3(0.0);
  float trans = 1.0;
  bool lost = false;
  for (int i = 0; i < 260; i++) {
    float r2 = dot(pos, pos);
    float r = sqrt(r2);
    if (r < 1.0) { lost = true; break; }
    if (r > bRb * 1.02 && dot(pos, vel) > 0.0) break;
    float dt = clamp(0.07 * (r - 0.9), 0.012, 2.5);
    vec3 acc = -1.5 * h2 * pos / (r2 * r2 * r);
    vec3 pm = pos + vel * (0.5 * dt);
    vec3 vm = vel + acc * (0.5 * dt);
    float rm2 = dot(pm, pm);
    vec3 accm = -1.5 * h2 * pm / (rm2 * rm2 * sqrt(rm2));
    vec3 np = pos + vm * dt;
    vec3 nv = vel + accm * dt;
    if (pos.y * np.y < 0.0) {
      float f = pos.y / (pos.y - np.y);
      vec3 hp = mix(pos, np, f);
      float rr = length(hp.xz);
      if (rr > bIn && rr < bOut) {
        float x = bIn / rr;
        float prof = pow(x, 0.75) * pow(max(1.0 - sqrt(x), 0.0), 0.25) * 2.4;
        float beta = min(sqrt(0.5 / max(rr - 1.0, 0.2)), 0.75);
        vec3 vdir = normalize(vec3(-hp.z, 0.0, hp.x));
        vec3 toObs = -normalize(vm);
        float gam = inversesqrt(1.0 - beta * beta);
        float D = 1.0 / (gam * (1.0 - beta * dot(vdir, toObs)));
        float g = D * sqrt(max(1.0 - 1.0 / rr, 0.02));
        float phi = atan(hp.z, hp.x) + bTime * 1.2 * pow(rr, -1.5);
        vec2 q = vec2(cos(phi), sin(phi)) * rr;
        float n = 0.55 + 0.45 * vn(q * 1.1 + 3.0) * (0.6 + 0.4 * vn(q * 3.7 - 7.0));
        float lanes = 0.75 + 0.25 * sin(rr * 5.0 + vn(q * 0.6) * 4.0);
        float a = 0.92 * smoothstep(bIn, bIn * 1.12, rr) * smoothstep(bOut, bOut * 0.65, rr) * (0.55 + 0.45 * n);
        vec3 em = ramp(prof * g) * pow(g, 3.0) * prof * prof * n * lanes * bEmit;
        col += trans * a * em;
        trans *= 1.0 - a;
      }
    }
    pos = np; vel = nv;
    if (trans < 0.01) break;
  }
  if (!lost) col += trans * sky(normalize(vel));
  // stay inside half-float range: an Inf here becomes a black hole in the bloom
  gl_FragColor = vec4(min(col, vec3(6e4)), 1.0);
}`;

export class BlackHoleRenderer {
  constructor(star, skyTexture) {
    this.star = star;
    this.Rs = star.radius;
    this.Rb = 60;
    const n = new THREE.Vector3(0.28, 1, 0.42).normalize();
    // disk frame: y is the disk normal
    const x = new THREE.Vector3(1, 0, 0).sub(n.clone().multiplyScalar(n.x)).normalize();
    const z = new THREE.Vector3().crossVectors(x, n);
    const toDisk = new THREE.Matrix3().set(x.x, x.y, x.z, n.x, n.y, n.z, z.x, z.y, z.z);
    this.diskNormal = [n.x, n.y, n.z];
    this.uniforms = {
      bCenter: { value: new THREE.Vector3() }, bToDisk: { value: toDisk }, bRb: { value: this.Rb },
      bIn: { value: 3.0 }, bOut: { value: 22.0 }, bEmit: { value: 1 }, bTime: { value: 0 }, bSkyI: { value: 1 },
      bInside: { value: 0 }, tSky: { value: skyTexture },
      ...CAMERA_UNIFORMS,
    };
    this.mat = new THREE.ShaderMaterial({ vertexShader: ATMO_VERT, fragmentShader: BH_FRAG, uniforms: this.uniforms, side: THREE.FrontSide });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(this.Rs * this.Rb, 96, 48), this.mat);
    this.mesh.frustumCulled = false;
    this.group = new THREE.Group();
    this.group.add(this.mesh);
  }

  update(ctx, rel, dist, expo, inside) {
    this.group.position.set(rel[0], rel[1], rel[2]);
    const u = this.uniforms;
    u.bCenter.value.set(rel[0] / this.Rs, rel[1] / this.Rs, rel[2] / this.Rs);
    u.bEmit.value = 7 / Math.max(expo, 1e-9);
    u.bTime.value = ctx.time * Math.min(1, 3e8 / this.Rs);
    u.bInside.value = inside || 0;
    // beyond the horizon the outside sky is all there is to look at: meter for it
    u.bSkyI.value = inside > 0 ? 2 / Math.max(expo, 1e-9) : 1;
    const within = dist < this.Rs * this.Rb * 1.001 || inside > 0;
    this.mat.side = within ? THREE.BackSide : THREE.FrontSide;
    const tiny = Math.atan((this.Rs * this.Rb) / dist) < ctx.pixelAngle * 3 && !inside;
    this.mesh.visible = !tiny;
    return tiny;
  }

  dispose() { this.mesh.geometry.dispose(); this.mat.dispose(); }
}

// ---------------------------------------------------------------- glints
const GLINT_VERT = `${LOGV}
attribute vec3 aCol;
uniform float uPx; uniform float uPixOmega;
varying vec3 vCol;
void main() {
  vec4 mv = viewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = 3.5;
  gl_PointSize = size * uPx;
  vCol = aCol / (uPixOmega * 0.172 * size * size);
  #include <logdepthbuf_vertex>
}`;
const GLINT_FRAG = `${LOGF}
varying vec3 vCol;
void main() {
  #include <logdepthbuf_fragment>
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  gl_FragColor = vec4(vCol * exp(-r2 * 4.5), 1.0);
}`;

export class Glints {
  constructor(max = 96) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aCol', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: GLINT_VERT, fragmentShader: GLINT_FRAG, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
      uniforms: { uPx: { value: 1 }, uPixOmega: { value: 1e-6 } },
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    this.n = 0;
  }
  begin() { this.n = 0; }
  add(rel, dist, rgbFlux) {
    if (this.n >= this.max) return;
    // keep the point at a sane distance; only its direction matters
    const d = Math.min(dist, 1e12) / dist;
    const i = this.n++;
    this.pos[i * 3] = rel[0] * d; this.pos[i * 3 + 1] = rel[1] * d; this.pos[i * 3 + 2] = rel[2] * d;
    this.col[i * 3] = rgbFlux[0]; this.col[i * 3 + 1] = rgbFlux[1]; this.col[i * 3 + 2] = rgbFlux[2];
  }
  end() {
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.aCol.needsUpdate = true;
    g.setDrawRange(0, this.n);
  }
}

// ---------------------------------------------------------------- planet
const ALBEDO = { barren: 0.12, ice: 0.6, desert: 0.25, lava: 0.08, venus: 0.75, titan: 0.22, terran: 0.3, gas: 0.5, icegiant: 0.5 };

export class PlanetRenderer {
  constructor(body, sys) {
    this.body = body;
    this.sys = sys;
    this.group = new THREE.Group();     // body-fixed frame
    this.inertial = new THREE.Group();  // translates with the body but does not spin (rings ride the tilt)
    this.albedo = ALBEDO[body.type] ?? 0.3;
    if (body.solid) {
      this.material = makeTerrainMaterial(body);
      setAtmosphereParams(this.material.uniforms, body);
      this.terrain = new TerrainQuadtree({ ...body.terrain, palette: undefined, radius: body.radius }, this.material, this.group);
      this.detailOrigin = null;
    } else {
      const gp = body.gas.palette;
      const p = (i) => new THREE.Vector3(...gp[i % gp.length]);
      this.material = new THREE.ShaderMaterial({
        vertexShader: GAS_VERT, fragmentShader: GAS_FRAG,
        uniforms: {
          uP0: { value: p(0) }, uP1: { value: p(1) }, uP2: { value: p(2) }, uP3: { value: p(3) }, uP4: { value: p(4) },
          uBands: { value: body.gas.bands }, uTurb: { value: body.gas.turbulence }, uStorms: { value: body.gas.storms },
          uSeed: { value: (body.gas.seed % 1000) / 37 }, uTime: { value: 0 }, uGlow: { value: body.gas.glow },
          uSunDir: { value: new THREE.Vector3() }, uSunColor: { value: new THREE.Vector3() }, uSunLocal: { value: new THREE.Vector3() },
          uFillDir: { value: new THREE.Vector3() }, uFillColor: { value: new THREE.Vector3() },
          uHasRings: { value: body.rings ? 1 : 0 }, uDist: { value: 1 }, uProj: { value: 800 }, uR: { value: body.radius },
          uOcc: { value: [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] }, uOccCount: { value: 0 }, uSunAngR: { value: 0.005 },
          tRing: { value: null }, uInner: { value: 1 }, uOuter: { value: 1 }, uOpacity: { value: 0 },
          uSpot: { value: new THREE.Vector4(body.gas.seed % 6.28, -0.38, 0.11, body.type === 'gas' && body.gas.storms > 0.45 && body.tempK < 200 ? 1 : 0) },
          uCenterRel: { value: new THREE.Vector3() }, uToBody: { value: new THREE.Matrix3() }, uCamFwd: { value: new THREE.Vector3(0, 0, -1) },
          ...CAMERA_UNIFORMS,
        },
      });
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(body.radius * 1.02, 160, 96), this.material);
      this.sphere.frustumCulled = false;
      this.group.add(this.sphere);
      this.interior = new GasInterior(body);
      this.inertial.add(this.interior.mesh);
    }
    if (body.atmosphere) {
      this.atmo = new AtmosphereShell(body);
      this.inertial.add(this.atmo.mesh);
    }
    if (body.solid && (body.type === 'venus' || body.type === 'terran')) {
      this.clouds = new CloudLayer(body);
      this.inertial.add(this.clouds.mesh);
    }
    if (body.rings) {
      this.rings = new Rings(body);
      this.ringFrame = new THREE.Group();
      this.ringFrame.add(this.rings.mesh);
      this.inertial.add(this.ringFrame);
      if (!body.solid) {
        const u = this.material.uniforms;
        u.tRing.value = this.rings.tex;
        u.uInner.value = this.rings.mat.uniforms.uInner.value;
        u.uOuter.value = this.rings.mat.uniforms.uOuter.value;
        u.uOpacity.value = body.rings.opacity;
      }
    }
  }

  update(ctx, rel, q, dist, angR, light) {
    const b = this.body;
    const tiny = angR < ctx.pixelAngle * 0.8;
    this.group.visible = !tiny;
    this.inertial.visible = !tiny || (this.rings && angR * (b.rings.outer / b.radius) > ctx.pixelAngle);
    this.group.position.set(rel[0], rel[1], rel[2]);
    this.group.quaternion.set(q[0], q[1], q[2], q[3]);
    this.inertial.position.copy(this.group.position);
    if (this.ringFrame) {
      // rings follow the equator (the spin tilt), not the daily rotation
      const t = b.spin.locked ? b.orbit.q : b.spin.tilt;
      this.ringFrame.quaternion.set(t[0], t[1], t[2], t[3]);
    }
    if (this.rings && this.inertial.visible) {
      // rings far wider than their planet stay lit even when the planet is under a pixel
      const ru = this.rings.mat.uniforms;
      const t = b.spin.locked ? b.orbit.q : b.spin.tilt;
      const tc = qConj(t);
      const sl = qRotate(tc, light.sunDir);
      const cl = qRotate(tc, [-rel[0] / b.radius, -rel[1] / b.radius, -rel[2] / b.radius]);
      ru.uSunLocal.value.set(sl[0], sl[1], sl[2]);
      ru.uCamLocal.value.set(cl[0], cl[1], cl[2]);
      ru.uSunColor.value.set(light.sun[0], light.sun[1], light.sun[2]);
    }
    if (tiny) return true;
    const sunDir = light.sunDir;
    const u = this.material.uniforms;
    u.uSunDir.value.set(sunDir[0], sunDir[1], sunDir[2]);
    u.uSunColor.value.set(light.sun[0], light.sun[1], light.sun[2]);
    u.uFillDir.value.set(light.fillDir[0], light.fillDir[1], light.fillDir[2]);
    u.uFillColor.value.set(light.fill[0], light.fill[1], light.fill[2]);
    u.uSunAngR.value = light.sunAngR;
    u.uOccCount.value = light.occ.length;
    for (let i = 0; i < 4; i++) {
      const o = light.occ[i];
      if (o) u.uOcc.value[i].set(o[0], o[1], o[2], o[3]);
    }
    if (b.solid) {
      u.uTime.value = ctx.time;
      u.uProj.value = ctx.projScale;
      u.aCenter.value.set(rel[0], rel[1], rel[2]);
      u.aSunDir.value.copy(u.uSunDir.value);
      u.aSunColor.value.copy(u.uSunColor.value);
      const sp = ctx.spot;
      u.uSpotPos.value.set(sp.pos[0], sp.pos[1], sp.pos[2]);
      u.uSpotDir.value.set(sp.dir[0], sp.dir[1], sp.dir[2]);
      u.uSpotColor.value.setScalar(sp.on ? sp.intensity : 0);
      u.uSpotCos.value = sp.cos;
      // camera in body-fixed coordinates, in double precision
      const qc = qConj(q);
      const cam = qRotate(qc, [-rel[0], -rel[1], -rel[2]]);
      if (!this.detailOrigin || Math.hypot(cam[0] - this.detailOrigin[0], cam[1] - this.detailOrigin[1], cam[2] - this.detailOrigin[2]) > 20000) {
        this.detailOrigin = cam.slice();
      }
      const origin = this.detailOrigin;
      const mat = this.material;
      const tmp = new THREE.Vector3();
      this.terrain.update(cam, ctx.frustum, (x, y, z) => qRotate(q, [x, y, z]), ctx.projScale);
      for (const m of this.terrain.visibleList) {
        if (!m.onBeforeRender.__set) {
          const c = m.position;
          m.onBeforeRender = () => {
            const o = this.detailOrigin;
            mat.uniforms.uPatchOffset.value.set(c.x - o[0], c.y - o[1], c.z - o[2]);
            mat.uniformsNeedUpdate = true;
          };
          m.onBeforeRender.__set = true;
        }
      }
      void tmp; void origin;
    } else {
      const inner = this.interior;
      const depth = b.radius - dist;
      inner.mesh.visible = depth > 0;
      if (depth > 0 && ctx.air) {
        const iu = inner.uniforms;
        const up = [-rel[0] / dist, -rel[1] / dist, -rel[2] / dist];
        iu.iUp.value.set(up[0], up[1], up[2]);
        iu.iSunDir.value.set(sunDir[0], sunDir[1], sunDir[2]);
        iu.iSunColor.value.set(light.sun[0], light.sun[1], light.sun[2]);
        iu.iLight.value = ctx.air.light;
        iu.iTauUp.value = 4 * Math.max(ctx.air.P / 1e5 - 1, 0) + 0.02;
        iu.iFlash.value = ctx.lightning || 0;
        if (ctx.lightningDir) iu.iFlashDir.value.set(...ctx.lightningDir);
        const T = ctx.air.T;
        iu.iThermal.value = Math.max(0, Math.min(1, (T - 900) / 1600)) * 0.5 / Math.max(ctx.exposure, 1e-9);
        iu.iLampDir.value.set(ctx.spot.dir[0], ctx.spot.dir[1], ctx.spot.dir[2]);
        iu.iLamp.value = ctx.spot.on ? 0.25 / Math.max(ctx.exposure, 1e-9) : 0;
        // tint of the cloud deck at this latitude
        const lat = qRotate(qConj(b.spin.locked ? b.orbit.q : b.spin.tilt), up)[1];
        const gp = b.gas.palette;
        const band = 0.5 + 0.5 * Math.sin(lat * b.gas.bands * Math.PI * 0.5);
        const deep = Math.min(1, depth / 60000);
        const hz = gp[1].map((c, k) => (c * band + gp[0][k] * (1 - band)) * (1 - deep * 0.5) + gp[2 % gp.length][k] * deep * 0.5);
        iu.iHaze.value.set(hz[0], hz[1], hz[2]);
      }
      u.uTime.value = ctx.time;
      u.uDist.value = dist;
      u.uProj.value = ctx.projScale;
      u.uCenterRel.value.set(rel[0], rel[1], rel[2]);
      u.uToBody.value.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion(q[0], q[1], q[2], q[3])).invert());
      if (ctx.camFwd) u.uCamFwd.value.copy(ctx.camFwd);
      this.material.side = dist < b.radius * 1.021 ? THREE.BackSide : THREE.FrontSide;
      this.sphere.visible = dist > b.radius;
      const ls = qRotate(qConj(b.spin.locked ? b.orbit.q : b.spin.tilt), sunDir);
      u.uSunLocal.value.set(ls[0], ls[1], ls[2]);
    }
    if (this.clouds) this.clouds.update(ctx, rel, q, light, dist);
    if (this.atmo) {
      const au = this.atmo.uniforms;
      au.aCenter.value.set(rel[0], rel[1], rel[2]);
      au.aSunDir.value.set(sunDir[0], sunDir[1], sunDir[2]);
      au.aSunColor.value.set(light.sun[0], light.sun[1], light.sun[2]);
      const inside = dist < b.radius * au.aRa.value * 1.0005;
      this.atmo.mat.side = inside ? THREE.BackSide : THREE.FrontSide;
    }
    return false;
  }

  heightAt(localDir) {
    if (!this.body.solid) return 0;
    return this.terrain.heightAt(localDir[0], localDir[1], localDir[2]);
  }

  get ready() { return this.body.solid ? this.terrain.ready : true; }

  dispose() {
    if (this.terrain) this.terrain.dispose();
    this.group.traverse((o) => { if (o.isMesh && o.geometry && !this.terrain) o.geometry.dispose(); });
    this.material.dispose();
    if (this.atmo) { this.atmo.mesh.geometry.dispose(); this.atmo.mat.dispose(); }
    if (this.clouds) { this.clouds.mesh.geometry.dispose(); this.clouds.mat.dispose(); }
    if (this.interior) { this.interior.mesh.geometry.dispose(); this.interior.mat.dispose(); }
    if (this.rings) { this.rings.mesh.geometry.dispose(); this.rings.mat.dispose(); this.rings.tex.dispose(); }
  }
}

// ---------------------------------------------------------------- the whole system
export class SystemView {
  constructor(engine, sys) {
    this.engine = engine;
    this.sys = sys;
    this.root = new THREE.Group();
    this.star = new StarRenderer(sys.star);
    this.root.add(this.star.group);
    if (sys.star.starKind === 'blackhole') {
      this.blackHole = new BlackHoleRenderer(sys.star, engine.sky.cubeTarget.texture);
      this.root.add(this.blackHole.group);
    }
    this.planets = sys.bodies.map((b) => {
      const pr = new PlanetRenderer(b, sys);
      this.root.add(pr.group, pr.inertial);
      return pr;
    });
    this.glints = new Glints();
    this.root.add(this.glints.points);
    engine.scene.add(this.root);
    this.positions = sys.bodies.map(() => [0, 0, 0]);
    this.orient = sys.bodies.map(() => [0, 0, 0, 1]);
    this.starColor = lumNorm(sys.star.color);
  }

  get ready() { return this.planets.every((p) => p.ready); }

  // Irradiance (star colour, luminance-normalised) at a star-centred position.
  irradianceAt(p) {
    let d2 = p[0] * p[0] + p[1] * p[1] + p[2] * p[2];
    // an accretion disk stops looking like a point source once you are among it
    if (this.blackHole) d2 = Math.max(d2, (this.sys.star.radius * 20) ** 2);
    return (Math.max(this.sys.star.lum, 0) * AU * AU) / Math.max(d2, 1);
  }

  computeKinematics(t) {
    for (let i = 0; i < this.sys.bodies.length; i++) {
      bodyPosition(this.sys, i, t, this.positions[i]);
      this.orient[i] = bodyOrientation(this.sys, i, t);
    }
  }

  update(ctx) {
    const sys = this.sys;
    const cam = ctx.camWorld;
    const t = ctx.time;
    this.computeKinematics(t);
    this.glints.begin();
    // star
    const srel = [-cam[0], -cam[1], -cam[2]];
    const sd = Math.hypot(srel[0], srel[1], srel[2]);
    const sAng = Math.atan(sys.star.radius / sd);
    const starTiny = this.star.update(ctx, srel, sd, sAng);
    if (starTiny && sys.star.starKind !== 'blackhole') {
      const E = this.irradianceAt(cam);
      this.glints.add(srel, sd, this.starColor.map((c) => c * E));
    }
    if (this.blackHole) {
      const bhTiny = this.blackHole.update(ctx, srel, sd, ctx.exposure || 1, ctx.inside || 0);
      if (bhTiny) {
        const E = this.irradianceAt(cam);
        this.glints.add(srel, sd, this.starColor.map((c) => c * E));
      }
    }
    const sunAngRAt = (p) => Math.atan(sys.star.radius / Math.max(Math.hypot(p[0], p[1], p[2]), 1));
    for (let i = 0; i < sys.bodies.length; i++) {
      const b = sys.bodies[i];
      const bp = this.positions[i];
      const rel = [bp[0] - cam[0], bp[1] - cam[1], bp[2] - cam[2]];
      const dist = Math.hypot(rel[0], rel[1], rel[2]);
      const angR = Math.asin(Math.min(1, b.radius / dist));
      const bd = Math.hypot(bp[0], bp[1], bp[2]);
      const sunDir = [-bp[0] / bd, -bp[1] / bd, -bp[2] / bd];
      const E = this.irradianceAt(bp);
      const sun = this.starColor.map((c) => c * E);
      // light reflected from the parent (giantshine) for moons
      let fill = [0, 0, 0], fillDir = [0, 1, 0];
      if (b.parent >= 0) {
        const pp = this.positions[b.parent];
        const pb = sys.bodies[b.parent];
        const dx = pp[0] - bp[0], dy = pp[1] - bp[1], dz = pp[2] - bp[2];
        const dd = Math.hypot(dx, dy, dz);
        fillDir = [dx / dd, dy / dd, dz / dd];
        const phase = 0.5 * (1 - (fillDir[0] * sunDir[0] + fillDir[1] * sunDir[1] + fillDir[2] * sunDir[2]));
        const k = (ALBEDO[pb.type] ?? 0.3) * (pb.radius / dd) ** 2 * phase * 0.7;
        fill = sun.map((c) => c * k);
      }
      // eclipse casters: parent and siblings/children
      const occ = [];
      const cands = [];
      if (b.parent >= 0) cands.push(b.parent);
      for (const c of b.children) cands.push(c);
      if (b.parent >= 0) for (const s of sys.bodies[b.parent].children) if (s !== i) cands.push(s);
      for (const c of cands.slice(0, 4)) {
        const cp = this.positions[c];
        occ.push([cp[0] - cam[0], cp[1] - cam[1], cp[2] - cam[2], sys.bodies[c].radius]);
      }
      const light = { sunDir, sun, fill, fillDir, occ, sunAngR: sunAngRAt(bp) };
      const tiny = this.planets[i].update(ctx, rel, this.orient[i], dist, angR, light);
      if (tiny) {
        const cosA = -(rel[0] * sunDir[0] + rel[1] * sunDir[1] + rel[2] * sunDir[2]) / dist;
        const phase = 0.5 * (1 + cosA);
        const k = this.planets[i].albedo * (b.radius / dist) ** 2 * phase * 0.67;
        if (k * E > 1e-14) this.glints.add(rel, dist, sun.map((c) => c * k));
      }
    }
    if (ctx.extraGlints) for (const g of ctx.extraGlints) this.glints.add(g.rel, g.dist, g.flux);
    this.glints.end();
    this.glints.mat.uniforms.uPx.value = ctx.pxRatio;
    this.glints.mat.uniforms.uPixOmega.value = ctx.pixelAngle * ctx.pixelAngle;
  }

  dispose() {
    this.engine.scene.remove(this.root);
    this.star.dispose();
    if (this.blackHole) this.blackHole.dispose();
    for (const p of this.planets) p.dispose();
    this.glints.points.geometry.dispose();
  }
}
