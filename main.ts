/**
 * entry.png — "The Daily Brief", a one-page printed-style broadsheet for Wednesday 18 November 2026.
 *
 * Masthead: a tall serif "THE DAILY BRIEF" flanked by an oversized date numeral (NOV 18, WED 2026),
 * with the motto "30 STORIES - 7 REGIONS - ONE PAGE" set beneath the title.
 *
 * Directly under the masthead sits a color-coded region tally strip — MIDDLE EAST 7, US 7, ASIA 6,
 * EUROPE 4, WORLD 3, UKRAINE 2, AFRICA 1 — followed by "THE DAY IN NUMBERS", a strip of four
 * headline figures (64 children killed in Yemen, 330K displaced there, Voyager 1 at 25.9 billion km,
 * and the EUR45B EU loan to Ukraine).
 *
 * Three numbered lead stories open the page: Xi greeting Trump on the tarmac in Shenzhen,
 * Kuwait and Bahrain intercepting Iranian drones, and Voyager 1 reaching one light-day from Earth.
 * A MORNING band of four large stat cards (141 drones at Ukraine, the 56-44 Senate result, 19 dead
 * in the Siberia crash, 46 hurt in Prague) bridges into an AFTERNOON grid of stories 4 through 14,
 * each tagged with region, topic, and wire source.
 *
 * The EVENING section closes the page with sixteen one-line briefs (stories 15-30) plus a candid
 * "left out on purpose" note listing the previous day's stories that were deliberately dropped.
 * A footer credits the sources — Reuters, AP, AFP, BBC, WHO, UN News — and asserts that every
 * story happened, or was first reported, on Wednesday 18 November 2026.
 *
 * The image is shipped pre-rendered: this script only copies entry.png into the output directory
 * (./output by default, override with MAKEFUN_OUTPUT_DIR), so every run produces identical bytes.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourceFile = join(__dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
const outputFile = join(outputDir, 'entry.png');

copyFileSync(sourceFile, outputFile);
