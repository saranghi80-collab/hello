// The game: ties the universe, the renderer, the ship and the interface together.

import * as THREE from 'three';
import { Engine } from '../render/engine.js';
import { SystemView } from '../render/bodies.js';
import { SignalView, SIGNAL_INFO } from '../render/signals.js';
import { ShipModel } from '../render/shipmodel.js';
import { setSkyBeta } from '../render/sky.js';
import { Universe, TRAIL_LENGTH } from '../world/universe.js';
import { distLy, SOL_POS } from '../world/galaxy.js';
import { bodyVelocity, qRotate, qConj, qMul, TYPE_LABEL } from '../world/system.js';
import { Ship, vec, quat } from './ship.js';
import { airAt, safeEntrySpeed, entryHeating } from './atmo.js';
import { AirParticles, Fireball } from '../render/effects.js';
import { JumpDrive } from './jump.js';
import { Input } from '../core/input.js';
import { AudioSystem } from '../audio/audio.js';
import { Hud } from '../ui/hud.js';
import { Maps } from '../ui/maps.js';
import { Panels, calendar } from '../ui/panels.js';
import { C, AU, LY, YEAR, DAY, clamp, fmtDistance, fmtSpeed, fmtDuration } from '../core/units.js';
import { Rng, hash32 } from '../core/rng.js';
import {
  INTRO, HOME_MESSAGES, ILSE_LOGS, PROBE_LOGS, WRECK_LOGS, RUIN_LOGS, RING_LOGS, ARRIVAL_LINES, LANDING_LINES, surveyNote,
} from '../story/text.js';

const SAVE_KEY = 'the-long-quiet/v1';
const SETTINGS_KEY = 'the-long-quiet/settings';
const MAX_JUMP = 15; // ly, drive limit
const LY_PER_TANK = 30;
const WARPS = [1, 10, 100, 1000, 10000];
const NO_AIR = { rho: 0, P: 0, T: 0, light: 1, depth: 0, gas: false };
const SHIP_MASS = 40000;

function lumNorm(c) {
  const y = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return [c[0] / y, c[1] / y, c[2] / y];
}

export class Game {
  constructor() {
    this.canvas = document.getElementById('scene');
    this.settings = this.loadSettings();
    this.engine = new Engine(this.canvas, { quality: this.settings.quality });
    this.input = new Input(this.canvas);
    this.audio = new AudioSystem();
    this.hud = new Hud(document.getElementById('hud'));
    this.universe = new Universe();
    this.maps = new Maps(this);
    this.panels = new Panels(this);
    this.jump = new JumpDrive(this);
    this.ship = new Ship();
    this.shipModel = new ShipModel();
    this.engine.scene.add(this.shipModel.group);
    this.air = NO_AIR;
    this.airParticles = new AirParticles();
    this.engine.scene.add(this.airParticles.points);
    this.fireball = new Fireball(this.engine.scene);
    this.lightning = 0;
    this.timeDilation = 1;
    this.setupLights();
    this.state = 'boot';
    this.time = 0;
    this.camMode = 'chase';
    this.camQ = [0, 0, 0, 1];
    this.freeYaw = 0; this.freePitch = 0.12;
    this.camZoom = 1;
    this.warpIndex = 0;
    this.scan = 0;
    this.saveTimer = 0;
    this.pmrem = new THREE.PMREMGenerator(this.engine.renderer);
    this.exposure = 2;
    this.applySettings();
    this.world = {
      sys: null, positions: [], orient: [],
      velocity: (i) => {
        if (!this._velCache[i]) this._velCache[i] = bodyVelocity(this.sys, i, this.time);
        return this._velCache[i];
      },
    };
    this._velCache = [];
    window.__game = this;
  }

  // ------------------------------------------------------------------ settings
  loadSettings() {
    const def = { quality: 'high', invertY: false, sensitivity: 1, volume: 0.8, music: 0.7, fov: 62 };
    try {
      const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
      return { ...def, ...s };
    } catch (e) { return def; }
  }
  applySettings() {
    const s = this.settings;
    if (this.engine.quality !== s.quality) {
      this.engine.setQuality(s.quality);
      this.engine.sky.starUniforms.uPx.value = this.engine.pixelRatio;
    }
    this.input.invertY = s.invertY;
    this.input.sensitivity = s.sensitivity;
    this.audio.setVolumes({ master: s.volume, music: s.music });
    this.baseFov = s.fov;
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) { /* storage unavailable */ }
  }

  setupLights() {
    this.sun = new THREE.DirectionalLight(0xffffff, 1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -24; sc.right = 24; sc.top = 24; sc.bottom = -24; sc.near = 1; sc.far = 400;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.04;
    this.engine.scene.add(this.sun, this.sun.target);
    this.fillLight = new THREE.DirectionalLight(0xffffff, 0);
    this.engine.scene.add(this.fillLight, this.fillLight.target);
    this.ambient = new THREE.AmbientLight(0xffffff, 0.002);
    this.engine.scene.add(this.ambient);
  }

  // ------------------------------------------------------------------ lifecycle
  hasSave() {
    try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
  }

  async boot() {
    this.resetVoyage();
    const save = this.readSave();
    if (save) this.applySave(save);
    else this.placeAtStart();
    this.panels.loadingText('Charting the neighbourhood…');
    await new Promise((r) => setTimeout(r, 30));
    this.enterSystem(this.star, true);
    this.panels.loadingText(null);
    this.state = 'title';
    this.panels.showTitle(!!save);
    this.titleT = 0;
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
  }

  resetVoyage() {
    this.star = this.universe.start;
    this.homeYears = 9.8;
    this.shipYears = 0.06;
    this.time = 1.2e6;
    this.visited = new Set();
    this.scannedSystems = new Set();
    this.surveyed = new Set();
    this.readSignals = new Set();
    this.logs = [];
    this.received = new Set();
    this.trailFound = -1;
    this.jumpTarget = null;
    this.route = null;
    this.target = null;
    this.travelled = 0;
    this.jumps = 0;
    this.lifeFound = new Set();
    this.ownBeacons = [];
    this.ship = new Ship();
    this.ship.fuel = 0.86;
    this.ship.gearDown = false;
    this.shipModel.gear = 0;
  }

  placeAtStart() {
    // open beside the ringed giant where the first beacon waits
    const sys = this.universe.system(this.star);
    const sig = sys.signals.find((s) => s.trail === 0);
    const giant = sys.bodies[sig.body];
    this.time = 1.2e6;
    this.pendingPlacement = { kind: 'near', body: giant.index, dist: giant.radius * 7.5 };
  }

  newGame() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
    this.resetVoyage();
    this.placeAtStart();
    this.enterSystem(this.star, true);
    this.panels.hideTitle();
    this.audio.start();
    this.state = 'intro';
    this.engine.post.fade = 1;
    this.panels.playIntro(INTRO).then(() => {
      this.state = 'play';
      this.fadeIn = 1;
      this.hud.note(`${this.star.name}. ${this.sys.bodies.length} bodies, unresolved.`);
      setTimeout(() => this.hud.note('Press Space to pulse-scan the system.', 'good', 10), 2500);
      this.objective = 'scan';
      this.noteBlackHole(16000);
      this.saveGame();
    });
  }

  continueGame() {
    const save = this.readSave();
    this.panels.hideTitle();
    this.audio.start();
    if (save && this.state === 'dead') {
      this.resetVoyage();
      this.applySave(save);
      this.enterSystem(this.star, true);
    }
    this.state = 'play';
    this.fadeIn = 1;
    this.engine.post.fade = 1;
    this.hud.note(`${this.star.name} · ${calendar(this.homeYears)} at home`);
    this.noteBlackHole(6000);
  }

  noteBlackHole(delay) {
    const e = this.universe.erebus;
    if (!e || this.bhNoted) return;
    setTimeout(() => {
      if (this.state !== 'play') return;
      this.bhNoted = true;
      const d = distLy(e.pos, this.star.pos);
      this.hud.note(`Gravimetry: something massive and dark, ${d.toFixed(1)} ly away. Marked on the galaxy map: Erebus.`, 'good', 12);
    }, delay);
  }

  toTitle() {
    this.state = 'title';
    this.titleT = 0;
    this.maps.toggle(false);
    this.panels.toggleJournal(false);
    this.input.releaseLock();
    this.panels.showTitle(this.hasSave());
  }

  // ------------------------------------------------------------------ systems
  enterSystem(star, immediateSky = false) {
    const g = this.universe.galaxy;
    if (this.view) this.view.dispose();
    if (this.signalView) this.signalView.dispose();
    this.star = star;
    this.sys = this.universe.system(star);
    this.world.sys = this.sys;
    this.view = new SystemView(this.engine, this.sys);
    this.world.positions = this.view.positions;
    this.world.orient = this.view.orient;
    this.view.computeKinematics(this.time);
    this.signalView = new SignalView(this.engine.scene, this.sys, this.view.planets);
    this.target = null;
    this.autopilot = false;
    this.warpIndex = 0;
    this.scan = 0;
    // sky from here
    this.engine.sky.regenerate(star.pos, immediateSky);
    this.envDirty = true;
    const near = g.starsInRadius(star.pos, 100);
    const list = [];
    for (const { star: s, d } of near) {
      if (s.id === star.id || s.kind === 'blackhole' || d < 0.01) continue;
      const flux = Math.max(s.lum, 1e-6) / (d * d);
      if (flux < 2.5e-6 && s.id !== 'SOL') continue;
      list.push({ dir: [(s.pos[0] - star.pos[0]) / d, (s.pos[1] - star.pos[1]) / d, (s.pos[2] - star.pos[2]) / d], color: lumNorm(s.color).map((v) => v * 0.6), flux });
    }
    this.engine.sky.setStars(list);
    // a black hole nearby lenses the sky
    const bh = near.filter((n) => n.star.kind === 'blackhole').sort((a, b) => a.d - b.d)[0];
    this.nearBH = bh ? bh.star : null;
    this.audio.setMood(star.seed, star.cls);
    this.visited.add(star.id);
    if (this.pendingPlacement) {
      this.applyPlacement(this.pendingPlacement);
      this.pendingPlacement = null;
    }
  }

  applyPlacement(pl) {
    const ship = this.ship;
    this.view.computeKinematics(this.time);
    if (pl.kind === 'near') {
      const b = this.sys.bodies[pl.body];
      const bp = this.view.positions[pl.body];
      // sit on the sunlit side, a little above the ring plane
      const toSun = vec.nrm(vec.scl(bp, -1));
      const side = vec.nrm(vec.cross(toSun, [0, 1, 0]));
      const off = vec.add(vec.add(vec.scl(toSun, 0.55), vec.scl(side, 0.75)), [0, 0.22, 0]);
      const rel = vec.scl(vec.nrm(off), pl.dist);
      ship.frame = pl.body; ship.rot = false;
      ship.p = rel; ship.v = [0, 0, 0];
      ship.q = this.qLookDir(vec.nrm(vec.scl(rel, -1)));
      ship.mode = 'flight';
      void b;
    } else if (pl.kind === 'saved') {
      ship.frame = pl.frame; ship.rot = pl.rot;
      ship.p = pl.p; ship.v = pl.v; ship.q = pl.q;
      ship.mode = pl.mode === 'landed' ? 'landed' : pl.mode === 'cruise' ? 'flight' : 'flight';
      if (ship.mode === 'landed') { ship.landQ = ship.q.slice(); ship.gearDown = true; this.shipModel.gear = 1; }
    }
    this.camQ = ship.q.slice();
  }

  // Called mid-transit by the jump drive.
  arriveSystem(target, dir, decelDistance) {
    const L = Math.max(target.lum, 1e-3);
    const R = target.radius * 6.957e8;
    let D = clamp(Math.sqrt(L) * 0.32 * AU, R * 45, 3 * AU);
    if (target.kind === 'blackhole') D = Math.max(0.4 * AU, Math.sqrt((6.674e-11 * target.mass * 1.989e30) / 9));
    if (target.kind === 'neutron') D = 0.05 * AU;
    this.arrivalDistance = D;
    this.enterSystem(target);
    this.ship.frame = -1; this.ship.rot = false;
    this.ship.p = vec.scl(dir, -(D + decelDistance));
    this.ship.q = this.qLookDir(dir);
    this.camQ = this.ship.q.slice();
  }

  onArrived(origin, d) {
    this.jumps++;
    this.travelled += d;
    this.jumpTarget = null;
    this.maps.selected = null;
    if (this.route) {
      const i = this.route.path.findIndex((s) => s.id === this.star.id);
      const rest = i >= 0 ? this.route.path.slice(i + 1) : [];
      if (rest.length) {
        this.route.path = rest;
        this.jumpTarget = rest[0];
        this.maps.selected = rest[0];
        setTimeout(() => this.hud.note(`Next on route: ${rest[0].name} · ${rest.length} to go`, 'info', 7), 3500);
      } else this.route = null;
    }
    const sys = this.sys;
    const st = this.star;
    this.audio.arrive();
    const r = new Rng(hash32(st.seed, this.jumps));
    this.hud.note(`Arrived: ${st.name}, ${st.spectral}.`);
    this.hud.note(`${sys.bodies.length} ${sys.bodies.length === 1 ? 'body' : 'bodies'} detected. ${r.pick(ARRIVAL_LINES)}`);
    const ti = this.universe.trailIndex(st.id);
    if (ti > 0 && ti === this.trailFound + 1) setTimeout(() => this.hud.note('A faint beacon is broadcasting in this system.', 'good', 9), 2500);
    if (st.id === 'SOL') {
      setTimeout(() => this.panels.transmission({
        kicker: 'Sol', title: 'Home',
        body: `Home, or what the word still means. ${Math.round(this.homeYears)} years have passed here since you left. The old Outer Survey relay at Earth does not answer. Nobody uses these frequencies anymore, or nobody is listening on them. The Sun looks exactly the same.`,
      }), 3000);
    }
    if (!st.scoopable) setTimeout(() => this.hud.note('This star cannot be scooped. Gas giants can be skimmed for fuel.', 'warn', 9), 4000);
    this.checkMessages(true);
    this.saveGame();
  }

  // ------------------------------------------------------------------ helpers
  qLookDir(dir) {
    // orientation with forward (-Z) along dir, up as close to +Y as possible
    const m = new THREE.Matrix4();
    const f = new THREE.Vector3(dir[0], dir[1], dir[2]).normalize();
    let up = new THREE.Vector3(0, 1, 0);
    if (Math.abs(f.dot(up)) > 0.98) up = new THREE.Vector3(1, 0, 0);
    m.lookAt(new THREE.Vector3(0, 0, 0), f, up);
    const q = new THREE.Quaternion().setFromRotationMatrix(m);
    return [q.x, q.y, q.z, q.w];
  }

  // world direction -> ship-frame direction
  dirToFrame(d) {
    const F = this.ship.frameState(this.world);
    return qRotate(qConj(F.q), d);
  }

  heightAt = (bodyIndex, localDir) => this.view.planets[bodyIndex].heightAt(localDir);

  jumpRange() { return Math.min(MAX_JUMP, this.ship.fuel * LY_PER_TANK); }
  jumpCost(d) { return d / LY_PER_TANK; }

  setJumpTarget(s, keepRoute = false) {
    this.jumpTarget = s;
    if (!keepRoute) this.route = null;
    if (s) this.hud.note(`Jump target: ${s.name} · ${distLy(s.pos, this.star.pos).toFixed(1)} ly`, 'info', 5);
  }

  // A* through the star field: hops no longer than the drive limit, preferring stars
  // that can be scooped so the tank can be refilled along the way.
  planRoute(dest) {
    const g = this.universe.galaxy;
    const start = this.star;
    const hop = MAX_JUMP * 0.98;
    const key = (s) => s.id;
    const open = new Map([[key(start), { s: start, g: 0, f: distLy(start.pos, dest.pos), prev: null }]]);
    const closed = new Map();
    let iter = 0;
    while (open.size && iter++ < 4000) {
      let cur = null;
      for (const n of open.values()) if (!cur || n.f < cur.f) cur = n;
      open.delete(key(cur.s));
      closed.set(key(cur.s), cur);
      if (cur.s.id === dest.id) {
        const path = [];
        for (let n = cur; n && n.s.id !== start.id; n = n.prev) path.unshift(n.s);
        return path;
      }
      for (const { star: nb, d } of g.starsInRadius(cur.s.pos, hop)) {
        if (nb.id === cur.s.id || closed.has(key(nb))) continue;
        if (!nb.scoopable && nb.id !== dest.id) continue;
        const cost = cur.g + d + 3; // a small cost per jump favours fewer, longer hops
        const ex = open.get(key(nb));
        if (!ex || cost < ex.g) open.set(key(nb), { s: nb, g: cost, f: cost + distLy(nb.pos, dest.pos), prev: cur });
      }
    }
    return null;
  }

  setRoute(dest) {
    const path = this.planRoute(dest);
    if (!path || !path.length) { this.hud.note(`No route to ${dest.name} found.`, 'warn', 5); return false; }
    this.route = { dest, path };
    this.setJumpTarget(path[0], true);
    this.hud.note(`Route to ${dest.name}: ${path.length} ${path.length === 1 ? 'jump' : 'jumps'}.`, 'good', 6);
    return true;
  }

  setTarget(t) {
    this.target = t;
    this.scan = 0;
    this.maps.renderInfo?.();
  }

  signalLabel(sig) {
    const known = this.readSignals.has(this.signalKey(sig));
    if (sig.type === 'beacon') return known ? 'Marrow beacon' : 'Faint beacon';
    if (sig.type === 'petrel') return known ? 'PETREL' : 'Vessel transponder';
    return known ? SIGNAL_INFO[sig.type].label : 'Unidentified signal';
  }
  signalKey(sig) { return `${this.star.id}/${this.sys.signals.indexOf(sig)}`; }

  trailKnown() {
    const out = [];
    const trail = this.universe.trail;
    for (let i = 0; i <= Math.min(this.trailFound + 1, trail.length - 1); i++) {
      if (i === 0) continue;
      out.push({ star: trail[i], found: i <= this.trailFound });
    }
    return out;
  }

  // nearest surface distance (metres) from a world position, for the cruise limiter
  nearestSurface(P) {
    let best = Math.hypot(P[0], P[1], P[2]) - this.sys.star.radius * 1.05;
    let who = -1;
    for (const b of this.sys.bodies) {
      const bp = this.view.positions[b.index];
      const top = b.solid ? b.radius + b.terrain.amp : b.radius * 1.01;
      const d = Math.hypot(P[0] - bp[0], P[1] - bp[1], P[2] - bp[2]) - top;
      if (d < best) { best = d; who = b.index; }
    }
    if (this.target && this.target.kind === 'signal') {
      const it = this.signalView.items[this.target.index];
      if (it) {
        const d = Math.hypot(P[0] - it.worldPos[0], P[1] - it.worldPos[1], P[2] - it.worldPos[2]) - it.model.userData.radius - 900;
        if (d < best) { best = d; who = -2; }
      }
    }
    this.nearestWho = who;
    return Math.max(best, 1);
  }

  massLock(P) {
    const sr = this.sys.star.radius;
    if (Math.hypot(P[0], P[1], P[2]) < sr * 12) return this.sys.star.name;
    for (const b of this.sys.bodies) {
      const bp = this.view.positions[b.index];
      if (Math.hypot(P[0] - bp[0], P[1] - bp[1], P[2] - bp[2]) < Math.max(b.radius * 8, 2e7)) return b.name;
    }
    return null;
  }

  // ------------------------------------------------------------------ frame
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (!(dt > 0)) dt = 0.016;
    dt = Math.min(dt, 0.1);
    try {
      this.step(dt);
    } catch (err) {
      console.error(err);
    }
    this.input.endFrame();
  }

  // Watch the frame rate for the first stretch of play and step quality down once
  // if this machine is struggling.
  watchPerformance(dt) {
    if (this.state !== 'play' || this.perfDone || this.settings.qualityLocked || window.__TLQ_TEST) return;
    this.perf = this.perf || { t: 0, frames: 0, skip: 2 };
    if (this.perf.skip > 0) { this.perf.skip -= dt; return; }
    this.perf.t += dt; this.perf.frames++;
    if (this.perf.t < 6) return;
    const fps = this.perf.frames / this.perf.t;
    this.perfDone = true;
    const order = ['low', 'medium', 'high', 'ultra'];
    const i = order.indexOf(this.settings.quality);
    if (fps < 38 && i > 0) {
      const next = order[Math.max(0, i - (fps < 22 ? 2 : 1))];
      this.settings.quality = next;
      this.applySettings();
      document.getElementById('set-quality').value = next;
      this.hud.note(`Render quality lowered to ${next} to keep things smooth. Change it in Settings.`, 'info', 8);
      this.perfDone = false; this.perf = { t: 0, frames: 0, skip: 2 };
      if (next === 'low') this.perfDone = true;
    }
  }

  step(dt) {
    this.watchPerformance(dt);
    this._velCache = [];
    const input = this.input;
    input.enabled = this.state === 'play' && !this.maps.open && !this.panels.modalOpen;
    if (this.state === 'play') this.handleKeys(dt);
    const warp = this.state === 'play' ? WARPS[this.warpIndex] : 1;
    const simDt = dt * warp;
    if (this.state === 'play' || this.state === 'intro') {
      this.time += simDt;
      if (!this.jump.active) {
        // near a black hole, home's clocks run faster than yours
        this.homeYears += (simDt * Math.min(this.timeDilation || 1, 40)) / YEAR;
        this.shipYears += simDt / YEAR;
      }
    } else if (this.state !== 'horizon') {
      this.time += dt * 20;
    }
    this.view.computeKinematics(this.time);
    if (this.state === 'play') this.updateShip(dt, simDt);
    else if (this.state === 'horizon') this.updateHorizon(dt);
    else this.idleShip(dt);
    this.updateCamera(dt);
    this.render(dt);
  }

  // ------------------------------------------------------------------ input
  handleKeys(dt) {
    const i = this.input;
    const ship = this.ship;
    const any = (codes) => codes.some((c) => this.input.pressed.has(c));
    if (any(['Escape'])) {
      if (this.maps.open) this.maps.toggle(false);
      else if (!this.panels.journal.hidden) this.panels.toggleJournal(false);
      else if (!this.panels.help.hidden) this.panels.toggleHelp(false);
      else if (!document.getElementById('settings').hidden) document.getElementById('settings').hidden = true;
      else if (this.panels.transOpen) this.panels.closeTransmission();
      else this.panels.togglePause();
    }
    if (any(['KeyM'])) this.maps.toggle(undefined, 'galaxy');
    if (any(['KeyN'])) this.maps.toggle(this.maps.open && this.maps.tab === 'system' ? false : true, 'system');
    if (any(['KeyK'])) this.panels.toggleJournal();
    if (any(['KeyH', 'F1'])) this.panels.toggleHelp();
    if (any(['Enter']) && this.panels.transOpen) this.panels.closeTransmission();
    if (!i.enabled) return;
    if (i.hit('KeyC')) { this.camMode = this.camMode === 'chase' ? 'cockpit' : 'chase'; this.audio.blip(); }
    if (i.hit('KeyG')) {
      if (ship.mode === 'landed') this.hud.note('Gear stays down while landed.', 'warn', 3);
      else { ship.gearDown = !ship.gearDown; this.audio.servo(); this.hud.note(ship.gearDown ? 'Landing gear down' : 'Landing gear up', 'info', 3); }
    }
    if (i.hit('KeyL')) { ship.lights = !ship.lights; this.audio.blip(); }
    if (i.hit('KeyX')) ship.throttle = 0;
    if (i.hit('KeyT')) this.targetAhead();
    if (i.hit('KeyP')) {
      this.autopilot = !this.autopilot && !!this.target;
      this.hud.note(this.autopilot ? 'Autopilot: approaching target' : 'Autopilot off', 'info', 4);
      this.audio.blip();
    }
    if (i.hit('Tab')) this.toggleCruise();
    if (i.hit('KeyJ')) this.tryJump();
    if (i.hit('Space')) this.spacePressed();
    if (i.hit('Period')) this.changeWarp(1);
    if (i.hit('Comma')) this.changeWarp(-1);
    if (i.wheel) this.camZoom = clamp(this.camZoom * (i.wheel > 0 ? 1.12 : 0.89), 0.45, 6);
    const rate = ship.mode === 'cruise' ? 0.45 : 0.6;
    if (i.down('KeyW')) ship.throttle = Math.min(1, ship.throttle + rate * dt);
    if (i.down('KeyS')) ship.throttle = Math.max(0, ship.throttle - rate * dt);
  }

  changeWarp(d) {
    const ship = this.ship;
    const ok = ship.mode === 'landed' || (ship.mode === 'flight' && vec.len(ship.v) < 1 && this.nearestSurface(this.shipWorld) > 5e6);
    if (d > 0 && !ok) {
      this.hud.note('Time compression only while landed, or stationary in open space.', 'warn', 4);
      this.warpIndex = 0;
      return;
    }
    this.warpIndex = clamp(this.warpIndex + d, 0, WARPS.length - 1);
    this.hud.note(this.warpIndex ? `Time ×${WARPS[this.warpIndex]}` : 'Time normal', 'info', 2);
  }

  toggleCruise() {
    const ship = this.ship;
    if (ship.mode === 'cruise') {
      ship.mode = 'flight';
      // in open space the drive brakes for you; in air you keep what you had
      ship.v = vec.scl(ship.forward, Math.min(ship.cruiseV, this.air.rho > 1e-7 ? 9000 : 300));
      ship.throttle = Math.min(ship.throttle, 0.4);
      this.audio.disengage();
      this.hud.note('Cruise drive disengaged', 'info', 3);
      return;
    }
    if (ship.mode === 'landed') { this.hud.note('Take off first.', 'warn', 3); return; }
    if (ship.mode !== 'flight') return;
    if (ship.alt < 2000) { this.hud.note('Too close to the surface for cruise.', 'warn', 3); return; }
    ship.mode = 'cruise';
    ship.cruiseV = Math.max(vec.len(ship.v), 500);
    if (ship.throttle < 0.25) ship.throttle = 0.75;
    if (ship.gearDown) { ship.gearDown = false; this.audio.servo(); }
    this.warpIndex = 0;
    this.audio.engage();
    this.hud.note('Cruise drive engaged', 'info', 3);
    if (this.objective === 'cruise') this.objective = 'approach';
  }

  tryJump() {
    const ship = this.ship;
    if (this.jump.active) {
      if (this.jump.phase === 'charge') { this.jump.cancel('Jump cancelled'); }
      return;
    }
    const t = this.jumpTarget;
    if (!t) { this.hud.note('No jump target. Open the galaxy map (M) and pick a star.', 'warn', 5); this.audio.deny(); return; }
    const d = distLy(t.pos, this.star.pos);
    if (d > MAX_JUMP) { this.hud.note(`${t.name} is beyond the drive's ${MAX_JUMP} ly limit.`, 'warn', 5); this.audio.deny(); return; }
    if (this.jumpCost(d) > ship.fuel) { this.hud.note('Not enough fuel. Skim a star or a gas giant.', 'warn', 5); this.audio.deny(); return; }
    if (ship.mode === 'landed') { this.hud.note('Take off before jumping.', 'warn', 4); this.audio.deny(); return; }
    const lock = this.massLock(this.shipWorld);
    if (lock) { this.hud.note(`Mass lock: too close to ${lock}. Move further out.`, 'warn', 5); this.audio.deny(); return; }
    ship.fuel -= this.jumpCost(d);
    this.warpIndex = 0;
    this.autopilot = false;
    this.jump.start(t);
  }

  targetAhead() {
    const camF = new THREE.Vector3(0, 0, -1).applyQuaternion(this.engine.camera.quaternion);
    let best = null, bestA = 0.2;
    const consider = (t, rel, extra = 0) => {
      const l = Math.hypot(rel[0], rel[1], rel[2]);
      const a = Math.acos(clamp((rel[0] * camF.x + rel[1] * camF.y + rel[2] * camF.z) / l, -1, 1)) - extra;
      if (a < bestA) { bestA = a; best = t; }
    };
    const cw = this.camWorld;
    consider({ kind: 'star' }, [-cw[0], -cw[1], -cw[2]]);
    this.sys.bodies.forEach((b, i) => {
      if (!this.scanned && b.parent >= 0) return;
      const p = this.view.positions[i];
      const rel = [p[0] - cw[0], p[1] - cw[1], p[2] - cw[2]];
      consider({ kind: 'body', index: i }, rel, Math.asin(Math.min(1, b.radius / Math.hypot(...rel))));
    });
    if (this.scanned) this.signalView.items.forEach((it, i) => consider({ kind: 'signal', index: i }, it.rel || [1, 0, 0]));
    if (best) { this.setTarget(best); this.audio.select(); } else { this.setTarget(null); this.audio.blip(); }
  }

  get scanned() { return this.scannedSystems.has(this.star.id); }

  spacePressed() {
    if (!this.scanned || !this.targetInScanRange()) {
      this.hud.pulse = 0;
      this.audio.pulse();
      if (!this.scanned) {
        this.scannedSystems.add(this.star.id);
        const n = this.sys.bodies.length, s = this.sys.signals.length;
        setTimeout(() => {
          this.hud.note(`Pulse scan: ${n} ${n === 1 ? 'body' : 'bodies'} resolved${s ? `, ${s} unidentified ${s === 1 ? 'signal' : 'signals'}` : ''}.`, s ? 'good' : 'info', 8);
          if (this.objective === 'scan' && s) {
            setTimeout(() => this.hud.note('Open the system map (N) and click the signal to target it.', 'good', 10), 1800);
            this.objective = 'target';
          }
        }, 1400);
        this.saveGame();
      }
    }
  }

  targetInScanRange() {
    const t = this.target;
    if (!t || t.kind === 'star') return false;
    const info = this.targetInfo();
    return info && info.inRange;
  }

  // ------------------------------------------------------------------ ship update
  get shipWorld() { return this._shipWorld || [0, 0, 0]; }

  updateShip(dt, simDt) {
    const ship = this.ship;
    const input = this.input;
    const world = this.world;
    const freeLook = (input.buttons & 2) !== 0 || ship.mode === 'landed';
    input.updateStick(dt, freeLook);
    this._shipWorld = ship.worldPos(world);
    ship.measureGround(world, this.heightAt);
    ship.gearReady = this.shipModel.gear > 0.85;
    ship.bottom = this.shipModel.bottom;
    this.air = ship.frame >= 0 ? airAt(this.sys.bodies[ship.frame], ship.alt) : NO_AIR;
    ship.air = this.air;
    let jumpLevel = 0;

    if (this.jump.active) {
      jumpLevel = this.jump.update(dt);
    } else if (ship.mode === 'landed') {
      ship.updateLanded(simDt, world, this.heightAt);
      if (input.down('KeyR') || (input.down('KeyW') && ship.throttle > 0.05)) {
        ship.takeoff();
        this.warpIndex = 0;
        this.audio.thud(0.15);
        this.hud.note('Lifting off', 'info', 3);
      }
    } else {
      if (this.autopilot) this.runAutopilot(dt);
      else if (this.faceTarget > 0) {
        // after an autopilot arrival, swing the nose onto the target
        this.faceTarget -= dt;
        const ti = this.targetInfo();
        if (ti) ship.turnToward(this.dirToFrame(vec.nrm(vec.sub(ti.worldPos, this._shipWorld))), dt, 0.9);
        if (Math.hypot(input.stick.x, input.stick.y) > 0.2) this.faceTarget = 0;
      }
      ship.steer(dt, input, freeLook && ship.mode !== 'landed' ? (input.buttons & 2) !== 0 : false);
      if (ship.mode === 'cruise') {
        const near = this.nearestSurface(this._shipWorld);
        // the drive governor holds speed down in air so entry heating stays survivable
        const airLimit = this.air.rho > 1e-9 ? safeEntrySpeed(this.air.rho) * 0.8 : Infinity;
        ship.updateCruise(dt, near, airLimit);
        const fb = ship.frame >= 0 ? this.sys.bodies[ship.frame] : null;
        const rBH = this.sys.star.starKind === 'blackhole' ? vec.len(this._shipWorld) / this.sys.star.radius : Infinity;
        if (near < 1500 || (fb && fb.solid && ship.alt < 1500)) {
          this.dropCruise(Math.min(ship.cruiseV, this.air.rho > 1e-6 ? 2000 : 250), 'Cruise drive disengaged: proximity');
        } else if (fb && !fb.solid && this.air.P > 0.4e5) {
          this.dropCruise(Math.min(ship.cruiseV, 900), `Cruise drive disengaged: the air of ${fb.name} is too dense`);
        } else if (rBH < 3) {
          this.dropCruise(ship.cruiseV, 'Cruise drive failure: spacetime is too steep this close to the hole');
        }
      } else if (ship.mode === 'flight') {
        const steps = simDt > 0.05 ? Math.ceil(simDt / 0.05) : 1;
        for (let s = 0; s < steps; s++) {
          ship.updateFlight(simDt / steps, input, world, this.heightAt);
          this.impactSpeed = vec.len(ship.v);
          const hit = ship.collide(world, this.heightAt);
          if (hit) this.handleContact(hit);
          if (ship.mode !== 'flight') break;
        }
      }
    }
    // the jump drive flies in the star's frame from start to finish
    if (!this.jump.active || this.jump.phase === 'charge') ship.chooseFrame(world);
    this._shipWorld = ship.worldPos(world);
    ship.measureGround(world, this.heightAt);
    ship.speed = this.jump.active ? this.jump.beta() * C : ship.mode === 'cruise' ? ship.cruiseV : vec.len(ship.v);
    if (ship.frame >= 0 && ship.mode === 'flight') ship.vertSpeed = vec.dot(ship.v, vec.nrm(ship.p));
    this.environment(simDt, dt);
    this.updateScan(dt);
    this.checkMessages(false);
    this.saveTimer += dt;
    if (this.saveTimer > 45 && !this.jump.active) { this.saveTimer = 0; this.saveGame(); }
    if (this.warpIndex && !(ship.mode === 'landed' || (ship.mode === 'flight' && vec.len(ship.v) < 1))) this.warpIndex = 0;
    this.jumpLevel = jumpLevel;
  }

  dropCruise(speed, note) {
    const ship = this.ship;
    ship.mode = 'flight';
    ship.v = vec.scl(ship.forward, speed);
    ship.throttle = Math.min(ship.throttle, 0.3);
    this.autopilot = false;
    this.audio.disengage();
    this.hud.note(note, 'warn', 5);
  }

  runAutopilot(dt) {
    const ship = this.ship;
    const info = this.targetInfo();
    if (!info) { this.autopilot = false; return; }
    const P = this._shipWorld;
    let aim = info.worldPos;
    // steer around anything in the way, passing wide of rings
    // a wide berth around planets and their rings, narrowed to the planet itself when
    // the target lies within that berth (a beacon beside its rings, say)
    const obstacles = this.sys.bodies.map((b) => {
      const pos = this.view.positions[b.index];
      const soft = (b.rings ? b.rings.outer : b.radius) * 1.6 + 2e5;
      const hard = b.radius * 1.2 + 5e4;
      const inside = vec.len(vec.sub(info.worldPos, pos)) < soft;
      return { pos, clear: inside ? hard : soft, idx: b.index };
    });
    obstacles.push({ pos: [0, 0, 0], clear: this.sys.star.radius * 4, idx: -1 });
    for (let pass = 0; pass < 2; pass++) {
      const d = vec.sub(aim, P);
      const L = vec.len(d);
      const u = vec.scl(d, 1 / L);
      let worst = null;
      for (const o of obstacles) {
        if (info.kind === 'body' && o.idx === info.body.index) continue;
        if (vec.len(vec.sub(info.worldPos, o.pos)) < o.clear || info.surfaceDist < 30000) continue;
        const t = vec.dot(vec.sub(o.pos, P), u);
        if (t <= 0 || t >= L) continue;
        const closest = vec.add(P, vec.scl(u, t));
        const miss = vec.len(vec.sub(closest, o.pos));
        if (miss < o.clear && (!worst || t < worst.t)) worst = { o, t, closest, miss };
      }
      if (!worst) break;
      let out = vec.sub(worst.closest, worst.o.pos);
      if (vec.len(out) < 1) out = vec.cross(u, [0, 1, 0]);
      aim = vec.add(worst.o.pos, vec.scl(vec.nrm(out), worst.o.clear * 1.25));
    }
    const dirW = vec.nrm(vec.sub(aim, P));
    const d = this.dirToFrame(dirW);
    const align = ship.turnToward(d, dt, ship.mode === 'cruise' ? 0.5 : 0.8);
    const arriveAt = info.kind === 'signal' ? 2500 : info.kind === 'star' ? info.radius * 8 : Math.max(info.radius * 0.1, 15000);
    if (info.surfaceDist < arriveAt) {
      if (ship.mode === 'cruise') this.toggleCruise();
      ship.throttle = 0;
      this.autopilot = false;
      this.faceTarget = 6;
      this.hud.note(`Arrived at ${info.name}`, 'good', 5);
      return;
    }
    if (ship.mode === 'flight' && align > 0.995 && info.surfaceDist > 20000 && ship.alt > 2000) this.toggleCruise();
    if (ship.mode === 'cruise') ship.throttle = align > 0.98 ? 1 : 0.15;
  }

  handleContact(hit) {
    const ship = this.ship;
    if (hit.type === 'land') {
      ship.land(this.world, hit.normal);
      this.audio.thud(0.35);
      const b = this.sys.bodies[ship.frame];
      const lines = LANDING_LINES[b.type] || LANDING_LINES.barren;
      this.hud.note(`${b.name}. ${lines[Math.floor(Math.random() * lines.length)]}`, 'info', 9);
      setTimeout(() => this.hud.note('Comma and period compress time. Watch the sky turn.', 'info', 8), 4000);
      this.saveGame();
      return;
    }
    if (hit.type === 'scrape') {
      if (hit.damage > 0.002) {
        ship.hull -= hit.damage;
        this.audio.thud(Math.min(0.6, 0.15 + hit.damage * 4));
        this.shake = Math.min(1.5, (this.shake || 0) + hit.damage * 10);
        this.hud.note(hit.damage > 0.1 ? 'Hull impact!' : 'Hull scraped', 'warn', 3);
        if (!ship.gearReady && hit.impact < 6) this.hud.note('Lower the landing gear (G) to set down.', 'warn', 4);
      }
      if (hit.impact > 70 || ship.hull <= 0) this.crash(hit);
    }
  }

  crash(hit) {
    const ship = this.ship;
    const b = this.sys.bodies[ship.frame];
    const v = Math.max(this.impactSpeed || 0, hit.impact || 0);
    const E = 0.5 * SHIP_MASS * v * v;
    const tnt = E / 4.184e9;
    const crater = Math.max(3, 9 * Math.cbrt(Math.max(tnt, 0.001)));
    const water = b.oceans && ship.groundH <= 0.5;
    const tntStr = tnt >= 1 ? `${tnt.toFixed(tnt < 10 ? 1 : 0)} tonnes` : `${Math.round(tnt * 1000)} kilograms`;
    const eStr = E > 1e9 ? `${(E / 1e9).toFixed(1)} gigajoules` : `${(E / 1e6).toFixed(0)} megajoules`;
    let msg;
    if (water) msg = `Hit the ocean of ${b.name} at ${fmtSpeed(v)}. At that speed water is as hard as stone.`;
    else if (v < 70) msg = `The hull gave way against the ground of ${b.name}.`;
    else msg = `Struck ${b.name} at ${fmtSpeed(v)}. The impact released ${eStr}, about ${tntStr} of TNT, and left a crater perhaps ${Math.round(crater)} metres across.`;
    if (v > 40) this.fireball.start(this._shipWorld, Math.max(20, crater * 1.4));
    this.shake = 2;
    this.die(msg);
  }

  environment(simDt, dt) {
    const ship = this.ship;
    const P = this._shipWorld;
    const sys = this.sys;
    const star = sys.star;
    const rStar = Math.hypot(P[0], P[1], P[2]);
    const E = this.view.irradianceAt(P);
    const R = star.radius;
    const bh = star.starKind === 'blackhole';
    let heatIn = bh ? 0 : 1.7e-5 * E;
    let scoop = 0;
    let cause = 'star';
    if (!bh && rStar < R * 6 && this.star.scoopable && ship.mode !== 'jump') {
      scoop = 0.22 * Math.min(4, (2 * R / rStar) ** 2);
      heatIn += scoop * 0.05;
    }
    if (!bh && rStar < R * 1.02) {
      this.die(`Flew into ${star.name}. The hull was gone long before it reached the photosphere; what was left of it became part of the star.`);
      return;
    }
    const b = ship.frame >= 0 ? sys.bodies[ship.frame] : null;
    const air = this.air;
    let windDensity = 0;
    this.plasma = 0;
    this.pressureStress = 0;
    if (b && air.rho > 0) {
      windDensity = Math.min(1, Math.sqrt(air.rho / 1.2));
      // entry heating: shock-heated air in front of the hull
      const vAir = ship.mode === 'landed' ? 0 : ship.speed;
      const flux = entryHeating(air.rho, vAir);
      this.plasma = flux / 0.035;
      if (flux > 1.7e-5 * E) cause = 'entry';
      heatIn += flux;
      // the air itself: hot gas below the cloud tops, greenhouse ovens
      if (air.T > 450) {
        const hot = (air.T - 450) / 1000 * Math.min(1, air.rho) * 0.05;
        heatIn += hot;
        if (hot > flux) cause = 'air';
      }
      // gas giant scooping in the thin upper layers
      if (!b.solid && air.P > 2e3 && air.P < 0.8e5 && ship.speed < 3000) scoop = Math.max(scoop, 0.03);
      // pressure: the hull is rated to 30 bar
      const bars = air.P / 1e5;
      if (bars > 30) {
        this.pressureStress = Math.min(1, (bars - 30) / 200);
        this.harm((bars / 30 - 1) * 0.012 * simDt, 'pressure');
      }
    }
    if (b && b.solid && b.type === 'venus' && ship.alt < 30000) { heatIn += 0.03 * (1 - ship.alt / 30000); cause = 'air'; }
    if (b && b.solid && b.type === 'lava' && ship.alt < 2000) { heatIn += 0.012 * (1 - ship.alt / 2000); cause = 'ground'; }
    // compact objects: tides and time
    const Rs = (2 * 6.674e-11 * star.mass) / (C * C);
    this.timeDilation = rStar > Rs * 1.0005 ? 1 / Math.sqrt(1 - Rs / rStar) : 40;
    this.tidal = 0;
    if (bh || star.starKind === 'neutron') {
      this.tidal = (2 * 6.674e-11 * star.mass * 30) / (rStar * rStar * rStar);
      if (this.tidal > 40) this.harm(((this.tidal - 40) / 600) * simDt, 'tidal');
      if (this.tidal > 3000) { this.die(this.deathText('tidal')); return; }
      if (bh && rStar < R && this.state === 'play') { this.enterHorizon(); return; }
    }
    ship.heat += (heatIn - 0.075 * ship.heat) * simDt;
    ship.heat = Math.max(0, ship.heat);
    this.heatCause = cause;
    if (ship.heat > 1) this.harm((ship.heat - 1) * 0.06 * simDt, 'heat');
    if (scoop > 0) ship.fuel = Math.min(1, ship.fuel + scoop * simDt * 0.5);
    this.scooping = scoop > 0.001 && ship.fuel < 0.999;
    if (ship.mode === 'landed' && ship.hull < 1) ship.hull = Math.min(1, ship.hull + simDt / 3600 * 0.25);
    this.windDensity = windDensity;
  }

  harm(amount, kind) {
    const ship = this.ship;
    if (amount <= 0 || this.state !== 'play') return;
    ship.hull -= amount;
    if (amount > 0.002) this.shake = Math.min(1.2, (this.shake || 0) + amount * 4);
    if (ship.hull <= 0) this.die(this.deathText(kind));
  }

  deathText(kind) {
    const ship = this.ship;
    const star = this.sys.star;
    const b = ship.frame >= 0 ? this.sys.bodies[ship.frame] : null;
    const air = this.air;
    const P = this._shipWorld;
    const rStar = Math.hypot(P[0], P[1], P[2]);
    if (kind === 'heat') kind = this.heatCause === 'entry' ? 'entry' : this.heatCause === 'air' ? 'hotair' : this.heatCause === 'ground' ? 'ground' : 'starheat';
    switch (kind) {
      case 'pressure':
        return `The hull gave way at ${Math.round(air.P / 1e5)} bar, ${fmtDistance(air.depth)} below the cloud tops of ${b.name}. It was ${Math.round(air.T)} K outside and completely dark. The wreck will keep sinking for days, until the pressure turns it into something that is no longer quite metal.`;
      case 'entry':
        return `Entry heating at ${fmtSpeed(ship.speed)} overwhelmed the hull ${fmtDistance(Math.max(0, ship.alt))} above ${b ? b.name : 'the surface'}. From the ground it would have looked like a falling star.`;
      case 'hotair':
        return `Outside it was ${Math.round(air.T)} K, and the radiators had nothing cooler to shed the heat into. ${b ? b.name : 'The planet'} cooked the TERN slowly, from the outside in.`;
      case 'ground':
        return `The ground of ${b.name} was molten a few metres down. The TERN's hull reached the same temperature.`;
      case 'tidal':
        return `Torn apart by tides ${fmtDistance(rStar - star.radius)} from ${star.name}: the pull on the nose was ${Math.round(this.tidal).toLocaleString('en-US')} m/s² stronger than on the tail. Nothing built by people could have held together.`;
      case 'starheat':
      default:
        return `The light of ${star.name} did what nothing else out here could. ${fmtDistance(Math.max(0, rStar - star.radius))} above its surface, the hull softened and failed.`;
    }
  }

  // Past the event horizon there is no outward direction left. The ship has a fraction of
  // a second of its own time before the singularity, stretched here so it can be seen.
  enterHorizon() {
    if (this.state !== 'play') return;
    this.state = 'horizon';
    this.horizonT = 0;
    this.autopilot = false;
    this.input.releaseLock();
    const star = this.sys.star;
    const tau = (Math.PI * 6.674e-11 * star.mass) / (C * C * C);
    this.horizonTau = tau;
    this.audio.thud(0.25);
    this.horizonFrom = this.homeYears;
  }

  updateHorizon(dt) {
    this.horizonT += dt;
    const p = Math.min(1, this.horizonT / 9);
    this.horizonP = p;
    this.shake = 0.4 + p * 1.5;
    // the ship swings round to look back the way it came: what is left of the universe
    // is behind you now
    const ship = this.ship;
    const F = ship.frameState(this.world);
    const out = qRotate(qConj(F.q), vec.nrm(this._shipWorld));
    const turn = quat.qFromTo(qRotate(ship.q, [0, 0, -1]), out);
    const rate = 1.4 * Math.min(1, this.horizonT / 1.2);
    ship.q = quat.qNormalize(quat.qSlerp(ship.q, qMul(turn, ship.q), 1 - Math.exp(-dt * rate)));
    if (p >= 1 && this.state === 'horizon') {
      const star = this.sys.star;
      this.state = 'play';
      this.die(`You crossed the event horizon of ${star.name}. From inside, every direction leads to the same place, and the singularity came ${this.horizonTau < 1 ? this.horizonTau.toFixed(2) : this.horizonTau.toFixed(1)} seconds later by your clock. Outside, it will never happen. To anyone watching, the TERN hangs at the edge forever, reddening and dimming, until there is nothing left to see.`);
    }
  }

  die(cause) {
    if (this.state === 'dead') return;
    this.state = 'dead';
    this.ship.mode = 'dead';
    this.ship.hull = 0;
    this.jump.phase = 'idle';
    setSkyBeta(this.engine.sky.uniforms, 0);
    this.audio.thud(0.7);
    this.engine.post.flash = 0.5;
    setTimeout(() => this.panels.showDeath(cause, this.stats()), 2200);
  }

  // ------------------------------------------------------------------ scanning & signals
  targetInfo() {
    const t = this.target;
    if (!t) return null;
    const P = this._shipWorld || [0, 0, 0];
    if (t.kind === 'star') {
      const d = Math.hypot(P[0], P[1], P[2]);
      return { kind: 'star', name: this.sys.star.name, worldPos: [0, 0, 0], radius: this.sys.star.radius, dist: d, surfaceDist: d - this.sys.star.radius, inRange: false };
    }
    if (t.kind === 'body') {
      const b = this.sys.bodies[t.index];
      const bp = this.view.positions[t.index];
      const d = Math.hypot(P[0] - bp[0], P[1] - bp[1], P[2] - bp[2]);
      return { kind: 'body', name: b.name, body: b, worldPos: bp, radius: b.radius, dist: d, surfaceDist: d - b.radius, inRange: d < b.radius * 30 + 5e6 };
    }
    const it = this.signalView.items[t.index];
    if (!it) return null;
    const d = Math.hypot(P[0] - it.worldPos[0], P[1] - it.worldPos[1], P[2] - it.worldPos[2]);
    return { kind: 'signal', name: this.signalLabel(it.sig), sig: it.sig, worldPos: it.worldPos, radius: it.model.userData.radius, dist: d, surfaceDist: d - it.model.userData.radius, inRange: d < SIGNAL_INFO[it.sig.type].range };
  }

  updateScan(dt) {
    const info = this.targetInfo();
    const holding = this.input.down('Space');
    if (!info || !holding || !info.inRange || info.kind === 'star') { this.scan = Math.max(0, this.scan - dt * 2); return; }
    const already = info.kind === 'body' ? this.surveyed.has(info.body.id) : this.readSignals.has(this.signalKey(info.sig));
    if (already && this.scan === 0) return;
    // must be roughly in view
    const rel = vec.sub(info.worldPos, this.camWorld);
    const camF = new THREE.Vector3(0, 0, -1).applyQuaternion(this.engine.camera.quaternion);
    const cosA = (rel[0] * camF.x + rel[1] * camF.y + rel[2] * camF.z) / vec.len(rel);
    const toT = vec.nrm(vec.sub(info.worldPos, this._shipWorld));
    const nose = qRotate(this.ship.worldQ(this.world), [0, 0, -1]);
    if (cosA < Math.cos(0.75) && vec.dot(toT, nose) < Math.cos(0.75)) { this.centerMsg = 'Turn toward the target to scan'; return; }
    this.scan += dt / (info.kind === 'body' ? 2.6 : 2.0);
    if (this.scan >= 1) {
      this.scan = 0;
      if (info.kind === 'body') this.completeSurvey(info.body);
      else this.readSignal(info.sig);
    }
  }

  completeSurvey(b) {
    if (this.surveyed.has(b.id)) return;
    this.surveyed.add(b.id);
    this.audio.surveyed();
    const note = surveyNote(b, this.sys.star);
    this.panels.surveyCard(b, note, { typeLabel: TYPE_LABEL[b.type] });
    if (b.life) {
      this.lifeFound.add(b.id);
      this.addLog({ kind: 'survey', title: `Life on ${b.name}`, text: note });
      this.hud.note('Biosignatures confirmed.', 'good', 8);
    }
    this.saveGame();
  }

  readSignal(sig) {
    const key = this.signalKey(sig);
    if (this.readSignals.has(key)) return;
    this.readSignals.add(key);
    this.audio.surveyed();
    const r = new Rng(sig.seed);
    const used = new Set(this.logs.map((l) => l.text));
    const pickUnused = (pool) => {
      const start = r.int(0, pool.length - 1);
      for (let i = 0; i < pool.length; i++) {
        const t = pool[(start + i) % pool.length];
        if (!used.has(t)) return t;
      }
      return pool[start];
    };
    let title, kicker, text;
    const host = this.sys.bodies[sig.body];
    if (sig.type === 'beacon' || sig.type === 'petrel') {
      const n = sig.trail;
      const next = this.universe.trail[n + 1];
      text = ILSE_LOGS[Math.min(n, ILSE_LOGS.length - 1)];
      if (next) {
        const d = distLy(next.pos, this.star.pos);
        text = text.replace('{next}', next.name).replace('{dist}', Math.round(d));
      }
      kicker = n === TRAIL_LENGTH ? 'Vessel PETREL · Surveyor Seven' : `Survey beacon · Surveyor Seven · ${n + 1} of ${TRAIL_LENGTH + 1}`;
      title = n === TRAIL_LENGTH ? 'Ilse Marrow' : `Beacon at ${this.star.name}`;
      this.trailFound = Math.max(this.trailFound, n);
      if (next) setTimeout(() => {
        this.hud.note(`Beacon coordinates logged: ${next.name}. Marked on the galaxy map.`, 'good', 10);
        const dn = distLy(next.pos, this.star.pos);
        if (!this.jumpTarget && dn <= MAX_JUMP) this.setJumpTarget(next);
        else if (!this.jumpTarget && this.setRoute(next)) setTimeout(() => this.hud.note(`${next.name} is ${Math.round(dn)} ly away, beyond one jump. A route has been plotted.`, 'info', 9), 1500);
      }, 600);
    } else if (sig.type === 'probe') {
      kicker = 'Derelict probe'; title = `In orbit of ${host.name}`; text = pickUnused(PROBE_LOGS);
    } else if (sig.type === 'wreck') {
      kicker = 'Wreckage'; title = `On ${host.name}`; text = pickUnused(WRECK_LOGS);
    } else if (sig.type === 'monolith') {
      kicker = 'Unidentified structure'; title = `On ${host.name}`; text = pickUnused(RUIN_LOGS);
    } else {
      kicker = 'Orbital structure'; title = `Around ${host.name}`; text = pickUnused(RING_LOGS);
    }
    this.addLog({ kind: sig.type, title: `${kicker}: ${title}`, text });
    const last = sig.type === 'petrel';
    this.panels.transmission({
      kicker, title, body: text, meta: `${this.star.name} · ${calendar(this.homeYears)}`,
      after: last ? () => setTimeout(() => this.panels.openWriter(), 600) : undefined,
    });
    if (this.objective === 'target' || this.objective === 'approach') this.objective = 'done';
    this.saveGame();
  }

  leaveBeacon(text) {
    this.ownBeacons.push({ star: this.star.name, text, year: calendar(this.homeYears) });
    this.addLog({ kind: 'own', title: `Your beacon at ${this.star.name}`, text });
    this.hud.note('Your beacon is transmitting. Someone, someday.', 'good', 10);
    setTimeout(() => this.hud.note("Marrow's route ends here. Yours doesn't have to.", 'info', 10), 4000);
    this.saveGame();
  }

  addLog(entry) {
    this.logs.push({ ...entry, where: this.star.name, when: calendar(this.homeYears) });
  }

  checkMessages(force) {
    this.msgTimer = (this.msgTimer || 0) - 1;
    if (!force && this.msgTimer > 0) return;
    this.msgTimer = 120;
    const dSol = distLy(this.star.pos, SOL_POS);
    const cutoff = this.homeYears - dSol;
    HOME_MESSAGES.forEach((m, i) => {
      if (this.received.has(i) || m.year > cutoff) return;
      this.received.add(i);
      const delay = this.homeYears - m.year;
      this.logs.push({ kind: 'home', title: m.from, text: m.text, where: this.star.name, when: `sent ${calendar(m.year)}, received ${calendar(this.homeYears)}` });
      setTimeout(() => this.panels.transmission({
        kicker: 'Transmission from Sol', title: m.from, body: m.text,
        meta: `Sent ${calendar(m.year)} · in transit ${delay.toFixed(1)} years`,
      }), 1500 + i * 50);
    });
  }

  stats() {
    const list = [];
    for (const id of this.surveyed) {
      const [sid, bi] = id.split('/');
      const star = this.universe.galaxy.starById(sid);
      if (!star) continue;
      const sys = this.universe.system(star);
      const b = sys.bodies[Number(bi)];
      if (b) list.push({ name: b.name, type: TYPE_LABEL[b.type], life: b.life });
    }
    const p = this.star.pos;
    return {
      systems: this.visited.size,
      bodies: this.surveyed.size,
      life: this.lifeFound.size,
      signals: this.readSignals.size,
      trail: this.trailFound + 1,
      trailTotal: TRAIL_LENGTH + 1,
      list,
      fromSol: distLy(p, SOL_POS),
      travelled: this.travelled,
      jumps: this.jumps,
      shipTime: `${Math.floor(this.shipYears)} yr ${Math.floor((this.shipYears % 1) * 365)} d`,
      homeYear: calendar(this.homeYears),
      galR: Math.hypot(p[0], p[2]),
    };
  }

  // ------------------------------------------------------------------ title idle
  idleShip(dt) {
    const ship = this.ship;
    this.titleT = (this.titleT || 0) + dt;
    this._shipWorld = ship.worldPos(this.world);
    ship.measureGround(this.world, this.heightAt);
    if (ship.mode === 'landed') ship.updateLanded(dt, this.world, this.heightAt);
  }

  // ------------------------------------------------------------------ camera
  updateCamera(dt) {
    const ship = this.ship;
    const world = this.world;
    const F = ship.frameState(world);
    const input = this.input;
    if (input.buttons & 2 || (ship.mode === 'landed' && input.locked) || this.state === 'title') {
      this.freeYaw -= input.mouseDelta.x * 0.004;
      this.freePitch = clamp(this.freePitch + input.mouseDelta.y * 0.004, -1.3, 1.3);
    } else if (ship.mode !== 'landed') {
      this.freeYaw *= Math.exp(-dt * 1.5);
      this.freePitch += (0.1 - this.freePitch) * (1 - Math.exp(-dt * 1.5));
    }
    if (this.state === 'title') this.freeYaw += dt * 0.02;
    const look = qMul([0, Math.sin(this.freeYaw / 2), 0, Math.cos(this.freeYaw / 2)], [Math.sin(-this.freePitch / 2), 0, 0, Math.cos(-this.freePitch / 2)]);
    let camLocal, camQ;
    const chase = this.state === 'horizon' ? false : this.camMode === 'chase' || this.state !== 'play';
    if (chase) {
      const stiff = ship.mode === 'cruise' ? 7 : 5;
      this.camQ = quat.qSlerp(this.camQ, ship.q, 1 - Math.exp(-dt * stiff));
      const q = qMul(this.camQ, look);
      const dist = 36 * this.camZoom * (this.state === 'title' ? 1.6 : 1);
      const off = qRotate(q, [0, 4 + dist * 0.12, dist]);
      camLocal = vec.add(ship.p, off);
      camQ = qMul(q, [Math.sin(-0.05), 0, 0, Math.cos(-0.05)]);
      // never below the ground
      if (ship.frame >= 0 && world.sys.bodies[ship.frame].solid) {
        const b = world.sys.bodies[ship.frame];
        const d = vec.len(camLocal);
        if (d < b.radius * 1.2) {
          const local = ship.rot ? vec.scl(camLocal, 1 / d) : qRotate(qConj(world.orient[ship.frame]), vec.scl(camLocal, 1 / d));
          const gh = b.radius + this.heightAt(ship.frame, local) + 2.5;
          if (d < gh) camLocal = vec.scl(camLocal, gh / d);
        }
      }
    } else {
      camLocal = vec.add(ship.p, qRotate(ship.q, [0, 0.95, -12.2]));
      camQ = qMul(ship.q, look);
    }
    // shake
    const sh = (this.shake || 0) + (this.jumpLevel || 0) * 0.25 + Math.min(0.4, (this.windDensity || 0) * Math.min(1, ship.speed / 400));
    this.shake = Math.max(0, (this.shake || 0) - dt * 1.5);
    if (sh > 0.001) {
      const t = performance.now() / 1000;
      const a = sh * 0.004;
      camQ = qMul(camQ, [Math.sin(t * 37) * a, Math.sin(t * 29 + 1) * a, Math.sin(t * 23 + 2) * a * 0.5, 1]);
      camQ = quat.qNormalize(camQ);
    }
    const worldQ = qMul(F.q, camQ);
    this.camWorld = vec.add(F.pos, qRotate(F.q, camLocal));
    const cam = this.engine.camera;
    cam.quaternion.set(worldQ[0], worldQ[1], worldQ[2], worldQ[3]);
    cam.position.set(0, 0, 0);
    const fovTarget = this.baseFov + (ship.mode === 'cruise' ? Math.min(8, Math.log10(Math.max(ship.cruiseV, 1e3) / 1e3) * 1.6) : 0);
    cam.fov += (fovTarget - cam.fov) * (1 - Math.exp(-dt * 2));
    cam.near = chase ? 0.5 : 0.08;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
  }

  // ------------------------------------------------------------------ render
  render(dt) {
    const eng = this.engine;
    const ship = this.ship;
    const world = this.world;
    const cw = this.camWorld;
    const frustum = eng.updateFrustum();
    const shipW = this._shipWorld || ship.worldPos(world);
    const shipQ = ship.worldQ(world);
    // floodlight
    const lampW = vec.add(shipW, qRotate(shipQ, [0, -2.15, -11.6]));
    const lampDir = qRotate(shipQ, vec.nrm([0, -0.45, -1]));
    const ctx = {
      time: this.time,
      camWorld: cw,
      pixelAngle: eng.pixelAngle,
      projScale: eng.projScale,
      pxRatio: eng.pixelRatio,
      frustum,
      spot: { pos: vec.sub(lampW, cw), dir: lampDir, on: ship.lights, intensity: 3000 / this.exposure, cos: Math.cos(0.42) },
      air: this.air,
      exposure: this.exposure,
      lightning: this.lightning,
      lightningDir: this.lightningDir,
      inside: this.state === 'horizon' ? 0.02 + 0.98 * Math.pow(this.horizonP || 0, 1.6) : 0,
      camFwd: new THREE.Vector3(0, 0, -1).applyQuaternion(eng.camera.quaternion),
    };
    ctx.extraGlints = this.signalView.update(ctx, this.time, cw, this.exposure);
    this.view.update(ctx);
    // ship model
    const sm = this.shipModel;
    sm.group.position.set(shipW[0] - cw[0], shipW[1] - cw[1], shipW[2] - cw[2]);
    sm.group.quaternion.set(shipQ[0], shipQ[1], shipQ[2], shipQ[3]);
    sm.group.visible = this.camMode === 'chase' || this.state !== 'play';
    const solW = vec.nrm(vec.sub(SOL_POS, this.star.pos));
    const solLocal = qRotate(qConj(shipQ), solW);
    // shock-heated air streaming past the hull
    const Fq = ship.frameState(world).q;
    const vlen = vec.len(ship.v);
    const flowLocal = vlen > 1 ? qRotate(qConj(ship.q), vec.scl(ship.v, -1 / vlen)) : null;
    sm.setPlasma(this.time, this.state === 'play' ? this.plasma || 0 : 0, flowLocal, this.exposure * 1.6);
    this.updateAirFx(dt, Fq, ctx);
    this.fireball.update(dt, cw, this.exposure);
    sm.animate(this.time, dt, {
      gear: ship.gearDown || ship.mode === 'landed' ? 1 : 0,
      thrust: ship.mode === 'jump' ? 0 : ship.thrust, jumpGlow: ship.mode === 'jump' ? Math.min(1, (this.jumpLevel || 0) * 1.5) : 0,
      heat: ship.heat, lights: ship.lights, cruise: ship.mode === 'cruise', solDirLocal: solLocal, cabinLight: true, expo: this.exposure * 1.6,
    });
    // ship lighting from the star
    const E = this.view.irradianceAt(shipW);
    const sc = lumNorm(this.sys.star.color);
    let lit = 1;
    // planet shadow on the ship
    for (const b of this.sys.bodies) {
      const bp = this.view.positions[b.index];
      const toB = vec.sub(bp, shipW);
      const toSun = vec.nrm(vec.scl(shipW, -1));
      const along = vec.dot(toB, toSun);
      if (along <= 0) continue;
      const perp = vec.len(vec.sub(toB, vec.scl(toSun, along)));
      if (perp < b.radius) { lit = Math.min(lit, clamp((perp - b.radius * 0.995) / (b.radius * 0.01) + 0.5, 0, 1)); }
    }
    if (ship.frame >= 0 && this.sys.bodies[ship.frame].atmosphere && this.sys.bodies[ship.frame].solid) {
      const up = vec.nrm(vec.sub(shipW, this.view.positions[ship.frame]));
      const toSun = vec.nrm(vec.scl(shipW, -1));
      lit *= clamp(vec.dot(up, toSun) * 6 + 0.3, 0, 1);
    }
    // inside thick air the sun is dimmed or gone
    lit *= Math.max(this.air.light ?? 1, 0);
    this.shipLit = lit;
    const toSun = vec.nrm(vec.scl(shipW, -1));
    const shipRel = sm.group.position;
    this.sun.position.set(shipRel.x + toSun[0] * 150, shipRel.y + toSun[1] * 150, shipRel.z + toSun[2] * 150);
    this.sun.target.position.copy(shipRel);
    this.sun.color.setRGB(sc[0], sc[1], sc[2]);
    this.sun.intensity = E * lit;
    this.sun.target.updateMatrixWorld();
    // planetshine from the nearest big body
    let fillI = 0;
    if (ship.frame >= 0) {
      const b = this.sys.bodies[ship.frame];
      const bp = this.view.positions[ship.frame];
      const toB = vec.sub(bp, shipW);
      const d = vec.len(toB);
      const bdir = vec.scl(toB, 1 / d);
      const Eb = this.view.irradianceAt(bp);
      const phase = 0.5 * (1 + vec.dot(vec.scl(bdir, -1), vec.nrm(vec.scl(bp, -1))));
      fillI = Eb * (this.view.planets[ship.frame].albedo) * Math.min(1, (b.radius / d) ** 2) * phase * 0.8;
      this.fillLight.position.set(shipRel.x - bdir[0] * 100, shipRel.y - bdir[1] * 100, shipRel.z - bdir[2] * 100);
      this.fillLight.target.position.copy(shipRel);
      this.fillLight.target.updateMatrixWorld();
    }
    this.fillLight.intensity = fillI;
    this.ambient.intensity = 0.0008 + (ship.lights ? 0.002 : 0);
    // environment reflections follow the sky
    if (this.envDirty && !eng.sky.pending) {
      if (this.envTex) this.envTex.dispose();
      this.envTex = this.pmrem.fromCubemap(eng.sky.cubeTarget.texture).texture;
      sm.setEnvMap(this.envTex);
      this.signalView.root.traverse((o) => { if (o.material && o.material.isMeshStandardMaterial) { o.material.envMap = this.envTex; o.material.needsUpdate = true; } });
      this.envDirty = false;
    }
    eng.sky.step();
    // black hole lensing
    if (this.sys.star.starKind === 'blackhole') {
      const rel = vec.scl(cw, -1);
      const d = vec.len(rel);
      eng.sky.uniforms.uBH.value.set(rel[0] / d, rel[1] / d, rel[2] / d, this.sys.star.radius / d);
    } else eng.sky.uniforms.uBH.value.set(0, 0, 0, 0);
    // exposure: meter for sunlit surfaces at the camera's distance from the star, with shadow
    const Ecam = Math.max(this.view.irradianceAt(cw) * Math.max(lit, 0.02) * Math.max(this.air.light ?? 1, 0.01), 0.0015);
    const target = (0.2 * Math.PI) / (0.3 * Ecam);
    this.exposure = Math.exp(Math.log(this.exposure) + (Math.log(target) - Math.log(this.exposure)) * (1 - Math.exp(-dt * 1.2)));
    eng.post.exposure = this.exposure;
    eng.post.maxAdapt = 1.7;
    eng.sky.uniforms.uIntensity.value = 1;
    // fades
    if (this.fadeIn > 0) { this.fadeIn = Math.max(0, this.fadeIn - dt * 0.5); eng.post.fade = this.fadeIn; }
    else if (this.state === 'intro') eng.post.fade = 1;
    else if (this.state === 'dead') eng.post.fade = Math.min(0.9, eng.post.fade + dt * 0.35);
    else eng.post.fade = 0;
    if (eng.post.flash > 0) eng.post.flash = Math.max(0, eng.post.flash - dt * 1.2);
    eng.render(dt, performance.now() / 1000);
    this.drawHud(dt);
    this.maps.draw();
    this.audio.update({
      thrust: ship.thrust, cruise: ship.mode === 'cruise', speed: ship.speed || 0, windDensity: this.windDensity || 0,
      airSpeed: ship.mode === 'landed' ? 15 : ship.speed || 0, scoop: this.scooping ? 1 : 0, heat: ship.heat,
      jump: this.jumpLevel || 0, music: this.state !== 'boot', musicDrone: true, rcs: false,
      plasma: this.state === 'play' ? this.plasma || 0 : 0, pressure: this.state === 'play' ? this.pressureStress || 0 : 0,
    });
  }

  // Wisps of cloud and air streaming past, lightning deep inside gas giants.
  updateAirFx(dt, Fq, ctx) {
    const ship = this.ship;
    const air = this.air;
    const b = ship.frame >= 0 ? this.sys.bodies[ship.frame] : null;
    let intensity = 0;
    let color = [1, 1, 1];
    const E = this.view.irradianceAt(this._shipWorld || [1, 0, 0]);
    if (b && air.rho > 1e-5 && this.state === 'play') {
      const inside = air.gas && air.depth > 0;
      intensity = inside ? 0.9 : Math.min(0.55, Math.sqrt(air.rho) * 0.5) * (ship.speed > 20 ? 1 : 0.35);
      const tint = b.solid ? (b.type === 'venus' ? [0.9, 0.75, 0.5] : b.type === 'titan' ? [0.85, 0.55, 0.3] : b.type === 'desert' ? [0.8, 0.6, 0.45] : [0.75, 0.8, 0.9])
        : b.gas.palette[1];
      const lit = (E * Math.max(air.light, 0.002) * 0.6) / Math.PI;
      color = tint.map((c) => c * lit);
      if (this.lightning > 0) color = color.map((c, k) => c + tint[k] * this.lightning * 0.6);
      // embers when the air is burning around the hull
      if (this.plasma > 0.5) color = color.map((c, k) => c + [1, 0.4, 0.12][k] * Math.min(3, this.plasma) * 0.3 / this.exposure);
    }
    const flow = qRotate(Fq, vec.scl(ship.v, -1));
    this.airParticles.update(dt, flow, intensity, color, this.engine.pixelRatio);
    // lightning in the water-cloud decks of giants
    this.lightning *= Math.exp(-dt * 7);
    if (b && air.gas && air.P > 2e5 && air.P < 8e6 && this.state === 'play' && Math.random() < dt * 0.35) {
      this.lightning = (1.5 + Math.random() * 3) / this.exposure;
      const up = vec.nrm(vec.sub(this._shipWorld, this.view.positions[b.index]));
      const r = [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5];
      this.lightningDir = vec.nrm(vec.add(vec.scl(up, -0.6), r));
      setTimeout(() => this.audio.thunder?.(), 300 + Math.random() * 2500);
    }
  }

  drawHud(dt) {
    const ship = this.ship;
    const hud = this.hud;
    hud.visible = this.state === 'play' || this.state === 'horizon';
    if (!hud.visible) { hud.draw(dt, null); this.drawCockpitFrame(false); return; }
    const cw = this.camWorld;
    const shipW = this._shipWorld;
    const shipQ = ship.worldQ(this.world);
    const nose = qRotate(shipQ, [0, 0, -1]);
    const noseRel = vec.add(vec.sub(shipW, cw), vec.scl(nose, 5000));
    const velW = ship.worldVel(this.world);
    const F = ship.frameState(this.world);
    const velRel = qRotate(F.q, ship.v);
    // labels
    const labels = [];
    if (this.scanned) {
      for (const b of this.sys.bodies) {
        const p = this.view.positions[b.index];
        const rel = vec.sub(p, cw);
        const d = vec.len(rel);
        if (this.target && this.target.kind === 'body' && this.target.index === b.index) continue;
        if (b.parent >= 0 && d > b.orbit.a * 40) continue;
        const ang = Math.asin(Math.min(1, b.radius / d));
        if (ang > 0.6) continue;
        labels.push({ rel, name: b.name, sub: fmtDistance(d - b.radius), alpha: b.parent < 0 ? 0.55 : 0.4 });
      }
      this.signalView.items.forEach((it, i) => {
        if (this.target && this.target.kind === 'signal' && this.target.index === i) return;
        if (!it.rel) return;
        // only once it can be told apart from the body it circles
        const hp = this.view.positions[it.sig.body];
        const hr = vec.sub(hp, cw);
        const sep = Math.acos(clamp(vec.dot(vec.nrm(hr), vec.nrm(it.rel)), -1, 1));
        if (sep < 0.04 && it.dist > 2e6) return;
        labels.push({ rel: it.rel, name: this.signalLabel(it.sig), sub: fmtDistance(it.dist), alpha: 0.65, kind: 'signal' });
      });
    }
    let target = null;
    const ti = this.targetInfo();
    if (ti) {
      const rel = vec.sub(ti.worldPos, cw);
      const closing = -vec.dot(vec.sub(velW, this.targetVel(ti)), vec.nrm(rel));
      const eta = closing > 1 && ship.mode === 'cruise' ? ` · ETA ${fmtDuration(Math.max(0, ti.surfaceDist) / Math.max(closing, 1) * 1.6)}` : '';
      const status = ti.kind === 'body' ? (this.surveyed.has(ti.body.id) ? ' · surveyed' : ti.inRange ? ' · hold Space to survey' : '') : ti.kind === 'signal' ? (this.readSignals.has(this.signalKey(ti.sig)) ? ' · read' : ti.inRange ? ' · hold Space to scan' : '') : '';
      target = {
        rel, name: ti.name, angR: Math.asin(Math.min(1, ti.radius / Math.max(ti.dist, ti.radius))),
        info: `${fmtDistance(Math.max(0, ti.surfaceDist))}${eta}${status}`, scan: this.scan,
      };
    }
    // sky markers
    const skyMarkers = [];
    const solD = distLy(SOL_POS, this.star.pos);
    if (solD > 0.01) skyMarkers.push({ dir: SOL_POS.map((v, k) => v - this.star.pos[k]), name: 'SOL', color: 'rgba(232,210,150,0.55)' });
    if (this.jumpTarget) skyMarkers.push({ dir: this.jumpTarget.pos.map((v, k) => v - this.star.pos[k]), name: this.jumpTarget.name.toUpperCase(), color: 'rgba(160,210,190,0.85)' });
    const modeLabels = { flight: 'FLIGHT · ASSISTED', cruise: 'CRUISE DRIVE', landed: 'LANDED', jump: 'JUMP DRIVE', dead: 'SIGNAL LOST' };
    let hint = '';
    if (ship.mode === 'landed') hint = 'R or W  LIFT OFF   ·   , .  TIME   ·   MOUSE  LOOK AROUND   ·   L  FLOODLIGHT';
    else if (ship.mode === 'cruise') hint = this.target ? 'P  AUTOPILOT   ·   TAB  DROP TO FLIGHT   ·   W S  THROTTLE' : 'T  TARGET AHEAD   ·   N  SYSTEM MAP   ·   TAB  DROP TO FLIGHT';
    else if (ship.mode === 'flight') {
      if (ship.alt < 3000 && ship.frame >= 0 && this.sys.bodies[ship.frame].solid) hint = ship.gearDown ? 'F  DESCEND   ·   R  CLIMB   ·   X  HOLD   ·   SET DOWN SLOWLY' : 'G  LANDING GEAR   ·   F  DESCEND   ·   R  CLIMB';
      else hint = this.target ? 'P  AUTOPILOT   ·   TAB  CRUISE   ·   SPACE  SCAN   ·   M  GALAXY MAP   ·   H  HELP' : 'TAB  CRUISE   ·   T  TARGET   ·   SPACE  SCAN   ·   M  GALAXY MAP   ·   H  HELP';
    }
    if (!this.input.locked && this.state === 'play' && !this.maps.open && !this.panels.modalOpen) hint = 'CLICK TO TAKE THE CONTROLS   ·   H  HELP';
    let centerText = null, centerSub = null, centerColor = null;
    if (ship.heat > 0.85) { centerText = 'HEAT CRITICAL'; centerSub = 'Move away from the heat source'; centerColor = '#e0674c'; }
    else if (this.centerMsg) { centerText = this.centerMsg; this.centerMsg = null; }
    if (ship.mode === 'flight' && ship.frame >= 0 && ship.canHover === false && ship.alt < 20000) { centerText = 'GRAVITY EXCEEDS LIFT'; centerSub = 'This world is too heavy to hover over'; centerColor = '#e3a54b'; }
    const air = this.air;
    const bars = air.P / 1e5;
    if ((this.plasma || 0) > 1.2) { centerText = 'ENTRY HEATING'; centerSub = `${fmtSpeed(ship.speed)} through the air · slow down or climb`; centerColor = '#e3a54b'; }
    if (bars > 30) { centerText = `HULL PRESSURE ${Math.round(bars)} BAR`; centerSub = 'Rated to 30 bar · climb (R) while you still can'; centerColor = '#e0674c'; }
    if (this.sys.star.starKind === 'blackhole' && ship.mode === 'flight' && (ship.gmag || 0) > 30) {
      const r = vec.len(this._shipWorld) / this.sys.star.radius;
      centerText = `FALLING TOWARD ${this.sys.star.name.toUpperCase()}`;
      centerSub = r > 3 ? 'Gravity exceeds thrust · Tab to engage the cruise drive' : 'No drive can hold this close';
      centerColor = '#e0674c';
    }
    if ((this.tidal || 0) > 20) { centerText = `TIDAL STRESS ${Math.round(this.tidal)} M/S²`; centerSub = 'The nose is pulled harder than the tail'; centerColor = '#e0674c'; }
    if (this.state === 'horizon') {
      const left = Math.max(0, this.horizonTau * (1 - (this.horizonP || 0)));
      centerText = 'EVENT HORIZON CROSSED';
      centerSub = `Singularity in ${left.toFixed(2)} s ship time · at home, forever`;
      centerColor = '#e0674c';
    }
    const range = this.jumpRange();
    let jumpLine = null, jumpOk = false;
    if (this.jumpTarget) {
      const d = distLy(this.jumpTarget.pos, this.star.pos);
      jumpOk = d <= range;
      jumpLine = `JUMP ${this.jumpTarget.name.toUpperCase()} · ${d.toFixed(1)} LY${jumpOk ? ' · J' : this.jumpCost(d) > ship.fuel ? ' · NEED FUEL' : ' · OUT OF RANGE'}`;
      if (this.route && this.route.path.length > 1) jumpLine += `  ·  ROUTE TO ${this.route.dest.name.toUpperCase()}, ${this.route.path.length} JUMPS`;
    }
    const st = this.sys.star;
    hud.draw(dt, {
      camera: this.engine.camera,
      pixelAngle: this.engine.pixelAngle,
      mode: ship.mode,
      modeLabel: modeLabels[ship.mode] + (this.autopilot ? ' · AUTOPILOT' : '') + (this.warpIndex ? ` · TIME ×${WARPS[this.warpIndex]}` : ''),
      modeColor: ship.mode === 'cruise' ? 'rgba(160,210,190,0.9)' : null,
      noseDir: noseRel,
      velDir: vec.len(velRel) > 0 ? velRel : null,
      speed: ship.speed || 0,
      cruiseCap: ship.cruiseCap,
      gLine: ship.frame >= 0 && isFinite(ship.alt) && ship.alt < 5e6 ? `${(ship.gmag / 9.81 || 0).toFixed(2)} g` : '',
      throttle: ship.throttle,
      alt: ship.frame >= 0 && this.sys.bodies[ship.frame] ? ship.alt - (this.sys.bodies[ship.frame].solid ? ship.bottom : 0) : Infinity,
      vs: ship.vertSpeed || 0,
      gear: ship.mode === 'flight' || ship.mode === 'landed',
      gearLabel: ship.mode === 'landed' ? 'ON THE GROUND' : ship.gearDown ? (this.shipModel.gear > 0.85 ? 'GEAR DOWN' : 'GEAR MOVING') : 'GEAR UP',
      gearWarn: !ship.gearDown && ship.alt < 500,
      fuel: ship.fuel, heat: ship.heat, hull: Math.max(0, ship.hull), rangeLy: range,
      scooping: this.scooping,
      systemName: this.star.name,
      systemSub: `${st.spectral}${this.star.scoopable ? '' : ' · no scoop'}  ·  ${this.sys.bodies.length} bodies${this.scanned ? '' : ' · unscanned'}`,
      timeLine: `ABOARD ${Math.floor(this.shipYears)} YR ${Math.floor((this.shipYears % 1) * 365)} D  ·  HOME ${calendar(this.homeYears)}`,
      objective: this.objectiveText(),
      homeLine: `SOL ${solD.toFixed(1)} LY${(this.timeDilation || 1) > 1.02 ? `  ·  TIME AT HOME ×${(this.timeDilation).toFixed(this.timeDilation < 10 ? 2 : 0)}` : ''}`,
      airLine: air.rho > 1e-6 ? `${bars >= 0.1 ? `${bars.toFixed(bars < 10 ? 2 : 0)} bar` : `${(bars * 1000).toFixed(bars < 0.01 ? 2 : 0)} mbar`} · ${Math.round(air.T)} K` : null,
      altLabel: air.gas && air.depth > 0 ? 'DEPTH' : 'ALT',
      depth: air.gas ? air.depth : 0,
      jumpLine, jumpOk,
      labels, target, skyMarkers, hint, centerText, centerSub, centerColor,
      jump: this.jump.active ? this.jump.hudInfo() : null,
    });
    this.drawCockpitFrame(this.camMode === 'cockpit');
  }

  objectiveText() {
    const trail = this.universe.trail;
    if (this.trailFound < 0) {
      if (this.star.id !== this.universe.start.id) return `Return to ${this.universe.start.name}: a faint signal waits there`;
      return this.scanned ? 'Find the faint signal: system map (N), then autopilot (P)' : 'Pulse-scan the system: press Space';
    }
    if (this.trailFound >= trail.length - 1) return "Marrow's route ends here. Yours does not have to.";
    const next = trail[this.trailFound + 1];
    if (next.id === this.star.id) return this.scanned ? 'A beacon broadcasts here: find it on the system map (N)' : 'Pulse-scan the system: press Space';
    return `Follow Marrow's beacons: ${next.name}, ${distLy(next.pos, this.star.pos).toFixed(1)} ly`;
  }

  targetVel(ti) {
    if (ti.kind === 'body') return this.world.velocity(ti.body.index);
    if (ti.kind === 'signal') return this.world.velocity(ti.sig.body);
    return [0, 0, 0];
  }

  drawCockpitFrame(on) {
    const el = document.getElementById('cockpit');
    // SVG elements have no `hidden` property; toggle the attribute itself
    if (el.hasAttribute('hidden') === !on) return;
    el.toggleAttribute('hidden', !on);
  }

  // ------------------------------------------------------------------ save / load
  saveGame() {
    if (this.state === 'dead' || this.jump.active) return;
    const s = this.ship;
    const data = {
      v: 1,
      star: this.star.id,
      time: this.time,
      homeYears: this.homeYears,
      shipYears: this.shipYears,
      ship: { frame: s.frame, rot: s.rot, p: s.p, v: s.v, q: s.q, mode: s.mode === 'cruise' ? 'flight' : s.mode, fuel: s.fuel, heat: s.heat, hull: s.hull, gear: s.gearDown, lights: s.lights },
      visited: [...this.visited],
      scanned: [...this.scannedSystems],
      surveyed: [...this.surveyed],
      read: [...this.readSignals],
      logs: this.logs,
      received: [...this.received],
      trailFound: this.trailFound,
      jumpTarget: this.jumpTarget ? this.jumpTarget.id : null,
      route: this.route ? { dest: this.route.dest.id, path: this.route.path.map((x) => x.id) } : null,
      travelled: this.travelled,
      jumps: this.jumps,
      life: [...this.lifeFound],
      own: this.ownBeacons,
      bhNoted: !!this.bhNoted,
    };
    if (s.mode === 'cruise') data.ship.v = vec.scl(s.forward, Math.min(s.cruiseV, 200));
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable */ }
  }

  readSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const d = JSON.parse(raw);
      return d && d.v === 1 ? d : null;
    } catch (e) { return null; }
  }

  applySave(d) {
    const g = this.universe.galaxy;
    const star = g.starById(d.star) || this.universe.start;
    this.star = star;
    this.time = d.time;
    this.homeYears = d.homeYears;
    this.shipYears = d.shipYears;
    const s = this.ship;
    s.fuel = d.ship.fuel; s.heat = d.ship.heat; s.hull = d.ship.hull; s.gearDown = d.ship.gear; s.lights = d.ship.lights;
    this.shipModel.gear = s.gearDown ? 1 : 0;
    this.visited = new Set(d.visited);
    this.scannedSystems = new Set(d.scanned);
    this.surveyed = new Set(d.surveyed);
    this.readSignals = new Set(d.read);
    this.logs = d.logs || [];
    this.received = new Set(d.received);
    this.trailFound = d.trailFound ?? -1;
    this.jumpTarget = d.jumpTarget ? g.starById(d.jumpTarget) : null;
    this.route = d.route ? { dest: g.starById(d.route.dest), path: d.route.path.map((id) => g.starById(id)).filter(Boolean) } : null;
    if (this.route && !this.route.dest) this.route = null;
    this.travelled = d.travelled || 0;
    this.jumps = d.jumps || 0;
    this.lifeFound = new Set(d.life || []);
    this.ownBeacons = d.own || [];
    this.bhNoted = !!d.bhNoted;
    this.pendingPlacement = { kind: 'saved', ...d.ship };
  }
}

export { C, DAY };
