// Base class for walking enemies that can be captured by Cappy.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { Body } from '../physics/body.js';
import { createCaptureHat, createMustache } from '../actors/mario-model.js';
import { approachAngle, clamp, damp, TAU } from '../core/math.js';
import { PopCoin } from './collectibles.js';

export class Creature extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.body = new Body(level.world, { radius: opts.radius ?? 0.5, height: opts.height ?? 1, stepUp: opts.stepUp ?? 0.45, snap: 0.5 });
    this.body.setPos(x, y, z);
    this.pos = this.body.pos;
    this.radius = this.body.radius;
    this.height = this.body.height;
    this.facing = opts.facing ?? Math.random() * TAU;
    this.home = new THREE.Vector3(x, y, z);
    this.captured = false;
    this.stunT = 0;
    this.gravityAcc = opts.gravity ?? 40;
    this.hatAnchor = new THREE.Group();
    this.hat = null;
    this.stache = null;
    this.model = new THREE.Group();
    this.obj.add(this.model);
    this.speedNow = 0;
    this.t = Math.random() * 10;
    this.coinDrop = opts.coins ?? 1;
    this.captureHint = 'Crouch to release';
  }
  get grounded() { return this.body.grounded; }
  get speed() { return Math.hypot(this.body.vel.x, this.body.vel.z); }
  get vel() { return this.body.vel; }

  physics(dt, gravity = this.gravityAcc) {
    const b = this.body;
    if (!b.grounded) b.vel.y = Math.max(-30, b.vel.y - gravity * (this.level.def.gravity ?? 1) * dt);
    this.facing += b.ride();
    b.move(dt);
    if (b.pos.y < this.level.killYAt(b.pos.x, b.pos.z)) this.fellOut();
    // lava/poison kill uncaptured creatures; captured ones eject Mario
    const lav = this.level.lavaAt(b.pos.x, b.pos.z);
    if (lav > b.pos.y - 0.1 && !this.lavaProof) this.burn();
  }
  burn() {
    if (this.captured) { this.release(this.game.player, true); this.game.player.hurt(null, { burn: true }); }
    this.defeat(false);
  }
  fellOut() {
    if (this.captured) { this.release(this.game.player, true); this.game.player.die('fall'); }
    this.kill();
  }

  // steer toward a world yaw at speed
  walk(dt, yaw, speed, turn = 6, acc = 20) {
    this.facing = approachAngle(this.facing, yaw, turn * dt);
    const v = this.body.vel;
    const tx = Math.sin(this.facing) * speed, tz = Math.cos(this.facing) * speed;
    v.x = damp(v.x, tx, acc * 0.5, dt);
    v.z = damp(v.z, tz, acc * 0.5, dt);
  }
  brake(dt, rate = 10) { const v = this.body.vel; v.x = damp(v.x, 0, rate, dt); v.z = damp(v.z, 0, rate, dt); }

  syncModel() {
    this.obj.position.copy(this.body.pos);
    this.obj.rotation.y = this.facing;
  }

  // ---- capture ----
  captureStart(player) {
    this.captured = true;
    this.stunT = 0;
    if (!this.hat) {
      this.hat = createCaptureHat(player.outfit, this.hatScale ?? 0.9);
      this.stache = createMustache(this.stacheScale ?? 0.9);
    }
    this.hatAnchor.add(this.hat);
    if (this.stacheAnchor) this.stacheAnchor.add(this.stache);
    this.body.vel.set(0, 0, 0);
    this.onCaptured?.(player);
  }
  // default captured control: walk + jump
  captureUpdate(dt, player) {
    const A = this.game.input.actions;
    const spd = this.captureSpeed ?? 5;
    if (player.inputMag > 0) {
      const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
      this.walk(dt, yaw, spd * player.inputMag, 14, 30);
    } else this.brake(dt, 12);
    if (this.body.grounded && A.jump.pressed) { this.body.leaveGround(this.captureJump ?? 11); this.game.audio.play('jump'); }
    this.physics(dt);
    this.animate(dt, true);
    this.syncModel();
  }
  release(player, forced = false) {
    if (!this.captured) return;
    this.captured = false;
    if (this.hat) this.hat.removeFromParent();
    if (this.stache) this.stache.removeFromParent();
    this.stunT = 1.6;
    this.onReleased?.(player, forced);
    this.game.endCapture(this, { noJump: false });
  }
  captureHurt(from) {
    // a hit while captured knocks Mario out
    const p = this.game.player;
    this.release(p, true);
    p.hurt(from);
  }

  defeat(withCoins = true) {
    if (!this.alive) return;
    this.game.audio.play('poof');
    this.game.fx?.smoke(this.pos.x, this.pos.y + 0.5, this.pos.z, 8, 0.85);
    if (withCoins) for (let i = 0; i < this.coinDrop; i++) new PopCoin(this.level, this.pos.x, this.pos.y + 0.8, this.pos.z, { vx: (Math.random() - 0.5) * 2, vz: (Math.random() - 0.5) * 2, vy: 9 + i });
    this.kill();
  }

  animate(dt, moving) { /* override */ }

  dispose() {}
}

// Is Mario coming down on top of this creature?
export function isStomp(player, e, margin = 0.4) {
  const b = player.body;
  if (player.capture) return false;
  if (b.vel.y > 1) return false;
  return b.pos.y > e.pos.y + e.height * margin || player.prevFeetY > e.pos.y + e.height * 0.7;
}
