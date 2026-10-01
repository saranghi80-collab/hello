// Stylized water / lava surfaces. Water reads terrain height from a texture to draw
// shallow-to-deep color, shoreline foam and transparency.
import * as THREE from 'three';

const NOISE = /* glsl */`
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}`;

const vert = /* glsl */`
uniform float uTime;
uniform float uWave;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  wp.y += (sin(wp.x * 0.35 + uTime * 1.3) + sin(wp.z * 0.42 - uTime * 1.05)) * 0.05 * uWave;
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const frag = /* glsl */`
uniform sampler2D uHeight;
uniform vec4 uHB;
uniform float uHasH;
uniform vec3 uShallow; uniform vec3 uDeep; uniform vec3 uFoam; uniform vec3 uSky;
uniform vec3 uSunDir; uniform float uTime; uniform float uLava;
varying vec3 vWorld;
#include <fog_pars_fragment>
${NOISE}
void main() {
  float depth = 50.0;
  if (uHasH > 0.5) {
    vec2 huv = (vWorld.xz - uHB.xy) / uHB.zw;
    if (huv.x > 0.0 && huv.y > 0.0 && huv.x < 1.0 && huv.y < 1.0) depth = vWorld.y - texture2D(uHeight, huv).r;
  }
  vec2 p = vWorld.xz;
  if (uLava > 0.5) {
    float n = vnoise(p * 0.25 + vec2(uTime * 0.05, uTime * 0.03));
    float n2 = vnoise(p * 0.9 - vec2(uTime * 0.12, 0.0));
    float cracks = smoothstep(0.42, 0.5, abs(n - 0.5) * 2.0 + n2 * 0.25);
    vec3 col = mix(vec3(1.0, 0.62, 0.16) * 1.15, vec3(0.55, 0.07, 0.02), cracks);
    col = mix(col, vec3(0.2, 0.03, 0.02), smoothstep(0.7, 1.0, n2) * 0.7);
    float pulse = 0.85 + 0.15 * sin(uTime * 1.3 + p.x * 0.05 + p.y * 0.07);
    col *= pulse;
    float edge = smoothstep(0.5, 0.0, depth);
    col = mix(col, vec3(1.0, 0.5, 0.12) * 1.1, edge * 0.5);
    gl_FragColor = vec4(col, 1.0);
  } else {
    float t = uTime;
    float e = 0.15;
    float h0 = vnoise(p * 0.6 + vec2(t * 0.35, t * 0.2)) + vnoise(p * 1.7 - vec2(t * 0.5, -t * 0.3)) * 0.5;
    float hx = vnoise((p + vec2(e, 0.0)) * 0.6 + vec2(t * 0.35, t * 0.2)) + vnoise((p + vec2(e, 0.0)) * 1.7 - vec2(t * 0.5, -t * 0.3)) * 0.5;
    float hz = vnoise((p + vec2(0.0, e)) * 0.6 + vec2(t * 0.35, t * 0.2)) + vnoise((p + vec2(0.0, e)) * 1.7 - vec2(t * 0.5, -t * 0.3)) * 0.5;
    vec3 n = normalize(vec3((h0 - hx) * 2.2, 1.0, (h0 - hz) * 2.2));
    vec3 V = normalize(cameraPosition - vWorld);
    float fres = pow(1.0 - max(dot(n, V), 0.0), 4.0);
    vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 5.0, depth));
    col = mix(col, uSky, clamp(fres * 0.8, 0.0, 0.7));
    vec3 L = normalize(uSunDir);
    float spec = pow(max(dot(reflect(-L, n), V), 0.0), 90.0);
    col += vec3(1.0, 0.97, 0.9) * spec * 1.3;
    // sparkles
    float sp = smoothstep(0.93, 1.0, vnoise(p * 3.0 + vec2(t * 0.8, -t * 0.6))) * smoothstep(0.3, 1.0, spec * 4.0 + 0.3);
    col += vec3(sp) * 0.6;
    float fn = vnoise(p * 1.4 + vec2(t * 0.25, t * 0.15));
    float foamLine = smoothstep(0.55, 0.05, depth + (fn - 0.5) * 0.5);
    float ripple = smoothstep(0.08, 0.0, abs(fract(depth * 1.2 - t * 0.35) - 0.5) - 0.38) * smoothstep(1.4, 0.2, depth);
    float foam = clamp(foamLine + ripple * 0.5, 0.0, 1.0);
    col = mix(col, uFoam, foam);
    float alpha = mix(0.55, 0.93, smoothstep(0.0, 3.0, depth));
    alpha = max(alpha, foam);
    gl_FragColor = vec4(col, alpha);
  }
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function makeHeightTexture(hf) {
  const data = new Uint16Array(hf.nx * hf.nz);
  for (let i = 0; i < data.length; i++) data[i] = THREE.DataUtils.toHalfFloat(hf.h[i]);
  const tex = new THREE.DataTexture(data, hf.nx, hf.nz, THREE.RedFormat, THREE.HalfFloatType);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export function createWaterMaterial(opts = {}) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 },
    uWave: { value: opts.wave ?? 1 },
    uHeight: { value: null },
    uHB: { value: new THREE.Vector4(0, 0, 1, 1) },
    uHasH: { value: 0 },
    uShallow: { value: new THREE.Color(opts.shallow || '#4fe0d9') },
    uDeep: { value: new THREE.Color(opts.deep || '#1b6fc2') },
    uFoam: { value: new THREE.Color(opts.foam || '#ffffff') },
    uSky: { value: new THREE.Color(opts.sky || '#cfeaff') },
    uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.3) },
    uLava: { value: opts.lava ? 1 : 0 },
  }]);
  const m = new THREE.ShaderMaterial({
    uniforms, vertexShader: vert, fragmentShader: frag,
    transparent: !opts.lava, depthWrite: !!opts.lava, fog: true,
  });
  return m;
}

export function attachHeightfield(material, hf, tex) {
  material.uniforms.uHeight.value = tex;
  material.uniforms.uHB.value.set(hf.x0, hf.z0, (hf.nx - 1) * hf.cell, (hf.nz - 1) * hf.cell);
  material.uniforms.uHasH.value = 1;
}

// Vertical scrolling ribbon for waterfalls / lavafalls.
const fallVert = /* glsl */`
varying vec2 vUv;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;
const fallFrag = /* glsl */`
uniform float uTime; uniform vec3 uA; uniform vec3 uB; uniform float uSpeed;
varying vec2 vUv;
#include <fog_pars_fragment>
${NOISE}
void main() {
  vec2 p = vec2(vUv.x * 9.0, vUv.y * 3.0 + uTime * uSpeed);
  float n = vnoise(vec2(p.x, p.y)) * 0.6 + vnoise(p * vec2(2.5, 1.3)) * 0.4;
  float streak = smoothstep(0.45, 0.85, n);
  vec3 col = mix(uA, uB, streak);
  float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
  gl_FragColor = vec4(col, (0.75 + streak * 0.25) * edge);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function createFallMaterial(a = '#8fd8ff', b = '#ffffff', speed = 1.6) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 }, uA: { value: new THREE.Color(a) }, uB: { value: new THREE.Color(b) }, uSpeed: { value: speed },
  }]);
  return new THREE.ShaderMaterial({ uniforms, vertexShader: fallVert, fragmentShader: fallFrag, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: true });
}
