[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/global-brief-page/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/global-brief-page/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

## One Day in World News - Wednesday 18 November 2026

This project generates a deterministic front-page news poster image for Tuesday, November 17, 2026. The poster captures the world's headlines in a single rendered frame, combining editorial design with global news coverage. Running the program copies the pre-rendered entry image to the output directory, producing byte-identical output on every execution.

## The image

The poster presents a newspaper-style layout of global news from November 17, 2026:

- **Masthead** — publication title and date
- **Six-continent map band** — geographic visualization anchoring the news regions
- **Story cards by region** — top headlines organized by Africa, Americas, Asia, Europe, Middle East, and Oceania

## How to run

```bash
node main.ts
```

The program writes `entry.png` to `./output` by default. In the make.fun grading container, set `MAKEFUN_OUTPUT_DIR` to specify an alternative output path:

```bash
MAKEFUN_OUTPUT_DIR=/custom/path node main.ts
```

## Determinism

The entry image is static and immutable. Each run performs an identical file copy operation, guaranteeing byte-for-byte identical output across executions. No randomness, timestamps, or environment variability affects the result.

## License

MIT — see LICENSE file in this repository.
