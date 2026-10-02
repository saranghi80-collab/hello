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
  const game = new Game();
  await game.boot();
}

start();
