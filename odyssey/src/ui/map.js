// Top-down kingdom map rendered from the live scene, with checkpoint warps and player marker.
import * as THREE from 'three';
import { MOON_SVG } from './ui.js';

function snapshot(game) {
  const L = game.level;
  if (L.mapCache) return L.mapCache;
  const b = L.def.bounds || L.bounds;
  const W = 720, H = 720;
  const r = game.renderer, scene = game.scene;
  const oldSize = r.getSize(new THREE.Vector2()), oldPR = r.getPixelRatio();
  const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
  const hw = (b.maxX - b.minX) / 2, hh = (b.maxZ - b.minZ) / 2;
  const half = Math.max(hw, hh);
  const cam = new THREE.OrthographicCamera(-half, half, half, -half, 1, 2000);
  cam.position.set(cx, 900, cz);
  cam.up.set(0, 0, -1);
  cam.lookAt(cx, 0, cz);
  const hidden = [game.sky.mesh, game.player.root, game.player.cappy.mesh, game.blob, game.fx.points];
  const vis = hidden.map((o) => o.visible);
  hidden.forEach((o) => (o.visible = false));
  const fog = scene.fog, bg = scene.background;
  scene.fog = null;
  scene.background = new THREE.Color(L.def.env?.mapBg || '#1d2a4a');
  const shadowWas = r.shadowMap.enabled;
  r.setPixelRatio(1);
  r.setSize(W, H, false);
  r.render(scene, cam);
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  c.getContext('2d').drawImage(r.domElement, 0, 0, W, H);
  scene.fog = fog; scene.background = bg;
  hidden.forEach((o, i) => (o.visible = vis[i]));
  r.shadowMap.enabled = shadowWas;
  r.setPixelRatio(oldPR);
  r.setSize(oldSize.x, oldSize.y, false);
  game.resize();
  L.mapCache = { canvas: c, cx, cz, half, W, H };
  return L.mapCache;
}

export function renderMap(game, canvas, listEl, onWarp) {
  const snap = snapshot(game);
  const ctx = canvas.getContext('2d');
  const L = game.level;
  const toPx = (x, z) => [((x - (snap.cx - snap.half)) / (snap.half * 2)) * canvas.width, ((z - (snap.cz - snap.half)) / (snap.half * 2)) * canvas.height];
  const cps = L.checkpoints;
  // list
  listEl.innerHTML = '';
  cps.forEach((cp) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.className = 'm-btn cp' + (cp.active ? '' : ' off');
    b.innerHTML = `<span class="flag-dot"></span>${cp.active ? cp.name : '???'}`;
    b.disabled = !cp.active;
    b.addEventListener('click', () => cp.active && onWarp(cp));
    li.appendChild(b);
    listEl.appendChild(li);
  });
  const ui = game.ui;
  const btns = [...listEl.querySelectorAll('button:not([disabled])')];
  btns.forEach((b) => b.addEventListener('mouseenter', () => { ui.index = ui.items.indexOf(b); ui.highlight(); }));
  ui.items.push(...btns);
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * canvas.width, my = ((e.clientY - rect.top) / rect.height) * canvas.height;
    for (const cp of cps) {
      if (!cp.active) continue;
      const [px, py] = toPx(cp.pos.x, cp.pos.z);
      if (Math.hypot(px - mx, py - my) < 26) { onWarp(cp); return; }
    }
  });
  const moonImg = new Image();
  moonImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(MOON_SVG(L.def.moonColor || '#ffd43b', 24).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
  let t = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(snap.canvas, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(10,14,40,0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // collected moons
    for (const m of L.moonDefs) {
      if (!game.save.hasMoon(L.id, m.id)) continue;
      const [px, py] = toPx(m.x, m.z);
      if (moonImg.complete) ctx.drawImage(moonImg, px - 10, py - 10, 20, 20);
    }
    // checkpoints
    for (const cp of cps) {
      const [px, py] = toPx(cp.pos.x, cp.pos.z);
      ctx.fillStyle = cp.active ? '#e0202a' : '#6b6b80';
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(px, py + 14); ctx.lineTo(px, py - 16); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px, py - 16); ctx.lineTo(px + 16, py - 10); ctx.lineTo(px, py - 4); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    // player
    const p = game.player.capture || game.player;
    const [px, py] = toPx(p.pos.x, p.pos.z);
    const f = game.player.capture ? (p.facing ?? 0) : game.player.facing;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-f + Math.PI);
    const pulse = 1 + Math.sin(t * 6) * 0.12;
    ctx.scale(pulse, pulse);
    ctx.fillStyle = '#ff3b3b'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(10, 10); ctx.lineTo(0, 5); ctx.lineTo(-10, 10); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  };
  draw();
  return { update(dt) { t += dt; draw(); } };
}
