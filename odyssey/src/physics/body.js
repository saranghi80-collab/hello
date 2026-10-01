// Kinematic character body: a vertical cylinder with step-up, ground snapping,
// slope limits, wall contacts and moving-platform riding.
import * as THREE from 'three';
import { clamp } from '../core/math.js';

export class Body {
  constructor(world, opts = {}) {
    this.world = world;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.radius = opts.radius ?? 0.4;
    this.height = opts.height ?? 1.6;
    this.stepUp = opts.stepUp ?? 0.42;
    this.airStep = opts.airStep ?? 0.28;
    this.snap = opts.snap ?? 0.5;
    this.footR = opts.footR ?? this.radius * 0.62;
    this.maxSlopeNy = opts.maxSlopeNy ?? 0.64; // ~50 degrees
    this.grounded = false;
    this.ground = { y: 0, nx: 0, ny: 1, nz: 0, c: null };
    this._res = { y: 0, nx: 0, ny: 1, nz: 0, c: null };
    this.wall = null;
    this.ceilingHit = null;
    this.landed = false;
    this.landVy = 0;
    this.noSnap = 0;      // seconds during which ground snapping is disabled (after a jump)
    this.steep = false;
    this.collide = true;
    this.ignoreOneWay = false;
  }

  setPos(x, y, z) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
    this.grounded = false;
    this.ground.c = null;
  }

  // Ride moving platforms. Returns yaw delta to apply to the rider's facing.
  ride() {
    const c = this.ground.c;
    if (this.grounded && c && c.dynamic) return c.carry(this.pos);
    return 0;
  }

  // Jump: leave the ground and suppress snapping briefly.
  leaveGround(vy) {
    this.vel.y = vy;
    this.grounded = false;
    this.noSnap = 0.12;
  }

  move(dt) {
    this.wall = null;
    this.ceilingHit = null;
    this.landed = false;
    if (!this.collide) {
      this.pos.addScaledVector(this.vel, dt);
      this.grounded = false;
      return;
    }
    const pos = this.pos, vel = this.vel, world = this.world;
    const sp = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
    const steps = clamp(Math.ceil((sp * dt) / (this.radius * 0.5)), 1, 16);
    const h = dt / steps;
    const res = this._res;

    for (let k = 0; k < steps; k++) {
      // ---- horizontal ----
      const ox = pos.x, oz = pos.z;
      pos.x += vel.x * h;
      pos.z += vel.z * h;
      const feet = pos.y;
      const wallMin = feet + (this.grounded ? this.stepUp : this.airStep);
      const contact = world.pushOut(pos, this.radius, wallMin, feet + this.height);
      if (contact) {
        this.wall = contact;
        const vn = vel.x * contact.nx + vel.z * contact.nz;
        if (vn < 0) { vel.x -= vn * contact.nx; vel.z -= vn * contact.nz; this.wall.into = -vn; }
        else this.wall.into = 0;
      }

      // ---- vertical ----
      const prevY = pos.y;
      pos.y += vel.y * h;
      if (vel.y > 0) {
        const c = world.ceil(pos.x, pos.z, prevY + this.height - 0.02, pos.y + this.height, this.radius * 0.7);
        if (c) {
          pos.y = c.y - this.height;
          vel.y = 0;
          this.ceilingHit = c;
        }
        this.grounded = false;
      } else {
        const snapping = this.grounded && this.noSnap <= 0;
        const top = prevY + (this.grounded ? this.stepUp : this.airStep);
        const bottom = pos.y - (snapping ? this.snap : 0);
        let f = world.floor(pos.x, pos.z, bottom, top, this.footR, res);
        if (f && f.ny < this.maxSlopeNy && f.y > prevY + 0.01 && (pos.x !== ox || pos.z !== oz)) {
          // Too steep to climb: treat as a wall and undo the horizontal step.
          const hn = Math.hypot(f.nx, f.nz) || 1;
          const nx = f.nx / hn, nz = f.nz / hn;
          pos.x = ox; pos.z = oz;
          const vn = vel.x * nx + vel.z * nz;
          if (vn < 0) { vel.x -= vn * nx; vel.z -= vn * nz; }
          if (!this.wall) this.wall = { c: f.c, nx, nz, top: f.y, into: Math.max(0, -vn), steep: true };
          f = world.floor(pos.x, pos.z, bottom, prevY + 0.01 + (this.grounded ? this.stepUp : this.airStep), this.footR, res);
        }
        if (f && !(this.ignoreOneWay && f.c.oneWay)) {
          if (!this.grounded) { this.landed = true; this.landVy = vel.y; }
          pos.y = f.y;
          vel.y = 0;
          this.grounded = true;
          const g = this.ground;
          g.y = f.y; g.nx = f.nx; g.ny = f.ny; g.nz = f.nz; g.c = f.c;
        } else {
          this.grounded = false;
        }
      }
    }
    this.steep = this.grounded && this.ground.ny < this.maxSlopeNy;
    if (this.noSnap > 0) this.noSnap -= dt;
  }
}
