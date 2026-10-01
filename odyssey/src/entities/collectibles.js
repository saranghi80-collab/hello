// Coins (instanced), regional coins, Power Moons, moon shards and hearts.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { coinGeometry, coinMaterial, purpleCoinGeometry, purpleCoinMaterial, createMoonMesh, heartGeometry } from '../gfx/props.js';
import { mat } from '../gfx/model.js';

const M4 = new THREE.Matrix4();
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);

// All the gold + regional coins of a level in two instanced meshes.
export class CoinField {
  constructor(level) {
    this.level = level;
    this.game = level.game;
    this.gold = [];
    this.purple = [];
    this.goldMesh = null;
    this.purpleMesh = null;
    this.radius = 0.85;
    this.alive = true;
    this.pos = new THREE.Vector3();
    this.height = 0;
    level.add(this);
  }
  add(x, y, z) { this.gold.push({ x, y, z, alive: true }); return this.gold.length - 1; }
  addPurple(id, x, y, z) {
    const got = this.game.save.hasPurple(this.level.id, id);
    this.purple.push({ id, x, y, z, alive: !got });
  }
  build(purpleShape, purpleColor) {
    if (this.gold.length) {
      this.goldMesh = new THREE.InstancedMesh(coinGeometry(), coinMaterial(), this.gold.length);
      this.gold.forEach((c, i) => this.goldMesh.setMatrixAt(i, M4.makeTranslation(c.x, c.y, c.z)));
      this.goldMesh.castShadow = true;
      this.goldMesh.computeBoundingSphere();
      this.level.root.add(this.goldMesh);
    }
    if (this.purple.length) {
      this.purpleMesh = new THREE.InstancedMesh(purpleCoinGeometry(purpleShape), purpleCoinMaterial(purpleColor), this.purple.length);
      this.purple.forEach((c, i) => this.purpleMesh.setMatrixAt(i, c.alive ? M4.makeTranslation(c.x, c.y, c.z) : ZERO));
      this.purpleMesh.castShadow = true;
      this.purpleMesh.computeBoundingSphere();
      this.level.root.add(this.purpleMesh);
    }
  }
  update(dt) {
    const player = this.game.player;
    if (player.dead) return;
    const actor = player.capture || player;
    const ax = actor.pos.x, ay = actor.pos.y + (actor.height ?? 1.5) * 0.5, az = actor.pos.z;
    const cap = player.cappy && player.cappy.isOut() ? player.cappy.pos : null;
    const r2 = 1.0, cr2 = 0.9;
    const check = (arr, mesh, purple) => {
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (!c.alive) continue;
        const dx = c.x - ax, dy = c.y - ay, dz = c.z - az;
        let hit = dx * dx + dz * dz < r2 && Math.abs(dy) < 1.2;
        if (!hit && cap) {
          const ex = c.x - cap.x, ey = c.y - cap.y, ez = c.z - cap.z;
          hit = ex * ex + ey * ey + ez * ez < cr2;
        }
        if (hit) {
          c.alive = false;
          mesh.setMatrixAt(i, ZERO);
          mesh.instanceMatrix.needsUpdate = true;
          if (purple) this.game.collectPurple(this.level, c.id, c);
          else this.game.addCoins(1, c);
        }
      }
    };
    if (this.goldMesh) check(this.gold, this.goldMesh, false);
    if (this.purpleMesh) check(this.purple, this.purpleMesh, true);
  }
  dispose() {
    this.goldMesh?.dispose(); this.purpleMesh?.dispose();
  }
}

// A coin that pops out of a block / enemy and is auto-collected.
export class PopCoin extends Entity {
  constructor(level, x, y, z, opts = {}) {
    super(level, x, y, z);
    const m = new THREE.Mesh(coinGeometry(), coinMaterial());
    this.obj.add(m);
    this.vy = opts.vy ?? 11;
    this.vx = opts.vx ?? 0; this.vz = opts.vz ?? 0;
    this.t = 0;
    this.auto = opts.auto ?? true;
    this.radius = 0.6; this.height = 0.9;
    this.ground = opts.ground ?? -Infinity;
  }
  update(dt) {
    this.t += dt;
    this.vy -= 30 * dt;
    this.pos.x += this.vx * dt; this.pos.y += this.vy * dt; this.pos.z += this.vz * dt;
    if (this.pos.y < this.ground + 0.5) { this.pos.y = this.ground + 0.5; this.vy = Math.abs(this.vy) * 0.4; this.vx *= 0.5; this.vz *= 0.5; }
    this.obj.position.copy(this.pos);
    this.obj.rotation.y += dt * 20;
    if (this.auto && this.t > 0.45) { this.game.addCoins(1, this.pos); this.kill(); }
    if (!this.auto && this.t > 8) { this.obj.visible = Math.floor(this.t * 10) % 2 === 0; if (this.t > 10) this.kill(); }
  }
  onPlayer() { if (!this.auto && this.t > 0.2) { this.game.addCoins(1, this.pos); this.kill(); } }
}

// Power Moon
export class Moon extends Entity {
  constructor(level, def) {
    super(level, def.x, def.y, def.z);
    this.def = def;
    this.id = def.id;
    this.collected = this.game.save.hasMoon(level.id, def.id);
    this.color = def.color || level.def.moonColor || '#ffd43b';
    this.mesh = createMoonMesh(this.color, { ghost: this.collected, multi: def.multi });
    this.obj.add(this.mesh);
    this.radius = def.multi ? 1.2 : 0.8;
    this.height = 1.6;
    this.baseY = def.y;
    this.visible = !def.hidden;
    this.obj.visible = this.visible;
    this.appearT = this.visible ? 1 : 0;
    this.taken = false;
    this.t = Math.random() * 6;
    this.sparkT = 0;
    level.moonDefs.push(def);
    def.entity = this;
  }
  appear(from = null, opts = {}) {
    if (this.visible || this.taken) return;
    this.visible = true;
    this.obj.visible = true;
    this.appearT = 0;
    this.from = from ? from.clone() : this.pos.clone().setY(this.baseY - 2);
    if (opts.at) { this.pos.copy(opts.at); this.baseY = opts.at.y; }
    this.game.audio.play('moonappear');
    this.game.fx?.burst(this.pos.x, this.pos.y, this.pos.z, 24, [1, 0.95, 0.6], 6);
  }
  update(dt) {
    if (!this.visible) return;
    this.t += dt;
    if (this.appearT < 1) {
      this.appearT = Math.min(1, this.appearT + dt / 0.7);
      const k = this.appearT;
      const e = 1 - Math.pow(1 - k, 3);
      this.obj.position.lerpVectors(this.from, this.pos, e);
      this.obj.position.y += Math.sin(k * Math.PI) * 2;
      this.mesh.scale.setScalar(0.3 + 0.7 * e);
      this.obj.rotation.y += dt * 18;
      return;
    }
    this.pos.y = this.baseY + Math.sin(this.t * 2.2) * 0.15;
    this.obj.position.copy(this.pos);
    this.obj.rotation.y += dt * 2.4;
    const ring = this.mesh.userData.ring;
    if (ring) ring.rotation.z += dt * 1.5;
    if (!this.collected) {
      this.sparkT += dt;
      if (this.sparkT > 0.12) { this.sparkT = 0; this.game.fx?.sparkle(this.pos.x, this.pos.y + 0.2, this.pos.z, 1, [1, 1, 0.8], 1.6); }
    }
  }
  onPlayer() {
    if (!this.visible || this.taken || this.appearT < 1) return;
    this.taken = true;
    this.game.collectMoon(this);
  }
}

// Moon shards: collect all in a group to spawn the moon.
export class MoonShard extends Entity {
  constructor(level, x, y, z, group) {
    super(level, x, y, z);
    this.group = group; // {moon, total, got}
    const g = new THREE.OctahedronGeometry(0.35, 0);
    g.scale(0.7, 1.2, 0.7);
    const color = level.def.moonColor || '#ffd43b';
    this.mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.3 }));
    this.obj.add(this.mesh);
    this.radius = 0.6; this.height = 1.2;
    this.t = Math.random() * 5;
    group.total = (group.total || 0) + 1;
    group.got = group.got || 0;
    if (group.moon && group.moon.collected) { this.kill(); group.got++; }
  }
  update(dt) {
    this.t += dt;
    this.mesh.rotation.y += dt * 3;
    this.mesh.position.y = 0.5 + Math.sin(this.t * 3) * 0.12;
  }
  onPlayer() {
    this.kill();
    const g = this.group;
    g.got++;
    this.game.fx?.burst(this.pos.x, this.pos.y + 0.5, this.pos.z, 14, [1, 0.9, 0.5], 4);
    this.game.audio.play('shard', { pitch: g.got });
    this.game.toast(`Moon Shard ${g.got} / ${g.total}`);
    if (g.got >= g.total && g.moon) g.moon.appear(this.pos.clone().add(new THREE.Vector3(0, 1, 0)));
  }
}

export class Heart extends Entity {
  constructor(level, x, y, z, big = false) {
    super(level, x, y, z);
    this.big = big;
    const m = new THREE.Mesh(heartGeometry(), mat(big ? '#ff3d7a' : '#ff2a3d', { roughness: 0.25, metalness: 0.2, emissive: big ? '#ff3d7a' : '#ff2a3d', emissiveIntensity: 0.35 }));
    m.castShadow = true;
    m.position.y = 0.7;
    if (big) m.scale.setScalar(1.6);
    this.mesh = m;
    this.obj.add(m);
    this.radius = 0.7; this.height = 1.4;
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    this.mesh.rotation.y += dt * 2.5;
    this.mesh.position.y = 0.7 + Math.sin(this.t * 3) * 0.1;
  }
  onPlayer(player) {
    if (player.capture) return;
    this.kill();
    if (this.big) { player.maxHp = 6; player.hp = 6; this.game.toast('Life-Up! Max health is now 6'); }
    else player.heal(1);
    this.game.audio.play('heart');
    this.game.fx?.burst(this.pos.x, this.pos.y + 0.7, this.pos.z, 16, [1, 0.4, 0.5], 4);
  }
}
