import { Game } from './game/game.js';

function hasWebGL2() {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch (e) {
    return false;
  }
}

async function start() {
  if (!hasWebGL2()) {
    document.getElementById('nowebgl').hidden = false;
    return;
  }
  // Wait briefly for fonts so the HUD and hull markings use the right face.
  try {
    await Promise.race([document.fonts?.ready, new Promise((r) => setTimeout(r, 1500))]);
  } catch (e) { /* fonts are optional */ }
  const canvas = document.getElementById('scene');
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    const el = document.getElementById('nowebgl');
    el.textContent = 'The graphics context was lost (the GPU reset or ran out of memory). Your voyage autosaves; reload the page to continue.';
    el.hidden = false;
  });
  const game = new Game();
  await game.boot();
}

start();
