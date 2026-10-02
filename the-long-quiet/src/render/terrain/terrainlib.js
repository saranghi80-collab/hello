// Procedural planetary terrain. This whole function is serialised with toString() and run
// inside Web Workers, so it must not reference anything defined outside of it.
// Heights are computed in double precision on the CPU so that the ground you see and the
// ground you collide with are exactly the same surface.

export function createTerrainLib() {
  const FACES = [
    { n: [1, 0, 0], u: [0, 0, -1], v: [0, 1, 0] },
    { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0] },
    { n: [0, 1, 0], u: [1, 0, 0], v: [0, 0, -1] },
    { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1] },
    { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] },
    { n: [0, 0, -1], u: [-1, 0, 0], v: [0, 1, 0] },
  ];
  const QPI = Math.PI / 4;

  function cubeToSphere(face, s, t, out) {
    const f = FACES[face];
    const a = Math.tan(s * QPI), b = Math.tan(t * QPI);
    const x = f.n[0] + f.u[0] * a + f.v[0] * b;
    const y = f.n[1] + f.u[1] * a + f.v[1] * b;
    const z = f.n[2] + f.u[2] * a + f.v[2] * b;
    const l = 1 / Math.sqrt(x * x + y * y + z * z);
    out[0] = x * l; out[1] = y * l; out[2] = z * l;
    return out;
  }

  // ---------- noise ----------
  const GRAD = new Float64Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
  function rngFrom(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6d2b79f5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function makeSimplex(seed) {
    const rnd = rngFrom(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = p[i]; p[i] = p[j]; p[j] = t;
    }
    const perm = new Uint8Array(512), pm12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; pm12[i] = perm[i] % 12; }
    const F3 = 1 / 3, G3 = 1 / 6;
    return function noise3(xin, yin, zin) {
      let n0 = 0, n1 = 0, n2 = 0, n3 = 0;
      const s = (xin + yin + zin) * F3;
      const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
      const t = (i + j + k) * G3;
      const x0 = xin - (i - t), y0 = yin - (j - t), z0 = zin - (k - t);
      let i1, j1, k1, i2, j2, k2;
      if (x0 >= y0) {
        if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
        else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
        else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
      } else {
        if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
        else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
        else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      }
      const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
      const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
      const x3 = x0 - 1 + 0.5, y3 = y0 - 1 + 0.5, z3 = z0 - 1 + 0.5;
      const ii = i & 255, jj = j & 255, kk = k & 255;
      let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 > 0) { const g = pm12[ii + perm[jj + perm[kk]]] * 3; t0 *= t0; n0 = t0 * t0 * (GRAD[g] * x0 + GRAD[g + 1] * y0 + GRAD[g + 2] * z0); }
      let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 > 0) { const g = pm12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3; t1 *= t1; n1 = t1 * t1 * (GRAD[g] * x1 + GRAD[g + 1] * y1 + GRAD[g + 2] * z1); }
      let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 > 0) { const g = pm12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3; t2 *= t2; n2 = t2 * t2 * (GRAD[g] * x2 + GRAD[g + 1] * y2 + GRAD[g + 2] * z2); }
      let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 > 0) { const g = pm12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3; t3 *= t3; n3 = t3 * t3 * (GRAD[g] * x3 + GRAD[g + 1] * y3 + GRAD[g + 2] * z3); }
      return 32 * (n0 + n1 + n2 + n3);
    };
  }

  function hash4(a, b, c, d) {
    let h = Math.imul(a | 0, 0x27d4eb2d) ^ Math.imul(b | 0, 0x165667b1) ^ Math.imul(c | 0, 0x9e3779b1) ^ Math.imul(d | 0, 0x85ebca77);
    h = Math.imul(h ^ (h >>> 15), 0x2c1b3c6d);
    h = Math.imul(h ^ (h >>> 12), 0x297a2d39);
    h ^= h >>> 15;
    return h >>> 0;
  }

  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  function smin(a, b, k) { const h = clamp(0.5 + (0.5 * (b - a)) / k, 0, 1); return b * (1 - h) + a * h - k * h * (1 - h); }
  function smax(a, b, k) { return -smin(-a, -b, k); }

  // ---------- generator ----------
  function makeGenerator(P) {
    const R = P.radius;
    const amp = P.amp;
    const type = P.type;
    const seed = P.seed | 0;
    const nA = makeSimplex(seed), nB = makeSimplex(seed + 101), nC = makeSimplex(seed + 202), nD = makeSimplex(seed + 303);
    const craterDensity = P.craters || 0;
    const mareStrength = P.mare || 0;
    const seaLevel = type === 'terran' ? 0 : type === 'titan' ? -0.32 * amp : null;
    const contOffset = type === 'terran' ? (P.sea ?? 0.05) : 0;
    const life = !!P.life;
    const windX = Math.cos(seed % 7), windZ = Math.sin(seed % 7);

    // fractal sum with octaves dropped once their wavelength is below the sampling scale
    function fbm(n, x, y, z, freq, oct, gain, minWave) {
      let s = 0, a = 1, f = freq;
      for (let i = 0; i < oct; i++) {
        const wl = R / f;
        if (wl < minWave) {
          if (wl * 2 > minWave) s += a * n(x * f, y * f, z * f) * ((wl * 2 - minWave) / minWave);
          break;
        }
        s += a * n(x * f, y * f, z * f);
        a *= gain; f *= 2.02;
      }
      return s;
    }
    function ridged(n, x, y, z, freq, oct, minWave) {
      let s = 0, a = 0.5, f = freq, prev = 1;
      for (let i = 0; i < oct; i++) {
        if (R / f < minWave) break;
        let v = 1 - Math.abs(n(x * f, y * f, z * f));
        v *= v;
        s += v * a * prev;
        prev = clamp(v * 1.6, 0, 1);
        a *= 0.5; f *= 2.05;
      }
      return s;
    }
    // small-scale roughness: amplitude grows with wavelength, giving rocks and bumps up close
    function rough(x, y, z, fromWave, minWave, k) {
      let s = 0;
      let wl = fromWave;
      let o = 0;
      while (wl > minWave && wl > 0.7 && o < 14) {
        const f = R / wl;
        s += nD(x * f + o * 3.1, y * f, z * f) * k * Math.pow(wl, 0.92);
        wl *= 0.5; o++;
      }
      return s;
    }

    const C0 = 0.28;
    const fresh = [0, 0];
    function craters(x, y, z, minWave, density, degrade, out) {
      if (density <= 0) return 0;
      let h = 0;
      let c = C0;
      let freshness = 0;
      for (let k = 0; k < 22; k++, c *= 0.5) {
        const rMaxM = 0.42 * c * R;
        if (rMaxM < minWave * 0.7 || rMaxM < 1.5) break;
        const qx = x / c, qy = y / c, qz = z / c;
        const fx = Math.floor(qx), fy = Math.floor(qy), fz = Math.floor(qz);
        const ox = qx - fx > 0.5 ? 1 : -1, oy = qy - fy > 0.5 ? 1 : -1, oz = qz - fz > 0.5 ? 1 : -1;
        const prob = density * (k < 2 ? 0.35 : 0.55);
        for (let a = 0; a < 8; a++) {
          const ix = fx + (a & 1 ? ox : 0), iy = fy + (a & 2 ? oy : 0), iz = fz + (a & 4 ? oz : 0);
          const hh = hash4(ix, iy, iz, k * 7919 + seed);
          if ((hh & 0xffff) / 65536 > prob) continue;
          const h1 = ((hh >>> 16) & 0xff) / 255, h2 = ((hh >>> 24) & 0xff) / 255;
          const h3 = hash4(iz, ix, iy, k + seed * 3);
          const h4 = (h3 & 0xffff) / 65536, h5 = (h3 >>> 16) / 65536;
          const cx = (ix + 0.25 + 0.5 * h1) * c, cy = (iy + 0.25 + 0.5 * h2) * c, cz = (iz + 0.25 + 0.5 * h4) * c;
          const rad = c * (0.12 + 0.3 * h5 * h5);
          const dx = x - cx, dy = y - cy, dz = z - cz;
          const d2 = dx * dx + dy * dy + dz * dz;
          const lim = rad * 1.7;
          if (d2 > lim * lim) continue;
          const xx = Math.sqrt(d2) / rad;
          const rM = rad * R;
          const big = rM > 5000;
          const depthRatio = big ? 0.42 * Math.pow(5000 / rM, 0.55) : 0.42;
          const cavity = xx * xx - 1;
          const rimX = Math.min(xx - 1.7, 0);
          const rim = 0.3 * rimX * rimX;
          let s = smax(cavity, big ? -0.32 : -0.78, 0.35);
          s = smin(s, rim, 0.22);
          if (rM > 9000) s += 0.3 * Math.exp(-xx * xx * 45);
          const age = (h3 & 0xff) / 255; // older craters are softer
          const deg = degrade * (age < 0.15 ? 1.0 : 0.55 + 0.45 * (1 - age));
          h += s * rM * depthRatio * deg;
          if (age < 0.07 && xx < 2.4) freshness = Math.max(freshness, (1 - xx / 2.4) * (k > 2 ? 1 : 0.6));
        }
      }
      if (out) out[0] = freshness;
      return h;
    }

    function sample(x, y, z, minWave, out) {
      let h = 0, m0 = 0, m1 = 0;
      switch (type) {
        case 'barren': {
          const base = fbm(nA, x, y, z, 1.3, 9, 0.52, minWave) * amp * 0.38;
          const mareN = fbm(nB, x, y, z, 0.9, 4, 0.5, minWave);
          const mare = smooth(0.05, 0.32, mareN) * mareStrength;
          const hi = ridged(nC, x, y, z, 2.2, 5, minWave) * amp * 0.25 * (1 - mare);
          const cr = craters(x, y, z, minWave, craterDensity * (1 - 0.65 * mare), 1.0, fresh);
          h = base + hi - mare * amp * 0.32 + cr + rough(x, y, z, 1600, minWave, 0.045 * (1 - 0.5 * mare));
          m0 = mare; m1 = fresh[0];
          break;
        }
        case 'ice': {
          const base = fbm(nA, x, y, z, 1.2, 8, 0.5, minWave) * amp * 0.3;
          let cracks = 0;
          let cm = 0;
          for (let i = 0; i < 3; i++) {
            const f = 3.5 * Math.pow(2.3, i);
            if (R / f < minWave * 4) break;
            const wx = nC(x * 2.1 + i, y * 2.1, z * 2.1) * 0.25;
            const v = 1 - Math.abs(nB(x * f + wx, y * f + wx, z * f - wx));
            const v8 = Math.pow(v, 14), v30 = Math.pow(v, 70);
            cracks += (v8 - v30 * 1.3) * (1 / (1 + i)) ;
            cm = Math.max(cm, Math.pow(v, 9));
          }
          const cr = craters(x, y, z, minWave, craterDensity, 0.7, fresh);
          h = base + cracks * amp * 0.12 + cr + rough(x, y, z, 900, minWave, 0.022);
          m0 = cm; m1 = smooth(-0.2, 0.6, fbm(nD, x, y, z, 2.0, 4, 0.5, minWave));
          break;
        }
        case 'desert': {
          const cont = fbm(nA, x, y, z, 1.1, 9, 0.5, minWave);
          const mtn = ridged(nB, x, y, z, 2.6, 7, minWave) * smooth(0.0, 0.4, cont);
          const canyonN = Math.abs(nC(x * 2.6, y * 2.6, z * 2.6) + 0.35 * nD(x * 9, y * 9, z * 9));
          const canyon = (1 - smooth(0.0, 0.07, canyonN)) * smooth(-0.1, 0.25, cont);
          const cr = craters(x, y, z, minWave, craterDensity, 0.45, fresh);
          const low = 1 - smooth(-0.2, 0.2, cont);
          let dunes = 0;
          if (R / 3000 > minWave * 0.5) {
            const f = R / 650;
            const warp = nD(x * 40, y * 40, z * 40) * 6;
            const ph = (x * windX + z * windZ + y * 0.3) * f + warp;
            const sv = ph - Math.floor(ph);
            dunes = Math.pow(sv < 0.7 ? sv / 0.7 : (1 - sv) / 0.3, 1.6) * 38 * low;
          }
          h = cont * amp * 0.55 + mtn * amp * 0.7 - canyon * amp * 0.5 + cr + dunes + rough(x, y, z, 1200, minWave, 0.03);
          m0 = low; m1 = canyon;
          break;
        }
        case 'lava': {
          const base = fbm(nA, x, y, z, 1.4, 8, 0.5, minWave) * amp * 0.35;
          const flows = ridged(nB, x, y, z, 3.0, 6, minWave) * amp * 0.2;
          let crack = 0;
          for (let i = 0; i < 3; i++) {
            const f = 9 * Math.pow(2.4, i);
            if (R / f < minWave * 3) break;
            const c = Math.abs(nC(x * f + i * 11, y * f, z * f));
            crack = Math.max(crack, (1 - smooth(0, 0.05 / (1 + i * 0.3), c)) / (1 + i * 0.6));
          }
          const cr = craters(x, y, z, minWave, craterDensity, 0.5, fresh);
          h = base + flows - crack * 60 + cr + rough(x, y, z, 900, minWave, 0.04);
          m0 = crack; m1 = smooth(-0.3, 0.5, nD(x * 3, y * 3, z * 3));
          break;
        }
        case 'venus': {
          const cont = fbm(nA, x, y, z, 1.0, 9, 0.5, minWave);
          const hi = ridged(nB, x, y, z, 2.2, 6, minWave) * smooth(0.1, 0.5, cont);
          const cr = craters(x, y, z, minWave, craterDensity, 0.6, fresh);
          h = cont * amp * 0.45 + hi * amp * 0.6 + cr + rough(x, y, z, 1000, minWave, 0.03);
          m0 = smooth(-0.2, 0.4, cont); m1 = hi;
          break;
        }
        case 'titan': {
          const cont = fbm(nA, x, y, z, 1.2, 9, 0.5, minWave);
          const lat = Math.abs(y);
          let dunes = 0;
          const band = 1 - smooth(0.25, 0.5, lat);
          if (R / 3000 > minWave * 0.5) {
            const f = R / 900;
            const warp = nD(x * 30, y * 30, z * 30) * 4;
            const ph = (x * windX + z * windZ) * f + warp;
            const sv = ph - Math.floor(ph);
            dunes = Math.pow(sv < 0.75 ? sv / 0.75 : (1 - sv) / 0.25, 1.5) * 60 * band;
          }
          const cr = craters(x, y, z, minWave, craterDensity, 0.5, fresh);
          h = cont * amp * 0.5 - smooth(0.55, 0.85, lat) * amp * 0.3 + dunes + cr + rough(x, y, z, 900, minWave, 0.02);
          m0 = band; m1 = 0;
          break;
        }
        case 'terran': {
          const wx = nD(x * 1.5, y * 1.5, z * 1.5) * 0.35;
          const cont = fbm(nA, x + wx, y - wx, z + wx, 1.15, 10, 0.52, minWave) + contOffset;
          const land = smooth(-0.02, 0.18, cont);
          const mtn = ridged(nB, x, y, z, 2.4, 8, minWave) * smooth(0.08, 0.45, cont);
          const hills = fbm(nC, x, y, z, 6, 7, 0.5, minWave) * 0.12;
          if (cont < 0) h = cont * amp * 0.9;
          else h = cont * amp * 0.35 + mtn * amp * 0.9 + hills * amp * land;
          h += craters(x, y, z, minWave, craterDensity, 0.3, fresh) * land;
          h += rough(x, y, z, 900, minWave, 0.025) * land;
          m0 = 0.5 + 0.5 * fbm(nD, x * 1.7, y * 1.7, z * 1.7, 1.0, 5, 0.55, minWave);
          m1 = mtn;
          break;
        }
        default:
          h = fbm(nA, x, y, z, 1.3, 8, 0.5, minWave) * amp * 0.4;
      }
      if (out) { out[0] = h; out[1] = m0; out[2] = m1; }
      return h;
    }

    return {
      R, amp, type, seaLevel, life,
      sample,
      // collision height: full detail, ocean surface counts as ground
      height(x, y, z) {
        const h = sample(x, y, z, 0.6, null);
        return seaLevel !== null ? Math.max(h, seaLevel) : h;
      },
    };
  }

  // ---------- patch building ----------
  function buildPatch(gen, face, level, ix, iy, N) {
    const R = gen.R;
    const size = 2 / (1 << level);
    const s0 = -1 + ix * size, t0 = -1 + iy * size;
    const G = N + 3;
    const spacing = (R * (Math.PI / 2) * (size / 2)) / N;
    const minWave = spacing * 1.6;
    const P = new Float64Array(G * G * 3);
    const U = new Float64Array(G * G * 3);
    const H = new Float32Array(G * G);
    const M = new Float32Array(G * G * 2);
    const tmp = [0, 0, 0];
    const smp = [0, 0, 0];
    const sea = gen.seaLevel;
    let minH = 1e9, maxH = -1e9;
    for (let j = 0; j < G; j++) {
      for (let i = 0; i < G; i++) {
        const s = s0 + ((i - 1) / N) * size;
        const t = t0 + ((j - 1) / N) * size;
        cubeToSphere(face, s, t, tmp);
        gen.sample(tmp[0], tmp[1], tmp[2], minWave, smp);
        const h = smp[0];
        const surf = sea !== null && h < sea ? sea : h;
        const r = R + surf;
        const k = j * G + i;
        P[k * 3] = tmp[0] * r; P[k * 3 + 1] = tmp[1] * r; P[k * 3 + 2] = tmp[2] * r;
        U[k * 3] = tmp[0]; U[k * 3 + 1] = tmp[1]; U[k * 3 + 2] = tmp[2];
        H[k] = h;
        M[k * 2] = smp[1]; M[k * 2 + 1] = smp[2];
        if (i > 0 && j > 0 && i < G - 1 && j < G - 1) {
          if (surf < minH) minH = surf;
          if (surf > maxH) maxH = surf;
        }
      }
    }
    const V = N + 1;
    const nInterior = V * V;
    const nSkirt = 4 * V;
    const nv = nInterior + nSkirt;
    const pos = new Float32Array(nv * 3);
    const nor = new Float32Array(nv * 3);
    const hgt = new Float32Array(nv);
    const mat = new Float32Array(nv * 2);
    const unit = new Float32Array(nv * 3);
    const ck = ((N >> 1) + 1) * G + (N >> 1) + 1;
    const cx = P[ck * 3], cy = P[ck * 3 + 1], cz = P[ck * 3 + 2];
    const skirt = spacing * 1.5 + (maxH - minH) * 0.03;
    function put(vi, k, drop) {
      const ux = U[k * 3], uy = U[k * 3 + 1], uz = U[k * 3 + 2];
      pos[vi * 3] = P[k * 3] - cx - ux * drop;
      pos[vi * 3 + 1] = P[k * 3 + 1] - cy - uy * drop;
      pos[vi * 3 + 2] = P[k * 3 + 2] - cz - uz * drop;
      unit[vi * 3] = ux; unit[vi * 3 + 1] = uy; unit[vi * 3 + 2] = uz;
      hgt[vi] = H[k];
      mat[vi * 2] = M[k * 2]; mat[vi * 2 + 1] = M[k * 2 + 1];
    }
    function normalAt(i, j, vi) {
      const kL = j * G + i - 1, kR = j * G + i + 1, kD = (j - 1) * G + i, kU = (j + 1) * G + i;
      const ax = P[kR * 3] - P[kL * 3], ay = P[kR * 3 + 1] - P[kL * 3 + 1], az = P[kR * 3 + 2] - P[kL * 3 + 2];
      const bx = P[kU * 3] - P[kD * 3], by = P[kU * 3 + 1] - P[kD * 3 + 1], bz = P[kU * 3 + 2] - P[kD * 3 + 2];
      let nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
      const l = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx *= l; ny *= l; nz *= l;
      const k = j * G + i;
      if (sea !== null && H[k] < sea) { nx = U[k * 3]; ny = U[k * 3 + 1]; nz = U[k * 3 + 2]; }
      nor[vi * 3] = nx; nor[vi * 3 + 1] = ny; nor[vi * 3 + 2] = nz;
    }
    for (let j = 0; j < V; j++) {
      for (let i = 0; i < V; i++) {
        const vi = j * V + i;
        put(vi, (j + 1) * G + (i + 1), 0);
        normalAt(i + 1, j + 1, vi);
      }
    }
    // skirts: bottom edge, top edge, left edge, right edge
    let vi = nInterior;
    const edges = [
      (e) => [e, 0], (e) => [e, N], (e) => [0, e], (e) => [N, e],
    ];
    for (const edge of edges) {
      for (let e = 0; e < V; e++) {
        const [i, j] = edge(e);
        put(vi, (j + 1) * G + (i + 1), skirt);
        normalAt(i + 1, j + 1, vi);
        vi++;
      }
    }
    return {
      pos, nor, hgt, mat, unit,
      center: [cx, cy, cz],
      minH, maxH,
      spacing,
    };
  }

  function buildIndex(N) {
    const V = N + 1;
    const idx = [];
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const a = j * V + i, b = a + 1, c = a + V, d = c + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
    const base = V * V;
    const edgeIdx = [
      (e) => e, (e) => N * V + e, (e) => e * V, (e) => e * V + N,
    ];
    for (let s = 0; s < 4; s++) {
      for (let e = 0; e < N; e++) {
        const a = edgeIdx[s](e), b = edgeIdx[s](e + 1);
        const sa = base + s * V + e, sb = sa + 1;
        // both windings: skirts face whichever way the camera is
        idx.push(a, sa, b, b, sa, sb);
        idx.push(a, b, sa, b, sb, sa);
      }
    }
    return new Uint32Array(idx);
  }

  return { FACES, cubeToSphere, makeGenerator, buildPatch, buildIndex };
}
