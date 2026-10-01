// Enemies and capturable creatures.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { Creature, isStomp } from './creature.js';
import { ModelBuilder, G, mat, roundedBox } from '../gfx/model.js';
import { BoxCollider, CylinderCollider } from '../physics/colliders.js';
import { approachAngle, angleDiff, clamp, damp, TAU, lerp } from '../core/math.js';
import { PopCoin } from './collectibles.js';
import { glowSprite } from '../gfx/props.js';
import { createCaptureHat, createMustache } from '../actors/mario-model.js';

const V = new THREE.Vector3();
const eyeW = () => mat('#ffffff', { roughness: 0.25 });
const pupil = () => mat('#111118', { roughness: 0.2 });

// =============================================================== GOOMBA
function goombaModel(color = '#9a5a2c') {
  const g = new THREE.Group();
  const feetL = new THREE.Group(), feetR = new THREE.Group(), body = new THREE.Group();
  g.add(feetL, feetR, body);
  feetL.position.set(0.17, 0, 0); feetR.position.set(-0.17, 0, 0);
  const B = new ModelBuilder();
  const foot = mat('#4a2a14', { roughness: 0.7 });
  B.add(feetL, G.sphere(0.16, 12, 8), foot, { p: [0, 0.09, 0.05], s: [1, 0.62, 1.4] });
  B.add(feetR, G.sphere(0.16, 12, 8), foot, { p: [0, 0.09, 0.05], s: [1, 0.62, 1.4] });
  B.add(body, G.sphere(0.28, 16, 12), mat('#f3d6a8', { roughness: 0.7 }), { p: [0, 0.32, 0], s: [1, 0.9, 0.95] });
  B.add(body, G.sphere(0.5, 22, 14), mat(color, { roughness: 0.6 }), { p: [0, 0.64, 0], s: [1, 0.74, 1] });
  B.add(body, G.cyl(0.47, 0.42, 0.1, 22), mat('#7c4520', { roughness: 0.7 }), { p: [0, 0.42, 0] });
  for (const s of [1, -1]) {
    B.add(body, G.sphere(0.095, 12, 10), eyeW(), { p: [s * 0.13, 0.62, 0.41], s: [0.85, 1.4, 0.5], r: [0, s * 0.3, 0] });
    B.add(body, G.sphere(0.05, 10, 8), pupil(), { p: [s * 0.12, 0.6, 0.455], s: [0.8, 1.3, 0.5] });
    B.add(body, G.box(0.2, 0.06, 0.06), mat('#2a160a'), { p: [s * 0.14, 0.77, 0.42], r: [0.2, s * -0.2, s * -0.45] });
    B.add(body, G.cone(0.04, 0.09, 6), eyeW(), { p: [s * 0.09, 0.42, 0.29], r: [0, 0, 0] });
  }
  B.build({ merge: true });
  g.userData = { feetL, feetR, body };
  return g;
}

export class Goomba extends Creature {
  constructor(level, x, z, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x, y + 0.1, z, { radius: 0.5, height: 0.95, coins: 1 });
    this.kind = 'goomba';
    this.mesh = goombaModel(opts.color);
    this.model.add(this.mesh);
    this.ai = 'wander';
    this.target = new THREE.Vector3(x, y, z);
    this.wanderT = 0;
    this.squashT = -1;
    this.stack = null; // leader when stacked
    this.tower = [];   // when captured: goombas beneath (last = bottom)
    this.hatAnchor.position.set(0, 1.0, 0);
    this.mesh.userData.body.add(this.hatAnchor);
    this.stacheAnchor = new THREE.Group();
    this.stacheAnchor.position.set(0, 0.48, 0.36);
    this.mesh.userData.body.add(this.stacheAnchor);
    this.hatScale = 0.85; this.stacheScale = 0.8;
    this.wanderRadius = opts.wander ?? 6;
    this.sight = opts.sight ?? 9;
    this.captureSpeed = 5.2; this.captureJump = 11.5;
    this.captureHint = 'Captured Goomba · jump onto other Goombas to stack them · Crouch to release';
    this.camHeight = 1.0;
  }
  update(dt) {
    this.t += dt;
    if (this.captured || this.stack) return;
    if (this.squashT >= 0) {
      this.squashT += dt;
      this.mesh.scale.set(1 + this.squashT * 1.5, Math.max(0.12, 1 - this.squashT * 8), 1 + this.squashT * 1.5);
      if (this.squashT > 0.35) this.defeat(true);
      return;
    }
    const b = this.body;
    if (this.stunT > 0) {
      this.stunT -= dt;
      this.brake(dt, 8);
      this.physics(dt);
      this.mesh.rotation.y = Math.sin(this.t * 8) * 0.3;
      this.syncModel();
      return;
    }
    this.mesh.rotation.y = 0;
    const p = this.game.player;
    const actor = p.capture || p;
    const dx = actor.pos.x - b.pos.x, dz = actor.pos.z - b.pos.z;
    const d = Math.hypot(dx, dz);
    const visible = d < this.sight && Math.abs(actor.pos.y - b.pos.y) < 4 && !p.dead && actor !== this && !(p.capture instanceof Goomba);
    switch (this.ai) {
      case 'wander': {
        this.wanderT -= dt;
        if (this.wanderT <= 0) {
          this.wanderT = 2 + Math.random() * 3;
          const a = Math.random() * TAU, r = Math.random() * this.wanderRadius;
          this.target.set(this.home.x + Math.cos(a) * r, 0, this.home.z + Math.sin(a) * r);
        }
        const tx = this.target.x - b.pos.x, tz = this.target.z - b.pos.z;
        if (Math.hypot(tx, tz) > 0.6 && this.wanderT < 2) this.walk(dt, Math.atan2(tx, tz), 1.4, 4);
        else this.brake(dt);
        if (visible) { this.ai = 'notice'; this.aiT = 0; if (b.grounded) b.leaveGround(6); this.game.audio.play('alert'); this.alertFx(); }
        break;
      }
      case 'notice':
        this.aiT += dt;
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 10 * dt);
        this.brake(dt);
        if (this.aiT > 0.45) this.ai = 'chase';
        break;
      case 'chase': {
        if (!visible || d > this.sight * 1.6) { this.ai = 'wander'; break; }
        // don't run off cliffs
        const fx = b.pos.x + Math.sin(this.facing) * 1.0, fz = b.pos.z + Math.cos(this.facing) * 1.0;
        const ahead = this.level.world.groundBelow(fx, fz, b.pos.y + 1);
        if (!ahead || ahead.y < b.pos.y - 2.5) { this.brake(dt, 14); this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 3 * dt); }
        else this.walk(dt, Math.atan2(dx, dz), 4.3, 5);
        break;
      }
    }
    this.physics(dt);
    this.animate(dt, this.speed > 0.3);
    this.syncModel();
  }
  alertFx() {
    // "!" burst
    this.game.fx?.burst(this.pos.x, this.pos.y + 1.6, this.pos.z, 4, [1, 0.3, 0.2], 2, 1, 0.5, 0);
  }
  animate(dt, moving) {
    const u = this.mesh.userData;
    const s = moving ? Math.sin(this.t * 12) : 0;
    u.feetL.position.z = s * 0.12; u.feetR.position.z = -s * 0.12;
    u.body.rotation.z = s * 0.08;
    u.body.position.y = Math.abs(s) * 0.03;
  }
  onPlayer(player, actor) {
    if (this.squashT >= 0 || this.stack || this.captured) return;
    if (actor !== player) {
      // a captured creature bumping into us
      if (actor instanceof Goomba) return; // handled by stacking logic
      if (actor.rams) { this.defeat(true); return; }
      return;
    }
    if (isStomp(player, this) || player.state === 'gpFall') {
      this.squash();
      if (player.state !== 'gpFall') player.bounce();
      return;
    }
    if (player.isAttacking()) { this.knockAway(player); return; }
    if (this.stunT > 0) return;
    player.hurt(this.pos);
  }
  squash() {
    this.squashT = 0;
    this.game.audio.play('stomp');
    this.removeColliders();
  }
  knockAway() { this.game.audio.play('enemyhit'); this.defeat(true); }
  onCap() { if (this.squashT >= 0 || this.stack) return; return 'capture'; }
  onGroundPound(player) { if (this.squashT < 0 && !this.captured && !this.stack) this.squash(); }

  // ---- captured: stacking tower ----
  captureStart(player) {
    super.captureStart(player);
    this.tower = [];
    this.ai = 'wander';
  }
  captureUpdate(dt, player) {
    const b = this.body;
    const wasAir = !b.grounded;
    super.captureUpdate(dt, player);
    // stack onto free goombas we land on
    if (b.vel.y <= 0.5 || wasAir) {
      for (const e of this.level.entities) {
        if (!(e instanceof Goomba) || e === this || !e.alive || e.stack || e.captured || e.squashT >= 0 || this.tower.includes(e)) continue;
        const dx = e.pos.x - b.pos.x, dz = e.pos.z - b.pos.z;
        const top = e.pos.y + 0.95;
        if (dx * dx + dz * dz < 0.9 * 0.9 && b.pos.y > top - 0.55 && b.pos.y < top + 0.5 && b.vel.y <= 0.5) {
          this.addToTower(e);
          break;
        }
      }
    }
    // position tower members
    const n = this.tower.length;
    this.mesh.position.y = n * 0.95;
    this.tower.forEach((g, i) => {
      const off = (n - 1 - i) * 0.95;
      g.body.pos.set(b.pos.x, b.pos.y + off, b.pos.z);
      g.facing = this.facing;
      g.t += dt;
      g.animate(dt, this.speed > 0.3);
      g.mesh.position.y = 0;
      g.syncModel();
    });
    this.camHeight = 1.0 + n * 0.95;
    this.hatAnchor.updateMatrixWorld();
  }
  addToTower(e) {
    const b = this.body;
    e.stack = this;
    e.ai = 'wander';
    e.removeColliders?.();
    this.tower.push(e);
    b.pos.set(e.pos.x, e.pos.y, e.pos.z);
    b.vel.y = 0;
    b.height = 0.95 * (this.tower.length + 1);
    this.height = b.height;
    this.game.audio.play('stomp');
    this.game.fx?.sparkle(b.pos.x, b.pos.y + 1, b.pos.z, 8);
    if (this.tower.length >= 2) this.game.toast(`Goomba tower: ${this.tower.length + 1}!`);
  }
  onReleased() {
    const b = this.body;
    const n = this.tower.length;
    // leader drops from the top of the tower
    b.pos.y += n * 0.95;
    this.mesh.position.y = 0;
    b.height = 0.95; this.height = 0.95;
    this.tower.forEach((g, i) => { g.stack = null; g.stunT = 1.2; g.body.vel.set((Math.random() - 0.5) * 3, 3, (Math.random() - 0.5) * 3); });
    this.tower = [];
    this.camHeight = 1.0;
  }
  get towerSize() { return this.captured ? this.tower.length + 1 : 0; }
}

// =============================================================== FROG
function frogModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const green = mat('#46b83e', { roughness: 0.45 }), belly = mat('#d9f5b4', { roughness: 0.6 });
  const legB = new THREE.Group(); g.add(legB);
  B.add(g, G.sphere(0.45, 20, 14), green, { p: [0, 0.42, 0], s: [1.1, 0.82, 1.2] });
  B.add(g, G.sphere(0.4, 18, 12), belly, { p: [0, 0.36, 0.1], s: [1.0, 0.7, 1.15] });
  for (const s of [1, -1]) {
    B.add(g, G.sphere(0.17, 14, 10), green, { p: [s * 0.2, 0.72, 0.18] });
    B.add(g, G.sphere(0.13, 12, 10), eyeW(), { p: [s * 0.21, 0.76, 0.27] });
    B.add(g, G.sphere(0.07, 10, 8), pupil(), { p: [s * 0.22, 0.77, 0.37], s: [1, 1, 0.5] });
    B.add(legB, G.sphere(0.2, 12, 10), green, { p: [s * 0.4, 0.22, -0.22], s: [0.8, 0.7, 1.4] });
    B.add(legB, G.sphere(0.12, 10, 8), mat('#3a9a33'), { p: [s * 0.42, 0.06, 0.08], s: [1, 0.4, 1.6] });
    B.add(g, G.sphere(0.08, 10, 8), green, { p: [s * 0.28, 0.1, 0.42], s: [1, 0.5, 1.3] });
  }
  B.add(g, G.torus(0.22, 0.02, 6, 16, Math.PI), mat('#2a5a22'), { p: [0, 0.5, 0.5], r: [0, 0, Math.PI] });
  B.build({ merge: true });
  g.userData.legB = legB;
  return g;
}

export class Frog extends Creature {
  constructor(level, x, z, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x, y + 0.1, z, { radius: 0.5, height: 0.9, gravity: 36 });
    this.kind = 'frog';
    this.mesh = frogModel();
    this.model.add(this.mesh);
    this.hopT = 1 + Math.random() * 2;
    this.hatAnchor.position.set(0, 0.92, 0.12);
    this.mesh.add(this.hatAnchor);
    this.stacheAnchor = new THREE.Group();
    this.stacheAnchor.position.set(0, 0.5, 0.52);
    this.mesh.add(this.stacheAnchor);
    this.hatScale = 0.8; this.stacheScale = 0.75;
    this.captureHint = 'Captured Frog · Jump for a huge leap · Crouch to release';
    this.camHeight = 1.0;
  }
  update(dt) {
    this.t += dt;
    if (this.captured) return;
    const b = this.body;
    if (this.stunT > 0) this.stunT -= dt;
    this.hopT -= dt;
    if (b.grounded) {
      this.brake(dt, 12);
      if (this.hopT <= 0) {
        this.hopT = 1.5 + Math.random() * 2.5;
        const toHome = Math.hypot(this.home.x - b.pos.x, this.home.z - b.pos.z);
        const yaw = toHome > 4 ? Math.atan2(this.home.x - b.pos.x, this.home.z - b.pos.z) : Math.random() * TAU;
        this.facing = yaw;
        b.leaveGround(7);
        b.vel.x = Math.sin(yaw) * 2.5; b.vel.z = Math.cos(yaw) * 2.5;
        if (this.distToPlayer() < 25) this.game.audio.play('frog');
      }
    }
    this.physics(dt);
    this.animate(dt);
    this.syncModel();
  }
  animate() {
    const b = this.body;
    const air = !b.grounded;
    this.mesh.userData.legB.rotation.x = air ? 0.7 : 0;
    this.mesh.scale.set(air ? 0.92 : 1, air ? 1.15 : 1, air ? 0.92 : 1);
  }
  onPlayer(player, actor) {
    if (actor !== player || this.captured) return;
    if (isStomp(player, this)) { player.bounce(13); this.game.audio.play('frog'); }
  }
  onCap() { return 'capture'; }
  captureUpdate(dt, player) {
    const A = this.game.input.actions, b = this.body;
    if (b.grounded) {
      if (player.inputMag > 0) {
        const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
        this.facing = approachAngle(this.facing, yaw, 12 * dt);
        // hop along
        if (!this.hopping || this.hopping <= 0) {
          b.leaveGround(5.5);
          b.vel.x = Math.sin(this.facing) * 5.5 * player.inputMag; b.vel.z = Math.cos(this.facing) * 5.5 * player.inputMag;
          this.hopping = 0.05;
        }
      } else this.brake(dt, 14);
      if (A.jump.pressed) {
        b.leaveGround(21.5);
        const sp = Math.hypot(b.vel.x, b.vel.z);
        b.vel.x = Math.sin(this.facing) * Math.max(sp, 3) * (player.inputMag > 0 ? 1 : 0.2);
        b.vel.z = Math.cos(this.facing) * Math.max(sp, 3) * (player.inputMag > 0 ? 1 : 0.2);
        this.game.audio.play('frog');
        this.game.fx?.dust(b.pos.x, b.pos.y, b.pos.z, 8);
      }
    } else {
      if (player.inputMag > 0) {
        const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
        this.facing = approachAngle(this.facing, yaw, 4 * dt);
        b.vel.x = damp(b.vel.x, Math.sin(yaw) * 5.5 * player.inputMag, 3, dt);
        b.vel.z = damp(b.vel.z, Math.cos(yaw) * 5.5 * player.inputMag, 3, dt);
      }
    }
    if (this.hopping > 0) this.hopping -= dt;
    this.physics(dt);
    this.animate(dt);
    this.syncModel();
  }
}

// =============================================================== BULLET BILL & CANNON
function billModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const black = mat('#1d1d24', { roughness: 0.35, metalness: 0.4 });
  const gray = mat('#5c5c68', { roughness: 0.5, metalness: 0.5 });
  B.add(g, G.cyl(0.5, 0.5, 0.9, 22), black, { p: [0, 0, -0.05], r: [Math.PI / 2, 0, 0] });
  B.add(g, G.sphere(0.5, 22, 14, 0, Math.PI * 2, 0, Math.PI / 2), black, { p: [0, 0, 0.4], r: [Math.PI / 2, 0, 0] });
  B.add(g, G.cyl(0.52, 0.48, 0.18, 22), gray, { p: [0, 0, -0.55], r: [Math.PI / 2, 0, 0] });
  for (const s of [1, -1]) {
    B.add(g, G.sphere(0.13, 12, 10), eyeW(), { p: [s * 0.18, 0.16, 0.62], s: [0.8, 1.3, 0.5] });
    B.add(g, G.sphere(0.07, 10, 8), pupil(), { p: [s * 0.17, 0.15, 0.68], s: [0.8, 1.2, 0.5] });
    B.add(g, G.box(0.18, 0.05, 0.05), mat('#000'), { p: [s * 0.18, 0.33, 0.6], r: [0, 0, s * -0.4] });
    B.add(g, G.sphere(0.14, 10, 8), eyeW(), { p: [s * 0.52, -0.12, 0.05], s: [0.6, 0.8, 1.1] });
  }
  B.build({ merge: true });
  return g;
}

export class BulletBill extends Entity {
  constructor(level, x, y, z, yaw, cannon = null) {
    super(level, x, y, z);
    this.kind = 'bill';
    this.mesh = billModel();
    this.obj.add(this.mesh);
    this.facing = yaw;
    this.pitch = 0;
    this.radius = 0.55; this.height = 1.0;
    this.life = 10;
    this.speedV = 9;
    this.cannon = cannon;
    this.captured = false;
    this.hatAnchor = new THREE.Group(); this.hatAnchor.position.set(0, 0.5, 0.05); this.mesh.add(this.hatAnchor);
    this.stacheAnchor = new THREE.Group(); this.stacheAnchor.position.set(0, -0.05, 0.62); this.mesh.add(this.stacheAnchor);
    this.trailT = 0;
    this.captureHint = 'Captured Bullet Bill · Steer with move · Hold Jump to climb · Crouch to release';
    this.camHeight = 0.6;
    this.camDist = 1.15;
    this.rams = true;
    this.noAutoCam = false;
    this.grounded = false;
    this.pos.y -= 0.5;
  }
  get speed() { return this.speedV; }
  update(dt) {
    this.trailT += dt;
    if (this.trailT > 0.06) { this.trailT = 0; this.game.fx?.smoke(this.pos.x - Math.sin(this.facing) * 0.7, this.pos.y + 0.5, this.pos.z - Math.cos(this.facing) * 0.7, 1, 0.75); }
    if (this.captured) return;
    this.life -= dt;
    const p = this.game.player, actor = p.capture || p;
    // slow homing
    const dx = actor.pos.x - this.pos.x, dz = actor.pos.z - this.pos.z;
    this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 0.85 * dt);
    const ty = actor.pos.y + 0.4;
    this.pos.y += clamp(ty - this.pos.y, -1, 1) * dt;
    this.fly(dt);
    if (this.life <= 0) this.explode();
  }
  fly(dt) {
    const fx = Math.sin(this.facing), fz = Math.cos(this.facing);
    const step = this.speedV * dt;
    const hit = this.level.world.raycast(this.pos.x, this.pos.y + 0.5, this.pos.z, fx, 0, fz, step + 0.6, (c) => c.solid && !c.oneWay);
    if (hit) {
      const e = hit.c.entity;
      if (e && e.onSmash) e.onSmash(true);
      this.explode();
      return;
    }
    const g = this.level.heightAt(this.pos.x, this.pos.z);
    if (g > this.pos.y + 0.3) { this.explode(); return; }
    this.pos.x += fx * step; this.pos.z += fz * step;
    this.obj.position.copy(this.pos);
    this.obj.position.y += 0.5;
    this.obj.rotation.set(0, this.facing, 0);
    this.mesh.rotation.x = -this.pitch;
  }
  explode() {
    if (!this.alive) return;
    if (this.captured) { const p = this.game.player; this.captured = false; this.hatAnchor.clear(); this.stacheAnchor.clear(); this.game.endCapture(this, { y: this.pos.y + 0.6 }); }
    this.game.audio.play('explode');
    this.game.fx?.burst(this.pos.x, this.pos.y + 0.5, this.pos.z, 26, [1, 0.6, 0.2], 8, 0, 1.2, 4);
    this.game.fx?.smoke(this.pos.x, this.pos.y + 0.5, this.pos.z, 10, 0.35);
    this.game.cam.shake(0.2);
    // splash damage to enemies nearby
    for (const e of this.level.entities) {
      if (e === this || !e.alive) continue;
      const d = Math.hypot(e.pos.x - this.pos.x, e.pos.y - this.pos.y, e.pos.z - this.pos.z);
      if (d < 2.6) { if (e.onSmash) e.onSmash(true); else if (e instanceof Goomba) e.defeat(true); }
    }
    this.kill();
  }
  onPlayer(player, actor) {
    if (this.captured) return;
    if (actor !== player) { if (actor.rams) this.explode(); else { actor.captureHurt?.(this.pos); this.explode(); } return; }
    if (isStomp(player, this, 0.3)) {
      player.bounce();
      this.game.audio.play('stomp');
      this.game.fx?.smoke(this.pos.x, this.pos.y + 0.5, this.pos.z, 6, 0.4);
      this.kill();
      return;
    }
    player.hurt(this.pos);
    this.explode();
  }
  onCap() { return 'capture'; }
  onGroundPound() {}
  captureStart(player) {
    this.captured = true;
    this.life = 10;
    this.speedV = 15;
    // keep flying the way the bill was already heading (away from its cannon)
    this.hatAnchor.add(createCaptureHat(player.outfit, 0.8));
    this.stacheAnchor.add(createMustache(0.75));
  }
  captureUpdate(dt, player) {
    const A = this.game.input.actions;
    this.life -= dt;
    if (player.inputMag > 0) {
      const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
      this.facing = approachAngle(this.facing, yaw, 2.4 * dt);
    }
    const climb = A.jump.down ? 6.2 : -0.8;
    this.pitch = damp(this.pitch, A.jump.down ? 0.25 : -0.05, 6, dt);
    this.pos.y += climb * dt;
    this.mesh.visible = this.life > 2 || Math.floor(this.life * 10) % 2 === 0;
    this.fly(dt);
    if (this.alive && this.life <= 0) this.explode();
  }
  release(player, forced) {
    if (!this.captured) return;
    this.captured = false;
    this.hatAnchor.clear(); this.stacheAnchor.clear();
    this.game.endCapture(this, { y: this.pos.y + 0.8 });
    this.life = 0.6;
    this.speedV = 10;
  }
  captureHurt() { this.explode(); }
}

export class Cannon extends Entity {
  constructor(level, x, z, yaw, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x, y, z);
    this.kind = 'cannon';
    this.yaw = yaw;
    this.interval = opts.interval ?? 3.6;
    this.range = opts.range ?? 46;
    this.t = Math.random() * this.interval;
    const B = new ModelBuilder();
    const g = new THREE.Group();
    const black = mat('#222229', { roughness: 0.4, metalness: 0.5 }), gray = mat('#595964', { roughness: 0.5, metalness: 0.4 });
    B.add(g, roundedBox(1.8, 1.6, 1.8, 0.12), black, { p: [0, 0.8, 0] });
    B.add(g, G.cyl(0.62, 0.62, 1.5, 22), black, { p: [0, 2.05, 0.15], r: [Math.PI / 2, 0, 0] });
    B.add(g, G.cyl(0.7, 0.7, 0.2, 22), gray, { p: [0, 2.05, 0.9], r: [Math.PI / 2, 0, 0] });
    B.add(g, G.box(1.84, 0.2, 1.84), gray, { p: [0, 1.5, 0] });
    // skull emblem
    B.add(g, G.sphere(0.28, 12, 10), mat('#f2f2f2'), { p: [0, 0.85, 0.9], s: [1, 1, 0.3] });
    B.build({ merge: true });
    g.rotation.y = yaw;
    this.obj.add(g);
    this.radius = 0; this.height = 0;
    const c = Math.cos(yaw), s = Math.sin(yaw);
    this.addCollider(new BoxCollider(x, y + 0.8, z, 0.9, 0.8, 0.9, yaw));
    this.addCollider(new CylinderCollider(x + s * 0.15, z + c * 0.15, y + 1.4, y + 2.7, 0.7));
    this.muzzle = new THREE.Vector3(x + s * 1.2, y + 1.55, z + c * 1.2);
    this.bills = [];
  }
  update(dt) {
    this.t += dt;
    if (this.t < this.interval) return;
    this.t = 0;
    this.bills = this.bills.filter((b) => b.alive);
    if (this.bills.length >= 2) return;
    const d = this.distToPlayer();
    if (d > this.range || this.game.player.dead) return;
    const b = new BulletBill(this.level, this.muzzle.x, this.muzzle.y, this.muzzle.z, this.yaw, this);
    this.bills.push(b);
    if (d < 40) this.game.audio.play('cannon');
    this.game.fx?.smoke(this.muzzle.x, this.muzzle.y + 0.4, this.muzzle.z, 8, 0.3);
  }
}

// =============================================================== CHAIN CHOMP
function chompModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const black = mat('#141418', { roughness: 0.25, metalness: 0.3 });
  B.add(g, G.sphere(1.1, 28, 20), black, { p: [0, 1.1, 0] });
  for (const s of [1, -1]) {
    B.add(g, G.sphere(0.28, 14, 10), eyeW(), { p: [s * 0.42, 1.55, 0.86], s: [0.9, 1.1, 0.5] });
    B.add(g, G.sphere(0.12, 10, 8), pupil(), { p: [s * 0.4, 1.53, 1.0], s: [1, 1, 0.4] });
  }
  B.add(g, G.sphere(0.62, 20, 12), mat('#b8172b', { roughness: 0.6 }), { p: [0, 0.82, 0.62], s: [1.15, 0.55, 0.8] });
  for (let i = 0; i < 7; i++) {
    const a = -0.9 + i * 0.3;
    B.add(g, G.cone(0.1, 0.22, 6), eyeW(), { p: [Math.sin(a) * 0.68, 1.02, 0.64 + Math.cos(a) * 0.4], r: [Math.PI, 0, 0] });
    B.add(g, G.cone(0.09, 0.2, 6), eyeW(), { p: [Math.sin(a) * 0.66, 0.63, 0.64 + Math.cos(a) * 0.38] });
  }
  B.build({ merge: true });
  return g;
}

export class ChainChomp extends Creature {
  constructor(level, x, z, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x + 2, y + 0.1, z, { radius: 1.05, height: 2.1, gravity: 38, coins: 3 });
    this.kind = 'chomp';
    this.post = new THREE.Vector3(x, y, z);
    this.chainLen = opts.chain ?? 6.5;
    this.mesh = chompModel();
    this.model.add(this.mesh);
    // post
    const postG = new THREE.Group();
    const B = new ModelBuilder();
    B.add(postG, G.cyl(0.28, 0.32, 1.3, 10), mat('#8a5a2b', { roughness: 0.85 }), { p: [0, 0.65, 0] });
    B.add(postG, G.torus(0.3, 0.07, 8, 16), mat('#8a8a99', { metalness: 0.8, roughness: 0.3 }), { p: [0, 1.25, 0], r: [Math.PI / 2, 0, 0] });
    B.build({ merge: true });
    postG.position.copy(this.post);
    level.root.add(postG);
    this.postObj = postG;
    level.world.add(new CylinderCollider(x, z, y, y + 1.3, 0.3));
    // chain links (instanced)
    this.links = new THREE.InstancedMesh(new THREE.TorusGeometry(0.16, 0.06, 6, 12), mat('#7d7d8c', { metalness: 0.85, roughness: 0.3 }), 9);
    this.links.castShadow = true;
    this.links.frustumCulled = false;
    level.root.add(this.links);
    this.ai = 'idle'; this.aiT = 0;
    this.hatAnchor.position.set(0, 2.2, 0); this.mesh.add(this.hatAnchor);
    this.stacheAnchor = new THREE.Group(); this.stacheAnchor.position.set(0, 1.18, 1.05); this.mesh.add(this.stacheAnchor);
    this.hatScale = 1.4; this.stacheScale = 1.5;
    this.charge = 0;
    this.captureHint = 'Captured Chain Chomp · Hold Throw to pull back, release to launch · Crouch to release';
    this.camHeight = 1.8; this.camDist = 1.2;
    this.dashT = 0;
  }
  update(dt) {
    this.t += dt;
    this.updateChain();
    if (this.captured) return;
    const b = this.body;
    const p = this.game.player, actor = p.capture || p;
    const dPost = Math.hypot(actor.pos.x - this.post.x, actor.pos.z - this.post.z);
    this.aiT += dt;
    switch (this.ai) {
      case 'idle':
        if (b.grounded && this.aiT > 0.7) {
          this.aiT = 0;
          const a = Math.random() * TAU;
          b.leaveGround(5);
          const tx = this.post.x + Math.cos(a) * 3 - b.pos.x, tz = this.post.z + Math.sin(a) * 3 - b.pos.z;
          const l = Math.hypot(tx, tz) || 1;
          b.vel.x = (tx / l) * 2.5; b.vel.z = (tz / l) * 2.5;
        }
        if (dPost < this.chainLen + 3 && !p.dead && actor !== this && this.stunT <= 0 && Math.abs(actor.pos.y - b.pos.y) < 3) { this.ai = 'windup'; this.aiT = 0; }
        if (b.grounded) this.facing = approachAngle(this.facing, Math.atan2(actor.pos.x - b.pos.x, actor.pos.z - b.pos.z), 3 * dt);
        break;
      case 'windup':
        this.facing = approachAngle(this.facing, Math.atan2(actor.pos.x - b.pos.x, actor.pos.z - b.pos.z), 6 * dt);
        this.brake(dt);
        this.mesh.position.z = -Math.min(1, this.aiT / 0.5) * 0.4;
        if (this.aiT > 0.55) { this.ai = 'lunge'; this.aiT = 0; this.mesh.position.z = 0; this.game.audio.play('chomp'); b.vel.x = Math.sin(this.facing) * 17; b.vel.z = Math.cos(this.facing) * 17; }
        break;
      case 'lunge':
        if (this.aiT > 0.5) { this.ai = 'retract'; this.aiT = 0; }
        break;
      case 'retract': {
        const tx = this.post.x - b.pos.x, tz = this.post.z - b.pos.z;
        this.walk(dt, Math.atan2(tx, tz), 3, 6);
        if (this.aiT > 1.0) { this.ai = 'idle'; this.aiT = 0; }
        break;
      }
    }
    if (this.stunT > 0) this.stunT -= dt;
    if (b.grounded && this.ai !== 'lunge' && this.ai !== 'retract' && this.ai !== 'windup') this.brake(dt, 4);
    this.physics(dt);
    this.tether();
    this.syncModel();
    this.mesh.rotation.x = this.ai === 'lunge' ? -0.2 : 0;
  }
  tether() {
    const b = this.body;
    const dx = b.pos.x - this.post.x, dz = b.pos.z - this.post.z;
    const d = Math.hypot(dx, dz);
    if (d > this.chainLen) {
      const k = this.chainLen / d;
      b.pos.x = this.post.x + dx * k; b.pos.z = this.post.z + dz * k;
      const nx = dx / d, nz = dz / d;
      const vn = b.vel.x * nx + b.vel.z * nz;
      if (vn > 0) { b.vel.x -= vn * nx * 1.3; b.vel.z -= vn * nz * 1.3; if (vn > 8) this.game.audio.play('chain'); }
    }
  }
  updateChain() {
    const b = this.body;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1);
    const a = new THREE.Vector3(this.post.x, this.post.y + 1.25, this.post.z), c = new THREE.Vector3(b.pos.x, b.pos.y + 0.9, b.pos.z);
    const n = 9;
    const dir = c.clone().sub(a);
    const len = dir.length();
    const sag = Math.max(0, this.chainLen - len) * 0.35 + 0.2;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      V.copy(a).addScaledVector(dir, t);
      V.y -= Math.sin(t * Math.PI) * sag;
      V.y = Math.max(V.y, this.level.groundAt(V.x, V.z, V.y + 2) + 0.12);
      q.setFromEuler(new THREE.Euler(i % 2 ? Math.PI / 2 : 0, Math.atan2(dir.x, dir.z), 0, 'YXZ'));
      m.compose(V, q, s);
      this.links.setMatrixAt(i, m);
    }
    this.links.instanceMatrix.needsUpdate = true;
  }
  onPlayer(player, actor) {
    if (this.captured) return;
    if (actor !== player) return;
    if (isStomp(player, this, 0.7)) { player.bounce(15); this.game.audio.play('stomp'); return; }
    player.hurt(this.pos);
  }
  onCap() { return 'capture'; }
  onGroundPound() {}
  captureUpdate(dt, player) {
    const A = this.game.input.actions, b = this.body;
    if (this.dashT > 0) {
      this.dashT -= dt;
      // smash things in our path
      for (const e of this.level.entities) {
        if (e === this || !e.alive) continue;
        const d = Math.hypot(e.pos.x - b.pos.x, e.pos.z - b.pos.z);
        if (d < 2.2 && Math.abs(e.pos.y - b.pos.y) < 2.5) {
          if (e.onSmash) e.onSmash(true);
          else if (e.defeat && !(e instanceof ChainChomp)) e.defeat(true);
        }
      }
      if (this.dashT <= 0) this.brake(dt, 20);
    } else if (A.throw.down) {
      // pull back
      this.charge = Math.min(1, this.charge + dt / 0.7);
      if (player.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(player.inputDir.x, player.inputDir.z), 5 * dt);
      // back away from the launch direction while charging
      b.vel.x = damp(b.vel.x, -Math.sin(this.facing) * 2.5 * this.charge, 8, dt);
      b.vel.z = damp(b.vel.z, -Math.cos(this.facing) * 2.5 * this.charge, 8, dt);
      this.mesh.scale.set(1 + this.charge * 0.12, 1 - this.charge * 0.1, 1 + this.charge * 0.12);
    } else if (this.charge > 0.25) {
      this.dashT = 0.35 + this.charge * 0.35;
      b.vel.x = Math.sin(this.facing) * 24; b.vel.z = Math.cos(this.facing) * 24;
      this.charge = 0;
      this.mesh.scale.set(1, 1, 1);
      this.game.audio.play('chomp');
      this.game.cam.shake(0.15);
    } else {
      this.charge = 0;
      this.mesh.scale.set(1, 1, 1);
      if (player.inputMag > 0) {
        const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
        this.walk(dt, yaw, 3.5 * player.inputMag, 6, 16);
        if (b.grounded && this.speed > 1) b.leaveGround(3.5);
      } else this.brake(dt, 8);
      if (b.grounded && A.jump.pressed) b.leaveGround(9);
    }
    this.physics(dt);
    this.tether();
    this.syncModel();
  }
  onReleased() { this.charge = 0; this.dashT = 0; this.mesh.scale.set(1, 1, 1); }
  kill() { super.kill(); this.links.removeFromParent(); this.postObj.removeFromParent(); }
}

// =============================================================== PODOBOO (lava bubble)
export class Podoboo extends Creature {
  constructor(level, x, z, lavaY, opts = {}) {
    super(level, x, lavaY - 0.6, z, { radius: 0.5, height: 1.0, gravity: 30, coins: 0 });
    this.kind = 'podoboo';
    this.lavaY = lavaY;
    this.lavaProof = true;
    const B = new ModelBuilder();
    const g = new THREE.Group();
    B.add(g, G.sphere(0.5, 20, 14), mat('#ff7a1a', { emissive: '#ff5500', emissiveIntensity: 1.4, roughness: 0.4 }), { p: [0, 0.5, 0] });
    B.add(g, G.sphere(0.36, 16, 12), mat('#ffe066', { emissive: '#ffcc33', emissiveIntensity: 1.6 }), { p: [0, 0.5, 0.18] });
    for (const s of [1, -1]) B.add(g, G.sphere(0.07, 8, 6), mat('#2a0a00'), { p: [s * 0.15, 0.62, 0.48], s: [0.8, 1.4, 0.5] });
    B.build({ merge: true });
    this.mesh = g;
    this.model.add(g);
    this.glow = glowSprite('#ff8a20', 2.4, 0.5);
    this.glow.position.y = 0.5;
    this.model.add(this.glow);
    this.waitT = opts.delay ?? Math.random() * 2;
    this.state = 'wait';
    this.hatAnchor.position.set(0, 1.0, 0); this.mesh.add(this.hatAnchor);
    this.stacheAnchor = new THREE.Group(); this.stacheAnchor.position.set(0, 0.38, 0.47); this.mesh.add(this.stacheAnchor);
    this.hatScale = 0.8; this.stacheScale = 0.7;
    this.jumpV = opts.jump ?? 17;
    this.captureHint = 'Captured Lava Bubble · Swim through lava, Jump to leap · Crouch to release';
    this.camHeight = 1.0;
  }
  update(dt) {
    this.t += dt;
    if (this.captured) return;
    const b = this.body;
    this.waitT -= dt;
    if (this.state === 'wait') {
      this.obj.visible = false;
      b.pos.y = this.lavaY - 1.2;
      if (this.waitT <= 0 && this.distToPlayer() < 40) { this.state = 'jump'; b.vel.set(0, this.jumpV, 0); b.pos.y = this.lavaY - 0.3; this.obj.visible = true; this.game.fx?.embers(b.pos.x, this.lavaY, b.pos.z, 6); }
    } else {
      b.vel.y -= 30 * dt;
      b.pos.addScaledVector(b.vel, dt);
      if (b.pos.y < this.lavaY - 0.4 && b.vel.y < 0) { this.state = 'wait'; this.waitT = 1.8 + Math.random() * 1.6; this.game.fx?.embers(b.pos.x, this.lavaY, b.pos.z, 6); }
      if (Math.random() < 0.3) this.game.fx?.embers(b.pos.x, b.pos.y + 0.3, b.pos.z, 1);
    }
    this.mesh.rotation.x = b.vel.y < 0 ? Math.PI : 0;
    this.syncModel();
  }
  onPlayer(player, actor) {
    if (this.captured || this.state === 'wait') return;
    if (actor !== player) return;
    player.hurt(this.pos, { burn: true });
  }
  onCap() { return this.state === 'wait' ? undefined : 'capture'; }
  captureStart(player) { super.captureStart(player); this.mesh.rotation.x = 0; this.state = 'captured'; }
  captureUpdate(dt, player) {
    const A = this.game.input.actions, b = this.body;
    const lava = this.level.lavaAt(b.pos.x, b.pos.z);
    const inLava = lava > -Infinity && b.pos.y < lava + 0.2;
    if (inLava) {
      const target = lava - 0.45;
      b.vel.y = damp(b.vel.y, (target - b.pos.y) * 8, 8, dt);
      const sp = 7.5 * player.inputMag;
      if (player.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(player.inputDir.x, player.inputDir.z), 8 * dt);
      b.vel.x = damp(b.vel.x, Math.sin(this.facing) * sp, 6, dt);
      b.vel.z = damp(b.vel.z, Math.cos(this.facing) * sp, 6, dt);
      if (A.jump.pressed) { b.vel.y = 15; this.game.audio.play('fire'); }
      if (Math.random() < 0.5) this.game.fx?.embers(b.pos.x, lava, b.pos.z, 1);
      b.pos.addScaledVector(b.vel, dt);
      b.grounded = false;
      // keep out of walls
      this.level.world.pushOut(b.pos, b.radius, b.pos.y + 0.5, b.pos.y + 1.0);
    } else {
      if (player.inputMag > 0) {
        const yaw = Math.atan2(player.inputDir.x, player.inputDir.z);
        this.facing = approachAngle(this.facing, yaw, 6 * dt);
        b.vel.x = damp(b.vel.x, Math.sin(yaw) * 4 * player.inputMag, 4, dt);
        b.vel.z = damp(b.vel.z, Math.cos(yaw) * 4 * player.inputMag, 4, dt);
      } else if (b.grounded) this.brake(dt, 10);
      if (b.grounded && A.jump.pressed) b.leaveGround(9);
      b.vel.y = Math.max(-28, b.vel.y - 30 * dt);
      b.move(dt);
      if (b.pos.y < this.level.killYAt(b.pos.x, b.pos.z)) this.fellOut();
    }
    this.syncModel();
  }
  get swimming() { return true; }
  onReleased(player) { this.state = 'jump'; this.body.vel.y = 6; }
}

// =============================================================== THWOMP
export class Thwomp extends Entity {
  constructor(level, x, yHome, z, opts = {}) {
    super(level, x, yHome, z);
    this.kind = 'thwomp';
    this.home = yHome;
    this.w = 2.6; this.h = 2.6; this.d = 1.6;
    const g = new THREE.Group();
    const B = new ModelBuilder();
    const stone = mat('#8b93a6', { roughness: 0.75 });
    B.add(g, roundedBox(this.w, this.h, this.d, 0.12), stone, { p: [0, this.h / 2, 0] });
    for (const s of [1, -1]) {
      for (let i = 0; i < 3; i++) B.add(g, G.cone(0.25, 0.5, 4), stone, { p: [s * (this.w / 2 + 0.2), 0.5 + i * 0.8, 0], r: [0, 0, -s * Math.PI / 2] });
      B.add(g, G.sphere(0.25, 12, 10), eyeW(), { p: [s * 0.55, 1.65, this.d / 2 + 0.02], s: [1.1, 0.7, 0.3] });
      B.add(g, G.sphere(0.12, 10, 8), pupil(), { p: [s * 0.5, 1.6, this.d / 2 + 0.08], s: [1, 0.8, 0.3] });
      B.add(g, G.box(0.6, 0.12, 0.1), mat('#3a3f4c'), { p: [s * 0.55, 1.98, this.d / 2 + 0.05], r: [0, 0, s * 0.35] });
    }
    B.add(g, G.box(1.3, 0.25, 0.1), mat('#3a3f4c'), { p: [0, 0.85, this.d / 2 + 0.05] });
    for (let i = 0; i < 5; i++) B.add(g, G.cone(0.08, 0.16, 4), eyeW(), { p: [-0.5 + i * 0.25, 0.92, this.d / 2 + 0.08] });
    B.build({ merge: true });
    g.rotation.y = opts.rot || 0;
    this.obj.add(g);
    this.radius = 1.5; this.height = this.h;
    const c = new BoxCollider(x, yHome + this.h / 2, z, this.w / 2, this.h / 2, this.d / 2, opts.rot || 0);
    c.dynamic = true;
    this.collider = this.addCollider(c);
    this.state = 'wait'; this.t = 0; this.vy = 0;
    this.floorY = level.world.groundBelow(x, z, yHome - 0.1)?.y ?? yHome - 8;
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player, a = p.capture || p;
    switch (this.state) {
      case 'wait': {
        const d = Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
        this.obj.position.x = this.pos.x + (d < 5 ? Math.sin(this.t * 40) * 0.03 : 0);
        if (d < 2.6 && a.pos.y < this.pos.y && !p.dead) { this.state = 'fall'; this.vy = 0; }
        break;
      }
      case 'fall':
        this.vy -= 70 * dt;
        this.pos.y += this.vy * dt;
        if (this.pos.y <= this.floorY) {
          this.pos.y = this.floorY; this.state = 'rest'; this.t = 0;
          this.game.audio.play('gpland');
          if (this.distToPlayer() < 20) this.game.cam.shake(0.3);
          this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 16);
        }
        break;
      case 'rest': if (this.t > 1.1) this.state = 'rise'; break;
      case 'rise':
        this.pos.y = Math.min(this.home, this.pos.y + 3.5 * dt);
        if (this.pos.y >= this.home) { this.state = 'wait'; this.t = 0; }
        break;
    }
    this.collider.setTransform(this.pos.x, this.pos.y + this.h / 2, this.pos.z);
    this.obj.position.y = this.pos.y;
    if (this.state !== 'wait') this.obj.position.x = this.pos.x;
  }
  onPlayer(player, actor) {
    if (this.state !== 'fall') return;
    const top = this.pos.y + this.h;
    if ((actor.pos.y ?? 0) > top - 0.3) return;
    if (actor === player) player.hurt(this.pos, { damage: 1 });
    else actor.captureHurt?.(this.pos);
  }
}

// =============================================================== FIRE BAR
export class FireBar extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.kind = 'firebar';
    this.n = opts.n ?? 6;
    this.speed = opts.speed ?? 1.6;
    this.angle = opts.phase ?? 0;
    this.spacing = 0.7;
    this.vertical = !!opts.vertical;
    const core = new THREE.Mesh(roundedBox(1, 1, 1, 0.08), mat('#6b5a4a', { roughness: 0.8 }));
    core.castShadow = true;
    this.obj.add(core);
    this.addCollider(new BoxCollider(x, y, z, 0.5, 0.5, 0.5));
    this.balls = [];
    const ballMat = mat('#ffb020', { emissive: '#ff7a00', emissiveIntensity: 2.2, roughness: 0.4 });
    for (let i = 1; i <= this.n; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), ballMat);
      const gl = glowSprite('#ff9030', 1.4, 0.55);
      b.add(gl);
      this.obj.add(b);
      this.balls.push(b);
    }
    this.radius = this.n * this.spacing + 0.5; this.height = 1;
  }
  update(dt) {
    this.angle += this.speed * dt;
    const p = this.game.player, a = p.capture || p;
    for (let i = 0; i < this.balls.length; i++) {
      const r = (i + 1) * this.spacing;
      const bx = Math.cos(this.angle) * r, bz = Math.sin(this.angle) * r;
      if (this.vertical) this.balls[i].position.set(bx, bz, 0); else this.balls[i].position.set(bx, 0, bz);
      // collision with Mario's body
      const wx = this.pos.x + this.balls[i].position.x, wy = this.pos.y + this.balls[i].position.y, wz = this.pos.z + this.balls[i].position.z;
      const dx = a.pos.x - wx, dz = a.pos.z - wz;
      const yb = clamp(wy, a.pos.y, a.pos.y + (a.height ?? 1.5));
      const dy = yb - wy;
      if (dx * dx + dz * dz + dy * dy < 0.7 * 0.7 && !p.dead) {
        if (a === p) p.hurt({ x: wx, z: wz }, { burn: true });
        else a.captureHurt?.({ x: wx, z: wz });
      }
    }
  }
}

// =============================================================== PIRANHA PLANT
export class Piranha extends Entity {
  constructor(level, x, z, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x, y, z);
    this.kind = 'piranha';
    const g = new THREE.Group();
    const B = new ModelBuilder();
    B.add(g, G.cyl(0.75, 0.6, 0.9, 18), mat('#3a8f3a', { roughness: 0.5 }), { p: [0, 0.45, 0] });
    B.add(g, G.cyl(0.82, 0.82, 0.18, 18), mat('#2f7a30'), { p: [0, 0.92, 0] });
    B.build({ merge: true });
    this.obj.add(g);
    this.stem = new THREE.Group();
    this.stem.position.y = 0.9;
    this.obj.add(this.stem);
    const head = new THREE.Group();
    const H = new ModelBuilder();
    const red = mat('#d8202a', { roughness: 0.45 });
    H.add(this.stem, G.cyl(0.1, 0.13, 1.3, 8), mat('#2f9a35'), { p: [0, 0.65, 0] });
    for (const s of [1, -1]) H.add(this.stem, G.sphere(0.3, 10, 8), mat('#3fb045'), { p: [s * 0.35, 0.3, 0], s: [1.2, 0.3, 0.6], r: [0, 0, s * 0.3] });
    H.build({ merge: true });
    this.head = head;
    head.position.y = 1.5;
    this.stem.add(head);
    const top = new THREE.Group(), bot = new THREE.Group();
    head.add(top, bot);
    const HB = new ModelBuilder();
    HB.add(top, new THREE.SphereGeometry(0.62, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), red, {});
    HB.add(bot, new THREE.SphereGeometry(0.62, 18, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), red, {});
    HB.add(top, G.cyl(0.6, 0.6, 0.04, 18), eyeW(), { p: [0, 0.02, 0] });
    HB.add(bot, G.cyl(0.6, 0.6, 0.04, 18), eyeW(), { p: [0, -0.02, 0] });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      HB.add(top, G.sphere(0.1, 8, 6), eyeW(), { p: [Math.cos(a) * 0.45, 0.38, Math.sin(a) * 0.45], s: [1, 0.4, 1] });
    }
    HB.build({ merge: true });
    top.rotation.x = -0.2; bot.rotation.x = 0.2;
    this.jawTop = top; this.jawBot = bot;
    head.rotation.x = Math.PI / 2;
    this.radius = 0.9; this.height = 2.2;
    this.addCollider(new CylinderCollider(x, z, y, y + 1.0, 0.8));
    this.t = Math.random() * 5;
    this.bite = 0;
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player, a = p.capture || p;
    const dx = a.pos.x - this.pos.x, dz = a.pos.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    this.stem.rotation.y = Math.atan2(dx, dz);
    const open = 0.25 + Math.abs(Math.sin(this.t * 4)) * 0.45;
    if (d < 4 && !p.dead) this.bite = Math.min(1, this.bite + dt * 3); else this.bite = Math.max(0, this.bite - dt * 2);
    this.stem.rotation.x = this.bite * 0.6 + Math.sin(this.t * 2) * 0.08;
    this.jawTop.rotation.x = -open; this.jawBot.rotation.x = open;
    if (this.bite > 0.6 && d < 2.6 && Math.abs(a.pos.y - this.pos.y - 1) < 2) {
      if (a === p) p.hurt(this.pos); else a.captureHurt?.(this.pos);
    }
  }
  onCap() { this.defeat(); return 'return'; }
  onGroundPound() { this.defeat(); }
  onPlayer(player, actor) { if (actor === player && isStomp(player, this, 0.6)) { player.bounce(); this.defeat(); } }
  onSmash() { this.defeat(); }
  defeat() {
    if (!this.alive) return;
    this.game.audio.play('poof');
    this.game.fx?.smoke(this.pos.x, this.pos.y + 1.5, this.pos.z, 8, 0.85);
    for (let i = 0; i < 2; i++) new PopCoin(this.level, this.pos.x, this.pos.y + 1.5, this.pos.z, { vx: (Math.random() - 0.5) * 3, vz: (Math.random() - 0.5) * 3 });
    this.kill();
  }
}
