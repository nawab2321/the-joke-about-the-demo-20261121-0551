# Live Repro

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/nawab2321/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/nawab2321/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Live Repro is a one-line joke about an AI coding agent's patch crashing a live demo. It was written for [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).

## Run it

Use Node.js 22 in an environment with a writable `/output` directory, as provided by the make.fun sandbox.

```sh
node main.ts
```

The program writes `/output/entry.txt` as a single non-blank UTF-8 line of at most 280 Unicode code points with no trailing newline. It uses Node's standard library and runs offline without installing packages.

## Verify determinism

```sh
set -eu
first=$(mktemp)
trap 'rm -f "$first"' EXIT
node main.ts
cp /output/entry.txt "$first"
node main.ts
cmp "$first" /output/entry.txt
sha256sum "$first" /output/entry.txt
```
