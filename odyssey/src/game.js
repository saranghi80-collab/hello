import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Input } from './core/input.js';
import { Audio } from './core/audio.js';
import { Music } from './core/music.js';
import { Save } from './core/save.js';
import { Player } from './actors/player.js';
import { Cappy } from './actors/cappy.js';
import { CameraController } from './actors/camera.js';
import { Sky } from './gfx/sky.js';
import { Particles } from './gfx/particles.js';
import { foliageUniforms } from './gfx/foliage.js';
import { shadowBlobTexture } from './gfx/textures.js';
import { Level } from './level/level.js';
import { KINGDOMS, KINGDOM_ORDER } from './kingdoms/index.js';
import { UI } from './ui/ui.js';
import { clamp, damp, wrapAngle } from './core/math.js';

export class Game {
  constructor(container) {
    this.container = container;
    this.save = new Save();
    const S = this.save.data.settings;
    this.quality = S.quality === 'auto' ? (window.__forceQuality || 'high') : S.quality;
    this.autoQuality = S.quality === 'auto' && !window.__forceQuality;

    // renderer
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(r.domElement);
    r.domElement.id = 'game-canvas';
    r.domElement.tabIndex = 0;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1800);
    this.scene.add(this.camera);
    this.sky = new Sky();
    this.scene.add(this.sky.mesh);
    this.scene.fog = new THREE.Fog('#bfe6ff', 90, 520);

    // lights
    this.sunDir = new THREE.Vector3(0.45, 0.8, 0.35).normalize();
    this.hemi = new THREE.HemisphereLight('#d6ecff', '#6d8a52', 1.25);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff4e0', 2.7);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 1; sc.far = 220;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.03;
    this.sun.shadow.radius = 2.5;
    this.scene.add(this.sun, this.sun.target);
    this.pmrem = new THREE.PMREMGenerator(r);
    this.applyQuality();

    this.input = new Input(r.domElement);
    this.audio = new Audio();
    this.music = new Music(this.audio);
    this.fx = new Particles(this.scene);
    this.ui = new UI(this);

    this.player = new Player(this);
    this.player.cappy = new Cappy(this, this.player);
    this.scene.add(this.player.root);
    this.cam = new CameraController(this, this.camera);

    // blob shadow under the player (depth cue for platforming)
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowBlobTexture(), transparent: true, depthWrite: false, opacity: 0.55, polygonOffset: true, polygonOffsetFactor: -4 }));
    this.blob.rotation.x = -Math.PI / 2;
    this.blob.renderOrder = 1;
    this.scene.add(this.blob);

    this.level = null;
    this.state = 'boot';
    this.time = 0;
    this.respawnPoint = null;
    this.cutscene = null;
    this.timer = null;
    this.promptT = 0;
    this.fpsSamples = [];
    this.lastFrame = performance.now();
    this.focus = { x: 0, y: 0, z: 0, grounded: true, speed: 0, facing: 0, moveYaw: 0 };
    this.applySettings();

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.input.onPointerLockChange = (locked) => {
      if (!locked && this.state === 'play' && !this.ui.menuOpen && performance.now() - this.lockReleaseIgnore > 300) this.pause();
    };
    this.lockReleaseIgnore = 0;
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'play') this.pause(); });
  }

  // ------------------------------------------------------------------ setup
  applyQuality() {
    const q = this.quality;
    const r = this.renderer;
    const dpr = window.devicePixelRatio || 1;
    r.setPixelRatio(q === 'low' ? Math.min(dpr, 1) : q === 'medium' ? Math.min(dpr, 1.5) : Math.min(dpr, 2));
    r.shadowMap.enabled = q !== 'low';
    this.sun.castShadow = q !== 'low';
    const ms = q === 'high' ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== ms) {
      this.sun.shadow.mapSize.set(ms, ms);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
    this.useBloom = q === 'high';
    if (this.useBloom && !this.composer) this.setupComposer();
    if (this.level) this.level.foliage.viewDist = q === 'low' ? 45 : q === 'medium' ? 65 : 90;
    this.resize();
  }

  setupComposer() {
    const r = this.renderer;
    const size = r.getSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x * r.getPixelRatio(), size.y * r.getPixelRatio(), { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.55, 0.4, 2.1);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
  }

  // Reflection probe: a blurred version of the kingdom's sky so metals and moons pick up its colors.
  buildEnvMap(env) {
    const sky = env.sky || {};
    const s = new THREE.Scene();
    const geo = new THREE.SphereGeometry(10, 32, 16);
    const top = new THREE.Color(sky.top || '#2f7fe0'), hor = new THREE.Color(sky.horizon || '#bfe6ff');
    const ground = new THREE.Color(env.hemiGround || '#6d8a52');
    const cols = [];
    const pos = geo.attributes.position;
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 10;
      if (y > 0) c.copy(hor).lerp(top, Math.pow(y, 0.6)); else c.copy(hor).lerp(ground, Math.min(1, -y * 2.5));
      cols.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide }));
    s.add(m);
    const sun = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(env.sunColor || '#fff4e0').multiplyScalar(6) }));
    sun.position.copy(this.sunDir).multiplyScalar(8);
    s.add(sun);
    const rt = this.pmrem.fromScene(s, 0.04);
    if (this.envRT) this.envRT.dispose();
    this.envRT = rt;
    this.scene.environment = rt.texture;
    this.scene.environmentIntensity = env.envIntensity ?? 0.55;
    geo.dispose();
  }

  resize() {
    const w = this.container.clientWidth || window.innerWidth, h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
      this.composer.setSize(w, h);
    }
    this.fx?.setViewport(h * this.renderer.getPixelRatio());
  }

  applySettings() {
    const S = this.save.data.settings;
    this.audio.vol.master = S.master; this.audio.vol.music = S.music; this.audio.vol.sfx = S.sfx;
    this.audio.applyVolumes();
    this.input.settings.invertY = S.invertY;
    this.input.settings.invertX = S.invertX;
    this.input.settings.sensitivity = S.sensitivity;
  }

  // ------------------------------------------------------------------ kingdoms
  loadKingdom(id, spawn = null) {
    const def = KINGDOMS[id];
    if (!def) throw new Error('Unknown kingdom ' + id);
    if (this.level) { this.level.dispose(); this.level = null; }
    this.fx.clear();
    this.player.cappy.reset();
    this.timer = null;
    this.ui.setTimer(null);
    const L = new Level(this, def);
    this.level = L;
    // environment
    const env = def.env || {};
    this.sky.configure(env.sky || {});
    this.scene.fog.color.set(env.fog?.color || env.sky?.horizon || '#bfe6ff');
    this.scene.fog.near = env.fog?.near ?? 90;
    this.scene.fog.far = env.fog?.far ?? 520;
    this.sunDir.set(...(env.sunDir || [0.45, 0.8, 0.35])).normalize();
    this.sky.uniforms.uSunDir.value.copy(this.sunDir);
    this.sun.color.set(env.sunColor || '#fff4e0');
    this.sun.intensity = env.sunIntensity ?? 2.7;
    this.hemi.color.set(env.hemiSky || '#d6ecff');
    this.hemi.groundColor.set(env.hemiGround || '#6d8a52');
    this.hemi.intensity = env.hemiIntensity ?? 1.25;
    this.renderer.toneMappingExposure = env.exposure ?? 1.0;
    this.buildEnvMap(env);
    def.build(L);
    L.coinField?.build(def.purpleShape || 'star', def.purpleColor || '#b25cff');
    L.finalize();
    L.foliage.viewDist = this.quality === 'low' ? 45 : this.quality === 'medium' ? 65 : 90;
    this.save.data.current = id;
    this.save.write();
    // spawn
    let sp = spawn || L.spawn;
    if (spawn && spawn.checkpoint) {
      const cp = L.checkpoints.find((c) => c.id === spawn.checkpoint);
      if (cp) sp = cp.spawnPos;
    }
    this.player.maxHp = 3; this.player.hp = 3;
    this.player.attach(L, sp.x, sp.y, sp.z, sp.facing ?? 0);
    this.respawnPoint = { ...sp };
    this.cam.snap(sp.x, sp.y, sp.z, sp.facing ?? 0);
    this.music.play(def.music || 'meadow');
    this.ui.updateHud(true);
    return L;
  }

  // ------------------------------------------------------------------ flow
  async start() {
    this.ui.showLoading('Loading');
    this.state = 'loading';
    const id = this.save.data.current && KINGDOMS[this.save.data.current] ? this.save.data.current : 'meadow';
    this.loadKingdom(id);
    this.titleYaw = 0;
    requestAnimationFrame((t) => this.frame(t));
    await this.precompile();
    this.ui.hideLoading();
    this.ui.showTitle();
    this.state = 'title';
  }

  // Compile shaders without blocking the main thread where the browser supports it.
  async precompile() {
    try {
      const s = this.level?.def.titleCam || { x: 0, y: 30, z: 0, r: 60 };
      this.camera.position.set(s.x, s.y, s.z + s.r);
      this.camera.lookAt(s.x, s.y - 10, s.z);
      if (this.renderer.compileAsync) await this.renderer.compileAsync(this.scene, this.camera);
    } catch (e) { /* fall back to compiling on first draw */ }
  }

  beginPlay() {
    this.audio.init();
    if (this.music.pending) { const p = this.music.pending; this.music.pending = null; this.music.name = null; this.music.play(p); }
    else if (this.level) { const n = this.level.def.music; this.music.name = null; this.music.play(n); }
    this.ui.hideTitle();
    this.state = 'play';
    this.input.flush();
    this.cam.snap(this.player.pos.x, this.player.pos.y, this.player.pos.z, this.player.facing);
    this.ui.kingdomBanner(this.level.def);
    if (!this.save.flag('introSeen')) {
      this.save.setFlag('introSeen');
      this.dialog(INTRO_LINES);
    }
    this.lockPointer();
  }

  lockPointer() { if (!this.ui.isTouch) this.input.requestLock(); }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'pause';
    this.music.duck(true);
    this.ui.openPause();
  }
  resume() {
    this.state = 'play';
    this.music.duck(false);
    this.ui.closeMenus();
    this.input.flush();
    this.lockPointer();
  }

  openTravel() {
    if (this.state !== 'play') return;
    this.state = 'pause';
    this.lockReleaseIgnore = performance.now();
    this.input.releaseLock();
    this.ui.openTravel();
  }

  travelTo(id) {
    this.ui.closeMenus();
    this.state = 'loading';
    this.audio.play('whoosh');
    this.ui.fade(true, async () => {
      this.ui.showLoading(`Sailing to the ${KINGDOMS[id].name}`);
      await new Promise((r) => setTimeout(r, 30));
      this.loadKingdom(id);
      const p = this.player;
      this.cam.snap(p.pos.x, p.pos.y, p.pos.z, p.facing);
      await this.precompileAt();
      this.ui.hideLoading();
      this.state = 'play';
      this.ui.fade(false);
      this.ui.kingdomBanner(this.level.def);
      this.input.flush();
      this.lockPointer();
    });
  }

  async precompileAt() {
    try { if (this.renderer.compileAsync) await this.renderer.compileAsync(this.scene, this.camera); } catch (e) { /* ignore */ }
  }

  kingdomReady(id) {
    const def = KINGDOMS[id];
    return this.save.moonCount(id) >= (def.moonsToLeave ?? 0);
  }

  nextKingdomUnlocked() {
    const d = this.save.data;
    let changed = false;
    for (let i = 0; i < KINGDOM_ORDER.length - 1; i++) {
      const id = KINGDOM_ORDER[i], nxt = KINGDOM_ORDER[i + 1];
      const def = KINGDOMS[id];
      const req = def.unlockNext ? def.unlockNext(this) : this.kingdomReady(id);
      if (req && !d.unlocked.includes(nxt) && d.unlocked.includes(id)) { d.unlocked.push(nxt); changed = true; }
    }
    if (changed) this.save.write();
    return changed;
  }

  // ------------------------------------------------------------------ events from gameplay
  addCoins(n, at = null) {
    this.save.data.coins = Math.min(9999, this.save.data.coins + n);
    this.audio.play('coin');
    if (at) this.fx.sparkle(at.x, at.y, at.z, 4, [1, 0.85, 0.3], 0.5);
    this.ui.updateHud();
    this.saveSoon();
  }

  collectPurple(level, id, at) {
    this.save.addPurple(level.id, id);
    this.audio.play('purple');
    this.fx.sparkle(at.x, at.y, at.z, 8, [0.8, 0.5, 1], 0.6);
    this.ui.updateHud();
    const total = level.coinField.purple.length;
    const got = this.save.purpleCount(level.id);
    if (got === total) { this.toast(`All ${total} regional coins found!`); level.onPurpleComplete?.(); }
  }

  saveSoon() {
    clearTimeout(this._saveT);
    this._saveT = setTimeout(() => this.save.write(), 800);
  }

  toast(msg) { this.ui.toast(msg); }
  prompt(text, owner) { this.ui.prompt(text); this.promptT = 0.1; }

  dialog(lines, onDone) {
    if (this.state !== 'play') { onDone?.(); return; }
    this.state = 'dialog';
    this.ui.dialog(lines, () => {
      this.state = 'play';
      this.input.flush();
      onDone?.();
    });
  }

  collectMoon(moon) {
    const L = this.level;
    const already = moon.collected;
    if (already) {
      this.audio.play('moonappear');
      this.fx.burst(moon.pos.x, moon.pos.y, moon.pos.z, 20, [1, 1, 0.8], 5);
      this.toast(`${moon.def.name} (already collected)`);
      moon.kill();
      return;
    }
    const before = this.save.moonCount(L.id);
    const ready0 = this.kingdomReady(L.id);
    this.save.addMoon(L.id, moon.id);
    if (moon.def.multi) { this.save.addMoon(L.id, moon.id + '#2'); this.save.addMoon(L.id, moon.id + '#3'); }
    moon.def.onCollect?.(this);
    const p = this.player;
    if (p.capture) p.capture.release(p, true);
    this.state = 'cutscene';
    p.cutscenePose = 'victory';
    p.setState('cutscene');
    p.anim.flip = null;
    p.cappy.reset();
    this.music.duck(true);
    this.audio.play('moonget');
    // camera in front of Mario, choosing an unobstructed angle
    const look = new THREE.Vector3(p.pos.x, p.pos.y + 1.45, p.pos.z);
    const camPos = this.findShot(look, p.facing, 5.2, 0.55);
    this.cam.cinematic(camPos, look, 0.5);
    const mesh = moon.obj;
    const multi = !!moon.def.multi;
    this.cutscene = {
      t: 0,
      update: (dt) => {
        const c = this.cutscene;
        c.t += dt;
        // moon held up in Mario's right hand
        const hand = p.model.joints.handR;
        hand.updateWorldMatrix(true, false);
        const hp = new THREE.Vector3().setFromMatrixPosition(hand.matrixWorld);
        mesh.position.lerp(hp.add(new THREE.Vector3(0, 0.55, 0)), c.t < 0.3 ? 0.25 : 1);
        mesh.rotation.y += dt * 4;
        if (c.t > 0.35 && !c.banner) { c.banner = true; this.ui.moonGet(moon.def.name, multi); this.fx.burst(hp.x, hp.y + 0.5, hp.z, 30, [1, 0.95, 0.6], 7); }
        if (c.t > 3.0) {
          moon.kill();
          this.ui.hideBanner();
          this.cam.endCinematic();
          p.setState('ground');
          this.state = 'play';
          this.music.duck(false);
          this.cutscene = null;
          this.ui.updateHud(true);
          this.input.flush();
          const after = this.save.moonCount(L.id);
          if (!ready0 && this.kingdomReady(L.id)) {
            this.nextKingdomUnlocked();
            setTimeout(() => this.toast('The Odyssey has enough Power Moons to set sail! Board it to travel.'), 400);
          } else this.nextKingdomUnlocked();
          moon.def.afterCollect?.(this);
          void before; void after;
          if (moon.def.final) this.ending();
        }
      },
    };
  }

  // Pick a camera spot around `look` (preferring the front of `facing`) with a clear line of sight.
  findShot(look, facing, dist, lift = 0.4) {
    const w = this.level.world;
    const offsets = [0.35, -0.35, 0.8, -0.8, 1.3, -1.3, 0, 2.0, -2.0];
    const filter = (c) => c.cam !== false && c.solid;
    let best = null, bestT = -1;
    for (const o of offsets) {
      const a = facing + o;
      const dx = Math.sin(a) * Math.cos(lift), dy = Math.sin(lift), dz = Math.cos(a) * Math.cos(lift);
      const hit = w.raycast(look.x, look.y, look.z, dx, dy, dz, dist, filter);
      // also avoid trees/foliage which are non-camera colliders
      const hit2 = w.raycast(look.x, look.y, look.z, dx, dy, dz, dist, (c) => c.solid && !filter(c));
      const t = Math.min(hit ? hit.t : dist, hit2 ? hit2.t : dist);
      if (t >= dist - 0.01) return new THREE.Vector3(look.x + dx * dist, look.y + dy * dist, look.z + dz * dist);
      if (t > bestT) { bestT = t; best = [dx, dy, dz]; }
    }
    const d = Math.max(2.2, bestT - 0.4);
    return new THREE.Vector3(look.x + best[0] * d, look.y + best[1] * d, look.z + best[2] * d);
  }

  startCapture(e) {
    const p = this.player;
    if (p.capture || p.dead || !e.captureStart) return;
    p.capture = e;
    p.visible = false;
    p.root.visible = false;
    p.anim.flip = null;
    this.audio.play('capture');
    this.fx.burst(e.pos.x, e.pos.y + 1, e.pos.z, 24, [1, 0.3, 0.3], 5);
    e.captureStart(p);
    this.ui.captureHint(e.captureHint || 'Crouch to release');
  }

  endCapture(e, opts = {}) {
    const p = this.player;
    if (p.capture !== e) return;
    p.capture = null;
    p.visible = true;
    p.root.visible = true;
    const x = opts.x ?? e.pos.x, y = opts.y ?? e.pos.y + (e.height ?? 1) + 0.1, z = opts.z ?? e.pos.z;
    p.body.setPos(x, y, z);
    p.body.vel.set(0, 0, 0);
    if (!opts.noJump) { p.doJump('jump1', 10.5); }
    else { p.airKind = 'fall'; p.setState('air'); }
    p.invuln = Math.max(p.invuln, 0.8);
    p.facing = e.facing ?? p.facing;
    p.cappy.reset();
    this.audio.play('uncapture');
    this.fx.burst(x, y + 0.6, z, 16, [1, 0.3, 0.3], 4);
    this.ui.captureHint(null);
  }

  focusTarget() {
    const p = this.player;
    const f = this.focus;
    const a = p.capture || p;
    if (!p.body) return null;
    f.x = a.pos.x; f.y = a.pos.y; f.z = a.pos.z;
    if (p.capture) {
      const e = p.capture;
      f.grounded = e.grounded ?? true;
      f.speed = e.speed ?? 0;
      f.facing = e.facing ?? 0;
      f.moveYaw = e.facing ?? 0;
      f.camHeight = e.camHeight ?? 1.2;
      f.distMul = e.camDist ?? 1;
      f.swimming = e.swimming ?? false;
      f.noAuto = !!e.noAutoCam;
    } else {
      f.grounded = p.body.grounded || p.state === 'ledge' || p.state === 'climb';
      f.speed = p.hspeed();
      f.facing = p.facing;
      f.moveYaw = Math.atan2(p.vel.x, p.vel.z);
      f.camHeight = 1.4;
      f.distMul = 1;
      f.swimming = p.state === 'swim';
      f.noAuto = p.state === 'wallSlide' || p.state === 'ledge';
    }
    return f;
  }

  onPlayerHurt() { this.ui.updateHud(); }

  bossIntro(boss) {
    this.music.play('boss');
    this.ui.bossBanner(boss.name);
    this.ui.bossHealth(boss.hp, boss.hp, boss.name);
    this.audio.play('alert');
  }

  bossDefeated(boss) {
    this.ui.bossHealth(null);
    this.music.play(this.level.def.music);
    this.toast(`${boss.name} defeated!`);
  }

  onPlayerDeath(reason) {
    this.state = 'dying';
    this.music.duck(true);
    this.input.flush();
    this.deathT = 0;
    this.ui.updateHud();
  }

  updateDying(dt) {
    this.deathT += dt;
    this.player.update(dt);
    if (this.deathT > 1.4 && !this.deathFade) {
      this.deathFade = true;
      this.ui.fade(true, () => {
        const lost = Math.min(10, this.save.data.coins);
        this.save.data.coins -= lost;
        this.save.write();
        const sp = this.respawnPoint || this.level.spawn;
        this.player.maxHp = 3;
        this.player.respawn(sp, sp.facing);
        this.cam.snap(sp.x, sp.y, sp.z, sp.facing ?? this.player.facing);
        this.state = 'play';
        this.deathFade = false;
        this.music.duck(false);
        this.ui.fade(false);
        this.ui.updateHud(true);
        if (lost > 0) this.ui.coinLoss(lost);
        this.input.flush();
      });
    }
  }

  enterPipe(pipe) {
    const p = this.player;
    if (this.state !== 'play') return;
    this.state = 'cutscene';
    p.setState('cutscene');
    p.cutscenePose = 'idle';
    this.audio.play('pipe');
    const start = p.pos.clone();
    p.body.pos.x = pipe.pos.x; p.body.pos.z = pipe.pos.z;
    this.cutscene = {
      t: 0,
      update: (dt) => {
        const c = this.cutscene;
        c.t += dt;
        p.body.collide = false;
        if (c.t < 0.5) { p.body.pos.y = start.y - c.t * 3.2; p.syncModel(dt); }
        if (c.t >= 0.5 && !c.faded) {
          c.faded = true;
          this.ui.fade(true, () => {
            const d = typeof pipe.dest === 'function' ? pipe.dest() : pipe.dest;
            if (d.kingdom && d.kingdom !== this.level.id) this.loadKingdom(d.kingdom, d);
            p.body.collide = true;
            p.body.setPos(d.x, d.y, d.z);
            p.facing = d.facing ?? p.facing;
            p.setState('ground');
            p.airKind = 'fall';
            this.cam.snap(d.x, d.y, d.z, p.facing);
            this.state = 'play';
            this.cutscene = null;
            pipe.onEnter?.(this);
            this.ui.fade(false);
            this.input.flush();
          });
        }
      },
    };
  }

  // Final cutscene + credits after Bowser falls.
  ending() {
    const d = this.save.data;
    const first = !d.ending;
    d.ending = true;
    if (!d.unlocked.includes('lunar')) d.unlocked.push('lunar');
    this.save.write();
    this.state = 'cutscene';
    this.lockReleaseIgnore = performance.now();
    this.input.releaseLock();
    this.music.play('title');
    const p = this.player;
    p.setState('cutscene');
    p.cutscenePose = 'victory';
    const center = new THREE.Vector3(p.pos.x, p.pos.y + 1.5, p.pos.z);
    let t = 0;
    this.cutscene = {
      update: (dt) => {
        t += dt;
        const a = t * 0.15;
        this.camera.position.set(center.x + Math.sin(a) * 14, center.y + 5 + Math.sin(t * 0.3) * 1.5, center.z + Math.cos(a) * 14);
        this.camera.lookAt(center);
        this.cam.cine = { pos: this.camera.position.clone(), look: center.clone(), blend: 0, t: 1, from: this.camera.position.clone(), fromLook: center.clone() };
        if (Math.random() < dt * 2.5) {
          const fx = center.x + (Math.random() - 0.5) * 30, fz = center.z + (Math.random() - 0.5) * 30, fy = center.y + 12 + Math.random() * 10;
          const cols = [[1, 0.4, 0.4], [1, 0.9, 0.3], [0.4, 0.8, 1], [0.6, 1, 0.5], [1, 0.5, 1]];
          this.fx.burst(fx, fy, fz, 40, cols[Math.floor(Math.random() * cols.length)], 9, 1, 0.8, 3);
          this.audio.play('explode');
        }
      },
    };
    this.ui.showEnding(first, () => {
      this.cutscene = null;
      this.cam.endCinematic();
      p.setState('ground');
      this.state = 'play';
      this.music.play(this.level.def.music);
      this.input.flush();
      this.toast('The Lunar Kingdom is now open. Board the Odyssey!');
      this.lockPointer();
    });
  }

  startTimer(sec) { this.timer = { left: sec }; }
  stopTimer() { this.timer = null; this.ui.setTimer(null); }

  // ------------------------------------------------------------------ loop
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    if (this.manual) { this.lastFrame = now; return; }
    let dt = (now - this.lastFrame) / 1000;
    this.lastFrame = now;
    if (!(dt > 0)) dt = 1 / 60;
    const realDt = dt;
    dt = Math.min(dt, 1 / 24);
    this.time += dt;
    this.input.update(dt);
    this.step(dt);
    this.render(dt);
    this.trackPerformance(realDt);
  }

  // Deterministic stepping for automated tests: run n fixed updates, then render once.
  debugStep(n = 1, dt = 1 / 60, render = true) {
    for (let i = 0; i < n; i++) {
      this.input.update(dt);
      this.step(dt);
      this.time += dt;
    }
    if (render) this.render(dt);
  }

  step(dt) {
    const L = this.level;
    const A = this.input.actions;
    switch (this.state) {
      case 'title': {
        if (L) L.update(dt);
        this.titleYaw += dt * 0.08;
        const s = L.def.titleCam || { x: 0, y: 25, z: 0, r: 60 };
        this.camera.position.set(s.x + Math.sin(this.titleYaw) * s.r, s.y, s.z + Math.cos(this.titleYaw) * s.r);
        this.camera.lookAt(s.x, (s.ly ?? s.y - 12), s.z);
        this.ui.updateTitle(dt);
        break;
      }
      case 'play': {
        if (A.pause.pressed) { this.pause(); break; }
        if (A.map.pressed) { this.pause(); this.ui.openPause('map'); break; }
        L.update(dt);
        const p = this.player;
        if (p.capture && A.crouch.pressed && p.capture.canRelease !== false) p.capture.release(p);
        p.update(dt);
        p.cappy.update(dt);
        L.handleEvents(p);
        // interactions
        if (!p.capture && !p.dead && (p.body.grounded || p.state === 'swim')) {
          const it = L.nearestInteractable(p.pos);
          if (it) {
            this.ui.prompt((this.input.device === 'gamepad' ? 'RB' : this.ui.isTouch ? 'Tap ✋' : 'E') + '  ' + (it.interactLabel || 'Talk'));
            this.promptT = 0.1;
            if (A.interact.pressed) { this.ui.prompt(null); it.interact(); }
          }
        }
        if (this.promptT > 0) this.promptT -= dt; else this.ui.prompt(null);
        if (this.timer) {
          this.timer.left -= dt;
          this.ui.setTimer(Math.max(0, this.timer.left));
          if (this.timer.left <= 0) this.stopTimer();
        }
        this.cam.update(dt);
        this.save.data.playTime += dt;
        break;
      }
      case 'dialog':
        this.ui.updateDialog(dt);
        this.cam.update(dt);
        this.player.syncModel(dt);
        break;
      case 'cutscene':
        L.update(dt);
        this.cutscene?.update(dt);
        if (this.state === 'cutscene') { this.player.update(dt); this.cam.update(dt); }
        break;
      case 'dying':
        L.update(dt);
        this.updateDying(dt);
        if (this.player.deathReason !== 'fall') this.cam.update(dt);
        break;
      case 'pause':
        this.ui.updateMenu(dt);
        break;
      case 'loading':
        this.ui.update(dt);
        break;
    }
    this.fx.update(dt);
    this.ui.update(dt);
  }

  render(dt) {
    const p = this.player;
    this.sky.update(dt, this.camera);
    if (this.level && p.body) {
      // sun shadow follows the action, snapped to texels to avoid shimmering
      const a = p.capture || p;
      const ext = this.sun.shadow.camera.right * 2;
      const texel = ext / this.sun.shadow.mapSize.x;
      const cx = Math.round(a.pos.x / texel) * texel, cz = Math.round(a.pos.z / texel) * texel;
      const cy = Math.round(a.pos.y / texel) * texel;
      this.sun.position.set(cx + this.sunDir.x * 110, cy + this.sunDir.y * 110, cz + this.sunDir.z * 110);
      this.sun.target.position.set(cx, cy, cz);
      this.level.foliage.update(this.camera);
      foliageUniforms.uPlayer.value.copy(a.pos);
      // blob shadow
      const g = this.level.world.groundBelow(a.pos.x, a.pos.z, a.pos.y + 0.5);
      if (g && !p.dead && (p.visible || p.capture)) {
        const h = a.pos.y - g.y;
        const s = clamp(1.1 - h * 0.04, 0.35, 1.1) * (p.capture ? (p.capture.radius ?? 0.5) * 2.2 : 1);
        this.blob.visible = true;
        this.blob.position.set(a.pos.x, g.y + 0.04, a.pos.z);
        this.blob.scale.setScalar(s);
        this.blob.material.opacity = clamp(0.6 - h * 0.012, 0.15, 0.6);
      } else this.blob.visible = false;
    }
    if (this.useBloom && this.composer) this.composer.render(dt);
    else this.renderer.render(this.scene, this.camera);
  }

  trackPerformance(dt) {
    if (!this.autoQuality || this.state !== 'play') return;
    this.fpsSamples.push(dt);
    if (this.fpsSamples.length >= 150) {
      const avg = this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;
      this.fpsSamples = [];
      const fps = 1 / avg;
      if (fps < 42 && this.quality !== 'low') {
        this.quality = this.quality === 'high' ? 'medium' : 'low';
        this.applyQuality();
      }
    }
  }
}

const INTRO_LINES = [
  { who: 'Cappy', text: "Mario! Bowser snatched the Grand Moon right out of the sky. Without it, the Odyssey can only make short hops between kingdoms." },
  { who: 'Cappy', text: 'Every kingdom is full of Power Moons. Collect enough of them and the Odyssey can sail on to the next one.' },
  { who: 'Cappy', text: "Throw me at enemies to capture them, or toss me out and bounce off me to jump farther. Let's go!" },
];
