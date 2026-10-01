// HTML overlay UI: title screen, HUD, banners, dialog, toasts, pause/map/moons/options, travel, touch controls.
import { KINGDOMS, KINGDOM_ORDER } from '../kingdoms/index.js';
import { PALETTES } from '../actors/mario-model.js';
import { renderMap } from './map.js';
import { TouchControls } from './touch.js';

const h = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

export const MOON_SVG = (color = '#ffd43b', size = 22) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M15.5 2.5a9.5 9.5 0 1 0 6 16.9A8 8 0 0 1 15.5 2.5z" fill="${color}" stroke="rgba(0,0,0,.45)" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
const COIN_HTML = '<span class="coin-icon" aria-hidden="true"></span>';

const OUTFITS = [
  { id: 'classic', name: 'Classic', price: 0 },
  { id: 'builder', name: 'Builder', price: 120 },
  { id: 'luigi', name: 'Green Cap', price: 200 },
  { id: 'explorer', name: 'Explorer', price: 250 },
  { id: 'fire', name: 'Fire Suit', price: 300 },
  { id: 'wario', name: 'Rival', price: 350 },
  { id: 'shadow', name: 'Shadow', price: 400 },
  { id: 'gold', name: 'Gold', price: 777 },
];
export { OUTFITS };

export class UI {
  constructor(game) {
    this.game = game;
    const root = (this.root = h('div', 'ui'));
    root.id = 'ui';
    game.container.appendChild(root);
    this.isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window && navigator.maxTouchPoints > 0;

    // HUD
    this.hud = h('div', 'hud');
    this.hud.innerHTML = `
      <div class="hud-tl">
        <div class="counter coins">${COIN_HTML}<b id="hud-coins">0</b></div>
        <div class="counter purple"><span class="pcoin-icon" aria-hidden="true"></span><b id="hud-purple">0</b><small id="hud-purple-total">/0</small></div>
      </div>
      <div class="hud-tr">
        <div class="health" id="hud-health"></div>
        <div class="moons">
          <div class="moon-total">${MOON_SVG('#ffd43b', 30)}<b id="hud-moons">0</b></div>
          <div class="moon-kingdom" id="hud-kmoons"></div>
        </div>
      </div>
      <div class="timer" id="hud-timer" hidden></div>
      <div class="prompt" id="hud-prompt" hidden></div>
      <div class="capture-hint" id="hud-capture" hidden></div>
      <div class="coin-loss" id="hud-coinloss" hidden></div>
      <div class="toasts" id="hud-toasts" aria-live="polite"></div>`;
    root.appendChild(this.hud);
    this.hud.hidden = true;
    this.$ = (id) => root.querySelector('#' + id);

    this.banner = h('div', 'banner'); this.banner.hidden = true; root.appendChild(this.banner);
    this.dialogEl = h('div', 'dialog'); this.dialogEl.hidden = true; root.appendChild(this.dialogEl);
    this.menu = h('div', 'menu'); this.menu.hidden = true; root.appendChild(this.menu);
    this.title = h('div', 'title'); this.title.hidden = true; root.appendChild(this.title);
    this.fadeEl = h('div', 'fade'); root.appendChild(this.fadeEl);

    this.menuOpen = false;
    this.items = [];
    this.index = 0;
    this.lastHp = -1;
    this.dialogState = null;
    if (this.isTouch) this.touch = new TouchControls(this, game.input);
  }

  // ------------------------------------------------------------------ HUD
  updateHud(force = false) {
    const g = this.game, s = g.save, L = g.level;
    this.$('hud-coins').textContent = s.data.coins;
    if (L) {
      const pt = L.coinField ? L.coinField.purple.length : 0;
      this.$('hud-purple').textContent = s.purpleCount(L.id);
      this.$('hud-purple-total').textContent = '/' + pt;
      this.hud.querySelector('.counter.purple').hidden = pt === 0;
      this.$('hud-moons').textContent = s.totalMoons();
      const def = L.def;
      const got = s.moonCount(L.id), need = def.moonsToLeave ?? 0;
      const color = def.moonColor || '#ffd43b';
      this.$('hud-kmoons').innerHTML = `<span class="kname">${def.short || def.name}</span> ${MOON_SVG(color, 16)} <b>${got}</b>${need && got < need ? `<small> / ${need} to sail</small>` : ''}`;
      if (this.hud.querySelector('.pcoin-icon')) this.hud.querySelector('.pcoin-icon').style.setProperty('--pc', def.purpleColor || '#b25cff');
    }
    this.renderHealth(force);
  }

  renderHealth(force) {
    const p = this.game.player;
    const hp = p.hp, max = p.maxHp;
    if (!force && hp === this.lastHp && max === this.lastMax) return;
    this.lastHp = hp; this.lastMax = max;
    const n = max;
    const color = max > 3 ? '#ff6fb5' : hp >= 3 ? '#41d6ff' : hp === 2 ? '#ffd23a' : '#ff4a4a';
    let paths = '';
    const R = 26, r = 13, cx = 32, cy = 32;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 + 0.06, a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - 0.06;
      const p0 = [cx + Math.cos(a0) * R, cy + Math.sin(a0) * R], p1 = [cx + Math.cos(a1) * R, cy + Math.sin(a1) * R];
      const q0 = [cx + Math.cos(a1) * r, cy + Math.sin(a1) * r], q1 = [cx + Math.cos(a0) * r, cy + Math.sin(a0) * r];
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const filled = i < hp;
      paths += `<path d="M${p0[0]},${p0[1]} A${R},${R} 0 ${large} 1 ${p1[0]},${p1[1]} L${q0[0]},${q0[1]} A${r},${r} 0 ${large} 0 ${q1[0]},${q1[1]} Z" fill="${filled ? color : 'rgba(20,20,40,.55)'}" stroke="rgba(0,0,0,.55)" stroke-width="2"/>`;
    }
    this.$('hud-health').innerHTML = `<svg viewBox="0 0 64 64" width="64" height="64" aria-label="Health ${hp} of ${max}">${paths}<text x="32" y="40" text-anchor="middle" class="hp-num">${hp}</text></svg>`;
    if (!force && hp < 2) this.$('hud-health').classList.add('low'); else this.$('hud-health').classList.remove('low');
  }

  setTimer(t) {
    const el = this.$('hud-timer');
    if (t === null || t === undefined) { el.hidden = true; return; }
    el.hidden = false;
    el.textContent = t.toFixed(1);
    el.classList.toggle('urgent', t < 3);
  }

  prompt(text) {
    const el = this.$('hud-prompt');
    if (!text) { if (!el.hidden) el.hidden = true; this.touch?.setInteract(false); return; }
    if (el.textContent !== text) el.textContent = text;
    el.hidden = false;
    this.touch?.setInteract(true);
  }

  captureHint(text) {
    const el = this.$('hud-capture');
    if (!text) { el.hidden = true; return; }
    el.innerHTML = text;
    el.hidden = false;
  }

  toast(msg) {
    const box = this.$('hud-toasts');
    const t = h('div', 'toast', msg);
    box.appendChild(t);
    setTimeout(() => t.classList.add('out'), 2600);
    setTimeout(() => t.remove(), 3100);
    while (box.children.length > 3) box.firstChild.remove();
  }

  coinLoss(n) {
    const el = this.$('hud-coinloss');
    el.textContent = '−' + n;
    el.hidden = false;
    clearTimeout(this._clT);
    this._clT = setTimeout(() => (el.hidden = true), 1800);
  }

  clearBannerTimers() {
    clearTimeout(this._bT); clearTimeout(this._bT2);
  }
  scheduleBannerHide(ms) {
    const b = this.banner;
    this.clearBannerTimers();
    this._bT = setTimeout(() => { b.classList.add('out'); this._bT2 = setTimeout(() => { b.hidden = true; b.classList.remove('out'); }, 600); }, ms);
  }

  kingdomBanner(def) {
    const b = this.banner;
    this.clearBannerTimers();
    b.className = 'banner kingdom';
    b.innerHTML = `<div class="k-eyebrow">${def.region || 'Kingdom'}</div><div class="k-name">${def.name}</div><div class="k-sub">${def.subtitle || ''}</div>`;
    b.hidden = false;
    this.scheduleBannerHide(3200);
  }

  moonGet(name, multi) {
    const b = this.banner;
    this.clearBannerTimers();
    b.className = 'banner moonget';
    const color = this.game.level?.def.moonColor || '#ffd43b';
    b.innerHTML = `<div class="mg-icon">${MOON_SVG(color, 64)}</div><div class="mg-title">${multi ? 'MULTI MOON GET!' : 'MOON GET!'}</div><div class="mg-name">${name}</div>`;
    b.hidden = false;
  }

  hideBanner() { this.clearBannerTimers(); this.banner.hidden = true; }

  bossBanner(name) {
    const b = this.banner;
    this.clearBannerTimers();
    b.className = 'banner kingdom boss';
    b.innerHTML = `<div class="k-eyebrow">Boss</div><div class="k-name">${name}</div>`;
    b.hidden = false;
    this.scheduleBannerHide(2400);
  }

  bossHealth(hp, max, name) {
    let el = this.hud.querySelector('.boss-bar');
    if (hp === null || hp === undefined) { el?.remove(); return; }
    if (!el) { el = h('div', 'boss-bar'); this.hud.appendChild(el); }
    el.innerHTML = `<span class="bn">${name || ''}</span><span class="pips">${Array.from({ length: max }, (_, i) => `<i class="${i < hp ? 'on' : ''}"></i>`).join('')}</span>`;
  }

  counter(n, target) {
    let el = this.hud.querySelector('.counter-big');
    if (n === null || n === undefined) { el?.remove(); return; }
    if (!el) { el = h('div', 'counter-big'); this.hud.appendChild(el); }
    el.innerHTML = `<b>${n}</b>${target ? `<small> / ${target}</small>` : ''}`;
    el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  }

  fade(on, cb) {
    const f = this.fadeEl;
    f.classList.toggle('on', on);
    if (cb) setTimeout(cb, 420);
  }

  // ------------------------------------------------------------------ dialog
  dialog(lines, onDone) {
    const arr = (Array.isArray(lines) ? lines : [lines]).map((l) => (typeof l === 'string' ? { text: l } : l));
    this.dialogState = { lines: arr, i: 0, shown: 0, onDone, t: 0 };
    this.dialogEl.hidden = false;
    this.renderDialog();
  }
  renderDialog() {
    const d = this.dialogState;
    const line = d.lines[d.i];
    const txt = line.text.slice(0, Math.floor(d.shown));
    this.dialogEl.innerHTML = `${line.who ? `<div class="who">${line.who}</div>` : ''}<div class="text">${txt}</div><div class="next">${d.shown >= line.text.length ? (d.i < d.lines.length - 1 ? '▶' : '■') : ''}</div>`;
  }
  updateDialog(dt) {
    const d = this.dialogState;
    if (!d) return;
    const line = d.lines[d.i];
    const A = this.game.input;
    const adv = A.actions.jump.pressed || A.actions.interact.pressed || A.menu.confirm.pressed || A.actions.throw.pressed || this._tapAdvance;
    this._tapAdvance = false;
    if (d.shown < line.text.length) {
      const before = Math.floor(d.shown);
      d.shown = Math.min(line.text.length, d.shown + dt * 55);
      if (Math.floor(d.shown) !== before && before % 3 === 0) this.game.audio.play('talk');
      if (adv && d.shown > 2) d.shown = line.text.length;
      this.renderDialog();
      return;
    }
    if (adv) {
      d.i++;
      d.shown = 0;
      if (d.i >= d.lines.length) {
        this.dialogEl.hidden = true;
        this.dialogState = null;
        d.onDone?.();
        return;
      }
      this.renderDialog();
    }
  }

  // ------------------------------------------------------------------ title
  showTitle() {
    const g = this.game;
    const hasSave = g.save.hasProgress();
    this.title.innerHTML = `
      <div class="t-wrap">
        <div class="t-logo" aria-label="Moon Odyssey">
          <span class="t-moon">${MOON_SVG('#ffd43b', 84)}</span>
          <h1><span class="w1">MOON</span><span class="w2">ODYSSEY</span></h1>
        </div>
        <p class="t-sub">A 3D cap-throwing platform adventure</p>
        <div class="t-menu" role="menu"></div>
        <p class="t-hint" id="t-hint">Click, press Enter or tap to begin</p>
      </div>
      <p class="t-legal">Unofficial, non-commercial fan game inspired by Super Mario Odyssey. Not affiliated with or endorsed by Nintendo. All models, music and sounds are made in code.</p>`;
    const m = this.title.querySelector('.t-menu');
    const items = [];
    if (hasSave) items.push(['Continue', () => this.game.beginPlay()]);
    items.push([hasSave ? 'New Game' : 'Start Game', () => {
      if (hasSave) {
        this.confirm('Start a new game? Your saved progress will be erased.', () => { g.save.reset(); g.player.setOutfit('classic'); g.loadKingdom('meadow'); g.beginPlay(); });
      } else g.beginPlay();
    }]);
    items.push(['Controls', () => this.showControlsOverlay()]);
    for (const [label, fn] of items) {
      const b = h('button', 't-btn', label);
      b.type = 'button';
      b.addEventListener('click', () => { g.audio.init(); g.audio.play('select'); fn(); });
      m.appendChild(b);
    }
    this.title.hidden = false;
    this.hud.hidden = true;
    this.setItems([...m.querySelectorAll('button')]);
    this.menuOpen = false;
  }
  hideTitle() { this.title.hidden = true; this.hud.hidden = false; this.items = []; this.touch?.show(true); }
  updateTitle(dt) {
    if (!this.title.hidden && !this.menu.hidden) { this.updateMenu(dt); return; }
    if (!this.title.hidden) this.navigate();
  }

  confirm(text, yes) {
    this.openMenu(`<div class="panel confirm"><p>${text}</p><div class="row"><button class="m-btn" data-a="yes">Yes, start over</button><button class="m-btn" data-a="no">Cancel</button></div></div>`, (a) => {
      this.closeMenus(true);
      if (a === 'yes') yes();
      else if (!this.title.hidden) this.setItems([...this.title.querySelectorAll('.t-menu button')]);
    });
  }

  showControlsOverlay() {
    this.openMenu(`<div class="panel">${CONTROLS_HTML}<div class="row"><button class="m-btn" data-a="close">Back</button></div></div>`, () => {
      this.closeMenus(true);
      if (!this.title.hidden) this.setItems([...this.title.querySelectorAll('.t-menu button')]);
    });
  }

  // ------------------------------------------------------------------ generic menu navigation
  setItems(items) {
    this.items = items;
    this.index = 0;
    items.forEach((b, i) => b.addEventListener('mouseenter', () => { this.index = i; this.highlight(); }));
    this.highlight();
  }
  highlight() { this.items.forEach((b, i) => b.classList.toggle('sel', i === this.index)); }
  navigate() {
    const M = this.game.input.menu;
    if (!this.items.length) return;
    if (M.down.pressed || M.right.pressed) { this.index = (this.index + 1) % this.items.length; this.highlight(); this.game.audio.play('menu'); }
    if (M.up.pressed || M.left.pressed) { this.index = (this.index - 1 + this.items.length) % this.items.length; this.highlight(); this.game.audio.play('menu'); }
    if (M.confirm.pressed) { this.game.audio.init(); this.items[this.index]?.click(); }
  }

  openMenu(html, onAction) {
    this.menu.innerHTML = html;
    this.menu.hidden = false;
    this.menuOpen = true;
    this.onAction = onAction;
    const btns = [...this.menu.querySelectorAll('button')];
    btns.forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); this.game.audio.play('select'); onAction?.(b.dataset.a, b); }));
    this.setItems(btns);
  }

  closeMenus(keepState = false) {
    this.menu.hidden = true;
    this.menu.innerHTML = '';
    this.menuOpen = false;
    this.items = [];
  }

  updateMenu(dt) {
    if (this.menu.hidden) return;
    const M = this.game.input.menu, A = this.game.input.actions;
    this.navigate();
    if (M.back.pressed || (A.pause.pressed && this.tab !== undefined)) {
      this.game.audio.play('back');
      if (this.onBack) this.onBack(); else this.onAction?.('close');
    }
    if (this.tab === 'map') this.mapView?.update(dt);
  }

  // ------------------------------------------------------------------ pause menu
  openPause(tab = 'main') {
    const g = this.game;
    g.lockReleaseIgnore = performance.now();
    g.input.releaseLock();
    this.tab = tab;
    const L = g.level, def = L.def;
    const tabs = [['main', 'Pause'], ['map', 'Map'], ['moons', 'Moons'], ['options', 'Options'], ['controls', 'Controls']];
    const nav = tabs.map(([id, label]) => `<button class="tab ${id === tab ? 'on' : ''}" data-a="tab:${id}">${label}</button>`).join('');
    let body = '';
    if (tab === 'main') {
      body = `<div class="pause-main">
        <div class="pk">${def.region || 'Kingdom'}</div><h2>${def.name}</h2>
        <div class="stats">
          <div><span>${MOON_SVG(def.moonColor, 22)}</span><b>${g.save.moonCount(L.id)}</b><small>moons here</small></div>
          <div><span>${MOON_SVG('#ffd43b', 22)}</span><b>${g.save.totalMoons()}</b><small>total moons</small></div>
          <div><span>${COIN_HTML}</span><b>${g.save.data.coins}</b><small>coins</small></div>
          <div><span class="pcoin-icon" style="--pc:${def.purpleColor || '#b25cff'}"></span><b>${g.save.purpleCount(L.id)}/${L.coinField?.purple.length || 0}</b><small>regional coins</small></div>
        </div>
        <div class="col">
          <button class="m-btn primary" data-a="resume">Resume</button>
          <button class="m-btn" data-a="checkpoint">Return to last checkpoint</button>
          <button class="m-btn" data-a="shop">Outfit shop</button>
          <button class="m-btn" data-a="title">Save &amp; quit to title</button>
        </div>
      </div>`;
    } else if (tab === 'map') {
      body = `<div class="map-wrap"><canvas class="map-canvas" width="720" height="720" aria-label="Kingdom map"></canvas><div class="map-side"><h3>${def.name}</h3><p>Click a lit flag to warp there.</p><ul class="cp-list"></ul></div></div>`;
    } else if (tab === 'moons') {
      const list = (def.moonList || L.moonDefs).map((m, i) => {
        const got = g.save.hasMoon(L.id, m.id);
        return `<li class="${got ? 'got' : ''}">${MOON_SVG(got ? def.moonColor : '#3a3a55', 18)}<span>${String(i + 1).padStart(2, '0')}</span><b>${got ? m.name : (m.hint ? '??? <small>' + m.hint + '</small>' : '???')}</b></li>`;
      }).join('');
      body = `<div class="moons-list"><h3>${def.name} · ${g.save.moonCount(L.id)} / ${(def.moonList || L.moonDefs).reduce((a, m) => a + (m.multi ? 3 : 1), 0)}</h3><ol>${list}</ol></div>`;
    } else if (tab === 'options') {
      const S = g.save.data.settings;
      const slider = (k, label) => `<label class="opt"><span>${label}</span><input type="range" id="opt-${k}" min="0" max="1" step="0.05" value="${S[k]}"></label>`;
      body = `<div class="options">
        ${slider('master', 'Master volume')}${slider('music', 'Music')}${slider('sfx', 'Sound effects')}
        <label class="opt"><span>Camera sensitivity</span><input type="range" id="opt-sensitivity" min="0.3" max="2.5" step="0.1" value="${S.sensitivity}"></label>
        <label class="opt chk"><input type="checkbox" id="opt-invertY" ${S.invertY ? 'checked' : ''}><span>Invert camera Y</span></label>
        <label class="opt chk"><input type="checkbox" id="opt-invertX" ${S.invertX ? 'checked' : ''}><span>Invert camera X</span></label>
        <label class="opt"><span>Graphics quality</span><select id="opt-quality">${['auto', 'high', 'medium', 'low'].map((q) => `<option value="${q}" ${S.quality === q ? 'selected' : ''}>${q[0].toUpperCase() + q.slice(1)}</option>`).join('')}</select></label>
      </div>`;
    } else if (tab === 'controls') {
      body = CONTROLS_HTML;
    }
    this.openMenu(`<div class="panel pause"><nav class="tabs">${nav}</nav><div class="tab-body">${body}</div></div>`, (a, btn) => this.pauseAction(a, btn));
    this.onBack = () => (this.tab === 'main' ? this.game.resume() : this.openPause('main'));
    if (tab === 'map') {
      const canvas = this.menu.querySelector('.map-canvas');
      this.mapView = renderMap(g, canvas, this.menu.querySelector('.cp-list'), (cp) => this.warpTo(cp));
    } else this.mapView = null;
    if (tab === 'options') this.bindOptions();
    // focus the first content button rather than the tab bar
    const firstBody = this.items.findIndex((b) => !b.classList.contains('tab'));
    if (firstBody >= 0) { this.index = firstBody; this.highlight(); }
  }

  pauseAction(a) {
    const g = this.game;
    if (!a) return;
    if (a.startsWith('tab:')) { this.openPause(a.slice(4)); return; }
    switch (a) {
      case 'resume': case 'close': g.resume(); break;
      case 'checkpoint': {
        const sp = g.respawnPoint || g.level.spawn;
        g.resume();
        g.player.respawn(sp, sp.facing);
        g.player.hp = Math.max(1, g.player.hp);
        g.cam.snap(sp.x, sp.y, sp.z, sp.facing ?? 0);
        break;
      }
      case 'shop': this.openShop(); break;
      case 'title':
        g.save.write();
        this.closeMenus();
        g.state = 'title';
        g.music.duck(false);
        g.music.play('title');
        this.touch?.show(false);
        this.showTitle();
        break;
    }
  }

  warpTo(cp) {
    const g = this.game;
    const sp = cp.spawnPos;
    g.resume();
    g.audio.play('warp');
    g.ui.fade(true, () => {
      g.player.respawn(sp, sp.facing);
      g.player.hp = Math.max(g.player.hp, 1);
      g.respawnPoint = { ...sp };
      g.cam.snap(sp.x, sp.y, sp.z, sp.facing ?? 0);
      g.ui.fade(false);
    });
  }

  bindOptions() {
    const g = this.game, S = g.save.data.settings;
    for (const k of ['master', 'music', 'sfx', 'sensitivity']) {
      const el = this.menu.querySelector('#opt-' + k);
      el.addEventListener('input', () => { S[k] = parseFloat(el.value); g.applySettings(); g.save.write(); });
    }
    for (const k of ['invertY', 'invertX']) {
      const el = this.menu.querySelector('#opt-' + k);
      el.addEventListener('change', () => { S[k] = el.checked; g.applySettings(); g.save.write(); });
    }
    const q = this.menu.querySelector('#opt-quality');
    q.addEventListener('change', () => {
      S.quality = q.value; g.save.write();
      g.autoQuality = q.value === 'auto';
      g.quality = q.value === 'auto' ? 'high' : q.value;
      g.applyQuality();
    });
  }

  openShop() {
    const g = this.game, d = g.save.data;
    const cards = OUTFITS.map((o) => {
      const owned = d.outfits.includes(o.id), worn = d.outfit === o.id;
      const P = PALETTES[o.id];
      const sw = `<span class="sw" style="background:linear-gradient(180deg, ${P.cap} 0 45%, ${P.overalls} 45% 100%)"></span>`;
      const label = worn ? 'Wearing' : owned ? 'Wear' : `${COIN_HTML} ${o.price}`;
      return `<button class="shop-item ${worn ? 'worn' : ''}" data-a="outfit:${o.id}">${sw}<b>${o.name}</b><small>${label}</small></button>`;
    }).join('');
    this.openMenu(`<div class="panel shop"><h3>Outfit Shop</h3><p class="wallet">${COIN_HTML} <b>${d.coins}</b> coins</p><div class="shop-grid">${cards}</div><div class="row"><button class="m-btn" data-a="back">Back</button></div></div>`, (a) => {
      if (a === 'back' || a === 'close') { this.openPause('main'); return; }
      if (a?.startsWith('outfit:')) {
        const id = a.slice(7), o = OUTFITS.find((x) => x.id === id);
        if (!d.outfits.includes(id)) {
          if (d.coins < o.price) { this.toast(`You need ${o.price - d.coins} more coins.`); return; }
          d.coins -= o.price; d.outfits.push(id); g.audio.play('buy');
        }
        d.outfit = id; g.save.write();
        g.player.setOutfit(id);
        this.updateHud();
        this.openShop();
      }
    });
    this.onBack = () => this.openPause('main');
  }

  // ------------------------------------------------------------------ ending
  showEnding(first, onDone) {
    const g = this.game;
    const el = h('div', 'ending');
    const total = g.save.totalMoons();
    el.innerHTML = `
      <div class="end-scroll">
        <div class="end-moon">${MOON_SVG('#ffd43b', 120)}</div>
        <h2>The Grand Moon shines again!</h2>
        <p>Bowser is beaten, the sky is bright, and the Odyssey can sail anywhere.</p>
        <dl class="credits">
          <dt>Power Moons collected</dt><dd>${total}</dd>
          <dt>Coins in your pocket</dt><dd>${g.save.data.coins}</dd>
          <dt>Play time</dt><dd>${Math.floor(g.save.data.playTime / 60)} min</dd>
          <dt>Built with</dt><dd>three.js, the Web Audio API and a lot of primitives</dd>
          <dt>Models, music &amp; sound</dt><dd>All generated in code</dd>
          <dt>Inspired by</dt><dd>Super Mario Odyssey (an unofficial fan tribute, not affiliated with Nintendo)</dd>
        </dl>
        <h3>Thanks for playing!</h3>
        <p class="post">${first ? 'A new destination has appeared: the <b>Lunar Kingdom</b>. Board the Odyssey to visit, and keep hunting for moons!' : 'The Lunar Kingdom awaits.'}</p>
        <button class="m-btn primary" data-a="continue">Keep exploring</button>
      </div>`;
    this.root.appendChild(el);
    this.hud.hidden = true;
    const btn = el.querySelector('button');
    const done = () => { el.remove(); this.hud.hidden = false; this.items = []; onDone?.(); };
    btn.addEventListener('click', () => { g.audio.play('select'); done(); });
    setTimeout(() => this.setItems([btn]), 50);
    this.endingEl = el;
  }

  // ------------------------------------------------------------------ travel (the Odyssey)
  openTravel() {
    const g = this.game, d = g.save.data;
    g.nextKingdomUnlocked();
    const cur = g.level.id;
    const cards = KINGDOM_ORDER.map((id, i) => {
      const k = KINGDOMS[id];
      const unlocked = d.unlocked.includes(id);
      const got = g.save.moonCount(id);
      const total = (k.moonList || []).reduce((a, m) => a + (m.multi ? 3 : 1), 0);
      const here = id === cur;
      return `<button class="king ${unlocked ? '' : 'locked'} ${here ? 'here' : ''}" data-a="${unlocked && !here ? 'go:' + id : here ? 'stay' : 'locked:' + id}" style="--kc:${k.moonColor}">
        <span class="k-num">${i + 1}</span>
        <span class="k-orb" style="background:${k.orb || k.moonColor}"></span>
        <b>${unlocked ? k.name : '???'}</b>
        <small>${unlocked ? `${MOON_SVG(k.moonColor, 14)} ${got} / ${total}` : 'Locked'}${here ? ' · You are here' : ''}</small>
      </button>`;
    }).join('');
    const def = g.level.def;
    const need = def.moonsToLeave ?? 0, have = g.save.moonCount(cur);
    const status = have >= need ? `The Odyssey is charged. Pick a destination.` : `Collect ${need - have} more ${def.short || def.name} moon${need - have === 1 ? '' : 's'} to power the Odyssey.`;
    this.openMenu(`<div class="panel travel"><h3>The Odyssey</h3><p class="status">${status}</p><div class="kingdoms">${cards}</div><div class="row"><button class="m-btn" data-a="close">Stay here</button></div></div>`, (a) => {
      if (a === 'close' || a === 'stay') { this.game.resume(); return; }
      if (a.startsWith('locked:')) { this.toast('Collect more Power Moons to unlock this kingdom.'); return; }
      if (a.startsWith('go:')) {
        if (have < need && !d.unlocked.includes(a.slice(3))) { this.toast(status); return; }
        this.game.travelTo(a.slice(3));
      }
    });
    this.onBack = () => this.game.resume();
    this.tab = 'travel';
  }

  update(dt) {
    if (this.game.state === 'play') this.renderHealth(false);
    if (this.endingEl && this.endingEl.isConnected) this.navigate();
    this.touch?.update(dt);
  }
}

export const CONTROLS_HTML = `<div class="controls-grid">
  <h3>Controls</h3>
  <table>
    <thead><tr><th>Action</th><th>Keyboard &amp; mouse</th><th>Gamepad</th></tr></thead>
    <tbody>
      <tr><td>Move</td><td>W A S D</td><td>Left stick</td></tr>
      <tr><td>Camera</td><td>Mouse (click to lock) or arrow keys · wheel zooms</td><td>Right stick</td></tr>
      <tr><td>Jump</td><td>Space (hold for height)</td><td>A / B</td></tr>
      <tr><td>Throw Cappy</td><td>Left click, F or J (hold to keep him out)</td><td>X / Y</td></tr>
      <tr><td>Crouch · Ground pound · Release capture</td><td>Shift or C</td><td>ZL / ZR</td></tr>
      <tr><td>Talk · Board the Odyssey</td><td>E</td><td>RB</td></tr>
      <tr><td>Center camera</td><td>Q or R</td><td>LB</td></tr>
      <tr><td>Pause · Map</td><td>Esc or P · M or Tab</td><td>Start · Back</td></tr>
    </tbody>
  </table>
  <h3>Moves</h3>
  <ul class="moves">
    <li><b>Double &amp; triple jump</b> Jump again right as you land while running.</li>
    <li><b>Long jump</b> Run, crouch, then jump.</li>
    <li><b>Backflip</b> Crouch while standing still, then jump.</li>
    <li><b>Side flip</b> Run, reverse direction, and jump during the skid.</li>
    <li><b>Ground pound</b> Crouch in midair. Jump right after landing for a ground-pound jump.</li>
    <li><b>Dive</b> Throw Cappy during a ground pound.</li>
    <li><b>Cap jump</b> Throw Cappy in the air, then jump into him to bounce.</li>
    <li><b>Wall jump</b> Slide down a wall and jump.</li>
    <li><b>Roll</b> Crouch and throw Cappy. Throw again to keep rolling.</li>
    <li><b>Capture</b> Throw Cappy at an enemy to take control of it.</li>
  </ul>
</div>`;
