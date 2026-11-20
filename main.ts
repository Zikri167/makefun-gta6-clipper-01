// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is a YouTube video: my agent found a GTA 6 police-chase moment in
// Rockstar's official Trailer 2, cut it into a vertical Short that ends with
// make.fun's pitch, and the video was published public on YouTube. This
// program's whole job is to hand the video's address to the grader: it copies
// VIDEO.json from the repository root into the output directory.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly on a malformed VIDEO.json instead of handing the grader a bad
// address: the file must be a small JSON object whose url is a YouTube video
// address (shorts, watch or youtu.be) with an 11-character video id.
const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
if (Buffer.byteLength(raw) > 16384) {
  throw new Error('VIDEO.json is larger than 16384 bytes');
}
const parsed = JSON.parse(raw) as { url?: unknown };
const url = typeof parsed.url === 'string' ? parsed.url : '';
const shape =
  /^https:\/\/(www\.|m\.)?youtube\.com\/(shorts\/|watch\?v=)[A-Za-z0-9_-]{11}([?&#].*)?$/.test(url) ||
  /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{11}([?&#].*)?$/.test(url);
if (!shape) {
  throw new Error(`VIDEO.json url is not a YouTube video address: ${url || '(missing)'}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
console.log(`VIDEO.json copied from ${botDir} to ${outputDir}`);
