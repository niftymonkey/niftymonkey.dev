# Showcase screenshot checklist

One row per shot. Frames and the shot picks come from `docs/showcase-brief.md` section 6. Files go in `public/showcase/<project>/`.

## Sizes

| Frame | Ratio | Capture at | File |
|---|---|---|---|
| Desktop | 16:10 | 1440 x 900 viewport, 2x, so 2880 x 1800 | PNG |
| Detail | 4:3 | 1200 x 900 viewport, 2x, so 2400 x 1800 | PNG |
| Phone | 9:19.5 | iPhone 14 Pro Max native screenshot, 1290 x 2796 | PNG |
| Strip | 21:9 | capture the full game screen; the agent crops | PNG |
| Text | as rendered | save the terminal output as plain text; the agent renders it | TXT |

Ratio matters more than exact pixels. A capture at a different size that has the right ratio is fine. A capture with the wrong ratio gets cropped by the agent, so leave room around the thing that matters.

**Browser captures, on the laptop:** open Chrome DevTools, toggle the device toolbar, set a custom size (1440 x 900 or 1200 x 900) and device pixel ratio 2, then use the toolbar's menu, "Capture screenshot". Light or dark: the app's own default.

**Desktop apps:** size the window to the ratio, then take an OS screenshot of the window only. No desktop behind it.

**Phone:** a normal screenshot. No cropping, the frame takes the whole screen.

**Text:** run the command in a terminal at least 100 columns wide and paste the output into the named `.txt` file, complete. The agent sets it in the site's mono at the frame size.

## Who

- **Mark:** desktop apps (champ-sage, session-scribe), self-hosted (boswell, costs-portal), anything behind login (brief, ai-consensus, idea-vault, md's revision history, Grafana), the phone app (review-kit), and game states that need play.
- **Agent:** public pages, the site itself, game start screens, the Tool Radar artifact, and every text render.

## The list

Status column: `todo`, `done`, or `skip` with a reason.

### boswell (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 1 | Chat with citation cards | Desktop | localhost:3000 | A conversation with at least two citation cards visible in the margin, an answer that cites memory | `boswell/chat.png` | todo |
| 2 | Provenance graph | Detail | localhost:3001, an entity page | A graph with enough nodes to read as a graph, the entity name visible | `boswell/graph.png` | todo |
| 3 | `just audit-turn <id>` | Text | terminal | One turn traced through extraction, resolution, retrieval; pick a turn that resolved a name | `boswell/audit-turn.txt` | todo |

### champ-sage (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 4 | Overlay strip over a live game | Strip | in game, Windows | The coaching strip with augment badges showing, over real gameplay; capture the full screen | `champ-sage/overlay.png` | todo |
| 5 | Desktop window in champ select | Detail | the app window | The champ select surface with a pick or a coaching feed populated | `champ-sage/champ-select.png` | todo |
| 6 | Eval dashboard | Detail | `pnpm eval:serve` in a browser | A results table with scores against real game states | `champ-sage/eval.png` | todo |

### brief (Mark, logged in)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 7 | Brief detail page | Desktop | brief.niftymonkey.dev, a brief | Player, chapter grid, timestamps; pick a video with a rich chapter set | `brief/detail.png` | todo |
| 8 | Library with filters | Detail | the logged-in root | Search or a tag filter applied, several briefs showing | `brief/library.png` | todo |
| 9 | The `brief` CLI | Text | terminal | One run: the command with a YouTube URL, any auth line, and the summary landing; collections are not on production, so they are out (Mark, 2026-09-06) | `brief/cli.txt` | todo |

### the-cabinet (Mark for 10 and 12, agent for 11)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 10 | The Hungry Grave at full weapon levels | Desktop | hungry-grave.vercel.app | Mid-run, the screen filled with the player's own projectiles; capture at 1440 x 900 | `the-cabinet/hungry-grave.png` | todo |
| 11 | Housewarming | Detail | housewarming.niftymonkey.dev | Mid-game, a few spirits named, if Mark has a save; else the opening screen | `the-cabinet/housewarming.png` | todo |
| 12 | Replay at a chosen tick | Detail | `#/replay` route | One kept run replaying, the tick control visible | `the-cabinet/replay.png` | todo |

### regimen (agent runs the commands here; Mark reads the text before it is used)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 13 | `regimen rollup` | Text | this machine | A rollup with patterns and suggested fixes, the colleague voice | `regimen/rollup.txt` | todo |
| 14 | `regimen status` | Text | this machine | Installed harnesses, daemon health, unassessed count | `regimen/status.txt` | todo |
| 15 | Grafana dashboard | Detail | Grafana Cloud (Mark) | A dashboard fed by the OTLP bridge with data on it | `regimen/grafana.png` | todo |

### md (agent for 16, Mark for 17)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 16 | Reader with outline rail | Desktop | md.niftymonkey.dev/v/<slug> | A doc with the outline rail open, Shiki code and a Mermaid diagram in view | `md/reader.png` | todo |
| 17 | Revision history | Detail | /edit/<slug>/revisions | Several revisions with byte-delta badges | `md/revisions.png` | todo |

### pickai (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 18 | Rule rail and results table | Desktop | the pickai web app | A rule or two applied, the count cut, results ordered | `pickai/decision.png` | todo |
| 19 | Per-model panel | Detail | same | One model open, provenance and dates beside the numbers | `pickai/model-panel.png` | todo |

### ai-consensus (Mark, logged in with keys)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 20 | A run in progress | Desktop | ai-consensus.niftymonkey.dev | Model columns streaming side by side, the round indicator showing | `ai-consensus/run.png` | todo |
| 21 | Rounds panel | Detail | same, after the run | The panel expanded, refinements beside the evaluator's verdict | `ai-consensus/rounds.png` | todo |

### niftymonkey.dev (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 22 | Homepage listing | Desktop | niftymonkey.dev | The `ls -la ./projects/` listing with permission strings | `niftymonkey-dev/home.png` | todo |
| 23 | Notebook entry | Detail | the adopting-AI dossier | Rated evidence cards and the contents rail in view | `niftymonkey-dev/notebook.png` | todo |

### costs-portal (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 24 | Dashboard | Desktop | localhost:3000 | Project cards with sparklines, the watchman panel, the long arc, real months of data | `costs-portal/dashboard.png` | todo |
| 25 | Project detail | Detail | /projects/<id> | Composition and spend over time for one project | `costs-portal/project.png` | todo |

### review-kit (agent for 26, Mark for 27)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 26 | Landing page | Desktop | review-kit.niftymonkey.dev | The top of the page | `review-kit/landing.png` | todo |
| 27 | Capture with waveform | Phone | the app, Capture tab | The full-screen recording overlay mid-recording, waveform live | `review-kit/capture.png` | todo |

### idea-vault (Mark, logged in)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 28 | Refine wizard mid-flow | Desktop | idea-vault.niftymonkey.dev | A step past braindump with an AI suggestion open | `idea-vault/wizard.png` | todo |

### session-scribe (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 29 | Generation in flight | Desktop | the app window | Discovery, extraction, synthesis with scene count, elapsed time, activity log; collapsed phase summaries above | `session-scribe/generation.png` | todo |

### tool-radar (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 30 | The Tool Radar | Desktop | Mark's artifact, https://claude.ai/code/artifact/a0a20711-072b-48f4-b588-5680c6b44631 (needs login; the agent serves its saved HTML locally) | The Radar view with the adopt, trial, assess, hold rings populated, the areas panel open | `tool-radar/radar.png` | todo |

### tts-bake-off (Mark supplies the text)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 31 | `say.py` in a terminal | Text | the GPU box | `say.py --engine kokoro "..."` and its short output, then a second line with a different engine | `tts-bake-off/say.txt` | todo |

## Counts

| Who | Shots |
|---|---|
| Mark | 21 (1 to 10, 12, 15, 17, 20, 21, 24, 25, 27, 28, 29, 31) |
| Agent | 10 (11, 13, 14, 16, 18, 19, 22, 23, 26, 30) and every text render |

## Reused in the hero fan

No extra captures. The fan uses 1, 24, 16, 27, and 10.
