// Collision shapes for a kinematic platformer.
// Every collider answers four questions:
//   floor(x,z,yMin,yMax,footR,n)  highest walkable surface in [yMin,yMax] at a column (normal written to n)
//   ceil(x,z,yMin,yMax,footR)     lowest underside in [yMin,yMax]
//   push(x,z,r,yMin,yMax,out)     horizontal push-out for a vertical cylinder body
//   raycast(o,d,maxT)             ray hit distance (normal stored in this.hitN)
import { clamp, lerp } from '../core/math.js';

let NEXT_ID = 1;

class Collider {
  constructor() {
    this.id = NEXT_ID++;
    this.minX = 0; this.maxX = 0; this.minY = 0; this.maxY = 0; this.minZ = 0; this.maxZ = 0;
    this.surface = 'normal'; // normal | ice | sand | snow | lava | poison | water | wood | metal
    this.oneWay = false;     // can be jumped through from below
    this.cam = true;         // blocks the camera
    this.solid = true;
    this.dynamic = false;
    this.entity = null;      // owning entity (blocks, platforms) for hit callbacks
    this.enabled = true;
    this.hitN = { x: 0, y: 1, z: 0 };
    this._qid = 0;
    this.wallJump = true;
    this.grab = true;       // ledges can be grabbed
  }
  // Moving colliders: carry a point riding on top from the previous transform to the current one.
  carry(p) { return 0; }
}

// Box rotated about Y. (cx,cy,cz) center, (hx,hy,hz) half extents, rot = yaw (three.js rotation.y).
export class BoxCollider extends Collider {
  constructor(cx, cy, cz, hx, hy, hz, rot = 0) {
    super();
    this.type = 'box';
    this.hx = hx; this.hy = hy; this.hz = hz;
    this.prev = { x: cx, y: cy, z: cz, rot };
    this.setTransform(cx, cy, cz, rot);
    this.snapshot();
  }
  setTransform(cx, cy, cz, rot = this.rot) {
    this.cx = cx; this.cy = cy; this.cz = cz; this.rot = rot;
    this.c = Math.cos(rot); this.s = Math.sin(rot);
    const ex = Math.abs(this.c) * this.hx + Math.abs(this.s) * this.hz;
    const ez = Math.abs(this.s) * this.hx + Math.abs(this.c) * this.hz;
    this.minX = cx - ex; this.maxX = cx + ex;
    this.minZ = cz - ez; this.maxZ = cz + ez;
    this.minY = cy - this.hy; this.maxY = cy + this.hy;
  }
  snapshot() { this.prev.x = this.cx; this.prev.y = this.cy; this.prev.z = this.cz; this.prev.rot = this.rot; }
  // world -> local (x,z)
  lx(x, z) { const dx = x - this.cx, dz = z - this.cz; return this.c * dx - this.s * dz; }
  lz(x, z) { const dx = x - this.cx, dz = z - this.cz; return this.s * dx + this.c * dz; }
  topAt() { return this.cy + this.hy; }
  _inFoot(x, z, footR) {
    const lx = this.lx(x, z), lz = this.lz(x, z);
    const qx = clamp(lx, -this.hx, this.hx), qz = clamp(lz, -this.hz, this.hz);
    const ddx = lx - qx, ddz = lz - qz;
    return ddx * ddx + ddz * ddz <= footR * footR;
  }
  floor(x, z, yMin, yMax, footR, n) {
    const top = this.cy + this.hy;
    if (top < yMin || top > yMax) return -Infinity;
    if (!this._inFoot(x, z, footR)) return -Infinity;
    if (n) { n.x = 0; n.y = 1; n.z = 0; }
    return top;
  }
  ceil(x, z, yMin, yMax, footR) {
    if (this.oneWay) return Infinity;
    const bot = this.cy - this.hy;
    if (bot < yMin || bot > yMax) return Infinity;
    if (!this._inFoot(x, z, footR)) return Infinity;
    return bot;
  }
  push(x, z, r, yMin, yMax, out) {
    if (this.oneWay) return false;
    const top = this.cy + this.hy, bot = this.cy - this.hy;
    if (top <= yMin || bot >= yMax) return false;
    const lx = this.lx(x, z), lz = this.lz(x, z);
    const qx = clamp(lx, -this.hx, this.hx), qz = clamp(lz, -this.hz, this.hz);
    let px, pz, nlx, nlz;
    if (lx === qx && lz === qz) {
      // Center inside the box footprint: exit along the shallowest axis.
      const dx = this.hx - Math.abs(lx), dz = this.hz - Math.abs(lz);
      if (dx < dz) { nlx = Math.sign(lx) || 1; nlz = 0; px = nlx * (dx + r); pz = 0; }
      else { nlx = 0; nlz = Math.sign(lz) || 1; px = 0; pz = nlz * (dz + r); }
    } else {
      const ddx = lx - qx, ddz = lz - qz;
      const d2 = ddx * ddx + ddz * ddz;
      if (d2 >= r * r) return false;
      const d = Math.sqrt(d2);
      nlx = ddx / d; nlz = ddz / d;
      px = nlx * (r - d); pz = nlz * (r - d);
    }
    // local -> world (rotate by +rot)
    out.x = this.c * px + this.s * pz;
    out.z = -this.s * px + this.c * pz;
    out.nx = this.c * nlx + this.s * nlz;
    out.nz = -this.s * nlx + this.c * nlz;
    out.top = top;
    return true;
  }
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    // to local
    const rx = ox - this.cx, rz = oz - this.cz;
    const lox = this.c * rx - this.s * rz, loz = this.s * rx + this.c * rz, loy = oy - this.cy;
    const ldx = this.c * dx - this.s * dz, ldz = this.s * dx + this.c * dz, ldy = dy;
    let tmin = 0, tmax = maxT, axis = -1, sign = 1;
    const o = [lox, loy, loz], d = [ldx, ldy, ldz], h = [this.hx, this.hy, this.hz];
    for (let i = 0; i < 3; i++) {
      if (Math.abs(d[i]) < 1e-9) {
        if (o[i] < -h[i] || o[i] > h[i]) return Infinity;
      } else {
        let t1 = (-h[i] - o[i]) / d[i], t2 = (h[i] - o[i]) / d[i];
        let s = -1;
        if (t1 > t2) { const tt = t1; t1 = t2; t2 = tt; s = 1; }
        if (t1 > tmin) { tmin = t1; axis = i; sign = s; }
        if (t2 < tmax) tmax = t2;
        if (tmin > tmax) return Infinity;
      }
    }
    if (axis < 0) return Infinity; // origin inside
    const ln = [0, 0, 0]; ln[axis] = sign;
    this.hitN.x = this.c * ln[0] + this.s * ln[2];
    this.hitN.y = ln[1];
    this.hitN.z = -this.s * ln[0] + this.c * ln[2];
    return tmin;
  }
  carry(p) {
    // p: {x,y,z}; returns delta yaw
    const pr = this.prev;
    const dRot = this.rot - pr.rot;
    let x = p.x - pr.x, z = p.z - pr.z;
    if (dRot !== 0) {
      const c = Math.cos(dRot), s = Math.sin(dRot);
      const nx = c * x + s * z, nz = -s * x + c * z;
      x = nx; z = nz;
    }
    p.x = this.cx + x; p.z = this.cz + z; p.y += this.cy - pr.y;
    return dRot;
  }
}

// Ramp: footprint like a box, top surface rises linearly along local +z from y0 to y1; flat bottom at yb.
export class RampCollider extends BoxCollider {
  constructor(cx, cz, hx, hz, rot, yb, y0, y1) {
    const top = Math.max(y0, y1);
    super(cx, (yb + top) / 2, cz, hx, (top - yb) / 2, hz, rot);
    this.type = 'ramp';
    this.yb = yb; this.y0 = y0; this.y1 = y1;
    this.slope = (y1 - y0) / (2 * hz);
    const inv = 1 / Math.sqrt(1 + this.slope * this.slope);
    this.nly = inv; this.nlz = -this.slope * inv; // local normal (0, nly, nlz)
  }
  // Ramps are static: heights are absolute.
  topAtLocal(lz) { return lerp(this.y0, this.y1, (clamp(lz, -this.hz, this.hz) + this.hz) / (2 * this.hz)); }
  floor(x, z, yMin, yMax, footR, n) {
    if (!this._inFoot(x, z, footR)) return -Infinity;
    const lz = clamp(this.lz(x, z), -this.hz, this.hz);
    const top = this.topAtLocal(lz);
    if (top < yMin || top > yMax) return -Infinity;
    if (n) { n.x = this.s * this.nlz; n.y = this.nly; n.z = this.c * this.nlz; }
    return top;
  }
  ceil(x, z, yMin, yMax, footR) {
    const bot = this.yb;
    if (bot < yMin || bot > yMax) return Infinity;
    if (!this._inFoot(x, z, footR)) return Infinity;
    return bot;
  }
  push(x, z, r, yMin, yMax, out) {
    // Only the part of the ramp above the body's step height acts as a wall.
    const lz = this.lz(x, z);
    const top = this.topAtLocal(lz);
    const bot = this.yb;
    if (top <= yMin || bot >= yMax) return false;
    const lx = this.lx(x, z);
    // Inside footprint and the surface here is below the step: we are standing on it, not inside.
    if (Math.abs(lx) <= this.hx && Math.abs(lz) <= this.hz && top <= yMin + 0.05) return false;
    const ok = super.push(x, z, r, yMin, yMax, out);
    if (ok) out.top = top;
    return ok;
  }
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    // Convex clip in local space: 4 side planes, bottom, sloped top.
    const rx = ox - this.cx, rz = oz - this.cz;
    const lox = this.c * rx - this.s * rz, loz = this.s * rx + this.c * rz;
    const ldx = this.c * dx - this.s * dz, ldz = this.s * dx + this.c * dz;
    const yb = this.yb, ymid = (this.y0 + this.y1) / 2;
    // planes: n·p <= d
    const planes = [
      [1, 0, 0, this.hx], [-1, 0, 0, this.hx], [0, 0, 1, this.hz], [0, 0, -1, this.hz],
      [0, -1, 0, -yb],
      [0, this.nly, this.nlz, this.nly * ymid],
    ];
    let tmin = 0, tmax = maxT, hit = -1;
    for (let i = 0; i < planes.length; i++) {
      const [nx, ny, nz, d] = planes[i];
      const dn = nx * ldx + ny * dy + nz * ldz;
      const dist = d - (nx * lox + ny * oy + nz * loz);
      if (Math.abs(dn) < 1e-9) { if (dist < 0) return Infinity; continue; }
      const t = dist / dn;
      if (dn < 0) { if (t > tmin) { tmin = t; hit = i; } }
      else if (t < tmax) tmax = t;
      if (tmin > tmax) return Infinity;
    }
    if (hit < 0) return Infinity;
    const [nx, ny, nz] = planes[hit];
    this.hitN.x = this.c * nx + this.s * nz; this.hitN.y = ny; this.hitN.z = -this.s * nx + this.c * nz;
    return tmin;
  }
}

// Vertical cylinder from y0 to y1.
export class CylinderCollider extends Collider {
  constructor(cx, cz, y0, y1, r) {
    super();
    this.type = 'cyl';
    this.r = r;
    this.prev = { x: cx, y: y0, z: cz, rot: 0 };
    this.rot = 0;
    this.setTransform(cx, cz, y0, y1);
    this.snapshot();
  }
  setTransform(cx, cz, y0, y1 = y0 + (this.y1 - this.y0), rot = this.rot) {
    this.cx = cx; this.cz = cz; this.y0 = y0; this.y1 = y1; this.rot = rot;
    this.minX = cx - this.r; this.maxX = cx + this.r; this.minZ = cz - this.r; this.maxZ = cz + this.r;
    this.minY = y0; this.maxY = y1;
  }
  snapshot() { this.prev.x = this.cx; this.prev.y = this.y0; this.prev.z = this.cz; this.prev.rot = this.rot; }
  topAt() { return this.y1; }
  floor(x, z, yMin, yMax, footR, n) {
    if (this.y1 < yMin || this.y1 > yMax) return -Infinity;
    const dx = x - this.cx, dz = z - this.cz, rr = this.r + footR;
    if (dx * dx + dz * dz > rr * rr) return -Infinity;
    if (n) { n.x = 0; n.y = 1; n.z = 0; }
    return this.y1;
  }
  ceil(x, z, yMin, yMax, footR) {
    if (this.oneWay) return Infinity;
    if (this.y0 < yMin || this.y0 > yMax) return Infinity;
    const dx = x - this.cx, dz = z - this.cz, rr = this.r + footR;
    if (dx * dx + dz * dz > rr * rr) return Infinity;
    return this.y0;
  }
  push(x, z, r, yMin, yMax, out) {
    if (this.oneWay) return false;
    if (this.y1 <= yMin || this.y0 >= yMax) return false;
    const dx = x - this.cx, dz = z - this.cz, rr = this.r + r;
    const d2 = dx * dx + dz * dz;
    if (d2 >= rr * rr) return false;
    const d = Math.sqrt(d2) || 1e-6;
    const nx = d2 > 1e-12 ? dx / d : 1, nz = d2 > 1e-12 ? dz / d : 0;
    out.x = nx * (rr - d); out.z = nz * (rr - d); out.nx = nx; out.nz = nz; out.top = this.y1;
    return true;
  }
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    let best = Infinity;
    // side
    const fx = ox - this.cx, fz = oz - this.cz;
    const a = dx * dx + dz * dz;
    if (a > 1e-9) {
      const b = 2 * (fx * dx + fz * dz), c = fx * fx + fz * fz - this.r * this.r;
      const disc = b * b - 4 * a * c;
      if (disc >= 0) {
        const t = (-b - Math.sqrt(disc)) / (2 * a);
        if (t >= 0 && t < maxT) {
          const y = oy + dy * t;
          if (y >= this.y0 && y <= this.y1) {
            best = t;
            const hx = fx + dx * t, hz = fz + dz * t;
            this.hitN.x = hx / this.r; this.hitN.y = 0; this.hitN.z = hz / this.r;
          }
        }
      }
    }
    // caps
    if (Math.abs(dy) > 1e-9) {
      for (const [py, ny] of [[this.y1, 1], [this.y0, -1]]) {
        const t = (py - oy) / dy;
        if (t >= 0 && t < best && t < maxT && Math.sign(dy) === -ny) {
          const hx = fx + dx * t, hz = fz + dz * t;
          if (hx * hx + hz * hz <= this.r * this.r) { best = t; this.hitN.x = 0; this.hitN.y = ny; this.hitN.z = 0; }
        }
      }
    }
    return best;
  }
  carry(p) {
    const pr = this.prev;
    const dRot = this.rot - pr.rot;
    let x = p.x - pr.x, z = p.z - pr.z;
    if (dRot !== 0) {
      const c = Math.cos(dRot), s = Math.sin(dRot);
      const nx = c * x + s * z, nz = -s * x + c * z;
      x = nx; z = nz;
    }
    p.x = this.cx + x; p.z = this.cz + z; p.y += this.y0 - pr.y;
    return dRot;
  }
}

// Dome: spherical cap / ball. Walkable where not too steep.
export class SphereCollider extends Collider {
  constructor(cx, cy, cz, r) {
    super();
    this.type = 'sphere';
    this.cx = cx; this.cy = cy; this.cz = cz; this.r = r;
    this.minX = cx - r; this.maxX = cx + r; this.minY = cy - r; this.maxY = cy + r; this.minZ = cz - r; this.maxZ = cz + r;
  }
  topAt(x, z) {
    const dx = x - this.cx, dz = z - this.cz, d2 = dx * dx + dz * dz;
    return d2 >= this.r * this.r ? -Infinity : this.cy + Math.sqrt(this.r * this.r - d2);
  }
  floor(x, z, yMin, yMax, footR, n) {
    const dx = x - this.cx, dz = z - this.cz, d2 = dx * dx + dz * dz;
    if (d2 >= this.r * this.r) return -Infinity;
    const y = this.cy + Math.sqrt(this.r * this.r - d2);
    if (y < yMin || y > yMax) return -Infinity;
    if (n) { n.x = dx / this.r; n.y = (y - this.cy) / this.r; n.z = dz / this.r; }
    return y;
  }
  ceil(x, z, yMin, yMax) {
    const dx = x - this.cx, dz = z - this.cz, d2 = dx * dx + dz * dz;
    if (d2 >= this.r * this.r) return Infinity;
    const y = this.cy - Math.sqrt(this.r * this.r - d2);
    return y < yMin || y > yMax ? Infinity : y;
  }
  push(x, z, r, yMin, yMax, out) {
    // Treat the body as a vertical segment; find closest point on it to the center.
    const yc = clamp(this.cy, yMin, yMax);
    const dx = x - this.cx, dy = yc - this.cy, dz = z - this.cz;
    const d2 = dx * dx + dy * dy + dz * dz, rr = this.r + r;
    if (d2 >= rr * rr) return false;
    const h = Math.sqrt(dx * dx + dz * dz);
    if (h < 1e-6) return false;
    // Only push horizontally when the contact is on the side (not when standing on top).
    const d = Math.sqrt(d2);
    if (dy / d > 0.6) return false;
    const needH = Math.sqrt(Math.max(0, rr * rr - dy * dy));
    if (h >= needH) return false;
    out.nx = dx / h; out.nz = dz / h;
    out.x = out.nx * (needH - h); out.z = out.nz * (needH - h);
    out.top = this.cy + this.r;
    return true;
  }
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    const fx = ox - this.cx, fy = oy - this.cy, fz = oz - this.cz;
    const b = fx * dx + fy * dy + fz * dz, c = fx * fx + fy * fy + fz * fz - this.r * this.r;
    const disc = b * b - c;
    if (disc < 0) return Infinity;
    const t = -b - Math.sqrt(disc);
    if (t < 0 || t > maxT) return Infinity;
    this.hitN.x = (fx + dx * t) / this.r; this.hitN.y = (fy + dy * t) / this.r; this.hitN.z = (fz + dz * t) / this.r;
    return t;
  }
}

// Regular-grid terrain. Triangulation per cell: (a,c,b) and (b,c,d) with a=(i,j) b=(i+1,j) c=(i,j+1) d=(i+1,j+1).
export class HeightfieldCollider extends Collider {
  constructor(x0, z0, cell, nx, nz, heights) {
    super();
    this.type = 'heightfield';
    this.x0 = x0; this.z0 = z0; this.cell = cell; this.nx = nx; this.nz = nz; this.h = heights;
    this.minX = x0; this.maxX = x0 + (nx - 1) * cell; this.minZ = z0; this.maxZ = z0 + (nz - 1) * cell;
    let lo = Infinity, hi = -Infinity;
    for (const v of heights) { if (v < lo) lo = v; if (v > hi) hi = v; }
    this.minY = lo; this.maxY = hi;
    this.cam = true;
  }
  heightAt(x, z, n) {
    const fx = (x - this.x0) / this.cell, fz = (z - this.z0) / this.cell;
    if (fx < 0 || fz < 0 || fx > this.nx - 1 || fz > this.nz - 1) return -Infinity;
    let i = Math.floor(fx), j = Math.floor(fz);
    if (i >= this.nx - 1) i = this.nx - 2;
    if (j >= this.nz - 1) j = this.nz - 2;
    const u = fx - i, v = fz - j;
    const H = this.h, w = this.nx;
    const ha = H[j * w + i], hb = H[j * w + i + 1], hc = H[(j + 1) * w + i], hd = H[(j + 1) * w + i + 1];
    let y, gx, gz;
    if (u + v <= 1) { y = ha + (hb - ha) * u + (hc - ha) * v; gx = (hb - ha) / this.cell; gz = (hc - ha) / this.cell; }
    else { y = hd + (hc - hd) * (1 - u) + (hb - hd) * (1 - v); gx = (hd - hc) / this.cell; gz = (hd - hb) / this.cell; }
    if (n) {
      const inv = 1 / Math.sqrt(gx * gx + 1 + gz * gz);
      n.x = -gx * inv; n.y = inv; n.z = -gz * inv;
    }
    return y;
  }
  floor(x, z, yMin, yMax, footR, n) {
    const y = this.heightAt(x, z, n);
    if (y < yMin || y > yMax) return -Infinity;
    return y;
  }
  ceil() { return Infinity; }
  push() { return false; }
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    const step = this.cell * 0.5;
    let prevT = 0;
    let prevAbove = oy - this.heightAt(ox, oz);
    if (!(prevAbove > -Infinity)) prevAbove = 1;
    if (prevAbove < 0) return Infinity; // starting underground: ignore
    for (let t = step; t <= maxT + step; t += step) {
      const tt = Math.min(t, maxT);
      const x = ox + dx * tt, y = oy + dy * tt, z = oz + dz * tt;
      const h = this.heightAt(x, z);
      if (h > -Infinity && y < h) {
        // refine
        let a = prevT, b = tt;
        for (let k = 0; k < 6; k++) {
          const m = (a + b) / 2;
          const hm = this.heightAt(ox + dx * m, oz + dz * m);
          if (oy + dy * m < hm) b = m; else a = m;
        }
        this.heightAt(ox + dx * b, oz + dz * b, this.hitN);
        return b;
      }
      prevT = tt;
      if (tt >= maxT) break;
    }
    return Infinity;
  }
}
