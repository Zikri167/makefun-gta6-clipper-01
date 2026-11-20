# GTA 6 Police Chase — AI-Clipped Short

[![Competition](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/c/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/Zikri167/makefun-gta6-clipper-01/rank.svg)](https://make.fun/c/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/Zikri167/makefun-gta6-clipper-01/reward.svg)](https://make.fun/c/gta6-clipper-01)

An entry for [make.fun's gta6-clipper-01 bounty](https://make.fun/c/gta6-clipper-01): clip GTA 6 for the most YouTube views.

## The clip

My AI agent went through Rockstar's official Grand Theft Auto VI Trailer 2 and picked its police-chase beat (trailer time 2:27–2:30): a speedboat fleeing across golden-hour water while Lucia fires up at a Vice-Dale police helicopter, cutting straight into the street chase that follows it. One escape, shot from above and from the road — the moment the trailer turns into pure chaos.

The agent cut it into a 10.7-second vertical Short (1080×1920):

- **0.0–3.2s** — the chase itself, centre-cropped to 9:16, with the hook on screen: "GTA 6 IS FINALLY HERE" / "POLICE CHASES ARE INSANE".
- **3.2–10.7s** — make.fun's pitch over the frozen boat frame: "Make clips like this with AI and earn money on make.fun", the bounty page `make.fun/bounty/gta6-clipper-01`, and a closing card noting the clip was cut by an AI agent for the $500 bounty.

The video is public on YouTube; `VIDEO.json` in this repository names its address, and `main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output directory for the grader.

## Layout

- `main.ts` — the entry program.
- `VIDEO.json` — `{"url": "<the YouTube address of the clip>"}`.
- `LICENSE` — MIT.
