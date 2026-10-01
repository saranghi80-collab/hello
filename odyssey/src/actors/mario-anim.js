// Procedural animation for the jointed Mario model.
// Each frame the player sets `pose` (name + params); the animator builds target joint
// rotations and damps the skeleton toward them. Flips/spins are applied explicitly.
import { damp, clamp, TAU } from '../core/math.js';

const JOINTS = ['pelvis', 'torso', 'head', 'legL', 'legR', 'kneeL', 'kneeR', 'footL', 'footR', 'armL', 'armR', 'elbowL', 'elbowR', 'handL', 'handR'];
const L1 = 0.22, L2 = 0.2;

// 2-bone leg IK in the sagittal plane: returns [thigh, knee] angles for a hip drop.
function legIK(drop, forward = 0) {
  const D = clamp(L1 + L2 - drop, 0.12, L1 + L2 - 0.001);
  const kInt = Math.acos(clamp((L1 * L1 + L2 * L2 - D * D) / (2 * L1 * L2), -1, 1));
  const a = Math.acos(clamp((L1 * L1 + D * D - L2 * L2) / (2 * L1 * D), -1, 1));
  return [-a + forward, Math.PI - kInt];
}

export class MarioAnimator {
  constructor(model) {
    this.m = model;
    this.j = model.joints;
    this.t = {}; // targets: name -> [x,y,z]
    for (const n of JOINTS) this.t[n] = [0, 0, 0];
    this.phase = 0;
    this.time = 0;
    this.sq = 1; this.sqv = 0; // squash spring
    this.flip = null;          // {axis:'x'|'y'|'z', angle}
    this.spinTarget = [0, 0, 0];
    this.drop = 0;             // pelvis drop (crouch)
    this.lift = 0;             // extra vertical offset of the body
    this.rate = 18;
    this.blinkT = 0;
  }

  impulse(amount) { this.sqv += amount; }

  set(n, x = 0, y = 0, z = 0) { const a = this.t[n]; a[0] = x; a[1] = y; a[2] = z; }

  reset() {
    for (const n of JOINTS) this.set(n);
    this.set('armL', 0.05, 0, 0.22);
    this.set('armR', 0.05, 0, -0.22);
    this.set('elbowL', -0.25); this.set('elbowR', -0.25);
    this.spinTarget[0] = this.spinTarget[1] = this.spinTarget[2] = 0;
    this.drop = 0; this.lift = 0;
    this.rate = 18;
  }

  // pose: { name, speed, t (state time), vy, flip, lean, turn, ... }
  update(dt, pose) {
    this.time += dt;
    this.reset();
    const p = pose;
    const name = p.name;
    const sp = p.speed || 0;
    const t = this.time;

    switch (name) {
      case 'idle': {
        const b = Math.sin(t * 2.2);
        this.set('torso', 0.02 + b * 0.015, Math.sin(t * 0.5) * 0.05, 0);
        this.set('head', -0.05 + b * 0.01, Math.sin(t * 0.37) * 0.35 * Math.max(0, Math.sin(t * 0.21)), 0);
        this.set('armL', 0.05, 0, 0.28 + b * 0.03);
        this.set('armR', 0.05, 0, -0.28 - b * 0.03);
        this.set('elbowL', -0.3); this.set('elbowR', -0.3);
        this.drop = 0.01 + b * 0.008;
        const [th, kn] = legIK(this.drop);
        this.set('legL', th, 0, 0.03); this.set('legR', th, 0, -0.03);
        this.set('kneeL', kn); this.set('kneeR', kn);
        this.set('footL', -th - kn); this.set('footR', -th - kn);
        break;
      }
      case 'run': {
        const run = clamp(sp / 9.5, 0, 1);
        this.phase += dt * (3.2 + sp * 1.02);
        const ph = this.phase;
        const s = Math.sin(ph), c = Math.cos(ph);
        const A = 0.35 + 0.65 * run;
        this.set('legL', s * 0.95 * A - 0.1 * run, 0, 0.04);
        this.set('legR', -s * 0.95 * A - 0.1 * run, 0, -0.04);
        this.set('kneeL', 0.25 + Math.max(0, -c) * 1.5 * A);
        this.set('kneeR', 0.25 + Math.max(0, c) * 1.5 * A);
        this.set('footL', -0.15 + Math.max(0, c) * 0.4 * A);
        this.set('footR', -0.15 + Math.max(0, -c) * 0.4 * A);
        this.set('armL', -s * 1.0 * A, 0, 0.25 + 0.15 * run);
        this.set('armR', s * 1.0 * A, 0, -0.25 - 0.15 * run);
        this.set('elbowL', -0.5 - 0.9 * run); this.set('elbowR', -0.5 - 0.9 * run);
        this.set('torso', 0.12 + 0.22 * run, s * 0.18 * A, (p.turn || 0) * -0.25);
        this.set('pelvis', 0, -s * 0.12 * A, (p.turn || 0) * -0.15);
        this.set('head', -0.12 - 0.12 * run, -s * 0.08 * A, 0);
        this.lift = Math.abs(c) * 0.07 * A - 0.02 * run;
        this.rate = 24;
        break;
      }
      case 'skid': {
        this.set('torso', -0.45, 0, 0);
        this.set('head', 0.2, 0, 0);
        this.set('legL', -0.75, 0, 0.15); this.set('kneeL', 0.4);
        this.set('legR', 0.35, 0, -0.1); this.set('kneeR', 0.9);
        this.set('armL', 0.6, 0, 1.0); this.set('armR', 0.6, 0, -1.0);
        this.set('elbowL', -0.4); this.set('elbowR', -0.4);
        this.drop = 0.1;
        break;
      }
      case 'crouch': {
        this.drop = 0.2;
        const [th, kn] = legIK(this.drop, -0.15);
        this.set('legL', th, 0, 0.12); this.set('legR', th, 0, -0.12);
        this.set('kneeL', kn); this.set('kneeR', kn);
        this.set('footL', -th - kn); this.set('footR', -th - kn);
        this.set('torso', 0.55, 0, 0);
        this.set('head', -0.35, 0, 0);
        this.set('armL', -0.6, 0, 0.35); this.set('armR', -0.6, 0, -0.35);
        this.set('elbowL', -1.2); this.set('elbowR', -1.2);
        if (sp > 0.3) {
          this.phase += dt * (6 + sp * 2);
          const s = Math.sin(this.phase);
          this.t.legL[0] += s * 0.3; this.t.legR[0] -= s * 0.3;
          this.t.armL[0] -= s * 0.3; this.t.armR[0] += s * 0.3;
        }
        break;
      }
      case 'crouchSlide': {
        this.drop = 0.22;
        const [th, kn] = legIK(this.drop, -0.25);
        this.set('legL', th - 0.3, 0, 0.12); this.set('legR', th + 0.3, 0, -0.12);
        this.set('kneeL', kn); this.set('kneeR', kn);
        this.set('torso', 0.4, 0, 0);
        this.set('armL', 0.4, 0, 0.9); this.set('armR', 0.4, 0, -0.9);
        break;
      }
      case 'roll': {
        this.drop = 0.25;
        this.set('torso', 1.2); this.set('head', 0.6);
        this.set('legL', -2.0); this.set('legR', -2.0); this.set('kneeL', 2.4); this.set('kneeR', 2.4);
        this.set('armL', -1.6, 0, 0.3); this.set('armR', -1.6, 0, -0.3); this.set('elbowL', -1.5); this.set('elbowR', -1.5);
        this.rate = 30;
        break;
      }
      case 'jump1': case 'jump2': case 'capjump': case 'gpjump': case 'bounce': {
        const rising = (p.vy || 0) > 0;
        if (name === 'jump2') {
          this.set('armL', -2.5, 0, 0.5); this.set('armR', -2.3, 0, -0.5);
          this.set('legL', -0.9); this.set('kneeL', 1.6);
          this.set('legR', 0.2); this.set('kneeR', 0.6);
        } else if (name === 'gpjump') {
          this.set('armL', -2.9, 0, 0.25); this.set('armR', -2.9, 0, -0.25);
          this.set('elbowL', 0); this.set('elbowR', 0);
          this.set('legL', 0.1); this.set('legR', 0.1); this.set('kneeL', 0.2); this.set('kneeR', 0.2);
          this.set('footL', 0.6); this.set('footR', 0.6);
        } else {
          this.set('armR', -2.8, 0, -0.2); this.set('elbowR', -0.2);
          this.set('armL', 0.5, 0, 0.7); this.set('elbowL', -0.6);
          this.set('legL', -1.0); this.set('kneeL', 1.7);
          this.set('legR', 0.25); this.set('kneeR', 0.5);
        }
        this.set('torso', 0.05); this.set('head', -0.1);
        if (!rising) {
          // descending: open up slightly
          this.t.legL[0] *= 0.6; this.t.kneeL[0] *= 0.7;
          this.t.armL[2] += 0.4; this.t.armR[2] -= 0.4;
        }
        this.rate = 16;
        break;
      }
      case 'jump3': case 'backflip': case 'sideflip': case 'gpStart': case 'spin': {
        // tucked flip pose
        this.set('legL', -1.8, 0, 0.15); this.set('legR', -1.8, 0, -0.15);
        this.set('kneeL', 2.3); this.set('kneeR', 2.3);
        this.set('armL', -1.0, 0, 0.6); this.set('armR', -1.0, 0, -0.6);
        this.set('elbowL', -1.6); this.set('elbowR', -1.6);
        this.set('torso', 0.5); this.set('head', 0.3);
        if (name === 'sideflip') {
          this.set('armL', 0, 0, 1.6); this.set('armR', 0, 0, -1.6);
          this.set('legL', -0.6, 0, 0.2); this.set('legR', 0.2, 0, -0.2); this.set('kneeL', 1.2); this.set('kneeR', 0.4);
          this.set('torso', 0.1);
        }
        if (p.untuck) {
          // flip finished: open into a landing pose
          this.set('legL', -0.4); this.set('legR', 0.1); this.set('kneeL', 0.8); this.set('kneeR', 0.4);
          this.set('armL', -0.3, 0, 1.3); this.set('armR', -0.3, 0, -1.3);
          this.set('torso', 0.05); this.set('head', 0);
        }
        this.rate = 22;
        break;
      }
      case 'longjump': {
        this.spinTarget[0] = 1.05;
        this.set('armL', -2.9, 0, 0.3); this.set('armR', -2.9, 0, -0.3);
        this.set('elbowL', 0); this.set('elbowR', 0);
        this.set('legL', 0.35); this.set('legR', 0.55); this.set('kneeL', 0.5); this.set('kneeR', 0.9);
        this.set('head', -0.9);
        this.rate = 12;
        break;
      }
      case 'dive': case 'belly': {
        this.spinTarget[0] = name === 'belly' ? 1.45 : 1.25;
        this.set('armL', -3.0, 0, 0.18); this.set('armR', -3.0, 0, -0.18);
        this.set('elbowL', 0); this.set('elbowR', 0);
        this.set('legL', 0.25, 0, 0.06); this.set('legR', 0.25, 0, -0.06);
        this.set('kneeL', 0.25); this.set('kneeR', 0.25);
        this.set('footL', 0.7); this.set('footR', 0.7);
        this.set('head', -1.0);
        this.lift = name === 'belly' ? -0.42 : 0;
        this.rate = 14;
        break;
      }
      case 'fall': {
        const f = Math.sin(t * 14);
        this.set('armL', -1.6 + f * 0.25, 0, 1.0); this.set('armR', -1.6 - f * 0.25, 0, -1.0);
        this.set('elbowL', -0.4); this.set('elbowR', -0.4);
        this.set('legL', -0.5 + f * 0.2); this.set('kneeL', 0.9);
        this.set('legR', 0.1 - f * 0.2); this.set('kneeR', 0.5);
        this.set('torso', 0.1); this.set('head', 0.15);
        this.rate = 14;
        break;
      }
      case 'gpFall': {
        this.set('legL', -1.5, 0, 0.12); this.set('legR', -1.5, 0, -0.12);
        this.set('kneeL', 2.2); this.set('kneeR', 2.2);
        this.set('armL', 0.4, 0, 1.0); this.set('armR', 0.4, 0, -1.0);
        this.set('elbowL', -1.4); this.set('elbowR', -1.4);
        this.set('torso', 0.2); this.set('head', -0.2);
        this.lift = 0.25;
        this.rate = 30;
        break;
      }
      case 'gpLand': {
        this.drop = 0.24;
        const [th, kn] = legIK(this.drop, -0.1);
        this.set('legL', th, 0, 0.35); this.set('legR', th, 0, -0.35);
        this.set('kneeL', kn); this.set('kneeR', kn);
        this.set('footL', -th - kn); this.set('footR', -th - kn);
        this.set('armL', 0.3, 0, 1.2); this.set('armR', 0.3, 0, -1.2);
        this.set('torso', 0.5); this.set('head', -0.3);
        this.rate = 30;
        break;
      }
      case 'land': {
        this.drop = 0.16 * (p.amount ?? 1);
        const [th, kn] = legIK(this.drop, -0.05);
        this.set('legL', th, 0, 0.08); this.set('legR', th, 0, -0.08);
        this.set('kneeL', kn); this.set('kneeR', kn);
        this.set('footL', -th - kn); this.set('footR', -th - kn);
        this.set('torso', 0.35); this.set('armL', 0.2, 0, 0.6); this.set('armR', 0.2, 0, -0.6);
        this.rate = 26;
        break;
      }
      case 'wallSlide': {
        this.set('armL', -2.6, 0, 0.5); this.set('armR', -1.6, 0, -0.6);
        this.set('elbowL', -0.3); this.set('elbowR', -0.8);
        this.set('legL', -0.5); this.set('kneeL', 1.0); this.set('legR', 0.1); this.set('kneeR', 0.6);
        this.set('torso', -0.1); this.set('head', 0.3, 0.6, 0);
        this.rate = 16;
        break;
      }
      case 'ledge': {
        this.set('armL', -3.0, 0, -0.1); this.set('armR', -3.0, 0, 0.1);
        this.set('elbowL', -0.15); this.set('elbowR', -0.15);
        const sw = Math.sin(t * 2) * 0.08;
        this.set('legL', 0.1 + sw); this.set('legR', -0.05 - sw); this.set('kneeL', 0.3); this.set('kneeR', 0.4);
        this.set('head', 0.25);
        this.set('torso', -0.05);
        this.rate = 18;
        break;
      }
      case 'climb': {
        this.set('armL', -1.4, 0, 0.2); this.set('armR', -1.4, 0, -0.2);
        this.set('legL', -1.4); this.set('kneeL', 1.9); this.set('legR', -0.2); this.set('kneeR', 1.0);
        this.set('torso', 0.7);
        this.rate = 22;
        break;
      }
      case 'swim': {
        this.phase += dt * (p.stroke ? 9 : 3 + sp);
        const s = Math.sin(this.phase), c = Math.cos(this.phase);
        this.spinTarget[0] = p.under ? 1.1 : 0.9;
        this.set('armL', -2.2 + c * 0.9, 0, 0.6 + s * 0.6); this.set('armR', -2.2 + c * 0.9, 0, -0.6 - s * 0.6);
        this.set('elbowL', -0.6 + s * 0.4); this.set('elbowR', -0.6 + s * 0.4);
        this.set('legL', 0.2 + s * 0.4, 0, 0.12); this.set('legR', 0.2 - s * 0.4, 0, -0.12);
        this.set('kneeL', 0.5 + Math.max(0, s) * 0.6); this.set('kneeR', 0.5 + Math.max(0, -s) * 0.6);
        this.set('head', -0.8);
        this.rate = 14;
        break;
      }
      case 'hurt': {
        this.spinTarget[0] = -0.4;
        this.set('armL', -1.2, 0, 1.2); this.set('armR', -1.2, 0, -1.2);
        this.set('legL', -0.8); this.set('kneeL', 1.0); this.set('legR', -0.4); this.set('kneeR', 0.8);
        this.set('head', 0.3);
        this.rate = 20;
        break;
      }
      case 'dead': {
        this.set('armL', -2.6, 0, 1.0); this.set('armR', -2.6, 0, -1.0);
        this.set('legL', -0.6); this.set('legR', 0.3); this.set('kneeL', 1.0); this.set('kneeR', 0.6);
        this.set('head', 0.4);
        break;
      }
      case 'throw': {
        // Right-arm sidearm throw, driven by p.t (0..0.3)
        const k = clamp((p.t || 0) / 0.22, 0, 1);
        const sw = k < 0.35 ? -k / 0.35 : (k - 0.35) / 0.65; // windup back, then fling forward
        this.set('armR', 0.2 - sw * 1.0, 0, -1.35);
        this.set('elbowR', -0.2);
        this.set('torso', 0.1, -0.6 * (1 - Math.abs(sw)) + sw * 0.5, 0);
        this.set('armL', 0.2, 0, 0.7);
        if (p.airborne) {
          this.set('legL', -0.6); this.set('kneeL', 1.0); this.set('legR', 0.1); this.set('kneeR', 0.4);
        } else if (sp > 0.5) {
          this.phase += dt * (3.2 + sp * 1.02);
          const s = Math.sin(this.phase), c = Math.cos(this.phase);
          this.set('legL', s * 0.8); this.set('legR', -s * 0.8);
          this.set('kneeL', 0.25 + Math.max(0, -c) * 1.2); this.set('kneeR', 0.25 + Math.max(0, c) * 1.2);
        } else {
          this.set('legL', -0.3, 0, 0.1); this.set('kneeL', 0.4); this.set('legR', 0.2, 0, -0.1);
        }
        this.rate = 40;
        break;
      }
      case 'victory': {
        const k = Math.min(1, (p.t || 0) / 0.3);
        this.set('armR', -3.0 * k, 0, -0.15); this.set('elbowR', 0);
        this.set('armL', 0.1, 0, 0.9 * k); this.set('elbowL', -1.6);
        this.set('legL', -0.15, 0, 0.18); this.set('legR', 0.1, 0, -0.18);
        this.set('torso', -0.15, 0.2, 0.1); this.set('head', -0.35, 0.2, 0);
        this.rate = 14;
        break;
      }
      case 'talk': {
        this.set('armL', 0.1, 0, 0.3); this.set('armR', -0.6, 0, -0.5); this.set('elbowR', -1.2);
        this.set('head', -0.1 + Math.sin(t * 6) * 0.05, 0, 0);
        break;
      }
      case 'sleep': {
        this.drop = 0.36;
        this.set('torso', 0.9); this.set('head', 0.6);
        this.set('legL', -1.6, 0, 0.3); this.set('legR', -1.6, 0, -0.3); this.set('kneeL', 1.6); this.set('kneeR', 1.6);
        this.set('armL', -0.5, 0, 0.3); this.set('armR', -0.5, 0, -0.3);
        break;
      }
      case 'slide': {
        this.set('torso', -0.3); this.set('head', 0.2);
        this.set('armL', 0.3, 0, 1.1); this.set('armR', 0.3, 0, -1.1);
        this.set('legL', -0.6); this.set('legR', -0.3); this.set('kneeL', 0.4); this.set('kneeR', 0.2);
        this.drop = 0.12;
        break;
      }
      default: break;
    }

    // ---- apply ----
    const j = this.j;
    const k = 1 - Math.exp(-this.rate * dt);
    for (const n of JOINTS) {
      const o = j[n], tg = this.t[n];
      o.rotation.x += (tg[0] - o.rotation.x) * k;
      o.rotation.y += (tg[1] - o.rotation.y) * k;
      o.rotation.z += (tg[2] - o.rotation.z) * k;
    }
    // pelvis/body vertical offset
    const spin = j.spin;
    spin.position.y = damp(spin.position.y, 0.78 - this.drop + this.lift, 22, dt);
    if (this.flip) {
      spin.rotation.set(0, 0, 0);
      spin.rotation[this.flip.axis] = this.flip.angle;
    } else {
      // after flips, unwrap so we damp the short way
      for (const ax of ['x', 'y', 'z']) {
        let a = spin.rotation[ax];
        if (Math.abs(a) > Math.PI) { a = ((a + Math.PI) % TAU + TAU) % TAU - Math.PI; spin.rotation[ax] = a; }
      }
      spin.rotation.x = damp(spin.rotation.x, this.spinTarget[0], this.rate * 0.6, dt);
      spin.rotation.y = damp(spin.rotation.y, this.spinTarget[1], this.rate * 0.6, dt);
      spin.rotation.z = damp(spin.rotation.z, this.spinTarget[2], this.rate * 0.6, dt);
    }
    // squash & stretch spring
    const kS = 260, cS = 18;
    this.sqv += (-(this.sq - 1) * kS - this.sqv * cS) * dt;
    this.sq += this.sqv * dt;
    this.sq = clamp(this.sq, 0.6, 1.45);
    const sxz = 1 / Math.sqrt(this.sq);
    j.squash.scale.set(sxz, this.sq, sxz);
  }
}
