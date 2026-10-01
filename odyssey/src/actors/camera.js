// Third-person orbit camera with Odyssey-style vertical framing, auto-follow, collision and shake.
import * as THREE from 'three';
import { clamp, damp, dampAngle, wrapAngle, lerp } from '../core/math.js';

export class CameraController {
  constructor(game, camera) {
    this.game = game;
    this.camera = camera;
    this.yaw = 0;
    this.pitch = 0.32;
    this.dist = 10;
    this.distTarget = 10;
    this.curDist = 10;
    this.target = new THREE.Vector3();
    this.focusY = 0;
    this.autoT = 0;
    this.shakeT = 0;
    this.shakeAmp = 0;
    this.cine = null;
    this.look = new THREE.Vector3();
    this.tmp = new THREE.Vector3();
    this.override = null; // {yaw, pitch, dist} soft hints (e.g. 2D sections)
    this.resetT = 0;
    this.fov = 55;
  }

  snap(x, y, z, facing) {
    this.yaw = wrapAngle(facing + Math.PI);
    this.pitch = 0.3;
    this.target.set(x, y + 1.3, z);
    this.focusY = y;
    this.curDist = this.distTarget;
    this.cine = null;
    this.update(0, true);
  }

  shake(amount) { this.shakeAmp = Math.max(this.shakeAmp, amount); this.shakeT = 0.4; }

  // Cinematic shot: position + look target; t = blend seconds
  cinematic(pos, look, blend = 0.6) {
    this.cine = { pos: pos.clone(), look: look.clone(), blend, t: 0, from: this.camera.position.clone(), fromLook: this.look.clone() };
  }
  endCinematic() {
    if (!this.cine) return;
    // derive yaw/pitch from current camera position to keep continuity
    const p = this.camera.position, t = this.target;
    const dx = p.x - t.x, dz = p.z - t.z;
    this.yaw = Math.atan2(dx, dz);
    this.cine = null;
  }

  update(dt, instant = false) {
    const game = this.game, inp = game.input, cam = this.camera;
    if (this.cine) {
      const c = this.cine;
      c.t += dt;
      const k = c.blend > 0 ? clamp(c.t / c.blend, 0, 1) : 1;
      const e = k * k * (3 - 2 * k);
      cam.position.lerpVectors(c.from, c.pos, e);
      this.look.lerpVectors(c.fromLook, c.look, e);
      cam.lookAt(this.look);
      return;
    }
    const focus = game.focusTarget();
    if (!focus) return;

    // manual control
    const cx = inp.cam.x, cy = inp.cam.y;
    if (game.state === 'play') {
      this.yaw -= cx;
      this.pitch = clamp(this.pitch + cy, -0.45, 1.25);
      if (Math.abs(cx) + Math.abs(cy) > 0.0005) this.autoT = 0; else this.autoT += dt;
      this.distTarget = clamp(this.distTarget + inp.zoom * 1.2, 5.5, 18);
      if (inp.actions.camReset.pressed) this.resetT = 0.35;
    }
    if (this.resetT > 0) {
      this.resetT -= dt;
      this.yaw = dampAngle(this.yaw, focus.facing + Math.PI, 14, dt);
      this.pitch = damp(this.pitch, 0.3, 10, dt);
    }
    // gentle auto-follow behind when running and not steering the camera
    if (this.autoT > 1.2 && focus.speed > 3 && !instant && !focus.noAuto) {
      const behind = focus.moveYaw + Math.PI;
      const lateral = Math.abs(Math.sin(focus.moveYaw - (this.yaw + Math.PI)));
      this.yaw = dampAngle(this.yaw, behind, 0.35 * (focus.speed / 10) * (0.4 + lateral), dt);
    }
    if (this.override) {
      const o = this.override;
      if (o.yaw !== undefined) this.yaw = dampAngle(this.yaw, o.yaw, o.rate ?? 3, dt);
      if (o.pitch !== undefined) this.pitch = damp(this.pitch, o.pitch, o.rate ?? 3, dt);
    }

    // vertical framing: hold height through jumps, follow on landing or large changes
    const fy = focus.y;
    if (instant) this.focusY = fy;
    else if (focus.grounded || focus.swimming) this.focusY = damp(this.focusY, fy, 7, dt);
    else if (fy < this.focusY - 0.3) this.focusY = damp(this.focusY, fy + 0.3, 12, dt);
    else if (fy > this.focusY + 3.6) this.focusY = damp(this.focusY, fy - 3.6, 12, dt);
    const rate = instant ? 1000 : 14;
    this.target.x = damp(this.target.x, focus.x, rate, dt);
    this.target.z = damp(this.target.z, focus.z, rate, dt);
    this.target.y = damp(this.target.y, this.focusY + (focus.camHeight ?? 1.4), instant ? 1000 : 18, dt);

    const dist = this.override?.dist ?? this.distTarget * (focus.distMul ?? 1);
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const dx = Math.sin(this.yaw) * cp, dy = sp, dz = Math.cos(this.yaw) * cp;
    // collision
    let allowed = dist;
    const w = game.level?.world;
    if (w) {
      const t = this.target;
      const hit = w.raycast(t.x, t.y, t.z, dx, dy, dz, dist + 0.5, (c) => c.cam !== false && !c.oneWay && c.solid);
      if (hit) allowed = Math.max(1.0, hit.t - 0.45);
    }
    if (instant) this.curDist = allowed;
    else this.curDist = allowed < this.curDist ? damp(this.curDist, allowed, 28, dt) : damp(this.curDist, allowed, 3.2, dt);
    const d = this.curDist;
    cam.position.set(this.target.x + dx * d, this.target.y + dy * d, this.target.z + dz * d);
    // keep above ground
    if (w) {
      const g = w.groundBelow(cam.position.x, cam.position.z, cam.position.y + 2);
      if (g && cam.position.y < g.y + 0.6) cam.position.y = g.y + 0.6;
    }
    // shake
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const a = this.shakeAmp * (this.shakeT / 0.4);
      cam.position.x += (Math.random() - 0.5) * a;
      cam.position.y += (Math.random() - 0.5) * a;
      cam.position.z += (Math.random() - 0.5) * a;
      if (this.shakeT <= 0) this.shakeAmp = 0;
    }
    this.look.copy(this.target);
    cam.lookAt(this.look);
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = lerp(cam.fov, this.fov, 1 - Math.exp(-6 * dt)); cam.updateProjectionMatrix(); }
  }
}
