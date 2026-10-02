// HDR post-processing: physically based bloom (downsample/upsample chain), a light
// exposure adaptation pass, ACES filmic tone mapping, and a gentle lens finish.

import * as THREE from 'three';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const DOWN = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uClamp;
varying vec2 vUv;
vec3 s(vec2 o) { return min(texture2D(tSrc, vUv + o * uTexel).rgb, vec3(uClamp)); }
void main() {
  vec3 a = s(vec2(-2.0, 2.0)), b = s(vec2(0.0, 2.0)), c = s(vec2(2.0, 2.0));
  vec3 d = s(vec2(-2.0, 0.0)), e = s(vec2(0.0)), f = s(vec2(2.0, 0.0));
  vec3 g = s(vec2(-2.0, -2.0)), h = s(vec2(0.0, -2.0)), i = s(vec2(2.0, -2.0));
  vec3 j = s(vec2(-1.0, 1.0)), k = s(vec2(1.0, 1.0)), l = s(vec2(-1.0, -1.0)), m = s(vec2(1.0, -1.0));
  vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
}
`;

const UP = /* glsl */ `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uWeight;
varying vec2 vUv;
void main() {
  vec2 t = uTexel;
  vec3 c = texture2D(tSrc, vUv + vec2(-t.x, t.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2(t.x, t.y)).rgb
         + texture2D(tSrc, vUv + vec2(-t.x, 0.0)).rgb * 2.0 + texture2D(tSrc, vUv).rgb * 4.0 + texture2D(tSrc, vUv + vec2(t.x, 0.0)).rgb * 2.0
         + texture2D(tSrc, vUv + vec2(-t.x, -t.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, -t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2(t.x, -t.y)).rgb;
  gl_FragColor = vec4(c / 16.0 * uWeight, 1.0);
}
`;

const ADAPT = /* glsl */ `
uniform sampler2D tLum;
uniform sampler2D tPrev;
uniform float uExposure;
uniform float uDt;
uniform float uMaxAdapt;
uniform float uReset;
varying vec2 vUv;
void main() {
  // meter on lit things only: black space should not drive the exposure up
  float sum = 0.0, cnt = 0.0, wsum = 0.0;
  for (int y = 0; y < 8; y++) {
    for (int x = 0; x < 12; x++) {
      vec2 uv = (vec2(float(x), float(y)) + 0.5) / vec2(12.0, 8.0);
      vec3 c = texture2D(tLum, uv).rgb * uExposure;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float w = 1.2 - length(uv - 0.5);
      if (l > 0.025) { sum += min(l, 4.0) * w; cnt += w; }
      wsum += w;
    }
  }
  float frac = cnt / wsum;
  float meanLit = cnt > 0.0 ? sum / cnt : 0.2;
  float target = frac < 0.03 ? 1.0 : clamp(0.24 / meanLit, 0.45, uMaxAdapt);
  float prev = texture2D(tPrev, vec2(0.5)).r;
  float rate = target < prev ? 2.2 : 0.9;
  float a = uReset > 0.5 ? target : prev + (target - prev) * (1.0 - exp(-uDt * rate));
  gl_FragColor = vec4(a, 0.0, 0.0, 1.0);
}
`;

const COMPOSITE = /* glsl */ `
uniform sampler2D tHdr;
uniform sampler2D tBloom;
uniform sampler2D tAdapt;
uniform float uExposure;
uniform float uBloom;
uniform float uTime;
uniform float uFade;
uniform vec3 uFadeColor;
uniform float uFlash;
uniform float uAberration;
uniform float uNoise;
uniform vec2 uRes;
varying vec2 vUv;

const mat3 ACESIn = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
const mat3 ACESOut = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
vec3 rrt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
vec3 aces(vec3 c) { c = ACESIn * c; c = rrt(c); c = ACESOut * c; return clamp(c, 0.0, 1.0); }
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 d = vUv - 0.5;
  float r2 = dot(d, d);
  vec2 off = d * r2 * uAberration;
  vec3 col;
  col.r = texture2D(tHdr, vUv - off).r;
  col.g = texture2D(tHdr, vUv).g;
  col.b = texture2D(tHdr, vUv + off).b;
  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col = mix(col, bloom, uBloom);
  float adapt = texture2D(tAdapt, vec2(0.5)).r;
  col *= uExposure * adapt;
  col += uFlash * vec3(0.85, 0.9, 1.0);
  col = aces(col / 0.6);
  // vignette, as from a real lens
  col *= mix(1.0, smoothstep(0.95, 0.15, r2 * 2.2), 0.55);
  col = toSRGB(col);
  float n = hash(vUv * uRes + fract(uTime * 13.17) * 117.0) - 0.5;
  float lum = dot(col, vec3(0.3333));
  col += n * (1.5 / 255.0 + uNoise * (1.0 - lum) * 0.06);
  col = mix(col, uFadeColor, uFade);
  gl_FragColor = vec4(col, 1.0);
}
`;

function fsTriangle() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
  return g;
}

export class Post {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quad = new THREE.Mesh(fsTriangle());
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    const rtOpts = { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false };
    this.levels = 6;
    this.mips = [];
    for (let i = 0; i < this.levels; i++) this.mips.push(new THREE.WebGLRenderTarget(4, 4, rtOpts));
    this.adapt = [new THREE.WebGLRenderTarget(1, 1, { ...rtOpts, type: THREE.FloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter }),
      new THREE.WebGLRenderTarget(1, 1, { ...rtOpts, type: THREE.FloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter })];
    this.adaptIndex = 0;
    this.resetAdapt = true;

    this.downMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: DOWN, depthTest: false, depthWrite: false,
      uniforms: { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uClamp: { value: 6e4 } } });
    this.upMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: UP, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendEquation: THREE.AddEquation,
      uniforms: { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uWeight: { value: 1 } } });
    this.adaptMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: ADAPT, depthTest: false, depthWrite: false,
      uniforms: { tLum: { value: null }, tPrev: { value: null }, uExposure: { value: 1 }, uDt: { value: 0.016 }, uMaxAdapt: { value: 6 }, uReset: { value: 1 } } });
    this.compMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: COMPOSITE, depthTest: false, depthWrite: false,
      uniforms: {
        tHdr: { value: null }, tBloom: { value: null }, tAdapt: { value: null },
        uExposure: { value: 1 }, uBloom: { value: 0.05 }, uTime: { value: 0 }, uFade: { value: 0 },
        uFadeColor: { value: new THREE.Color(0, 0, 0) }, uFlash: { value: 0 }, uAberration: { value: 0.0015 },
        uNoise: { value: 0.35 }, uRes: { value: new THREE.Vector2(1, 1) },
      } });
    this.exposure = 1;
    this.bloom = 0.04;
    this.fade = 0;
    this.flash = 0;
    this.maxAdapt = 6;
  }

  setSize(w, h) {
    let mw = Math.max(1, w >> 1), mh = Math.max(1, h >> 1);
    for (const m of this.mips) {
      m.setSize(mw, mh);
      mw = Math.max(1, mw >> 1); mh = Math.max(1, mh >> 1);
    }
    this.compMat.uniforms.uRes.value.set(w, h);
  }

  pass(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.cam);
  }

  render(hdr, dt, time) {
    const r = this.renderer;
    const prevAutoClear = r.autoClear;
    r.autoClear = false;
    // bloom downsample
    let src = hdr.texture, sw = hdr.width, sh = hdr.height;
    for (let i = 0; i < this.levels; i++) {
      const m = this.mips[i];
      this.downMat.uniforms.tSrc.value = src;
      this.downMat.uniforms.uTexel.value.set(1 / sw, 1 / sh);
      this.downMat.uniforms.uClamp.value = i === 0 ? 70 / Math.max(this.exposure, 1e-6) : 1e9;
      r.setRenderTarget(m); r.clear(true, false, false);
      this.pass(this.downMat, m);
      src = m.texture; sw = m.width; sh = m.height;
    }
    // adaptation, metered from the 1/16 mip
    const prev = this.adapt[this.adaptIndex];
    const next = this.adapt[1 - this.adaptIndex];
    this.adaptMat.uniforms.tLum.value = this.mips[3].texture;
    this.adaptMat.uniforms.tPrev.value = prev.texture;
    this.adaptMat.uniforms.uExposure.value = this.exposure;
    this.adaptMat.uniforms.uDt.value = dt;
    this.adaptMat.uniforms.uMaxAdapt.value = this.maxAdapt;
    this.adaptMat.uniforms.uReset.value = this.resetAdapt ? 1 : 0;
    this.resetAdapt = false;
    this.pass(this.adaptMat, next);
    this.adaptIndex = 1 - this.adaptIndex;
    // bloom upsample, accumulating into larger mips
    for (let i = this.levels - 1; i > 0; i--) {
      const s = this.mips[i], d = this.mips[i - 1];
      this.upMat.uniforms.tSrc.value = s.texture;
      this.upMat.uniforms.uTexel.value.set(1 / s.width, 1 / s.height);
      this.upMat.uniforms.uWeight.value = 0.72;
      this.pass(this.upMat, d);
    }
    const u = this.compMat.uniforms;
    u.tHdr.value = hdr.texture;
    u.tBloom.value = this.mips[0].texture;
    u.tAdapt.value = next.texture;
    u.uExposure.value = this.exposure;
    u.uBloom.value = this.bloom / this.levels * 1.6;
    u.uTime.value = time;
    u.uFade.value = this.fade;
    u.uFlash.value = this.flash;
    r.setRenderTarget(null);
    this.pass(this.compMat, null);
    r.autoClear = prevAutoClear;
  }
}
