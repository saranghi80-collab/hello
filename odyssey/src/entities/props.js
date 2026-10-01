// Blocks, checkpoints, springs, pipes, signs, the Odyssey and moving platforms.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { BoxCollider, CylinderCollider } from '../physics/colliders.js';
import { blockGeometry, blockMaterial, createFlag, flagTexture, createPipe, createSpring, createOdyssey } from '../gfx/props.js';
import { PopCoin, Heart } from './collectibles.js';
import { roundedBox, mat } from '../gfx/model.js';
import { paint, capColor } from '../level/level.js';
import { clamp, easeInOutSine } from '../core/math.js';

// ---------------------------------------------------------------- blocks
export class Block extends Entity {
  // kind: 'question' | 'brick' | 'hidden'; content: 'coin' | 'coins' | 'heart' | 'lifeup' | 'moon' | 'none'
  constructor(level, x, yBottom, z, kind = 'question', content = 'coin', opts = {}) {
    super(level, x, yBottom, z);
    this.kind = kind;
    this.content = content;
    this.count = content === 'coins' ? (opts.count ?? 8) : 1;
    this.moon = opts.moon || null;
    this.used = false;
    this.radius = 1.0; this.height = 1.5;
    this.bumpT = 1;
    this.mesh = new THREE.Mesh(blockGeometry(), blockMaterial(kind === 'hidden' ? 'question' : kind));
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.mesh.position.y = 0.75;
    this.obj.add(this.mesh);
    this.hidden = kind === 'hidden';
    if (this.hidden) { this.mesh.visible = false; }
    else this.makeSolid();
    this.gpRadius = 0.9;
  }
  makeSolid() {
    if (this.colliders.length) return;
    this.addCollider(new BoxCollider(this.pos.x, this.pos.y + 0.75, this.pos.z, 0.75, 0.75, 0.75));
  }
  update(dt) {
    if (this.bumpT < 1) {
      this.bumpT = Math.min(1, this.bumpT + dt / 0.22);
      this.mesh.position.y = 0.75 + Math.sin(this.bumpT * Math.PI) * 0.35;
    }
    if (this.hidden) {
      const p = this.game.player;
      if (p.capture || p.dead) return;
      const b = p.body;
      if (b.vel.y > 0 && Math.abs(b.pos.x - this.pos.x) < 0.9 && Math.abs(b.pos.z - this.pos.z) < 0.9) {
        const head = b.pos.y + b.height;
        if (head > this.pos.y && head < this.pos.y + 1.0) {
          this.hidden = false;
          this.mesh.visible = true;
          this.makeSolid();
          b.pos.y = this.pos.y - b.height - 0.01;
          b.vel.y = 0;
          this.hit(p, 'below');
        }
      }
    }
  }
  hit(player, from) {
    if (this.hidden) return;
    this.bumpT = 0;
    if (this.used) { this.game.audio.play('bump'); return; }
    if (this.kind === 'brick' && this.content === 'none') {
      this.breakBlock();
      return;
    }
    this.release(from);
  }
  release(from) {
    const g = this.game, L = this.level;
    const top = this.pos.y + 1.6;
    this.game.audio.play('block');
    switch (this.content) {
      case 'coin':
      case 'coins':
        new PopCoin(L, this.pos.x, top, this.pos.z);
        break;
      case 'coins3':
        for (let i = 0; i < 3; i++) new PopCoin(L, this.pos.x, top, this.pos.z, { vx: (i - 1) * 2, vy: 10 + i });
        break;
      case 'heart': new Heart(L, this.pos.x, top, this.pos.z); break;
      case 'lifeup': new Heart(L, this.pos.x, top, this.pos.z, true); break;
      case 'moon':
        if (this.moon) this.moon.appear(new THREE.Vector3(this.pos.x, top, this.pos.z));
        break;
    }
    this.count--;
    if (this.count <= 0) {
      this.used = true;
      if (this.kind === 'brick') { this.breakBlock(); return; }
      this.mesh.material = blockMaterial('used');
    }
  }
  breakBlock() {
    this.game.audio.play('break');
    this.game.fx?.debris(this.pos.x, this.pos.y + 0.75, this.pos.z, 12, [0.78, 0.4, 0.2]);
    this.kill();
  }
  onBonk(player) { this.hit(player, 'below'); }
  onCap() { if (this.hidden) return; this.hit(this.game.player, 'side'); return 'stop'; }
  onGroundPound(player) {
    if (this.hidden) return;
    const b = player.body;
    if (b.pos.y >= this.pos.y + 1.4) this.hit(player, 'above');
  }
  onSmash() { if (this.hidden) return; if (this.kind === 'brick') this.breakBlock(); else this.hit(this.game.player, 'side'); }
}

// Breakable crate/rock that can hide a moon or coins (broken by gp, roll, bullet bill, chomp...)
export class Breakable extends Entity {
  constructor(level, x, yBottom, z, opts = {}) {
    super(level, x, yBottom, z);
    this.size = opts.size ?? 1.6;
    this.style = opts.style || 'crate';
    this.contents = opts.contents || null; // 'coins' | moon entity | 'heart'
    this.need = opts.need || 'any'; // 'any' | 'heavy' (needs chomp/bullet)
    const s = this.size;
    let geo, material;
    if (this.style === 'rock') {
      geo = new THREE.DodecahedronGeometry(s * 0.62, 1);
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = 1 + Math.sin(p.getX(i) * 4 + p.getZ(i) * 3) * 0.06; p.setXYZ(i, p.getX(i) * k, p.getY(i) * k * 0.9, p.getZ(i) * k); }
      geo.computeVertexNormals();
      material = mat(opts.color || '#8f7c6a', { roughness: 0.95 });
      // cracks
    } else {
      geo = roundedBox(s, s, s, 0.06, 1);
      material = new THREE.MeshStandardMaterial({ map: (opts.tex ?? null), color: opts.color || '#c08a4a', roughness: 0.85 });
    }
    this.mesh = new THREE.Mesh(geo, material);
    this.mesh.position.y = s / 2;
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.obj.add(this.mesh);
    if (this.style === 'rock') {
      // glowing cracks so players know it's breakable
      const crack = new THREE.Mesh(new THREE.TorusGeometry(s * 0.45, 0.04, 6, 24), mat('#ffe9a0', { emissive: '#ffcf55', emissiveIntensity: 0.6 }));
      crack.position.y = s / 2; crack.rotation.x = Math.PI / 2.6;
      this.obj.add(crack);
    }
    this.radius = s * 0.6; this.height = s;
    this.addCollider(new BoxCollider(x, yBottom + s / 2, z, s / 2, s / 2, s / 2));
    this.gpRadius = s * 0.5;
  }
  smash(heavy = false) {
    if (!this.alive) return;
    if (this.need === 'heavy' && !heavy) { this.game.audio.play('bump'); this.game.toast?.('This looks too tough to break by hand...'); return; }
    this.game.audio.play('break');
    this.game.fx?.debris(this.pos.x, this.pos.y + this.size / 2, this.pos.z, 16, this.style === 'rock' ? [0.55, 0.48, 0.42] : [0.75, 0.5, 0.25]);
    this.game.fx?.smoke(this.pos.x, this.pos.y + this.size / 2, this.pos.z, 6, 0.8);
    this.game.cam.shake(0.15);
    const c = this.contents;
    if (c === 'coins') for (let i = 0; i < 5; i++) new PopCoin(this.level, this.pos.x, this.pos.y + 1, this.pos.z, { vx: Math.cos(i) * 3, vz: Math.sin(i) * 3, vy: 9 + i });
    else if (c === 'heart') new Heart(this.level, this.pos.x, this.pos.y + 0.5, this.pos.z);
    else if (c && c.appear) c.appear(this.pos.clone().setY(this.pos.y + 1));
    this.kill();
  }
  onGroundPound(player) { if (player.body.pos.y >= this.pos.y + this.size - 0.2) this.smash(false); }
  onCap() { if (this.need !== 'heavy' && this.style === 'crate') { this.smash(); return 'return'; } return 'stop'; }
  onSmash(heavy) { this.smash(heavy); }
}

// ---------------------------------------------------------------- checkpoints
export class Checkpoint extends Entity {
  constructor(level, id, name, x, y, z, facing = 0) {
    super(level, x, y, z);
    this.id = id; this.name = name; this.facing = facing;
    this.active = this.game.save.hasCheckpoint(level.id, id) || id === 'odyssey';
    this.model = createFlag();
    this.model.rotation.y = facing - Math.PI / 2;
    this.obj.add(this.model);
    this.radius = 1.0; this.height = 3.5;
    if (this.active) this.model.userData.flag.material.map = flagTexture(true);
    this.addCollider(new CylinderCollider(x, z, y, y + 0.3, 0.55));
    level.checkpoints.push(this);
  }
  activate() {
    const flag = this.model.userData.flag;
    flag.material.map = flagTexture(true);
    flag.material.needsUpdate = true;
    this.active = true;
    this.game.save.addCheckpoint(this.level.id, this.id);
    this.game.audio.play('checkpoint');
    this.game.fx?.burst(this.pos.x, this.pos.y + 3, this.pos.z, 20, [1, 0.4, 0.3], 5);
    this.game.toast('Checkpoint: ' + this.name);
  }
  onPlayer(player) {
    if (player.capture) return;
    if (!this.active) this.activate();
    this.game.respawnPoint = { x: this.pos.x + Math.sin(this.facing) * 1.5, y: this.pos.y + 0.5, z: this.pos.z + Math.cos(this.facing) * 1.5, facing: this.facing, id: this.id };
  }
  get spawnPos() { return { x: this.pos.x + Math.sin(this.facing) * 1.6, y: this.pos.y + 0.3, z: this.pos.z + Math.cos(this.facing) * 1.6, facing: this.facing }; }
}

// ---------------------------------------------------------------- spring
export class Spring extends Entity {
  constructor(level, x, y, z, power = 24) {
    super(level, x, y, z);
    this.power = power;
    this.model = createSpring();
    this.obj.add(this.model);
    this.radius = 0.85; this.height = 1.25;
    this.squashT = 1;
    this.addCollider(new CylinderCollider(x, z, y, y + 0.25, 0.85));
  }
  update(dt) {
    if (this.squashT < 1) {
      this.squashT = Math.min(1, this.squashT + dt / 0.35);
      const k = this.squashT;
      const s = k < 0.25 ? 1 - k * 2 : 0.5 + 0.5 * Math.min(1, (k - 0.25) / 0.3) + Math.sin(k * 20) * 0.1 * (1 - k);
      this.model.userData.coil.scale.y = s;
      this.model.userData.top.position.y = 0.25 + 0.85 * s;
    }
  }
  onPlayer(player, actor) {
    const b = actor.body || player.body;
    if (b.vel.y > 1 || b.pos.y < this.pos.y + 0.6) return;
    this.squashT = 0;
    if (actor === player) {
      player.doJump('jump3', this.power);
      player.airKind = 'jump3';
      player.capJumpUsed = false; player.hoverUsed = false;
    } else if (actor.springBounce) actor.springBounce(this.power);
    this.game.audio.play('spring');
  }
}

// ---------------------------------------------------------------- pipe
export class Pipe extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.h = opts.h ?? 2;
    this.dest = opts.dest || null; // {x,y,z,facing} or function
    this.model = createPipe(this.h, opts.color || '#2fb84a');
    this.obj.add(this.model);
    this.radius = 1.0; this.height = this.h + 0.5;
    this.addCollider(new CylinderCollider(x, z, y - 0.5, y + this.h, 1.15));
    this.label = opts.label || 'Enter pipe';
    this.onEnter = opts.onEnter || null;
  }
  update() {
    const p = this.game.player;
    if (p.capture || p.dead || !this.dest || p.state === 'cutscene') return;
    const b = p.body;
    if (b.grounded && b.ground.c === this.colliders[0]) {
      this.game.prompt('Crouch to enter', this);
      if (this.game.input.actions.crouch.pressed) this.game.enterPipe(this);
    }
  }
}

// ---------------------------------------------------------------- talkable sign
export class Sign extends Entity {
  constructor(level, x, y, z, lines, facing = 0) {
    super(level, x, y, z);
    this.lines = lines;
    const g = new THREE.Group();
    const wood = mat('#b07a44', { roughness: 0.8 }), dark = mat('#7a4f24', { roughness: 0.9 });
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.4, 8), dark); post.position.y = 0.7;
    const board = new THREE.Mesh(roundedBox(1.3, 0.8, 0.12, 0.05), wood); board.position.y = 1.3;
    post.castShadow = board.castShadow = true;
    g.add(post, board);
    g.rotation.y = facing;
    this.obj.add(g);
    this.radius = 0.6; this.height = 1.8;
    this.interact = () => this.game.dialog(this.lines);
    this.interactLabel = 'Read';
    this.addCollider(new BoxCollider(x, y + 0.9, z, 0.3, 0.9, 0.3, facing));
  }
}

// ---------------------------------------------------------------- the Odyssey (travel point)
export class OdysseyShip extends Entity {
  constructor(level, x, y, z, rot = 0) {
    super(level, x, y, z);
    this.model = createOdyssey();
    this.model.rotation.y = rot;
    this.obj.add(this.model);
    this.radius = 3.5; this.height = 4;
    this.rot = rot;
    this.t = 0;
    const c = Math.cos(rot), s = Math.sin(rot);
    // hull collider (deck at y+2.1) and deck house
    this.addCollider(new BoxCollider(x, y + 1.05, z, 2.4, 1.05, 4.6, rot));
    const hx = x + s * -0.6, hz = z + c * -0.6;
    this.addCollider(new BoxCollider(hx, y + 2.85, hz, 1.3, 0.75, 1.5, rot));
    this.interact = () => this.game.openTravel();
    this.interactLabel = 'Board the Odyssey';
    this.interactRadius = 5.5;
  }
  update(dt) {
    this.t += dt;
    this.model.position.y = Math.sin(this.t * 1.2) * 0.04;
    const globe = this.model.userData.globe;
    const charged = this.game.kingdomReady?.(this.level.id);
    globe.material.emissiveIntensity = charged ? 1.2 + Math.sin(this.t * 4) * 0.4 : 0.3;
  }
}

// ---------------------------------------------------------------- platforms
function platformMesh(w, h, d, color, top) {
  const geo = roundedBox(w, h, d, Math.min(0.2, h * 0.3), 2);
  paint(geo, top ? capColor(top, color, color, 0.25, h / 2) : color);
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }));
}

export class MovingPlatform extends Entity {
  // path: array of points [x,y(top),z]; speed u/s; mode 'pingpong' | 'loop'
  constructor(level, path, w, d, opts = {}) {
    const p0 = path[0];
    super(level, p0[0], p0[1], p0[2]);
    this.path = path.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
    this.w = w; this.d = d; this.h = opts.h ?? 0.8;
    this.speed = opts.speed ?? 3;
    this.pause = opts.pause ?? 0.6;
    this.mode = opts.mode || 'pingpong';
    this.rot = opts.rot || 0;
    this.spin = opts.spin || 0; // rad/s yaw
    this.mesh = platformMesh(w, this.h, d, opts.color || '#d9d2c3', opts.top || '#ffcf3a');
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.mesh.position.y = -this.h / 2;
    this.obj.add(this.mesh);
    this.radius = 0; this.height = 0;
    const c = new BoxCollider(p0[0], p0[1] - this.h / 2, p0[2], w / 2, this.h / 2, d / 2, this.rot);
    c.dynamic = true;
    if (opts.oneWay) c.oneWay = true;
    this.collider = this.addCollider(c);
    // precompute segment lengths
    this.seg = 0; this.segT = 0; this.dir = 1; this.wait = 0;
    this.trigger = opts.trigger || null; // only moves while player stands on it ('ride')
    this.active = !this.trigger;
    this.t = opts.phase ?? 0;
  }
  update(dt) {
    const c = this.collider;
    if (this.trigger === 'ride' && !this.active) {
      const p = this.game.player;
      if (p.body.grounded && p.body.ground.c === c) this.active = true;
    }
    if (this.active && this.path.length > 1) {
      if (this.wait > 0) this.wait -= dt;
      else {
        const a = this.path[this.seg], b = this.path[this.seg + this.dir] ?? this.path[0];
        const len = a.distanceTo(b) || 1;
        this.segT += (this.speed * dt) / len;
        if (this.segT >= 1) {
          this.segT = 0;
          this.seg += this.dir;
          if (this.mode === 'loop') { if (this.seg >= this.path.length) this.seg = 0; }
          else if (this.seg + this.dir >= this.path.length || this.seg + this.dir < 0) this.dir *= -1;
          this.wait = this.pause;
        }
      }
      const a = this.path[this.seg];
      const nIdx = this.mode === 'loop' ? (this.seg + 1) % this.path.length : this.seg + this.dir;
      const b = this.path[nIdx] ?? a;
      const e = easeInOutSine(this.segT);
      this.pos.lerpVectors(a, b, e);
    }
    this.rot += this.spin * dt;
    c.setTransform(this.pos.x, this.pos.y - this.h / 2, this.pos.z, this.rot);
    this.obj.position.copy(this.pos);
    this.obj.rotation.y = this.rot;
  }
}

export class FallingPlatform extends Entity {
  constructor(level, x, yTop, z, w, d, opts = {}) {
    super(level, x, yTop, z);
    this.home = new THREE.Vector3(x, yTop, z);
    this.w = w; this.d = d; this.h = opts.h ?? 0.7;
    this.mesh = platformMesh(w, this.h, d, opts.color || '#b58a5a', opts.top || '#e8d27a');
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.mesh.position.y = -this.h / 2;
    this.obj.add(this.mesh);
    const c = new BoxCollider(x, yTop - this.h / 2, z, w / 2, this.h / 2, d / 2, 0);
    c.dynamic = true;
    this.collider = this.addCollider(c);
    this.state = 'idle'; this.t = 0; this.vy = 0;
    this.radius = 0; this.height = 0;
  }
  update(dt) {
    const p = this.game.player, c = this.collider;
    this.t += dt;
    if (this.state === 'idle') {
      if (p.body.grounded && p.body.ground.c === c) { this.state = 'shake'; this.t = 0; this.game.audio.play('rumble'); }
    } else if (this.state === 'shake') {
      this.mesh.position.x = Math.sin(this.t * 60) * 0.06;
      if (this.t > 0.6) { this.state = 'fall'; this.t = 0; this.vy = 0; }
    } else if (this.state === 'fall') {
      this.vy -= 25 * dt;
      this.pos.y += this.vy * dt;
      if (this.t > 2.5) { this.state = 'gone'; this.t = 0; c.enabled = false; this.obj.visible = false; }
    } else if (this.state === 'gone') {
      if (this.t > 3) {
        this.state = 'idle'; this.pos.copy(this.home); c.enabled = true; this.obj.visible = true;
        this.mesh.position.x = 0;
        this.game.fx?.sparkle(this.pos.x, this.pos.y, this.pos.z, 10);
      }
    }
    c.setTransform(this.pos.x, this.pos.y - this.h / 2, this.pos.z, 0);
    this.obj.position.copy(this.pos);
  }
}

// Platforms that appear for a limited time after hitting a switch.
export class TimerSwitch extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    this.duration = opts.duration ?? 10;
    this.targets = opts.targets || []; // entities/objects with setActive(on)
    this.onActivate = opts.onActivate || null;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.3, 20), mat('#4a4a58', { roughness: 0.5, metalness: 0.4 }));
    base.position.y = 0.15;
    this.button = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.7, 0.35, 20), mat(opts.color || '#3a7bff', { roughness: 0.3, emissive: opts.color || '#3a7bff', emissiveIntensity: 0.3 }));
    this.button.position.y = 0.45;
    base.castShadow = this.button.castShadow = true;
    this.obj.add(base, this.button);
    this.addCollider(new CylinderCollider(x, z, y, y + 0.3, 0.95));
    this.radius = 0.9; this.height = 1;
    this.on = false; this.t = 0;
    this.gpRadius = 1.0;
    this.tick = 0;
  }
  press() {
    if (this.on) return;
    this.on = true; this.t = 0;
    this.button.position.y = 0.32;
    this.game.audio.play('switch');
    for (const t of this.targets) t.setActive?.(true);
    this.onActivate?.();
    if (this.duration > 0) this.game.startTimer?.(this.duration);
  }
  update(dt) {
    if (!this.on) {
      const p = this.game.player;
      const b = p.body;
      if (!p.capture && b.grounded && b.ground.c === this.colliders[0]) this.press();
      return;
    }
    if (this.duration <= 0) return;
    this.t += dt;
    const left = this.duration - this.t;
    this.tick -= dt;
    if (left < this.duration && this.tick <= 0) { this.tick = left < 3 ? 0.25 : 0.5; this.game.audio.play('tick', { high: left < 3 }); }
    if (left <= 0) {
      this.on = false; this.button.position.y = 0.45;
      for (const t of this.targets) t.setActive?.(false);
      this.game.stopTimer?.();
    }
  }
  onGroundPound() { this.press(); }
}

// A block/platform that only exists while active (timer switch targets).
export class GhostPlatform extends Entity {
  constructor(level, x, yTop, z, w, h, d, color = '#3a7bff') {
    super(level, x, yTop, z);
    this.mesh = new THREE.Mesh(roundedBox(w, h, d, 0.12, 2), new THREE.MeshStandardMaterial({ color, roughness: 0.3, transparent: true, opacity: 0.25, emissive: color, emissiveIntensity: 0.4 }));
    this.mesh.position.y = -h / 2;
    this.obj.add(this.mesh);
    const c = new BoxCollider(x, yTop - h / 2, z, w / 2, h / 2, d / 2);
    c.enabled = false;
    this.collider = this.addCollider(c);
    this.radius = 0; this.height = 0;
  }
  setActive(on) {
    this.collider.enabled = on;
    this.mesh.material.opacity = on ? 0.95 : 0.25;
    this.mesh.castShadow = on;
    if (on) this.game.fx?.sparkle(this.pos.x, this.pos.y, this.pos.z, 6, [0.6, 0.8, 1]);
  }
}
