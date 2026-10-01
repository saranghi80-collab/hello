// Ground-pound sparkle spots, friendly NPCs and small set pieces.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { ModelBuilder, G, mat } from '../gfx/model.js';
import { CylinderCollider } from '../physics/colliders.js';
import { dampAngle } from '../core/math.js';
import { createCappy } from '../actors/mario-model.js';

export class SparkleSpot extends Entity {
  constructor(level, x, y, z, onPound) {
    super(level, x, y, z);
    this.onPound = onPound;
    this.radius = 1.2; this.height = 1;
    this.t = 0;
    this.gpRadius = 1.4;
  }
  update(dt) {
    this.t += dt;
    if (this.t > 0.18) {
      this.t = 0;
      if (this.distToPlayer() < 60) this.game.fx?.sparkle(this.pos.x + (Math.random() - 0.5) * 1.6, this.pos.y + 0.15, this.pos.z + (Math.random() - 0.5) * 1.6, 1, [1, 0.95, 0.6], 0.2);
    }
  }
  onGroundPound() {
    this.kill();
    this.game.audio.play('block');
    this.game.fx?.burst(this.pos.x, this.pos.y + 0.3, this.pos.z, 20, [1, 0.9, 0.5], 6);
    this.onPound?.(this);
  }
}

// Friendly villager. style: {body, accent, hat:'sprout'|'sombrero'|'beanie'|'crown'|'bow'|'none', scale}
export class NPC extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.name = opts.name || 'Villager';
    this.lines = opts.lines || ['...'];
    this.onTalk = opts.onTalk || null;
    this.facing = opts.facing ?? 0;
    const s = opts.scale ?? 1;
    this.radius = 0.7 * s; this.height = 1.6 * s;
    const g = new THREE.Group();
    const B = new ModelBuilder();
    const body = mat(opts.body || '#ffd9a8', { roughness: 0.6 });
    const accent = mat(opts.accent || '#e35d5d', { roughness: 0.55 });
    const white = mat('#ffffff', { roughness: 0.3 }), black = mat('#151520', { roughness: 0.3 });
    const bodyG = new THREE.Group(); g.add(bodyG);
    B.add(bodyG, G.sphere(0.55, 22, 16), body, { p: [0, 0.68, 0], s: [1, 1.05, 0.95] });
    B.add(bodyG, G.sphere(0.56, 22, 10), accent, { p: [0, 0.48, 0], s: [1.02, 0.55, 0.97] });
    for (const sx of [1, -1]) {
      B.add(bodyG, G.sphere(0.11, 12, 10), white, { p: [sx * 0.18, 0.86, 0.46], s: [0.8, 1.3, 0.5] });
      B.add(bodyG, G.sphere(0.06, 10, 8), black, { p: [sx * 0.19, 0.85, 0.52], s: [0.8, 1.2, 0.5] });
      B.add(bodyG, G.sphere(0.07, 10, 8), mat('#ff9bb0', { roughness: 0.6 }), { p: [sx * 0.32, 0.72, 0.42], s: [1, 0.6, 0.4] });
      B.add(g, G.sphere(0.17, 12, 10), accent, { p: [sx * 0.24, 0.1, 0.06], s: [1, 0.6, 1.3] });
      B.add(bodyG, G.sphere(0.1, 10, 8), body, { p: [sx * 0.56, 0.55, 0.05] });
    }
    const hat = opts.hat || 'sprout';
    if (hat === 'sprout') {
      B.add(bodyG, G.cyl(0.03, 0.04, 0.3, 6), mat('#4c9a2a'), { p: [0, 1.38, 0] });
      for (const sx of [1, -1]) B.add(bodyG, G.sphere(0.16, 10, 8), mat('#66c23d', { roughness: 0.5 }), { p: [sx * 0.14, 1.5, 0], s: [1.2, 0.35, 0.7], r: [0, 0, sx * 0.4] });
    } else if (hat === 'sombrero') {
      B.add(bodyG, G.cyl(0.95, 0.95, 0.08, 24), accent, { p: [0, 1.22, 0] });
      B.add(bodyG, G.cone(0.38, 0.55, 18), accent, { p: [0, 1.5, 0] });
      B.add(bodyG, G.torus(0.36, 0.05, 6, 18), mat('#ffd23a'), { p: [0, 1.3, 0], r: [Math.PI / 2, 0, 0] });
    } else if (hat === 'beanie') {
      B.add(bodyG, G.sphere(0.5, 18, 10), accent, { p: [0, 1.05, 0], s: [1.05, 0.7, 1.05] });
      B.add(bodyG, G.sphere(0.13, 10, 8), white, { p: [0, 1.45, 0] });
    } else if (hat === 'crown') {
      B.add(bodyG, G.cyl(0.32, 0.3, 0.25, 8, true), mat('#ffd23a', { metalness: 0.7, roughness: 0.3 }), { p: [0, 1.32, 0] });
    } else if (hat === 'bow') {
      for (const sx of [1, -1]) B.add(bodyG, G.sphere(0.16, 10, 8), accent, { p: [sx * 0.18, 1.25, 0.1], s: [1.2, 0.8, 0.5] });
    }
    B.build({ merge: true });
    g.scale.setScalar(s);
    this.model = g;
    this.bodyG = bodyG;
    this.obj.add(g);
    this.obj.rotation.y = this.facing;
    this.t = Math.random() * 5;
    this.interact = () => this.talk();
    this.interactLabel = opts.label || 'Talk';
    this.addCollider(new CylinderCollider(x, z, y, y + 1.3 * s, 0.55 * s));
  }
  talk() {
    const lines = this.onTalk ? this.onTalk(this) : this.lines;
    if (!lines) return;
    this.game.dialog(lines.map((l) => (typeof l === 'string' ? { who: this.name, text: l } : l)), () => this.afterTalk?.(this));
  }
  update(dt) {
    this.t += dt;
    this.bodyG.position.y = Math.abs(Math.sin(this.t * 3)) * 0.05;
    this.bodyG.scale.y = 1 + Math.sin(this.t * 6) * 0.015;
    const d = this.flatDistToPlayer();
    if (d < 6) {
      const p = this.game.player.capture || this.game.player;
      const yaw = Math.atan2(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
      this.obj.rotation.y = dampAngle(this.obj.rotation.y, yaw, 5, dt);
    } else this.obj.rotation.y = dampAngle(this.obj.rotation.y, this.facing, 2, dt);
  }
}

// Jump-rope minigame: two villagers swing a rope; jump it N times in a row for a moon.
export class JumpRope extends Entity {
  constructor(level, x, z, rot, opts = {}) {
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.rot = rot;
    this.target = opts.target ?? 30;
    this.moon = opts.moon;
    this.half = 4.2;
    this.R = 1.35;
    this.axisY = 1.3;
    this.theta = Math.PI;
    this.omega = 0;
    this.count = 0;
    this.best = 0;
    this.state = 'idle';
    this.prevTheta = Math.PI;
    // rope curve in local space (axis along X), hanging toward -Y
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push(new THREE.Vector3(-this.half + t * this.half * 2, -Math.sin(t * Math.PI) * this.R, 0));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    this.rope = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.06, 6, false), mat('#ffe9a8', { roughness: 0.6 }));
    this.rope.castShadow = true;
    this.pivot = new THREE.Group();
    this.pivot.position.y = this.axisY;
    this.pivot.add(this.rope);
    this.frame = new THREE.Group();
    this.frame.rotation.y = rot;
    this.frame.add(this.pivot);
    this.obj.add(this.frame);
    const c = Math.cos(rot), s = Math.sin(rot);
    // the axis direction in world space is local X rotated by rot
    this.ax = c; this.az = -s;
    this.holders = [];
    for (const side of [1, -1]) {
      const hx = x + this.ax * (this.half + 0.9) * side, hz = z + this.az * (this.half + 0.9) * side;
      const n = new NPC(level, hx, level.groundAt(hx, hz), hz, { name: 'Rope Twins', body: '#ffd9a8', accent: side > 0 ? '#ff7a59' : '#5ab0ff', hat: 'sprout', facing: Math.atan2(x - hx, z - hz) });
      n.onTalk = () => this.talkLines();
      this.holders.push(n);
    }
    this.radius = 0; this.height = 0;
  }
  talkLines() {
    if (this.state === 'play') return null;
    return [
      `Wanna jump rope? Stand in the middle and we'll start swinging! Do ${this.target} in a row and we'll give you something shiny.`,
      this.best ? `Your best so far: ${this.best}.` : 'Tip: jump just before the rope reaches your feet.',
    ];
  }
  inZone(a) {
    const dx = a.pos.x - this.pos.x, dz = a.pos.z - this.pos.z;
    const along = dx * this.ax + dz * this.az;
    const across = -dx * this.az + dz * this.ax;
    return Math.abs(along) < this.half - 0.6 && Math.abs(across) < 1.1;
  }
  update(dt) {
    const p = this.game.player;
    const inside = !p.capture && !p.dead && this.inZone(p) && Math.abs(p.pos.y - this.pos.y) < 3;
    if (this.state === 'idle') {
      this.theta = Math.PI;
      if (inside && p.body.grounded) { this.state = 'play'; this.count = 0; this.omega = 3.6; this.theta = Math.PI; this.game.toast('Jump the rope!'); }
    } else if (this.state === 'play') {
      this.prevTheta = this.theta;
      this.theta += this.omega * dt;
      this.omega = Math.min(9, 3.6 + this.count * 0.12);
      // bottom pass when theta crosses a multiple of 2PI
      if (Math.floor(this.prevTheta / (Math.PI * 2)) !== Math.floor(this.theta / (Math.PI * 2))) {
        if (!inside) { this.end(false); }
        else {
          const feet = p.pos.y - this.pos.y;
          if (feet < 0.32) {
            this.end(true);
            p.body.vel.y = Math.max(p.body.vel.y, 4);
          } else {
            this.count++;
            this.best = Math.max(this.best, this.count);
            this.game.audio.play('tick', { high: this.count % 10 === 0 });
            this.game.ui.counter(this.count, this.target);
            if (this.count >= this.target && this.moon && !this.moon.visible && !this.moon.taken) {
              this.moon.appear(new THREE.Vector3(this.pos.x, this.pos.y + 1, this.pos.z), { at: new THREE.Vector3(this.pos.x + this.az * 2.5, this.pos.y + 1.4, this.pos.z - this.ax * 2.5) });
              this.game.toast(`${this.target} jumps! Amazing!`);
            }
          }
        }
      }
    } else if (this.state === 'cool') {
      this.coolT -= dt;
      this.theta += (Math.PI - (this.theta % (Math.PI * 2))) * Math.min(1, dt * 4);
      if (this.coolT <= 0 && !inside) this.state = 'idle';
    }
    this.pivot.rotation.x = this.theta;
  }
  end(tripped) {
    if (tripped) { this.game.audio.play('bonk'); this.game.toast(this.count > 0 ? `Tripped at ${this.count}! Best: ${this.best}` : 'Tripped!'); }
    this.game.ui.counter(null);
    this.state = 'cool';
    this.coolT = 1.2;
    this.count = 0;
  }
}

// An item Mario can pick up and carry to someone (e.g. a snowman's carrot nose).
export class CarryItem extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.home = new THREE.Vector3(x, y, z);
    this.itemName = opts.name || 'item';
    this.mesh = opts.mesh || new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.8, 10), mat('#ff8a1e', { roughness: 0.5 }));
    if (!opts.mesh) this.mesh.rotation.z = Math.PI / 2;
    this.mesh.castShadow = true;
    this.obj.add(this.mesh);
    this.radius = 0.8; this.height = 1.4;
    this.carried = false;
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player;
    if (this.carried) {
      if (p.dead || p.capture || p.state === 'hurt') { this.drop(); return; }
      this.pos.set(p.pos.x, p.pos.y + 2.0 + Math.sin(this.t * 4) * 0.08, p.pos.z);
      this.obj.position.copy(this.pos);
      this.obj.rotation.y = p.facing;
      return;
    }
    this.mesh.position.y = 0.6 + Math.sin(this.t * 2.5) * 0.12;
    this.mesh.rotation.y += dt;
    if (Math.random() < 0.08) this.game.fx?.sparkle(this.pos.x, this.pos.y + 0.6, this.pos.z, 1, [1, 0.9, 0.6], 0.5);
  }
  onPlayer(player) {
    if (this.carried || player.capture) return;
    this.carried = true;
    player.carrying = this;
    this.mesh.position.y = 0;
    this.game.audio.play('grab');
    this.game.toast(`Got the ${this.itemName}! Bring it back.`);
  }
  drop() {
    this.carried = false;
    if (this.game.player.carrying === this) this.game.player.carrying = null;
    this.pos.copy(this.home);
    this.obj.position.copy(this.pos);
    this.game.fx?.smoke(this.pos.x, this.pos.y + 0.5, this.pos.z, 4, 0.9);
    this.game.toast(`The ${this.itemName} went back where you found it.`);
  }
  deliver() {
    this.carried = false;
    if (this.game.player.carrying === this) this.game.player.carrying = null;
    this.kill();
  }
}

// Breakable ice crystal: smash all crystals in a group to reveal a moon.
export class IceCrystal extends Entity {
  constructor(level, x, y, z, group) {
    super(level, x, y, z);
    this.group = group;
    group.total = (group.total || 0) + 1;
    group.got = group.got || 0;
    const g = new THREE.Group();
    const m = new THREE.MeshStandardMaterial({ color: '#bfeaff', roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.85, emissive: '#5ac8ff', emissiveIntensity: 0.25 });
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.5 + (i === 0 ? 0.4 : 0), 0), m);
      c.scale.set(0.6, 2.0, 0.6);
      c.position.set(i === 0 ? 0 : Math.cos(i * 2.1) * 0.6, i === 0 ? 1.2 : 0.7, i === 0 ? 0 : Math.sin(i * 2.1) * 0.6);
      c.rotation.set(i === 0 ? 0 : Math.cos(i) * 0.5, i, i === 0 ? 0 : Math.sin(i) * 0.5);
      c.castShadow = true;
      g.add(c);
    }
    this.obj.add(g);
    this.radius = 1.0; this.height = 2.4;
    this.gpRadius = 1.4;
    if (group.moon && group.moon.collected) { this.kill(); group.got++; }
  }
  smash() {
    if (!this.alive) return;
    this.game.audio.play('break');
    this.game.fx?.debris(this.pos.x, this.pos.y + 1, this.pos.z, 14, [0.75, 0.9, 1]);
    this.game.fx?.sparkle(this.pos.x, this.pos.y + 1, this.pos.z, 10, [0.7, 0.9, 1]);
    this.kill();
    const g = this.group;
    g.got++;
    this.game.toast(`Ice crystals: ${g.got} / ${g.total}`);
    if (g.got >= g.total && g.moon) g.moon.appear(this.pos.clone().setY(this.pos.y + 1));
  }
  onCap() { this.smash(); return 'return'; }
  onGroundPound() { this.smash(); }
  onSmash() { this.smash(); }
  onPlayer(player) { if (player.state === 'roll' || player.state === 'dive') this.smash(); }
}

// Snowman: wants a carrot.
export class Snowman extends Entity {
  constructor(level, x, z, item, moon) {
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.item = item; this.moon = moon;
    const g = new THREE.Group();
    const B = new ModelBuilder();
    const snow = mat('#f6f9ff', { roughness: 0.9 });
    B.add(g, G.sphere(1.1, 18, 14), snow, { p: [0, 0.95, 0] });
    B.add(g, G.sphere(0.8, 18, 14), snow, { p: [0, 2.4, 0] });
    B.add(g, G.sphere(0.58, 18, 14), snow, { p: [0, 3.5, 0] });
    for (const s of [1, -1]) {
      B.add(g, G.sphere(0.08, 8, 6), mat('#1a1a22'), { p: [s * 0.2, 3.65, 0.5] });
      B.add(g, G.cyl(0.04, 0.05, 1.4, 5), mat('#6b4423'), { p: [s * 1.1, 2.7, 0], r: [0, 0, s * 1.0] });
    }
    for (let i = 0; i < 3; i++) B.add(g, G.sphere(0.08, 8, 6), mat('#1a1a22'), { p: [0, 2.1 + i * 0.35, 0.78 - Math.abs(i - 1) * 0.04] });
    B.add(g, G.cyl(0.45, 0.45, 0.12, 16), mat('#d83a3a'), { p: [0, 3.0, 0] });
    B.add(g, G.cyl(0.42, 0.5, 0.6, 16), mat('#2a2a38'), { p: [0, 4.1, 0] });
    B.add(g, G.cyl(0.65, 0.65, 0.06, 16), mat('#2a2a38'), { p: [0, 3.82, 0] });
    B.build({ merge: true });
    this.obj.add(g);
    this.nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.6, 10), mat('#ff8a1e'));
    this.nose.rotation.x = Math.PI / 2;
    this.nose.position.set(0, 3.45, 0.82);
    this.nose.visible = !!moon?.collected;
    g.add(this.nose);
    this.radius = 1.2; this.height = 4.4;
    this.addCollider(new CylinderCollider(x, z, y, y + 3.0, 1.0));
    this.done = !!moon?.collected;
    this.interact = () => this.game.dialog([{ who: 'Snowman', text: this.done ? 'I can smell the snow again! Thank you!' : "Brrr... I lost my carrot nose in the wind. I think it blew up toward the old ice tower. Could you bring it back?" }]);
    this.interactLabel = 'Talk';
  }
  update() {
    const p = this.game.player;
    if (!this.done && p.carrying === this.item && this.flatDistToPlayer() < 3.2) {
      this.done = true;
      this.item.deliver();
      this.nose.visible = true;
      this.game.audio.play('heart');
      this.game.fx?.burst(this.pos.x, this.pos.y + 3.5, this.pos.z, 24, [1, 0.6, 0.3], 5);
      this.moon?.appear(new THREE.Vector3(this.pos.x, this.pos.y + 4, this.pos.z), { at: new THREE.Vector3(this.pos.x + 2.5, this.pos.y + 1.4, this.pos.z + 1) });
    }
  }
}

// Penguin racer with a coach who starts the race.
function penguinModel(scarf = '#e0402a') {
  const g = new THREE.Group();
  const B = new ModelBuilder();
  const black = mat('#1d2233', { roughness: 0.5 }), white = mat('#f6f6fa', { roughness: 0.5 }), orange = mat('#ff9a1e', { roughness: 0.5 });
  const body = new THREE.Group(); g.add(body);
  B.add(body, G.sphere(0.55, 18, 14), black, { p: [0, 0.8, 0], s: [1, 1.3, 0.95] });
  B.add(body, G.sphere(0.45, 16, 12), white, { p: [0, 0.75, 0.18], s: [0.95, 1.25, 0.8] });
  for (const s of [1, -1]) {
    B.add(body, G.sphere(0.09, 10, 8), white, { p: [s * 0.18, 1.32, 0.42] });
    B.add(body, G.sphere(0.05, 8, 6), mat('#111'), { p: [s * 0.18, 1.32, 0.5] });
    B.add(body, G.sphere(0.2, 10, 8), black, { p: [s * 0.55, 0.85, 0], s: [0.3, 1.2, 0.6], r: [0, 0, s * 0.3] });
    B.add(g, G.sphere(0.14, 10, 8), orange, { p: [s * 0.18, 0.06, 0.12], s: [1, 0.4, 1.5] });
  }
  B.add(body, G.cone(0.1, 0.3, 8), orange, { p: [0, 1.18, 0.55], r: [Math.PI / 2, 0, 0] });
  B.add(body, G.torus(0.42, 0.1, 8, 16), mat(scarf), { p: [0, 1.08, 0], r: [Math.PI / 2, 0, 0] });
  B.build({ merge: true });
  g.userData.body = body;
  return g;
}

export class PenguinRacer extends Entity {
  constructor(level, path, opts = {}) {
    const [x, z] = path[0];
    const y = level.groundAt(x, z);
    super(level, x, y, z);
    this.path = path.map(([px, pz]) => new THREE.Vector3(px, 0, pz));
    this.model = penguinModel(opts.scarf);
    this.obj.add(this.model);
    this.moon = opts.moon;
    this.speed = opts.speed ?? 8.4;
    this.state = 'idle';
    this.seg = 1;
    this.t = 0;
    this.facing = Math.atan2(this.path[1].x - x, this.path[1].z - z);
    this.radius = 0.6; this.height = 1.6;
    this.start = new THREE.Vector3(x, y, z);
    this.best = null;
    this.interact = () => this.talk();
    this.interactLabel = 'Talk';
    this.finishR = opts.finishR ?? 4;
  }
  talk() {
    if (this.state !== 'idle') return;
    const won = this.moon?.collected || this.moon?.taken;
    this.game.dialog([
      { who: 'Pengo', text: won ? 'You again? Fine, a rematch! Last one to the finish flag is a soggy snowball!' : "I'm the fastest penguin on Shiverpeak! Race me around the mountain to the finish flag. Ready?" },
    ], () => this.countdown());
  }
  countdown() {
    const p = this.game.player;
    // line up next to the penguin
    p.body.setPos(this.start.x + Math.cos(this.facing) * 1.6, this.start.y + 0.2, this.start.z - Math.sin(this.facing) * 1.6);
    p.facing = this.facing;
    this.game.cam.snap(p.pos.x, p.pos.y, p.pos.z, p.facing);
    this.pos.copy(this.start);
    this.seg = 1;
    this.state = 'count';
    this.t = 0;
    this.lastCount = 4;
  }
  update(dt) {
    this.t += dt;
    const ud = this.model.userData;
    const p = this.game.player;
    if (this.state === 'count') {
      const n = 3 - Math.floor(this.t);
      if (n !== this.lastCount && n > 0) { this.lastCount = n; this.game.ui.counter(n); this.game.audio.play('tick', { high: false }); }
      p.body.vel.x = 0; p.body.vel.z = 0;
      if (this.t >= 3) { this.state = 'race'; this.t = 0; this.game.ui.counter(null); this.game.toast('GO!'); this.game.audio.play('tick', { high: true }); this.game.startTimer?.(999); }
    } else if (this.state === 'race') {
      const target = this.path[this.seg];
      const dx = target.x - this.pos.x, dz = target.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      // rubber band a little
      const pd = this.playerProgress();
      const mine = this.seg + (1 - Math.min(1, d / 20));
      const sp = this.speed * (pd > mine + 1 ? 1.12 : pd < mine - 2 ? 0.92 : 1);
      if (d < 1.2) { this.seg++; if (this.seg >= this.path.length) { this.finish(false); return; } }
      else {
        this.facing = Math.atan2(dx, dz);
        this.pos.x += (dx / d) * sp * dt; this.pos.z += (dz / d) * sp * dt;
      }
      const gy = this.level.groundAt(this.pos.x, this.pos.z, this.pos.y + 3);
      this.pos.y = gy;
      ud.body.rotation.z = Math.sin(this.t * 14) * 0.15;
      // player reaching the finish
      const fin = this.path[this.path.length - 1];
      if (Math.hypot(p.pos.x - fin.x, p.pos.z - fin.z) < this.finishR && Math.abs(p.pos.y - this.level.groundAt(fin.x, fin.z)) < 4) this.finish(true);
      if (p.dead) { this.state = 'idle'; this.game.stopTimer?.(); this.reset(); }
    } else {
      ud.body.rotation.z = Math.sin(this.t * 2) * 0.05;
      const a = p.capture || p;
      if (this.flatDistToPlayer() < 6) this.facing = Math.atan2(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
    }
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.facing;
  }
  playerProgress() {
    // rough progress: index of the nearest waypoint
    const p = this.game.player;
    let best = 0, bd = Infinity;
    this.path.forEach((w, i) => { const d = Math.hypot(w.x - p.pos.x, w.z - p.pos.z); if (d < bd) { bd = d; best = i; } });
    return best;
  }
  finish(playerWon) {
    this.game.stopTimer?.();
    this.state = 'done';
    if (playerWon) {
      this.game.audio.play('victory');
      this.game.toast('You beat Pengo!');
      const fin = this.path[this.path.length - 1];
      if (this.moon && !this.moon.collected && !this.moon.visible) this.moon.appear(new THREE.Vector3(fin.x, this.level.groundAt(fin.x, fin.z) + 3, fin.z), { at: new THREE.Vector3(fin.x, this.level.groundAt(fin.x, fin.z) + 2.6, fin.z) });
    } else {
      this.game.audio.play('die');
      this.game.toast('Pengo wins! Talk to him at the start for a rematch.');
    }
    setTimeout(() => this.reset(), 2500);
  }
  reset() {
    this.state = 'idle';
    this.pos.copy(this.start);
    this.seg = 1;
    this.facing = Math.atan2(this.path[1].x - this.start.x, this.path[1].z - this.start.z);
  }
}

// A friendly Cappy that floats in place and gives advice.
export class FloatingCappy extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.model = createCappy(level.game.player.outfit);
    this.model.scale.setScalar(1.6);
    this.obj.add(this.model);
    this.lines = opts.lines || [];
    this.radius = 0.8; this.height = 1.2;
    this.t = Math.random() * 3;
    this.interact = () => this.game.dialog(this.lines);
    this.interactLabel = 'Talk to Cappy';
  }
  update(dt) {
    this.t += dt;
    this.model.position.y = Math.sin(this.t * 2) * 0.15;
    const a = this.game.player;
    this.model.rotation.y = dampAngle(this.model.rotation.y, Math.atan2(a.pos.x - this.pos.x, a.pos.z - this.pos.z), 4, dt);
  }
}
