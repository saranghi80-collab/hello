// The jump: not faster than light. The drive accelerates the ship to within a hair of the
// speed of light, and the starfield crowds forward into a single point as aberration and
// Doppler shift take hold. Days pass aboard. Decades pass at home.

import { C, LY, AU, YEAR, DAY } from '../core/units.js';
import { distLy } from '../world/galaxy.js';
import { setSkyBeta } from '../render/sky.js';

const GAMMA_MAX = 1000;
const PHI_MAX = Math.acosh(GAMMA_MAX);
const T_CHARGE = 6;
const T_ACCEL = 7;
const T_TRANSIT = 4.5;
const T_DECEL = 7.5;

const phiAt = (u) => PHI_MAX * Math.pow(Math.max(0, Math.min(1, u)), 2.4);

export class JumpDrive {
  constructor(game) {
    this.game = game;
    this.phase = 'idle';
  }

  get active() { return this.phase !== 'idle'; }

  start(target) {
    const g = this.game;
    this.target = target;
    this.origin = g.star;
    this.distLy = distLy(target.pos, this.origin.pos);
    const d = this.distLy;
    this.dir = [(target.pos[0] - this.origin.pos[0]) / d, (target.pos[1] - this.origin.pos[1]) / d, (target.pos[2] - this.origin.pos[2]) / d];
    // the fast-jump cheat runs the same sequence in a quarter of the time
    const k = g.cheats && g.cheats.fastJump ? 0.25 : 1;
    this.Tc = T_CHARGE * k; this.Ta = T_ACCEL * k; this.Tt = Math.max(1.2, T_TRANSIT * k); this.Td = T_DECEL * k;
    this.turnRate = k < 1 ? 2.5 : 0.7;
    this.phase = 'charge';
    this.t = 0;
    this.swapped = false;
    this.homeAdded = 0;
    this.homeTotal = d + 0.35;
    this.shipTotal = (d / GAMMA_MAX) + (T_ACCEL + T_DECEL) * 2 * DAY / YEAR; // most proper time is spent accelerating
    this.shipAdded = 0;
    g.ship.mode = 'jump';
    g.ship.throttle = 0;
    g.audio.engage();
  }

  cancel(reason) {
    const g = this.game;
    this.phase = 'idle';
    g.ship.mode = 'flight';
    setSkyBeta(g.engine.sky.uniforms, 0);
    if (reason) g.hud.note(reason, 'warn');
  }

  beta() {
    if (this.phase === 'accel') return Math.tanh(phiAt(this.t / this.Ta));
    if (this.phase === 'transit') return Math.tanh(PHI_MAX);
    if (this.phase === 'decel') return Math.tanh(phiAt(1 - this.t / this.Td));
    return 0;
  }

  // distance still to cover during deceleration from time t
  remaining(t) {
    let s = 0;
    const n = 400;
    const dt = (this.Td - t) / n;
    for (let i = 0; i < n; i++) {
      const tt = t + (i + 0.5) * dt;
      s += Math.tanh(phiAt(1 - tt / this.Td)) * C * dt;
    }
    return s;
  }

  update(dt) {
    const g = this.game;
    const ship = g.ship;
    this.t += dt;
    const sky = g.engine.sky;
    let jumpLevel = 0;
    if (this.phase === 'charge') {
      // auto-align with the target star
      const d = ship.frame >= 0 && ship.rot ? g.dirToFrame(this.dir) : g.dirToFrame(this.dir);
      const align = ship.turnToward(d, dt, this.turnRate);
      jumpLevel = this.t / this.Tc * 0.5;
      if (this.t >= this.Tc) {
        if (align < 0.9995) { this.t = this.Tc - 0.5 * this.Tc / T_CHARGE; }
        else {
          ship.setFrame(g.world, -1, false);
          ship.v = [0, 0, 0];
          this.phase = 'accel'; this.t = 0;
          g.audio.jumpBoom();
          g.engine.post.flash = 0.6;
        }
      }
    } else if (this.phase === 'accel') {
      const b = this.beta();
      ship.p = [ship.p[0] + this.dir[0] * b * C * dt, ship.p[1] + this.dir[1] * b * C * dt, ship.p[2] + this.dir[2] * b * C * dt];
      ship.q = g.qLookDir(this.dir);
      jumpLevel = 0.5 + 0.5 * (this.t / this.Ta);
      this.advanceClocks(dt, 0.03);
      if (this.t >= this.Ta) { this.phase = 'transit'; this.t = 0; }
    } else if (this.phase === 'transit') {
      jumpLevel = 1;
      this.advanceClocks(dt, 0.94);
      if (!this.swapped && this.t > 0.6) {
        this.swapped = true;
        this.decelDistance = this.remaining(0);
        g.arriveSystem(this.target, this.dir, this.decelDistance);
      }
      if (this.t >= this.Tt && !g.engine.sky.pending) { this.phase = 'decel'; this.t = 0; }
    } else if (this.phase === 'decel') {
      const rem = this.remaining(Math.min(this.t, this.Td));
      const D = g.arrivalDistance;
      ship.p = [-this.dir[0] * (D + rem), -this.dir[1] * (D + rem), -this.dir[2] * (D + rem)];
      ship.q = g.qLookDir(this.dir);
      jumpLevel = 1 - this.t / this.Td;
      this.advanceClocks(dt, 0.03);
      if (this.t >= this.Td) this.finish();
    }
    const b = this.beta();
    setSkyBeta(sky.uniforms, b);
    sky.uniforms.uVelDir.value.set(this.dir[0], this.dir[1], this.dir[2]);
    this.jumpLevel = jumpLevel;
    return jumpLevel;
  }

  advanceClocks(dt, share) {
    const g = this.game;
    const phaseDur = this.phase === 'transit' ? this.Tt : this.phase === 'accel' ? this.Ta : this.Td;
    const addH = Math.min(this.homeTotal - this.homeAdded, (this.homeTotal * share * dt) / phaseDur);
    this.homeAdded += addH;
    g.homeYears += addH;
    const addS = Math.min(this.shipTotal - this.shipAdded, (this.shipTotal * share * dt) / phaseDur);
    this.shipAdded += addS;
    g.shipYears += addS;
  }

  finish() {
    const g = this.game;
    g.homeYears += this.homeTotal - this.homeAdded;
    g.shipYears += this.shipTotal - this.shipAdded;
    this.phase = 'idle';
    setSkyBeta(g.engine.sky.uniforms, 0);
    g.ship.mode = 'flight';
    g.ship.v = [0, 0, 0];
    g.ship.throttle = 0;
    g.onArrived(this.origin, this.distLy);
  }

  hudInfo() {
    const b = this.beta();
    const gamma = 1 / Math.sqrt(Math.max(1 - b * b, 1e-12));
    const titles = { charge: `JUMP DRIVE CHARGING · ${Math.max(0, this.Tc - this.t).toFixed(1)} s`, accel: 'ACCELERATING', transit: `IN TRANSIT TO ${this.target.name.toUpperCase()}`, decel: 'DECELERATING' };
    return {
      title: titles[this.phase],
      beta: this.phase === 'charge' ? 0 : b,
      gamma,
      clock: `Aboard +${(this.shipAdded * 365.25).toFixed(1)} days   ·   At home +${this.homeAdded.toFixed(2)} years`,
    };
  }
}

export { LY, AU };
