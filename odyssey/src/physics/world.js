// Spatial hash of colliders + aggregate queries used by bodies, entities and the camera.
const CELL = 12;
const key = (i, j) => (i + 32768) * 65536 + (j + 32768);

export class PhysicsWorld {
  constructor() {
    this.cells = new Map();
    this.dynamic = [];
    this.terrain = [];    // heightfields (always tested)
    this.all = [];
    this._qid = 1;
    this._out = { x: 0, z: 0, nx: 0, nz: 0, top: 0 };
    this._n = { x: 0, y: 1, z: 0 };
    this._list = [];
  }

  add(c) {
    this.all.push(c);
    if (c.type === 'heightfield') { this.terrain.push(c); return c; }
    if (c.dynamic) { this.dynamic.push(c); return c; }
    const i0 = Math.floor(c.minX / CELL), i1 = Math.floor(c.maxX / CELL);
    const j0 = Math.floor(c.minZ / CELL), j1 = Math.floor(c.maxZ / CELL);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const k = key(i, j);
      let arr = this.cells.get(k);
      if (!arr) this.cells.set(k, (arr = []));
      arr.push(c);
    }
    return c;
  }

  remove(c) {
    const ai = this.all.indexOf(c);
    if (ai >= 0) this.all.splice(ai, 1);
    if (c.type === 'heightfield') { this.terrain.splice(this.terrain.indexOf(c), 1); return; }
    if (c.dynamic) { const i = this.dynamic.indexOf(c); if (i >= 0) this.dynamic.splice(i, 1); return; }
    const i0 = Math.floor(c.minX / CELL), i1 = Math.floor(c.maxX / CELL);
    const j0 = Math.floor(c.minZ / CELL), j1 = Math.floor(c.maxZ / CELL);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const arr = this.cells.get(key(i, j));
      if (!arr) continue;
      const idx = arr.indexOf(c);
      if (idx >= 0) arr.splice(idx, 1);
    }
  }

  // Collect colliders whose AABB overlaps the region (static via hash + all dynamic + terrain).
  query(minX, minZ, maxX, maxZ, minY = -Infinity, maxY = Infinity) {
    const out = this._list;
    out.length = 0;
    const qid = ++this._qid;
    const i0 = Math.floor(minX / CELL), i1 = Math.floor(maxX / CELL);
    const j0 = Math.floor(minZ / CELL), j1 = Math.floor(maxZ / CELL);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const arr = this.cells.get(key(i, j));
      if (!arr) continue;
      for (let n = 0; n < arr.length; n++) {
        const c = arr[n];
        if (c._qid === qid || !c.enabled) continue;
        c._qid = qid;
        if (c.maxX < minX || c.minX > maxX || c.maxZ < minZ || c.minZ > maxZ || c.maxY < minY || c.minY > maxY) continue;
        out.push(c);
      }
    }
    for (const c of this.dynamic) {
      if (!c.enabled) continue;
      if (c.maxX < minX || c.minX > maxX || c.maxZ < minZ || c.minZ > maxZ || c.maxY < minY || c.minY > maxY) continue;
      out.push(c);
    }
    for (const c of this.terrain) if (c.enabled) out.push(c);
    return out;
  }

  // Highest floor surface with y in [yMin, yMax]. Returns {y, n, c} in `res` or null.
  floor(x, z, yMin, yMax, footR, res, ignore = null) {
    const list = this.query(x - footR, z - footR, x + footR, z + footR, yMin - 1, yMax + 1);
    let best = -Infinity, bestC = null;
    const n = this._n;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c === ignore || !c.solid) continue;
      const y = c.floor(x, z, yMin, yMax, footR, n);
      if (y > best) {
        best = y; bestC = c;
        if (res) { res.nx = n.x; res.ny = n.y; res.nz = n.z; }
      }
    }
    if (bestC === null) return null;
    if (res) { res.y = best; res.c = bestC; return res; }
    return { y: best, c: bestC };
  }

  // Ground height straight down from y (for shadows, spawning, AI).
  groundBelow(x, z, y, res) {
    return this.floor(x, z, -1e6, y, 0.01, res);
  }

  ceil(x, z, yMin, yMax, footR) {
    const list = this.query(x - footR, z - footR, x + footR, z + footR, yMin - 1, yMax + 1);
    let best = Infinity, bestC = null;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (!c.solid) continue;
      const y = c.ceil(x, z, yMin, yMax, footR);
      if (y < best) { best = y; bestC = c; }
    }
    return bestC ? { y: best, c: bestC } : null;
  }

  // Push a vertical cylinder out of walls. Returns the dominant contact (or null). Mutates pos.
  pushOut(pos, r, yMin, yMax, contacts) {
    let first = null;
    const out = this._out;
    for (let iter = 0; iter < 3; iter++) {
      const list = this.query(pos.x - r, pos.z - r, pos.x + r, pos.z + r, yMin, yMax);
      let any = false;
      for (let i = 0; i < list.length; i++) {
        const c = list[i];
        if (!c.solid) continue;
        if (c.push(pos.x, pos.z, r, yMin, yMax, out)) {
          pos.x += out.x; pos.z += out.z;
          any = true;
          const contact = { c, nx: out.nx, nz: out.nz, top: out.top };
          if (!first) first = contact;
          if (contacts) contacts.push(contact);
        }
      }
      if (!any) break;
    }
    return first;
  }

  raycast(ox, oy, oz, dx, dy, dz, maxT, filter = null) {
    const ex = ox + dx * maxT, ey = oy + dy * maxT, ez = oz + dz * maxT;
    const list = this.query(Math.min(ox, ex), Math.min(oz, ez), Math.max(ox, ex), Math.max(oz, ez), Math.min(oy, ey), Math.max(oy, ey));
    let best = maxT, bestC = null, nx = 0, ny = 0, nz = 0;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (filter && !filter(c)) continue;
      const t = c.raycast(ox, oy, oz, dx, dy, dz, best);
      if (t < best) { best = t; bestC = c; nx = c.hitN.x; ny = c.hitN.y; nz = c.hitN.z; }
    }
    if (!bestC) return null;
    return { t: best, c: bestC, nx, ny, nz, x: ox + dx * best, y: oy + dy * best, z: oz + dz * best };
  }

  // Save previous transforms of moving colliders (call at the start of each frame).
  snapshotDynamic() {
    for (const c of this.dynamic) c.snapshot();
  }
}
