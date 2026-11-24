/* eslint-env node */
/* global console, process */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_CLIENT_DIR = path.resolve(__dirname, '../dist/client/_astro');

// Performance budget definition (SPA-035)
// Max size for any single client JS bundle
const MAX_CHUNK_SIZE_KB = 250;
const MAX_GZIP_SIZE_KB = 80;

function checkBundleSize() {
  if (!fs.existsSync(DIST_CLIENT_DIR)) {
    console.error(`[bundle-size] Error: ${DIST_CLIENT_DIR} does not exist. Run build first.`);
    process.exit(1);
  }

  const files = fs.readdirSync(DIST_CLIENT_DIR).filter((f) => f.endsWith('.js'));
  if (files.length === 0) {
    console.error('[bundle-size] Warning: No JavaScript files found in client build output.');
    process.exit(1);
  }

  console.log('\n================ BUNDLE SIZE AUDIT (SPA-035) ================');
  console.log(
    `Performance Budget: Max chunk = ${MAX_CHUNK_SIZE_KB} kB (gzip: ${MAX_GZIP_SIZE_KB} kB)\n`
  );
  console.log(
    `${'File'.padEnd(40)} | ${'Size (kB)'.padStart(12)} | ${'Gzip (kB)'.padStart(12)} | Status`
  );
  console.log('-'.repeat(80));

  let failed = false;

  for (const file of files) {
    const fullPath = path.join(DIST_CLIENT_DIR, file);
    const content = fs.readFileSync(fullPath);
    const sizeKb = content.length / 1024;
    const gzipSizeKb = zlib.gzipSync(content).length / 1024;

    const overSize = sizeKb > MAX_CHUNK_SIZE_KB;
    const overGzip = gzipSizeKb > MAX_GZIP_SIZE_KB;
    const status = overSize || overGzip ? '❌ EXCEEDED' : '✅ OK';

    if (overSize || overGzip) {
      failed = true;
    }

    console.log(
      `${file.padEnd(40)} | ${sizeKb.toFixed(2).padStart(12)} | ${gzipSizeKb.toFixed(2).padStart(12)} | ${status}`
    );
  }

  console.log('-'.repeat(80));

  if (failed) {
    console.error('\n❌ Bundle size budget exceeded! Optimize chunks before committing.\n');
    process.exit(1);
  } else {
    console.log('\n✅ All client JavaScript bundles are within the performance budget!\n');
  }
}

checkBundleSize();
