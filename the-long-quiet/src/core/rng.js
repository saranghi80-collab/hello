// Deterministic hashing and random numbers. Every star, planet, crater and log entry
// in the galaxy is derived from these, so the same seed always rebuilds the same universe.

export function hash32(...values) {
  let h = 0x811c9dc5 ^ values.length;
  for (let v of values) {
    v = Math.floor(v) | 0;
    h = Math.imul(h ^ (v & 0xffff), 0x01000193);
    h = Math.imul(h ^ (v >>> 16), 0x01000193);
    h ^= h >>> 13;
    h = Math.imul(h, 0x5bd1e995);
    h ^= h >>> 15;
  }
  return h >>> 0;
}

export function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export class Rng {
  constructor(seed) {
    this.s = (seed >>> 0) || 0x9e3779b9;
  }
  next() {
    // mulberry32
    let t = (this.s = (this.s + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a, b) { return a + (b - a) * this.next(); }
  int(a, b) { return a + Math.floor((b - a + 1) * this.next()); }
  chance(p) { return this.next() < p; }
  pick(arr) { return arr[Math.floor(this.next() * arr.length)]; }
  gauss() {
    const u = Math.max(1e-12, this.next());
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * this.next());
  }
  // log-uniform between a and b
  logRange(a, b) { return Math.exp(this.range(Math.log(a), Math.log(b))); }
  poisson(lambda) {
    if (lambda > 30) return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * this.gauss()));
    const L = Math.exp(-lambda);
    let k = 0, p = 1;
    do { k++; p *= this.next(); } while (p > L);
    return k - 1;
  }
  weighted(items, key = 'w') {
    let total = 0;
    for (const it of items) total += it[key];
    let r = this.next() * total;
    for (const it of items) { r -= it[key]; if (r <= 0) return it; }
    return items[items.length - 1];
  }
}
