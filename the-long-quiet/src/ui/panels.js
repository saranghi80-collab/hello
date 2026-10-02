// DOM overlays: title, intro, transmissions, survey cards, journal, pause, settings, death.

import { DEPARTURE_YEAR } from '../story/text.js';

const $ = (id) => document.getElementById(id);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export class Panels {
  constructor(game) {
    this.game = game;
    this.title = $('title');
    this.intro = $('intro');
    this.trans = $('transmission');
    this.survey = $('survey');
    this.journal = $('journal');
    this.pause = $('pause');
    this.help = $('help');
    this.death = $('death');
    this.writer = $('writer');
    this.loading = $('loading');
    this.queue = [];
    this.transOpen = false;
    this.typing = null;

    $('btn-continue').addEventListener('click', () => game.continueGame());
    $('btn-new').addEventListener('click', () => this.confirmNew());
    $('btn-new-confirm').addEventListener('click', () => { $('new-confirm').hidden = true; game.newGame(); });
    $('btn-new-cancel').addEventListener('click', () => { $('new-confirm').hidden = true; });
    $('btn-controls').addEventListener('click', () => this.toggleHelp(true));
    $('btn-settings-title').addEventListener('click', () => this.openSettings());
    $('trans-close').addEventListener('click', () => this.closeTransmission());
    $('survey-close').addEventListener('click', () => { this.survey.hidden = true; });
    $('journal-close').addEventListener('click', () => this.toggleJournal(false));
    $('help-close').addEventListener('click', () => this.toggleHelp(false));
    $('btn-resume').addEventListener('click', () => this.togglePause(false));
    $('btn-settings').addEventListener('click', () => this.openSettings());
    $('btn-help').addEventListener('click', () => this.toggleHelp(true));
    $('btn-quit').addEventListener('click', () => { this.togglePause(false); game.saveGame(); game.toTitle(); });
    $('btn-reload').addEventListener('click', () => { this.death.hidden = true; game.continueGame(); });
    $('btn-death-title').addEventListener('click', () => { this.death.hidden = true; game.toTitle(); });
    $('settings-close').addEventListener('click', () => { $('settings').hidden = true; });
    $('writer-save').addEventListener('click', () => this.saveWriter());
    $('writer-skip').addEventListener('click', () => { this.writer.hidden = true; });
    this.journal.querySelectorAll('[data-jtab]').forEach((b) => b.addEventListener('click', () => this.renderJournal(b.dataset.jtab)));
    this.bindSettings();
  }

  get modalOpen() {
    return !this.journal.hidden || !this.pause.hidden || !this.help.hidden || !$('settings').hidden || !this.writer.hidden || !this.death.hidden;
  }

  showTitle(hasSave) {
    this.title.hidden = false;
    $('btn-continue').hidden = !hasSave;
    $('btn-new').textContent = hasSave ? 'New voyage' : 'Begin';
    $('btn-new').classList.toggle('primary', !hasSave);
    $('btn-continue').classList.toggle('primary', hasSave);
  }
  hideTitle() { this.title.hidden = true; $('new-confirm').hidden = true; }

  confirmNew() {
    if (this.game.hasSave()) $('new-confirm').hidden = false;
    else this.game.newGame();
  }

  async playIntro(lines) {
    const box = $('intro-lines');
    box.innerHTML = '';
    this.intro.hidden = false;
    this.intro.classList.remove('out');
    let skip = false;
    const onKey = () => { skip = true; };
    window.addEventListener('keydown', onKey, { once: true });
    this.intro.addEventListener('click', onKey, { once: true });
    for (let i = 0; i < lines.length && !skip; i++) {
      const p = document.createElement('p');
      p.textContent = lines[i];
      if (i === 0) p.className = 'meta';
      box.appendChild(p);
      requestAnimationFrame(() => p.classList.add('in'));
      await this.sleep(i === 0 ? 2200 : 3200, () => skip);
    }
    if (!skip) await this.sleep(1500, () => skip);
    this.intro.classList.add('out');
    await this.sleep(1600, () => false);
    this.intro.hidden = true;
    window.removeEventListener('keydown', onKey);
  }

  sleep(ms, cancel) {
    return new Promise((res) => {
      const t0 = performance.now();
      const tick = () => {
        if (cancel() || performance.now() - t0 >= ms) res();
        else setTimeout(tick, 50);
      };
      tick();
    });
  }

  // ---------- transmissions ----------
  transmission({ kicker, title, body, meta, after }) {
    this.queue.push({ kicker, title, body, meta, after });
    if (!this.transOpen) this.nextTransmission();
  }

  nextTransmission() {
    const m = this.queue.shift();
    if (!m) { this.transOpen = false; this.trans.hidden = true; return; }
    this.transOpen = true;
    this.trans.hidden = false;
    $('trans-kicker').textContent = m.kicker;
    $('trans-title').textContent = m.title;
    $('trans-meta').textContent = m.meta || '';
    const body = $('trans-body');
    body.textContent = '';
    this.current = m;
    const text = m.body;
    let i = 0;
    clearInterval(this.typing);
    this.typing = setInterval(() => {
      i += 2;
      body.textContent = text.slice(0, i);
      if (i % 6 === 0) this.game.audio.tone(2400 + Math.random() * 200, 0.015, 0.004);
      if (i >= text.length) { clearInterval(this.typing); body.textContent = text; }
    }, 22);
    this.game.audio.message();
  }

  closeTransmission() {
    clearInterval(this.typing);
    const after = this.current?.after;
    this.current = null;
    this.nextTransmission();
    if (after) after();
  }

  surveyCard(b, note, extra) {
    this.survey.hidden = false;
    $('survey-name').textContent = b.name;
    $('survey-type').textContent = extra.typeLabel;
    $('survey-note').textContent = note;
    const rows = [
      ['Radius', `${Math.round(b.radius / 1000).toLocaleString('en-US')} km`],
      ['Gravity', `${(b.gravity / 9.81).toFixed(2)} g`],
      ['Surface', `${Math.round(b.tempK)} K`],
      ['Atmosphere', b.atmosphere && b.solid ? `${b.pressure < 0.1 ? (b.pressure * 1000).toFixed(0) + ' mbar' : b.pressure.toFixed(1) + ' atm'}` : b.solid ? 'None' : 'Deep'],
      ['Day', b.spin.locked ? 'Tidally locked' : `${(Math.abs(b.spin.period) / 3600).toFixed(1)} h`],
      ['Landing', b.solid ? (b.landable ? (b.type === 'venus' || b.type === 'lava' ? 'Hazardous' : 'Possible') : 'Gravity too high') : 'No surface'],
    ];
    $('survey-data').innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
    clearTimeout(this.surveyTimer);
    this.surveyTimer = setTimeout(() => { this.survey.hidden = true; }, 16000);
  }

  // ---------- journal ----------
  toggleJournal(force) {
    const open = force ?? this.journal.hidden;
    this.journal.hidden = !open;
    if (open) { this.game.input.releaseLock(); this.renderJournal(this.jtab || 'log'); }
    this.game.audio.blip();
  }

  renderJournal(tab) {
    this.jtab = tab;
    const g = this.game;
    this.journal.querySelectorAll('[data-jtab]').forEach((b) => b.setAttribute('aria-selected', b.dataset.jtab === tab ? 'true' : 'false'));
    const el = $('journal-body');
    if (tab === 'log') {
      const entries = g.logs.filter((l) => l.kind !== 'home').slice().reverse();
      el.innerHTML = entries.length ? entries.map((l) => `<article><p class="eyebrow">${escapeHtml(l.where)} · ${escapeHtml(l.when)}</p><h4>${escapeHtml(l.title)}</h4><p class="${l.kind === 'own' ? 'own' : ''}">${escapeHtml(l.text)}</p></article>`).join('')
        : '<p class="dim">Nothing recorded yet. Scan signals to read what others left behind.</p>';
    } else if (tab === 'home') {
      const entries = g.logs.filter((l) => l.kind === 'home').slice().reverse();
      el.innerHTML = entries.length ? entries.map((l) => `<article class="letter"><p class="eyebrow">${escapeHtml(l.title)} · ${escapeHtml(l.when)}</p><p>${escapeHtml(l.text)}</p></article>`).join('')
        : '<p class="dim">No messages have caught up with you yet. Light from home is slow.</p>';
      el.innerHTML += `<p class="dim small">Messages travel at the speed of light. One sent N years after you left reaches you only when the years elapsed at home, minus your distance from Sol in light-years, add up to N.</p>`;
    } else if (tab === 'survey') {
      const st = g.stats();
      el.innerHTML = `<dl class="stats">
        <dt>Systems visited</dt><dd>${st.systems}</dd>
        <dt>Bodies surveyed</dt><dd>${st.bodies}</dd>
        <dt>Worlds with life</dt><dd>${st.life}</dd>
        <dt>Signals found</dt><dd>${st.signals}</dd>
        <dt>Beacons on Marrow's route</dt><dd>${st.trail} of ${st.trailTotal}</dd>
        </dl>
        <h4>Surveyed</h4>
        <ul class="plain">${st.list.map((x) => `<li><span>${escapeHtml(x.name)}</span><span class="dim">${escapeHtml(x.type)}${x.life ? ' · life' : ''}</span></li>`).join('') || '<li class="dim">None yet.</li>'}</ul>`;
    } else {
      const st = g.stats();
      el.innerHTML = `<dl class="stats">
        <dt>Distance from Sol</dt><dd>${st.fromSol.toFixed(1)} ly</dd>
        <dt>Distance travelled</dt><dd>${st.travelled.toFixed(1)} ly</dd>
        <dt>Jumps</dt><dd>${st.jumps}</dd>
        <dt>Time aboard</dt><dd>${st.shipTime}</dd>
        <dt>Year at home</dt><dd>${st.homeYear}</dd>
        <dt>Galactic radius</dt><dd>${Math.round(st.galR).toLocaleString('en-US')} ly from the core</dd>
        </dl>
        <p class="dim small">The galaxy is about 100,000 light-years across. You will not see most of it. Nobody will.</p>`;
    }
  }

  // ---------- pause / help / settings ----------
  togglePause(force) {
    const open = force ?? this.pause.hidden;
    this.pause.hidden = !open;
    if (open) this.game.input.releaseLock();
  }

  toggleHelp(force) {
    const open = force ?? this.help.hidden;
    this.help.hidden = !open;
    if (open) this.game.input.releaseLock();
  }

  openSettings() {
    $('settings').hidden = false;
    this.game.input.releaseLock();
  }

  bindSettings() {
    const g = this.game;
    const s = g.settings;
    const q = $('set-quality'), inv = $('set-invert'), sens = $('set-sens'), vol = $('set-volume'), mus = $('set-music'), fov = $('set-fov');
    q.value = s.quality; inv.checked = s.invertY; sens.value = s.sensitivity; vol.value = s.volume; mus.value = s.music; fov.value = s.fov;
    q.addEventListener('change', () => { s.qualityLocked = true; });
    const apply = () => {
      s.quality = q.value; s.invertY = inv.checked; s.sensitivity = Number(sens.value); s.volume = Number(vol.value); s.music = Number(mus.value); s.fov = Number(fov.value);
      g.applySettings();
    };
    [q, inv, sens, vol, mus, fov].forEach((el) => el.addEventListener('input', apply));
    q.addEventListener('change', apply);
  }

  // ---------- death ----------
  showDeath(cause, st) {
    this.death.hidden = false;
    this.game.input.releaseLock();
    $('death-cause').textContent = cause;
    $('death-stats').textContent = `${st.systems} systems · ${st.bodies} worlds surveyed · ${st.fromSol.toFixed(1)} ly from Sol · year ${st.homeYear} at home`;
  }

  // ---------- your own beacon ----------
  openWriter() {
    this.writer.hidden = false;
    this.game.input.releaseLock();
    $('writer-text').value = '';
    setTimeout(() => $('writer-text').focus(), 50);
  }

  saveWriter() {
    const text = $('writer-text').value.trim();
    this.writer.hidden = true;
    if (text) this.game.leaveBeacon(text);
  }

  loadingText(s) {
    if (!s) { this.loading.hidden = true; return; }
    this.loading.hidden = false;
    this.loading.textContent = s;
  }
}

export function calendar(homeYears) {
  const y = DEPARTURE_YEAR + homeYears;
  return `${Math.floor(y)}.${String(Math.floor((y % 1) * 10)).padStart(1, '0')}`;
}
