// 8-bit wall sections: enter a pipe in a wall and play a flat, retro side-scroller on the wall itself.
import * as THREE from 'three';
import { Entity } from './entity.js';
import { BoxCollider, CylinderCollider } from '../physics/colliders.js';
import { mat, ModelBuilder, G } from '../gfx/model.js';
import { clamp, damp } from '../core/math.js';

const PX = 16; // pixels per tile on the wall texture
const SOLID = new Set(['#', 'B', '?', 'M', '=', 'P', 'p', 'Q', 'K']);

// ---------------------------------------------------------------- pixel art (original designs)
const PAL = {
  R: '#e0302a', r: '#a3121c', B: '#2a4bd7', S: '#f8c69a', H: '#5a3418', K: '#16121c', W: '#ffffff', Y: '#ffd23a',
  N: '#8a5a2b', n: '#6b3d1c', G: '#2fb84a', g: '#1d7a30', L: '#9cf0a8', O: '#e88a3a', o: '#a8520e', D: '#3a2a1a',
  T: '#f3d6a8', A: '#9a5a2c', E: '#7a7a88', e: '#b8b8c8', F: '#ff8a1a', f: '#ffe066',
};
const HERO = {
  stand: [
    '.....RRRRRR.....',
    '...RRRRRRRRRR...',
    '..RRRRRWWRRRRR..',
    '..RRRRRRRRRRRRRR',
    '...HHSSSSSKS....',
    '..HSSSSSSSKSS...',
    '..HSSSSSSSSSSSS.',
    '...SHHHHHHHSS...',
    '....SSSSSSSS....',
    '...RRRBRRBRRR...',
    '..RRRRBBBBRRRR..',
    '..WWRBBYBBYBRWW.',
    '..WWBBBBBBBBBWW.',
    '....BBBBBBBB....',
    '....BBB..BBB....',
    '...HHHH..HHHH...',
  ],
  walk1: [
    '.....RRRRRR.....',
    '...RRRRRRRRRR...',
    '..RRRRRWWRRRRR..',
    '..RRRRRRRRRRRRRR',
    '...HHSSSSSKS....',
    '..HSSSSSSSKSS...',
    '..HSSSSSSSSSSSS.',
    '...SHHHHHHHSS...',
    '....SSSSSSSS....',
    '...RRRBRRBRRWW..',
    '..WRRRBBBBRRWW..',
    '.WWRBBYBBYBBR...',
    '..WBBBBBBBBBB...',
    '...BBBBBBBBBB...',
    '..BBB....BBBB...',
    '.HHHH.....HHHH..',
  ],
  walk2: [
    '.....RRRRRR.....',
    '...RRRRRRRRRR...',
    '..RRRRRWWRRRRR..',
    '..RRRRRRRRRRRRRR',
    '...HHSSSSSKS....',
    '..HSSSSSSSKSS...',
    '..HSSSSSSSSSSSS.',
    '...SHHHHHHHSS...',
    '....SSSSSSSS....',
    '....RRBRRBRR....',
    '...RRRBBBBRRR...',
    '...WWBYBBYBWW...',
    '...WWBBBBBBWW...',
    '.....BBBBBB.....',
    '.....BBBBBB.....',
    '....HHHHHHHH....',
  ],
  jump: [
    '.....RRRRRR..WW.',
    '...RRRRRRRRRRWW.',
    '..RRRRRWWRRRRRR.',
    '..RRRRRRRRRRRRRR',
    '...HHSSSSSKS.RR.',
    '..HSSSSSSSKSSRR.',
    '..HSSSSSSSSSSSR.',
    '...SHHHHHHHSSR..',
    '....SSSSSSSSR...',
    '..WWRRBRRBRRR...',
    '..WWRRBBBBRR....',
    '....BBYBBYBB....',
    '...BBBBBBBBBB.HH',
    '..BBBBBBBBBBBBHH',
    '.HHBBBB...BBB...',
    '.HHH............',
  ],
};
const MUSH = {
  a: [
    '......AAAA......',
    '....AAAAAAAA....',
    '...AAAAAAAAAA...',
    '..AAWKAAAAKWAA..',
    '.AAAWKKAAKKWAAA.',
    '.AAAWWKAAKWWAAA.',
    'AAAAAAAAAAAAAAAA',
    'AAAAAAAAAAAAAAAA',
    '.AAAAAAAAAAAAAA.',
    '...TTTTTTTTTT...',
    '..TTTTTTTTTTTT..',
    '..TTTTTTTTTTTT..',
    '...TTTTTTTTTT...',
    '..DDDD....DDDD..',
    '.DDDDD....DDDDD.',
    '.DDDD......DDDD.',
  ],
  b: [
    '......AAAA......',
    '....AAAAAAAA....',
    '...AAAAAAAAAA...',
    '..AAWKAAAAKWAA..',
    '.AAAWKKAAKKWAAA.',
    '.AAAWWKAAKWWAAA.',
    'AAAAAAAAAAAAAAAA',
    'AAAAAAAAAAAAAAAA',
    '.AAAAAAAAAAAAAA.',
    '...TTTTTTTTTT...',
    '..TTTTTTTTTTTT..',
    '..TTTTTTTTTTTT..',
    '...TTTTTTTTTT...',
    '...DDDD..DDDD...',
    '...DDDDD.DDDDD..',
    '....DDDD..DDDD..',
  ],
};

function drawSprite(g, rows, x, y, flip = false, scale = 1) {
  for (let j = 0; j < rows.length; j++) {
    const row = rows[j];
    for (let i = 0; i < row.length; i++) {
      const c = row[flip ? row.length - 1 - i : i];
      if (c === '.') continue;
      g.fillStyle = PAL[c] || '#f0f';
      g.fillRect(x + i * scale, y + j * scale, scale, scale);
    }
  }
}

function drawTile(g, ch, x, y, theme) {
  const s = PX;
  switch (ch) {
    case '#': {
      g.fillStyle = theme.ground; g.fillRect(x, y, s, s);
      g.fillStyle = theme.groundDark;
      g.fillRect(x, y + s - 2, s, 2); g.fillRect(x + s - 2, y, 2, s);
      g.fillRect(x + 4, y + 5, 3, 2); g.fillRect(x + 10, y + 10, 2, 3);
      g.fillStyle = theme.groundLight; g.fillRect(x, y, s, 2); g.fillRect(x, y, 2, s);
      break;
    }
    case '=': {
      g.fillStyle = theme.hard; g.fillRect(x, y, s, s);
      g.fillStyle = '#00000044'; g.fillRect(x + 2, y + s - 3, s - 2, 3); g.fillRect(x + s - 3, y + 2, 3, s - 2);
      g.fillStyle = '#ffffff55'; g.fillRect(x + 1, y + 1, s - 4, 2); g.fillRect(x + 1, y + 1, 2, s - 4);
      break;
    }
    case 'B': {
      g.fillStyle = PAL.O; g.fillRect(x, y, s, s);
      g.fillStyle = PAL.o;
      g.fillRect(x, y + 7, s, 2); g.fillRect(x, y + 15, s, 1);
      g.fillRect(x + 7, y, 2, 7); g.fillRect(x + 3, y + 9, 2, 6); g.fillRect(x + 12, y + 9, 2, 6);
      break;
    }
    case '?': case 'M': {
      g.fillStyle = PAL.Y; g.fillRect(x, y, s, s);
      g.fillStyle = PAL.o; g.fillRect(x, y + s - 1, s, 1); g.fillRect(x + s - 1, y, 1, s);
      g.fillStyle = PAL.o;
      [[1, 1], [s - 3, 1], [1, s - 3], [s - 3, s - 3]].forEach(([dx, dy]) => g.fillRect(x + dx, y + dy, 2, 2));
      g.fillStyle = '#7a3e00';
      g.fillRect(x + 5, y + 3, 6, 2); g.fillRect(x + 10, y + 4, 2, 4); g.fillRect(x + 7, y + 7, 3, 2); g.fillRect(x + 7, y + 9, 2, 2); g.fillRect(x + 7, y + 12, 2, 2);
      break;
    }
    case 'U': {
      g.fillStyle = '#9b6a3c'; g.fillRect(x, y, s, s);
      g.fillStyle = '#5e3a1a'; g.fillRect(x, y + s - 1, s, 1); g.fillRect(x + s - 1, y, 1, s);
      [[1, 1], [s - 3, 1], [1, s - 3], [s - 3, s - 3]].forEach(([dx, dy]) => g.fillRect(x + dx, y + dy, 2, 2));
      break;
    }
    case 'P': case 'p': {
      g.fillStyle = PAL.G; g.fillRect(x, y, s, s);
      g.fillStyle = PAL.g; g.fillRect(ch === 'P' ? x : x + s - 3, y, 3, s);
      g.fillStyle = PAL.L; g.fillRect(ch === 'P' ? x + 4 : x + 2, y, 2, s);
      break;
    }
    case 'Q': case 'K': {
      // pipe lip (top of a pipe)
      g.fillStyle = PAL.G; g.fillRect(x, y + 2, s, s - 2);
      g.fillStyle = PAL.g; g.fillRect(x, y + 2, s, 2); g.fillRect(x, y + s - 2, s, 2);
      g.fillStyle = PAL.L; g.fillRect(ch === 'Q' ? x + 3 : x + 1, y + 4, 2, s - 6);
      break;
    }
    case '^': {
      g.fillStyle = '#c8c8d8';
      for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(x + i * 4, y + s); g.lineTo(x + i * 4 + 2, y + 6); g.lineTo(x + i * 4 + 4, y + s); g.fill(); }
      break;
    }
    case 'l': {
      g.fillStyle = '#ff6a1a'; g.fillRect(x, y, s, s);
      g.fillStyle = '#e8401a'; for (let i = 0; i < s; i += 4) g.fillRect(x + i + ((y / s) % 2) * 2, y + 6 + ((i / 4) % 2) * 4, 2, 2);
      break;
    }
    case 'L': {
      g.fillStyle = '#ff6a1a'; g.fillRect(x, y + 4, s, s - 4);
      g.fillStyle = '#ffd23a'; for (let i = 0; i < s; i += 4) g.fillRect(x + i, y + 4 + ((i / 4) % 2) * 2, 2, 2);
      break;
    }
    case '~': {
      g.fillStyle = '#ffffff55'; g.fillRect(x, y + 6, s, 6);
      break;
    }
  }
}

function drawCoin(g, x, y, t) {
  const w = [6, 4, 2, 4][Math.floor(t * 8) % 4];
  g.fillStyle = PAL.Y; g.fillRect(x + 8 - w / 2 - 1, y + 2, w + 2, 12);
  g.fillStyle = PAL.f; g.fillRect(x + 8 - w / 2, y + 3, Math.max(1, w - 1), 10);
  g.fillStyle = PAL.o; g.fillRect(x + 8 - 1, y + 5, 1, 6);
}
const MOON = [
  '.......oooo.....',
  '.....ooYYYYo....',
  '....oYYYffo.....',
  '...oYYYfo.......',
  '...oYYYo........',
  '..oYYYfo........',
  '..oYYYfo........',
  '..oYYYfo........',
  '..oYYYYo........',
  '..oYYYYfo.......',
  '...oYYYYfoo.....',
  '...oYYYYYYfoooo.',
  '....oYYYYYYYYYo.',
  '.....ooYYYYYoo..',
  '.......ooooo....',
  '................',
];
function drawMoon(g, x, y, t) {
  drawSprite(g, MOON, x, y);
  if (Math.floor(t * 5) % 2) { g.fillStyle = '#ffffff'; g.fillRect(x + 11, y + 3, 1, 3); g.fillRect(x + 10, y + 4, 3, 1); }
}
// A sideways pipe end, one tile tall. dir > 0: the opening faces right.
function drawSidePipe(g, x, y, dir) {
  const s = PX;
  g.fillStyle = PAL.G; g.fillRect(x, y + 2, s, s - 4);
  g.fillStyle = PAL.g; g.fillRect(x, y + 2, s, 1); g.fillRect(x, y + s - 3, s, 1);
  g.fillStyle = PAL.L; g.fillRect(x, y + 5, s, 2);
  const lx = dir > 0 ? x + s - 5 : x;
  g.fillStyle = PAL.G; g.fillRect(lx, y, 5, s);
  g.fillStyle = PAL.g; g.fillRect(lx, y, 5, 1); g.fillRect(lx, y + s - 1, 5, 1); g.fillRect(dir > 0 ? lx : lx + 4, y, 1, s);
  g.fillStyle = PAL.L; g.fillRect(lx + 2, y + 2, 1, s - 5);
  g.fillStyle = '#0b2a10'; g.fillRect(dir > 0 ? x + s - 1 : x, y + 1, 1, s - 2);
}

const THEMES = {
  overworld: { ground: '#c06a2a', groundDark: '#7a3a12', groundLight: '#f0a060', hard: '#b0743a', bg: 'rgba(92,148,252,0.0)' },
  castle: { ground: '#8a8a9a', groundDark: '#4a4a5a', groundLight: '#c0c0d0', hard: '#6a6a7a', bg: 'rgba(0,0,0,0)' },
  desert: { ground: '#e8b46a', groundDark: '#a8723a', groundLight: '#fff0c0', hard: '#c48a4a', bg: 'rgba(0,0,0,0)' },
  ice: { ground: '#9fd8f0', groundDark: '#4a8ab8', groundLight: '#ffffff', hard: '#7ab8d8', bg: 'rgba(0,0,0,0)' },
};

// ---------------------------------------------------------------- the wall section
const smooth = (k) => k * k * (3 - 2 * k);

export class Wall2D extends Entity {
  // opts: { x, y, z, rot (direction the wall faces), map: [rows top->bottom], tile, theme, moon }
  constructor(level, opts) {
    super(level, opts.x, opts.y, opts.z);
    this.kind = 'wall2d';
    this.T = opts.tile ?? 0.75;
    this.rot = opts.rot ?? 0;
    this.F = new THREE.Vector3(Math.sin(this.rot), 0, Math.cos(this.rot));
    this.R = new THREE.Vector3(Math.cos(this.rot), 0, -Math.sin(this.rot));
    this.origin = new THREE.Vector3(opts.x, opts.y, opts.z);
    this.theme = THEMES[opts.theme || 'overworld'];
    this.moon = opts.moon || null;
    this.rows = opts.map.slice();
    this.H = this.rows.length;
    this.W = Math.max(...this.rows.map((r) => r.length));
    this.grid = [];
    this.coins = [];
    this.goombas0 = [];
    this.start = { u: 0, v: 1 };
    this.exit = null;
    for (let j = 0; j < this.H; j++) {
      const v = this.H - 1 - j;
      const row = this.rows[j].padEnd(this.W, ' ');
      for (let u = 0; u < this.W; u++) {
        let ch = row[u];
        if (ch === 'c') { this.coins.push({ u, v, alive: true }); ch = ' '; }
        else if (ch === 'g') { this.goombas0.push({ u: u + 0.05, v, vu: -2, vv: 0, alive: true, squash: 0, ground: false }); ch = ' '; }
        else if (ch === 'S') { this.start = { u, v }; ch = ' '; }
        else if (ch === 'E') { this.exit = { u, v }; ch = ' '; }
        this.setTile(u, v, ch);
      }
    }
    this.goombas = this.goombas0.map((e) => ({ ...e }));
    this.pipes = [];
    // canvases
    this.staticCanvas = document.createElement('canvas');
    this.staticCanvas.width = this.W * PX; this.staticCanvas.height = this.H * PX;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.W * PX; this.canvas.height = this.H * PX;
    this.ctx = this.canvas.getContext('2d');
    this.redrawStatic();
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.magFilter = THREE.NearestFilter;
    this.tex.minFilter = THREE.NearestFilter;
    this.tex.generateMipmaps = false;
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(this.W * this.T, this.H * this.T),
      new THREE.MeshBasicMaterial({ map: this.tex, transparent: true, alphaTest: 0.05, toneMapped: false }),
    );
    this.center = this.worldAt(this.W / 2, this.H / 2, 0.04);
    plane.position.copy(this.center).sub(this.pos);
    plane.rotation.y = this.rot;
    plane.renderOrder = 2;
    this.obj.position.copy(this.pos);
    this.obj.add(plane);
    this.plane = plane;
    this.radius = 0; this.height = 0;
    this.active = false;
    // camera distance that fits the whole height of the section on screen
    this.camDist = clamp(this.H * this.T * 1.05, 9, 16);
    this.m = { u: 0, v: 0, vu: 0, vv: 0, face: 1, ground: false, anim: 0, inv: 0 };
    this.spawn = { u: this.start.u + 1.05, v: this.start.v, face: 1 };
    this.t = 0;
    this.idleAcc = 0;
    this.blockBumps = [];
    this.moonSprite = null;
    this.draw();
  }

  tile(u, v) { if (u < 0 || u >= this.W || v < 0 || v >= this.H) return v < 0 ? ' ' : '='; return this.grid[v * this.W + u] || ' '; }
  setTile(u, v, ch) { this.grid[v * this.W + u] = ch; }
  worldAt(u, v, off = 0.05) {
    return this.origin.clone().addScaledVector(this.R, u * this.T).addScaledVector(new THREE.Vector3(0, 1, 0), v * this.T).addScaledVector(this.F, off);
  }

  redrawStatic() {
    const g = this.staticCanvas.getContext('2d');
    const w = this.staticCanvas.width, h = this.staticCanvas.height;
    g.clearRect(0, 0, w, h);
    // faint backdrop with a border so the 8-bit zone reads on the wall
    g.fillStyle = 'rgba(20, 16, 40, 0.16)';
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(20, 16, 40, 0.28)';
    g.fillRect(0, 0, w, 2); g.fillRect(0, h - 2, w, 2); g.fillRect(0, 0, 2, h); g.fillRect(w - 2, 0, 2, h);
    for (let v = 0; v < this.H; v++) for (let u = 0; u < this.W; u++) {
      const ch = this.tile(u, v);
      if (ch !== ' ') drawTile(g, ch === 'M' ? '?' : ch, u * PX, (this.H - 1 - v) * PX, this.theme);
    }
    drawSidePipe(g, this.start.u * PX, (this.H - 1 - this.start.v) * PX, 1);
    if (this.exit) drawSidePipe(g, this.exit.u * PX, (this.H - 1 - this.exit.v) * PX, -1);
  }

  draw() {
    const g = this.ctx;
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);
    g.drawImage(this.staticCanvas, 0, 0);
    const Hp = this.H * PX;
    for (const c of this.coins) if (c.alive) drawCoin(g, c.u * PX, Hp - (c.v + 1) * PX, this.t);
    for (const b of this.blockBumps) {
      // re-draw bumped blocks offset upward
      const off = Math.sin(b.t * Math.PI) * 5;
      g.clearRect(b.u * PX, Hp - (b.v + 1) * PX - 6, PX, PX + 6);
      drawTile(g, this.tile(b.u, b.v), b.u * PX, Hp - (b.v + 1) * PX - off, this.theme);
    }
    for (const e of this.goombas) {
      if (!e.alive) continue;
      const fr = e.squash > 0 ? MUSH.a.slice(8) : Math.floor(this.t * 6) % 2 ? MUSH.a : MUSH.b;
      drawSprite(g, fr, Math.round(e.u * PX), Math.round(Hp - (e.v + 1) * PX) + (e.squash > 0 ? 8 : 0));
    }
    if (this.moonSprite) {
      const ms = this.moonSprite;
      g.save();
      // while rising, only the part above the block shows (it slides out from behind it)
      if (ms.rising) { g.beginPath(); g.rect(0, 0, this.canvas.width, Hp - ms.top * PX); g.clip(); }
      const bob = ms.rising ? 0 : Math.round(Math.sin(this.t * 4) * 1.5);
      drawMoon(g, Math.round(ms.u * PX), Math.round(Hp - (ms.v + 1) * PX) + bob, this.t);
      g.restore();
    }
    if (this.active) {
      const m = this.m;
      const frame = !m.ground ? HERO.jump : Math.abs(m.vu) > 0.3 ? (Math.floor(m.anim) % 2 ? HERO.walk1 : HERO.walk2) : HERO.stand;
      if (!(m.inv > 0 && Math.floor(m.inv * 15) % 2)) drawSprite(g, frame, Math.round(m.u * PX - 2), Math.round(Hp - (m.v + 1) * PX), m.face < 0);
    }
    this.tex.needsUpdate = true;
  }

  // ---- enter / exit ----
  enter(player, fromExit = false) {
    const game = this.game;
    this.active = true;
    // enemies start fresh on every visit; coins and used blocks stay as they are
    this.goombas = this.goombas0.map((e) => ({ ...e }));
    this.spawn = fromExit && this.exit ? { u: this.exit.u - 0.85, v: this.exit.v, face: -1 } : { u: this.start.u + 1.05, v: this.start.v, face: 1 };
    this.placeHero();
    player.mode2d = this;
    player.visible = false;
    player.root.visible = false;
    player.cappy.reset();
    for (const p of this.pipes) p.obj.visible = false;
    game.audio.play('pipe');
    game.ui.captureHint('8-bit mode · Move left and right, Jump to hop · find the exit pipe', { top: true, hideAfter: 6 });
    this.camFrom = game.camera.position.clone();
    this.lookFrom = game.cam.look.clone();
    this.camBlend = 0;
    this.camU = this.camTargetU();
    this.syncPlayer(player);
  }
  placeHero() {
    const m = this.m, s = this.spawn;
    m.u = s.u; m.v = s.v; m.vu = 0; m.vv = 0; m.face = s.face; m.ground = false; m.inv = 0;
  }
  leave(player, toExit = true) {
    const game = this.game;
    this.active = false;
    player.mode2d = null;
    player.visible = true;
    player.root.visible = true;
    for (const p of this.pipes) p.obj.visible = true;
    const spot = toExit && this.exit ? this.exit : this.start;
    const wp = this.worldAt(spot.u + 0.5, spot.v, 2.1);
    const gy = this.level.world.groundBelow(wp.x, wp.z, wp.y + 1.5);
    player.body.setPos(wp.x, gy ? gy.y + 0.1 : wp.y, wp.z);
    player.body.vel.set(0, 0, 0);
    player.facing = this.rot;
    player.setState('air');
    player.airKind = 'fall';
    player.invuln = Math.max(player.invuln, 1);
    // camera stays on the open side, looking back at the wall
    game.cam.endCinematic();
    game.cam.snap(player.pos.x, player.pos.y, player.pos.z, this.rot + Math.PI);
    game.audio.play('pipe');
    game.ui.captureHint(null);
    this.draw();
  }

  // Drop out of 8-bit mode without moving the player (warps, respawns).
  abort(player) {
    this.active = false;
    player.mode2d = null;
    player.visible = true;
    player.root.visible = true;
    for (const p of this.pipes) p.obj.visible = true;
    this.game.cam.cine = null;
    this.game.ui.captureHint(null);
    this.draw();
  }

  syncPlayer(player) {
    // keep the 3D body roughly at the sprite (for HUD/map/water checks), without physics
    const wp = this.worldAt(this.m.u + 0.4, this.m.v, 0.6);
    player.body.pos.copy(wp);
    player.body.vel.set(0, 0, 0);
  }

  camTargetU() {
    const cam = this.game.camera;
    const visibleW = (2 * this.camDist * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * cam.aspect) / this.T;
    const half = Math.min(this.W / 2, visibleW / 2 - 0.5);
    return clamp(this.m.u, half, this.W - half);
  }

  // Goombas patrol and turn at walls and ledges.
  stepGoomba(e, dt) {
    if (e.squash > 0) { e.squash += dt; if (e.squash > 0.4) e.alive = false; return; }
    e.vv = Math.max(-22, e.vv - 50 * dt);
    if (e.ground) {
      const front = e.vu > 0 ? e.u + 0.95 : e.u - 0.05;
      if (!SOLID.has(this.tile(Math.floor(front), Math.floor(e.v - 0.5)))) e.vu = -e.vu;
    }
    if (this.moveBody(e, dt, 0.9, 0.9, false)) e.vu = -e.vu;
    if (e.v < -2) e.alive = false;
  }

  // While the player is nearby in 3D, the wall keeps playing (enemies walk, coins spin).
  update(dt) {
    if (this.active) return;
    const p = this.game.player.pos;
    if (Math.hypot(p.x - this.center.x, p.z - this.center.z) > 55) return;
    this.idleAcc += dt;
    if (this.idleAcc < 1 / 12) return;
    const st = this.idleAcc;
    this.idleAcc = 0;
    this.t += st;
    for (const e of this.goombas) if (e.alive) this.stepGoomba(e, st);
    this.draw();
  }

  update2d(dt, player) {
    const A = this.game.input.actions, m = this.m;
    this.t += dt;
    // input
    const ix = Math.abs(this.game.input.move.x) > 0.25 ? Math.sign(this.game.input.move.x) : 0;
    const target = ix * 6.2;
    m.vu = ix ? damp(m.vu, target, 9, dt) : damp(m.vu, 0, 12, dt);
    if (ix) m.face = ix;
    if (m.ground && player.jumpBuffer > 0) { m.vv = 15.5; m.ground = false; player.jumpBuffer = 0; this.game.audio.play('jump'); }
    const g = m.vv > 0 && A.jump.down ? 26 : 50;
    m.vv = Math.max(-22, m.vv - g * dt);
    m.anim += Math.abs(m.vu) * dt * 1.6;
    if (m.inv > 0) m.inv -= dt;
    this.moveBody(m, dt, 0.78, 0.95, true);
    // coins
    for (const c of this.coins) {
      if (c.alive && Math.abs(c.u + 0.5 - (m.u + 0.39)) < 0.75 && Math.abs(c.v + 0.5 - (m.v + 0.47)) < 0.9) { c.alive = false; this.game.addCoins(1); }
    }
    // goombas
    for (const e of this.goombas) {
      if (!e.alive) continue;
      this.stepGoomba(e, dt);
      if (!e.alive || e.squash > 0) continue;
      if (Math.abs(e.u + 0.45 - (m.u + 0.39)) < 0.82 && Math.abs(e.v + 0.45 - (m.v + 0.47)) < 0.9) {
        if (m.vv < 0 && m.v > e.v + 0.4) { e.squash = 0.01; m.vv = A.jump.down ? 14 : 10; this.game.audio.play('stomp'); this.game.addCoins(1); }
        else if (m.inv <= 0) this.hurt(player, e.u < m.u ? 1 : -1);
        if (!this.active) return;
      }
    }
    // hazards
    const hz = this.tile(Math.floor(m.u + 0.39), Math.floor(m.v + 0.1));
    if (hz === 'L' || hz === 'l') {
      // lava burns and bounces you back up, like in 3D
      if (m.inv <= 0) { this.hurt(player, 0); if (!this.active) return; }
      m.vv = 14; m.ground = false;
      this.game.audio.play('fire');
    } else if (hz === '^' && m.inv <= 0) { this.hurt(player, -m.face); if (!this.active) return; }
    // bumped blocks animation
    for (const b of this.blockBumps) b.t += dt * 5;
    this.blockBumps = this.blockBumps.filter((b) => b.t < 1);
    // moon: slides up out of its block, then waits to be touched
    if (this.moonSprite) {
      const ms = this.moonSprite;
      if (ms.rising) { ms.v = Math.min(ms.top, ms.v + dt * 2.4); if (ms.v >= ms.top) ms.rising = false; }
      else if (Math.abs(ms.u + 0.5 - (m.u + 0.39)) < 0.95 && Math.abs(ms.v + 0.5 - (m.v + 0.47)) < 1.05) {
        this.moonSprite = null;
        this.game.collectMoon2D(this.moon);
      }
    }
    // fell into a pit
    if (m.v < -1.5) {
      player.hp -= 1;
      this.game.audio.play('hurt');
      this.game.onPlayerHurt();
      if (player.hp <= 0) { player.hp = 0; this.leave(player, false); player.die('hurt'); return; }
      this.placeHero();
      m.inv = 1.5;
    }
    // exit pipe
    if (this.exit && Math.abs(this.exit.u + 0.5 - (m.u + 0.39)) < 0.7 && Math.abs(this.exit.v - m.v) < 0.8) { this.leave(player, true); return; }
    // or head back into the entry pipe
    if (m.u < this.start.u + 0.35 && ix < 0 && Math.abs(m.v - this.start.v) < 0.6) { this.leave(player, false); return; }
    // camera faces the wall and scrolls with the hero
    const cam = this.game.camera;
    this.camU = damp(this.camU ?? m.u, this.camTargetU(), 6, dt);
    const look = this.worldAt(this.camU, this.H / 2, 0);
    const pos = look.clone().addScaledVector(this.F, this.camDist);
    if (this.camBlend < 1) {
      this.camBlend = Math.min(1, this.camBlend + dt * 1.6);
      const e = smooth(this.camBlend);
      pos.lerpVectors(this.camFrom, pos, e);
      look.lerpVectors(this.lookFrom, look, e);
    }
    this.game.cam.cine = { pos, look, blend: 0, t: 1, from: pos.clone(), fromLook: look.clone() };
    this.game.cam.look.copy(look);
    cam.position.copy(pos);
    cam.lookAt(look);
    this.syncPlayer(player);
    this.draw();
  }

  hurt(player, dir) {
    const m = this.m;
    player.hp -= 1;
    this.game.audio.play('hurt');
    this.game.onPlayerHurt();
    m.inv = 2;
    m.vu = dir * 5; m.vv = 8;
    if (player.hp <= 0) { player.hp = 0; this.leave(player, false); player.die('hurt'); }
  }

  // AABB vs tile grid. Returns true if a horizontal wall was hit.
  moveBody(b, dt, w, h, isHero) {
    let hitWall = false;
    // horizontal
    b.u += b.vu * dt;
    const v0 = Math.floor(b.v + 0.02), v1 = Math.floor(b.v + h - 0.02);
    if (b.vu > 0) {
      const u = Math.floor(b.u + w);
      for (let v = v0; v <= v1; v++) if (SOLID.has(this.tile(u, v))) { b.u = u - w - 0.001; if (isHero) b.vu = 0; hitWall = true; break; }
    } else if (b.vu < 0) {
      const u = Math.floor(b.u);
      for (let v = v0; v <= v1; v++) if (SOLID.has(this.tile(u, v))) { b.u = u + 1.001; if (isHero) b.vu = 0; hitWall = true; break; }
    }
    if (b.u < 0) { b.u = 0; hitWall = true; }
    if (b.u + w > this.W) { b.u = this.W - w; hitWall = true; }
    // vertical
    b.v += b.vv * dt;
    const u0 = Math.floor(b.u + 0.04), u1 = Math.floor(b.u + w - 0.04);
    b.ground = false;
    if (b.vv <= 0) {
      const v = Math.floor(b.v);
      for (let u = u0; u <= u1; u++) if (SOLID.has(this.tile(u, v))) { b.v = v + 1; b.vv = 0; b.ground = true; break; }
    } else {
      const v = Math.floor(b.v + h);
      // bump the block closest to the middle of the head
      const mid = b.u + w / 2;
      let hit = -1;
      for (let u = u0; u <= u1; u++) if (SOLID.has(this.tile(u, v)) && (hit < 0 || Math.abs(u + 0.5 - mid) < Math.abs(hit + 0.5 - mid))) hit = u;
      if (hit >= 0) {
        b.v = v - h - 0.001; b.vv = 0;
        if (isHero) this.bump(hit, v);
      }
    }
    return hitWall;
  }

  bump(u, v) {
    const ch = this.tile(u, v);
    if (ch === '?' || ch === 'M') {
      this.setTile(u, v, 'U');
      this.blockBumps.push({ u, v, t: 0 });
      if (ch === 'M' && this.moon && !this.moon.collected && !this.game.save.hasMoon(this.level.id, this.moon.id)) {
        this.moonSprite = { u, v, top: v + 1, rising: true };
        this.game.audio.play('moonappear');
      } else { this.game.addCoins(1); this.game.audio.play('block'); }
      this.redrawStatic();
    } else if (ch === 'B') {
      this.setTile(u, v, ' ');
      this.game.audio.play('break');
      const wp = this.worldAt(u + 0.5, v + 0.5, 0.3);
      this.game.fx?.debris(wp.x, wp.y, wp.z, 8, [0.9, 0.5, 0.25]);
      // a goomba standing on a broken brick gets knocked out
      for (const e of this.goombas) if (e.alive && !e.squash && Math.abs(e.u + 0.45 - (u + 0.5)) < 0.9 && Math.abs(e.v - (v + 1)) < 0.3) { e.alive = false; this.game.addCoins(1); }
      this.redrawStatic();
    } else {
      this.game.audio.play('bump');
    }
  }
}

// A green pipe sticking out of the wall: walk into its mouth to go 2D.
export class WallPipe extends Entity {
  constructor(level, section, opts = {}) {
    const spot = opts.atExit ? section.exit : section.start;
    const mouth = section.worldAt(spot.u + 0.5, spot.v + 0.5, 0);
    super(level, mouth.x, mouth.y, mouth.z);
    this.section = section;
    this.atExit = !!opts.atExit;
    this.kind = 'wallpipe';
    section.pipes.push(this);
    const g = new THREE.Group();
    const B = new ModelBuilder();
    const green = mat('#2fb84a', { roughness: 0.35 });
    B.add(g, G.cyl(0.62, 0.62, 1.2, 20), green, { p: [0, 0, 0.6], r: [Math.PI / 2, 0, 0] });
    B.add(g, G.cyl(0.78, 0.78, 0.35, 20), green, { p: [0, 0, 1.2], r: [Math.PI / 2, 0, 0] });
    B.add(g, G.cyl(0.6, 0.6, 0.02, 20), mat('#0b2a10'), { p: [0, 0, 1.38], r: [Math.PI / 2, 0, 0] });
    B.build();
    g.rotation.y = section.rot;
    this.obj.add(g);
    this.radius = 1.3; this.height = 1.6;
    this.pos.y -= 0.8;
    this.mouthPos = mouth.clone().addScaledVector(section.F, 1.4);
    const top = new BoxCollider(mouth.x + section.F.x * 0.7, mouth.y, mouth.z + section.F.z * 0.7, 0.75, 0.75, 0.7, section.rot);
    this.addCollider(top);
    this.cool = 0;
  }
  update(dt) {
    if (this.cool > 0) this.cool -= dt;
    const p = this.game.player;
    if (p.capture || p.dead || p.mode2d || this.cool > 0 || this.game.state !== 'play') return;
    const dx = p.pos.x - this.mouthPos.x, dz = p.pos.z - this.mouthPos.z;
    const d = Math.hypot(dx, dz);
    if (d < 1.3 && Math.abs(p.pos.y + 0.6 - this.mouthPos.y) < 1.4) {
      this.game.prompt('Walk into the pipe');
      const F = this.section.F;
      const toward = p.inputMag > 0 ? -(p.inputDir.x * F.x + p.inputDir.z * F.z) : 0;
      if (toward > 0.5 || this.game.input.actions.interact.pressed) {
        for (const q of this.section.pipes) q.cool = 1.5;
        this.section.enter(p, this.atExit);
      }
    }
  }
}
