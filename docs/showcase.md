# Showcase: a year of building with AI

Projects I built between 2025-09-04 and 2026-09-04. Commit counts are my own commits on GitHub in that window.

The Regimen row folds in its companion repos (regimen-feedback, regimen-otlp-bridge, regimen-enforcement), which now live inside Regimen.

| Project | Commits | What it is | Visibility |
|---|---|---|---|
| boswell | 463 | Self-hosted, voice-first personal AI that keeps a continuously synthesized model of your life | private |
| champ-sage | 424 | Voice-first AI coaching assistant for League of Legends | public |
| brief | 234 | Timestamped, AI-powered summaries from YouTube videos | public |
| the-cabinet | 224 | A launcher plus independently built browser games, all hosted off one site | public |
| regimen | 234 | Local observability for AI-assisted engineering (152 here, 82 across the companion repos) | public |
| md | 117 | Upload Markdown, get a shareable rendered link. Lives at md.niftymonkey.dev | public |
| pickai | 93 | Classify, score, and recommend AI models across providers | public |
| ai-consensus | 79 | Multi-model AI app where LLMs work together to reach consensus | public |
| niftymonkey.dev | 78 | Terminal-inspired portfolio site | public |
| costs-portal | 64 | Self-hosted dashboard that aggregates per-project monthly spend across AI and SaaS providers | private |
| review-kit | 51 | Brain-dump accomplishments and let AI turn them into polished performance reviews | private |
| idea-vault | 41 | Capture, organize, and refine app ideas | private |
| session-scribe | 26 | Tauri desktop app that turns D&D session transcripts into narrative recaps | public |
| tool-radar | 20 | Self-maintaining catalog of developer tools for solo and side-project engineering | public |
| tts-bake-off | 15 | Local playground to compare text-to-speech engines and pick a voice | public |

## Per-project notes

Each entry has the problem, what was hard (with the file or commits that show it), and what to screenshot. Starting points, not final copy.

### boswell

**Stack:** Python 3.12 brain (FastAPI, SQLAlchemy, Postgres with pgvector, Pipecat voice, OpenTelemetry) plus two Next.js 16 / React 19 apps in a pnpm monorepo, all self-hosted via Docker Compose. No live URL; chat runs on localhost:3000, the memory browser on localhost:3001.

**The problem:** Chat assistants forget you between sessions and run on someone else's servers. Boswell keeps a continuously distilled model of one person's life, commitments, relationships, possessions, on hardware they control, and surfaces things at the moment they matter.

**What was hard:**

- Deciding who a name refers to. The tiered resolver was torn out and rebuilt as a single pure `denote()` function, with the substrate decision recorded rather than adopting a graph database (`docs/adr/0009-entity-resolution.md`, `docs/adr/0014-memory-substrate-build-not-use.md`, 22 commits tagged `#105`).
- Making the memory admit what it does not know. Grounding, candor on failure, contradiction crosscheck, and fact supersession each needed their own decision record, and supersession had an ordering race that forced a dedicated notify channel (`docs/adr/0008`, `0012`, `0013`).
- Getting voice to work end to end. WebRTC through Docker NAT, coturn relay, trickle-ICE CORS, barge-in, and client-owned turn ends took 27 commits and four research notes (`docs/research/2026-07-08-voice-*`, `docs/plans/2026-07-09-voice-barge-in-design.md`).

**What to show:**

- The chat surface with citation cards in the margin (`apps/chat/src/components/marginalia.tsx`, `citation-card.tsx`).
- The provenance graph on an entity page, react-flow plus dagre (`apps/browser/src/app/memory/entities/[id]/page.tsx`, `components/provenance-graph.tsx`).
- The per-turn memory audit CLI, `just audit-turn <id>`, tracing one utterance through extraction, resolution, and retrieval.

### champ-sage

**Stack:** TypeScript, React 19, Vite, RxJS, Overwolf Electron (ow-electron) desktop app for Windows, Vercel AI SDK with OpenAI and OpenRouter, Whisper for voice, evalite for prompt evals. No live URL; it runs beside the League client.

**The problem:** Every League companion app serves pre-computed tier lists that ignore your actual items, augments, and enemy team. Champ Sage is a voice-first coach for players in augment modes like ARAM Mayhem who want an answer about the game they are in right now.

**What was hard:**

- Riot exposes no augment data at all. An audit of every Live Client, LCU, and Match-v5 endpoint found nothing, which forced a full migration off Tauri onto Overwolf Electron just to reach the one API that sees augment offers (docs/research/augment-detection-research.md, docs/ow-electron-migration-plan.md, commits 7350c44240..90dcb5d029).
- That dependency then broke on roughly every League patch. Four distinct failure modes are documented, and the fix is a homegrown package guard that serves a corrected manifest at launch (docs/research/gep-version-drift-investigation.md, scripts/ow-package-guard.ts, commits d2f46b1567..0d7d88dd42).
- The in-game overlay kept going blank or getting stuck. Fixes ran for months across compositor flushes, drag and resize persistence, and renderer survivability (src/overlay/, commits 7773deb504..e567086eaa).

**What to show:**

- The overlay strip sitting over a live game with augment badges (src/overlay/CoachingStrip.tsx, src/overlay/AugmentBadges.tsx).
- The desktop window routing itself through idle, champ select, in-game, and post-game (src/surfaces/resolveSurface.ts, src/components/coaching/CoachingFeed.tsx).
- The eval dashboard from `pnpm eval:serve`, scoring coaching answers against real game states (src/lib/ai/coaching.eval.ts).

### brief

**Stack:** Next.js 16 + React 19 + TypeScript on Vercel, Vercel Postgres, WorkOS AuthKit, Vercel AI SDK with Anthropic and OpenRouter, Tailwind and Radix. pnpm monorepo: web app, `brief` CLI, WXT Chrome extension. Live at https://brief.niftymonkey.dev.

**The problem:** Long videos hide whether they are worth watching behind the watching. Brief turns a YouTube link into a timestamped, structured summary so you can decide to watch now, later, or never, and keeps every brief in a searchable library.

**What was hard:**

- Adding video frames meant downloading video bytes, which YouTube's terms name directly and its anti-bot enforcement blocks from datacenter IPs. The research doc ends at "yellow, allowlist only", and the answer was to move that work to the user's machine (`docs/youtube-tos-research.md`, `docs/architecture/cli-thin-client.md`).
- That pivot turned a standalone CLI into an authenticated thin client: WorkOS device flow, token refresh, and a server-side LLM gateway with a usage ledger so tokens are attributed to an account. About 30 commits plus several rounds of auth fixes (`777fcd3277`..`1ddfbac238`, then `fc949f2f23`..`24baad0495`).
- Collections came in as a full vertical slice: schema and constraints, API, UI, per-clip AI summaries, public share pages, and continuous playback across clips (`7819cd9c53`..`9bc9c0087e`).

**What to show:**

- A brief detail page with the player, chapter grid, and clickable timestamps (`apps/web/src/app/(app)/brief/[id]/page.tsx`, `components/brief-viewer.tsx`).
- The library with search and tag filters, which is what the logged-in root renders (`apps/web/src/app/page.tsx`, `components/filtered-brief-grid.tsx`).
- A public collection share page, no login needed (`apps/web/src/app/(public)/c/[slug]/page.tsx`).

### the-cabinet

**Stack:** pnpm monorepo, TypeScript, Vite, PixiJS 8, Vitest; Housewarming adds React 19 and Upstash Redis. Live: https://hungry-grave.vercel.app and https://housewarming.niftymonkey.dev. The launcher is designed but not built.

**Games it hosts:** The Hungry Grave, a vertical arcade shooter where the player is an open grave that swallows what it kills. Housewarming, a cozy-but-dark incremental deduction game about naming the spirits in an inherited house.

**The problem:** My games had no shared home, and a repo per game costs an install, a tracker and a deploy each. One repo holds every game plus a launcher, and each game keeps its own stack.

**What was hard:**

- Proving a recorded run is the real run. A tape format, a witness fold, always-on invariants and a refusal rule took about twenty of the game's 47 ADRs (apps/hungry-grave/docs/adr/0013, 0015, 0017-0033; commits 366707e..f1b955e).
- Breaking the game into named modules without changing behavior: a 31-commit refactor plus a written proof that a 259-file change moved nothing (commits 3f1ae7db..8ea7de4d, 4421f728b5).
- Keeping the launcher from importing game code, which would force one PixiJS version on every game. The answer is an iframe driven by an experimental PixiJS DOMContainer (docs/adr/0002-launcher-composes-games-by-reference.md).

**What to show:**

- The Hungry Grave at full weapon levels, the screen filled with the player's own projectiles (apps/hungry-grave/src/app/screens/game).
- The `#/runs` and `#/replay` routes: kept runs listed, then one tape replayed at a chosen tick (src/app/screens/RunsScreen.ts, ReplayScreen.ts).
- The headless report from `scripts/measure.ts`, JSON covering cost, pace, path, field share and belch cadence.

### regimen

**Stack:** TypeScript on Bun, a six-package workspace monorepo (cli, feedback, enforcement, guidance, otlp-bridge, shared). SQLite store, OpenTelemetry out to Grafana Cloud, any OpenAI-compatible LLM as judge. CLI only, no hosted URL.

**The problem:** Engineers judge their AI-assisted work on feel. Regimen captures what actually happened across Claude Code, Codex, Copilot, and Gemini into a local store, then tells the engineer where the work went wrong and whether their fixes helped.

**What was hard:**
- Four agent CLIs disagree on everything at the capture edge: hook file formats, event names, timestamp units, whether the payload even names the event. Copilot needs shape inference because it sends no event name (`docs/harness-divergences.md`, commits `4a7176b773`..`92f9a9d46d`).
- Three sibling repos (regimen-feedback, regimen-otlp-bridge, regimen-enforcement) were folded in as workspace packages. The ADR reverses an earlier multi-repo decision and works out how to move the CLI without breaking the sibling-path resolution the installer depends on (`docs/adr/0010-consolidate-instruments-into-a-bun-workspace-monorepo.md`, commit `c162a4b468`).
- Assessment needs an LLM, and not every user has a spare key. Three judge backends were designed: API key, the `claude` CLI's existing auth, and a seam that hands the prompt to the agent already in the room (`plans/judge-backends-design.md`, commits `fb99585239`, `17bd25161e`).

**What to show:**
- `regimen rollup`: cross-conversation patterns and suggested fixes, written as a colleague talking, not a score (`packages/feedback/src/judged/`).
- `regimen status`: installed harnesses, daemon health, and the count of unassessed conversations.
- Grafana dashboards fed by the OTLP bridge, the only graphical surface (`packages/otlp-bridge/README.md`).

### md

**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Vercel Postgres with pg_trgm search, WorkOS AuthKit, react-markdown with Shiki and Mermaid. Live: https://md.niftymonkey.dev

**The problem:** Turning a markdown file into a legible shareable link, faster than a gist and more durable than a pastebin. Second audience: a coding agent that needs to publish and edit docs there as fluidly as it edits local files.

**What was hard:**

- Building an API an agent can drive without wasting context. Targeted string and line ops instead of full-doc replacement, 409s that name every ambiguous match and its line, dryRun previews, If-Match concurrency. Shipped across eight PRs (docs/architecture/ai-first-api.md; commits 3430c384..b2284284).
- Making every write recoverable before agents were allowed to batch-edit. All content mutations funnel through one DocMutationPath chokepoint, so no handler can forget to snapshot a revision (docs/architecture/revision-history.md; commits 1b1b90427b..a90840ab8d).
- Two full visual conversions. Five phases moved the app onto the locked Fog and Ochre palette, then four more replaced the corner watermark with a brand mark and real toolbars (docs/migration-brief.md; commits db20c170..be4c89ad, then 07bc5fe0..14a1489b).

**What to show:**

- A reader page with the outline rail, Shiki code and a Mermaid diagram (src/app/v/[slug]/page.tsx, src/components/reader-shell.tsx).
- The revision history list and one revision detail, with byte-delta badges and two-click restore (src/app/edit/[slug]/revisions/page.tsx, src/components/restore-button.tsx).
- A terminal beside the app: a curl to /api/agent/docs/[slug]/edits returning the structured 409 that lists every match location (src/app/api/agent/docs/[slug]/edits/route.ts).

### pickai

**Stack:** Zero-dependency TypeScript library (npm `pickai`, tsup, vitest), a Starlight docs site, and a Next.js 16 web app with Tailwind 4 and TanStack Virtual. Docs live at https://pickai.niftymonkey.dev; the app deploys as the `pickai-web` Vercel project.

**The problem:** models.dev lists roughly 2,200 model identities across 7,500 listings, and most people pick the one name they have heard of. pickai takes a project's hard rules and what matters this week, then returns a short ordered list worth testing with the reasoning attached.

**What was hard:**
- Joining third-party benchmark scores to catalog IDs mostly fails. Measured live: the best free LMArena set matched 41 percent of rows, and zero of the 30 newest models. The finding killed the planned built-in quality score (`design/research/benchmark-id-joining.md`, decisions 9.10 and 9.11 in `design/v3-decisions.md`).
- v3 deleted most of v2's public API: `Purpose`, all five built-in criteria, `scoreModels`, the flat pipeline. Catalog facts stopped being treated as scores (`design/v3-decisions.md` 9.20 to 9.22, commits `fb2e3efd10`..`23abac3d24`).
- The web UI was built twice. The first version was demoted to `prototypes/web` and rebuilt in three slices, then the rail, the table, and the score surface were each reworked again (commits `c939de8a03`..`ec8f327ae2`).

**What to show:**
- The decision surface: rule rail on the left cutting the count live, virtualized results table on the right (`web/components/rule-rail.tsx`, `web/components/catalog-table.tsx`).
- The blend editor, where weights are stated in words rather than sliders (`web/components/blend-editor.tsx`).
- The per-model panel showing provenance and date beside every number (`web/components/model-panel.tsx`).

### ai-consensus

**Stack:** Next.js 16 App Router, React 19, TypeScript, Vercel AI SDK v5, OpenRouter plus direct Anthropic, OpenAI and Google providers, NextAuth v5, Vercel Postgres, Tailwind and Radix, PostHog, Playwright. Live: https://ai-consensus.niftymonkey.dev

**The problem:** One model's answer is one opinion. This sends a question to several models at once, lets them read each other and refine over rounds, and has an evaluator model decide when they have converged.

**What was hard:** The repo carries no ADRs or design docs, so these are inferred from git history.

- Making 200-plus OpenRouter models behave alike. A full integration refactor, separate routing, filtering and availability modules, a JSON extraction fallback for models that will not return clean structured output, and a token cap added after 65536-token errors (lib/model-routing.ts, lib/openrouter.ts; commits f0eabc17, 5837c058, 7c7facff, ba10c036).
- Streaming several models at once and letting a user stop mid-round. Abort-signal handling in the consensus route, auto-scroll that pauses and resumes, a floating status with cancel (app/api/consensus/route.ts; commits be79a213..f752d926). Later moved onto Vercel Workflow for durability (5a7752b3).
- Holding other people's API keys. AES-256 at rest, a custom sign-in page instead of a CSP exemption, then a hardening pass and Semgrep in CI (lib/encryption.ts; commits 898fb5ef, d5c4d6ef, bf525cad, 3726cb07).

**What to show:**

- A run in progress: model columns streaming side by side under the round indicator (app/consensus/page.tsx, components/consensus/dual-view.tsx).
- The rounds panel expanded, each model's refinement next to the evaluator's verdict (components/consensus/rounds-panel.tsx, process-section.tsx).
- The preset-first model picker with pricing (components/consensus/preset-selector.tsx, unified-model-selector.tsx).

### niftymonkey.dev

**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind 4, MDX entries, Vercel Blob and Vercel Analytics. Live at https://niftymonkey.dev.

**The problem:** My personal site. I want to be easier to learn from without becoming a content creator. It lists my projects as a terminal directory listing and holds a notebook of engineering writing worth keeping.

**What was hard:**
- The notebook had to be a library, not a blog. Entries carry a published and a last-reviewed date, superseded entries stay up with a forward pointer, and the supersession banner has to read as integrity rather than a warning box (`docs/notebook-intent.md`, `docs/plans/2026-07-13-notebook-design-brief.md`).
- Entries need a mandatory shared shell plus total freedom inside the content flow, so the first dossier's custom React components could ship without a component library invented up front. Rendering moved from injected HTML to real React components, and the build now fails when a listed entry has no body (commits `6cf954cc16`, `7b9cc786d7`).
- Measuring whether anyone reads an entry, without a binary read flag. It reports the furthest section reached, read from live layout (commits `71172d6b0e`, `1c7853a061`, `d90d27cf4d`).

**What to show:**
- The homepage: `ls -la ./projects/` with permission strings standing in for project status (`app/page.tsx`).
- A notebook entry, the adopting-AI dossier with its rated evidence cards and contents rail (`app/notebook/[slug]/page.tsx`, `content/notebook/adopting-ai-evidence/`).
- The philosophy page, rendered as a man page with keyboard section navigation (`app/philosophy/page.tsx`).

### costs-portal

**Stack:** Next.js 16 + React 19 + TypeScript, SQLite via better-sqlite3 and Drizzle, a node-cron polling worker, Recharts, shadcn/Radix. Ships as Docker Compose. Self-hosted, no live URL; it binds to 127.0.0.1 on port 3000 by default.

**The problem:** Personal projects spread spend across Anthropic, OpenAI, OpenRouter, and a long tail of flat-fee SaaS, so "what did this project cost me this month" means checking five dashboards. This pulls it all into one project-first view on your own machine.

**What was hard:**

- Storing provider admin keys locally without a cloud KMS. The vault uses XChaCha20-Poly1305 envelope encryption with a user-supplied master key that is never autogenerated, plus AAD binding and a key-rotation CLI (`docs/adr/0002-credential-vault-security.md`, `4c27a66117`, `28d6b1de09`).
- Making three providers with different billing shapes comparable. Everything normalizes to FinOps FOCUS v1.3 rows through per-provider adapters, and live APIs still broke assumptions (`docs/adr/0001-focus-internal-schema.md`, `1c9c84005b`).
- Turning rows into a dashboard that answers a question rather than showing numbers took a second pass: a two-speed layout, a 14-day watchman window, and month-end projection that stays honest early in the month (`docs/ux-decisions.md`, `a5d04b9e46`, `286f2b620c`).

**What to show:**

- The dashboard: project cards with sparklines, the watchman panel, and the long arc (`src/app/page.tsx`, `src/components/dashboard/`).
- Project detail with composition and spend over time (`src/app/projects/[id]/page.tsx`).
- The first-run onboarding wizard connecting a provider and mapping containers to projects (`src/app/onboarding/page.tsx`).

### review-kit

**Stack:** Expo 54 React Native app (iOS and Android) with expo-router, expo-sqlite, on-device speech recognition, and Vercel AI SDK against OpenAI, Anthropic, Google, or OpenRouter with your own key. pnpm monorepo with a Next.js landing page and an evalite eval package. Landing page at https://review-kit.niftymonkey.dev; the app ships through EAS, not the web.

**The problem:** People forget what they did all year and then write a performance review from memory. ReviewKit captures accomplishments by voice or text as they happen, then turns the pile of notes into goal-aligned review content.

**What was hard:**

- Picking a model could not be done from benchmarks. Top-scoring models failed to return valid JSON, and budget models beat flagships, so the project grew a real eval funnel with gate scorers and LLM-judge ranking scorers (`docs/MODEL-EVALUATION-JOURNEY.md`, `docs/EVAL-SCORERS.md`, commits `ac9e0d1564`..`72278d4d78`).
- The v2 UX was rebuilt from a design spec, HTML prototypes, and a token system before any app code changed, then landed as one large redesign PR (`docs/redesign/implementation-brief.md`, commit `af3236093c`).
- Native build and release friction shows up repeatedly: EAS profiles, an expo-updates crash in TestFlight, and an SDK 54 dependency downgrade (inferred from git history, `d1edb8d961`, `de51f59e58`, `a889c6bad7`).

**What to show:**

- The Capture tab with the mic button and the full-screen recording overlay with live waveform (`apps/mobile/app/(tabs)/capture.tsx`).
- Generated review results as accomplishment cards grouped by goal (`apps/mobile/app/generate-review/results.tsx`).
- The eval results UI, run with `pnpm eval:serve`, showing per-model scorer tables.

### idea-vault

**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind 4, shadcn/ui, TipTap editor, Vercel Postgres, Auth.js, Vercel AI SDK across Anthropic, OpenAI, and Google. Live at https://idea-vault.niftymonkey.dev (login required past the landing page).

**The problem:** App ideas start as a braindump, get half-refined with AI, and end as scattered text. This stores them in a structure you can scan, keep updating, and export as a build-ready prompt.

**What was hard:**

- The original flow was a multi-tab form of empty fields, which read as homework. It was redesigned into a guided wizard with braindump first and solution last (`docs/workflow-overhaul/01-ai-workflow-vision.md`, commit `459de8bbbe`).
- Two encryption schemes with opposite trust assumptions live in one app: passphrase-based AES-256-GCM in the browser that the server cannot read, and server-held key encryption for provider API keys. AI features have to switch off while a row is encrypted (`docs/wiki/concepts/two-layer-encryption.md`, commits `9d5f2b71e6`, `e62cb75b58`).
- Plain markdown fields were replaced wholesale with a TipTap WYSIWYG editor that still serializes back to markdown (`docs/wiki/tiptap-editor.md`, commit `3ce6015beb`).

**What to show:**

- The refine wizard mid-flow with an AI suggestion open (`components/refine-wizard.tsx`, `components/wizard/ai-suggestion.tsx`).
- The idea detail page in free-form mode, tabs and TipTap toolbar visible (`app/(auth)/ideas/[id]/page.tsx`, `components/free-form-editor.tsx`).
- The export dialog and its rendered PDF (`components/export-dialog.tsx`, `app/api/export/pdf/route.ts`).

### session-scribe

**Stack:** Tauri 2 desktop app, React and TypeScript, Vite, Tailwind with Radix and shadcn components, Vercel AI SDK with OpenAI, docx and mammoth for file handling. No live URL; builds ship from GitHub Releases at github.com/niftymonkey/session-scribe/releases.

**The problem:** A D&D group finishes a session with a Teams transcript and a Roll20 dice log and no record anyone wants to read. This turns both files into a scene-by-scene narrative recap the DM can export as DOCX or Markdown.

**What was hard:**

- A four-hour transcript will not fit one prompt. Generation runs three passes, scene discovery, per-scene extraction, then synthesis, with bounded concurrency and a Zod schema per pass (src/lib/ai/multi-pass-generator.ts, src/lib/prompts/multi-pass.ts, commit 3098b2359d).
- Matching who spoke to which character took several rounds: auto-populating players from the transcript, handling the DM, then normalizing whitespace and speaker labels that Teams emits inconsistently (commits dd8f530687, 9d615fbeb2, 5b168f1b0f).
- The free-form flow confused people, so the app was rebuilt around four explicit phases with a sub-step wizard inside review. The same pass fixed a dice log parser that collapsed every roll into one block (current-status.md, commit 2e7d13da73).

**What to show:**

- The four-phase workflow with collapsed phase summaries above the active step (src/App.tsx, src/components/workflow/phase-container.tsx).
- Generation in flight: Discovery to Extraction to Synthesis, scene count, elapsed time, activity log (src/components/workflow/generation-progress.tsx).
- The exported DOCX recap itself, which is the actual product (src/lib/export/docx-exporter.ts).

### tool-radar

**Stack:** No application code. A public Markdown catalog of 60 developer tools plus a YAML source list, maintained by a weekly scheduled Claude agent that runs a written runbook using WebFetch, WebSearch, git, and file writes. Repo: github.com/niftymonkey/tool-radar.

**The problem:** A hand-kept file of default tools went stale and got deleted. This replaces it with a catalog that refreshes itself and gets read during idea exploration and planning, so an existing tool is considered before building a custom one.

**What was hard:**

- Diagnosing why the predecessor failed. The doc was fine; the missing part was a feeding mechanism, so the design puts maintenance in a runbook an agent runs on a schedule, opening a PR rather than pushing to main (docs/exploration-summary.md, REFRESH.md, commits c30ad6e4ed, 7aa9b148c8).
- The cloud agent only gets the baseline tool set, so every runbook step needs a fallback that works without Exa or any optional MCP server (REFRESH.md, Tool constraint section).
- Keeping the taxonomy honest. Successive batches had to correct problem-area tags where research had stretched a tag to describe a tool attribute instead of its purpose (CHANGELOG.md batches 2 and 3, commits eca16fc186..e16ac4d611).

**What to show:** There is no UI. The showable artifacts are files.

- INDEX.md, the generated problem-first index with adopt, trial, assess, and hold rings.
- One entry in full, tools/convex.md, including its Reality check section.
- A refresh PR and its CHANGELOG paragraph, which shows the loop running unattended (CHANGELOG.md 2026-05-22, commit 4edc408923).

### tts-bake-off

**Stack:** Python, Gradio web UI, one `uv` virtualenv per engine, Docker Compose for the CPU build, CUDA for the GPU engines. Local only, served at localhost:7860. No public URL.

**The problem:** Picking a text-to-speech voice by reading spec sheets does not work. This renders one line across eight engines, local and cloud, so the choice gets made by ear.

**What was hard:**

- The engines cannot share a Python interpreter. Each gets its own `uv` venv rebuilt from a committed lockfile, and each runs as a warm worker answering one JSON request per line over a stdin pipe (`README.md` Layout and Architecture notes, `engines/*_worker.py`, `setup.sh`).
- One 11GB card, three GPU models. A `GPU_LOCK` makes them mutually exclusive, and Qwen sits behind a Compose profile so it never starts alongside the CPU service (`app.py`, `compose.yaml`).
- Turning the playground into a working CLI. `say.py` grew to 838 lines covering warm daemons, streamed playback before render finishes, and a barge-in startup race, all hardened in one review pass (`say.py`, commits `2515aadc57` and `14cf3626a2`).

**What to show:**

- The Gradio tab strip with all eight engines and a rendered audio player, from `app.py`. Each tab carries its own voice dropdown and sliders.
- The `say.py` CLI in a terminal: `say.py --engine kokoro "text"` prints little and speaks immediately, which is the point.
- The register prototype TUI, `just register`, a keyboard-driven grid for auditioning four spoken registers against five turn shapes (`prototype/voice_register.py`).
