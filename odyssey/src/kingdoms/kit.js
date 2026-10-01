// Convenience helpers for authoring kingdoms.
import * as THREE from 'three';
import { CoinField, Moon, MoonShard, Heart } from '../entities/collectibles.js';
import { Block, Checkpoint, Spring, Pipe, Sign, OdysseyShip, MovingPlatform, FallingPlatform, TimerSwitch, GhostPlatform, Breakable } from '../entities/props.js';
import { SparkleSpot } from '../entities/misc.js';

export function kit(L) {
  const cf = L.coinField || (L.coinField = new CoinField(L));
  const gy = (x, z, from = 300) => L.groundAt(x, z, from);
  const K = {
    gy,
    coin(x, y, z) { cf.add(x, y, z); },
    // coins in a line, y = height above ground if ground:true
    line(x0, z0, x1, z1, n, y = 0.9, opts = {}) {
      for (let i = 0; i < n; i++) {
        const t = n === 1 ? 0 : i / (n - 1);
        const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
        const yy = opts.abs ? (opts.y0 ?? y) + ((opts.y1 ?? y) - (opts.y0 ?? y)) * t : gy(x, z, opts.from ?? 300) + y;
        cf.add(x, yy, z);
      }
    },
    ring(x, y, z, r, n, abs = false) {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r;
        cf.add(cx, abs ? y : gy(cx, cz) + y, cz);
      }
    },
    vring(x, y, z, r, n, rot = 0) {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        cf.add(x + Math.cos(a) * r * Math.cos(rot), y + Math.sin(a) * r, z - Math.cos(a) * r * Math.sin(rot));
      }
    },
    arc(x0, z0, x1, z1, n, yBase, peak) {
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        cf.add(x0 + (x1 - x0) * t, yBase + Math.sin(t * Math.PI) * peak, z0 + (z1 - z0) * t);
      }
    },
    purple(id, x, y, z, abs = false) { cf.addPurple(id, x, abs ? y : gy(x, z) + y, z); },
    moon(def) {
      if (def.ground !== undefined) def.y = gy(def.x, def.z) + def.ground;
      return new Moon(L, def);
    },
    shards(moonEntity, positions) {
      const group = { moon: moonEntity };
      for (const [x, y, z, abs] of positions) new MoonShard(L, x, abs ? y : gy(x, z) + y, z, group);
      return group;
    },
    block(x, yBottom, z, kind = 'question', content = 'coin', opts = {}) { return new Block(L, x, yBottom, z, kind, content, opts); },
    blocks(x, yBottom, z, pattern, dx = 1.5, rot = 0, contents = {}) {
      // pattern string: q = ?, b = brick, h = hidden, space = gap
      const out = [];
      [...pattern].forEach((ch, i) => {
        if (ch === ' ') return;
        const off = (i - (pattern.length - 1) / 2) * dx;
        const bx = x + Math.cos(rot) * off, bz = z - Math.sin(rot) * off;
        const kind = ch === 'q' ? 'question' : ch === 'b' ? 'brick' : ch === 'h' ? 'hidden' : 'question';
        out.push(new Block(L, bx, yBottom, bz, kind, contents[i] ?? (ch === 'b' ? 'none' : 'coin')));
      });
      return out;
    },
    checkpoint(id, name, x, z, facing = 0, y = null) { return new Checkpoint(L, id, name, x, y ?? gy(x, z), z, facing); },
    ship(x, z, rot = 0, y = null) { return new OdysseyShip(L, x, y ?? gy(x, z), z, rot); },
    sign(x, z, lines, facing = 0, y = null) { return new Sign(L, x, y ?? gy(x, z), z, lines, facing); },
    spring(x, z, power = 24, y = null) { return new Spring(L, x, y ?? gy(x, z), z, power); },
    pipe(x, z, opts = {}, y = null) { return new Pipe(L, x, y ?? gy(x, z), z, opts); },
    heart(x, z, y = null, big = false) { return new Heart(L, x, y ?? gy(x, z), z, big); },
    mover(path, w, d, opts) { return new MovingPlatform(L, path, w, d, opts); },
    faller(x, yTop, z, w, d, opts) { return new FallingPlatform(L, x, yTop, z, w, d, opts); },
    timerSwitch(x, z, opts, y = null) { return new TimerSwitch(L, x, y ?? gy(x, z), z, opts); },
    ghost(x, yTop, z, w, h, d, color) { return new GhostPlatform(L, x, yTop, z, w, h, d, color); },
    breakable(x, z, opts = {}, y = null) { return new Breakable(L, x, y ?? gy(x, z), z, opts); },
    sparkle(x, z, onPound, y = null) { return new SparkleSpot(L, x, y ?? gy(x, z), z, onPound); },
    v3: (x, y, z) => new THREE.Vector3(x, y, z),
  };
  return K;
}
