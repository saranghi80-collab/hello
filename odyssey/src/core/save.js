// Progress persisted to localStorage (guarded: storage may be unavailable).
const KEY = 'moon-odyssey-save-v1';

const DEFAULT = () => ({
  moons: {},        // kingdom -> [moonIds]
  purple: {},       // kingdom -> [coinIds]
  checkpoints: {},  // kingdom -> [ids]
  coins: 0,
  unlocked: ['meadow'],
  current: 'meadow',
  outfit: 'classic',
  outfits: ['classic'],
  flags: {},
  bossesBeaten: [],
  ending: false,
  playTime: 0,
  settings: { master: 0.8, music: 0.5, sfx: 0.75, invertY: false, invertX: false, sensitivity: 1, quality: 'auto' },
});

export class Save {
  constructor() {
    this.data = DEFAULT();
    this.load();
  }
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        const base = DEFAULT();
        this.data = { ...base, ...d, settings: { ...base.settings, ...(d.settings || {}) } };
      }
    } catch (e) { /* storage blocked */ }
  }
  write() {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
  }
  reset() {
    const settings = this.data.settings;
    this.data = DEFAULT();
    this.data.settings = settings;
    this.write();
  }
  hasProgress() { return Object.values(this.data.moons).some((a) => a.length > 0) || this.data.coins > 0; }
  hasMoon(k, id) { return (this.data.moons[k] || []).includes(id); }
  addMoon(k, id) { (this.data.moons[k] ||= []); if (!this.data.moons[k].includes(id)) this.data.moons[k].push(id); this.write(); }
  moonCount(k) { return (this.data.moons[k] || []).length; }
  totalMoons() { return Object.values(this.data.moons).reduce((a, b) => a + b.length, 0); }
  hasPurple(k, id) { return (this.data.purple[k] || []).includes(id); }
  addPurple(k, id) { (this.data.purple[k] ||= []); if (!this.data.purple[k].includes(id)) this.data.purple[k].push(id); this.write(); }
  purpleCount(k) { return (this.data.purple[k] || []).length; }
  hasCheckpoint(k, id) { return (this.data.checkpoints[k] || []).includes(id); }
  addCheckpoint(k, id) { (this.data.checkpoints[k] ||= []); if (!this.data.checkpoints[k].includes(id)) this.data.checkpoints[k].push(id); this.write(); }
  flag(name) { return !!this.data.flags[name]; }
  setFlag(name, v = true) { this.data.flags[name] = v; this.write(); }
}
