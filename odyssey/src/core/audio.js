// WebAudio synthesizer: all sound effects are generated, no samples.
export class Audio {
  constructor() {
    this.ctx = null;
    this.vol = { master: 0.8, music: 0.5, sfx: 0.75 };
    this.muted = false;
    this.last = {};
  }

  init(customCtx = null) {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC && !customCtx) return;
    const ctx = (this.ctx = customCtx || new AC());
    this.master = ctx.createGain();
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -14; this.comp.ratio.value = 4;
    this.master.connect(this.comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.connect(this.master);
    // reverb send
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.impulse(2.2, 2.6);
    this.reverbGain = ctx.createGain(); this.reverbGain.gain.value = 0.22;
    this.reverb.connect(this.reverbGain).connect(this.master);
    // echo send (for music leads)
    this.delay = ctx.createDelay(1.0); this.delay.delayTime.value = 0.33;
    this.delayFb = ctx.createGain(); this.delayFb.gain.value = 0.28;
    this.delayOut = ctx.createGain(); this.delayOut.gain.value = 0.18;
    this.delay.connect(this.delayFb).connect(this.delay);
    this.delay.connect(this.delayOut).connect(this.music);
    this.noiseBuf = this.makeNoise();
    this.applyVolumes();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const m = this.muted ? 0 : this.vol.master;
    this.master.gain.value = m;
    this.music.gain.value = this.vol.music;
    this.sfx.gain.value = this.vol.sfx;
  }

  impulse(sec, decay) {
    const ctx = this.ctx, rate = ctx.sampleRate, len = Math.floor(rate * sec);
    const buf = ctx.createBuffer(2, len, rate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  makeNoise() {
    const ctx = this.ctx, len = ctx.sampleRate * 1.5;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  get now() { return this.ctx ? this.ctx.currentTime : 0; }

  // ---- primitives ----
  tone({ type = 'square', f0 = 440, f1 = null, t = 0, dur = 0.15, vol = 0.2, a = 0.005, curve = 'exp', dest = null, vib = 0, vibRate = 6, filter = null, wave = null, rev = 0 }) {
    const ctx = this.ctx;
    const st = this.now + t;
    const o = ctx.createOscillator();
    if (wave) o.setPeriodicWave(wave); else o.type = type;
    o.frequency.setValueAtTime(f0, st);
    if (f1 !== null) {
      if (curve === 'exp') o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), st + dur);
      else o.frequency.linearRampToValueAtTime(f1, st + dur);
    }
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, st);
    g.gain.linearRampToValueAtTime(vol, st + a);
    g.gain.exponentialRampToValueAtTime(0.0008, st + dur);
    let node = o;
    if (vib) {
      const lfo = ctx.createOscillator(), lg = ctx.createGain();
      lfo.frequency.value = vibRate; lg.gain.value = vib;
      lfo.connect(lg).connect(o.frequency);
      lfo.start(st); lfo.stop(st + dur + 0.05);
    }
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = filter.type || 'lowpass'; f.frequency.value = filter.f || 2000; f.Q.value = filter.q || 0.7;
      node.connect(f); node = f;
    }
    node.connect(g);
    g.connect(dest || this.sfx);
    if (rev) { const rg = ctx.createGain(); rg.gain.value = rev; g.connect(rg).connect(this.reverb); }
    o.start(st); o.stop(st + dur + 0.05);
    return o;
  }

  noise({ t = 0, dur = 0.2, vol = 0.2, type = 'bandpass', f0 = 1000, f1 = null, q = 1, a = 0.005, dest = null, rev = 0 }) {
    const ctx = this.ctx;
    const st = this.now + t;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(f0, st); f.Q.value = q;
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, st + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, st);
    g.gain.linearRampToValueAtTime(vol, st + a);
    g.gain.exponentialRampToValueAtTime(0.0008, st + dur);
    src.connect(f).connect(g).connect(dest || this.sfx);
    if (rev) { const rg = ctx.createGain(); rg.gain.value = rev; g.connect(rg).connect(this.reverb); }
    src.start(st, Math.random() * 0.5); src.stop(st + dur + 0.05);
  }

  play(name, opts = {}) {
    if (!this.ctx || this.muted) return;
    // simple rate limit per sound
    const n = this.now;
    if (this.last[name] && n - this.last[name] < (LIMIT[name] ?? 0.03)) return;
    this.last[name] = n;
    const fn = SFX[name];
    if (fn) try { fn(this, opts); } catch (e) { /* ignore audio errors */ }
  }
}

const LIMIT = { coin: 0.035, land: 0.08, step: 0.1, tick: 0.1, talk: 0.05 };
const note = (n) => 440 * Math.pow(2, (n - 69) / 12);

const SFX = {
  jump: (A) => { A.tone({ type: 'square', f0: 280, f1: 620, dur: 0.14, vol: 0.09, filter: { f: 2400 } }); A.tone({ type: 'sine', f0: 560, f1: 1100, dur: 0.12, vol: 0.06 }); },
  jump2: (A) => { A.tone({ type: 'square', f0: 330, f1: 760, dur: 0.15, vol: 0.09, filter: { f: 2600 } }); A.tone({ type: 'sine', f0: 660, f1: 1400, dur: 0.13, vol: 0.06 }); },
  jump3: (A) => {
    A.tone({ type: 'square', f0: 360, f1: 980, dur: 0.2, vol: 0.09, filter: { f: 3000 } });
    [0, 4, 7, 12].forEach((s, i) => A.tone({ type: 'triangle', f0: note(76 + s), t: 0.05 + i * 0.045, dur: 0.12, vol: 0.06 }));
  },
  longjump: (A) => { A.tone({ type: 'square', f0: 240, f1: 520, dur: 0.22, vol: 0.08, filter: { f: 2000 } }); A.noise({ dur: 0.25, vol: 0.06, f0: 1500, f1: 4000 }); },
  capjump: (A) => { A.tone({ type: 'sine', f0: 500, f1: 1300, dur: 0.18, vol: 0.12, vib: 30, vibRate: 18 }); A.tone({ type: 'triangle', f0: 1000, f1: 2000, dur: 0.15, vol: 0.05 }); },
  capbounce: (A) => { A.tone({ type: 'sine', f0: 700, f1: 1500, dur: 0.12, vol: 0.08, t: 0.02 }); },
  throw: (A) => { A.noise({ dur: 0.22, vol: 0.12, f0: 900, f1: 3500, q: 2 }); A.tone({ type: 'sine', f0: 900, f1: 1300, dur: 0.12, vol: 0.04 }); },
  stomp: (A) => { A.tone({ type: 'square', f0: 180, f1: 90, dur: 0.12, vol: 0.12, filter: { f: 1200 } }); A.tone({ type: 'sine', f0: 600, f1: 1200, t: 0.06, dur: 0.12, vol: 0.06 }); },
  skid: (A) => A.noise({ dur: 0.3, vol: 0.1, f0: 2500, f1: 1200, q: 1.5 }),
  crouch: (A) => A.noise({ dur: 0.08, vol: 0.06, f0: 600 }),
  roll: (A) => { A.noise({ dur: 0.25, vol: 0.09, f0: 700, f1: 1800 }); A.tone({ type: 'triangle', f0: 200, f1: 400, dur: 0.15, vol: 0.06 }); },
  gpstart: (A) => { A.noise({ dur: 0.25, vol: 0.08, f0: 2000, f1: 600, q: 2 }); A.tone({ type: 'sine', f0: 900, f1: 500, dur: 0.22, vol: 0.05 }); },
  gpland: (A) => { A.tone({ type: 'sine', f0: 140, f1: 38, dur: 0.35, vol: 0.4 }); A.noise({ dur: 0.3, vol: 0.25, type: 'lowpass', f0: 900 }); },
  dive: (A) => { A.noise({ dur: 0.25, vol: 0.09, f0: 1200, f1: 3000, q: 1.2 }); A.tone({ type: 'square', f0: 300, f1: 500, dur: 0.12, vol: 0.06, filter: { f: 1800 } }); },
  grab: (A) => A.tone({ type: 'triangle', f0: 300, f1: 420, dur: 0.08, vol: 0.1 }),
  climb: (A) => { A.tone({ type: 'square', f0: 260, f1: 520, dur: 0.15, vol: 0.07, filter: { f: 1800 } }); },
  land: (A) => A.noise({ dur: 0.08, vol: 0.12, type: 'lowpass', f0: 500 }),
  step: (A, o) => A.noise({ dur: 0.05, vol: 0.05, type: 'lowpass', f0: o.f || 700 }),
  bonk: (A) => { A.tone({ type: 'square', f0: 160, f1: 120, dur: 0.12, vol: 0.12, filter: { f: 900 } }); A.noise({ dur: 0.1, vol: 0.1, type: 'lowpass', f0: 600 }); },
  bump: (A) => A.tone({ type: 'square', f0: 140, f1: 110, dur: 0.1, vol: 0.12, filter: { f: 700 } }),
  hurt: (A) => { A.tone({ type: 'square', f0: 700, f1: 180, dur: 0.35, vol: 0.1, vib: 40, vibRate: 14, filter: { f: 2200 } }); },
  fall: (A) => { A.tone({ type: 'sine', f0: 900, f1: 120, dur: 1.0, vol: 0.12, curve: 'lin' }); },
  die: (A) => { [72, 67, 64, 60].forEach((m, i) => A.tone({ type: 'triangle', f0: note(m), t: i * 0.16, dur: 0.3, vol: 0.12 })); },
  coin: (A) => { A.tone({ type: 'square', f0: note(91), dur: 0.07, vol: 0.06, filter: { f: 5000 } }); A.tone({ type: 'square', f0: note(96), t: 0.065, dur: 0.32, vol: 0.06, filter: { f: 5000 } }); A.tone({ type: 'sine', f0: note(108), t: 0.065, dur: 0.25, vol: 0.03 }); },
  purple: (A) => { [84, 88, 91, 96].forEach((m, i) => A.tone({ type: 'triangle', f0: note(m), t: i * 0.05, dur: 0.25, vol: 0.07, rev: 0.4 })); },
  heart: (A) => { [72, 76, 79, 84].forEach((m, i) => A.tone({ type: 'sine', f0: note(m), t: i * 0.06, dur: 0.3, vol: 0.1 })); },
  block: (A) => { A.tone({ type: 'square', f0: 220, f1: 330, dur: 0.08, vol: 0.1, filter: { f: 1500 } }); },
  break: (A) => { A.noise({ dur: 0.3, vol: 0.25, type: 'highpass', f0: 800 }); A.tone({ type: 'square', f0: 120, f1: 60, dur: 0.2, vol: 0.1, filter: { f: 800 } }); },
  checkpoint: (A) => { [67, 71, 74, 79, 83].forEach((m, i) => A.tone({ type: 'square', f0: note(m), t: i * 0.07, dur: 0.2, vol: 0.05, filter: { f: 3000 }, rev: 0.3 })); },
  spring: (A) => { A.tone({ type: 'sine', f0: 200, f1: 900, dur: 0.4, vol: 0.18, vib: 80, vibRate: 22 }); },
  splash: (A) => { A.noise({ dur: 0.5, vol: 0.18, f0: 1400, f1: 500, q: 0.8 }); A.noise({ dur: 0.2, vol: 0.1, type: 'highpass', f0: 3000 }); },
  swim: (A) => A.noise({ dur: 0.25, vol: 0.08, f0: 900, f1: 400 }),
  moonappear: (A) => { [79, 83, 86, 91, 95].forEach((m, i) => A.tone({ type: 'triangle', f0: note(m), t: i * 0.06, dur: 0.5, vol: 0.07, rev: 0.6 })); A.noise({ dur: 0.8, vol: 0.05, type: 'highpass', f0: 6000, rev: 0.5 }); },
  moonget: (A) => {
    const seq = [72, 76, 79, 84, 88];
    seq.forEach((m, i) => A.tone({ type: 'square', f0: note(m), t: i * 0.075, dur: 0.18, vol: 0.06, filter: { f: 3500 }, rev: 0.3 }));
    const t0 = seq.length * 0.075 + 0.05;
    [72, 76, 79, 84].forEach((m) => { A.tone({ type: 'triangle', f0: note(m), t: t0, dur: 1.8, vol: 0.08, a: 0.02, vib: 4, rev: 0.6 }); A.tone({ type: 'square', f0: note(m + 12), t: t0, dur: 1.2, vol: 0.025, filter: { f: 2500 }, rev: 0.5 }); });
    for (let i = 0; i < 10; i++) A.tone({ type: 'sine', f0: note(96 + (i % 5) * 2), t: t0 + 0.1 + i * 0.09, dur: 0.2, vol: 0.03, rev: 0.7 });
  },
  shard: (A, o) => { const b = 76 + (o.pitch || 1) * 2; A.tone({ type: 'triangle', f0: note(b), dur: 0.2, vol: 0.09, rev: 0.4 }); A.tone({ type: 'triangle', f0: note(b + 7), t: 0.07, dur: 0.25, vol: 0.07, rev: 0.4 }); },
  rumble: (A) => A.noise({ dur: 0.5, vol: 0.12, type: 'lowpass', f0: 300 }),
  switch: (A) => { A.tone({ type: 'square', f0: 400, f1: 800, dur: 0.12, vol: 0.08, filter: { f: 2000 } }); A.tone({ type: 'square', f0: 800, t: 0.1, dur: 0.15, vol: 0.07, filter: { f: 2500 } }); },
  tick: (A, o) => A.tone({ type: 'square', f0: o.high ? 1800 : 1200, dur: 0.04, vol: 0.05, filter: { f: 4000 } }),
  capture: (A) => { A.tone({ type: 'sine', f0: 300, f1: 1600, dur: 0.35, vol: 0.12, vib: 20, vibRate: 20 }); [84, 88, 91].forEach((m, i) => A.tone({ type: 'triangle', f0: note(m), t: 0.25 + i * 0.05, dur: 0.25, vol: 0.06, rev: 0.4 })); },
  uncapture: (A) => { A.tone({ type: 'sine', f0: 1200, f1: 300, dur: 0.3, vol: 0.1 }); },
  pipe: (A) => { [0, 1, 2].forEach((i) => A.tone({ type: 'square', f0: 330 - i * 70, f1: 200 - i * 50, t: i * 0.1, dur: 0.1, vol: 0.08, filter: { f: 1600 } })); },
  explode: (A) => { A.noise({ dur: 0.8, vol: 0.35, type: 'lowpass', f0: 1800, f1: 200 }); A.tone({ type: 'sine', f0: 120, f1: 30, dur: 0.7, vol: 0.35 }); },
  cannon: (A) => { A.noise({ dur: 0.35, vol: 0.25, type: 'lowpass', f0: 1200, f1: 300 }); A.tone({ type: 'sine', f0: 90, f1: 40, dur: 0.3, vol: 0.3 }); },
  enemyhit: (A) => { A.tone({ type: 'square', f0: 500, f1: 250, dur: 0.12, vol: 0.1, filter: { f: 2000 } }); A.noise({ dur: 0.1, vol: 0.08 }); },
  poof: (A) => { A.noise({ dur: 0.35, vol: 0.12, f0: 1800, f1: 600, q: 0.8 }); },
  alert: (A) => { A.tone({ type: 'square', f0: 900, dur: 0.06, vol: 0.06, filter: { f: 3000 } }); A.tone({ type: 'square', f0: 1300, t: 0.06, dur: 0.1, vol: 0.06, filter: { f: 3000 } }); },
  frog: (A) => { A.tone({ type: 'square', f0: 150, f1: 400, dur: 0.18, vol: 0.12, vib: 30, vibRate: 30, filter: { f: 1500 } }); },
  chomp: (A) => { A.tone({ type: 'square', f0: 260, f1: 120, dur: 0.12, vol: 0.14, filter: { f: 1200 } }); A.noise({ dur: 0.08, vol: 0.12, type: 'highpass', f0: 2000 }); },
  chain: (A) => A.noise({ dur: 0.06, vol: 0.08, type: 'highpass', f0: 5000 }),
  menu: (A) => A.tone({ type: 'square', f0: 880, dur: 0.05, vol: 0.05, filter: { f: 3000 } }),
  select: (A) => { A.tone({ type: 'square', f0: 660, dur: 0.06, vol: 0.06, filter: { f: 3000 } }); A.tone({ type: 'square', f0: 990, t: 0.06, dur: 0.1, vol: 0.06, filter: { f: 3000 } }); },
  back: (A) => A.tone({ type: 'square', f0: 500, f1: 350, dur: 0.1, vol: 0.06, filter: { f: 2500 } }),
  talk: (A) => A.tone({ type: 'square', f0: 300 + Math.random() * 300, dur: 0.05, vol: 0.05, filter: { f: 1800 } }),
  buy: (A) => { [79, 84, 88].forEach((m, i) => A.tone({ type: 'square', f0: note(m), t: i * 0.06, dur: 0.15, vol: 0.05, filter: { f: 3000 } })); A.noise({ dur: 0.2, vol: 0.06, type: 'highpass', f0: 5000, t: 0.15 }); },
  roar: (A) => { A.noise({ dur: 1.2, vol: 0.3, type: 'lowpass', f0: 700, f1: 200, q: 3 }); A.tone({ type: 'sawtooth', f0: 110, f1: 60, dur: 1.1, vol: 0.12, vib: 8, vibRate: 12, filter: { f: 600 } }); },
  fire: (A) => A.noise({ dur: 0.45, vol: 0.14, f0: 900, f1: 300, q: 0.6 }),
  bosshit: (A) => { A.tone({ type: 'square', f0: 600, f1: 150, dur: 0.4, vol: 0.14, filter: { f: 2000 } }); A.noise({ dur: 0.3, vol: 0.18, type: 'lowpass', f0: 1200 }); },
  victory: (A) => {
    const mel = [[72, 0], [76, 0.12], [79, 0.24], [84, 0.36], [79, 0.6], [84, 0.72], [88, 0.84]];
    mel.forEach(([m, t]) => A.tone({ type: 'square', f0: note(m), t, dur: 0.2, vol: 0.06, filter: { f: 3500 }, rev: 0.3 }));
    [72, 76, 79, 84].forEach((m) => A.tone({ type: 'triangle', f0: note(m), t: 1.0, dur: 2, vol: 0.07, rev: 0.6 }));
  },
  whoosh: (A) => A.noise({ dur: 0.6, vol: 0.12, f0: 400, f1: 2500, q: 0.7 }),
  warp: (A) => { A.tone({ type: 'sine', f0: 200, f1: 1600, dur: 0.6, vol: 0.12, vib: 50, vibRate: 10 }); A.noise({ dur: 0.6, vol: 0.06, type: 'highpass', f0: 3000 }); },
};
