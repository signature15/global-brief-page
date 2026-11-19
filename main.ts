/**
 * Global news briefing for Wednesday, 18 November 2026: a single-page broadsheet.
 * Masthead displays the publication banner, date, and the defining motto: 30 STORIES - 7 REGIONS - ONE PAGE.
 * Day-in-numbers section summarizes key statistics and figures below the header to set context.
 * Three lead stories anchor the editorial focus, numbered to establish hierarchy.
 * Seven-region grid organizes coverage across Middle East, United States, Asia-Pacific, Europe, Africa, Ukraine, and World.
 * Morning stat cards and afternoon briefings (stories 4–14) populate the grid with breaking updates and analysis.
 * Evening briefs round out the day with sixteen concluding stories, each tagged by geography and subject matter.
 * Sources footer attributes reporting to Reuters, Associated Press, Agence France-Presse, BBC, NASA, World Health Organization, and UN News.
 * Entry.png is delivered as a static, byte-identical image file; no network calls or regeneration occur.
 * Output directory defaults to ./output; set MAKEFUN_OUTPUT_DIR to customize where the image lands.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourceFile = join(__dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
const outputFile = join(outputDir, 'entry.png');

copyFileSync(sourceFile, outputFile);
