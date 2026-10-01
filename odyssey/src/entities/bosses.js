// Boss encounters.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { Goomba } from './enemies.js';
import { isStomp } from './creature.js';
import { ModelBuilder, G, mat } from '../gfx/model.js';
import { approachAngle, clamp, TAU, damp } from '../core/math.js';

// Expanding shockwave ring on the ground; jump over it.
export class Shockwave extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.r = 0.5; this.maxR = opts.maxR ?? 16; this.speed = opts.speed ?? 9;
    this.mesh = new THREE.Mesh(new THREE.TorusGeometry(1, 0.18, 6, 48), new THREE.MeshStandardMaterial({ color: opts.color || '#ffcf5a', emissive: opts.color || '#ff9a2a', emissiveIntensity: 1.2, transparent: true, opacity: 0.9 }));
    this.mesh.rotation.x = Math.PI / 2;
    this.obj.add(this.mesh);
    this.radius = 0; this.height = 0;
    this.hitDone = false;
  }
  update(dt) {
    this.r += this.speed * dt;
    this.mesh.scale.set(this.r, this.r, 1);
    this.mesh.material.opacity = 0.9 * (1 - this.r / this.maxR);
    const p = this.game.player, a = p.capture || p;
    const d = Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
    if (!this.hitDone && Math.abs(d - this.r) < 0.55 && a.pos.y < this.pos.y + 0.6 && !p.dead) {
      this.hitDone = true;
      if (a === p) p.hurt(this.pos); else a.captureHurt?.(this.pos);
    }
    if (this.r >= this.maxR) this.kill();
  }
}

function kingModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const body = new THREE.Group(); g.add(body);
  const feetL = new THREE.Group(), feetR = new THREE.Group(); g.add(feetL, feetR);
  feetL.position.x = 0.55; feetR.position.x = -0.55;
  const foot = mat('#4a2a14', { roughness: 0.7 });
  B.add(feetL, G.sphere(0.5, 14, 10), foot, { p: [0, 0.28, 0.15], s: [1, 0.6, 1.4] });
  B.add(feetR, G.sphere(0.5, 14, 10), foot, { p: [0, 0.28, 0.15], s: [1, 0.6, 1.4] });
  B.add(body, G.sphere(0.9, 18, 14), mat('#f3d6a8', { roughness: 0.7 }), { p: [0, 1.05, 0], s: [1, 0.9, 0.95] });
  B.add(body, G.sphere(1.6, 26, 18), mat('#8e4f24', { roughness: 0.55 }), { p: [0, 2.05, 0], s: [1, 0.72, 1] });
  for (const s of [1, -1]) {
    B.add(body, G.sphere(0.3, 14, 10), mat('#fff'), { p: [s * 0.42, 2.0, 1.32], s: [0.85, 1.35, 0.5], r: [0, s * 0.3, 0] });
    B.add(body, G.sphere(0.15, 10, 8), mat('#111'), { p: [s * 0.4, 1.95, 1.47], s: [0.8, 1.3, 0.5] });
    B.add(body, G.box(0.65, 0.18, 0.18), mat('#2a160a'), { p: [s * 0.45, 2.48, 1.35], r: [0.2, s * -0.2, s * -0.45] });
    B.add(body, G.cone(0.14, 0.3, 6), mat('#fff'), { p: [s * 0.3, 1.35, 0.95] });
  }
  // royal cape
  B.add(body, new THREE.CylinderGeometry(1.0, 1.5, 1.4, 20, 1, true, Math.PI * 0.6, Math.PI * 0.8), mat('#b0182a', { roughness: 0.7, side: THREE.DoubleSide }), { p: [0, 1.0, -0.1] });
  B.build({ merge: true });
  // helmet (separate so it can fly off)
  const helmet = new THREE.Group();
  const H = new ModelBuilder();
  const steel = mat('#5d6475', { roughness: 0.3, metalness: 0.8 });
  H.add(helmet, new THREE.SphereGeometry(1.65, 24, 12, 0, TAU, 0, Math.PI / 2), steel, { s: [1, 0.62, 1] });
  H.add(helmet, G.cyl(1.68, 1.68, 0.2, 24), mat('#ffcf3a', { metalness: 0.8, roughness: 0.3 }), { p: [0, 0.05, 0] });
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * TAU;
    H.add(helmet, G.cone(0.22, 0.7, 8), mat('#d8dde8', { metalness: 0.9, roughness: 0.25 }), { p: [Math.cos(a) * 0.9, 0.9, Math.sin(a) * 0.9], r: [Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4] });
  }
  H.add(helmet, G.cone(0.3, 0.9, 8), mat('#d8dde8', { metalness: 0.9, roughness: 0.25 }), { p: [0, 1.3, 0] });
  H.build({ merge: true });
  helmet.position.y = 2.3;
  body.add(helmet);
  g.userData = { body, feetL, feetR, helmet };
  return g;
}

export class GoombaKing extends Entity {
  constructor(level, x, z, opts = {}) {
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.center = new THREE.Vector3(x, y, z);
    this.kind = 'boss';
    this.arenaR = opts.arena ?? 16;
    this.moon = opts.moon;
    this.name = opts.name || 'King Goombo';
    this.model = kingModel();
    this.obj.add(this.model);
    this.radius = 1.7; this.height = 3.4;
    this.hp = 3;
    this.state = 'dormant';
    this.st = 0;
    this.facing = Math.PI;
    this.vy = 0;
    this.helmetOn = true;
    this.helmetFly = null;
    this.minions = [];
    this.obj.visible = !opts.hidden;
    if (this.game.save.flag('boss_' + level.id)) { this.kill(); }
  }
  setState(s) { this.state = s; this.st = 0; }
  update(dt) {
    this.st += dt;
    const p = this.game.player, a = p.capture || p;
    const dx = a.pos.x - this.pos.x, dz = a.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const inArena = Math.hypot(a.pos.x - this.center.x, a.pos.z - this.center.z) < this.arenaR && Math.abs(a.pos.y - this.center.y) < 6;
    const u = this.model.userData;
    const speed = [0, 6.2, 4.8, 3.6][this.hp];
    switch (this.state) {
      case 'dormant':
        u.body.position.y = Math.sin(this.st * 1.5) * 0.04;
        if (inArena && !p.dead) {
          this.setState('intro');
          this.game.bossIntro(this);
        }
        break;
      case 'intro':
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 3 * dt);
        if (this.st > 0.6 && this.st < 0.7) this.game.audio.play('roar');
        u.body.scale.y = 1 + Math.sin(this.st * 20) * 0.04 * (this.st > 0.6 ? 1 : 0);
        if (this.st > 2.2) this.setState('walk');
        break;
      case 'walk': {
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 2.2 * dt);
        const fx = Math.sin(this.facing), fz = Math.cos(this.facing);
        this.pos.x += fx * speed * dt; this.pos.z += fz * speed * dt;
        this.clampArena();
        const s = Math.sin(this.st * 8);
        u.feetL.position.z = s * 0.35; u.feetR.position.z = -s * 0.35;
        u.body.rotation.z = s * 0.06;
        if (this.st > 3.2 - (3 - this.hp) * 0.5) this.setState(Math.random() < 0.65 || this.minions.filter((m) => m.alive).length > 1 ? 'jump' : 'summon');
        break;
      }
      case 'jump':
        if (this.st < 0.35) { u.body.scale.set(1.08, 0.86, 1.08); }
        else if (!this.airborne) { this.airborne = true; this.vy = 16; u.body.scale.set(0.94, 1.12, 0.94); this.jumpTo = new THREE.Vector3(a.pos.x, 0, a.pos.z); }
        if (this.airborne) {
          this.vy -= 34 * dt;
          this.pos.y += this.vy * dt;
          const tx = this.jumpTo.x - this.pos.x, tz = this.jumpTo.z - this.pos.z;
          this.pos.x += clamp(tx, -1, 1) * 6 * dt; this.pos.z += clamp(tz, -1, 1) * 6 * dt;
          this.clampArena();
          if (this.pos.y <= this.center.y && this.vy < 0) {
            this.pos.y = this.center.y;
            this.airborne = false;
            u.body.scale.set(1.15, 0.8, 1.15);
            this.game.audio.play('gpland');
            this.game.cam.shake(0.4);
            this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 24);
            new Shockwave(this.level, this.pos.x, this.pos.y + 0.15, this.pos.z, { maxR: this.arenaR + 2, speed: 9 + (3 - this.hp) * 1.5 });
            if (this.hp <= 1) setTimeout(() => this.alive && new Shockwave(this.level, this.pos.x, this.pos.y + 0.15, this.pos.z, { maxR: this.arenaR + 2, speed: 11 }), 700);
            this.setState('land');
          }
        }
        break;
      case 'land':
        u.body.scale.x = damp(u.body.scale.x, 1, 8, dt); u.body.scale.y = damp(u.body.scale.y, 1, 8, dt); u.body.scale.z = damp(u.body.scale.z, 1, 8, dt);
        if (this.st > 0.9) this.setState('walk');
        break;
      case 'summon':
        u.body.rotation.y = Math.sin(this.st * 20) * 0.1;
        if (this.st > 0.8 && !this.summoned) {
          this.summoned = true;
          for (const s of [1, -1]) {
            const gx = this.pos.x + Math.cos(this.facing) * 3 * s, gz = this.pos.z - Math.sin(this.facing) * 3 * s;
            const g = new Goomba(this.level, gx, gz, { sight: 30 });
            g.body.vel.y = 8;
            this.minions.push(g);
          }
          this.game.audio.play('alert');
        }
        if (this.st > 1.3) { this.summoned = false; u.body.rotation.y = 0; this.setState('walk'); }
        break;
      case 'dizzy':
        u.body.rotation.y = Math.sin(this.st * 6) * 0.35;
        u.body.rotation.z = Math.sin(this.st * 9) * 0.08;
        if (Math.random() < 0.2) this.game.fx?.sparkle(this.pos.x + Math.cos(this.st * 6) * 1.2, this.pos.y + 4, this.pos.z + Math.sin(this.st * 6) * 1.2, 1, [1, 1, 0.5], 0.2);
        if (this.st > 4.2) { this.putHelmetOn(); this.setState('walk'); }
        break;
      case 'hurt':
        u.body.scale.set(1.3, 0.55 + Math.min(0.45, this.st), 1.3);
        if (this.st > 1.0) {
          u.body.scale.set(1, 1, 1);
          if (this.hp <= 0) { this.setState('dead'); }
          else { this.putHelmetOn(); this.setState('walk'); this.game.audio.play('roar'); }
        }
        break;
      case 'dead':
        u.body.rotation.y += dt * 12;
        this.obj.scale.setScalar(Math.max(0.01, 1 - this.st / 1.2));
        if (this.st > 1.2) this.finish();
        break;
    }
    // helmet flight
    if (this.helmetFly) {
      const h = this.helmetFly;
      h.vel.y -= 25 * dt;
      h.obj.position.addScaledVector(h.vel, dt);
      h.obj.rotation.x += dt * 6;
      const gy = this.center.y + 0.3;
      if (h.obj.position.y < gy) { h.obj.position.y = gy; h.vel.set(0, 0, 0); }
    }
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.facing;
  }
  clampArena() {
    const dx = this.pos.x - this.center.x, dz = this.pos.z - this.center.z;
    const d = Math.hypot(dx, dz), m = this.arenaR - 2.5;
    if (d > m) { this.pos.x = this.center.x + (dx / d) * m; this.pos.z = this.center.z + (dz / d) * m; }
  }
  knockHelmet() {
    const u = this.model.userData;
    this.helmetOn = false;
    const h = u.helmet;
    const wp = new THREE.Vector3();
    h.getWorldPosition(wp);
    this.level.root.attach(h);
    this.helmetFly = { obj: h, vel: new THREE.Vector3(-Math.sin(this.facing) * 5, 12, -Math.cos(this.facing) * 5) };
    this.game.audio.play('enemyhit');
    this.game.fx?.burst(wp.x, wp.y, wp.z, 16, [0.8, 0.85, 1], 5);
    this.setState('dizzy');
    this.game.toast('His helmet is off! Stomp on him!');
  }
  putHelmetOn() {
    const u = this.model.userData;
    const h = u.helmet;
    this.helmetFly = null;
    u.body.add(h);
    h.position.set(0, 2.3, 0); h.rotation.set(0, 0, 0);
    this.helmetOn = true;
    this.game.fx?.sparkle(this.pos.x, this.pos.y + 4, this.pos.z, 12);
  }
  onCap() {
    if (this.state === 'dormant' || this.state === 'dead' || this.state === 'hurt') return 'return';
    if (this.helmetOn && this.state !== 'intro') { this.knockHelmet(); return 'return'; }
    return 'return';
  }
  onPlayer(player, actor) {
    if (actor !== player || ['dormant', 'dead', 'hurt', 'intro'].includes(this.state)) return;
    const stomp = isStomp(player, this, 0.65) || player.state === 'gpFall';
    if (stomp && !this.helmetOn) {
      this.hp--;
      this.game.audio.play('bosshit');
      this.game.cam.shake(0.35);
      player.bounce(17);
      this.game.fx?.burst(this.pos.x, this.pos.y + 3.5, this.pos.z, 24, [1, 0.9, 0.4], 7);
      this.setState('hurt');
      this.game.ui.bossHealth(this.hp, 3, this.name);
      return;
    }
    if (stomp && this.helmetOn) { player.hurt(this.pos); player.body.vel.y = 12; return; }
    player.hurt(this.pos);
  }
  finish() {
    this.game.audio.play('victory');
    this.game.fx?.burst(this.pos.x, this.pos.y + 2, this.pos.z, 50, [1, 0.85, 0.3], 9);
    for (const m of this.minions) if (m.alive) m.defeat(true);
    if (this.helmetFly) this.helmetFly.obj.removeFromParent();
    this.game.save.setFlag('boss_' + this.level.id);
    this.game.bossDefeated(this);
    if (this.moon) this.moon.appear(this.pos.clone().setY(this.pos.y + 1), { at: this.pos.clone().setY(this.center.y + 2.2) });
    this.kill();
  }
}

// Goombette: wants to meet a tall Goomba tower.
export class Goombette extends Entity {
  constructor(level, x, z, need, moon) {
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.need = need;
    this.moon = moon;
    const g = new THREE.Group();
    const B = new ModelBuilder();
    B.add(g, G.sphere(0.28, 16, 12), mat('#f3d6a8'), { p: [0, 0.32, 0], s: [1, 0.9, 0.95] });
    B.add(g, G.sphere(0.5, 22, 14), mat('#c0734a', { roughness: 0.5 }), { p: [0, 0.64, 0], s: [1, 0.74, 1] });
    for (const s of [1, -1]) {
      B.add(g, G.sphere(0.095, 12, 10), mat('#fff'), { p: [s * 0.13, 0.62, 0.41], s: [0.85, 1.4, 0.5] });
      B.add(g, G.sphere(0.05, 10, 8), mat('#111'), { p: [s * 0.12, 0.6, 0.455], s: [0.8, 1.3, 0.5] });
      B.add(g, G.sphere(0.16, 10, 8), mat('#ff5fa2', { roughness: 0.4 }), { p: [s * 0.2, 1.02, 0.1], s: [1.2, 0.8, 0.5] });
      B.add(g, G.sphere(0.15, 12, 8), mat('#4a2a14'), { p: [s * 0.17, 0.09, 0.05], s: [1, 0.62, 1.4] });
      B.add(g, G.sphere(0.06, 8, 6), mat('#ff8fb0'), { p: [s * 0.27, 0.48, 0.38], s: [1, 0.6, 0.4] });
    }
    B.add(g, G.sphere(0.09, 10, 8), mat('#ff3d8a'), { p: [0, 1.04, 0.14] });
    B.build({ merge: true });
    this.obj.add(g);
    this.mesh = g;
    this.radius = 0.6; this.height = 1.1;
    this.done = moon?.collected || level.game.save.hasMoon(level.id, moon?.id);
    this.t = 0;
    this.interact = () => this.game.dialog([{ who: 'Goombette', text: this.done ? 'Thanks for visiting, big guy!' : `Oh, hello. I only go for TALL Goombas. Come back when you're a tower of at least ${need}!` }]);
    this.interactLabel = 'Talk';
  }
  update(dt) {
    this.t += dt;
    this.mesh.position.y = Math.abs(Math.sin(this.t * 3)) * 0.04;
    const p = this.game.player;
    const cap = p.capture;
    if (!this.done && cap && cap instanceof Goomba && cap.towerSize >= this.need) {
      const d = Math.hypot(cap.pos.x - this.pos.x, cap.pos.z - this.pos.z);
      if (d < 3.2) {
        this.done = true;
        this.game.audio.play('heart');
        this.game.fx?.burst(this.pos.x, this.pos.y + 1.5, this.pos.z, 30, [1, 0.5, 0.75], 5);
        this.game.toast('Goombette is swooning!');
        this.moon?.appear(new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z), { at: new THREE.Vector3(this.pos.x + 2, this.pos.y + 1.4, this.pos.z) });
      }
    }
    // face the player
    const a = p.capture || p;
    this.obj.rotation.y = Math.atan2(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
  }
}

// =============================================================== Sandstone Golem (Dune Kingdom)
import { createCaptureHat, createMustache } from '../actors/mario-model.js';
import { roundedBox } from '../gfx/model.js';

function fistModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const stone = mat('#d2a86a', { roughness: 0.85 });
  const dark = mat('#a87d45', { roughness: 0.9 });
  B.add(g, roundedBox(2.4, 1.7, 2.6, 0.35), stone, { p: [0, 0.85, 0] });
  for (let i = 0; i < 4; i++) B.add(g, roundedBox(0.52, 0.7, 0.9, 0.2), dark, { p: [-0.84 + i * 0.56, 1.0, 1.45] });
  B.add(g, roundedBox(0.6, 0.6, 1.0, 0.2), dark, { p: [1.35, 0.6, 0.8], r: [0, 0.5, 0] });
  B.add(g, G.torus(1.25, 0.14, 8, 20), mat('#3fd0c8', { emissive: '#3fd0c8', emissiveIntensity: 0.2 }), { p: [0, 0.4, -0.2], r: [Math.PI / 2, 0, 0] });
  B.build({ merge: true });
  return g;
}

export class GolemFist extends Entity {
  constructor(level, boss, side) {
    super(level, boss.pos.x + side * 7, boss.pos.y + 4, boss.pos.z + 3);
    this.kind = 'fist';
    this.boss = boss;
    this.side = side;
    this.model = fistModel();
    this.obj.add(this.model);
    this.radius = 1.4; this.height = 1.8;
    this.state = 'rest'; this.st = 0;
    this.facing = boss.facing;
    this.hatAnchor = new THREE.Group(); this.hatAnchor.position.set(0, 1.75, 0); this.model.add(this.hatAnchor);
    this.captured = false;
    this.captureHint = 'Captured Fist · Steer into the Golem\'s face! · Crouch to release';
    this.camHeight = 1.4; this.camDist = 1.3;
    this.glowRing = this.model.children.find((c) => c.material && c.material.emissive && c.material.color.getHexString() === '3fd0c8');
  }
  get grounded() { return this.state === 'stuck'; }
  get speed() { return this.captured ? 15 : 0; }
  restPos() {
    const b = this.boss;
    const c = Math.cos(b.facing), s = Math.sin(b.facing);
    return new THREE.Vector3(b.pos.x + c * this.side * 7 + s * 4, b.pos.y + 4.5, b.pos.z - s * this.side * 7 + c * 4);
  }
  setState(s) { this.state = s; this.st = 0; }
  attack() { if (this.state === 'rest') this.setState('hover'); }
  update(dt) {
    this.st += dt;
    if (this.captured) return;
    const p = this.game.player, a = p.capture || p;
    const glowMats = [];
    this.model.traverse((o) => { if (o.material && o.material.emissive && o.material.color.getHexString() === '3fd0c8') glowMats.push(o.material); });
    for (const m of glowMats) m.emissiveIntensity = this.state === 'stuck' ? 1.6 + Math.sin(this.st * 10) * 0.6 : 0.2;
    const speedUp = 1 + (3 - this.boss.hp) * 0.35;
    switch (this.state) {
      case 'rest': {
        const r = this.restPos();
        this.pos.lerp(r, 1 - Math.exp(-4 * dt));
        this.pos.y += Math.sin(this.st * 2 + this.side) * 0.01;
        this.facing = this.boss.facing;
        break;
      }
      case 'hover': {
        const tx = a.pos.x, tz = a.pos.z;
        const ty = this.boss.pos.y + 7;
        const k = 1 - Math.exp(-3 * speedUp * dt);
        this.pos.x += (tx - this.pos.x) * k; this.pos.z += (tz - this.pos.z) * k; this.pos.y += (ty - this.pos.y) * k;
        if (Math.random() < 0.3) this.game.fx?.dust(this.pos.x, this.boss.pos.y, this.pos.z, 1, [0.9, 0.8, 0.6]);
        if (this.st > 2.0 / speedUp + 0.6) { this.setState('slam'); this.vy = 0; }
        break;
      }
      case 'slam': {
        this.vy = (this.vy || 0) - 80 * dt;
        this.pos.y += this.vy * dt;
        const floor = this.boss.pos.y;
        if (this.pos.y <= floor) {
          this.pos.y = floor;
          this.setState('stuck');
          this.game.audio.play('gpland');
          this.game.cam.shake(0.4);
          this.game.fx?.dust(this.pos.x, floor, this.pos.z, 20, [0.9, 0.8, 0.6]);
          new Shockwave(this.level, this.pos.x, floor + 0.15, this.pos.z, { maxR: 9, speed: 10, color: '#ffd28a' });
        }
        break;
      }
      case 'stuck':
        this.model.rotation.z = Math.sin(this.st * 30) * 0.02;
        if (this.st > 2.8) { this.model.rotation.z = 0; this.setState('return'); }
        break;
      case 'return': {
        const r = this.restPos();
        this.pos.lerp(r, 1 - Math.exp(-3 * dt));
        if (this.pos.distanceTo(r) < 0.5) this.setState('rest');
        break;
      }
    }
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.facing;
  }
  onPlayer(player, actor) {
    if (this.captured || actor !== player) return;
    if (this.state === 'slam') { player.hurt(this.pos); return; }
    if (this.state === 'hover' && player.pos.y > this.pos.y - 0.5) return;
  }
  onCap() { return this.state === 'stuck' ? 'capture' : 'return'; }
  captureStart(player) {
    this.captured = true;
    this.hatAnchor.add(createCaptureHat(player.outfit, 1.5));
    this.flyT = 6;
    this.pos.y += 1.2;
    this.facing = Math.atan2(this.boss.pos.x - this.pos.x, this.boss.pos.z - this.pos.z);
  }
  captureUpdate(dt, player) {
    this.flyT -= dt;
    if (player.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(player.inputDir.x, player.inputDir.z), 2.2 * dt);
    const sp = 15;
    this.pos.x += Math.sin(this.facing) * sp * dt; this.pos.z += Math.cos(this.facing) * sp * dt;
    this.pos.y = damp(this.pos.y, this.boss.pos.y + 2.5, 3, dt);
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.facing;
    if (Math.random() < 0.5) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1, [0.9, 0.8, 0.6]);
    const head = this.boss.headPos;
    if (this.pos.distanceTo(head) < 5.2) {
      this.boss.hitByFist(this);
      this.release(player, true);
      return;
    }
    // hitting arena walls ends the flight
    const out = Math.hypot(this.pos.x - this.boss.center.x, this.pos.z - this.boss.center.z) > this.boss.arenaR + 2;
    if (this.flyT <= 0 || out) this.release(player, true);
  }
  release(player) {
    if (!this.captured) return;
    this.captured = false;
    this.hatAnchor.clear();
    this.game.endCapture(this, { y: this.pos.y + 1.8 });
    this.setState('return');
  }
  captureHurt() { this.release(this.game.player); }
}

function golemHead() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const stone = mat('#cfa468', { roughness: 0.85 }), dark = mat('#9b7240', { roughness: 0.9 });
  B.add(g, G.sphere(4.2, 28, 20), stone, { p: [0, 0, 0], s: [1.05, 1.1, 0.95] });
  B.add(g, roundedBox(7.5, 1.3, 2.2, 0.5), dark, { p: [0, 1.6, 3.1], r: [0.15, 0, 0] });
  B.add(g, roundedBox(2.0, 3.0, 1.6, 0.5), stone, { p: [0, -0.2, 3.9] });
  B.add(g, roundedBox(5.0, 0.7, 1.0, 0.3), mat('#5b3d1e'), { p: [0, -2.2, 3.6] });
  for (let i = 0; i < 6; i++) B.add(g, roundedBox(0.6, 0.8, 0.6, 0.2), mat('#eadbb8'), { p: [-1.75 + i * 0.7, -1.95, 3.85] });
  // headdress
  B.add(g, G.cyl(4.6, 5.2, 1.4, 24, true), mat('#2f8fd0', { roughness: 0.5, side: THREE.DoubleSide }), { p: [0, 3.4, 0] });
  for (let i = 0; i < 9; i++) {
    const a = -1.3 + i * 0.32;
    B.add(g, G.cone(0.5, 2.2, 6), mat('#ffcf3a', { metalness: 0.6, roughness: 0.3 }), { p: [Math.sin(a) * 4.6, 4.8, Math.cos(a) * 4.6], r: [Math.cos(a) * 0.4, 0, -Math.sin(a) * 0.4] });
  }
  B.build({ merge: true });
  const eyes = new THREE.Group();
  for (const s of [1, -1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 12), new THREE.MeshStandardMaterial({ color: '#7ff2ff', emissive: '#3fd0e0', emissiveIntensity: 2.2 }));
    e.position.set(s * 1.6, 0.7, 3.75);
    e.scale.set(1.2, 0.8, 0.5);
    eyes.add(e);
  }
  g.add(eyes);
  g.userData.eyes = eyes;
  return g;
}

export class SandGolem extends Entity {
  constructor(level, x, z, opts = {}) {
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.kind = 'boss';
    this.center = new THREE.Vector3(opts.cx ?? x, y, opts.cz ?? z);
    this.arenaR = opts.arena ?? 18;
    this.facing = Math.atan2(this.center.x - x, this.center.z - z);
    this.name = opts.name || 'Sandstone Sentinel';
    this.moon = opts.moon;
    this.head = golemHead();
    this.head.position.y = 4.2;
    this.obj.add(this.head);
    this.obj.rotation.y = this.facing;
    this.headPos = new THREE.Vector3(x, y + 4.2, z);
    this.hp = 3;
    this.state = 'dormant'; this.st = 0;
    this.radius = 4.4; this.height = 8;
    this.fists = [];
    this.turn = 0;
    if (this.game.save.flag('boss_' + level.id)) { this.kill(); return; }
    this.fists = [new GolemFist(level, this, 1), new GolemFist(level, this, -1)];
    this.fists.forEach((f) => (f.obj.visible = true));
  }
  setState(s) { this.state = s; this.st = 0; }
  update(dt) {
    this.st += dt;
    const p = this.game.player, a = p.capture || p;
    const inArena = Math.hypot(a.pos.x - this.center.x, a.pos.z - this.center.z) < this.arenaR && Math.abs(a.pos.y - this.center.y) < 6;
    const eyes = this.head.userData.eyes;
    switch (this.state) {
      case 'dormant':
        eyes.visible = Math.sin(this.st * 0.8) > 0.6;
        if (inArena && !p.dead) { this.setState('intro'); this.game.bossIntro(this); eyes.visible = true; this.head.position.y = 2; }
        break;
      case 'intro':
        this.head.position.y = Math.min(4.2, 2 + this.st * 1.6);
        if (this.st > 0.5 && this.st < 0.6) this.game.audio.play('roar');
        if (Math.random() < 0.4) this.game.fx?.dust(this.pos.x + (Math.random() - 0.5) * 8, this.pos.y, this.pos.z + (Math.random() - 0.5) * 4, 1, [0.9, 0.8, 0.6]);
        if (this.st > 2.2) this.setState('fight');
        break;
      case 'fight': {
        const cool = [0, 1.2, 1.7, 2.3][this.hp];
        if (this.st > cool) {
          this.st = 0;
          const free = this.fists.filter((f) => f.state === 'rest');
          if (free.length) {
            const f = free[this.turn++ % free.length];
            f.attack();
            if (this.hp === 1 && free.length > 1) setTimeout(() => this.alive && free.find((x) => x !== f)?.attack(), 900);
          }
        }
        this.head.rotation.y = Math.sin(this.game.time * 0.8) * 0.15;
        break;
      }
      case 'hurt':
        this.head.position.x = Math.sin(this.st * 50) * 0.2 * (1 - this.st);
        if (this.st > 1.2) { this.head.position.x = 0; this.setState(this.hp > 0 ? 'fight' : 'dead'); }
        break;
      case 'dead':
        this.head.position.y -= dt * 2.5;
        this.head.rotation.z += dt * 0.3;
        if (Math.random() < 0.6) this.game.fx?.debris(this.headPos.x + (Math.random() - 0.5) * 6, this.headPos.y, this.headPos.z, 2, [0.8, 0.65, 0.4]);
        if (this.st > 2) this.finish();
        break;
    }
    eyes.children.forEach((e) => (e.material.emissiveIntensity = this.state === 'hurt' ? 0.2 : 2.2));
  }
  hitByFist(fist) {
    if (this.state !== 'fight') return;
    this.hp--;
    this.game.audio.play('bosshit');
    this.game.cam.shake(0.5);
    this.game.fx?.debris(this.headPos.x, this.headPos.y, this.headPos.z + 3, 20, [0.8, 0.65, 0.4]);
    this.game.ui.bossHealth(this.hp, 3, this.name);
    this.setState('hurt');
  }
  onPlayer(player, actor) {
    if (actor !== player) return;
    // touching the head just pushes Mario back
    if (this.state !== 'dormant' && this.state !== 'dead') player.hurt(this.headPos);
  }
  finish() {
    this.game.audio.play('victory');
    this.game.fx?.burst(this.headPos.x, this.headPos.y, this.headPos.z, 50, [1, 0.85, 0.3], 9);
    for (const f of this.fists) f.kill();
    this.game.save.setFlag('boss_' + this.level.id);
    this.game.bossDefeated(this);
    if (this.moon) this.moon.appear(this.headPos.clone(), { at: this.center.clone().setY(this.center.y + 2.2) });
    this.kill();
  }
}

// =============================================================== Bowser (final boss)
export class Fireball extends Entity {
  constructor(level, x, y, z, yaw, opts = {}) {
    super(level, x, y, z);
    this.kind = 'fireball';
    this.yaw = yaw;
    this.speed = opts.speed ?? 10;
    this.life = opts.life ?? 3.2;
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), mat('#ffb21a', { emissive: '#ff6a00', emissiveIntensity: 3.2 }));
    m.position.y = 0.6;
    this.obj.add(m);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: null, color: '#ff8a2a', transparent: true, opacity: 0.0 }));
    void glow;
    this.radius = 0.6; this.height = 1.2;
    this.mesh = m;
  }
  update(dt) {
    this.life -= dt;
    this.pos.x += Math.sin(this.yaw) * this.speed * dt;
    this.pos.z += Math.cos(this.yaw) * this.speed * dt;
    const g = this.level.world.groundBelow(this.pos.x, this.pos.z, this.pos.y + 2);
    if (g) this.pos.y = g.y; else this.pos.y -= 10 * dt;
    this.obj.position.copy(this.pos);
    this.mesh.scale.setScalar(1 + Math.sin(this.life * 30) * 0.12);
    if (Math.random() < 0.6) this.game.fx?.embers(this.pos.x, this.pos.y + 0.6, this.pos.z, 1);
    if (this.life <= 0) { this.game.fx?.smoke(this.pos.x, this.pos.y + 0.5, this.pos.z, 3, 0.4); this.kill(); }
  }
  onPlayer(player, actor) {
    if (actor === player) player.hurt(this.pos, { burn: true });
    else actor.captureHurt?.(this.pos);
    this.kill();
  }
}

function bowserModel() {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const skin = mat('#f2b23a', { roughness: 0.55 }), belly = mat('#f6dc8c', { roughness: 0.6 });
  const shell = mat('#2f8a3a', { roughness: 0.4 }), rim = mat('#f4f0e4', { roughness: 0.5 });
  const spike = mat('#f4f0e4', { roughness: 0.35 }), hair = mat('#e0402a', { roughness: 0.6 });
  const horn = mat('#f6eedc', { roughness: 0.4 }), dark = mat('#1d1a18', { roughness: 0.5 });
  const body = new THREE.Group(); g.add(body);
  const head = new THREE.Group(); head.position.set(0, 4.3, 1.1); body.add(head);
  const legL = new THREE.Group(), legR = new THREE.Group(); legL.position.set(1.0, 1.3, 0); legR.position.set(-1.0, 1.3, 0); g.add(legL, legR);
  const armL = new THREE.Group(), armR = new THREE.Group(); armL.position.set(1.7, 3.3, 0.5); armR.position.set(-1.7, 3.3, 0.5); body.add(armL, armR);
  const tail = new THREE.Group(); tail.position.set(0, 1.6, -1.6); body.add(tail);
  // torso + belly + shell
  B.add(body, G.sphere(1.8, 22, 16), skin, { p: [0, 2.7, 0], s: [1, 1.15, 1] });
  B.add(body, G.sphere(1.5, 20, 14), belly, { p: [0, 2.6, 0.6], s: [1, 1.15, 0.8] });
  for (let i = 0; i < 4; i++) B.add(body, G.box(1.6 - i * 0.1, 0.08, 0.2), mat('#c9a65a'), { p: [0, 1.9 + i * 0.5, 1.72 - Math.abs(i - 1.5) * 0.12] });
  B.add(body, G.sphere(2.1, 22, 16), shell, { p: [0, 2.8, -0.9], s: [1.05, 1.1, 0.9] });
  B.add(body, G.torus(1.9, 0.22, 10, 28), rim, { p: [0, 2.8, -0.2], s: [1.05, 1.15, 1] });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    B.add(body, G.cone(0.32, 0.9, 10), spike, { p: [Math.cos(a) * 1.4, 2.8 + Math.sin(a) * 1.5, -2.3], r: [-Math.PI / 2, 0, 0] });
  }
  B.add(body, G.cone(0.32, 0.9, 10), spike, { p: [0, 2.8, -2.9], r: [-Math.PI / 2, 0, 0] });
  // head
  B.add(head, G.sphere(1.1, 20, 14), skin, { p: [0, 0, 0], s: [1.05, 1, 1] });
  B.add(head, G.sphere(0.9, 18, 12), skin, { p: [0, -0.25, 0.85], s: [1.15, 0.8, 1] });
  B.add(head, G.sphere(0.75, 16, 10), belly, { p: [0, -0.62, 0.8], s: [1.2, 0.5, 1] });
  for (const s of [1, -1]) {
    B.add(head, G.sphere(0.12, 8, 6), dark, { p: [s * 0.32, -0.05, 1.68] });
    B.add(head, G.sphere(0.28, 12, 10), mat('#ffffff'), { p: [s * 0.45, 0.45, 0.82], s: [0.8, 1, 0.5] });
    B.add(head, G.sphere(0.13, 10, 8), mat('#c0201a'), { p: [s * 0.45, 0.43, 0.94], s: [0.8, 1, 0.5] });
    B.add(head, G.box(0.6, 0.18, 0.2), hair, { p: [s * 0.45, 0.78, 0.82], r: [0, 0, s * -0.35] });
    B.add(head, G.cone(0.22, 1.0, 10), horn, { p: [s * 0.8, 0.95, -0.1], r: [0, 0, s * -0.5] });
    B.add(head, G.cone(0.1, 0.3, 6), mat('#ffffff'), { p: [s * 0.55, -0.55, 1.45], r: [Math.PI, 0, 0] });
  }
  for (let i = 0; i < 7; i++) B.add(head, G.cone(0.28, 0.9, 6), hair, { p: [Math.sin(i * 0.5 - 1.5) * 0.6, 0.95 + Math.cos(i * 0.5 - 1.5) * 0.25, -0.5 - Math.abs(i - 3) * 0.08], r: [-0.8 - (i % 2) * 0.3, 0, (i - 3) * 0.25] });
  // arms
  for (const [a, s] of [[armL, 1], [armR, -1]]) {
    B.add(a, G.capsule(0.42, 0.9, 6, 10), skin, { p: [s * 0.3, -0.6, 0.2], r: [0.3, 0, s * 0.5] });
    B.add(a, G.torus(0.42, 0.16, 8, 14), dark, { p: [s * 0.62, -1.15, 0.4], r: [Math.PI / 2 + 0.3, 0, s * 0.5] });
    for (let i = 0; i < 4; i++) B.add(a, G.cone(0.1, 0.32, 6), spike, { p: [s * 0.62 + Math.cos(i * 1.57) * 0.55, -1.15, 0.4 + Math.sin(i * 1.57) * 0.55], r: [0, 0, s * Math.PI / 2] });
    B.add(a, G.sphere(0.45, 12, 10), skin, { p: [s * 0.8, -1.55, 0.55] });
  }
  // legs + tail
  for (const l of [legL, legR]) {
    B.add(l, G.capsule(0.6, 0.6, 6, 10), skin, { p: [0, -0.5, 0] });
    B.add(l, G.sphere(0.7, 14, 10), skin, { p: [0, -1.1, 0.3], s: [1, 0.55, 1.4] });
    for (let i = 0; i < 3; i++) B.add(l, G.cone(0.12, 0.3, 6), spike, { p: [-0.3 + i * 0.3, -1.15, 1.25], r: [Math.PI / 2, 0, 0] });
  }
  B.add(tail, G.cone(0.6, 2.0, 12), skin, { p: [0, 0, -0.8], r: [-Math.PI / 2 - 0.4, 0, 0] });
  B.build({ merge: true });
  // the top hat (knocked off by Cappy)
  const hat = new THREE.Group();
  const H = new ModelBuilder();
  H.add(hat, G.cyl(0.95, 0.95, 0.1, 22), mat('#f6f6fa', { roughness: 0.35 }), {});
  H.add(hat, G.cyl(0.65, 0.68, 1.3, 22), mat('#f6f6fa', { roughness: 0.35 }), { p: [0, 0.68, 0] });
  H.add(hat, G.cyl(0.69, 0.69, 0.3, 22), mat('#8a2fb8', { roughness: 0.45 }), { p: [0, 0.25, 0] });
  H.build({ merge: true });
  hat.position.set(0, 1.0, -0.15);
  hat.rotation.x = -0.15;
  head.add(hat);
  g.userData = { body, head, legL, legR, armL, armR, tail, hat };
  return g;
}

export class Bowser extends Entity {
  constructor(level, x, z, opts = {}) {
    const y = opts.y ?? level.groundAt(x, z);
    super(level, x, y, z);
    this.kind = 'boss';
    this.center = new THREE.Vector3(opts.cx ?? x, y, opts.cz ?? z);
    this.arenaR = opts.arena ?? 20;
    this.moon = opts.moon;
    this.name = 'Bowser';
    this.model = bowserModel();
    this.obj.add(this.model);
    this.radius = 2.4; this.height = 6;
    this.hp = 3;
    this.state = 'dormant'; this.st = 0;
    this.facing = Math.atan2(this.center.x - x, this.center.z - z) + Math.PI;
    this.vy = 0;
    this.hatOn = true;
    this.hatFly = null;
    this.patternI = 0;
    if (this.game.save.flag('boss_' + level.id)) this.kill();
  }
  setState(s) { this.state = s; this.st = 0; }
  update(dt) {
    this.st += dt;
    const p = this.game.player, a = p.capture || p;
    const u = this.model.userData;
    const dx = a.pos.x - this.pos.x, dz = a.pos.z - this.pos.z;
    const inArena = Math.hypot(a.pos.x - this.center.x, a.pos.z - this.center.z) < this.arenaR && Math.abs(a.pos.y - this.center.y) < 8;
    const rage = 3 - this.hp; // 0..2
    switch (this.state) {
      case 'dormant':
        u.body.position.y = Math.sin(this.st * 1.4) * 0.05;
        if (inArena && !p.dead) { this.setState('intro'); this.game.bossIntro(this); }
        break;
      case 'intro':
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 2 * dt);
        u.head.rotation.x = this.st > 0.8 && this.st < 2 ? -0.5 : 0;
        if (this.st > 0.8 && this.st < 0.9) { this.game.audio.play('roar'); this.game.cam.shake(0.5); }
        if (this.st > 0.9 && this.st < 2 && Math.random() < 0.5) this.game.fx?.embers(this.pos.x + Math.sin(this.facing) * 3, this.pos.y + 4.5, this.pos.z + Math.cos(this.facing) * 3, 3);
        if (this.st > 2.4) this.setState('stalk');
        break;
      case 'stalk': {
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 2.5 * dt);
        const sp = 3 + rage * 1.2;
        this.pos.x += Math.sin(this.facing) * sp * dt; this.pos.z += Math.cos(this.facing) * sp * dt;
        this.clampArena();
        this.walkAnim(dt, 7);
        if (this.st > 1.6 - rage * 0.3) {
          const patterns = ['breath', 'jump', 'breath', 'spin', 'jump'];
          this.setState(patterns[this.patternI++ % patterns.length]);
        }
        break;
      }
      case 'breath': {
        this.facing = approachAngle(this.facing, Math.atan2(dx, dz), 3 * dt);
        u.head.rotation.x = -0.3;
        const shots = 1 + rage;
        const interval = 0.55;
        for (let i = 0; i < shots; i++) {
          const t0 = 0.5 + i * interval;
          if (this.st >= t0 && this.st - dt < t0) {
            const spread = rage >= 1 ? [-0.35, 0, 0.35] : [0];
            for (const s of spread) new Fireball(this.level, this.pos.x + Math.sin(this.facing) * 3, this.pos.y, this.pos.z + Math.cos(this.facing) * 3, this.facing + s, { speed: 11 + rage * 2 });
            this.game.audio.play('fire');
          }
        }
        if (this.st > 0.6 + shots * interval) { u.head.rotation.x = 0; this.setState('stalk'); }
        break;
      }
      case 'jump': {
        if (this.st < 0.4) { u.body.scale.set(1.08, 0.88, 1.08); break; }
        if (!this.air) { this.air = true; this.vy = 20; u.body.scale.set(1, 1, 1); this.jt = new THREE.Vector3(a.pos.x, 0, a.pos.z); this.game.audio.play('whoosh'); }
        this.vy -= 36 * dt;
        this.pos.y += this.vy * dt;
        this.pos.x += clamp(this.jt.x - this.pos.x, -1, 1) * 8 * dt;
        this.pos.z += clamp(this.jt.z - this.pos.z, -1, 1) * 8 * dt;
        this.clampArena();
        if (this.pos.y <= this.center.y && this.vy < 0) {
          this.pos.y = this.center.y; this.air = false;
          this.game.audio.play('gpland'); this.game.cam.shake(0.5);
          this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 26, [0.6, 0.5, 0.45]);
          new Shockwave(this.level, this.pos.x, this.pos.y + 0.15, this.pos.z, { maxR: this.arenaR + 2, speed: 10 + rage * 2, color: '#ff8a3a' });
          if (rage >= 1) setTimeout(() => this.alive && new Shockwave(this.level, this.pos.x, this.pos.y + 0.15, this.pos.z, { maxR: this.arenaR + 2, speed: 12 + rage * 2, color: '#ff8a3a' }), 650);
          this.setState('recover');
        }
        break;
      }
      case 'spin': {
        // tuck into the shell and ricochet around the arena
        u.body.rotation.y += dt * 18;
        u.head.visible = this.st < 0.3 || this.st > 3.0;
        if (!this.spinDir) this.spinDir = Math.atan2(dx, dz);
        const sp = 13 + rage * 2;
        this.pos.x += Math.sin(this.spinDir) * sp * dt; this.pos.z += Math.cos(this.spinDir) * sp * dt;
        const cx = this.pos.x - this.center.x, cz = this.pos.z - this.center.z;
        const d = Math.hypot(cx, cz);
        if (d > this.arenaR - 3) {
          // bounce off the rim toward Mario-ish
          this.spinDir = Math.atan2(a.pos.x - this.pos.x, a.pos.z - this.pos.z) + (Math.random() - 0.5) * 0.6;
          this.pos.x = this.center.x + (cx / d) * (this.arenaR - 3.1); this.pos.z = this.center.z + (cz / d) * (this.arenaR - 3.1);
          this.game.audio.play('bump');
        }
        if (Math.random() < 0.5) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1, [0.6, 0.5, 0.45]);
        if (this.st > 3.2) { u.body.rotation.y = 0; u.head.visible = true; this.spinDir = null; this.setState('recover'); }
        break;
      }
      case 'recover':
        if (this.st > 1.1 - rage * 0.2) this.setState('stalk');
        break;
      case 'dizzy':
        u.head.rotation.z = Math.sin(this.st * 7) * 0.25;
        u.body.rotation.y = Math.sin(this.st * 3) * 0.3;
        if (Math.random() < 0.25) this.game.fx?.sparkle(this.pos.x + Math.cos(this.st * 6) * 1.5, this.pos.y + 6.5, this.pos.z + Math.sin(this.st * 6) * 1.5, 1, [1, 1, 0.5], 0.2);
        if (this.st > 3.6 - rage * 0.5) { u.head.rotation.z = 0; u.body.rotation.y = 0; this.putHat(); this.setState('stalk'); this.game.audio.play('roar'); }
        break;
      case 'hurt':
        u.body.scale.set(1.15, 0.8 + Math.min(0.2, this.st * 0.3), 1.15);
        if (this.st > 1.2) {
          u.body.scale.set(1, 1, 1);
          if (this.hp <= 0) this.setState('dead');
          else { this.putHat(); this.setState('stalk'); this.game.audio.play('roar'); this.game.cam.shake(0.4); }
        }
        break;
      case 'dead':
        u.body.rotation.z = Math.min(Math.PI / 2, this.st * 1.2);
        if (Math.random() < 0.5) this.game.fx?.smoke(this.pos.x, this.pos.y + 3, this.pos.z, 2, 0.4);
        if (this.st > 2.4) this.finish();
        break;
    }
    if (this.hatFly) {
      const h = this.hatFly;
      h.vel.y -= 25 * dt;
      h.obj.position.addScaledVector(h.vel, dt);
      h.obj.rotation.z += dt * 8;
      if (h.obj.position.y < this.center.y + 0.3) { h.obj.position.y = this.center.y + 0.3; h.vel.set(0, 0, 0); }
    }
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.facing;
  }
  walkAnim(dt, rate) {
    const u = this.model.userData;
    const s = Math.sin(this.st * rate);
    u.legL.rotation.x = s * 0.4; u.legR.rotation.x = -s * 0.4;
    u.armL.rotation.x = -s * 0.3; u.armR.rotation.x = s * 0.3;
    u.tail.rotation.y = s * 0.3;
    u.body.position.y = Math.abs(s) * 0.15;
  }
  clampArena() {
    const dx = this.pos.x - this.center.x, dz = this.pos.z - this.center.z;
    const d = Math.hypot(dx, dz), m = this.arenaR - 3;
    if (d > m) { this.pos.x = this.center.x + (dx / d) * m; this.pos.z = this.center.z + (dz / d) * m; }
  }
  knockHat() {
    const u = this.model.userData;
    this.hatOn = false;
    this.level.root.attach(u.hat);
    this.hatFly = { obj: u.hat, vel: new THREE.Vector3(-Math.sin(this.facing) * 6, 13, -Math.cos(this.facing) * 6) };
    this.game.audio.play('enemyhit');
    const wp = u.hat.position;
    this.game.fx?.burst(wp.x, wp.y, wp.z, 18, [1, 1, 1], 5);
    u.head.visible = true;
    this.model.userData.body.rotation.y = 0;
    this.setState('dizzy');
    this.game.toast("Bowser's hat is off! Ground pound his head!");
  }
  putHat() {
    const u = this.model.userData;
    this.hatFly = null;
    u.head.add(u.hat);
    u.hat.position.set(0, 1.0, -0.15); u.hat.rotation.set(-0.15, 0, 0);
    this.hatOn = true;
  }
  onCap() {
    if (this.hatOn && ['stalk', 'breath', 'recover', 'jump'].includes(this.state) && !this.air) { this.knockHat(); }
    return 'return';
  }
  onPlayer(player, actor) {
    if (actor !== player || ['dormant', 'intro', 'dead', 'hurt'].includes(this.state)) return;
    const stomp = (isStomp(player, this, 0.7) || player.state === 'gpFall') && player.pos.y > this.pos.y + 4.5;
    if (stomp && !this.hatOn) {
      this.hp--;
      this.game.audio.play('bosshit');
      this.game.cam.shake(0.5);
      player.bounce(18);
      this.game.fx?.burst(this.pos.x, this.pos.y + 6, this.pos.z, 30, [1, 0.85, 0.4], 8);
      this.game.ui.bossHealth(this.hp, 3, this.name);
      this.setState('hurt');
      return;
    }
    player.hurt(this.pos);
  }
  finish() {
    this.game.audio.play('victory');
    this.game.fx?.burst(this.pos.x, this.pos.y + 3, this.pos.z, 60, [1, 0.85, 0.3], 10);
    if (this.hatFly) this.hatFly.obj.removeFromParent();
    this.game.save.setFlag('boss_' + this.level.id);
    this.game.bossDefeated(this);
    if (this.moon) this.moon.appear(this.pos.clone().setY(this.pos.y + 3), { at: this.center.clone().setY(this.center.y + 2.4) });
    this.kill();
  }
}
