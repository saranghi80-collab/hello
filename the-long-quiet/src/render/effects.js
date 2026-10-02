// Small effects near the camera: wisps of air and cloud streaming past, and the flash of
// an impact.

import * as THREE from 'three';

const LOGV = '#include <common>\n#include <logdepthbuf_pars_vertex>\n';
const LOGF = '#include <common>\n#include <logdepthbuf_pars_fragment>\n';

export class AirParticles {
  constructor(count = 420, size = 360) {
    this.count = count;
    this.size = size;
    this.pos = new Float32Array(count * 3);
    this.seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      this.pos[i * 3] = (Math.random() - 0.5) * size;
      this.pos[i * 3 + 1] = (Math.random() - 0.5) * size;
      this.pos[i * 3 + 2] = (Math.random() - 0.5) * size;
      this.seed[i] = Math.random();
    }
    const g = new THREE.BufferGeometry();
    this.attr = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attr);
    g.setAttribute('aSeed', new THREE.BufferAttribute(this.seed, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Vector3(1, 1, 1) }, uI: { value: 0 }, uPx: { value: 1 }, uHalf: { value: size / 2 } },
      vertexShader: `${LOGV}
attribute float aSeed;
uniform float uPx; uniform float uHalf;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = length(mv.xyz);
  gl_PointSize = clamp((14.0 + 30.0 * aSeed) * 120.0 / d, 1.0, 90.0) * uPx;
  // fade toward the edges of the box so wrapping is invisible
  vA = (1.0 - smoothstep(uHalf * 0.6, uHalf, d)) * smoothstep(6.0, 30.0, d) * (0.4 + 0.6 * aSeed);
  #include <logdepthbuf_vertex>
}`,
      fragmentShader: `${LOGF}
uniform vec3 uColor; uniform float uI;
varying float vA;
void main() {
  #include <logdepthbuf_fragment>
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 3.0) * vA * uI;
  gl_FragColor = vec4(uColor * a, a);
}`,
      transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    this.points.visible = false;
  }

  // flow: air velocity relative to the camera (m/s, world axes); intensity 0..1
  update(dt, flow, intensity, color, pxRatio) {
    this.points.visible = intensity > 0.01;
    if (!this.points.visible) return;
    const h = this.size / 2;
    const fx = flow[0] * dt, fy = flow[1] * dt, fz = flow[2] * dt;
    // cap the per-frame shift so very fast flows still read as motion, not noise
    const m = Math.hypot(fx, fy, fz);
    const k = m > h * 0.5 ? (h * 0.5) / m : 1;
    for (let i = 0; i < this.count; i++) {
      let x = this.pos[i * 3] + fx * k, y = this.pos[i * 3 + 1] + fy * k, z = this.pos[i * 3 + 2] + fz * k;
      if (x > h) x -= this.size; else if (x < -h) x += this.size;
      if (y > h) y -= this.size; else if (y < -h) y += this.size;
      if (z > h) z -= this.size; else if (z < -h) z += this.size;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    }
    this.attr.needsUpdate = true;
    this.mat.uniforms.uI.value = intensity;
    this.mat.uniforms.uColor.value.set(color[0], color[1], color[2]);
    this.mat.uniforms.uPx.value = pxRatio;
  }
}

// The flash and fireball of a high-speed impact.
export class Fireball {
  constructor(scene) {
    this.scene = scene;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uT: { value: 0 }, uI: { value: 0 } },
      vertexShader: `${LOGV} varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vP = position; vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,
      fragmentShader: `${LOGF} uniform float uT; uniform float uI; varying vec3 vN; varying vec3 vV; varying vec3 vP;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
void main(){
#include <logdepthbuf_fragment>
  float mu = abs(dot(normalize(vN), normalize(vV)));
  float core = pow(mu, 1.5);
  float t = clamp(uT, 0.0, 1.0);
  vec3 hot = mix(vec3(1.0, 0.95, 0.85), vec3(1.0, 0.45, 0.12), t);
  vec3 c = mix(hot, vec3(0.2, 0.08, 0.04), smoothstep(0.4, 1.0, t));
  float grain = 0.75 + 0.25 * h(floor(vP * 6.0 + uT * 3.0));
  gl_FragColor = vec4(c * core * grain * uI, 1.0);
}`,
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    scene.add(this.mesh);
    this.active = false;
  }

  start(worldPos, radius) {
    this.world = worldPos.slice();
    this.radius = radius;
    this.t = 0;
    this.active = true;
  }

  update(dt, camWorld, expo) {
    if (!this.active) { this.mesh.visible = false; return; }
    this.t += dt;
    const u = this.t / 2.5;
    if (u > 1) { this.active = false; this.mesh.visible = false; return; }
    this.mesh.visible = true;
    this.mesh.position.set(this.world[0] - camWorld[0], this.world[1] - camWorld[1], this.world[2] - camWorld[2]);
    this.mesh.scale.setScalar(this.radius * (0.15 + Math.pow(u, 0.4)));
    this.mat.uniforms.uT.value = u;
    this.mat.uniforms.uI.value = (1 - u) * (1 - u) * 30 / Math.max(expo, 1e-6);
  }
}
