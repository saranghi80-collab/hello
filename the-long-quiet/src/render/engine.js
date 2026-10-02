// Renderer setup. The camera always sits at the origin (floating origin) and everything
// else is positioned relative to it each frame in double precision. A logarithmic depth
// buffer covers the range from a landing leg to the far side of a star system.

import * as THREE from 'three';
import { Post } from './post.js';
import { Sky } from './sky.js';

// shared by every material that rebuilds view rays per pixel
export const CAMERA_UNIFORMS = {
  uCamRot: { value: new THREE.Matrix3() },
  uTanFov: { value: new THREE.Vector2(1, 1) },
  uRes: { value: new THREE.Vector2(1, 1) },
};

export class Engine {
  constructor(canvas, { quality = 'high' } = {}) {
    this.canvas = canvas;
    const renderer = new THREE.WebGLRenderer({
      canvas, antialias: false, logarithmicDepthBuffer: true, powerPreference: 'high-performance', alpha: false, stencil: false,
    });
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.autoClear = false;
    this.renderer = renderer;
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.15, 1e15);
    this.camera.position.set(0, 0, 0);
    this.bgScene = new THREE.Scene();
    this.scene = new THREE.Scene();
    this.setQuality(quality, true);
    this.sky = new Sky(renderer, this.skySize);
    this.bgScene.add(this.sky.mesh, this.sky.points);
    this.post = new Post(renderer);
    this.hdr = null;
    this.frustum = new THREE.Frustum();
    this.projScreenMatrix = new THREE.Matrix4();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  setQuality(q, initial = false) {
    this.quality = q;
    const presets = {
      low: { scale: 0.7, samples: 0, sky: 512, maxPixels: 1.0e6 },
      medium: { scale: 0.9, samples: 2, sky: 768, maxPixels: 1.6e6 },
      high: { scale: 1.0, samples: 4, sky: 1024, maxPixels: 2.4e6 },
      ultra: { scale: 1.35, samples: 4, sky: 1536, maxPixels: 4.5e6 },
    };
    const p = { ...(presets[q] || presets.high) };
    if (window.__TLQ_TEST) { p.sky = window.__TLQ_SKY || 128; p.samples = 0; p.scale = window.__TLQ_SCALE || 0.5; }
    this.renderScale = p.scale;
    this.samples = p.samples;
    this.skySize = p.sky;
    this.maxPixels = window.__TLQ_TEST ? 1e9 : p.maxPixels;
    if (!initial) this.resize(true);
  }

  resize(force = false) {
    const w = Math.max(1, this.canvas.clientWidth || window.innerWidth);
    const h = Math.max(1, this.canvas.clientHeight || window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2) * this.renderScale;
    // keep the pixel count within budget on large or high-density screens
    if (w * h * dpr * dpr > this.maxPixels) dpr = Math.sqrt(this.maxPixels / (w * h));
    const pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    if (!force && this.hdr && this.width === pw && this.height === ph) return;
    this.width = pw; this.height = ph;
    this.pixelRatio = dpr;
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(pw, ph, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.hdr) this.hdr.dispose();
    this.hdr = new THREE.WebGLRenderTarget(pw, ph, {
      type: THREE.HalfFloatType, format: THREE.RGBAFormat, samples: this.samples,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true,
    });
    this.post.setSize(pw, ph);
    this.post.resetAdapt = true;
  }

  // radians per pixel, vertically
  get pixelAngle() {
    return (2 * Math.tan((this.camera.fov * Math.PI) / 360)) / this.height;
  }
  get projScale() {
    return this.height / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
  }

  updateFrustum() {
    const c = this.camera;
    c.updateMatrixWorld();
    this.projScreenMatrix.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse);
    this.frustum.setFromProjectionMatrix(this.projScreenMatrix);
    return this.frustum;
  }

  updateCameraUniforms() {
    const c = this.camera;
    CAMERA_UNIFORMS.uCamRot.value.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(c.quaternion));
    const ty = Math.tan((c.fov * Math.PI) / 360);
    CAMERA_UNIFORMS.uTanFov.value.set(ty * c.aspect, ty);
    CAMERA_UNIFORMS.uRes.value.set(this.width, this.height);
  }

  render(dt, time) {
    const r = this.renderer;
    this.updateCameraUniforms();
    this.sky.starUniforms.uPx.value = this.pixelRatio;
    r.setRenderTarget(this.hdr);
    r.setClearColor(0x000000, 1);
    r.clear(true, true, false);
    r.render(this.bgScene, this.camera);
    r.clearDepth();
    r.render(this.scene, this.camera);
    this.post.render(this.hdr, dt, time);
  }
}
