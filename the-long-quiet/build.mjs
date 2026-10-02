// Bundles src/ into game.js (a classic script, so index.html also works from file://)
// and writes dist/artifact.html, a single self-contained page body for hosting.
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const watch = process.argv.includes('--watch');

const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: 'game.js',
  minify: true,
  // Identifiers inside createTerrainLib are shipped to a worker via Function#toString,
  // which is safe because the function never references anything outside itself.
  legalComments: 'none',
  logLevel: 'info',
};

function writeArtifact() {
  const shell = readFileSync('index.html', 'utf8');
  const js = readFileSync('game.js', 'utf8').replace(/<\/script/gi, '<\\/script');
  const head = shell.match(/<head>([\s\S]*?)<\/head>/)[1]
    .replace(/<meta charset[^>]*>\s*/i, '')
    .replace(/<meta name="viewport"[^>]*>\s*/i, '');
  const body = shell.match(/<body>([\s\S]*?)<\/body>/)[1]
    .replace(/<script src="game\.js"><\/script>/, () => `<script>${js}</script>`);
  mkdirSync('dist', { recursive: true });
  writeFileSync('dist/artifact.html', head.trim() + '\n' + body.trim() + '\n');
}

if (watch) {
  const ctx = await esbuild.context({
    ...options,
    plugins: [{ name: 'artifact', setup(b) { b.onEnd(r => { if (!r.errors.length) writeArtifact(); }); } }],
  });
  await ctx.watch();
} else {
  await esbuild.build(options);
  writeArtifact();
}
