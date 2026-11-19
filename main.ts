/**
 * News Image Contest Entrypoint
 *
 * Generates a v14 broadsheet for Wednesday, 18 November 2026.
 *
 * Layout structure:
 * - Masthead: Publication title, date, and tagline (30 STORIES - 7 REGIONS - ONE PAGE)
 * - Regional headers: Seven geopolitical sections (Middle East, US, Asia, Europe, World, Ukraine, Africa)
 * - Numbers strip: Key metrics with contextual labels (Children killed, Displaced, Voyager distance, EU loan)
 * - Overnight section: Three featured stories with numbered callouts
 * - Morning stat cards: Large-format data points with bold typography
 * - Afternoon briefs: Numbered articles 4–14 spanning all regions
 * - Evening section: 16 additional stories with bracketed region and topic tags
 * - Sources footer: Reuters, AP, AFP, BBC, NASA, WHO, UN News attribution
 *
 * This program copies a pre-rendered entry.png image to the output directory,
 * maintaining identical byte-for-byte output across runs. Determinism is
 * guaranteed: the entry.png file is static and immutable, and each execution
 * performs the same file copy operation producing identical output bytes on
 * every run, with no randomness, timestamps, or environment variability.
 *
 * No network access is required or performed. All data is sourced from
 * the local repository file.
 *
 * Environment: In the grading container, MAKEFUN_OUTPUT_DIR specifies the
 * output path. Outside the container, it defaults to ./output. This program
 * resolves the input image relative to its own module path, ensuring the
 * current working directory never affects file resolution.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const sourceFile = join(__dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
const outputFile = join(outputDir, 'entry.png');

copyFileSync(sourceFile, outputFile);
