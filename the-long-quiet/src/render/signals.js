// Things other people left behind: survey beacons, dead probes, crashed ships, and the
// occasional structure nobody human built.

import * as THREE from 'three';
import { Rng } from '../core/rng.js';
import { ShipModel } from './shipmodel.js';
import { signalPosition, bodyOrientation, latLonToVec, qRotate, qMul } from '../world/system.js';

function std(color, metal = 0.3, rough = 0.6) {
  return new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough, envMapIntensity: 0.7 });
}

function beaconModel(seed) {
  const g = new THREE.Group();
  const body = std(0xb9b5ac, 0.2, 0.7);
  const dark = std(0x2a2b2e, 0.6, 0.45);
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.6, 8), body);
  g.add(core);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 4.2, 6), dark);
  mast.position.y = 2.9; g.add(mast);
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x1a2236, metalness: 0.5, roughness: 0.25 });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.05, 1.1), panelMat);
    p.position.set(s * 2.4, 0.2, 0); g.add(p);
  }
  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.8, 20, 8, 0, Math.PI * 2, 0, 0.7), std(0xd8d6d0, 0.1, 0.6));
  dish.material.side = THREE.DoubleSide;
  dish.position.set(0, -1.2, 0); dish.rotation.x = Math.PI; g.add(dish);
  const lamp = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0, 0) });
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), lamp);
  light.position.y = 5.05; g.add(light);
  g.userData.lamp = lamp;
  g.userData.radius = 6;
  return g;
}

function probeModel(seed) {
  const r = new Rng(seed);
  const g = new THREE.Group();
  const foil = new THREE.MeshStandardMaterial({ color: 0x9a7a3a, metalness: 0.9, roughness: 0.45 });
  const dark = std(0x333333, 0.5, 0.6);
  const bus = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.8, 6), foil);
  g.add(bus);
  const dishPts = [];
  for (let i = 0; i <= 10; i++) { const t = i / 10; dishPts.push(new THREE.Vector2(t * 1.9, t * t * 0.5)); }
  const dish = new THREE.Mesh(new THREE.LatheGeometry(dishPts, 32), std(0xcfccc4, 0.05, 0.75));
  dish.material.side = THREE.DoubleSide;
  dish.position.y = 0.4; g.add(dish);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 6.5, 5), dark);
  boom.rotation.z = Math.PI / 2; boom.position.set(3.3, -0.1, 0); g.add(boom);
  const rtg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.1, 10), dark);
  rtg.rotation.z = Math.PI / 2; rtg.position.set(-1.9, -0.2, 0); g.add(rtg);
  const mag = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 9, 4), dark);
  mag.rotation.x = Math.PI / 2; mag.rotation.z = 0.4; mag.position.set(0, -0.3, 4.4); g.add(mag);
  g.userData.radius = 6;
  g.userData.tumble = [r.range(-0.03, 0.03), r.range(-0.05, 0.05), r.range(-0.02, 0.02)];
  return g;
}

function wreckModel(seed) {
  const r = new Rng(seed);
  const g = new THREE.Group();
  const scorched = std(0x3c3833, 0.35, 0.85);
  const pale = std(0x8f8a80, 0.2, 0.8);
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 14, 20, 1, true, 0, Math.PI * 1.4), pale);
  hull.material.side = THREE.DoubleSide;
  hull.rotation.set(Math.PI / 2 - 0.2, 0.3, 0.4); hull.position.y = 0.6; g.add(hull);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(2.4, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), scorched);
  nose.position.set(9, 0.5, 4); nose.rotation.set(1.2, 0.4, 0.2); g.add(nose);
  for (let i = 0; i < 26; i++) {
    const s = r.range(0.3, 2.2);
    const d = new THREE.Mesh(new THREE.BoxGeometry(s, s * r.range(0.05, 0.4), s * r.range(0.3, 1.4)), r.chance(0.5) ? scorched : pale);
    const a = r.range(0, Math.PI * 2), dist = r.range(4, 40);
    d.position.set(Math.cos(a) * dist, s * 0.05, Math.sin(a) * dist * 0.6 + 6);
    d.rotation.set(r.range(-0.4, 0.4), r.range(0, 6), r.range(-0.4, 0.4));
    g.add(d);
  }
  const fin = new THREE.Mesh(new THREE.BoxGeometry(7, 0.08, 3), std(0x45474c, 0.3, 0.6));
  fin.position.set(-8, 1.2, -6); fin.rotation.set(0.3, 0.5, 0.9); g.add(fin);
  g.userData.radius = 30;
  return g;
}

function monolithModel() {
  const g = new THREE.Group();
  const black = new THREE.MeshStandardMaterial({ color: 0x020203, metalness: 0.9, roughness: 0.12, envMapIntensity: 0.25 });
  const slab = new THREE.Mesh(new THREE.BoxGeometry(12, 54, 3), black);
  slab.position.y = 22; slab.rotation.y = 0.4; g.add(slab);
  g.userData.radius = 60;
  return g;
}

function ringModel(seed) {
  const g = new THREE.Group();
  const r = new Rng(seed);
  const R = 38000, tube = 1600;
  const geo = new THREE.TorusGeometry(R, tube, 24, 220, Math.PI * r.range(0.25, 0.42));
  const mat = new THREE.MeshStandardMaterial({ color: 0x3b3a38, metalness: 0.8, roughness: 0.5, envMapIntensity: 0.4 });
  const ring = new THREE.Mesh(geo, mat);
  g.add(ring);
  // regular ribs along the arc
  const ribMat = std(0x1d1d1f, 0.7, 0.5);
  const arc = geo.parameters.arc;
  for (let i = 0; i <= 40; i++) {
    const a = (i / 40) * arc;
    const rib = new THREE.Mesh(new THREE.TorusGeometry(tube * 1.08, 120, 6, 24), ribMat);
    rib.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    rib.rotation.y = Math.PI / 2;
    rib.rotation.x = a;
    rib.lookAt(new THREE.Vector3(Math.cos(a) * R - Math.sin(a), Math.sin(a) * R + Math.cos(a), 0));
    g.add(rib);
  }
  g.userData.radius = R + tube;
  g.userData.spin = 0.0004;
  return g;
}

export const SIGNAL_INFO = {
  beacon: { label: 'Survey beacon', range: 4000 },
  probe: { label: 'Derelict probe', range: 3000 },
  wreck: { label: 'Wreckage', range: 5000 },
  monolith: { label: 'Unidentified structure', range: 6000 },
  ring: { label: 'Orbital structure', range: 120000 },
  petrel: { label: 'Vessel PETREL', range: 4000 },
};

export class SignalView {
  constructor(scene, sys, planetViews) {
    this.sys = sys;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.scene = scene;
    this.items = sys.signals.map((sig, i) => {
      let model;
      switch (sig.type) {
        case 'beacon': model = beaconModel(sig.seed); break;
        case 'probe': model = probeModel(sig.seed); break;
        case 'wreck': model = wreckModel(sig.seed); break;
        case 'monolith': model = monolithModel(); break;
        case 'ring': model = ringModel(sig.seed); break;
        case 'petrel': {
          const ship = new ShipModel('PETREL');
          ship.animate(0, 10, { gear: 1, thrust: 0, heat: 0, lights: false, cruise: false });
          model = ship.group;
          model.userData.radius = 20;
          model.userData.ship = ship;
          break;
        }
        default: model = beaconModel(sig.seed);
      }
      model.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
      this.root.add(model);
      return { sig, model, index: i, worldPos: [0, 0, 0], local: null, settled: false };
    });
    this.planetViews = planetViews;
  }

  // Surface signals need the terrain height under them, computed once.
  settle(item) {
    const sig = item.sig;
    if (sig.placement !== 'surface' || item.settled) return;
    const b = this.sys.bodies[sig.body];
    const dir = latLonToVec(sig.lat, sig.lon, 1);
    const pv = this.planetViews[sig.body];
    const h = pv.heightAt(dir);
    const lift = sig.type === 'petrel' ? 3.6 : sig.type === 'monolith' ? -1 : 0.2;
    sig.local = dir.map((c) => c * (b.radius + h + lift));
    item.up = dir;
    item.settled = true;
  }

  update(ctx, t, camWorld, expo = 1) {
    const glints = [];
    for (const it of this.items) {
      const sig = it.sig;
      this.settle(it);
      const p = signalPosition(this.sys, sig, t);
      it.worldPos = p;
      const rel = [p[0] - camWorld[0], p[1] - camWorld[1], p[2] - camWorld[2]];
      const dist = Math.hypot(rel[0], rel[1], rel[2]);
      it.rel = rel; it.dist = dist;
      const rad = it.model.userData.radius;
      const tiny = Math.atan(rad / dist) < ctx.pixelAngle * 1.5;
      it.model.visible = !tiny && dist < 4e8;
      it.model.position.set(rel[0], rel[1], rel[2]);
      if (sig.placement === 'surface') {
        // stand upright on the local ground
        const q = bodyOrientation(this.sys, sig.body, t);
        const up = it.up;
        const base = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(up[0], up[1], up[2]));
        const spin = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), (sig.seed % 628) / 100);
        const bq = new THREE.Quaternion(q[0], q[1], q[2], q[3]);
        it.model.quaternion.copy(bq).multiply(base).multiply(spin);
      } else {
        const tu = it.model.userData.tumble;
        if (tu) it.model.rotation.set(t * tu[0], t * tu[1], t * tu[2]);
        if (it.model.userData.spin) it.model.rotation.z = t * it.model.userData.spin;
      }
      const lamp = it.model.userData.lamp;
      const blink = (t * 0.7 + sig.seed % 10) % 2.2 < 0.18;
      if (lamp) lamp.color.setRGB(blink ? 9 / expo : 0, blink ? 2.5 / expo : 0, blink ? 0.8 / expo : 0);
      if (tiny && dist < 3e7) {
        // a blinking beacon light, or a faint glint
        const f = sig.type === 'beacon' ? (blink ? 0.02 / expo : 0) : 0;
        if (f > 0) glints.push({ rel, dist, flux: [f * (6000 / dist) ** 2, f * 0.3 * (6000 / dist) ** 2, f * 0.1 * (6000 / dist) ** 2] });
      }
    }
    return glints;
  }

  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((o) => { o.geometry?.dispose?.(); });
  }
}
