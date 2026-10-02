// Galaxy map (stars within ~50 ly, drawn in 3D on a 2D canvas) and system map (an orrery
// with logarithmic distances). Both live in one overlay with tabs.

import { distLy, rawDensity, SOL_POS } from '../world/galaxy.js';
import { TYPE_LABEL } from '../world/system.js';
import { AU, fmtDistance } from '../core/units.js';

const INK = 'rgba(232,228,218,';

const fmtLy = (d) => (d < 10 ? `${d.toFixed(2)} ly` : d < 1000 ? `${d.toFixed(1)} ly` : `${Math.round(d).toLocaleString('en-US')} ly`);
const escapeHtml = (t) => String(t).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

function rgbStr(c, a = 1, boost = 1) {
  const s = (v) => Math.round(Math.min(1, Math.pow(Math.max(v * boost, 0), 1 / 2.2)) * 255);
  return `rgba(${s(c[0])},${s(c[1])},${s(c[2])},${a})`;
}

export class Maps {
  constructor(game) {
    this.game = game;
    this.el = document.getElementById('map');
    this.canvas = document.getElementById('map-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.info = document.getElementById('map-info');
    this.tabs = [...this.el.querySelectorAll('[data-maptab]')];
    this.tab = 'galaxy';
    this.open = false;
    this.yaw = 0.6; this.pitch = 0.55; this.zoom = 32;
    this.center = null;
    this.selected = null;
    this.hover = null;
    this.drag = null;
    this.stars = [];
    this.inset = document.getElementById('map-inset');
    this.insetDrawn = false;
    this.tabs.forEach((t) => t.addEventListener('click', () => this.setTab(t.dataset.maptab)));
    document.getElementById('map-close').addEventListener('click', () => this.toggle(false));
    this.canvas.addEventListener('mousedown', (e) => { this.drag = { x: e.clientX, y: e.clientY, moved: false }; });
    window.addEventListener('mouseup', (e) => {
      if (this.drag && !this.drag.moved && this.open) this.click(e);
      this.drag = null;
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.open) return;
      const r = this.canvas.getBoundingClientRect();
      this.mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (this.drag) {
        const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
        if (Math.abs(dx) + Math.abs(dy) > 3) this.drag.moved = true;
        if (this.tab === 'galaxy') {
          this.yaw += dx * 0.006;
          this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch + dy * 0.006));
        } else {
          this.sysPan.x += dx; this.sysPan.y += dy;
        }
        this.drag.x = e.clientX; this.drag.y = e.clientY;
      }
    });
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (this.tab === 'galaxy') this.zoom = Math.max(8, Math.min(700, this.zoom * (e.deltaY > 0 ? 1.12 : 0.89)));
      else this.sysZoom = Math.max(0.4, Math.min(8, this.sysZoom * (e.deltaY > 0 ? 0.89 : 1.12)));
    }, { passive: false });
    this.sysPan = { x: 0, y: 0 };
    this.sysZoom = 1;
    // search
    this.search = document.getElementById('map-search');
    this.results = document.getElementById('map-search-results');
    this.hits = [];
    this.hitSel = 0;
    this.search.addEventListener('input', () => this.runSearch());
    this.search.addEventListener('focus', () => this.runSearch());
    this.search.addEventListener('blur', () => setTimeout(() => { this.results.hidden = true; }, 120));
    this.search.addEventListener('keydown', (e) => this.searchKey(e));
  }

  // ---------- search ----------
  openSearch() {
    if (!this.open) this.toggle(true);
    setTimeout(() => { this.search.focus(); this.search.select(); }, 0);
  }

  searchKey(e) {
    e.stopPropagation();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!this.hits.length) return;
      this.hitSel = (this.hitSel + (e.key === 'ArrowDown' ? 1 : -1) + this.hits.length) % this.hits.length;
      this.renderHits();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.hits[this.hitSel]) this.pick(this.hits[this.hitSel]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (this.search.value) { this.search.value = ''; this.runSearch(); } else this.search.blur();
    }
  }

  runSearch() {
    const q = this.search.value.trim().toLowerCase().replace(/\s+/g, ' ');
    this.hits = q ? this.findMatches(q).slice(0, 9) : [];
    this.hitSel = 0;
    this.renderHits(q);
  }

  findMatches(q) {
    const g = this.game;
    const here = g.star.pos;
    const out = new Map();
    const score = (name, aliases = []) => {
      const n = name.toLowerCase();
      if (n === q) return 0;
      if (n.startsWith(q)) return 1;
      if (aliases.includes(q)) return 1.5;
      if (n.includes(q)) return 2;
      if (aliases.some((a) => a.includes(q))) return 2.5;
      return null;
    };
    const add = (key, hit, sc) => {
      if (sc === null) return;
      const ex = out.get(key);
      if (!ex || sc < ex.score) out.set(key, { ...hit, score: sc });
    };
    const bodyHit = (b, sc) => add(`b:${b.index}`, { kind: 'body', index: b.index, name: b.name, sub: `${TYPE_LABEL[b.type]} · this system`, dist: 0 }, sc);
    if (g.scanned) for (const b of g.sys.bodies) bodyHit(b, score(b.name));
    for (const lm of g.universe.landmarks || []) {
      const st = lm.star;
      const d = distLy(st.pos, here);
      const raw = score(lm.name, lm.aliases);
      const sc = raw === null ? null : raw - (lm.priority || 0) * 0.6;
      if (lm.body) {
        if (st.id === g.star.id) { const b = g.sys.bodies.find((x) => x.name === lm.body); if (b) bodyHit(b, sc); }
        else add(`lb:${lm.name}`, { kind: 'remote', star: st, body: lm.body, name: lm.name, sub: `in ${st.name} · ${fmtLy(d)}`, dist: d }, sc);
      } else add(`s:${st.id}`, { kind: 'star', star: st, name: st.name, sub: `${st.spectral} · ${st.id === g.star.id ? 'you are here' : fmtLy(d)}`, dist: d }, sc);
    }
    const pool = new Map(this.stars.map((s) => [s.id, s]));
    for (const id of g.visited) { const s = g.universe.galaxy.starById(id); if (s) pool.set(s.id, s); }
    for (const k of g.trailKnown()) pool.set(k.star.id, k.star);
    for (const s of pool.values()) {
      const d = distLy(s.pos, here);
      add(`s:${s.id}`, { kind: 'star', star: s, name: s.name, sub: `${s.spectral} · ${s.id === g.star.id ? 'you are here' : fmtLy(d)}`, dist: d },
        score(s.name, s.kind === 'blackhole' ? ['black hole'] : s.kind === 'neutron' ? ['neutron star', 'pulsar'] : []));
    }
    return [...out.values()].sort((a, b) => a.score - b.score || a.dist - b.dist);
  }

  renderHits(q) {
    const el = this.results;
    if (!this.search.value.trim()) { el.hidden = true; return; }
    el.hidden = false;
    if (!this.hits.length) {
      el.innerHTML = `<li class="none">Nothing called "${escapeHtml(q || this.search.value)}" within reach of the charts</li>`;
      return;
    }
    el.innerHTML = this.hits.map((h, i) => `<li role="option" data-i="${i}" aria-selected="${i === this.hitSel}"><span>${escapeHtml(h.name)}</span><span class="dim">${escapeHtml(h.sub)}</span></li>`).join('');
    el.querySelectorAll('li[data-i]').forEach((li) => li.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.pick(this.hits[Number(li.dataset.i)]);
    }));
  }

  pick(hit) {
    const g = this.game;
    this.search.value = '';
    this.results.hidden = true;
    this.search.blur();
    if (hit.kind === 'body') {
      g.setTarget({ kind: 'body', index: hit.index });
      g.audio.select();
      this.setTab('system');
      g.hud.note(`Target: ${hit.name}. Close the map and press P to fly there.`, 'info', 6);
      return;
    }
    const st = hit.star;
    g.pendingBody = hit.kind === 'remote' ? { starId: st.id, name: hit.body } : null;
    if (st.id === g.star.id) { this.setTab('galaxy'); return; }
    this.selectStar(st);
  }

  selectStar(s) {
    const g = this.game;
    this.selected = s;
    const d = distLy(s.pos, g.star.pos);
    if (d <= g.maxJump()) g.setJumpTarget(s);
    // pull the view back far enough to show it
    if (d > this.zoom * 1.2) this.zoom = Math.min(700, d * 0.9);
    g.audio.select();
    this.setTab('galaxy');
  }

  toggle(force, tab) {
    const open = force ?? !this.open;
    if (open === this.open && !tab) return;
    this.open = open;
    this.el.hidden = !open;
    if (open) {
      this.game.input.releaseLock();
      if (tab) this.tab = tab;
      this.setTab(this.tab);
      this.refresh();
    }
    this.game.audio.blip();
  }

  setTab(t) {
    this.tab = t;
    this.tabs.forEach((b) => b.setAttribute('aria-selected', b.dataset.maptab === t ? 'true' : 'false'));
    this.inset.hidden = t !== 'galaxy';
    this.renderInfo();
  }

  refresh() {
    const g = this.game;
    const here = g.star.pos;
    this.center = here;
    this.stars = g.universe.galaxy.starsInRadius(here, 52).map((s) => s.star);
    if (!this.selected && g.jumpTarget) this.selected = g.jumpTarget;
    this.renderInfo();
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.canvas.width !== Math.round(r.width * dpr) || this.canvas.height !== Math.round(r.height * dpr)) {
      this.canvas.width = Math.round(r.width * dpr);
      this.canvas.height = Math.round(r.height * dpr);
    }
    this.cw = r.width; this.ch = r.height; this.dpr = dpr;
  }

  projectLy(p) {
    const c = this.center;
    let x = p[0] - c[0], y = p[1] - c[1], z = p[2] - c[2];
    const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw);
    [x, z] = [x * cy - z * sy, x * sy + z * cy];
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    [y, z] = [y * cp - z * sp, y * sp + z * cp];
    const D = this.zoom * 2.6;
    const f = Math.min(this.cw, this.ch) * 0.9;
    const k = f / (z + D);
    if (z + D < 1) return null;
    return { x: this.cw / 2 + x * k * (D / this.zoom) * 0.5, y: this.ch / 2 - y * k * (D / this.zoom) * 0.5, depth: z, k };
  }

  draw() {
    if (!this.open) return;
    this.resize();
    const c = this.ctx;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.cw, this.ch);
    if (this.tab === 'galaxy') this.drawGalaxy(c);
    else this.drawSystem(c);
  }

  drawGalaxy(c) {
    const g = this.game;
    const here = g.star.pos;
    // plane rings
    c.lineWidth = 1;
    const step = this.zoom > 90 ? 100 : 10;
    for (let r = step; r <= step * 5; r += step) {
      c.strokeStyle = INK + (r === step * 5 ? 0.06 : 0.09) + ')';
      c.beginPath();
      for (let i = 0; i <= 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        const p = this.projectLy([here[0] + Math.cos(a) * r, here[1], here[2] + Math.sin(a) * r]);
        if (!p) continue;
        i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y);
      }
      c.stroke();
      const lp = this.projectLy([here[0] + r, here[1], here[2]]);
      if (lp) this.label(c, `${r} ly`, lp.x + 4, lp.y - 3, 9, INK + '0.3)');
    }
    // jump range
    const range = g.jumpRange();
    if (range < 1000) { // the jump-anywhere cheat has no ring to draw
      c.strokeStyle = 'rgba(160,210,190,0.35)';
      c.setLineDash([3, 4]);
      c.beginPath();
      for (let i = 0; i <= 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        const p = this.projectLy([here[0] + Math.cos(a) * range, here[1], here[2] + Math.sin(a) * range]);
        if (!p) continue;
        i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y);
      }
      c.stroke();
      c.setLineDash([]);
    }
    // direction to Sol and the galactic core
    this.edgeMarker(c, SOL_POS, 'SOL', 'rgba(232,210,150,0.8)');
    const jx = g.universe.j1407;
    if (jx && jx.id !== g.star.id && jx !== this.selected) this.edgeMarker(c, jx.pos, 'J1407 · GIANT RINGS', 'rgba(226,182,140,0.8)');
    this.edgeMarker(c, [0, 0, 0], 'GALACTIC CORE', INK + '0.35)', true);

    // stars, far to near
    const proj = [];
    for (const s of this.stars) {
      const p = this.projectLy(s.pos);
      if (!p) continue;
      proj.push({ s, p });
    }
    proj.sort((a, b) => b.p.depth - a.p.depth);
    let hover = null, hd = 12;
    for (const { s, p } of proj) {
      const d = distLy(s.pos, here);
      const lum = Math.max(s.lum, 1e-4);
      const size = Math.max(1.1, Math.min(5, 1.6 + Math.log10(lum) * 0.75)) * Math.min(1.6, p.k / 14 + 0.4);
      const inRange = d <= range;
      // drop line to the plane gives depth
      const pp = this.projectLy([s.pos[0], here[1], s.pos[2]]);
      if (pp && Math.abs(s.pos[1] - here[1]) > 0.5 && (d <= range * 1.2 || s === this.selected)) {
        c.strokeStyle = INK + '0.08)';
        c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(pp.x, pp.y); c.stroke();
      }
      c.fillStyle = s.kind === 'blackhole' ? 'rgba(180,140,255,0.9)' : rgbStr(s.color, inRange ? 0.95 : 0.45, 1);
      c.beginPath(); c.arc(p.x, p.y, size, 0, Math.PI * 2); c.fill();
      if (s.kind === 'blackhole') {
        c.strokeStyle = 'rgba(180,140,255,0.8)';
        c.beginPath(); c.arc(p.x, p.y, size + 6, 0, Math.PI * 2); c.stroke();
        if (d < 40) this.label(c, `BLACK HOLE · ${s.name.toUpperCase()}`, p.x + 12, p.y - 8, 9, 'rgba(190,160,255,0.9)');
      }
      if (g.visited.has(s.id)) {
        c.strokeStyle = INK + '0.45)';
        c.beginPath(); c.arc(p.x, p.y, size + 3, 0, Math.PI * 2); c.stroke();
      }
      if (this.mouse) {
        const md = Math.hypot(this.mouse.x - p.x, this.mouse.y - p.y);
        if (md < hd) { hd = md; hover = { s, p }; }
      }
    }
    this.hover = hover;
    // trail beacons the player knows about
    const known = g.trailKnown();
    for (const k of known) {
      const p = this.projectLy(k.star.pos);
      if (!p) continue;
      c.strokeStyle = k.found ? 'rgba(160,210,190,0.5)' : 'rgba(160,210,190,0.95)';
      c.lineWidth = 1.2;
      c.beginPath();
      c.moveTo(p.x, p.y - 9); c.lineTo(p.x + 9, p.y); c.lineTo(p.x, p.y + 9); c.lineTo(p.x - 9, p.y); c.closePath();
      c.stroke();
      if (!k.found) this.label(c, `BEACON · ${k.star.name.toUpperCase()}`, p.x + 13, p.y + 3, 10, 'rgba(160,210,190,0.95)');
    }
    // current
    const cp = this.projectLy(here);
    if (cp) {
      c.strokeStyle = INK + '0.9)';
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(cp.x - 14, cp.y); c.lineTo(cp.x - 6, cp.y); c.moveTo(cp.x + 6, cp.y); c.lineTo(cp.x + 14, cp.y);
      c.moveTo(cp.x, cp.y - 14); c.lineTo(cp.x, cp.y - 6); c.moveTo(cp.x, cp.y + 6); c.lineTo(cp.x, cp.y + 14);
      c.stroke();
      this.label(c, g.star.name.toUpperCase(), cp.x + 16, cp.y - 8, 10, INK + '0.9)');
    }
    // plotted route
    if (g.route && cp) {
      c.strokeStyle = 'rgba(160,210,190,0.55)';
      c.setLineDash([2, 4]);
      c.beginPath();
      c.moveTo(cp.x, cp.y);
      for (const st of g.route.path) { const q = this.projectLy(st.pos); if (q) c.lineTo(q.x, q.y); }
      c.stroke();
      c.setLineDash([]);
      for (const st of g.route.path) { const q = this.projectLy(st.pos); if (q) { c.beginPath(); c.arc(q.x, q.y, 4, 0, Math.PI * 2); c.stroke(); } }
    }
    // selection & route
    if (this.selected) {
      const sp = this.projectLy(this.selected.pos);
      if (sp && cp) {
        const ok = distLy(this.selected.pos, here) <= range;
        c.strokeStyle = ok ? 'rgba(160,210,190,0.8)' : 'rgba(227,165,75,0.8)';
        c.setLineDash([5, 4]);
        c.beginPath(); c.moveTo(cp.x, cp.y); c.lineTo(sp.x, sp.y); c.stroke();
        c.setLineDash([]);
        c.beginPath(); c.arc(sp.x, sp.y, 9, 0, Math.PI * 2); c.stroke();
        this.label(c, this.selected.name.toUpperCase(), sp.x + 13, sp.y - 6, 11, INK + '0.95)');
      }
    }
    if (hover && hover.s !== this.selected) {
      const s = hover.s;
      this.label(c, `${s.name}  ·  ${s.spectral}  ·  ${distLy(s.pos, here).toFixed(1)} ly`, hover.p.x + 12, hover.p.y + 16, 10, INK + '0.75)');
    }
    this.drawInset();
    // legend
    this.label(c, 'DRAG TO ROTATE  ·  SCROLL TO ZOOM  ·  CLICK A STAR TO PLOT A JUMP', 18, this.ch - 18, 9, INK + '0.4)');
  }

  edgeMarker(c, pos, name, color, dim) {
    const here = this.game.star.pos;
    const d = distLy(pos, here);
    const dir = [(pos[0] - here[0]) / d, (pos[1] - here[1]) / d, (pos[2] - here[2]) / d];
    const r = Math.min(d, this.zoom * 1.4);
    const p = this.projectLy([here[0] + dir[0] * r, here[1] + dir[1] * r, here[2] + dir[2] * r]);
    if (!p) return;
    c.strokeStyle = color;
    c.lineWidth = 1;
    c.beginPath(); c.arc(p.x, p.y, 4, 0, Math.PI * 2); c.stroke();
    const dist = d > 1000 ? `${Math.round(d).toLocaleString('en-US')} ly` : `${d.toFixed(1)} ly`;
    this.label(c, `${name} · ${dist}`, p.x + 8, p.y + 3, 9, color);
    void dim;
  }

  drawInset() {
    if (this.insetDrawn) {
      this.updateInsetMarker();
      return;
    }
    const cv = this.inset;
    const S = 180;
    cv.width = S * 2; cv.height = S * 2;
    const x = cv.getContext('2d');
    const img = x.createImageData(S * 2, S * 2);
    const R = 52000;
    for (let j = 0; j < S * 2; j++) {
      for (let i = 0; i < S * 2; i++) {
        const gx = ((i / (S * 2)) * 2 - 1) * R, gz = ((j / (S * 2)) * 2 - 1) * R;
        const d = rawDensity(gx, 0, gz);
        const v = Math.min(1, Math.pow(d * 0.55, 0.45));
        const k = (j * S * 2 + i) * 4;
        img.data[k] = 235 * v; img.data[k + 1] = 220 * v; img.data[k + 2] = 200 * v; img.data[k + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0);
    this.insetBase = x.getImageData(0, 0, S * 2, S * 2);
    this.insetDrawn = true;
    this.updateInsetMarker();
  }

  updateInsetMarker() {
    const cv = this.inset;
    const x = cv.getContext('2d');
    x.putImageData(this.insetBase, 0, 0);
    const R = 52000;
    const p = this.game.star.pos;
    const px = ((p[0] / R) * 0.5 + 0.5) * cv.width, py = ((p[2] / R) * 0.5 + 0.5) * cv.height;
    x.strokeStyle = 'rgba(160,210,190,1)';
    x.lineWidth = 2;
    x.beginPath(); x.arc(px, py, 7, 0, Math.PI * 2); x.stroke();
  }

  click() {
    if (this.tab === 'galaxy') {
      if (this.hover) {
        const s = this.hover.s;
        if (s.id === this.game.star.id) return;
        this.selected = s;
        this.game.pendingBody = null;
        if (distLy(s.pos, this.game.star.pos) <= this.game.maxJump()) this.game.setJumpTarget(s);
        this.game.audio.select();
        this.renderInfo();
      }
    } else if (this.sysHover != null) {
      this.game.setTarget(this.sysHover);
      this.game.audio.select();
      this.renderInfo();
    }
  }

  renderInfo() {
    const g = this.game;
    if (!g.star) return;
    if (this.tab === 'galaxy') {
      const s = this.selected;
      const here = g.star.pos;
      let html = `<p class="eyebrow">Current system</p><h3>${g.star.name}</h3><p class="dim">${g.star.spectral} · ${distLy(here, SOL_POS).toFixed(1)} ly from Sol</p>`;
      if (s) {
        const d = distLy(s.pos, here);
        const cost = g.jumpCost(d);
        const ok = d <= g.jumpRange();
        const trail = g.trailKnown().find((k) => k.star.id === s.id && !k.found);
        html += `<hr><p class="eyebrow">Jump target</p><h3>${s.name}</h3>
          <dl>
            <dt>Class</dt><dd>${s.spectral}</dd>
            <dt>Distance</dt><dd>${d.toFixed(2)} ly</dd>
            <dt>Fuel</dt><dd class="${ok ? '' : 'warn'}">${Math.round(cost * 100)}% of tank${ok ? '' : ' · out of range'}</dd>
            <dt>Fuel scoop</dt><dd>${s.scoopable ? 'Yes' : 'No'}</dd>
            <dt>Time at home</dt><dd>+${(d + 0.35).toFixed(1)} years</dd>
            <dt>Status</dt><dd>${g.visited.has(s.id) ? 'Visited' : 'Unvisited'}</dd>
          </dl>
          ${trail ? '<p class="good">A survey beacon is broadcasting from this system.</p>' : ''}
          ${s.id === 'SOL' ? '<p class="dim">Home.</p>' : ''}
          ${s.kind === 'blackhole' ? '<p class="warn">A black hole. There is no star to scoop here, and time near it runs slow: every hour close to the horizon is many at home. Fall in, and nothing comes back.</p>' : ''}
          <p class="dim small">${ok ? 'Close the map, then press J to begin the jump.' : d > g.maxJump() ? 'Too far for one jump. Plot a route through stars on the way.' : 'Not enough fuel for this jump. Skim a star or a gas giant first.'}</p>
          ${d > g.maxJump() ? '<button class="link primary" id="btn-route">Plot route</button>' : ''}
          ${g.route && g.route.dest.id === s.id ? `<p class="good small">Route plotted: ${g.route.path.length} jumps. Press J at each star.</p>` : ''}`;
      } else {
        html += '<hr><p class="dim">Select a star to plot a jump. Its distance in light-years is also the number of years that will pass at home.</p>';
      }
      this.info.innerHTML = html;
      const rb = this.info.querySelector('#btn-route');
      if (rb) rb.addEventListener('click', () => { if (g.setRoute(s)) { this.selected = s; g.audio.select(); this.renderInfo(); } });
    } else {
      const sys = g.sys;
      const rows = [];
      rows.push(`<p class="eyebrow">${g.scanned ? 'System survey' : 'Unscanned system'}</p><h3>${g.star.name}</h3><p class="dim">${g.star.spectral}${g.star.scoopable ? ' · scoopable' : ''}</p><hr>`);
      if (!g.scanned) rows.push('<p class="dim">Press <kbd>Space</kbd> to pulse-scan the system and resolve its bodies.</p>');
      else {
        rows.push('<ul class="bodylist">');
        sys.bodies.forEach((b, i) => {
          const surveyed = g.surveyed.has(b.id);
          rows.push(`<li data-body="${i}" class="${g.target && g.target.kind === 'body' && g.target.index === i ? 'sel' : ''}">
            <span class="${b.kind === 'moon' ? 'moon' : ''}">${b.name}</span>
            <span class="dim">${TYPE_LABEL[b.type]}${surveyed ? '' : ' · ?'}${b.life && surveyed ? ' · life' : ''}</span></li>`);
        });
        sys.signals.forEach((sig, i) => {
          rows.push(`<li data-signal="${i}" class="sig ${g.target && g.target.kind === 'signal' && g.target.index === i ? 'sel' : ''}"><span>◇ ${g.signalLabel(sig)}</span><span class="dim">${sys.bodies[sig.body].name}</span></li>`);
        });
        rows.push('</ul>');
      }
      this.info.innerHTML = rows.join('');
      this.info.querySelectorAll('li[data-body]').forEach((li) => li.addEventListener('click', () => {
        g.setTarget({ kind: 'body', index: Number(li.dataset.body) }); g.audio.select(); this.renderInfo();
      }));
      this.info.querySelectorAll('li[data-signal]').forEach((li) => li.addEventListener('click', () => {
        g.setTarget({ kind: 'signal', index: Number(li.dataset.signal) }); g.audio.select(); this.renderInfo();
      }));
    }
  }

  drawSystem(c) {
    const g = this.game;
    const sys = g.sys;
    const cx = this.cw / 2 + this.sysPan.x, cy = this.ch / 2 + this.sysPan.y;
    const maxA = Math.max(...sys.bodies.filter((b) => b.parent < 0).map((b) => b.orbit.a), AU * 0.5);
    const scale = (Math.min(this.cw, this.ch) * 0.44 * this.sysZoom) / Math.log(1 + maxA / (AU * 0.05));
    const mapR = (a) => Math.log(1 + a / (AU * 0.05)) * scale;
    const toScreen = (p) => {
      const a = Math.hypot(p[0], p[2]);
      const r = mapR(a);
      const ang = Math.atan2(p[2], p[0]);
      return { x: cx + Math.cos(ang) * r, y: cy + Math.sin(ang) * r };
    };
    // star
    c.fillStyle = rgbStr(sys.star.color, 1, 1);
    c.beginPath(); c.arc(cx, cy, 6, 0, Math.PI * 2); c.fill();
    this.label(c, sys.star.name.toUpperCase(), cx + 10, cy - 8, 10, INK + '0.8)');
    let hover = null, hd = 14;
    const pos = g.view.positions;
    if (!g.scanned) {
      this.label(c, 'UNSCANNED  ·  PRESS SPACE IN FLIGHT TO PULSE-SCAN', cx - 150, cy + 40, 10, INK + '0.5)');
    }
    for (const b of sys.bodies) {
      if (!g.scanned) break;
      if (b.parent < 0) {
        c.strokeStyle = INK + '0.1)';
        c.beginPath(); c.arc(cx, cy, mapR(b.orbit.a), 0, Math.PI * 2); c.stroke();
      }
    }
    if (g.scanned) {
      for (const b of sys.bodies) {
        let p;
        if (b.parent < 0) p = toScreen(pos[b.index]);
        else {
          const pp = toScreen(pos[b.parent]);
          const sib = sys.bodies[b.parent].children.indexOf(b.index);
          const rel = [pos[b.index][0] - pos[b.parent][0], pos[b.index][2] - pos[b.parent][2]];
          const ang = Math.atan2(rel[1], rel[0]);
          const rr = 12 + sib * 7;
          c.strokeStyle = INK + '0.07)';
          c.beginPath(); c.arc(pp.x, pp.y, rr, 0, Math.PI * 2); c.stroke();
          p = { x: pp.x + Math.cos(ang) * rr, y: pp.y + Math.sin(ang) * rr };
        }
        const size = Math.max(1.5, Math.min(7, Math.log10(b.radius / 2e5) * 2.4));
        const col = { gas: [0.9, 0.75, 0.55], icegiant: [0.55, 0.8, 0.9], terran: [0.45, 0.65, 0.9], ice: [0.85, 0.9, 0.95], lava: [1, 0.45, 0.2], desert: [0.85, 0.55, 0.35], venus: [0.95, 0.85, 0.6], titan: [0.85, 0.6, 0.3], barren: [0.65, 0.63, 0.6] }[b.type];
        c.fillStyle = rgbStr(col, g.surveyed.has(b.id) ? 1 : 0.6, 0.8);
        c.beginPath(); c.arc(p.x, p.y, size, 0, Math.PI * 2); c.fill();
        if (b.rings) { c.strokeStyle = rgbStr(col, 0.6, 0.8); c.beginPath(); c.ellipse(p.x, p.y, size * 2, size * 0.7, -0.3, 0, Math.PI * 2); c.stroke(); }
        const sel = g.target && g.target.kind === 'body' && g.target.index === b.index;
        if (sel) { c.strokeStyle = INK + '0.9)'; c.beginPath(); c.arc(p.x, p.y, size + 5, 0, Math.PI * 2); c.stroke(); }
        if (b.parent < 0 || sel || this.sysZoom > 2.5) this.label(c, b.name, p.x + size + 5, p.y + 3, 9, INK + (sel ? '0.95)' : '0.6)'));
        if (this.mouse) {
          const md = Math.hypot(this.mouse.x - p.x, this.mouse.y - p.y);
          if (md < hd) { hd = md; hover = { kind: 'body', index: b.index }; }
        }
      }
      sys.signals.forEach((sig, i) => {
        const host = pos[sig.body];
        const hp = sys.bodies[sig.body].parent < 0 ? toScreen(host) : toScreen(pos[sys.bodies[sig.body].parent]);
        const x = hp.x + 10, y = hp.y - 10;
        c.strokeStyle = 'rgba(160,210,190,0.9)';
        c.beginPath(); c.moveTo(x, y - 5); c.lineTo(x + 5, y); c.lineTo(x, y + 5); c.lineTo(x - 5, y); c.closePath(); c.stroke();
        if (this.mouse && Math.hypot(this.mouse.x - x, this.mouse.y - y) < hd) { hd = 0; hover = { kind: 'signal', index: i }; }
      });
    }
    // ship
    const sp = toScreen(g.shipWorld || [0, 0, 0]);
    c.strokeStyle = 'rgba(160,210,190,1)';
    c.beginPath(); c.moveTo(sp.x, sp.y - 6); c.lineTo(sp.x + 5, sp.y + 4); c.lineTo(sp.x - 5, sp.y + 4); c.closePath(); c.stroke();
    this.label(c, 'TERN', sp.x + 8, sp.y + 12, 9, 'rgba(160,210,190,0.9)');
    this.sysHover = hover;
    if (hover && hover.kind === 'body') {
      const b = sys.bodies[hover.index];
      const d = Math.hypot(pos[b.index][0] - g.shipWorld[0], pos[b.index][1] - g.shipWorld[1], pos[b.index][2] - g.shipWorld[2]);
      this.label(c, `${b.name} · ${TYPE_LABEL[b.type]} · ${fmtDistance(d)}`, this.mouse.x + 12, this.mouse.y + 18, 10, INK + '0.85)');
    }
    this.label(c, 'DISTANCES ARE LOGARITHMIC  ·  DRAG TO PAN  ·  SCROLL TO ZOOM  ·  CLICK TO TARGET', 18, this.ch - 18, 9, INK + '0.4)');
  }

  label(c, s, x, y, size, color) {
    c.font = `500 ${size}px "IBM Plex Mono", ui-monospace, monospace`;
    c.fillStyle = color;
    c.textAlign = 'left';
    if ('letterSpacing' in c) c.letterSpacing = '0.08em';
    c.fillText(s, x, y);
  }
}
