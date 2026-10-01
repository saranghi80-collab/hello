// Cappy: the throwable cap. Flies out, hovers (longer while the button is held), returns.
// Hits entities (collect / defeat / capture) and acts as a springboard for Mario.
import * as THREE from 'three';
import { createCappy } from './mario-model.js';
import { easeOutCubic, clamp } from '../core/math.js';

const TMP = new THREE.Vector3();

export class Cappy {
  constructor(game, player) {
    this.game = game;
    this.player = player;
    this.mesh = createCappy(player.outfit);
    this.mesh.visible = false;
    game.scene.add(this.mesh);
    this.state = 'held';
    this.t = 0;
    this.pos = new THREE.Vector3();
    this.start = new THREE.Vector3();
    this.dir = new THREE.Vector3();
    this.range = 6.4;
    this.reach = 0;
    this.holdT = 0;
    this.radius = 0.62;
    this.hit = new Set();
    this.spin = 0;
    this.trailT = 0;
  }

  setOutfit(name) {
    const vis = this.mesh.visible;
    this.mesh.removeFromParent();
    this.mesh = createCappy(name);
    this.mesh.visible = vis;
    this.game.scene.add(this.mesh);
  }

  isHeld() { return this.state === 'held'; }
  isOut() { return this.state !== 'held'; }

  reset() {
    this.state = 'held';
    this.mesh.visible = false;
    this.player.model.setCapVisible(true);
  }

  // Soft lock-on: pick a capturable/hittable thing near the throw direction.
  findTarget(p, dx, dz) {
    let best = null, bestScore = Infinity;
    for (const e of this.player.level.entities) {
      if (!e.alive || !e.onCap || e === this.player.capture) continue;
      const homing = e.captureStart || e.kind === 'boss' || e.kind === 'fist';
      if (!homing) continue;
      const ex = e.pos.x - p.x, ez = e.pos.z - p.z;
      const d = Math.hypot(ex, ez);
      if (d < 0.5 || d > this.range + 3.5) continue;
      const dot = (ex * dx + ez * dz) / d;
      if (dot < Math.cos(0.6)) continue;
      const ey = e.pos.y + (e.height ?? 1) * 0.5 - (p.y + 0.9);
      if (Math.abs(ey) > 3) continue;
      const score = d * (2 - dot);
      if (score < bestScore) { bestScore = score; best = e; }
    }
    return best;
  }

  throw(player, dx, dz) {
    const p = player.pos;
    this.state = 'out';
    this.t = 0;
    this.target = this.findTarget(p, dx, dz);
    if (this.target) {
      const e = this.target;
      const ex = e.pos.x - p.x, ez = e.pos.z - p.z, d = Math.hypot(ex, ez) || 1;
      dx = ex / d; dz = ez / d;
      player.facing = Math.atan2(dx, dz);
    }
    this.start.set(p.x + dx * 0.4, p.y + (player.grounded ? 0.95 : 0.85), p.z + dz * 0.4);
    if (this.target) this.start.y = Math.max(p.y + 0.3, Math.min(p.y + 2.2, this.target.pos.y + (this.target.height ?? 1) * 0.5));
    this.pos.copy(this.start);
    this.dir.set(dx, 0, dz).normalize();
    this.reach = this.target ? Math.min(this.range + 3.5, Math.hypot(this.target.pos.x - p.x, this.target.pos.z - p.z) + 0.6) : this.range;
    // stop early at walls
    const hit = this.player.level.world.raycast(this.start.x, this.start.y, this.start.z, dx, 0, dz, this.range + 0.5, (c) => c.solid && !c.oneWay && c.type !== 'heightfield');
    if (hit) this.reach = Math.max(0.6, hit.t - 0.45);
    this.hit.clear();
    this.holdT = 0;
    this.mesh.visible = true;
    this.mesh.position.copy(this.pos);
  }

  recall() { if (this.state === 'out' || this.state === 'hold') { this.state = 'return'; this.t = 0; } }

  update(dt) {
    if (this.state === 'held') { this.mesh.visible = false; return; }
    const game = this.game, player = this.player;
    const A = game.input.actions;
    this.t += dt;
    this.spin += dt * 24;
    switch (this.state) {
      case 'out': {
        const dur = 0.24;
        const k = clamp(this.t / dur, 0, 1);
        const d = this.reach * easeOutCubic(k);
        this.pos.set(this.start.x + this.dir.x * d, this.start.y, this.start.z + this.dir.z * d);
        // home in on a moving target
        const tg = this.target;
        if (tg && tg.alive) {
          const tx = tg.pos.x, tz = tg.pos.z, ty = tg.pos.y + (tg.height ?? 1) * 0.5;
          const w = easeOutCubic(k);
          this.pos.x += (tx - this.pos.x) * w * 0.85;
          this.pos.z += (tz - this.pos.z) * w * 0.85;
          this.pos.y += (ty - this.pos.y) * w * 0.85;
        }
        if (k >= 1) { this.state = 'hold'; this.holdT = 0; this.start.y = this.pos.y; }
        break;
      }
      case 'hold': {
        this.holdT += dt;
        this.pos.y = this.start.y + Math.sin(this.holdT * 9) * 0.06;
        const held = A.throw.down && !player.capture;
        if ((this.holdT > 0.5 && !held) || this.holdT > 1.25) { this.state = 'return'; this.t = 0; }
        break;
      }
      case 'return': {
        const tgt = TMP.set(player.pos.x, player.pos.y + 1.25, player.pos.z);
        const sp = 16 + this.t * 60;
        const dx = tgt.x - this.pos.x, dy = tgt.y - this.pos.y, dz = tgt.z - this.pos.z;
        const dist = Math.hypot(dx, dy, dz);
        if (dist < 0.6 || dist < sp * dt) {
          this.state = 'held';
          this.mesh.visible = false;
          if (!player.capture) player.model.setCapVisible(true);
          return;
        }
        this.pos.x += (dx / dist) * sp * dt; this.pos.y += (dy / dist) * sp * dt; this.pos.z += (dz / dist) * sp * dt;
        break;
      }
    }
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.set(0, this.spin, 0);
    this.trailT += dt;
    if (this.trailT > 0.05 && this.state !== 'return') { this.trailT = 0; game.fx?.sparkle(this.pos.x, this.pos.y, this.pos.z, 1, [1, 1, 1], 0.3); }

    if (this.state === 'return') return;
    // springboard
    if (!player.capture && !player.grounded && !player.dead && (this.state === 'hold' || this.t > 0.1)) {
      const st = player.state;
      if (st === 'air' || st === 'dive' || st === 'gpStart' || st === 'wallSlide') {
        const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z;
        const feet = player.pos.y;
        // generous: any overlap between Mario's body and Cappy counts
        if (dx * dx + dz * dz < 1.05 * 1.05 && feet < this.pos.y + 0.65 && feet + 1.55 > this.pos.y - 0.45) {
          if (player.capBounce()) { this.state = 'return'; this.t = 0; game.audio.play('capbounce'); return; }
        }
      }
    }
    // entity hits
    const ents = player.level.entities;
    for (let i = 0; i < ents.length; i++) {
      const e = ents[i];
      if (!e.alive || !e.onCap || this.hit.has(e)) continue;
      const r = this.radius + e.radius;
      const dx = e.pos.x - this.pos.x, dz = e.pos.z - this.pos.z;
      if (dx * dx + dz * dz > r * r) continue;
      if (this.pos.y < e.pos.y - 0.6 || this.pos.y > e.pos.y + e.height + 0.6) continue;
      this.hit.add(e);
      const res = e.onCap(this);
      if (res === 'capture') {
        this.state = 'held';
        this.mesh.visible = false;
        game.startCapture(e);
        return;
      }
      if (res === 'stop') { this.state = 'hold'; this.holdT = 0.4; this.start.y = this.pos.y; }
      if (res === 'return') { this.state = 'return'; this.t = 0; return; }
    }
  }
}
