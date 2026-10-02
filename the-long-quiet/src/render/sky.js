// The sky: a cubemap of the Milky Way raymarched through the same density model the
// galaxy uses, from wherever the ship currently is, plus every star within 100 ly drawn
// as a point. Both respond to relativistic aberration and Doppler shift during jumps,
// and the sky is lensed around black holes.

import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { GALAXY } from '../world/galaxy.js';

const GALAXY_GLSL = /* glsl */ `
const float R0 = ${GALAXY.R0.toFixed(1)};
const float RD = ${GALAXY.Rd.toFixed(1)};
const float H0 = ${GALAXY.h0.toFixed(1)};
const float PITCHK = ${(1 / Math.tan(GALAXY.pitch)).toFixed(6)};
const float ARMS = ${GALAXY.arms.toFixed(1)};
const float ARMOFF = ${GALAXY.armOffset.toFixed(4)};
const float BULGER = ${GALAXY.bulgeR.toFixed(1)};

float sech2(float x) { float c = cosh(clamp(x, -40.0, 40.0)); return 1.0 / (c * c); }

void galaxyAt(vec3 p, out float stars, out float arm, out float bulge, out float dust) {
  float r = length(p.xz);
  float theta = atan(p.z, p.x);
  float radial = exp(-(r - R0) / RD) * smoothstep(52000.0, 38000.0, r);
  float h = H0 + r * 0.006;
  float phase = theta - PITCHK * log(max(r, 400.0) / R0);
  float a = 0.5 + 0.5 * cos(ARMS * phase + ARMOFF);
  arm = a * a * a * a * smoothstep(2500.0, 7000.0, r);
  float b2 = (r * r + p.y * p.y * 3.2) / (2.0 * BULGER * BULGER);
  bulge = 18.0 * exp(-b2);
  stars = radial * sech2(p.y / h) * (0.42 + 1.25 * arm);
  // dust sits in a thinner layer, on the inner edge of the arms
  float ad = 0.5 + 0.5 * cos(ARMS * (phase + 0.09) + ARMOFF);
  float hd = 110.0 + r * 0.0025;
  dust = exp(-(r - R0) / (RD * 1.2)) * smoothstep(50000.0, 30000.0, r) * sech2(p.y / hd) * (0.35 + 1.6 * ad * ad * ad);
}
`;

const CUBE_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const CUBE_FRAG = /* glsl */ `
uniform vec3 uObs;
uniform float uFace;
uniform float uSize;
varying vec3 vDir;
${NOISE}
${GALAXY_GLSL}
void main() {
  vec3 rd = normalize(vDir);
  vec3 L = vec3(0.0);
  vec3 T = vec3(1.0);
  float t = 30.0;
  const int STEPS = 84;
  float k = pow(95000.0 / 30.0, 1.0 / float(STEPS));
  float column = 0.0;
  for (int i = 0; i < STEPS; i++) {
    float tn = t * k;
    float ds = tn - t;
    vec3 p = uObs + rd * (t + ds * 0.5);
    float stars, arm, bulge, dust;
    galaxyAt(p, stars, arm, bulge, dust);
    float near = t < 6000.0 ? 1.0 : 0.0;
    float clump = 0.55 + 0.9 * (0.5 + 0.5 * fbm3(p / 420.0, near > 0.5 ? 4 : 2));
    float dclump = smoothstep(-0.25, 0.65, fbm3(p / 260.0 + 17.0, near > 0.5 ? 5 : 2)) * 1.6;
    vec3 old = vec3(1.0, 0.86, 0.68);
    vec3 young = vec3(0.72, 0.82, 1.0);
    vec3 emit = (stars * clump) * mix(old, young, clamp(arm * 1.4, 0.0, 1.0)) + bulge * vec3(1.0, 0.78, 0.52);
    // HII regions: pink knots in the arms
    float hii = arm * arm * smoothstep(0.52, 0.9, fbm3(p / 700.0 + 41.0, 3)) * stars;
    emit += hii * vec3(1.0, 0.32, 0.42) * 2.2;
    vec3 ext = dust * dclump * vec3(0.55, 0.72, 1.0) * 0.0042;
    L += T * emit * ds;
    column += stars * ds;
    T *= exp(-ext * ds);
    t = tn;
  }
  vec3 col = L * 2.4e-8;
  // faint unresolved stars, one per texel at most
  float h = hash13(vec3(gl_FragCoord.xy, uFace * 17.0 + 3.0));
  float h2 = hash13(vec3(gl_FragCoord.yx * 1.37, uFace * 5.0 + 11.0));
  float dens = clamp(column * 6e-5, 0.04, 1.0);
  float sp = pow(h, 520.0 / (0.25 + dens)) ;
  vec3 starTint = mix(vec3(1.0, 0.8, 0.62), vec3(0.75, 0.85, 1.0), h2);
  col += sp * starTint * 1.2e-3 * dot(T, vec3(0.333)) * (0.3 + 0.7 * h2);
  // a rare bright distant giant
  float sp2 = pow(h, 9000.0);
  col += sp2 * starTint * 2.5e-2;
  gl_FragColor = vec4(col, 1.0);
}
`;

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4((viewMatrix * vec4(position, 0.0)).xyz, 1.0);
  gl_Position = p.xyww;
  gl_Position.z = gl_Position.w * 0.99999;
}
`;

export const DOPPLER_GLSL = /* glsl */ `
uniform float uBeta;
uniform float uOneMinusBeta;   // 1 - beta, computed in double precision
uniform vec3 uVelDir;
// All of this is written in terms of (1 - cos) so it stays exact when beta is within
// a millionth of 1 and the angles involved are fractions of a milliradian.
// Map an apparent direction to its source direction; D is the Doppler factor.
vec3 aberrateInverse(vec3 d, out float D) {
  D = 1.0;
  if (uBeta <= 0.0) return d;
  vec3 dv = d - uVelDir;
  float omca = 0.5 * dot(dv, dv);                 // 1 - cos(apparent angle)
  float den = uOneMinusBeta + uBeta * omca;       // 1 - beta cos
  float omcs = omca * (1.0 + uBeta) / den;        // 1 - cos(source angle)
  float cs = 1.0 - omcs;
  float ss = sqrt(max(0.0, omcs * (2.0 - omcs)));
  vec3 perp = d - uVelDir * (1.0 - omca);
  float pl = length(perp);
  vec3 pn = pl > 1e-9 ? perp / pl : vec3(0.0);
  float gamma = inversesqrt(max(uOneMinusBeta * (1.0 + uBeta), 1e-14));
  D = 1.0 / (gamma * den);
  return uVelDir * cs + pn * ss;
}
// Map a source direction to its apparent direction.
vec3 aberrate(vec3 d, out float D) {
  D = 1.0;
  if (uBeta <= 0.0) return d;
  vec3 dv = d - uVelDir;
  float omcs = 0.5 * dot(dv, dv);
  float cs = 1.0 - omcs;
  float omca = omcs * uOneMinusBeta / (1.0 + uBeta * cs);
  float ca = 1.0 - omca;
  float sa = sqrt(max(0.0, omca * (2.0 - omca)));
  vec3 perp = d - uVelDir * cs;
  float pl = length(perp);
  vec3 pn = pl > 1e-9 ? perp / pl : vec3(0.0);
  float gamma = inversesqrt(max(uOneMinusBeta * (1.0 + uBeta), 1e-14));
  D = gamma * (1.0 + uBeta * cs);
  return uVelDir * ca + pn * sa;
}
vec3 dopplerTint(float D) {
  float l = log2(D);
  vec3 tint = l < 0.0 ? mix(vec3(1.0), vec3(1.0, 0.3, 0.1), clamp(-l / 2.5, 0.0, 1.0))
                      : mix(vec3(1.0), vec3(0.62, 0.74, 1.0), clamp(l / 2.0, 0.0, 1.0));
  float b = l < 0.0 ? D * D * D : D * D / (1.0 + pow(D / 10.0, 4.0));
  return tint * b;
}
`;

const SKY_FRAG = /* glsl */ `
uniform samplerCube tSky;
uniform float uIntensity;
uniform vec4 uBH;        // direction to black hole, angular Schwarzschild radius
varying vec3 vDir;
${DOPPLER_GLSL}
void main() {
  vec3 d = normalize(vDir);
  float D;
  vec3 src = aberrateInverse(d, D);
  float shadow = 1.0;
  if (uBH.w > 0.0) {
    vec3 bh = normalize(uBH.xyz);
    float a = acos(clamp(dot(src, bh), -1.0, 1.0));
    float ts = uBH.w;
    shadow = smoothstep(2.55 * ts, 2.75 * ts, a);
    float beta = a - 2.0 * ts / max(a, 1e-6);
    vec3 perp = src - bh * cos(a);
    float pl = length(perp);
    if (pl > 1e-7) src = bh * cos(beta) + (perp / pl) * sin(beta);
  }
  vec3 c = textureLod(tSky, src, 0.0).rgb;
  c *= dopplerTint(D);
  // At extreme blueshift the cosmic background slides into visible light.
  float cmb = smoothstep(12.0, 70.0, D);
  c += cmb * vec3(1.0, 0.55, 0.3) * 4e-4 * (1.0 + 3.0 * smoothstep(50.0, 80.0, D));
  gl_FragColor = vec4(c * uIntensity * shadow, 1.0);
}
`;

const STAR_VERT = /* glsl */ `
attribute vec3 aColor;
attribute float aFlux;
uniform float uScale;
uniform float uPx;
uniform vec4 uBH;
varying vec3 vColor;
${DOPPLER_GLSL}
void main() {
  float D;
  vec3 d = aberrate(normalize(position), D);
  vec4 p = projectionMatrix * vec4((viewMatrix * vec4(d, 0.0)).xyz, 1.0);
  gl_Position = p.xyww;
  gl_Position.z = gl_Position.w * 0.99998;
  float I = aFlux * uScale;
  vec3 tint = dopplerTint(D);
  float hide = 1.0;
  if (uBH.w > 0.0) hide = smoothstep(4.0 * uBH.w, 12.0 * uBH.w, acos(clamp(dot(d, normalize(uBH.xyz)), -1.0, 1.0)));
  // energy-preserving size: bright stars spread wider at lower peak
  float size = clamp(2.2 + 1.2 * log2(1.0 + I * 2.0), 2.2, 9.0);
  gl_PointSize = size * uPx;
  vColor = aColor * I * tint * hide * (6.0 / (size * size));
}
`;

const STAR_FRAG = /* glsl */ `
varying vec3 vColor;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float g = exp(-r2 * 4.5);
  gl_FragColor = vec4(vColor * g, 1.0);
}
`;

// The drive reaches gamma 1000, but at that point the whole sky is a single pixel.
// The view is drawn with gamma capped at 40, where the sky becomes a small bright ring.
const GAMMA_VIEW = 40;
export function setSkyBeta(uniforms, beta) {
  const g = 1 / Math.sqrt(Math.max(1 - beta * beta, 1e-18));
  const gv = Math.min(g, GAMMA_VIEW);
  const omb = 1 - Math.sqrt(1 - 1 / (gv * gv)); // 1 - beta at the capped gamma
  const b = beta <= 0 ? 0 : 1 - Math.max(omb, 1 - beta);
  uniforms.uBeta.value = b;
  uniforms.uOneMinusBeta.value = beta <= 0 ? 1 : Math.max(omb, 1 - beta);
}

export class Sky {
  constructor(renderer, size = 1024) {
    this.renderer = renderer;
    this.size = size;
    this.cubeTarget = new THREE.WebGLCubeRenderTarget(size, { type: THREE.HalfFloatType, generateMipmaps: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
    this.cubeCamera = new THREE.CubeCamera(0.1, 10, this.cubeTarget);
    this.cubeCamera.coordinateSystem = renderer.coordinateSystem;
    this.cubeCamera.updateCoordinateSystem();
    this.cubeCamera.updateMatrixWorld(true);
    this.genScene = new THREE.Scene();
    this.genMat = new THREE.ShaderMaterial({
      vertexShader: CUBE_VERT, fragmentShader: CUBE_FRAG, side: THREE.BackSide, depthTest: false, depthWrite: false,
      uniforms: { uObs: { value: new THREE.Vector3() }, uFace: { value: 0 }, uSize: { value: size } },
    });
    this.genScene.add(new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), this.genMat));

    this.uniforms = {
      tSky: { value: this.cubeTarget.texture },
      uIntensity: { value: 1 },
      uBeta: { value: 0 },
      uOneMinusBeta: { value: 1 },
      uVelDir: { value: new THREE.Vector3(0, 0, -1) },
      uBH: { value: new THREE.Vector4(0, 0, 0, 0) },
    };
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.ShaderMaterial({
      vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthTest: false, depthWrite: false,
      uniforms: this.uniforms,
    }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1000;

    this.starUniforms = {
      uScale: { value: 3.0 },
      uPx: { value: 1 },
      uBeta: this.uniforms.uBeta,
      uOneMinusBeta: this.uniforms.uOneMinusBeta,
      uVelDir: this.uniforms.uVelDir,
      uBH: this.uniforms.uBH,
    };
    this.starMat = new THREE.ShaderMaterial({
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, transparent: false,
      uniforms: this.starUniforms,
    });
    this.points = new THREE.Points(new THREE.BufferGeometry(), this.starMat);
    this.points.frustumCulled = false;
    this.points.renderOrder = -999;
    this.pending = null;
  }

  // Start regenerating the Milky Way cubemap for an observer position (ly). The work is
  // split into small tiles so no single draw call runs long enough to stall the GPU.
  regenerate(posLy, immediate = false) {
    this.genMat.uniforms.uObs.value.set(posLy[0], posLy[1], posLy[2]);
    this.tile = Math.min(256, this.size);
    this.tilesPerSide = Math.ceil(this.size / this.tile);
    this.pending = { face: 0, tile: 0 };
    if (immediate) while (this.pending) this.step(64);
  }

  step(maxTiles = 6) {
    if (!this.pending) return false;
    const r = this.renderer;
    const cams = this.cubeCamera.children;
    const prevTarget = r.getRenderTarget();
    const prevScissor = r.getScissorTest();
    const n = this.tilesPerSide;
    let done = false;
    for (let k = 0; k < maxTiles && !done; k++) {
      const { face, tile } = this.pending;
      const tx = tile % n, ty = Math.floor(tile / n);
      const x = tx * this.tile, y = ty * this.tile;
      const w = Math.min(this.tile, this.size - x), h = Math.min(this.tile, this.size - y);
      this.genMat.uniforms.uFace.value = face;
      this.cubeTarget.viewport.set(0, 0, this.size, this.size);
      this.cubeTarget.scissor.set(x, y, w, h);
      this.cubeTarget.scissorTest = true;
      r.setRenderTarget(this.cubeTarget, face);
      r.render(this.genScene, cams[face]);
      this.cubeTarget.scissorTest = false;
      this.pending.tile++;
      if (this.pending.tile >= n * n) {
        this.pending.tile = 0;
        this.pending.face++;
        if (this.pending.face >= 6) { this.pending = null; done = true; }
      }
    }
    r.setRenderTarget(prevTarget);
    r.setScissorTest(prevScissor);
    return done;
  }

  setStars(list) {
    // list: [{dir:[x,y,z], color:[r,g,b], flux}]
    const n = list.length;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), flux = new Float32Array(n);
    list.forEach((s, i) => {
      pos.set(s.dir, i * 3);
      col.set(s.color, i * 3);
      flux[i] = s.flux;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aFlux', new THREE.BufferAttribute(flux, 1));
    this.points.geometry.dispose();
    this.points.geometry = g;
  }
}
