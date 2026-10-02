// Ship state and flight model.
//
// The ship lives in a reference frame: the star (inertial), a body's translating frame
// inside its sphere of influence, or the body's rotating frame close to its surface, so
// the ground stays put under you while the sky turns overhead.
//
// FLIGHT mode is Newtonian with flight assist and gravity. CRUISE mode is a velocity
// drive whose top speed scales with distance to the nearest surface, so interplanetary
// trips take a minute and you can never crash at cruise speed.

import { G, C, clamp } from '../core/units.js';
import { SHIP_DRAG_K } from './atmo.js';
import { qMul, qRotate, qConj, qAxis, bodyVelocity, bodyAngularVelocity } from '../world/system.js';

const ID = [0, 0, 0, 1];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const nrm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
function qNormalize(q) { const l = Math.hypot(q[0], q[1], q[2], q[3]) || 1; return [q[0] / l, q[1] / l, q[2] / l, q[3] / l]; }
function qSlerp(a, b, t) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  let bb = b;
  if (d < 0) { d = -d; bb = [-b[0], -b[1], -b[2], -b[3]]; }
  if (d > 0.9995) return qNormalize([a[0] + (bb[0] - a[0]) * t, a[1] + (bb[1] - a[1]) * t, a[2] + (bb[2] - a[2]) * t, a[3] + (bb[3] - a[3]) * t]);
  const th = Math.acos(d), s = Math.sin(th);
  const wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
  return [a[0] * wa + bb[0] * wb, a[1] * wa + bb[1] * wb, a[2] * wa + bb[2] * wb, a[3] * wa + bb[3] * wb];
}
// rotation taking unit vector a to unit vector b
function qFromTo(a, b) {
  const d = dot(a, b);
  if (d < -0.999999) {
    let ax = cross([1, 0, 0], a);
    if (len(ax) < 1e-6) ax = cross([0, 1, 0], a);
    ax = nrm(ax);
    return [ax[0], ax[1], ax[2], 0];
  }
  const c = cross(a, b);
  return qNormalize([c[0], c[1], c[2], 1 + d]);
}

export const vec = { sub, add, scl, dot, len, cross, nrm };
export const quat = { qNormalize, qSlerp, qFromTo };

export class Ship {
  constructor() {
    this.frame = -1;
    this.rot = false;
    this.p = [0, 0, 0];
    this.v = [0, 0, 0];
    this.q = [0, 0, 0, 1];
    this.w = [0, 0, 0];
    this.mode = 'flight';
    this.throttle = 0;
    this.cruiseV = 0;
    this.cruiseCharge = 0;
    this.fuel = 1;
    this.heat = 0;
    this.hull = 1;
    this.gearDown = false;
    this.lights = false;
    this.thrust = 0;
    this.alt = Infinity;
    this.ground = null;
    this.groundNormal = [0, 1, 0];
    this.vertSpeed = 0;
    this.events = [];
    this.bottom = 3.9;
    this.landBody = -1;
    this.autoLevel = 0;
    this.speed = 0;
  }

  // ---------------- frames ----------------
  frameState(world, frame = this.frame, rot = this.rot) {
    if (frame < 0) return { pos: [0, 0, 0], q: ID, vel: [0, 0, 0], omega: [0, 0, 0] };
    const pos = world.positions[frame];
    const vel = world.velocity(frame);
    return {
      pos,
      vel,
      q: rot ? world.orient[frame] : ID,
      omega: rot ? bodyAngularVelocity(world.sys, frame) : [0, 0, 0],
    };
  }

  worldPos(world) {
    const F = this.frameState(world);
    return add(F.pos, qRotate(F.q, this.p));
  }
  worldQ(world) {
    const F = this.frameState(world);
    return qMul(F.q, this.q);
  }
  worldVel(world) {
    const F = this.frameState(world);
    const r = qRotate(F.q, this.p);
    return add(add(F.vel, qRotate(F.q, this.v)), cross(F.omega, r));
  }

  setFrame(world, frame, rot) {
    if (frame === this.frame && rot === this.rot) return;
    const P = this.worldPos(world), V = this.worldVel(world), Q = this.worldQ(world);
    const F = this.frameState(world, frame, rot);
    const qc = qConj(F.q);
    const r = sub(P, F.pos);
    this.p = qRotate(qc, r);
    this.v = qRotate(qc, sub(sub(V, F.vel), cross(F.omega, r)));
    this.q = qNormalize(qMul(qc, Q));
    this.frame = frame;
    this.rot = rot;
  }

  chooseFrame(world) {
    const P = this.worldPos(world);
    const sys = world.sys;
    let best = -1;
    for (const b of sys.bodies) {
      if (b.parent >= 0) continue;
      const bp = world.positions[b.index];
      if (len(sub(P, bp)) < b.soi) {
        best = b.index;
        for (const ci of b.children) {
          const c = sys.bodies[ci];
          if (len(sub(P, world.positions[ci])) < c.soi) best = ci;
        }
      }
    }
    let rot = false;
    if (best >= 0) {
      const b = sys.bodies[best];
      const d = len(sub(P, world.positions[best]));
      const edge = b.radius * 1.5 + (b.atmosphere ? b.atmosphere.top : 0);
      rot = this.frame === best && this.rot ? d < edge * 1.08 : d < edge;
    }
    if (this.mode === 'landed') { best = this.frame; rot = true; }
    this.setFrame(world, best, rot);
  }

  get forward() { return qRotate(this.q, [0, 0, -1]); }
  get up() { return qRotate(this.q, [0, 1, 0]); }
  get right() { return qRotate(this.q, [1, 0, 0]); }

  // ---------------- surface ----------------
  // altitude of the ship origin above the ground of its frame body
  measureGround(world, heightAt) {
    this.ground = null;
    this.alt = Infinity;
    if (this.frame < 0) return;
    const b = world.sys.bodies[this.frame];
    const d = len(this.p);
    const local = this.rot ? scl(this.p, 1 / d) : qRotate(qConj(world.orient[this.frame]), scl(this.p, 1 / d));
    const h = b.solid ? heightAt(this.frame, local) : 0;
    this.groundH = h;
    this.alt = d - (b.radius + h);
    this.ground = { body: b, local, h, d };
  }

  terrainNormal(world, heightAt) {
    const g = this.ground;
    if (!g || !g.body.solid) return this.rot ? nrm(this.p) : nrm(this.p);
    const up = g.local;
    let t1 = cross(up, [0, 1, 0]);
    if (len(t1) < 1e-3) t1 = cross(up, [1, 0, 0]);
    t1 = nrm(t1);
    const t2 = cross(up, t1);
    const e = 2.5 / g.body.radius;
    const R = g.body.radius;
    const sample = (dx, dy) => {
      const dir = nrm(add(up, add(scl(t1, dx * e), scl(t2, dy * e))));
      const h = heightAt(this.frame, dir);
      return scl(dir, R + h);
    };
    const a = sample(-1, 0), b = sample(1, 0), c = sample(0, -1), d = sample(0, 1);
    let n = nrm(cross(sub(b, a), sub(d, c)));
    if (dot(n, up) < 0) n = scl(n, -1);
    // express in frame coordinates
    if (!this.rot) n = qRotate(world.orient[this.frame], n);
    return n;
  }

  // ---------------- control ----------------
  steer(dt, input, freeLook) {
    const stick = input.stick;
    const cruise = this.mode === 'cruise' || this.mode === 'jump';
    const landed = this.mode === 'landed';
    const maxPY = cruise ? 0.42 : 1.0;
    const maxR = cruise ? 0.8 : 1.5;
    let tp = 0, ty = 0, tr = 0;
    if (!landed && !freeLook && this.mode !== 'jump') {
      tp = -stick.y * maxPY;
      ty = -stick.x * maxPY;
    }
    if (!landed && this.mode !== 'jump') {
      if (input.down('ArrowUp')) tp -= maxPY * 0.7;
      if (input.down('ArrowDown')) tp += maxPY * 0.7;
      if (input.down('ArrowLeft')) ty += maxPY * 0.7;
      if (input.down('ArrowRight')) ty -= maxPY * 0.7;
      if (input.down('KeyA')) tr += maxR;
      if (input.down('KeyD')) tr -= maxR;
    }
    // gentle auto-level close to the ground when the pilot is not steering hard
    if (this.mode === 'flight' && this.alt < 600 && this.frame >= 0) {
      const upLocal = nrm(this.p);
      const shipUp = this.up;
      const err = cross(shipUp, upLocal); // frame coords
      const errBody = qRotate(qConj(this.q), err);
      const k = clamp(1 - Math.hypot(stick.x, stick.y) * 2, 0, 1) * clamp((600 - this.alt) / 400, 0, 1) * 1.2;
      tp += errBody[0] * k;
      tr += errBody[2] * k;
    }
    const a = 1 - Math.exp(-dt * (cruise ? 3 : 5));
    this.w[0] += (tp - this.w[0]) * a;
    this.w[1] += (ty - this.w[1]) * a;
    this.w[2] += (tr - this.w[2]) * a;
    const ang = len(this.w) * dt;
    if (ang > 1e-9) {
      const ax = nrm(this.w);
      this.q = qNormalize(qMul(this.q, qAxis(ax[0], ax[1], ax[2], ang)));
    }
  }

  // Turn toward a frame-space direction (used by the jump drive and autopilot).
  turnToward(dir, dt, rate = 0.8) {
    const f = this.forward;
    const d = dot(f, dir);
    const axis = cross(f, dir);
    const s = len(axis);
    if (s < 1e-6 && d > 0) return 1;
    const ang = Math.atan2(s, d);
    const step = Math.min(ang, rate * dt);
    const ax = s > 1e-6 ? scl(axis, 1 / s) : this.up;
    this.q = qNormalize(qMul(qAxis(ax[0], ax[1], ax[2], step), this.q));
    this.w = [0, 0, 0];
    return d;
  }

  // ---------------- flight ----------------
  updateFlight(dt, input, world, heightAt) {
    const b = this.frame >= 0 ? world.sys.bodies[this.frame] : null;
    // gravity of the frame body (or the star)
    let gvec = [0, 0, 0];
    const M = b ? b.mass : world.sys.star.mass;
    const r = len(this.p);
    if (r > 1) gvec = scl(this.p, (-G * M) / (r * r * r));
    if (!b) {
      // star-centred frame: p is the position relative to the star
      gvec = scl(this.p, (-G * world.sys.star.mass) / Math.max(r * r * r, 1));
    }
    const gmag = len(gvec);
    const alt = this.alt;
    // speed limits that keep ground flying manageable; a gas giant has no ground
    const groundAlt = b && b.solid ? alt : 1e9;
    // the speed boost cheat raises the ceiling and the thrust, and loosens the low-level limit a little
    const boost = this.boost || 1;
    const vmax = clamp((60 + (isFinite(groundAlt) ? groundAlt : 1e9) * 0.35) * Math.min(boost, 10), 60, 2500 * boost);
    // aerodynamic drag against the air, which turns with the planet
    const rho = this.air ? this.air.rho : 0;
    const vlen = len(this.v);
    const aDrag = rho > 0 ? scl(this.v, -SHIP_DRAG_K * rho * vlen) : [0, 0, 0];
    const strafe = [0, 0, 0];
    if (input.down('KeyQ')) strafe[0] -= 1;
    if (input.down('KeyE')) strafe[0] += 1;
    if (input.down('KeyR')) strafe[1] += 1;
    if (input.down('KeyF')) strafe[1] -= 1;
    const sv = clamp(15 + (isFinite(groundAlt) ? groundAlt : 1e4) * 0.05, 15, 80);
    const vCmdBody = [strafe[0] * sv, strafe[1] * sv * 0.8, -this.throttle * vmax];
    const vCmd = qRotate(this.q, vCmdBody);
    const tau = 0.9;
    const aReq = sub(sub(scl(sub(vCmd, this.v), 1 / tau), gvec), aDrag);
    const ab = qRotate(qConj(this.q), aReq);
    // boosted, the main engine can reach its new ceiling in about ten seconds
    const kb = boost > 1 ? boost * 6 : 1;
    const lim = { fwd: 34 * kb, back: 16 * kb, lat: 12 * Math.sqrt(kb), up: 26 * Math.sqrt(kb), down: 12 * Math.sqrt(kb) };
    ab[0] = clamp(ab[0], -lim.lat, lim.lat);
    ab[1] = clamp(ab[1], -lim.down, lim.up);
    ab[2] = clamp(ab[2], -lim.fwd, lim.back);
    this.thrust = clamp(Math.max(-ab[2], 0) / lim.fwd + Math.abs(ab[1]) / lim.up * 0.25, 0, 1);
    if (boost > 1) this.thrust = Math.max(this.thrust, clamp(Math.max(-ab[2], 0) / 34, 0, 1));
    const a = add(qRotate(this.q, ab), gvec);
    // drag applied semi-implicitly so it stays stable in very dense air
    this.v = scl(add(this.v, scl(a, dt)), 1 / (1 + SHIP_DRAG_K * rho * vlen * dt));
    const sp = len(this.v);
    if (sp > 0.995 * C) this.v = scl(this.v, (0.995 * C) / sp);
    this.p = add(this.p, scl(this.v, dt));
    this.gmag = gmag;
    this.dragG = len(aDrag) / 9.81;
    this.canHover = lim.up > gmag * 1.02;
  }

  updateCruise(dt, nearest, airLimit = Infinity) {
    const boost = this.boost || 1;
    // never cover more than most of the gap to the nearest surface in one step, so even a
    // boosted drive cannot carry the ship through a world
    const cap = Math.min(clamp(0.38 * nearest * boost, 400, 2400 * C * boost), airLimit, (0.9 * nearest) / Math.max(dt, 1e-3));
    const target = this.throttle * cap;
    const spool = 1.15 * (1 + Math.log10(boost) * 0.9);
    if (this.cruiseV < target) this.cruiseV = Math.min(target, this.cruiseV * Math.exp(spool * dt) + 300 * dt);
    else this.cruiseV = target + (this.cruiseV - target) * Math.exp(-5 * dt);
    this.cruiseV = Math.min(this.cruiseV, cap);
    this.cruiseCap = cap;
    this.v = scl(this.forward, this.cruiseV);
    this.p = add(this.p, scl(this.v, dt));
    this.thrust = 0;
  }

  // Resolve contact with the ground after a flight step.
  collide(world, heightAt) {
    if (this.frame < 0 || this.mode !== 'flight') return null;
    this.measureGround(world, heightAt);
    const g = this.ground;
    if (!g) return null;
    const b = g.body;
    if (!b.solid) {
      if (this.alt < 0) return { type: 'gas', depth: -this.alt };
      return null;
    }
    const clearance = this.alt - this.bottom;
    if (clearance > 0) return null;
    // contact
    const n = this.terrainNormal(world, heightAt);
    const upLocal = nrm(this.p);
    const vn = dot(this.v, n);
    const speed = len(this.v);
    const slopeOk = dot(n, upLocal) > 0.82;
    const shipUpOk = dot(this.up, n) > 0.8;
    const gearOk = this.gearReady;
    // push out of the ground
    this.p = add(this.p, scl(upLocal, -clearance));
    if (gearOk && speed < 7.5 && slopeOk && shipUpOk && b.landable) {
      return { type: 'land', normal: n, speed };
    }
    let damage = 0;
    const impact = Math.max(-vn, 0);
    if (impact > (gearOk ? 6 : 2.5)) damage = (impact - (gearOk ? 6 : 2.5)) * (gearOk ? 0.025 : 0.05);
    if (!b.landable && impact > 1) damage += 0.05;
    // slide along the ground, losing energy
    if (vn < 0) this.v = sub(this.v, scl(n, vn * 1.35));
    this.v = scl(this.v, 0.92);
    return { type: 'scrape', damage, impact, normal: n };
  }

  land(world, normal) {
    this.mode = 'landed';
    this.v = [0, 0, 0];
    this.w = [0, 0, 0];
    this.throttle = 0;
    this.landNormal = normal;
    this.landBody = this.frame;
    // keep heading, align up with the ground
    const align = qFromTo(this.up, normal);
    this.landQ = qNormalize(qMul(align, this.q));
  }

  updateLanded(dt, world, heightAt) {
    // settle smoothly on the gear
    if (this.landQ) this.q = qSlerp(this.q, this.landQ, 1 - Math.exp(-dt * 4));
    this.measureGround(world, heightAt);
    if (this.ground) {
      const upLocal = nrm(this.p);
      const want = this.ground.body.radius + this.groundH + this.bottom;
      const d = len(this.p);
      this.p = scl(upLocal, d + (want - d) * (1 - Math.exp(-dt * 6)));
    }
    this.v = [0, 0, 0];
    this.thrust = 0;
  }

  takeoff() {
    this.mode = 'flight';
    this.v = scl(nrm(this.p), 4);
    this.landQ = null;
    this.events.push('takeoff');
  }
}
