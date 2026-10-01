import * as THREE from 'three';

export class Entity {
  constructor(level, x, y, z) {
    this.level = level;
    this.game = level.game;
    this.pos = new THREE.Vector3(x, y, z);
    this.radius = 0.5;
    this.height = 1;
    this.alive = true;
    this.obj = new THREE.Group();
    this.obj.position.set(x, y, z);
    this.colliders = [];
    level.root.add(this.obj);
    level.add(this);
  }
  addCollider(c) { c.entity = this; this.level.world.add(c); this.colliders.push(c); return c; }
  removeColliders() { for (const c of this.colliders) this.level.world.remove(c); this.colliders = []; }
  kill() {
    if (!this.alive) return;
    this.alive = false;
    this.obj.removeFromParent();
    this.removeColliders();
  }
  get player() { return this.game.player; }
  distToPlayer() {
    const a = this.game.player.capture || this.game.player;
    return Math.hypot(a.pos.x - this.pos.x, a.pos.y - this.pos.y, a.pos.z - this.pos.z);
  }
  flatDistToPlayer() {
    const a = this.game.player.capture || this.game.player;
    return Math.hypot(a.pos.x - this.pos.x, a.pos.z - this.pos.z);
  }
}
