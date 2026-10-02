// Heads-up display, drawn on a 2D canvas over the scene. Thin lines, small type, nothing
// that glows unless it needs to.

import * as THREE from 'three';
import { fmtDistance, fmtSpeed, C } from '../core/units.js';

const INK = 'rgba(232,228,218,';
const WARN = '#e3a54b';
const CRIT = '#e0674c';

export class Hud {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.notes = [];
    this.v = new THREE.Vector3();
    this.pulse = -1;
    this.visible = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.round(this.w * dpr);
    this.canvas.height = Math.round(this.h * dpr);
  }

  note(text, kind = 'info', life = 7) {
    this.notes.push({ text, kind, t: 0, life });
    if (this.notes.length > 6) this.notes.shift();
  }

  // project a camera-relative world vector to screen; returns null when behind
  project(camera, rel) {
    const l = Math.hypot(rel[0], rel[1], rel[2]);
    if (l === 0) return null;
    this.v.set(rel[0] / l, rel[1] / l, rel[2] / l).applyQuaternion(camera.quaternion.clone().invert());
    const behind = this.v.z > 0;
    const p = this.v.clone().applyMatrix4(camera.projectionMatrix);
    let x = (p.x * 0.5 + 0.5) * this.w, y = (-p.y * 0.5 + 0.5) * this.h;
    if (behind) { x = this.w - x; y = this.h - y; }
    return { x, y, behind, on: !behind && x >= 0 && x <= this.w && y >= 0 && y <= this.h };
  }

  text(s, x, y, { size = 11, color = INK + '0.82)', align = 'left', weight = 500, spacing = 0.08 } = {}) {
    const c = this.ctx;
    c.font = `${weight} ${size}px "IBM Plex Mono", ui-monospace, Menlo, monospace`;
    c.fillStyle = color;
    c.textAlign = align;
    c.textBaseline = 'alphabetic';
    if ('letterSpacing' in c) c.letterSpacing = `${spacing}em`;
    c.fillText(s, x, y);
  }

  bar(x, y, w, frac, color, label, value) {
    const c = this.ctx;
    this.text(label, x, y - 6, { size: 10, color: INK + '0.55)', spacing: 0.16 });
    this.text(value, x + w, y - 6, { size: 10, color, align: 'right' });
    c.fillStyle = INK + '0.12)';
    c.fillRect(x, y, w, 3);
    c.fillStyle = color;
    c.fillRect(x, y, Math.max(0, Math.min(1, frac)) * w, 3);
  }

  draw(dt, s) {
    const c = this.ctx;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.w, this.h);
    if (!this.visible || !s) return;
    const W = this.w, H = this.h;
    const cam = s.camera;
    const pad = Math.max(16, Math.min(W, H) * 0.035);

    // --- reticle (ship nose) ---
    const nose = this.project(cam, s.noseDir);
    if (nose && nose.on && s.mode !== 'landed') {
      c.strokeStyle = INK + '0.55)';
      c.lineWidth = 1;
      c.beginPath();
      c.arc(nose.x, nose.y, 9, 0.25, Math.PI - 0.25);
      c.moveTo(nose.x + 9 * Math.cos(Math.PI + 0.25), nose.y + 9 * Math.sin(Math.PI + 0.25));
      c.arc(nose.x, nose.y, 9, Math.PI + 0.25, Math.PI * 2 - 0.25);
      c.stroke();
      c.beginPath();
      c.moveTo(nose.x - 16, nose.y); c.lineTo(nose.x - 12, nose.y);
      c.moveTo(nose.x + 12, nose.y); c.lineTo(nose.x + 16, nose.y);
      c.stroke();
    }
    // --- velocity marker ---
    if (s.velDir && s.mode === 'flight' && s.speed > 3) {
      const vp = this.project(cam, s.velDir);
      if (vp && vp.on) {
        c.strokeStyle = 'rgba(160,210,190,0.7)';
        c.beginPath();
        c.arc(vp.x, vp.y, 5, 0, Math.PI * 2);
        c.moveTo(vp.x - 5, vp.y); c.lineTo(vp.x - 11, vp.y);
        c.moveTo(vp.x + 5, vp.y); c.lineTo(vp.x + 11, vp.y);
        c.moveTo(vp.x, vp.y - 5); c.lineTo(vp.x, vp.y - 10);
        c.stroke();
      }
    }

    // --- body labels ---
    for (const L of s.labels || []) {
      const p = this.project(cam, L.rel);
      if (!p || !p.on) continue;
      const a = L.alpha ?? 0.5;
      c.strokeStyle = INK + (a * 0.6) + ')';
      c.beginPath();
      if (L.kind === 'signal') {
        c.moveTo(p.x, p.y - 5); c.lineTo(p.x + 5, p.y); c.lineTo(p.x, p.y + 5); c.lineTo(p.x - 5, p.y); c.closePath();
      } else {
        c.moveTo(p.x + 4, p.y - 4); c.lineTo(p.x + 12, p.y - 12);
      }
      c.stroke();
      this.text(L.name, p.x + 14, p.y - 14, { size: 10, color: INK + a + ')' });
      if (L.sub) this.text(L.sub, p.x + 14, p.y - 3, { size: 9, color: INK + a * 0.7 + ')' });
    }

    // --- target ---
    if (s.target) {
      const T = s.target;
      const p = this.project(cam, T.rel);
      if (p && p.on) {
        const r = Math.max(14, Math.min(220, T.angR / s.pixelAngle * 1.15 + 8));
        c.strokeStyle = INK + '0.85)';
        c.lineWidth = 1.2;
        const k = Math.min(10, r * 0.5);
        c.beginPath();
        for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
          c.moveTo(p.x + sx * r, p.y + sy * (r - k)); c.lineTo(p.x + sx * r, p.y + sy * r); c.lineTo(p.x + sx * (r - k), p.y + sy * r);
        }
        c.stroke();
        this.text(T.name.toUpperCase(), p.x + r + 8, p.y - 4, { size: 11, weight: 600, spacing: 0.12 });
        this.text(T.info, p.x + r + 8, p.y + 10, { size: 10, color: INK + '0.6)' });
        if (T.scan > 0) {
          c.strokeStyle = 'rgba(160,210,190,0.9)';
          c.lineWidth = 2;
          c.beginPath();
          c.arc(p.x, p.y, r + 6, -Math.PI / 2, -Math.PI / 2 + T.scan * Math.PI * 2);
          c.stroke();
        }
      } else if (p) {
        // edge arrow
        const cx = W / 2, cy = H / 2;
        let dx = p.x - cx, dy = p.y - cy;
        const l = Math.hypot(dx, dy) || 1;
        dx /= l; dy /= l;
        const m = Math.min((W / 2 - 40) / Math.abs(dx || 1e-6), (H / 2 - 40) / Math.abs(dy || 1e-6));
        const ex = cx + dx * m, ey = cy + dy * m;
        c.fillStyle = INK + '0.8)';
        c.beginPath();
        c.moveTo(ex + dx * 10, ey + dy * 10);
        c.lineTo(ex - dy * 6, ey + dx * 6);
        c.lineTo(ex + dy * 6, ey - dx * 6);
        c.closePath(); c.fill();
        this.text(T.name.toUpperCase(), ex - dx * 18, ey - dy * 18 + 4, { size: 10, align: dx > 0 ? 'right' : 'left', color: INK + '0.7)' });
      }
    }

    // --- jump target / sol markers on the sky ---
    for (const m of s.skyMarkers || []) {
      const p = this.project(cam, m.dir);
      if (!p || !p.on) continue;
      c.strokeStyle = m.color || INK + '0.5)';
      c.lineWidth = 1;
      c.beginPath();
      c.arc(p.x, p.y, 7, 0, Math.PI * 2);
      c.stroke();
      this.text(m.name, p.x + 11, p.y + 4, { size: 10, color: m.color || INK + '0.6)' });
    }

    // --- top left: where and when ---
    this.text(s.systemName.toUpperCase(), pad, pad + 6, { size: 12, weight: 600, spacing: 0.22 });
    this.text(s.systemSub, pad, pad + 22, { size: 10, color: INK + '0.55)' });
    this.text(s.timeLine, pad, pad + 38, { size: 10, color: INK + '0.55)' });
    if (s.objective) this.text(s.objective.toUpperCase(), pad, pad + 58, { size: 10, color: 'rgba(160,210,190,0.75)', spacing: 0.12 });

    // --- top right: home ---
    this.text(s.homeLine, W - pad, pad + 6, { size: 10, align: 'right', color: INK + '0.6)', spacing: 0.14 });
    if (s.jumpLine) this.text(s.jumpLine, W - pad, pad + 22, { size: 10, align: 'right', color: s.jumpOk ? INK + '0.75)' : WARN });

    // --- bottom left: flight ---
    const bx = pad, by = H - pad;
    this.text(s.modeLabel, bx, by - 92, { size: 10, color: s.modeColor || INK + '0.6)', spacing: 0.24, weight: 600 });
    this.text(fmtSpeed(s.speed), bx, by - 66, { size: 22, weight: 500, spacing: 0.02 });
    if (s.mode === 'cruise' && s.cruiseCap) this.text(`LIMIT ${fmtSpeed(s.cruiseCap)}`, bx, by - 50, { size: 10, color: INK + '0.5)' });
    else if (s.mode === 'flight') this.text(s.gLine || '', bx, by - 50, { size: 10, color: INK + '0.5)' });
    // throttle
    const tw = 150;
    c.fillStyle = INK + '0.12)';
    c.fillRect(bx, by - 36, tw, 3);
    c.fillStyle = INK + '0.8)';
    c.fillRect(bx, by - 36, tw * s.throttle, 3);
    this.text('THROTTLE', bx, by - 42 + 26, { size: 9, color: INK + '0.45)', spacing: 0.2 });
    this.text(`${Math.round(s.throttle * 100)}%`, bx + tw, by - 42 + 26, { size: 9, align: 'right', color: INK + '0.6)' });
    if (isFinite(s.alt) && s.alt < 2e6) {
      this.text('ALT', bx + 190, by - 92, { size: 10, color: INK + '0.5)', spacing: 0.24 });
      this.text(fmtDistance(Math.max(0, s.alt)), bx + 190, by - 66, { size: 16 });
      if (s.mode === 'flight' && s.alt < 50000) this.text(`${s.vs >= 0 ? '+' : ''}${s.vs.toFixed(1)} m/s`, bx + 190, by - 50, { size: 10, color: s.vs < -8 && s.alt < 300 ? WARN : INK + '0.55)' });
    }
    if (s.gear) this.text(s.gearLabel, bx + 190, by - 30, { size: 9, color: s.gearWarn ? WARN : INK + '0.5)', spacing: 0.18 });

    // --- bottom right: systems ---
    const rx = W - pad - 170;
    this.bar(rx, by - 80, 170, s.fuel, s.fuel < 0.2 ? WARN : INK + '0.8)', 'FUEL', `${Math.round(s.fuel * 100)}%  ·  ${s.rangeLy.toFixed(1)} LY`);
    this.bar(rx, by - 50, 170, s.heat, s.heat > 0.85 ? CRIT : s.heat > 0.6 ? WARN : INK + '0.8)', 'HEAT', `${Math.round(s.heat * 100)}%`);
    this.bar(rx, by - 20, 170, s.hull, s.hull < 0.3 ? CRIT : s.hull < 0.6 ? WARN : INK + '0.8)', 'HULL', `${Math.round(s.hull * 100)}%`);
    if (s.scooping) this.text('FUEL SCOOP ACTIVE', rx, by - 102, { size: 10, color: 'rgba(160,210,190,0.9)', spacing: 0.18 });

    // --- notifications ---
    let ny = H * 0.3 + 10;
    for (let i = this.notes.length - 1; i >= 0; i--) {
      const n = this.notes[i];
      n.t += dt;
      if (n.t > n.life) { this.notes.splice(i, 1); continue; }
    }
    for (const n of this.notes) {
      const a = Math.min(1, n.t * 3) * Math.min(1, (n.life - n.t) / 1.2);
      const col = n.kind === 'warn' ? `rgba(227,165,75,${a})` : n.kind === 'good' ? `rgba(160,210,190,${a})` : INK + a * 0.85 + ')';
      this.text(n.text, pad, ny, { size: 11, color: col });
      ny += 18;
    }

    // --- hint & centre text ---
    if (s.hint) this.text(s.hint, W / 2, H - pad - 4, { size: 10, align: 'center', color: INK + '0.55)', spacing: 0.14 });
    if (s.centerText) {
      this.text(s.centerText, W / 2, H * 0.62, { size: 12, align: 'center', color: s.centerColor || INK + '0.85)', spacing: 0.2, weight: 600 });
      if (s.centerSub) this.text(s.centerSub, W / 2, H * 0.62 + 18, { size: 10, align: 'center', color: INK + '0.6)', spacing: 0.12 });
    }

    // --- scan pulse ring ---
    if (this.pulse >= 0) {
      this.pulse += dt;
      const t = this.pulse / 2.2;
      if (t > 1) this.pulse = -1;
      else {
        c.strokeStyle = `rgba(160,210,190,${(1 - t) * 0.5})`;
        c.lineWidth = 1;
        c.beginPath();
        c.arc(W / 2, H / 2, t * Math.hypot(W, H) * 0.6, 0, Math.PI * 2);
        c.stroke();
      }
    }

    // --- jump overlay numbers ---
    if (s.jump) {
      const j = s.jump;
      this.text(j.title, W / 2, H * 0.2, { size: 12, align: 'center', spacing: 0.3, weight: 600 });
      if (j.beta > 0) {
        this.text(`β ${j.beta.toFixed(j.beta > 0.999 ? 7 : 4)}   γ ${j.gamma.toFixed(j.gamma > 100 ? 0 : 2)}`, W / 2, H * 0.2 + 20, { size: 11, align: 'center', color: INK + '0.7)' });
      }
      this.text(j.clock, W / 2, H * 0.2 + 38, { size: 10, align: 'center', color: INK + '0.55)' });
    }
  }
}

export { C };
