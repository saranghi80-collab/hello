import meadow from './meadow.js';
import dune from './dune.js';
import frost from './frost.js';
import cinder from './cinder.js';
import lunar from './lunar.js';

cinder.unlockNext = (game) => game.save.flag('boss_cinder');

export const KINGDOMS = { meadow, dune, frost, cinder, lunar };
export const KINGDOM_ORDER = ['meadow', 'dune', 'frost', 'cinder', 'lunar'];
