// All sound is synthesised: a slow generative score of pads and struck tones in a long
// reverb, the ship's hum, wind on worlds that have air, and small mechanical noises.

const MODES = {
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  pentatonic: [0, 3, 5, 7, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
};

function mulberry(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.volume = { master: 0.8, music: 0.7, sfx: 0.8 };
    this.nextChord = 0;
    this.nextBell = 0;
    this.mood = { root: 55, mode: MODES.aeolian, seed: 1 };
  }

  start() {
    if (this.ctx) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.volume.master;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.02; comp.release.value = 0.4;
    this.master.connect(comp).connect(ctx.destination);
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.impulse(6.5, 2.6);
    this.reverbOut = ctx.createGain();
    this.reverbOut.gain.value = 0.9;
    this.reverb.connect(this.reverbOut).connect(this.master);
    this.music = ctx.createGain();
    this.music.gain.value = this.volume.music;
    this.music.connect(this.master);
    this.musicSend = ctx.createGain();
    this.musicSend.gain.value = 1.0;
    this.music.connect(this.musicSend).connect(this.reverb);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = this.volume.sfx;
    this.sfx.connect(this.master);
    this.sfxSend = ctx.createGain();
    this.sfxSend.gain.value = 0.35;
    this.sfx.connect(this.sfxSend).connect(this.reverb);
    this.noiseBuf = this.noise(4, false);
    this.brownBuf = this.noise(4, true);
    this.buildContinuous();
    this.nextChord = ctx.currentTime + 1.5;
    this.nextBell = ctx.currentTime + 6;
  }

  setVolumes(v) {
    Object.assign(this.volume, v);
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.volume.master, t, 0.1);
    this.music.gain.setTargetAtTime(this.volume.music, t, 0.1);
    this.sfx.gain.setTargetAtTime(this.volume.sfx, t, 0.1);
  }

  impulse(seconds, decay) {
    const ctx = this.ctx;
    const n = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, n, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      let lp = 0;
      for (let i = 0; i < n; i++) {
        const t = i / n;
        lp += (Math.random() * 2 - 1 - lp) * (0.35 - 0.25 * t);
        d[i] = lp * Math.pow(1 - t, decay) * (i < 200 ? i / 200 : 1);
      }
    }
    return buf;
  }

  noise(seconds, brown) {
    const ctx = this.ctx;
    const n = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
    }
    return buf;
  }

  loop(buf) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf; s.loop = true;
    s.start();
    return s;
  }

  buildContinuous() {
    const ctx = this.ctx;
    // ship hum
    this.hum = ctx.createOscillator(); this.hum.type = 'sawtooth'; this.hum.frequency.value = 46;
    this.humF = ctx.createBiquadFilter(); this.humF.type = 'lowpass'; this.humF.frequency.value = 160;
    this.humG = ctx.createGain(); this.humG.gain.value = 0;
    this.hum.connect(this.humF).connect(this.humG).connect(this.sfx); this.hum.start();
    // idle life support: a soft, constant room tone
    this.room = this.loop(this.brownBuf);
    this.roomF = ctx.createBiquadFilter(); this.roomF.type = 'lowpass'; this.roomF.frequency.value = 220;
    this.roomG = ctx.createGain(); this.roomG.gain.value = 0.05;
    this.room.connect(this.roomF).connect(this.roomG).connect(this.sfx);
    // thrusters
    this.thr = this.loop(this.noiseBuf);
    this.thrF = ctx.createBiquadFilter(); this.thrF.type = 'bandpass'; this.thrF.frequency.value = 500; this.thrF.Q.value = 0.7;
    this.thrG = ctx.createGain(); this.thrG.gain.value = 0;
    this.thr.connect(this.thrF).connect(this.thrG).connect(this.sfx);
    // cruise rumble
    this.cru = this.loop(this.brownBuf);
    this.cruF = ctx.createBiquadFilter(); this.cruF.type = 'lowpass'; this.cruF.frequency.value = 200;
    this.cruG = ctx.createGain(); this.cruG.gain.value = 0;
    this.cru.connect(this.cruF).connect(this.cruG).connect(this.sfx);
    this.cruTone = ctx.createOscillator(); this.cruTone.type = 'sine'; this.cruTone.frequency.value = 33;
    this.cruToneG = ctx.createGain(); this.cruToneG.gain.value = 0;
    this.cruTone.connect(this.cruToneG).connect(this.sfx); this.cruTone.start();
    // wind
    this.wind = this.loop(this.noiseBuf);
    this.windF = ctx.createBiquadFilter(); this.windF.type = 'bandpass'; this.windF.frequency.value = 400; this.windF.Q.value = 0.5;
    this.windG = ctx.createGain(); this.windG.gain.value = 0;
    this.wind.connect(this.windF).connect(this.windG).connect(this.sfx);
    // scoop / heat roar
    this.scoop = this.loop(this.brownBuf);
    this.scoopF = ctx.createBiquadFilter(); this.scoopF.type = 'lowpass'; this.scoopF.frequency.value = 600;
    this.scoopG = ctx.createGain(); this.scoopG.gain.value = 0;
    this.scoop.connect(this.scoopF).connect(this.scoopG).connect(this.sfx);
    // jump drive
    this.jmp = ctx.createOscillator(); this.jmp.type = 'sawtooth'; this.jmp.frequency.value = 40;
    this.jmpF = ctx.createBiquadFilter(); this.jmpF.type = 'lowpass'; this.jmpF.frequency.value = 300; this.jmpF.Q.value = 6;
    this.jmpG = ctx.createGain(); this.jmpG.gain.value = 0;
    this.jmp.connect(this.jmpF).connect(this.jmpG).connect(this.sfx); this.jmp.start();
    // musical drone
    this.drone = ctx.createOscillator(); this.drone.type = 'sine'; this.drone.frequency.value = 55;
    this.drone2 = ctx.createOscillator(); this.drone2.type = 'sine'; this.drone2.frequency.value = 82.5;
    this.droneG = ctx.createGain(); this.droneG.gain.value = 0.0;
    this.drone.connect(this.droneG); this.drone2.connect(this.droneG);
    this.droneG.connect(this.music);
    this.drone.start(); this.drone2.start();
    this.alarmT = 0;
  }

  setMood(seed, cls) {
    const r = mulberry(seed);
    const modeName = cls === 'M' || cls === 'L' ? (r() < 0.5 ? 'phrygian' : 'aeolian')
      : cls === 'A' || cls === 'B' || cls === 'O' || cls === 'F' ? (r() < 0.5 ? 'lydian' : 'mixolydian')
        : cls === 'D' || cls === 'N' || cls === 'X' ? 'pentatonic'
          : r() < 0.5 ? 'dorian' : 'aeolian';
    const root = 41.2 * Math.pow(2, Math.floor(r() * 7) / 12);
    this.mood = { root, mode: MODES[modeName], seed, rand: r };
    if (this.ctx) {
      const t = this.ctx.currentTime;
      this.drone.frequency.setTargetAtTime(root, t, 4);
      this.drone2.frequency.setTargetAtTime(root * 1.5, t, 4);
    }
  }

  freq(deg, oct) {
    const m = this.mood.mode;
    const o = Math.floor(deg / m.length);
    const d = ((deg % m.length) + m.length) % m.length;
    return this.mood.root * Math.pow(2, oct + o + m[d] / 12);
  }

  padChord(t) {
    const ctx = this.ctx;
    const r = this.mood.rand || Math.random;
    const base = Math.floor(r() * 7);
    const degs = [base, base + 2, base + 4, base + (r() < 0.5 ? 6 : 7)];
    const dur = 26 + r() * 14;
    for (let i = 0; i < degs.length; i++) {
      const f = this.freq(degs[i], 1 + (i > 1 ? 1 : 0));
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.022 / (1 + i * 0.3), t + 7 + r() * 3);
      g.gain.setValueAtTime(0.022 / (1 + i * 0.3), t + dur - 10);
      g.gain.linearRampToValueAtTime(0, t + dur);
      const flt = ctx.createBiquadFilter();
      flt.type = 'lowpass';
      flt.frequency.setValueAtTime(380, t);
      flt.frequency.linearRampToValueAtTime(900 + r() * 700, t + dur * 0.5);
      flt.frequency.linearRampToValueAtTime(420, t + dur);
      for (const det of [-6, 5]) {
        const o = ctx.createOscillator();
        o.type = i === 0 ? 'triangle' : 'sawtooth';
        o.frequency.value = f;
        o.detune.value = det + (r() - 0.5) * 4;
        o.connect(flt);
        o.start(t); o.stop(t + dur + 0.1);
      }
      flt.connect(g).connect(this.music);
    }
    return dur;
  }

  bell(t, f, vol = 0.05) {
    const ctx = this.ctx;
    const car = ctx.createOscillator(); car.type = 'sine'; car.frequency.value = f;
    const mod = ctx.createOscillator(); mod.type = 'sine'; mod.frequency.value = f * 3.5;
    const mg = ctx.createGain();
    mg.gain.setValueAtTime(f * 2.2, t);
    mg.gain.exponentialRampToValueAtTime(f * 0.05, t + 2.5);
    mod.connect(mg).connect(car.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 6);
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) pan.pan.value = (Math.random() - 0.5) * 0.8;
    car.connect(g);
    (pan ? g.connect(pan) : g).connect(this.music);
    car.start(t); mod.start(t);
    car.stop(t + 6.2); mod.stop(t + 6.2);
  }

  updateMusic() {
    const t = this.ctx.currentTime;
    const r = this.mood.rand || Math.random;
    if (t >= this.nextChord) {
      const dur = this.padChord(t + 0.05);
      this.nextChord = t + dur * (0.55 + r() * 0.25) + (r() < 0.25 ? 20 : 0);
    }
    if (t >= this.nextBell) {
      const n = r() < 0.6 ? 1 : r() < 0.7 ? 2 : 3;
      let deg = Math.floor(r() * 10);
      for (let i = 0; i < n; i++) {
        this.bell(t + i * (0.9 + r() * 0.8), this.freq(deg, 3 + (r() < 0.3 ? 1 : 0)), 0.03 + r() * 0.025);
        deg += r() < 0.5 ? 2 : -1;
      }
      this.nextBell = t + 7 + r() * 16;
    }
  }

  // continuous state, every frame
  update(s) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const k = 0.15;
    this.humG.gain.setTargetAtTime(0.018 + s.thrust * 0.05, t, k);
    this.humF.frequency.setTargetAtTime(140 + s.thrust * 260, t, k);
    this.thrG.gain.setTargetAtTime(s.thrust * 0.09 + (s.rcs ? 0.02 : 0), t, 0.08);
    this.thrF.frequency.setTargetAtTime(380 + s.thrust * 600, t, k);
    const c = s.cruise ? Math.min(1, Math.log10(Math.max(s.speed, 1000) / 1000) / 6) : 0;
    this.cruG.gain.setTargetAtTime(s.cruise ? 0.06 + c * 0.12 : 0, t, 0.4);
    this.cruF.frequency.setTargetAtTime(120 + c * 600, t, 0.4);
    this.cruToneG.gain.setTargetAtTime(s.cruise ? 0.03 + c * 0.03 : 0, t, 0.5);
    const wind = Math.min(1, s.windDensity * (0.15 + Math.min(s.airSpeed / 300, 1.5)));
    this.windG.gain.setTargetAtTime(wind * 0.16, t, 0.5);
    this.windF.frequency.setTargetAtTime(250 + 500 * Math.min(s.airSpeed / 300, 1) + 150 * Math.sin(t * 0.37) * Math.sin(t * 0.13), t, 0.3);
    this.scoopG.gain.setTargetAtTime(s.scoop * 0.18 + Math.max(0, s.heat - 0.6) * 0.1, t, 0.3);
    this.scoopF.frequency.setTargetAtTime(300 + s.scoop * 900, t, 0.3);
    this.jmpG.gain.setTargetAtTime(s.jump * 0.06, t, 0.2);
    this.jmp.frequency.setTargetAtTime(38 + s.jump * 70, t, 0.3);
    this.jmpF.frequency.setTargetAtTime(200 + s.jump * 1600, t, 0.3);
    this.roomG.gain.setTargetAtTime(0.035, t, 1);
    this.droneG.gain.setTargetAtTime(s.musicDrone ? 0.012 : 0, t, 3);
    if (s.heat > 0.85 && t - this.alarmT > 1.2) {
      this.alarmT = t;
      this.tone(880, 0.08, 0.04, 'square'); this.tone(660, 0.08, 0.04, 'square', 0.14);
    }
    if (s.music) this.updateMusic();
  }

  tone(f, dur, vol, type = 'sine', delay = 0, bus = null) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus || this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
  }

  sweep(f0, f1, dur, vol, type = 'sine') {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
  }

  thud(vol = 0.3) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = this.brownBuf;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 160;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    s.connect(f).connect(g).connect(this.sfx);
    s.start(t, Math.random() * 2); s.stop(t + 1);
    this.tone(55, 0.5, vol * 0.4);
  }

  servo(dur = 1.4) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(140, t); o.frequency.linearRampToValueAtTime(190, t + dur);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 3;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.025, t + 0.1);
    g.gain.setValueAtTime(0.025, t + dur - 0.2); g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(f).connect(g).connect(this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
    this.tone(320, 0.12, 0.05, 'triangle', dur);
  }

  blip() { this.tone(1760, 0.06, 0.025); }
  select() { this.tone(1320, 0.05, 0.02); this.tone(1980, 0.08, 0.018, 'sine', 0.05); }
  deny() { this.tone(220, 0.15, 0.04, 'triangle'); }
  pulse() { this.sweep(180, 1400, 1.6, 0.06); this.tone(90, 2.5, 0.05, 'sine', 0, this.music); }
  surveyed() { [0, 4, 7].forEach((d, i) => this.bell(this.ctx ? this.ctx.currentTime + i * 0.18 : 0, this.freq(d + 7, 3), 0.035)); }
  message() { if (!this.ctx) return; this.tone(988, 0.25, 0.03); this.tone(1318, 0.4, 0.025, 'sine', 0.22); }
  engage() { this.sweep(60, 220, 1.2, 0.08, 'triangle'); }
  disengage() { this.sweep(260, 60, 0.9, 0.07, 'triangle'); }
  jumpBoom() { this.thud(0.5); this.sweep(800, 30, 3, 0.08); }
  arrive() { this.sweep(1200, 140, 3.5, 0.05); if (this.ctx) this.bell(this.ctx.currentTime + 1.5, this.freq(0, 3), 0.05); }
}
