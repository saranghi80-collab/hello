import { Game } from './game.js';

function boot() {
  const app = document.getElementById('app');
  const game = new Game(app);
  window.__game = game; // handy for debugging from the console
  game.start();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
