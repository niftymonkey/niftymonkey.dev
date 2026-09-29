# Showcase screenshot checklist

One row per shot. Frames and the shot picks come from `docs/showcase-brief.md` section 6. Files go in `public/showcase/<project>/`.

## Sizes

| Frame | Ratio | Capture at | File |
|---|---|---|---|
| Desktop | 16:10 | 1440 x 900 viewport, 2x, so 2880 x 1800 | PNG |
| Detail | 4:3 | 1200 x 900 viewport, 2x, so 2400 x 1800 | PNG |
| Phone | 9:19.5 | iPhone 14 Pro Max native screenshot, 1290 x 2796 | PNG |
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
| 1 | Chat with citation cards | Desktop | localhost:3000 | A conversation with at least two citation cards visible in the margin, an answer that cites memory | `boswell/chat.png` | done (Mark); the agent pixelated the health paragraph, the faded paragraph above it, and the friend names, in the file itself. No citation cards in the capture; a cited memory is underlined instead, and Mark chose to keep it (2026-09-28) |
| 2 | Memory browser | Detail | localhost:3001, Memory | A run of questions and grounded answers, each answer with its surfacing trace link (swapped in for the provenance graph, which is still a flat list with no edges; Mark, 2026-09-28) | `boswell/memory.png` | done (Mark); the agent pixelated the employer, wife, and daughters' names in the file itself |
| 3 | `just audit-turn <id>` | Text | terminal | One turn traced through extraction, resolution, retrieval; pick a turn that resolved a name | `boswell/audit-turn.txt` | done (agent, 2026-09-28); turn 019f44dd-f4c2-77f3-a105-9519cf352e95, "Tell me about my friend Richard", two persons bound (first_person_anchor, same_person_by_name), 8 retrieval hits, cited reply; friend names cut to initials in the file, Mark's own name kept |

### champ-sage (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 4 | Overlay over a live game | Desktop | in game, Windows | The coaching overlay with augment cards and verdicts, over real gameplay; capture the full screen | `champ-sage/overlay.png` | done (Mark, 2026-09-28); the capture came only as a pasted copy at 2000 x 1085 (no full-size file), cropped centered to 16:10 (1736 x 1085); the three augment cards with their EXCEPTIONAL / SITUATIONAL / WEAK verdicts, the kill feed, and the coach answer box are in frame. Was a 21:9 Strip until 2026-09-28 |
| 5 | Desktop window in champ select | Detail | the app window | The champ select surface with a pick or a coaching feed populated | `champ-sage/champ-select.png` | done (Mark, 2026-09-28); the window capture came at 1272 x 778 (pasted copy, no full-size file), cropped centered to 4:3; Mark's pick Urgot with build direction and summoner spells, the matchup analysis is a Phase 5 placeholder |
| 6 | Post-game review | Desktop | the app window, History tab | Three takeaways from a match, the coach-side timeline, and the final build matched against the plan (swapped in for the Evalite eval dashboard, Mark, 2026-09-29) | `champ-sage/post-game.png` | done (Mark, 2026-09-29); window capture at 1277 x 760 (pasted copy, no full-size file), cropped to 16:10 (1216 x 760); the Evalite capture stays on disk as `champ-sage/eval.png`, unused |

### brief (Mark, logged in)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 7 | Brief detail page | Desktop | brief.niftymonkey.dev, a brief | Player, chapter grid, timestamps; pick a video with a rich chapter set | `brief/detail.png` | done (Mark, 2026-09-28) at 4:3, not 16:10; the preview shows it in a 4:3 frame so the chapters stay in view (Mark chose this over a re-shoot; revisit once rendered) |
| 8 | Library with filters | Detail | the logged-in root | Search or a tag filter applied, several briefs showing | `brief/library.png` | done (Mark, 2026-09-28), the tag rail and date filters, twelve briefs; the agent pixelated the blood-pressure tag chip in the file itself |
| 9 | The `brief` CLI | Text | terminal | One run: the command with a YouTube URL, any auth line, and the summary landing; collections are not on production, so they are out (Mark, 2026-09-06) | `brief/cli.txt` | done (agent, 2026-09-28); `brief whoami` then `brief generate` on Matt Pocock's Uncle Bob interview, ending on the brief's URL; the whoami email is replaced with person@emailserver.com in the file |

### the-cabinet (Mark for 10 and 12, agent for 11)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 10 | The Hungry Grave at full weapon levels | Desktop | hungry-grave.vercel.app | Mid-run, the screen filled with the player's own projectiles; capture at 1440 x 900 | `the-cabinet/hungry-grave.png` | done (Mark, 2026-09-28), mid-run at tick 6018, spread shot at high level; the game now renders as a portrait column with dark margins, so the 16:10 capture has empty sides |
| 11 | Housewarming | Detail | housewarming.niftymonkey.dev | Mid-game, a few spirits named, if Mark has a save; else the opening screen | `the-cabinet/housewarming.png` | done, opening screen; shows the game's own fps counter top left; Mark may replace with a mid-game save |
| 12 | Replay at a chosen tick | Detail | `#/replay` route | One kept run replaying, the tick control visible | `the-cabinet/replay.png` | done (Mark); the 2026-09-06 capture, a verified tape at tick 9698 with the HUD showing the tick; 16:10, the agent crops to 4:3 |

### regimen (agent runs the commands here; Mark reads the text before it is used)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 13 | `regimen rollup` | Text | this machine | A rollup with patterns and suggested fixes, the colleague voice | `regimen/rollup.txt` | done, ran with `--judge-via cli`; Mark reads before use |
| 14 | `regimen status` | Text | this machine | Installed harnesses, daemon health, unassessed count | `regimen/status.txt` | done; Mark reads before use |
| 15 | Grafana dashboard | Detail | Grafana Cloud (Mark) | A dashboard fed by the OTLP bridge with data on it | `regimen/grafana.png` | skip (Mark, 2026-09-28): Grafana Cloud was down and the data may be gone; regimen keeps its two terminal renders |

### md (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 16 | Reader with outline rail | Desktop | md.niftymonkey.dev/v/<slug> | A doc with the outline rail open, Shiki code and a Mermaid diagram in view | `md/reader.png` | done, doc 80zOpiWz (outline and Shiki code; the only doc with a Mermaid diagram has no headings, so no outline) |
| 17 | The md doc, wide | Detail | md.niftymonkey.dev/v/vSWjDMFZ | The "md" doc set to wide width, outline controls hidden, its Mermaid diagram and code block in view (Mark swapped this in for revision history, 2026-09-06) | `md/mermaid.png` | done (agent) |

### pickai (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 18 | Rule rail and results table | Desktop | the pickai web app | A rule or two applied, the count cut, results ordered | `pickai/decision.png` | done, reasoning and tool calling rules applied |
| 19 | Per-model panel | Detail | same | One model open, cropped close on the expanded panel so the scores, capabilities, prices, and dates read (Mark, 2026-09-06) | `pickai/model-panel.png` | done, a 1070 x 802 crop of a 1440 x 1080 capture |

### ai-consensus (Mark, logged in with keys)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 20 | A run in progress | Desktop | ai-consensus.niftymonkey.dev | Model columns streaming side by side, the round indicator showing | `ai-consensus/run.png` | done (Mark, 2026-09-28) at 4:3; round 1 evaluating, three model tabs (the current UI tabs models rather than columns), the first answer streaming |
| 21 | Rounds panel | Detail | same, after the run | The panel expanded, refinements beside the evaluator's verdict | `ai-consensus/rounds.png` | skip (Mark, 2026-09-28): the app broke mid-run and it is early work; ai-consensus keeps the one mid-run shot |

### niftymonkey.dev (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 22 | Homepage listing | Desktop | niftymonkey.dev | The `ls -la ./projects/` listing with permission strings | `niftymonkey-dev/home.png` | done |
| 23 | Notebook entry | Detail | the adopting-AI dossier | Rated evidence cards and the contents rail in view | `niftymonkey-dev/notebook.png` | done, scrolled to the first theme with two evidence cards and the rail |

### costs-portal (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 24 | Dashboard | Desktop | localhost:3000 | Project cards with sparklines, the watchman panel, the long arc, real months of data | `costs-portal/dashboard.png` | done (Mark); the agent pixelated every dollar amount in the file itself. Names, percent changes, and sparklines stay |
| 25 | Project detail | Detail | /projects/<id> | Composition and spend over time for one project | `costs-portal/project.png` | done (Mark, 2026-09-28), champ-sage, six months of sources and the SKU table; the agent pixelated every dollar amount in the file itself |

### review-kit (agent for 26, Mark for 27)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 26 | Landing page | Desktop | review-kit.niftymonkey.dev | The top of the page | `review-kit/landing.png` | done; the page is a coming-soon splash |
| 27 | Capture with waveform | Phone | the app, Capture tab | The full-screen recording overlay mid-recording, waveform live | `review-kit/capture.png` | done; rendered by the agent from the Recording Overlay frame in review-kit/docs/redesign/prototype.html at 1290 x 2796 (Mark chose the prototype over a phone capture, 2026-09-06) |

### idea-vault (Mark, logged in)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 28 | Refine wizard mid-flow | Desktop | idea-vault.niftymonkey.dev | A step past braindump with an AI suggestion open | `idea-vault/wizard.png` | done (Mark, 2026-09-28), step 2 of the guided wizard, the Suggest banner rated Refined, an AI suggestion open below the editor |

### session-scribe (Mark)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 29 | Generation in flight | Desktop | the app window | Discovery, extraction, synthesis with scene count, elapsed time, activity log; collapsed phase summaries above | `session-scribe/generation.png` | done (Mark, 2026-09-28), phase 3 mid-generation, extraction scene 4 of 5, elapsed 1:05, activity log; captured at 120 percent zoom |

### tool-radar (agent)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 30 | The Tool Radar | Desktop | Mark's artifact, https://claude.ai/code/artifact/a0a20711-072b-48f4-b588-5680c6b44631 (needs login; the agent serves its saved HTML locally) | The Radar view with the adopt, trial, assess, hold rings populated, the areas panel open | `tool-radar/radar.png` | done, Radar view, dark, areas panel open |

### tts-bake-off (Mark supplies the text)

| # | Shot | Frame | Where | State to show | File | Status |
|---|---|---|---|---|---|---|
| 31 | `say.py` in a terminal | Text | the GPU box | `say.py --engine kokoro "..."` and its short output, then a second line with a different engine | `tts-bake-off/say.txt` | done (agent, 2026-09-28) on this machine: kokoro cold then warm, omnivoice cold then warm, `real` times measured with `--no-play --out` and shown as `time` output |

## Counts

| Who | Shots |
|---|---|
| Mark | 20 (1 to 10, 12, 15, 20, 21, 24, 25, 27, 28, 29, 31) |
| Agent | 11 (11, 13, 14, 16, 17, 18, 19, 22, 23, 26, 30) and every text render |

## Reused in the hero fan

No extra captures. The fan uses 1, 24, 16, 27, and 10.
