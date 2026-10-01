// Step sequencer + synth instruments + original compositions for each kingdom.
const NOTE_IDX = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
export function midiOf(tok) {
  const m = /^([A-G])([#b]?)(-?\d)$/.exec(tok);
  if (!m) return null;
  let n = NOTE_IDX[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  return n + (parseInt(m[3], 10) + 1) * 12;
}
const freq = (m) => 440 * Math.pow(2, (m - 69) / 12);

const CHORD_Q = { '': [0, 4, 7], m: [0, 3, 7], 7: [0, 4, 7, 10], m7: [0, 3, 7, 10], maj7: [0, 4, 7, 11], dim: [0, 3, 6], sus4: [0, 5, 7], aug: [0, 4, 8], add9: [0, 4, 7, 14] };
function chordNotes(name, oct = 4) {
  const m = /^([A-G])([#b]?)(.*)$/.exec(name);
  if (!m) return [];
  const root = midiOf(m[1] + m[2] + oct);
  const q = CHORD_Q[m[3]] ?? CHORD_Q[''];
  return q.map((i) => root + i);
}

// ---------------------------------------------------------------- instruments
function env(A, g, t, a, d, s, r, dur, vol) {
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + a);
  g.gain.setTargetAtTime(vol * s, t + a, d);
  g.gain.setTargetAtTime(0, t + dur, r);
}

let pulseWave = null;
function pulse(ctx) {
  if (pulseWave) return pulseWave;
  const n = 32, re = new Float32Array(n), im = new Float32Array(n);
  const duty = 0.25;
  for (let k = 1; k < n; k++) im[k] = (2 / (k * Math.PI)) * Math.sin(Math.PI * k * duty);
  pulseWave = ctx.createPeriodicWave(re, im);
  return pulseWave;
}

const INST = {
  lead(A, m, t, dur, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.setPeriodicWave(pulse(ctx));
    o.frequency.value = freq(m);
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 5.5; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(freq(m) * 0.012, t + Math.min(0.4, dur));
    lfo.connect(lg).connect(o.frequency);
    f.type = 'lowpass'; f.frequency.value = 3200;
    o.connect(f).connect(g); g.connect(out); g.connect(A.delay);
    env(A, g, t, 0.008, 0.08, 0.65, 0.05, dur, vol * 0.11);
    o.start(t); o.stop(t + dur + 0.4); lfo.start(t); lfo.stop(t + dur + 0.4);
  },
  flute(A, m, t, dur, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o2.type = 'sine';
    o.frequency.value = freq(m); o2.frequency.value = freq(m) * 2.002;
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 5; lg.gain.value = freq(m) * 0.01;
    lfo.connect(lg).connect(o.frequency);
    const g2 = ctx.createGain(); g2.gain.value = 0.25;
    o.connect(g); o2.connect(g2).connect(g); g.connect(out); g.connect(A.delay);
    env(A, g, t, 0.04, 0.2, 0.8, 0.08, dur, vol * 0.2);
    for (const x of [o, o2, lfo]) { x.start(t); x.stop(t + dur + 0.5); }
  },
  bell(A, m, t, dur, vol, out) {
    const ctx = A.ctx, c = ctx.createOscillator(), mo = ctx.createOscillator(), mg = ctx.createGain(), g = ctx.createGain();
    c.type = 'sine'; mo.type = 'sine';
    c.frequency.value = freq(m); mo.frequency.value = freq(m) * 3.5;
    mg.gain.setValueAtTime(freq(m) * 2.5, t); mg.gain.exponentialRampToValueAtTime(1, t + 1.2);
    mo.connect(mg).connect(c.frequency);
    c.connect(g); g.connect(out);
    const rs = ctx.createGain(); rs.gain.value = 0.5; g.connect(rs).connect(A.reverb);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol * 0.16, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0005, t + Math.max(1.4, dur));
    c.start(t); mo.start(t); c.stop(t + Math.max(1.5, dur) + 0.1); mo.stop(t + Math.max(1.5, dur) + 0.1);
  },
  pluck(A, m, t, dur, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.value = freq(m);
    f.type = 'lowpass'; f.Q.value = 2;
    f.frequency.setValueAtTime(4200, t); f.frequency.exponentialRampToValueAtTime(500, t + 0.25);
    o.connect(f).connect(g); g.connect(out);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol * 0.12, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.5);
    o.start(t); o.stop(t + 0.55);
  },
  marimba(A, m, t, dur, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain();
    o.type = 'sine'; o2.type = 'sine';
    o.frequency.value = freq(m); o2.frequency.value = freq(m) * 4;
    o.connect(g); o2.connect(g2); g.connect(out); g2.connect(out);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol * 0.22, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.45);
    g2.gain.setValueAtTime(vol * 0.06, t); g2.gain.exponentialRampToValueAtTime(0.0005, t + 0.06);
    o.start(t); o2.start(t); o.stop(t + 0.5); o2.stop(t + 0.1);
  },
  bass(A, m, t, dur, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'triangle'; o.frequency.value = freq(m);
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = freq(m);
    const g2 = ctx.createGain(); g2.gain.value = 0.25;
    f.type = 'lowpass'; f.frequency.value = 900;
    o.connect(g); o2.connect(g2).connect(f).connect(g); g.connect(out);
    env(A, g, t, 0.005, 0.1, 0.7, 0.03, Math.min(dur, 0.6), vol * 0.32);
    o.start(t); o2.start(t); o.stop(t + dur + 0.2); o2.stop(t + dur + 0.2);
  },
  pad(A, m, t, dur, vol, out) {
    const ctx = A.ctx, g = ctx.createGain(), f = ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 1300;
    f.connect(g); g.connect(out);
    const rs = ctx.createGain(); rs.gain.value = 0.6; g.connect(rs).connect(A.reverb);
    for (const det of [-7, 7]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = freq(m); o.detune.value = det;
      o.connect(f); o.start(t); o.stop(t + dur + 0.8);
    }
    env(A, g, t, 0.25, 0.4, 0.8, 0.3, dur, vol * 0.035);
  },
  organ(A, m, t, dur, vol, out) {
    const ctx = A.ctx, g = ctx.createGain();
    g.connect(out);
    [[1, 1], [2, 0.5], [3, 0.3], [4, 0.2]].forEach(([h, a]) => {
      const o = ctx.createOscillator(), og = ctx.createGain();
      o.type = 'sine'; o.frequency.value = freq(m) * h; og.gain.value = a;
      o.connect(og).connect(g); o.start(t); o.stop(t + dur + 0.2);
    });
    env(A, g, t, 0.01, 0.1, 0.85, 0.05, dur, vol * 0.08);
  },
  kick(A, t, vol, out) {
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    g.gain.setValueAtTime(vol * 0.55, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.25);
  },
  snare(A, t, vol, out) {
    const ctx = A.ctx, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = A.noiseBuf; f.type = 'bandpass'; f.frequency.value = 1900; f.Q.value = 0.8;
    g.gain.setValueAtTime(vol * 0.3, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.2);
    const o = ctx.createOscillator(), og = ctx.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    og.gain.setValueAtTime(vol * 0.18, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.12);
  },
  hat(A, t, vol, out, len = 0.035) {
    const ctx = A.ctx, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = A.noiseBuf; f.type = 'highpass'; f.frequency.value = 7500;
    g.gain.setValueAtTime(vol * 0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + len);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + len + 0.02);
  },
  shaker(A, t, vol, out) { INST.hat(A, t, vol * 0.6, out, 0.07); },
  tamb(A, t, vol, out) {
    INST.hat(A, t, vol * 0.9, out, 0.09);
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'square'; o.frequency.value = 5200;
    g.gain.setValueAtTime(vol * 0.02, t); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.06);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.07);
  },
  conga(A, t, vol, out, hi = false) {
    const ctx = A.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(hi ? 330 : 220, t); o.frequency.exponentialRampToValueAtTime(hi ? 260 : 170, t + 0.1);
    g.gain.setValueAtTime(vol * 0.3, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.2);
  },
  crash(A, t, vol, out) {
    const ctx = A.ctx, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = A.noiseBuf; f.type = 'highpass'; f.frequency.value = 4000;
    g.gain.setValueAtTime(vol * 0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
    s.connect(f).connect(g).connect(out); s.start(t); s.stop(t + 1.05);
  },
};

// ---------------------------------------------------------------- songs
// Each bar string: tokens per step ('.' rest, '-' hold). Chords: one per bar (or 'X Y' = two halves).
export const SONGS = {
  title: {
    bpm: 118, steps: 8, swing: 0,
    lead: { inst: 'lead', bars: [
      'C5 E5 G5 C6 B5 G5 A5 G5', 'E5 . C5 E5 A5 . G5 E5', 'F5 A5 C6 A5 G5 F5 E5 F5', 'G5 . D5 G5 B5 . A5 G5',
      'C6 . G5 E5 C6 D6 E6 C6', 'A5 . E5 A5 C6 B5 A5 G5', 'F5 A5 C6 F6 D6 B5 G5 B5', 'C6 - - - G5 - C5 .',
    ] },
    chords: ['C', 'Am', 'F', 'G', 'C', 'Am', 'F G', 'C'],
    bass: 'march', pad: 'pad', arp: null,
    drums: { kick: 'x...x...', snare: '..x...x.', hat: 'x.x.x.x.' },
  },
  meadow: {
    bpm: 138, steps: 8, swing: 0.16,
    lead: { inst: 'lead', bars: [
      'A4 C5 F5 . E5 F5 G5 A5', 'F5 . D5 . A4 D5 F5 E5', 'D5 F5 Bb5 . A5 G5 F5 D5', 'E5 . C5 . G5 - - .',
      'A5 G5 F5 C5 F5 A5 C6 A5', 'Bb5 A5 F5 D5 A5 - F5 .', 'G5 Bb5 A5 G5 E5 G5 C6 Bb5', 'A5 - - . F5 . C5 .',
      'D6 . C6 Bb5 F5 . D5 F5', 'E5 G5 C6 . Bb5 A5 G5 .', 'C6 . A5 E5 C5 E5 A5 C6', 'D6 - - . C6 A5 F5 A5',
      'Bb5 . G5 D5 Bb4 D5 G5 Bb5', 'A5 G5 E5 C5 G5 - E5 .', 'F5 A5 C6 F6 E6 C6 A5 F5', 'G5 - E5 - Bb5 - C6 .',
    ] },
    chords: ['F', 'Dm', 'Bb', 'C', 'F', 'Dm', 'Gm C', 'F', 'Bb', 'C', 'Am', 'Dm', 'Gm', 'C', 'F', 'C7'],
    bass: 'rootfifth', pad: 'pad', arp: { inst: 'marimba', pattern: '.x.x.x.x', oct: 5 },
    drums: { kick: 'x...x...', snare: '..x...x.', hat: 'x.x.x.x.', shaker: '.x.x.x.x' },
  },
  desert: {
    bpm: 112, steps: 8, swing: 0,
    lead: { inst: 'flute', bars: [
      'D5 . F5 E5 D5 . A4 .', 'C5 E5 G5 F5 E5 . C5 .', 'D5 . F5 G5 A5 G5 F5 D5', 'E5 F5 E5 C#5 Bb4 . C#5 .',
      'D5 F5 A5 D6 C6 A5 F5 A5', 'G5 . E5 C5 E5 G5 Bb5 A5', 'F5 . D5 F5 Bb5 A5 G5 F5', 'E5 F5 E5 D5 C#5 - - .',
    ] },
    chords: ['Dm', 'C', 'Bb', 'A', 'Dm', 'C', 'Bb', 'A7'],
    bass: 'habanera', pad: 'pad', arp: { inst: 'pluck', pattern: 'x.xx.xx.', oct: 4 },
    drums: { kick: 'x..x....', conga: '..x..xx.', tamb: 'xxxxxxxx', snare: '....x...' },
  },
  snow: {
    bpm: 152, steps: 6, swing: 0,
    lead: { inst: 'bell', bars: [
      'E5 - C#5 - A4 C#5', 'F#5 - - - E5 C#5', 'D5 F#5 A5 - F#5 D5', 'E5 - - - B4 -',
      'C#6 - B5 - A5 E5', 'F#5 A5 C#6 - B5 A5', 'B5 - G#5 - E5 G#5', 'A5 - - - - .',
    ] },
    chords: ['A', 'F#m', 'D', 'E', 'A', 'F#m', 'Bm E', 'A'],
    bass: 'waltz', pad: 'pad', arp: null,
    drums: { shaker: '..x.x.', kick: 'x.....' },
  },
  lava: {
    bpm: 150, steps: 8, swing: 0,
    lead: { inst: 'organ', bars: [
      'C5 . Eb5 . G5 . F5 Eb5', 'D5 . Eb5 F5 G5 - - .', 'Ab5 . G5 F5 Eb5 . C5 .', 'D5 Eb5 F5 . Bb4 - - .',
      'C6 . B5 . G5 . Eb5 .', 'F5 Eb5 D5 Eb5 C5 - - .', 'Ab4 C5 Eb5 Ab5 G5 F5 Eb5 D5', 'B4 - D5 - G5 - F5 D5',
    ] },
    chords: ['Cm', 'Cm', 'Ab', 'Bb', 'Cm', 'Cm', 'Ab', 'G'],
    bass: 'octave', pad: 'pad', arp: null,
    drums: { kick: 'x.x.x.x.', snare: '..x...x.', hat: 'xxxxxxxx', crash: 'x.......' },
  },
  boss: {
    bpm: 168, steps: 8, swing: 0,
    lead: { inst: 'lead', bars: [
      'E5 E5 G5 E5 B5 . A5 G5', 'F#5 . E5 D5 E5 - - .', 'E5 E5 G5 E5 C6 . B5 A5', 'F#5 A5 D6 . C6 B5 A5 F#5',
      'E6 . D6 . B5 . G5 .', 'A5 B5 G5 E5 F#5 - - .', 'C6 B5 A5 G5 E5 G5 C6 E6', 'D#6 - B5 - F#5 - D#5 -',
    ] },
    chords: ['Em', 'Em', 'C', 'D', 'Em', 'Em', 'C', 'B7'],
    bass: 'octave16', pad: 'pad', arp: null,
    drums: { kick: 'x.x.x.x.', snare: '..x...x.', hat: 'xxxxxxxx', crash: 'x.......' },
  },
  moon: {
    bpm: 96, steps: 8, swing: 0,
    lead: { inst: 'bell', bars: [
      'Bb4 Eb5 G5 Bb5 - - G5 -', 'C5 Eb5 G5 C6 - - Bb5 -', 'Ab5 - G5 F5 Eb5 - C5 -', 'D5 - F5 - Bb5 - - -',
      'G5 Bb5 Eb6 - D6 - Bb5 G5', 'D5 - G5 Bb5 D6 - C6 Bb5', 'C6 - Ab5 Eb5 D5 F5 Bb5 D6', 'Eb6 - - - - - . .',
    ] },
    chords: ['Eb', 'Cm', 'Ab', 'Bb', 'Eb', 'Gm', 'Ab Bb', 'Eb'],
    bass: 'whole', pad: 'pad', arp: { inst: 'pluck', pattern: 'x.x.x.x.', oct: 5 },
    drums: { shaker: '..x...x.' },
  },
  ship: {
    bpm: 100, steps: 8, swing: 0.2,
    lead: { inst: 'flute', bars: [
      'G4 . C5 D5 E5 . G5 .', 'A5 G5 E5 . D5 . C5 .', 'F5 . E5 D5 C5 . A4 .', 'G4 - - . . . . .',
    ] },
    chords: ['C', 'Am', 'Dm', 'G7'],
    bass: 'rootfifth', pad: 'pad', arp: null,
    drums: { shaker: '.x.x.x.x', kick: 'x...x...' },
  },
};

// ---------------------------------------------------------------- sequencer
export class Music {
  constructor(audio) {
    this.A = audio;
    this.song = null;
    this.name = null;
    this.timer = null;
    this.out = null;
  }

  play(name) {
    if (!this.A.ctx) { this.pending = name; return; }
    if (this.name === name && this.song) return;
    this.stop(0.6);
    const song = SONGS[name];
    if (!song) return;
    this.name = name;
    this.song = this.compile(song);
    const ctx = this.A.ctx;
    this.out = ctx.createGain();
    this.out.gain.setValueAtTime(0, ctx.currentTime);
    this.out.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.8);
    this.out.connect(this.A.music);
    this.step = 0;
    this.nextT = ctx.currentTime + 0.1;
    this.timer = setInterval(() => this.tick(), 25);
  }

  stop(fade = 0.5) {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    if (this.out && this.A.ctx) {
      const o = this.out, t = this.A.ctx.currentTime;
      o.gain.cancelScheduledValues(t);
      o.gain.setValueAtTime(o.gain.value, t);
      o.gain.linearRampToValueAtTime(0, t + fade);
      setTimeout(() => o.disconnect(), fade * 1000 + 200);
    }
    this.out = null;
    this.song = null;
    this.name = null;
  }

  duck(on) {
    if (!this.out || !this.A.ctx) return;
    const t = this.A.ctx.currentTime;
    this.out.gain.cancelScheduledValues(t);
    this.out.gain.setTargetAtTime(on ? 0.15 : 1, t, 0.15);
  }

  compile(s) {
    const bars = s.lead.bars.length;
    const steps = s.steps;
    const total = bars * steps;
    const lead = [];
    s.lead.bars.forEach((bar, b) => {
      const toks = bar.trim().split(/\s+/);
      toks.forEach((tok, i) => {
        const at = b * steps + i;
        if (tok === '-') { const last = lead[lead.length - 1]; if (last) last.len++; return; }
        if (tok === '.') return;
        const m = midiOf(tok);
        if (m !== null) lead.push({ at, m, len: 1 });
      });
    });
    const chords = [];
    s.chords.forEach((c, b) => {
      const parts = c.split(' ');
      parts.forEach((p, k) => chords.push({ at: b * steps + Math.floor((k * steps) / parts.length), len: Math.floor(steps / parts.length), name: p }));
    });
    return { ...s, total, leadEv: lead, chordEv: chords };
  }

  chordAt(step) {
    const ev = this.song.chordEv;
    let c = ev[0];
    for (const e of ev) if (e.at <= step) c = e;
    return c;
  }

  tick() {
    const A = this.A, ctx = A.ctx, s = this.song;
    if (!s) return;
    const stepDur = 60 / s.bpm / (s.steps === 6 ? 2 : s.steps / 4);
    while (this.nextT < ctx.currentTime + 0.15) {
      let t = this.nextT;
      const st = this.step % s.total;
      if (s.swing && st % 2 === 1) t += stepDur * s.swing;
      this.playStep(st, t, stepDur);
      this.nextT += stepDur;
      this.step++;
    }
  }

  playStep(st, t, stepDur) {
    const A = this.A, s = this.song, out = this.out;
    if (!out) return;
    const inBar = st % s.steps;
    // lead
    for (const e of s.leadEv) if (e.at === st) INST[s.lead.inst](A, e.m, t, e.len * stepDur * 0.92, 1, out);
    // chords
    const ch = this.chordAt(st);
    const notes = chordNotes(ch.name, 4);
    if (ch.at === st && s.pad) for (const n of notes) INST.pad(A, n - 12 + 12, t, ch.len * stepDur, 1, out);
    // bass
    const root = chordNotes(ch.name, 2)[0];
    const fifth = root + 7;
    const local = st - ch.at;
    switch (s.bass) {
      case 'rootfifth': if (inBar % 2 === 0) INST.bass(A, (inBar / 2) % 2 ? fifth : root, t, stepDur * 1.6, 1, out); break;
      case 'march': if (inBar % 2 === 0) INST.bass(A, [root, fifth, root + 12, fifth][(inBar / 2) % 4], t, stepDur * 1.5, 1, out); break;
      case 'octave': INST.bass(A, inBar % 2 ? root + 12 : root, t, stepDur * 0.9, 0.9, out); break;
      case 'octave16': INST.bass(A, inBar % 2 ? root + 12 : root, t, stepDur * 0.8, 0.9, out); break;
      case 'habanera': if ([0, 3, 4, 6].includes(inBar)) INST.bass(A, inBar === 3 ? fifth - 12 + 12 : inBar === 6 ? fifth : root, t, stepDur * (inBar === 0 ? 2.5 : 1), 1, out); break;
      case 'waltz': if (inBar === 0) INST.bass(A, root, t, stepDur * 2, 1, out); else if (inBar === 2 || inBar === 4) for (const n of chordNotes(ch.name, 3)) INST.marimba(A, n, t, stepDur, 0.35, out); break;
      case 'whole': if (local === 0) INST.bass(A, root, t, ch.len * stepDur, 0.8, out); break;
      default: break;
    }
    // arpeggio
    if (s.arp && s.arp.pattern[inBar] === 'x') {
      const an = chordNotes(ch.name, s.arp.oct);
      const idx = Math.floor(st / 1) % an.length;
      INST[s.arp.inst](A, an[idx], t, stepDur, 0.55, out);
    }
    // drums
    const d = s.drums || {};
    const hit = (pat) => pat && pat[inBar % pat.length] === 'x';
    if (hit(d.kick)) INST.kick(A, t, 1, out);
    if (hit(d.snare)) INST.snare(A, t, 1, out);
    if (hit(d.hat)) INST.hat(A, t, 1, out);
    if (hit(d.shaker)) INST.shaker(A, t, 1, out);
    if (hit(d.tamb)) INST.tamb(A, t, 1, out);
    if (hit(d.conga)) INST.conga(A, t, 1, out, inBar % 3 === 0);
    if (d.crash && inBar === 0 && (st / s.steps) % 4 === 0) INST.crash(A, t, 1, out);
  }
}
