// Bundles src/ into one self-contained index.html (no server needed, works from file://).
//   node build.mjs                 build once
//   node build.mjs --watch         rebuild on change
//   node build.mjs --fragment out  also write a body-only copy (for hosts that add their own <head>)
import * as esbuild from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const watch = args.includes('--watch');
const fragIdx = args.indexOf('--fragment');
const fragmentOut = fragIdx >= 0 ? args[fragIdx + 1] : null;
const dev = args.includes('--dev');

async function assemble(js) {
  const [template, css] = await Promise.all([
    readFile(join(root, 'src/index.template.html'), 'utf8'),
    readFile(join(root, 'src/ui/style.css'), 'utf8'),
  ]);
  // Keep the inline script from closing its own tag early.
  const safeJs = js.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');
  const page = template
    .replace('/*__CSS__*/', () => css)
    .replace('/*__JS__*/', () => safeJs);
  await writeFile(join(root, 'index.html'), page);
  if (fragmentOut) {
    // Strip the document wrapper: <!doctype>, <html>, <head>, <body> tags.
    const frag = page
      .replace(/<!doctype html>\s*/i, '')
      .replace(/<\/?html[^>]*>\s*/gi, '')
      .replace(/<\/?head>\s*/gi, '')
      .replace(/<\/?body[^>]*>\s*/gi, '')
      .replace(/<meta charset[^>]*>\s*/i, '')
      .replace(/<meta name="viewport"[^>]*>\s*/i, '');
    await writeFile(fragmentOut, frag);
  }
  const kb = (page.length / 1024).toFixed(0);
  console.log(`[build] index.html ${kb} KB${fragmentOut ? ' + fragment' : ''}`);
}

const options = {
  entryPoints: [join(root, 'src/main.js')],
  bundle: true,
  minify: !dev,
  sourcemap: false,
  format: 'iife',
  target: ['es2020'],
  write: false,
  legalComments: 'eof',
  logLevel: 'warning',
  plugins: [{
    name: 'inline-html',
    setup(build) {
      build.onEnd(async (result) => {
        if (result.errors.length) return;
        const js = result.outputFiles.find((f) => f.path.endsWith('.js'))?.text ?? '';
        await assemble(js);
      });
    },
  }],
  outfile: join(root, 'game.js'),
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log('[build] watching src/ ...');
} else {
  await esbuild.build(options);
}
