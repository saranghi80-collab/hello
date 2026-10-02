import { Rng } from '../core/rng.js';

const ONSET = ['', '', 'b', 'br', 'c', 'd', 'dr', 'f', 'g', 'h', 'k', 'kh', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 'st', 't', 'th', 'tr', 'v', 'z', 'ess', 'or', 'al', 'ul', 'y', 'w', 'sk', 'vh'];
const VOWEL = ['a', 'a', 'e', 'e', 'i', 'o', 'o', 'u', 'ae', 'ei', 'ia', 'io', 'au', 'y'];
const CODA = ['', '', '', 'n', 'r', 's', 'l', 'th', 'm', 'nd', 'rn', 'sk', 'll', 'ss', 'x', 'nt', 'rd'];

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

export function properName(seed) {
  const r = new Rng(seed ^ 0x51ed270b);
  for (let attempt = 0; attempt < 8; attempt++) {
    const syl = r.chance(0.55) ? 2 : r.chance(0.7) ? 3 : 1;
    let s = '';
    for (let i = 0; i < syl; i++) {
      s += r.pick(ONSET) + r.pick(VOWEL) + (i === syl - 1 || r.chance(0.3) ? r.pick(CODA) : '');
    }
    s = s.replace(/(.)\1\1+/g, '$1$1');
    if (s.length >= 4 && s.length <= 10 && !/[aeiouy]{3}/.test(s)) return cap(s);
  }
  return cap('ostra');
}

const CATALOGS = ['OSC', 'OSC', 'OSC', 'HVK', 'Lund', 'TSR'];

export function catalogName(seed) {
  const r = new Rng(seed ^ 0x2c1b3c6d);
  const cat = r.pick(CATALOGS);
  const n = r.int(1000, 99999);
  return cat === 'Lund' ? `Lund ${r.int(2, 900)}` : `${cat} ${n}`;
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
export function planetLetter(i) { return 'bcdefghijklmnop'[i] || `p${i}`; }
export function moonNumeral(i) { return ROMAN[i] || `${i + 1}`; }
