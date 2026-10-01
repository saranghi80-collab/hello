// Gradient sky dome with sun glow and drifting procedural clouds (follows the camera).
import * as THREE from 'three';

const vert = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const frag = /* glsl */`
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom;
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform float uTime;
uniform float uClouds; uniform vec3 uCloudColor; uniform float uStars;
varying vec3 vDir;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += noise(p) * a; p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, pow(clamp(-h, 0.0, 1.0), 0.6));
  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * (pow(sd, 6.0) * 0.25 + pow(sd, 64.0) * 0.6);
  col += uSunColor * smoothstep(0.9993, 0.9997, sd) * 2.5;
  // stars (night skies)
  if (uStars > 0.0 && h > 0.0) {
    vec2 sp = d.xz / (d.y + 0.3) * 60.0;
    vec2 id = floor(sp);
    float r = hash(id);
    vec2 c = fract(sp) - 0.5;
    float st = smoothstep(0.08, 0.0, length(c)) * step(0.985, r);
    st *= 0.6 + 0.4 * sin(uTime * 2.0 + r * 50.0);
    col += vec3(st) * uStars * smoothstep(0.0, 0.25, h);
  }
  // clouds on a virtual plane
  if (uClouds > 0.0 && h > 0.01) {
    vec2 uv = d.xz / (h + 0.12) * 1.6 + vec2(uTime * 0.012, uTime * 0.004);
    float n = fbm(uv);
    float c = smoothstep(0.52 - uClouds * 0.18, 0.8, n);
    float shade = fbm(uv * 1.8 + 3.0);
    vec3 cc = mix(uCloudColor * 0.82, uCloudColor * 1.06, shade);
    cc += uSunColor * pow(sd, 8.0) * 0.4;
    col = mix(col, cc, c * smoothstep(0.01, 0.2, h) * 0.92);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class Sky {
  constructor() {
    this.uniforms = {
      uTop: { value: new THREE.Color('#2f7fe0') },
      uHorizon: { value: new THREE.Color('#bfe6ff') },
      uBottom: { value: new THREE.Color('#9cc7e8') },
      uSunDir: { value: new THREE.Vector3(0.4, 0.7, 0.3) },
      uSunColor: { value: new THREE.Color('#fff2d0') },
      uTime: { value: 0 },
      uClouds: { value: 0.7 },
      uCloudColor: { value: new THREE.Color('#ffffff') },
      uStars: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, vertexShader: vert, fragmentShader: frag,
      side: THREE.BackSide, depthWrite: false, depthTest: true, fog: false,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 16), mat);
    this.mesh.renderOrder = -10;
    this.mesh.frustumCulled = false;
  }
  configure(cfg) {
    const u = this.uniforms;
    if (cfg.top) u.uTop.value.set(cfg.top);
    if (cfg.horizon) u.uHorizon.value.set(cfg.horizon);
    if (cfg.bottom) u.uBottom.value.set(cfg.bottom);
    if (cfg.sunColor) u.uSunColor.value.set(cfg.sunColor);
    if (cfg.sunDir) u.uSunDir.value.set(...cfg.sunDir).normalize();
    u.uClouds.value = cfg.clouds ?? 0.7;
    u.uStars.value = cfg.stars ?? 0;
    if (cfg.cloudColor) u.uCloudColor.value.set(cfg.cloudColor);
  }
  update(dt, camera) {
    this.uniforms.uTime.value += dt;
    this.mesh.position.copy(camera.position);
  }
}
