// Canvas-generated textures (no image assets).
import * as THREE from 'three';
import { rng } from '../core/math.js';

const cache = new Map();
function canvasTex(key, w, h, draw, opts = {}) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opts.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  cache.set(key, t);
  return t;
}

export function emblemTexture(letter = 'M', fg = '#e3262c', bg = '#ffffff') {
  return canvasTex('emblem' + letter + fg + bg, 128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = bg;
    g.beginPath(); g.arc(w / 2, h / 2, w / 2 - 2, 0, Math.PI * 2); g.fill();
    g.fillStyle = fg;
    // Hand-drawn chunky "M" so it doesn't depend on fonts being loaded.
    if (letter === 'M') {
      g.beginPath();
      const s = w / 128;
      const pts = [[28, 98], [36, 30], [52, 30], [64, 62], [76, 30], [92, 30], [100, 98], [84, 98], [79, 58], [68, 88], [60, 88], [49, 58], [44, 98]];
      g.moveTo(pts[0][0] * s, pts[0][1] * s);
      for (const p of pts.slice(1)) g.lineTo(p[0] * s, p[1] * s);
      g.closePath(); g.fill();
    } else {
      g.font = `bold ${w * 0.6}px sans-serif`;
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(letter, w / 2, h / 2 + 4);
    }
  });
}

export function radialGlowTexture(color = '#ffffff') {
  return canvasTex('glow' + color, 128, 128, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, color);
    gr.addColorStop(0.25, color + 'cc');
    gr.addColorStop(1, color + '00');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  });
}

export function sparkleTexture() {
  return canvasTex('sparkle', 64, 64, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.2, 'rgba(255,255,255,0.6)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.95)';
    g.beginPath();
    g.moveTo(cx, 2); g.lineTo(cx + 4, cy); g.lineTo(cx, h - 2); g.lineTo(cx - 4, cy); g.closePath(); g.fill();
    g.beginPath();
    g.moveTo(2, cy); g.lineTo(cx, cy + 4); g.lineTo(w - 2, cy); g.lineTo(cx, cy - 4); g.closePath(); g.fill();
  });
}

export function shadowBlobTexture() {
  return canvasTex('blob', 64, 64, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, 'rgba(0,0,0,0.75)');
    gr.addColorStop(0.55, 'rgba(0,0,0,0.55)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  });
}

// Tileable value-noise texture (grayscale) for detail.
export function noiseTexture(size = 256, seed = 7, scale = 8) {
  return canvasTex('noise' + size + seed + scale, size, size, (g, w, h) => {
    const r = rng(seed);
    const octs = [];
    for (let o = 0, m = scale; o < 4; o++, m *= 2) {
      const grid = new Float32Array(m * m);
      for (let i = 0; i < grid.length; i++) grid[i] = r();
      octs.push({ m, grid });
    }
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      let v = 0, amp = 0.5;
      for (const { m, grid } of octs) {
        const fx = (x / w) * m, fy = (y / h) * m;
        const xi = Math.floor(fx), yi = Math.floor(fy), xf = fx - xi, yf = fy - yi;
        const sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
        const x0 = xi % m, x1 = (xi + 1) % m, y0 = yi % m, y1 = (yi + 1) % m;
        const a = grid[y0 * m + x0], b = grid[y0 * m + x1], c = grid[y1 * m + x0], d = grid[y1 * m + x1];
        v += amp * (a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy);
        amp *= 0.5;
      }
      const c = Math.max(0, Math.min(255, (v / 0.9375) * 255));
      const i = (y * w + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = c; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, { repeat: true, linear: true });
}

// Brick / block faces
export function blockTexture(kind) {
  return canvasTex('block' + kind, 128, 128, (g, w, h) => {
    if (kind === 'question') {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, '#ffd84a'); gr.addColorStop(1, '#f2a516');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#a8620a'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10);
      g.fillStyle = '#a8620a';
      for (const [x, y] of [[16, 16], [w - 16, 16], [16, h - 16], [w - 16, h - 16]]) { g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill(); }
      g.font = 'bold 84px "Arial Black", Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = '#7a3e00'; g.fillText('?', w / 2 + 4, h / 2 + 8);
      g.fillStyle = '#fff7d6'; g.fillText('?', w / 2, h / 2 + 4);
    } else if (kind === 'used') {
      g.fillStyle = '#9b6a3c'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#5e3a1a'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10);
      g.fillStyle = '#5e3a1a';
      for (const [x, y] of [[16, 16], [w - 16, 16], [16, h - 16], [w - 16, h - 16]]) { g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill(); }
    } else if (kind === 'brick') {
      g.fillStyle = '#c4622d'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#7a3415';
      const rows = 4, rh = h / rows;
      for (let r = 0; r < rows; r++) {
        g.fillRect(0, r * rh - 2, w, 4);
        const off = r % 2 ? w / 4 : 0;
        for (let x = off; x < w + 1; x += w / 2) g.fillRect(x - 2, r * rh, 4, rh);
      }
      g.fillStyle = 'rgba(255,220,180,0.25)';
      for (let r = 0; r < rows; r++) g.fillRect(0, r * rh + 3, w, 3);
    } else if (kind === 'stone') {
      g.fillStyle = '#b9b1a3'; g.fillRect(0, 0, w, h);
      const r = rng(11);
      for (let i = 0; i < 90; i++) {
        g.fillStyle = `rgba(${80 + r() * 60},${75 + r() * 50},${70 + r() * 40},${0.15 + r() * 0.2})`;
        g.beginPath(); g.arc(r() * w, r() * h, 2 + r() * 10, 0, 7); g.fill();
      }
      g.strokeStyle = 'rgba(60,50,40,0.5)'; g.lineWidth = 3; g.strokeRect(2, 2, w - 4, h - 4);
    } else if (kind === 'crate') {
      g.fillStyle = '#b8823f'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#6b4519'; g.lineWidth = 10; g.strokeRect(6, 6, w - 12, h - 12);
      g.lineWidth = 9; g.beginPath(); g.moveTo(10, 10); g.lineTo(w - 10, h - 10); g.stroke();
      g.strokeStyle = 'rgba(80,50,20,0.4)'; g.lineWidth = 2;
      for (let y = 20; y < h; y += 18) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    }
  });
}

// Moon-shaped icon for HUD/moon decals
export function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
