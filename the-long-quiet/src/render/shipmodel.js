// The TERN: a one-person survey vessel. Ceramic hull panels, gold multi-layer insulation,
// radiator wings, a fusion bell, four landing legs and a high-gain dish that keeps
// pointing home. Forward is -Z, up is +Y, units are metres.

import * as THREE from 'three';
import { Rng } from '../core/rng.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function hullTextures(name, serial, wear) {
  const S = 1024;
  const r = new Rng(1171);
  const col = canvas(S, S), rough = canvas(S, S), bump = canvas(S, S);
  const cc = col.getContext('2d'), rc = rough.getContext('2d'), bc = bump.getContext('2d');
  cc.fillStyle = '#cfccc4'; cc.fillRect(0, 0, S, S);
  rc.fillStyle = '#8a8a8a'; rc.fillRect(0, 0, S, S);
  bc.fillStyle = '#808080'; bc.fillRect(0, 0, S, S);
  // panels
  const rows = 14;
  for (let y = 0; y < rows; y++) {
    const y0 = (y / rows) * S, y1 = ((y + 1) / rows) * S;
    let x = 0;
    while (x < S) {
      const w = r.range(40, 160);
      const shade = r.range(-14, 10);
      const g = 204 + shade;
      cc.fillStyle = `rgb(${g + 2},${g},${g - 6})`;
      cc.fillRect(x, y0, w, y1 - y0);
      const rv = 130 + r.range(-25, 30);
      rc.fillStyle = `rgb(${rv},${rv},${rv})`;
      rc.fillRect(x, y0, w, y1 - y0);
      if (r.chance(0.08)) {
        cc.fillStyle = 'rgba(60,62,66,0.85)';
        cc.fillRect(x + 4, y0 + 4, w - 8, y1 - y0 - 8);
      }
      // seams
      cc.fillStyle = 'rgba(40,40,40,0.55)';
      cc.fillRect(x, y0, 2, y1 - y0);
      bc.fillStyle = '#2a2a2a';
      bc.fillRect(x, y0, 2, y1 - y0);
      // rivets
      cc.fillStyle = 'rgba(90,90,90,0.5)';
      for (let k = 6; k < y1 - y0 - 4; k += 12) { cc.fillRect(x + 5, y0 + k, 2, 2); }
      x += w;
    }
    cc.fillStyle = 'rgba(30,30,30,0.6)';
    cc.fillRect(0, y0, S, 2);
    bc.fillStyle = '#202020';
    bc.fillRect(0, y0, S, 2);
  }
  // grime and wear
  for (let i = 0; i < 2600 * wear; i++) {
    const x = r.range(0, S), y = r.range(0, S), s = r.range(1, 6);
    cc.fillStyle = `rgba(70,60,50,${r.range(0.02, 0.07)})`;
    cc.fillRect(x, y, s, s * r.range(1, 6));
  }
  // markings
  cc.save();
  cc.fillStyle = '#2b2d31';
  cc.font = '600 46px "IBM Plex Mono", monospace';
  cc.translate(S * 0.18, S * 0.47);
  cc.fillText(name, 0, 0);
  cc.font = '500 18px "IBM Plex Mono", monospace';
  cc.fillText(`OUTER SURVEY PROGRAM  ·  ${serial}`, 0, 30);
  cc.restore();
  cc.fillStyle = '#9c3a2a';
  cc.fillRect(S * 0.18, S * 0.53, 180, 6);
  for (let i = 0; i < 6; i++) {
    cc.fillStyle = i % 2 ? '#d8b03a' : '#26272a';
    cc.fillRect(S * 0.62 + i * 14, S * 0.44, 14, 40);
  }
  const mk = (c, srgb) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  return { map: mk(col, true), roughnessMap: mk(rough, false), bumpMap: mk(bump, false) };
}

function foilTexture() {
  const S = 512;
  const r = new Rng(77);
  const c = canvas(S, S), x = c.getContext('2d');
  x.fillStyle = '#808080'; x.fillRect(0, 0, S, S);
  for (let i = 0; i < 1400; i++) {
    const cx = r.range(0, S), cy = r.range(0, S);
    const v = Math.round(r.range(70, 190));
    x.fillStyle = `rgba(${v},${v},${v},0.35)`;
    x.beginPath();
    const n = r.int(3, 6);
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + r.range(-0.3, 0.3);
      const rr = r.range(6, 30);
      const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr;
      k ? x.lineTo(px, py) : x.moveTo(px, py);
    }
    x.closePath(); x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 2);
  return t;
}

function radiatorTexture() {
  const c = canvas(256, 512), x = c.getContext('2d');
  x.fillStyle = '#56585c'; x.fillRect(0, 0, 256, 512);
  for (let i = 0; i < 512; i += 8) {
    x.fillStyle = 'rgba(20,20,22,0.7)'; x.fillRect(0, i, 256, 2);
    x.fillStyle = 'rgba(140,140,145,0.25)'; x.fillRect(0, i + 2, 256, 1);
  }
  x.fillStyle = 'rgba(25,25,28,0.9)';
  x.fillRect(0, 0, 8, 512); x.fillRect(248, 0, 8, 512);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class ShipModel {
  constructor(name = 'TERN') {
    this.group = new THREE.Group();
    const old = name !== 'TERN';
    const tex = hullTextures(name, old ? 'S-7' : 'S-11', old ? 3 : 1);
    this.hull = new THREE.MeshStandardMaterial({ map: tex.map, roughnessMap: tex.roughnessMap, bumpMap: tex.bumpMap, bumpScale: 1.2, roughness: 1, metalness: 0.05, envMapIntensity: 0.6 });
    this.foil = new THREE.MeshStandardMaterial({ color: 0xc89632, metalness: 1, roughness: 0.32, bumpMap: foilTexture(), bumpScale: 2.5, envMapIntensity: 1.0 });
    this.dark = new THREE.MeshStandardMaterial({ color: 0x2c2d30, metalness: 0.7, roughness: 0.42, envMapIntensity: 0.8 });
    this.steel = new THREE.MeshStandardMaterial({ color: 0x8d9096, metalness: 0.9, roughness: 0.3, envMapIntensity: 1.0 });
    this.radiator = new THREE.MeshStandardMaterial({ map: radiatorTexture(), metalness: 0.3, roughness: 0.55, emissive: new THREE.Color(0, 0, 0), envMapIntensity: 0.5 });
    this.glass = new THREE.MeshStandardMaterial({ color: 0x07090c, metalness: 0.1, roughness: 0.04, envMapIntensity: 2.0 });
    this.glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0), side: THREE.DoubleSide });
    this.navRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
    this.navGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
    this.strobe = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
    this.cabin = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
    this.build();
    this.group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.gear = 1;
    this.length = 30;
    this.bottom = 3.9; // distance from origin to ground contact with gear down
  }

  lathe(points, mat, segs = 64) {
    // LatheGeometry faces outward when the profile runs bottom to top
    const pts = points.map(([r, y]) => new THREE.Vector2(r, y));
    if (pts[0].y > pts[pts.length - 1].y) pts.reverse();
    const g = new THREE.LatheGeometry(pts, segs);
    g.rotateX(-Math.PI / 2); // lathe axis +Y -> -Z (forward)
    const m = new THREE.Mesh(g, mat);
    this.group.add(m);
    return m;
  }

  build() {
    const yf = (pts, s = 1) => pts.map(([r, y]) => [r * s, y]);
    // forward hull (command module), lathe Y is along the ship: +Y forward after rotation
    this.lathe(yf([[0.0, 15.2], [0.5, 15.1], [1.15, 14.7], [1.7, 14.0], [2.1, 13.0], [2.38, 11.8], [2.5, 10.6], [2.52, 9.0], [2.4, 8.4], [2.2, 8.2]]), this.hull, 72);
    // canopy band
    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(2.43, 2.27, 1.5, 48, 1, true, -Math.PI * 0.42, Math.PI * 0.84), this.glass);
    canopy.rotation.x = -Math.PI / 2;
    canopy.rotation.y = 0;
    canopy.position.set(0, 0, -12.3);
    canopy.rotateY(Math.PI);
    this.group.add(canopy);
    const cabinGlow = new THREE.Mesh(new THREE.CylinderGeometry(2.41, 2.25, 1.3, 48, 1, true, -Math.PI * 0.36, Math.PI * 0.72), this.cabin);
    cabinGlow.rotation.x = -Math.PI / 2;
    cabinGlow.position.set(0, 0, -12.3);
    cabinGlow.rotateY(Math.PI);
    cabinGlow.scale.setScalar(0.995);
    this.group.add(cabinGlow);
    // insulated mid section
    const mid = new THREE.Mesh(new THREE.CylinderGeometry(2.05, 2.05, 9.8, 48, 1, true), this.foil);
    mid.rotation.x = Math.PI / 2;
    mid.position.z = -3.2;
    this.group.add(mid);
    // structural rings
    for (const z of [-8.1, -3.2, 1.7]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.12, 8, 64), this.dark);
      ring.position.z = z;
      this.group.add(ring);
    }
    // side tanks
    for (const s of [-1, 1]) {
      const tank = new THREE.Mesh(new THREE.CapsuleGeometry(0.85, 6.5, 8, 24), this.hull);
      tank.rotation.x = Math.PI / 2;
      tank.position.set(s * 2.75, -0.5, -3.0);
      this.group.add(tank);
      for (const z of [-6, -0.2]) {
        const strut = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.18, 0.4), this.dark);
        strut.position.set(s * 2.2, -0.45, z);
        this.group.add(strut);
      }
    }
    // aft service module
    this.lathe([[2.2, 1.9], [2.55, 1.6], [2.62, -1.0], [2.5, -3.8], [2.05, -5.0], [1.2, -5.6], [0.0, -5.7]], this.hull, 64).position.z = 3.6;
    // engine bell
    const bellPts = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      bellPts.push(new THREE.Vector2(0.75 + 1.65 * Math.pow(t, 1.6), -t * 4.4));
    }
    const bellG = new THREE.LatheGeometry(bellPts.reverse(), 64);
    bellG.rotateX(-Math.PI / 2);
    const bell = new THREE.Mesh(bellG, new THREE.MeshStandardMaterial({ color: 0x6a5f57, metalness: 0.55, roughness: 0.5, side: THREE.DoubleSide, envMapIntensity: 0.7 }));
    bell.position.z = 9.0;
    this.group.add(bell);
    const throat = new THREE.Mesh(new THREE.CircleGeometry(0.78, 32), this.glow);
    throat.position.z = 9.45;
    this.group.add(throat);
    // exhaust plume
    this.plumeMat = new THREE.ShaderMaterial({
      uniforms: { uI: { value: 0 }, uT: { value: 0 } },
      vertexShader: `#include <common>\n#include <logdepthbuf_pars_vertex>\nvarying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ vP = position; vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vW = mv.xyz; gl_Position = projectionMatrix*mv; \n#include <logdepthbuf_vertex>\n}`,
      fragmentShader: `#include <common>\n#include <logdepthbuf_pars_fragment>\nuniform float uI; uniform float uT; varying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ \n#include <logdepthbuf_fragment>\n float t = clamp(vP.z / 14.0, 0.0, 1.0); float rim = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 0.5) * pow(abs(dot(normalize(vN), normalize(-vW))), 1.2); float flick = 0.85 + 0.15 * sin(uT * 60.0 + vP.y * 3.0); vec3 c = mix(vec3(0.75, 0.82, 1.0), vec3(0.45, 0.35, 1.0), t) * (1.0 - t) * (1.0 - t) * rim * uI * flick * 3.0; gl_FragColor = vec4(c, 1.0); }`,
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, side: THREE.DoubleSide,
    });
    const plumeG = new THREE.CylinderGeometry(0.9, 2.2, 14, 32, 6, true);
    plumeG.translate(0, -7, 0);
    plumeG.rotateX(-Math.PI / 2);
    this.plume = new THREE.Mesh(plumeG, this.plumeMat);
    this.plume.position.z = 13.3;
    this.plume.castShadow = false;
    this.plume.visible = false;
    this.group.add(this.plume);
    // radiators
    this.radiators = [];
    for (const s of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(s * 2.3, 0.9, 0.2);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.07, 3.6), this.radiator);
      panel.position.x = s * 4.6;
      pivot.add(panel);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.3), this.dark);
      arm.position.x = s * 0.35;
      pivot.add(arm);
      pivot.rotation.z = s * 0.12;
      const nav = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), s < 0 ? this.navRed : this.navGreen);
      nav.position.set(s * 8.9, 0.07, 0);
      pivot.add(nav);
      this.group.add(pivot);
      this.radiators.push(pivot);
    }
    // high-gain antenna on a boom
    this.antenna = new THREE.Group();
    this.antenna.position.set(0, 2.25, 0.5);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.6, 8), this.steel);
    mast.position.y = 0.8;
    this.antenna.add(mast);
    this.dish = new THREE.Group();
    this.dish.position.y = 1.65;
    const dishPts = [];
    for (let i = 0; i <= 12; i++) { const t = i / 12; dishPts.push(new THREE.Vector2(t * 1.35, t * t * 0.42)); }
    const dishM = new THREE.Mesh(new THREE.LatheGeometry(dishPts, 40), new THREE.MeshStandardMaterial({ color: 0xe2e0da, roughness: 0.6, metalness: 0.05, side: THREE.DoubleSide }));
    dishM.rotation.x = Math.PI / 2;
    this.dish.add(dishM);
    const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6), this.steel);
    feed.rotation.x = Math.PI / 2; feed.position.z = -0.45;
    this.dish.add(feed);
    this.antenna.add(this.dish);
    this.group.add(this.antenna);
    // RCS quads
    for (const [x, y] of [[1.95, 1.0], [-1.95, 1.0], [1.95, -1.0], [-1.95, -1.0]]) {
      const q = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.5), this.dark);
      q.position.set(x, y, -10.4);
      this.group.add(q);
    }
    // landing legs
    this.legs = [];
    const legAngles = [Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75];
    for (const a of legAngles) {
      const hinge = new THREE.Group();
      const zPos = Math.sin(a) > 0 ? -7.5 : 4.5;
      hinge.position.set(Math.cos(a) > 0 ? 2.0 : -2.0, -1.4, zPos);
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 2.6, 10), this.steel);
      upper.position.y = -1.3;
      hinge.add(upper);
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.14, 20), this.dark);
      foot.position.y = -2.62;
      hinge.add(foot);
      hinge.userData.side = Math.cos(a) > 0 ? 1 : -1;
      this.group.add(hinge);
      this.legs.push(hinge);
    }
    // navigation lights: red to port, green to starboard, white strobe on the tail
    const lightG = new THREE.SphereGeometry(0.09, 8, 6);
    const strobe = new THREE.Mesh(lightG, this.strobe); strobe.position.set(0, 2.55, 4.6); this.group.add(strobe);
    const strobe2 = new THREE.Mesh(lightG, this.strobe); strobe2.position.set(0, -2.1, -9.0); this.group.add(strobe2);
    // floodlight housing
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.3, 12), this.dark);
    lamp.rotation.x = Math.PI / 2; lamp.position.set(0, -2.15, -11.4);
    this.group.add(lamp);
    this.lampLens = new THREE.Mesh(new THREE.CircleGeometry(0.2, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) }));
    this.lampLens.position.set(0, -2.15, -11.56); this.lampLens.rotation.y = Math.PI;
    this.group.add(this.lampLens);
    this.lampPos = new THREE.Vector3(0, -2.15, -11.6);
  }

  // gear: 0 stowed .. 1 deployed; thrust 0..1; heat 0..1+
  animate(t, dt, { gear, thrust, heat, lights, cruise, solDirLocal, cabinLight, expo = 1, jumpGlow = 0 }) {
    // emissive surfaces are set in exposed units so they read the same near a star or far from one
    const k = 1 / Math.max(expo, 1e-6);
    this.gear += (gear - this.gear) * Math.min(1, dt * 1.6);
    for (const leg of this.legs) {
      const s = leg.userData.side;
      leg.rotation.z = s * (this.gear * 0.38 - (1 - this.gear) * 1.45);
    }
    this.bottom = 2.65 + this.gear * 1.25;
    for (const r of this.radiators) r.rotation.z = Math.sign(r.position.x) * (0.12 - this.gear * 0.2);
    const g = thrust;
    const jg = jumpGlow;
    this.glow.color.setRGB(3 * g + 0.15 * (cruise ? 1 : 0) + 4 * jg, 4 * g + 0.22 * (cruise ? 1 : 0) + 5 * jg, 9 * g + 0.5 * (cruise ? 1 : 0) + 9 * jg).multiplyScalar(2.5 * k);
    this.plume.visible = g > 0.05;
    this.plumeMat.uniforms.uI.value = g * 0.25 * k;
    this.plumeMat.uniforms.uT.value = t;
    const h = Math.max(0, heat - 0.35);
    this.radiator.emissive.setRGB(h * 1.6, h * 0.45, h * 0.12).multiplyScalar(0.8 * k);
    const blink = (t % 1.6) < 0.08;
    const navOn = lights ? 1 : 0.4;
    this.navRed.color.setRGB(6, 0.25, 0.1).multiplyScalar(navOn * k);
    this.navGreen.color.setRGB(0.15, 5, 1.4).multiplyScalar(navOn * k);
    this.strobe.color.setScalar(blink ? 14 * k : 0);
    this.cabin.color.setRGB(0.9, 0.62, 0.35).multiplyScalar((cabinLight ? 0.35 : 0.08) * k);
    this.lampLens.material.color.setScalar(lights ? 25 * k : 0);
    if (solDirLocal) {
      // the dish keeps pointing home
      const d = solDirLocal;
      const yaw = Math.atan2(-d[0], -d[2]);
      const pitch = Math.asin(Math.max(-1, Math.min(1, d[1])));
      this.antenna.rotation.y = yaw;
      this.dish.rotation.x = Math.max(-0.4, Math.min(1.4, pitch));
    }
  }

  setEnvMap(env) {
    for (const m of [this.hull, this.foil, this.dark, this.steel, this.radiator, this.glass]) {
      m.envMap = env;
      m.needsUpdate = true;
    }
  }
}
