// Pooled point-sprite particles (dust, sparkles, splashes, embers) + ground-pound rings.
import * as THREE from 'three';
import { makeCanvas } from './textures.js';

const MAX = 2500;

function atlas() {
  // 2x2 atlas: soft puff, star sparkle, droplet, ring
  const c = makeCanvas(128, 128);
  const g = c.getContext('2d');
  const cell = 64;
  // puff
  let gr = g.createRadialGradient(32, 32, 0, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, cell, cell);
  // sparkle
  g.save(); g.translate(96, 32);
  gr = g.createRadialGradient(0, 0, 0, 0, 0, 22);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 22, 0, 7); g.fill();
  g.fillStyle = '#fff';
  for (let i = 0; i < 4; i++) {
    g.rotate(Math.PI / 2);
    g.beginPath(); g.moveTo(0, -30); g.lineTo(4, 0); g.lineTo(-4, 0); g.closePath(); g.fill();
  }
  g.restore();
  // droplet
  gr = g.createRadialGradient(32, 96, 0, 32, 96, 16);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.7, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(32, 96, 16, 0, 7); g.fill();
  // square-ish chunk
  g.fillStyle = '#fff'; g.fillRect(96 - 12, 96 - 12, 24, 24);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const vert = /* glsl */`
attribute float aSize; attribute float aAlpha; attribute float aKind; attribute vec3 aColor; attribute float aRot;
varying float vAlpha; varying float vKind; varying vec3 vColor; varying float vRot;
uniform float uScale;
void main() {
  vAlpha = aAlpha; vKind = aKind; vColor = aColor; vRot = aRot;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = min(aSize * uScale / max(-mv.z, 0.1), 90.0);
  gl_Position = projectionMatrix * mv;
}`;
const frag = /* glsl */`
uniform sampler2D uTex;
varying float vAlpha; varying float vKind; varying vec3 vColor; varying float vRot;
void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  pc = vec2(c * pc.x - s * pc.y, s * pc.x + c * pc.y) + 0.5;
  float k = floor(vKind + 0.5);
  vec2 off = vec2(mod(k, 2.0), floor(k / 2.0)) * 0.5;
  vec4 t = texture2D(uTex, vec2(off.x + pc.x * 0.5, 1.0 - (off.y + pc.y * 0.5)));
  gl_FragColor = vec4(vColor * t.rgb, t.a * vAlpha);
  if (gl_FragColor.a < 0.01) discard;
  #include <colorspace_fragment>
}`;

export class Particles {
  constructor(scene) {
    this.scene = scene;
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(MAX * 3);
    this.col = new Float32Array(MAX * 3);
    this.size = new Float32Array(MAX);
    this.alpha = new Float32Array(MAX);
    this.kind = new Float32Array(MAX);
    this.rot = new Float32Array(MAX);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aKind', new THREE.BufferAttribute(this.kind, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = geo;
    this.uniforms = { uTex: { value: atlas() }, uScale: { value: 600 } };
    this.mat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false });
    this.addMat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
    this.ps = [];
    for (let i = 0; i < MAX; i++) this.ps.push({ alive: false });
    this.free = [];
    for (let i = MAX - 1; i >= 0; i--) this.free.push(i);
    this.rings = [];
    this.ringGeo = new THREE.RingGeometry(0.85, 1, 40);
    this.ringGeo.rotateX(-Math.PI / 2);
  }

  setViewport(h) { this.uniforms.uScale.value = h * 0.9; }

  spawn(o) {
    if (!this.free.length) return null;
    const i = this.free.pop();
    const p = this.ps[i];
    p.alive = true;
    p.x = o.x; p.y = o.y; p.z = o.z;
    p.vx = o.vx || 0; p.vy = o.vy || 0; p.vz = o.vz || 0;
    p.life = p.max = o.life || 1;
    p.size0 = o.size || 1; p.size1 = o.size1 ?? p.size0;
    p.g = o.g ?? 0; p.drag = o.drag ?? 0;
    p.kind = o.kind ?? 0;
    p.r = o.r ?? 1; p.gc = o.gc ?? 1; p.b = o.b ?? 1;
    p.a0 = o.alpha ?? 1;
    p.rot = o.rot ?? Math.random() * 6.28; p.vr = o.vr ?? 0;
    p.fadeIn = o.fadeIn ?? 0;
    return p;
  }

  dust(x, y, z, n = 6, color = [0.92, 0.88, 0.8]) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = 1 + Math.random() * 2;
      this.spawn({ x: x + Math.cos(a) * 0.2, y: y + 0.1, z: z + Math.sin(a) * 0.2, vx: Math.cos(a) * s, vy: 0.6 + Math.random() * 1.2, vz: Math.sin(a) * s,
        life: 0.45 + Math.random() * 0.3, size: 0.45, size1: 1.1, drag: 3.5, kind: 0, r: color[0], gc: color[1], b: color[2], alpha: 0.65 });
    }
  }
  sparkle(x, y, z, n = 8, color = [1, 0.95, 0.6], spread = 0.6) {
    for (let i = 0; i < n; i++) {
      this.spawn({ x: x + (Math.random() - 0.5) * spread, y: y + (Math.random() - 0.5) * spread, z: z + (Math.random() - 0.5) * spread,
        vx: (Math.random() - 0.5) * 3, vy: Math.random() * 3, vz: (Math.random() - 0.5) * 3,
        life: 0.5 + Math.random() * 0.4, size: 0.5 + Math.random() * 0.3, size1: 0.05, drag: 2, kind: 1, r: color[0], gc: color[1], b: color[2], vr: 4 });
    }
  }
  burst(x, y, z, n = 20, color = [1, 0.85, 0.3], speed = 6, kind = 1, size = 0.6, g = 6) {
    for (let i = 0; i < n; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = speed * (0.5 + Math.random() * 0.5);
      const r = Math.sqrt(1 - u * u);
      this.spawn({ x, y, z, vx: Math.cos(a) * r * s, vy: u * s + 2, vz: Math.sin(a) * r * s, g,
        life: 0.6 + Math.random() * 0.5, size, size1: 0.05, drag: 1.5, kind, r: color[0], gc: color[1], b: color[2], vr: 6 });
    }
  }
  splash(x, y, z, n = 18) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = 1.5 + Math.random() * 3;
      this.spawn({ x, y: y + 0.1, z, vx: Math.cos(a) * s, vy: 4 + Math.random() * 5, vz: Math.sin(a) * s, g: 22,
        life: 0.7 + Math.random() * 0.3, size: 0.32, size1: 0.18, kind: 2, r: 0.8, gc: 0.95, b: 1 });
    }
    this.ring(x, y + 0.05, z, 0x9fe6ff, 2.5);
  }
  embers(x, y, z, n = 3) {
    for (let i = 0; i < n; i++) {
      this.spawn({ x: x + (Math.random() - 0.5) * 1.5, y, z: z + (Math.random() - 0.5) * 1.5, vx: (Math.random() - 0.5), vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5),
        life: 0.9 + Math.random(), size: 0.25, size1: 0.02, kind: 1, r: 1, gc: 0.55, b: 0.15 });
    }
  }
  smoke(x, y, z, n = 6, dark = 0.35) {
    for (let i = 0; i < n; i++) {
      this.spawn({ x: x + (Math.random() - 0.5) * 0.8, y: y + Math.random() * 0.5, z: z + (Math.random() - 0.5) * 0.8,
        vx: (Math.random() - 0.5) * 1.5, vy: 1 + Math.random() * 1.5, vz: (Math.random() - 0.5) * 1.5,
        life: 0.8 + Math.random() * 0.6, size: 0.9, size1: 2.2, drag: 1.2, kind: 0, r: dark, gc: dark, b: dark, alpha: 0.7 });
    }
  }
  debris(x, y, z, n = 10, color = [0.75, 0.45, 0.25]) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 5;
      this.spawn({ x, y, z, vx: Math.cos(a) * s, vy: 4 + Math.random() * 6, vz: Math.sin(a) * s, g: 28,
        life: 0.9 + Math.random() * 0.4, size: 0.45, size1: 0.3, kind: 3, r: color[0], gc: color[1], b: color[2], vr: 8 });
    }
  }

  ring(x, y, z, color = 0xffffff, size = 3.5, life = 0.45) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide }));
    m.position.set(x, y, z);
    this.scene.add(m);
    this.rings.push({ m, t: 0, life, size });
  }

  update(dt) {
    let n = 0;
    const P = this.ps;
    for (let i = 0; i < MAX; i++) {
      const p = P[i];
      if (!p.alive) { this.alpha[i] = 0; this.size[i] = 0; continue; }
      p.life -= dt;
      if (p.life <= 0) { p.alive = false; this.free.push(i); this.alpha[i] = 0; this.size[i] = 0; continue; }
      p.vy -= p.g * dt;
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vy *= p.drag ? d : 1; p.vz *= d;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.rot += p.vr * dt;
      const k = 1 - p.life / p.max;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      this.col[i * 3] = p.r; this.col[i * 3 + 1] = p.gc; this.col[i * 3 + 2] = p.b;
      this.size[i] = p.size0 + (p.size1 - p.size0) * k;
      let a = p.a0 * Math.min(1, p.life / (p.max * 0.4));
      if (p.fadeIn) a *= Math.min(1, (p.max - p.life) / p.fadeIn);
      this.alpha[i] = a;
      this.kind[i] = p.kind;
      this.rot[i] = p.rot;
      n++;
    }
    const g = this.geo;
    for (const name of ['position', 'aColor', 'aSize', 'aAlpha', 'aKind', 'aRot']) g.attributes[name].needsUpdate = true;
    this.count = n;
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      const k = r.t / r.life;
      r.m.scale.setScalar(0.3 + k * r.size);
      r.m.material.opacity = 0.8 * (1 - k);
      if (k >= 1) { r.m.removeFromParent(); r.m.material.dispose(); this.rings.splice(i, 1); }
    }
  }

  clear() {
    for (let i = 0; i < MAX; i++) if (this.ps[i].alive) { this.ps[i].alive = false; this.free.push(i); }
    for (const r of this.rings) { r.m.removeFromParent(); r.m.material.dispose(); }
    this.rings = [];
  }
}
