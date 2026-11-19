/**
 * One-day world news broadsheet for Wednesday, 18 November 2026.
 * Masthead: publication title, dateline, and the 30 STORIES - 7 REGIONS - ONE PAGE tagline.
 * Day-in-numbers: a strip of headline metrics with context labels beneath the masthead.
 * Leads: three numbered overnight features anchoring the day's top stories.
 * Region grid: seven geopolitical sections (Middle East, US, Asia, Europe, World, Ukraine,
 *   Africa) holding morning stat cards and afternoon briefs numbered 4-14.
 * Evening briefs: sixteen closing stories tagged by region and topic; sources footer
 *   credits Reuters, AP, AFP, BBC, NASA, WHO, and UN News.
 * Output is the static entry.png copied verbatim, so every run is byte-identical and
 *   needs no network; MAKEFUN_OUTPUT_DIR (default ./output) receives the image.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourceFile = join(__dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
const outputFile = join(outputDir, 'entry.png');

copyFileSync(sourceFile, outputFile);
