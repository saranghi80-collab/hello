// Mario's controller: Odyssey-style moveset on top of the kinematic Body.
import * as THREE from 'three';
import { Body } from '../physics/body.js';
import { createMario } from './mario-model.js';
import { MarioAnimator } from './mario-anim.js';
import { clamp, approach, approachAngle, angleDiff, TAU, damp, easeOutCubic } from '../core/math.js';

export const C = {
  RUN: 9.8, WALK: 4.0, ACC: 26, ACC_START: 48, DEC: 30, SKID_DEC: 44,
  TURN_FAST: 15, TURN_SLOW: 7.5,
  GRAV: 56, GRAV_HOLD: 31, MAX_FALL: 32,
  J1: 12.6, J2: 14.6, J3: 17.4, BACKFLIP: 17.8, SIDEFLIP: 16.8,
  LONG_VY: 9.4, LONG_H: 15.6, LONG_GRAV: 34,
  GPJUMP: 18.4, CAPJUMP: 13.4, WALL_VY: 14.6, WALL_H: 8.2,
  DIVE_VY: 6.8, DIVE_H: 14.2, BOUNCE: 12.5,
  AIR_ACC: 20, AIR_DEC: 2.5, CHAIN: 0.2, COYOTE: 0.11, BUFFER: 0.14,
  ROLL: 13.5, CRAWL: 2.6, SWIM: 5.2,
};

const JUMP_KINDS_HOLD = new Set(['jump1', 'jump2', 'jump3', 'backflip', 'sideflip', 'walljump', 'capjump', 'gpjump', 'bounce', 'rolljump']);

export class Player {
  constructor(game) {
    this.game = game;
    this.outfit = game.save?.data?.outfit || 'classic';
    this.model = createMario(this.outfit);
    this.root = this.model.root;
    this.anim = new MarioAnimator(this.model);
    this.body = null;
    this.level = null;
    this.facing = 0;
    this.state = 'ground';
    this.st = 0;
    this.airKind = 'fall';
    this.airTime = 0;
    this.hp = 3;
    this.maxHp = 3;
    this.invuln = 0;
    this.jumpBuffer = 0;
    this.coyote = 0;
    this.chainTimer = 0;
    this.jumpChain = 0;
    this.hoverUsed = false;
    this.capJumpUsed = false;
    this.throwT = 0;
    this.wallCooldown = 0;
    this.lastWallC = null;
    this.slideT = 0;
    this.lastGroundY = 0;
    this.lastSafe = new THREE.Vector3();
    this.capture = null;
    this.cappy = null;
    this.idleTime = 0;
    this.inputDir = new THREE.Vector3();
    this.inputMag = 0;
    this.pose = { name: 'idle', speed: 0 };
    this.frozen = false;
    this.visible = true;
    this.waterY = -Infinity;
    this.underwater = false;
    this.air = 1;
    this.footstepT = 0;
    this.events = []; // queued notifications for the game (landed, gp impact...)
    this.climb = null;
    this.ledge = null;
    this.dead = false;
    this.hurtT = 0;
    this.prevFeetY = 0;
    this.speedMul = 1;
    this.gravMul = 1;
  }

  setOutfit(name) {
    const parent = this.root.parent;
    const pos = this.root.position.clone(), rot = this.root.rotation.y;
    if (parent) parent.remove(this.root);
    this.outfit = name;
    this.model = createMario(name);
    this.root = this.model.root;
    this.anim = new MarioAnimator(this.model);
    this.root.position.copy(pos); this.root.rotation.y = rot;
    if (parent) parent.add(this.root);
    this.cappy?.setOutfit(name);
  }

  attach(level, x, y, z, facing = 0) {
    this.level = level;
    this.body = new Body(level.world, { radius: 0.36, height: 1.5, stepUp: 0.42, snap: 0.5 });
    this.body.setPos(x, y, z);
    this.facing = facing;
    this.setState('ground');
    this.airKind = 'fall';
    this.lastGroundY = y;
    this.lastSafe.set(x, y, z);
    this.dead = false;
    this.invuln = 0;
    this.capture = null;
    this.frozen = false;
    this.visible = true;
    this.root.visible = true;
    this.anim.flip = null;
    this.gravMul = level.def.gravity ?? 1;
    if (this.cappy) this.cappy.reset();
    this.model.setCapVisible(true);
    this.syncModel(0);
  }

  get pos() { return this.body.pos; }
  get vel() { return this.body.vel; }
  get grounded() { return this.body.grounded; }
  center(out) { return out.set(this.body.pos.x, this.body.pos.y + 0.8, this.body.pos.z); }
  hspeed() { return Math.hypot(this.body.vel.x, this.body.vel.z); }
  fwdX() { return Math.sin(this.facing); }
  fwdZ() { return Math.cos(this.facing); }
  isGroundPounding() { return this.state === 'gpFall' || this.state === 'gpStart'; }
  isAttacking() { return this.state === 'gpFall' || this.state === 'roll' || this.state === 'dive'; }

  setState(s) {
    this.state = s;
    this.st = 0;
  }

  emit(type, data = {}) { this.events.push({ type, ...data }); }

  // ---------------------------------------------------------------- update
  update(dt) {
    const game = this.game, inp = game.input, A = inp.actions;
    if (this.dead) { this.updateDead(dt); return; }
    this.st += dt;
    if (this.invuln > 0) this.invuln -= dt;
    if (this.throwT > 0) this.throwT -= dt;
    if (this.chainTimer > 0) this.chainTimer -= dt;
    if (this.wallCooldown > 0) this.wallCooldown -= dt;
    if (this.coyote > 0) this.coyote -= dt;
    if (this.jumpBuffer > 0) this.jumpBuffer -= dt;

    if (this.frozen) { this.syncModel(dt); return; }

    if (A.jump.pressed) this.jumpBuffer = C.BUFFER;

    // camera-relative input direction
    const yaw = game.cam.yaw;
    const mx = inp.move.x, my = inp.move.y;
    let wx = -Math.sin(yaw) * my + Math.cos(yaw) * mx;
    let wz = -Math.cos(yaw) * my - Math.sin(yaw) * mx;
    const mag = Math.min(1, Math.hypot(wx, wz));
    if (mag > 0.001) { wx /= Math.hypot(wx, wz); wz /= Math.hypot(wx, wz) || 1; }
    this.inputDir.set(wx, 0, wz).normalize();
    this.inputMag = mag;
    if (mag < 0.12) this.inputMag = 0;

    if (this.capture) {
      this.capture.captureUpdate(dt, this);
      return;
    }

    const body = this.body;
    this.prevFeetY = body.pos.y;
    this.facing += body.ride();

    switch (this.state) {
      case 'ground': this.stGround(dt); break;
      case 'skid': this.stSkid(dt); break;
      case 'crouch': this.stCrouch(dt); break;
      case 'crouchSlide': this.stCrouchSlide(dt); break;
      case 'roll': this.stRoll(dt); break;
      case 'land': this.stLand(dt); break;
      case 'air': this.stAir(dt); break;
      case 'gpStart': this.stGpStart(dt); break;
      case 'gpFall': this.stGpFall(dt); break;
      case 'gpLand': this.stGpLand(dt); break;
      case 'dive': this.stDive(dt); break;
      case 'belly': this.stBelly(dt); break;
      case 'wallSlide': this.stWallSlide(dt); break;
      case 'ledge': this.stLedge(dt); break;
      case 'climb': this.stClimb(dt); break;
      case 'swim': this.stSwim(dt); break;
      case 'hurt': this.stHurt(dt); break;
      case 'slide': this.stSlide(dt); break;
      case 'cutscene': this.stCutscene(dt); break;
      default: this.setState('air'); break;
    }

    // ---- integrate ----
    if (this.state !== 'climb' && this.state !== 'ledge' && this.state !== 'cutscene') {
      const wasGrounded = body.grounded;
      body.move(dt);
      if (body.landed) this.onLand();
      else if (!body.grounded && this.isGroundState()) {
        // walked off a ledge (or spawned in the air)
        this.coyote = wasGrounded ? C.COYOTE : 0;
        this.airKind = 'fall';
        this.airTime = 0;
        this.setState('air');
      }
      if (body.grounded) {
        this.lastGroundY = body.pos.y;
        const g = body.ground;
        if (g.ny > 0.9 && g.c && !g.c.dynamic && g.c.surface !== 'lava' && g.c.surface !== 'poison' && !g.c.unsafe) {
          this.lastSafe.copy(body.pos);
        }
        this.hoverUsed = false;
        this.capJumpUsed = false;
        this.surfaceEffects(dt);
      }
      if (body.ceilingHit) this.emit('bonk', { c: body.ceilingHit.c });
    }

    this.checkWater();
    this.checkLava();
    if (body.pos.y < this.level.killYAt(body.pos.x, body.pos.z)) this.die('fall');
    this.syncModel(dt);
  }

  isGroundState() {
    return ['ground', 'skid', 'crouch', 'crouchSlide', 'roll', 'land', 'gpLand', 'belly', 'slide'].includes(this.state);
  }

  // ---- helpers ----
  groundMove(dt, maxSpeed, acc = C.ACC, turnMul = 1) {
    const v = this.body.vel;
    let sp = Math.hypot(v.x, v.z);
    const ice = this.surface() === 'ice';
    if (this.inputMag > 0) {
      const desired = Math.atan2(this.inputDir.x, this.inputDir.z);
      const tr = (sp < 3 ? C.TURN_FAST * 1.6 : C.TURN_FAST - (C.TURN_FAST - C.TURN_SLOW) * clamp(sp / C.RUN, 0, 1)) * turnMul;
      this.facing = approachAngle(this.facing, desired, tr * dt * (ice ? 0.5 : 1));
      const target = maxSpeed * this.inputMag * this.speedMul;
      const a = sp < C.WALK ? C.ACC_START : acc;
      sp = sp < target ? Math.min(target, sp + a * dt * (ice ? 0.35 : 1)) : Math.max(target, sp - C.DEC * dt * (ice ? 0.2 : 1));
      if (ice) {
        // keep momentum direction on ice
        const fx = Math.sin(this.facing), fz = Math.cos(this.facing);
        v.x = damp(v.x, fx * sp, 3, dt); v.z = damp(v.z, fz * sp, 3, dt);
        return;
      }
    } else {
      sp = Math.max(0, sp - C.DEC * dt * (ice ? 0.12 : 1));
      if (ice) { const s = Math.hypot(v.x, v.z) || 1; v.x *= sp / s; v.z *= sp / s; return; }
    }
    v.x = Math.sin(this.facing) * sp;
    v.z = Math.cos(this.facing) * sp;
  }

  surface() { const c = this.body.ground.c; return this.body.grounded && c ? c.surface : 'air'; }

  airControl(dt, accMul = 1, maxSp = null) {
    const v = this.body.vel;
    const sp = Math.hypot(v.x, v.z);
    const cap = maxSp ?? Math.max(C.RUN * this.speedMul, sp);
    if (this.inputMag > 0) {
      const tx = this.inputDir.x * cap * this.inputMag, tz = this.inputDir.z * cap * this.inputMag;
      const dx = tx - v.x, dz = tz - v.z;
      const d = Math.hypot(dx, dz);
      const step = C.AIR_ACC * accMul * dt;
      if (d > step) { v.x += (dx / d) * step; v.z += (dz / d) * step; } else { v.x = tx; v.z = tz; }
      const desired = Math.atan2(this.inputDir.x, this.inputDir.z);
      this.facing = approachAngle(this.facing, desired, 5 * accMul * dt);
    } else if (sp > 0) {
      const ns = Math.max(0, sp - C.AIR_DEC * dt);
      v.x *= ns / sp; v.z *= ns / sp;
    }
  }

  gravity(dt, mul = 1) {
    const v = this.body.vel;
    let g = C.GRAV;
    const A = this.game.input.actions;
    if (v.y > 0 && A.jump.down && JUMP_KINDS_HOLD.has(this.airKind) && this.airTime < 0.5) g = C.GRAV_HOLD;
    if (this.airKind === 'longjump') g = C.LONG_GRAV;
    v.y = Math.max(-C.MAX_FALL, v.y - g * mul * this.gravMul * dt);
  }

  tryThrow() {
    const A = this.game.input.actions;
    if (!A.throw.pressed || !this.cappy || !this.cappy.isHeld()) return false;
    let dx = Math.sin(this.facing), dz = Math.cos(this.facing);
    if (this.inputMag > 0 && this.body.grounded && this.hspeed() < 2) { dx = this.inputDir.x; dz = this.inputDir.z; this.facing = Math.atan2(dx, dz); }
    this.cappy.throw(this, dx, dz);
    this.throwT = 0.28;
    this.model.setCapVisible(false);
    this.game.audio.play('throw');
    if (!this.body.grounded && !this.hoverUsed) {
      this.hoverUsed = true;
      this.body.vel.y = Math.max(this.body.vel.y, 4.6);
    }
    return true;
  }

  doJump(kind, vy, hx = null, hz = null) {
    const body = this.body;
    body.leaveGround(vy);
    if (hx !== null) { body.vel.x = hx; body.vel.z = hz; }
    this.airKind = kind;
    this.airTime = 0;
    this.jumpBuffer = 0;
    this.coyote = 0;
    this.anim.flip = null;
    this.setState('air');
    this.anim.impulse(2.6);
    const snd = { jump1: 'jump', jump2: 'jump2', jump3: 'jump3', backflip: 'jump3', sideflip: 'jump3', longjump: 'longjump', gpjump: 'jump3', walljump: 'jump2', capjump: 'capjump', bounce: 'stomp', rolljump: 'jump2' }[kind] || 'jump';
    this.game.audio.play(snd);
    this.game.fx?.dust(body.pos.x, body.pos.y, body.pos.z, kind === 'longjump' ? 10 : 5);
  }

  groundJump() {
    const A = this.game.input.actions;
    const sp = this.hspeed();
    if (A.crouch.down) {
      if (sp > 3.5 || this.state === 'crouchSlide' || this.state === 'roll') {
        const s = Math.max(C.LONG_H * this.speedMul, sp);
        this.doJump('longjump', C.LONG_VY, Math.sin(this.facing) * s, Math.cos(this.facing) * s);
      } else {
        this.doJump('backflip', C.BACKFLIP, -Math.sin(this.facing) * 3.6, -Math.cos(this.facing) * 3.6);
      }
      return;
    }
    let n = 1;
    if (this.chainTimer > 0 && sp > 3) n = this.jumpChain + 1;
    if (n === 3 && sp < 5.5) n = 2;
    if (n > 3) n = 1;
    this.jumpChain = n;
    const vy = [C.J1, C.J2, C.J3][n - 1] + sp * 0.06;
    this.doJump('jump' + n, vy);
  }

  // ---------------------------------------------------------------- states
  stGround(dt) {
    const A = this.game.input.actions, body = this.body;
    if (body.steep) { this.setState('slide'); return; }
    const sp = this.hspeed();
    // skid check
    if (this.inputMag > 0.5 && sp > 6.5) {
      const desired = Math.atan2(this.inputDir.x, this.inputDir.z);
      if (Math.abs(angleDiff(this.facing, desired)) > 2.25) {
        this.skidTo = desired;
        this.setState('skid');
        this.game.audio.play('skid');
        return;
      }
    }
    if (this.jumpBuffer > 0) { this.groundJump(); return; }
    if (A.crouch.pressed || (A.crouch.down && this.st < 0.02)) {
      if (A.throw.down || A.throw.pressed) { this.startRoll(); return; }
      if (sp > 5) { this.setState('crouchSlide'); this.game.audio.play('crouch'); return; }
      this.setState('crouch'); return;
    }
    if (A.crouch.down) { this.setState('crouch'); return; }
    this.tryThrow();
    this.groundMove(dt, C.RUN);
    this.idleTime = sp < 0.1 && this.inputMag === 0 ? this.idleTime + dt : 0;
  }

  stSkid(dt) {
    const v = this.body.vel;
    let sp = Math.hypot(v.x, v.z);
    sp = Math.max(0, sp - C.SKID_DEC * dt);
    const s = Math.hypot(v.x, v.z) || 1;
    v.x *= sp / s; v.z *= sp / s;
    if (this.st % 0.06 < dt) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1);
    if (this.jumpBuffer > 0) {
      this.facing = this.skidTo;
      this.doJump('sideflip', C.SIDEFLIP, Math.sin(this.facing) * 5.5, Math.cos(this.facing) * 5.5);
      this.flipSign = 1;
      return;
    }
    if (sp < 1.0 || this.st > 0.45) {
      this.facing = this.skidTo;
      v.x = Math.sin(this.facing) * 2; v.z = Math.cos(this.facing) * 2;
      this.setState('ground');
    }
  }

  stCrouch(dt) {
    const A = this.game.input.actions;
    if (this.jumpBuffer > 0) { this.groundJump(); return; }
    if (A.throw.pressed) { this.startRoll(); return; }
    if (!A.crouch.down) { this.setState('ground'); return; }
    this.groundMove(dt, C.CRAWL, 20, 0.5);
  }

  stCrouchSlide(dt) {
    const A = this.game.input.actions, v = this.body.vel;
    if (this.jumpBuffer > 0) { this.groundJump(); return; }
    if (A.throw.pressed) { this.startRoll(); return; }
    let sp = Math.hypot(v.x, v.z);
    sp = Math.max(0, sp - 14 * dt);
    if (this.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(this.inputDir.x, this.inputDir.z), 2 * dt);
    v.x = Math.sin(this.facing) * sp; v.z = Math.cos(this.facing) * sp;
    if (sp < 2) this.setState(A.crouch.down ? 'crouch' : 'ground');
    else if (!A.crouch.down && this.st > 0.25) this.setState('ground');
  }

  startRoll() {
    this.setState('roll');
    this.rollBoostT = 0;
    const sp = Math.max(C.ROLL, this.hspeed());
    if (this.inputMag > 0) this.facing = Math.atan2(this.inputDir.x, this.inputDir.z);
    this.body.vel.x = Math.sin(this.facing) * sp; this.body.vel.z = Math.cos(this.facing) * sp;
    this.game.audio.play('roll');
  }

  stRoll(dt) {
    const A = this.game.input.actions, v = this.body.vel;
    this.rollBoostT += dt;
    if (this.jumpBuffer > 0) {
      const sp = Math.max(this.hspeed(), 11);
      this.doJump('rolljump', 11.5, Math.sin(this.facing) * sp, Math.cos(this.facing) * sp);
      return;
    }
    let sp = Math.hypot(v.x, v.z);
    if (A.throw.pressed && this.rollBoostT > 0.25) { sp = Math.max(sp, C.ROLL + 2); this.rollBoostT = 0; this.game.audio.play('roll'); }
    sp = Math.max(0, sp - (A.crouch.down ? 5 : 12) * dt);
    if (this.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(this.inputDir.x, this.inputDir.z), 3.2 * dt);
    v.x = Math.sin(this.facing) * sp; v.z = Math.cos(this.facing) * sp;
    if (this.st % 0.08 < dt) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1);
    if (this.body.wall && this.body.wall.into > 3) { this.bonk(); return; }
    if (sp < 5 && this.st > 0.3) this.setState(A.crouch.down ? 'crouch' : 'ground');
  }

  stLand(dt) {
    if (this.jumpBuffer > 0 && this.st > 0.02) { this.groundJump(); return; }
    this.groundMove(dt, C.RUN * 0.5);
    if (this.st > this.landDur) this.setState('ground');
  }

  stSlide(dt) {
    const body = this.body, v = body.vel, g = body.ground;
    if (!body.steep) { this.setState('ground'); return; }
    // accelerate downhill
    const hx = g.nx, hz = g.nz, hn = Math.hypot(hx, hz) || 1;
    const a = C.GRAV * (1 - g.ny) * 1.2;
    v.x += (hx / hn) * a * dt; v.z += (hz / hn) * a * dt;
    if (this.inputMag > 0) { v.x += this.inputDir.x * 4 * dt; v.z += this.inputDir.z * 4 * dt; }
    const sp = Math.hypot(v.x, v.z);
    if (sp > 14) { v.x *= 14 / sp; v.z *= 14 / sp; }
    if (sp > 1) this.facing = approachAngle(this.facing, Math.atan2(v.x, v.z), 8 * dt);
    if (this.jumpBuffer > 0) { this.doJump('jump1', 10); return; }
    if (this.st % 0.08 < dt) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1);
  }

  stAir(dt) {
    const A = this.game.input.actions, body = this.body;
    this.airTime += dt;
    // coyote jump
    if (this.jumpBuffer > 0 && this.coyote > 0) { this.coyote = 0; this.groundJump(); return; }
    // ground pound
    if (A.crouch.pressed && this.airTime > 0.06 && !['longjump'].includes(this.airKind)) {
      this.setState('gpStart');
      body.vel.set(0, 0, 0);
      this.anim.flip = null;
      this.game.audio.play('gpstart');
      return;
    }
    this.tryThrow();
    // movement
    let accMul = 1;
    if (this.airKind === 'backflip' || this.airKind === 'sideflip') accMul = 0.55;
    if (this.airKind === 'longjump') accMul = 0.45;
    if (this.airKind === 'walljump' && this.airTime < 0.2) accMul = 0.15;
    if (this.airKind === 'hurt') accMul = 0;
    this.airControl(dt, accMul);
    this.gravity(dt);
    // flips
    this.updateFlip();
    // wall interactions
    const w = body.wall;
    if (w && body.vel.y < 4 && this.airTime > 0.08 && this.wallCooldown <= 0) {
      const intoWall = this.inputMag > 0 ? -(this.inputDir.x * w.nx + this.inputDir.z * w.nz) : 0;
      const top = w.top;
      const feet = body.pos.y;
      // ledge grab
      if (body.vel.y <= 0 && w.c && w.c.grab !== false && top > feet + 1.0 && top < feet + 1.75 && !w.steep && this.ledgeFree(w, top)) {
        this.grabLedge(w, top);
        return;
      }
      if ((w.into > 1.5 || intoWall > 0.4) && top > feet + 1.3 && w.c && w.c.wallJump !== false && !w.steep) {
        this.setState('wallSlide');
        this.wall = w;
        this.facing = Math.atan2(-w.nx, -w.nz);
        body.vel.x = -w.nx * 1; body.vel.z = -w.nz * 1;
        this.anim.flip = null;
        return;
      }
    }
  }

  updateFlip() {
    const k = this.airKind, t = this.airTime;
    if (k === 'jump3' || k === 'backflip' || k === 'gpjump') {
      const dur = k === 'gpjump' ? 0.5 : 0.62;
      if (t < dur) this.anim.flip = { axis: 'x', angle: (k === 'backflip' ? -1 : 1) * TAU * easeOutCubic(t / dur) };
      else this.anim.flip = null;
    } else if (k === 'sideflip') {
      const dur = 0.6;
      if (t < dur) this.anim.flip = { axis: 'z', angle: -TAU * easeOutCubic(t / dur) };
      else this.anim.flip = null;
    } else if (k === 'capjump') {
      const dur = 0.45;
      if (t < dur) this.anim.flip = { axis: 'y', angle: TAU * easeOutCubic(t / dur) };
      else this.anim.flip = null;
    } else if (k === 'rolljump') {
      const dur = 0.5;
      if (t < dur) this.anim.flip = { axis: 'x', angle: TAU * easeOutCubic(t / dur) };
      else this.anim.flip = null;
    } else this.anim.flip = null;
  }

  ledgeFree(w, top) {
    // the ledge top must be open space above (no ceiling within body height)
    const px = this.pos.x - w.nx * 0.6, pz = this.pos.z - w.nz * 0.6;
    const f = this.level.world.floor(px, pz, top - 0.05, top + 0.3, 0.1, null);
    if (!f) return false;
    const c = this.level.world.ceil(px, pz, top + 0.05, top + 1.55, 0.25);
    return !c;
  }

  grabLedge(w, top) {
    const body = this.body;
    this.setState('ledge');
    this.ledge = { nx: w.nx, nz: w.nz, top, c: w.c };
    body.vel.set(0, 0, 0);
    body.pos.y = top - 1.42;
    this.facing = Math.atan2(-w.nx, -w.nz);
    this.anim.flip = null;
    this.game.audio.play('grab');
  }

  stLedge(dt) {
    const A = this.game.input.actions, L = this.ledge;
    if (this.st < 0.12) return;
    const toward = this.inputMag > 0 ? -(this.inputDir.x * L.nx + this.inputDir.z * L.nz) : 0;
    if (this.jumpBuffer > 0 || toward > 0.5) {
      this.jumpBuffer = 0;
      this.setState('climb');
      this.climb = {
        x0: this.pos.x, y0: this.pos.y, z0: this.pos.z,
        x1: this.pos.x - L.nx * 0.75, y1: L.top, z1: this.pos.z - L.nz * 0.75,
      };
      this.game.audio.play('climb');
      return;
    }
    if (A.crouch.pressed || toward < -0.5) {
      this.body.pos.x += L.nx * 0.3; this.body.pos.z += L.nz * 0.3;
      this.airKind = 'fall'; this.airTime = 0; this.wallCooldown = 0.35;
      this.setState('air');
    }
  }

  stClimb(dt) {
    const c = this.climb, k = clamp(this.st / 0.3, 0, 1);
    const up = clamp(k / 0.6, 0, 1), fw = clamp((k - 0.4) / 0.6, 0, 1);
    this.body.pos.set(c.x0 + (c.x1 - c.x0) * fw, c.y0 + (c.y1 - c.y0) * easeOutCubic(up), c.z0 + (c.z1 - c.z0) * fw);
    if (k >= 1) {
      this.body.vel.set(0, 0, 0);
      this.body.grounded = true;
      this.body.ground.c = this.ledge.c;
      this.setState('ground');
    }
  }

  stWallSlide(dt) {
    const A = this.game.input.actions, body = this.body, w = this.wall;
    body.vel.y = Math.max(body.vel.y - C.GRAV * 0.5 * dt, -5.5);
    // stay pressed against the wall
    body.vel.x = -w.nx * 2; body.vel.z = -w.nz * 2;
    if (this.st % 0.1 < dt) this.game.fx?.dust(this.pos.x - w.nx * 0.3, this.pos.y + 1.2, this.pos.z - w.nz * 0.3, 1);
    if (this.jumpBuffer > 0) {
      this.facing = Math.atan2(w.nx, w.nz);
      this.wallCooldown = 0.18;
      this.lastWallC = w.c;
      this.doJump('walljump', C.WALL_VY, w.nx * C.WALL_H, w.nz * C.WALL_H);
      return;
    }
    const away = this.inputMag > 0 ? this.inputDir.x * w.nx + this.inputDir.z * w.nz : 0;
    if (A.crouch.pressed || away > 0.7) {
      body.vel.x = w.nx * 2; body.vel.z = w.nz * 2;
      this.airKind = 'fall'; this.airTime = 0; this.wallCooldown = 0.3;
      this.setState('air');
      return;
    }
    // lost the wall?
    if (this.st > 0.05 && !body.wall) {
      this.airKind = 'fall'; this.airTime = 0.2;
      this.setState('air');
    } else if (body.wall) this.wall = body.wall;
  }

  stGpStart(dt) {
    const A = this.game.input.actions, body = this.body;
    body.vel.set(0, 0, 0);
    const dur = 0.27;
    this.anim.flip = { axis: 'x', angle: TAU * easeOutCubic(Math.min(1, this.st / dur)) };
    if (A.throw.pressed) {
      // dive
      if (this.inputMag > 0) this.facing = Math.atan2(this.inputDir.x, this.inputDir.z);
      body.vel.set(Math.sin(this.facing) * C.DIVE_H, C.DIVE_VY, Math.cos(this.facing) * C.DIVE_H);
      body.grounded = false;
      this.anim.flip = null;
      this.setState('dive');
      this.game.audio.play('dive');
      return;
    }
    if (this.st >= dur) {
      this.anim.flip = null;
      this.setState('gpFall');
      body.vel.y = -34;
    }
  }

  stGpFall(dt) {
    const A = this.game.input.actions, body = this.body;
    body.vel.x = 0; body.vel.z = 0; body.vel.y = -34;
    if (A.throw.pressed && this.st < 0.25) {
      if (this.inputMag > 0) this.facing = Math.atan2(this.inputDir.x, this.inputDir.z);
      body.vel.set(Math.sin(this.facing) * C.DIVE_H, C.DIVE_VY * 0.6, Math.cos(this.facing) * C.DIVE_H);
      this.setState('dive');
      this.game.audio.play('dive');
    }
  }

  stGpLand(dt) {
    this.body.vel.x = 0; this.body.vel.z = 0;
    if (this.jumpBuffer > 0 && this.st > 0.03) {
      this.doJump('gpjump', C.GPJUMP, 0, 0);
      return;
    }
    if (this.st > 0.32) this.setState('ground');
  }

  stDive(dt) {
    const body = this.body;
    this.gravity(dt, 0.95);
    this.airControl(dt, 0.15);
    this.tryThrow();
    if (body.wall && body.wall.into > 4) { this.bonk(); }
  }

  stBelly(dt) {
    const v = this.body.vel;
    let sp = Math.hypot(v.x, v.z);
    sp = Math.max(0, sp - 12 * dt);
    if (this.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(this.inputDir.x, this.inputDir.z), 2.5 * dt);
    v.x = Math.sin(this.facing) * sp; v.z = Math.cos(this.facing) * sp;
    if (this.st % 0.08 < dt && sp > 2) this.game.fx?.dust(this.pos.x, this.pos.y, this.pos.z, 1);
    if (this.jumpBuffer > 0) {
      this.doJump('jump1', 9.5, Math.sin(this.facing) * Math.max(sp, 6), Math.cos(this.facing) * Math.max(sp, 6));
      return;
    }
    if ((sp < 1.5 && this.st > 0.3) || (this.inputMag > 0 && this.st > 0.5 && sp < 6)) this.setState('ground');
  }

  stHurt(dt) {
    this.gravity(dt);
    if (this.body.grounded && this.st > 0.15) this.setState('ground');
    if (this.st > 1.2) { this.airKind = 'fall'; this.setState('air'); }
  }

  stCutscene(dt) {
    const v = this.body.vel;
    v.x = 0; v.z = 0;
    if (!this.body.grounded) this.gravity(dt);
    this.body.move(dt);
  }

  stSwim(dt) {
    const A = this.game.input.actions, body = this.body, v = body.vel;
    const surf = this.waterY;
    const depth = surf - body.pos.y;
    const atSurface = depth < 1.35;
    this.underwater = !atSurface;
    // horizontal
    const target = C.SWIM * this.inputMag;
    const tx = this.inputDir.x * target, tz = this.inputDir.z * target;
    v.x = damp(v.x, tx, 3, dt); v.z = damp(v.z, tz, 3, dt);
    if (this.inputMag > 0) this.facing = approachAngle(this.facing, Math.atan2(this.inputDir.x, this.inputDir.z), 4 * dt);
    // vertical: buoyancy toward floating height
    if (atSurface && !A.crouch.down) {
      v.y = damp(v.y, (surf - 1.15 - body.pos.y) * 6, 6, dt);
      if (this.jumpBuffer > 0) {
        this.doJump('jump1', 13.5);
        this.game.audio.play('splash');
        this.game.fx?.splash(body.pos.x, surf, body.pos.z);
        return;
      }
    } else {
      v.y = damp(v.y, A.crouch.down ? -6 : 0.8, 2.5, dt);
      if (this.jumpBuffer > 0) { this.jumpBuffer = 0; v.y = 6.5; this.swimStroke = 0.4; this.game.audio.play('swim'); }
    }
    if (this.swimStroke > 0) this.swimStroke -= dt;
    // freezing water slowly drains health
    if (this.level.waterVol?.cold) {
      this.coldT = (this.coldT || 0) + dt;
      if (this.coldT > 3.2) {
        this.coldT = 0;
        this.hp -= 1;
        this.game.audio.play('hurt');
        this.game.toast('Brrr! The water is freezing!');
        this.game.onPlayerHurt?.();
        if (this.hp <= 0) { this.hp = 0; this.die('hurt'); return; }
      }
    } else this.coldT = 0;
    this.tryThrow();
    if (A.crouch.pressed && atSurface) { v.y = -7; }
    if (body.grounded && depth < 1.0) this.setState('ground');
  }

  checkWater() {
    const body = this.body;
    const wy = this.level.waterAt(body.pos.x, body.pos.z, body.pos.y);
    this.waterY = wy;
    const inWater = wy > -Infinity && body.pos.y < wy - 0.9;
    if (inWater && this.state !== 'swim' && !['climb', 'ledge', 'cutscene'].includes(this.state)) {
      const v = body.vel;
      if (v.y < -3) { this.game.audio.play('splash'); this.game.fx?.splash(body.pos.x, wy, body.pos.z); }
      v.y *= 0.3;
      this.anim.flip = null;
      this.setState('swim');
      this.hoverUsed = false; this.capJumpUsed = false;
    } else if (!inWater && this.state === 'swim' && body.pos.y > wy - 0.6) {
      this.airKind = 'fall'; this.airTime = 0.3;
      this.setState(body.grounded ? 'ground' : 'air');
    }
  }

  checkLava() {
    const body = this.body;
    const ly = this.level.lavaAt(body.pos.x, body.pos.z);
    if (ly > -Infinity && body.pos.y < ly + 0.05 && !this.dead) {
      if (this.invuln <= 0) this.hurt(null, { burn: true });
      else { body.leaveGround(16); this.airKind = 'hurt'; this.airTime = 0; this.setState('hurt'); }
      this.game.fx?.embers(body.pos.x, ly, body.pos.z, 8);
    }
  }

  surfaceEffects(dt) {
    const s = this.surface();
    if (s === 'lava' || s === 'poison') {
      this.hurt(null, { burn: true });
    }
  }

  onLand() {
    const body = this.body;
    const k = this.airKind;
    const st = this.state;
    this.anim.flip = null;
    this.emit('land', { vy: body.landVy });
    if (st === 'gpFall') {
      this.setState('gpLand');
      this.anim.impulse(-5);
      this.game.audio.play('gpland');
      this.game.fx?.ring(body.pos.x, body.pos.y + 0.05, body.pos.z);
      this.game.fx?.dust(body.pos.x, body.pos.y, body.pos.z, 14);
      this.game.cam.shake(0.25);
      this.emit('groundpound', { x: body.pos.x, y: body.pos.y, z: body.pos.z });
      this.level.groundPound(body.pos.x, body.pos.y, body.pos.z, this);
      return;
    }
    if (st === 'dive') { this.setState('belly'); this.game.audio.play('land'); return; }
    if (st === 'hurt') { this.setState('ground'); return; }
    if (st === 'swim') return;
    if (st === 'air' || st === 'wallSlide') {
      this.game.audio.play('land');
      this.anim.impulse(body.landVy < -18 ? -4 : -2.5);
      if (k === 'jump1' || k === 'jump2') { this.chainTimer = C.CHAIN; }
      else { this.jumpChain = 0; this.chainTimer = 0; }
      if (['jump3', 'backflip', 'sideflip', 'longjump', 'gpjump'].includes(k)) {
        this.landDur = 0.08;
        this.setState('land');
        this.game.fx?.dust(body.pos.x, body.pos.y, body.pos.z, 6);
      } else {
        this.setState('ground');
        if (body.landVy < -15) this.game.fx?.dust(body.pos.x, body.pos.y, body.pos.z, 4);
      }
      this.airKind = 'fall';
    }
  }

  bonk() {
    const body = this.body, w = body.wall;
    if (w) { body.vel.x = w.nx * 4; body.vel.z = w.nz * 4; }
    body.leaveGround(6);
    this.airKind = 'hurt'; this.airTime = 0;
    this.setState('hurt');
    this.game.audio.play('bonk');
    this.game.cam.shake(0.15);
  }

  // Enemy stomp bounce
  bounce(vy = C.BOUNCE) {
    const A = this.game.input.actions;
    this.doJump('bounce', A.jump.down ? vy * 1.25 : vy);
    this.capJumpUsed = false;
  }

  capBounce() {
    if (this.capJumpUsed) return false;
    this.capJumpUsed = true;
    this.hoverUsed = false;
    const v = this.body.vel;
    const sp = Math.hypot(v.x, v.z);
    const keep = Math.max(sp, 6);
    const fx = Math.sin(this.facing), fz = Math.cos(this.facing);
    this.doJump('capjump', C.CAPJUMP, fx * keep, fz * keep);
    this.game.fx?.sparkle(this.pos.x, this.pos.y + 0.5, this.pos.z, 10);
    return true;
  }

  hurt(from, opts = {}) {
    if (this.invuln > 0 || this.dead || this.state === 'cutscene') return;
    if (this.capture) { this.capture.captureHurt?.(from); return; }
    this.hp -= opts.damage ?? 1;
    this.game.audio.play('hurt');
    this.game.cam.shake(0.2);
    if (this.hp <= 0) { this.hp = 0; this.die('hurt'); return; }
    this.invuln = 2.2;
    const body = this.body;
    let nx = 0, nz = 0;
    if (from) { nx = body.pos.x - from.x; nz = body.pos.z - from.z; const d = Math.hypot(nx, nz) || 1; nx /= d; nz /= d; }
    else { nx = -Math.sin(this.facing); nz = -Math.cos(this.facing); }
    body.vel.set(nx * 7, opts.burn ? 16 : 9, nz * 7);
    body.leaveGround(opts.burn ? 16 : 9);
    if (from) this.facing = Math.atan2(-nx, -nz);
    this.airKind = 'hurt'; this.airTime = 0;
    this.anim.flip = null;
    this.setState('hurt');
    this.game.onPlayerHurt?.();
  }

  heal(n = 1) {
    this.hp = Math.min(this.maxHp, this.hp + n);
  }

  die(reason) {
    if (this.dead) return;
    if (this.capture) this.capture.release(this, true);
    this.dead = true;
    this.deathT = 0;
    this.deathReason = reason;
    this.anim.flip = null;
    this.game.audio.play(reason === 'fall' ? 'fall' : 'die');
    this.game.onPlayerDeath(reason);
  }

  updateDead(dt) {
    this.deathT += dt;
    if (this.deathReason !== 'fall') {
      const v = this.body.vel;
      if (this.deathT < 0.5) { v.set(0, 0, 0); }
      else if (this.deathT < 0.55) { v.y = 9; }
      else v.y -= 30 * dt;
      this.body.pos.addScaledVector(v, dt);
      this.pose.name = 'dead';
      this.anim.update(dt, this.pose);
      this.root.position.copy(this.body.pos);
      this.root.rotation.y = damp(this.root.rotation.y, this.game.cam.yaw, 8, dt);
    }
  }

  respawn(pos, facing) {
    this.dead = false;
    this.hp = this.maxHp;
    this.body.setPos(pos.x, pos.y, pos.z);
    this.facing = facing ?? this.facing;
    this.setState('ground');
    this.airKind = 'fall';
    this.invuln = 1.0;
    this.capture = null;
    this.root.visible = true;
    this.cappy?.reset();
    this.model.setCapVisible(true);
    this.anim.flip = null;
  }

  freeze(on) { this.frozen = on; }

  // ---------------------------------------------------------------- visuals
  syncModel(dt) {
    const body = this.body;
    const root = this.root;
    root.position.copy(body.pos);
    if (this.state === 'ledge' || this.state === 'climb') root.position.y += 0.02;
    root.rotation.y = this.facing;
    // pose selection
    const p = this.pose;
    p.speed = this.hspeed();
    p.vy = body.vel.y;
    p.t = this.st;
    p.untuck = false;
    p.turn = 0;
    p.airborne = !body.grounded;
    p.stroke = this.swimStroke > 0;
    p.under = this.underwater;
    let name = 'idle';
    switch (this.state) {
      case 'ground':
        name = p.speed > 0.4 ? 'run' : 'idle';
        if (this.idleTime > 12) name = 'sleep';
        break;
      case 'skid': name = 'skid'; break;
      case 'crouch': name = 'crouch'; break;
      case 'crouchSlide': name = 'crouchSlide'; break;
      case 'roll': name = 'roll'; break;
      case 'land': name = 'land'; p.amount = 1; break;
      case 'slide': name = 'slide'; break;
      case 'air': {
        const k = this.airKind;
        if (k === 'jump3' || k === 'backflip' || k === 'sideflip' || k === 'gpjump' || k === 'rolljump') {
          name = this.anim.flip ? (k === 'sideflip' ? 'sideflip' : 'jump3') : 'jump1';
          if (!this.anim.flip) { name = 'jump3'; p.untuck = true; }
          if (k === 'gpjump' && !this.anim.flip) name = 'gpjump';
        } else if (k === 'longjump') name = 'longjump';
        else if (k === 'fall') name = this.airTime > 0.35 ? 'fall' : 'jump1';
        else if (k === 'hurt') name = 'hurt';
        else if (k === 'walljump') name = 'jump2';
        else name = k;
        break;
      }
      case 'gpStart': name = 'gpStart'; break;
      case 'gpFall': name = 'gpFall'; break;
      case 'gpLand': name = 'gpLand'; break;
      case 'dive': name = 'dive'; break;
      case 'belly': name = 'belly'; break;
      case 'wallSlide': name = 'wallSlide'; break;
      case 'ledge': name = 'ledge'; break;
      case 'climb': name = 'climb'; break;
      case 'swim': name = 'swim'; break;
      case 'hurt': name = 'hurt'; break;
      case 'cutscene': name = this.cutscenePose || 'idle'; p.t = this.st; break;
    }
    if (this.throwT > 0 && ['ground', 'air', 'land', 'swim'].includes(this.state) && !this.anim.flip) {
      name = 'throw';
      p.t = 0.28 - this.throwT;
    }
    p.name = name;
    this.anim.update(dt, p);
    // invulnerability blink
    if (this.invuln > 0 && !this.dead) root.visible = this.visible && Math.floor(this.invuln * 14) % 2 === 0;
    else root.visible = this.visible;
  }
}
