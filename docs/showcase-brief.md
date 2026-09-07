# Showcase design brief

The output of `impeccable shape` on the chosen direction, G2 (`design/showcase/preview/g2-f-with-stacks.html`). This is the layout spec for the build. G2's preview files are the reference implementation; port them, do not reinvent.

Content comes from `docs/showcase.md`. Brand and system rules come from `PRODUCT.md` and `DESIGN.md`; this brief only adds what is specific to this page.

## 1. Summary

One page at `/showcase` that shows the fifteen projects built with AI between 2025-09-04 and 2026-09-04. It reads like someone showing you their workshop: each entry is the real screen plus what was hard. The reader should leave believing one thing: he ships real things with AI. Volume and variety, not demos.

## 2. Primary reader action

Scroll the whole page once, section by section, and see fifteen working things. Everything else (following a link to a live app or repo) is secondary.

## 3. Design direction

- **Color strategy:** Restrained, as the site. Sage does two jobs only: the kind label (tier count, "01 / 15", `[live]`) and the live screen in a stack.
- **Scene sentence:** an engineer on a laptop or phone, on a break, sent here by a colleague, deciding in two minutes whether this person builds the way they want to. Dark is native. Light is a hand-set peer.
- **Anchors:** the site's own homepage and notebook (identity preservation wins over any new lane); the E direction's stacked, tilted screens, now inside the site's chrome; a desk with printouts set down on it, which is what the drop motion means.
- **Register:** brand (portfolio). The aesthetic lane is a literal terminal, which the site already committed to.
- **Probe step:** skipped. No native image generation in this harness, and nine built HTML directions already did the job.

## 4. Scope

- Fidelity: production-ready.
- Breadth: the whole surface, one page.
- Interactivity: shipped-quality. Scroll snap, arrival motion, links out. No other controls.
- Time intent: polish until it ships. Critique and polish passes follow the build.

## 5. Layout

Three tiers, in the content doc's order. The page snaps section to section with `proximity` at every width: sections land when the reader stops near one, and the page never fights the wheel.

**Hero.** Two columns above 900px (5fr text, 6fr fan). The prompt `git log --since=2025-09-04` types itself, then the title, lede, and `total 15` line print. On the right, a fan of five tilted screens drops in, one from each shape on the page: a chat surface, a dashboard, a reader, a phone, a game. No screen in the fan is marked live: the hero talks about none of them, so the sage mark would have no referent. Below 900px the fan stacks under the text and is capped at 32rem wide.

**The long builds (5): boswell, champ-sage, brief, the-cabinet, regimen.** One full-height scene each. Text column: sage count (`01 / 15`), the name in mono at `clamp(2rem, 5.2vw, 4.6rem)` so it never wraps mid-name, the perms and stack line, the problem paragraph, then "What was hard" as three items. Screen column: a stack of three screens. The live screen is large at the top; two smaller screens sit below it, tilted opposite ways. Scenes alternate sides: 01, 03, 05 put the stack on the right, 02 and 04 on the left, so five scenes in a row do not read as one template. The stack's height is viewport-relative (`min(560px, 62vh)`), never a fixed pixel height.

**The tools (6): md, pickai, ai-consensus, niftymonkey.dev, costs-portal, review-kit.** Three sections of two. Each entry: a two-screen mini stack above, then name, status, commit count on one line, the problem paragraph, and one "Hard:" line.

**The small ones (4): idea-vault, session-scribe, tool-radar, tts-bake-off.** One section of four rows. Each row: commit count in the gutter, name and status, one paragraph that folds the hard part in, one screen on the right. The name is set at Title size (1.24rem), not 1rem: against 0.86rem text, 1rem is a flat step.

The lede and every problem paragraph stay in the 42rem reading column. Names and screens may run wider.

## 6. Screens

This is the part the build and the capture checklist depend on.

### Frames

Four frame shapes. Every screen on the page is one of these.

| Frame | Ratio | Used for | Capture |
|---|---|---|---|
| Desktop | 16:10 | the live screen of every web app and dashboard | 1440 x 900 viewport, 2x |
| Detail | 4:3 | secondary screens, terminal renders | 1200 x 900 viewport or a crop, 2x |
| Phone | 9:19.5 | review-kit capture, the phone in the fan | iPhone 14 Pro Max, as captured. Bare screenshot, never a device bezel |
| Strip | 21:9 | champ-sage's in-game overlay | crop of the game capture |

Terminal output (regimen, tts-bake-off, boswell's audit, the-cabinet's measure report) is rendered from text, not captured. It is set in the site's mono at the Detail ratio, or Desktop when it is the live screen.

Each screen carries a visible mono tag under it (what the screen is) and alt text that says what the screen shows.

### Count per tier

| Tier | Screens per entry | Rest tilt | Landing order |
|---|---|---|---|
| Hero fan | 5 | -7 to 6 degrees, the phone at most 3 | left to right, the front screen last |
| Long build | 3 | 1 to 3 degrees | live first, then the two below |
| Tool | 2 | 1.5 and 2.5 degrees | live first |
| Small one | 1 | 1 to 1.5 degrees | alone |

### The shot list

The live screen is the first item under "What to show" in the content doc unless noted. Frames are from the table above.

**Hero fan (mixed tiers on purpose, to show the range of shapes):**
1. boswell chat surface, Desktop, in front
2. costs-portal dashboard, Desktop
3. md reader, Desktop
4. review-kit capture, Phone
5. The Hungry Grave in play, Phone if the game is portrait, else Desktop

**Long builds:**
- boswell: chat with citation cards (Desktop, live); `just audit-turn` render (Detail); provenance graph (Detail)
- champ-sage: overlay strip over a live game (Strip, live); desktop window in champ select (Detail); eval dashboard (Detail)
- brief: brief detail page with player and chapters (Desktop, live); library with filters (Detail); public collection page (Detail)
- the-cabinet: The Hungry Grave at full weapon levels (Phone or Desktop, live, see above); Housewarming (Detail); the replay route with a tape at a chosen tick (Detail)
- regimen: `regimen rollup` render (Desktop, live); `regimen status` render (Detail); a Grafana dashboard (Detail)

**Tools (two of the three in the doc; the third is dropped):**
- md: reader with outline rail (Desktop, live); revision history (Detail). Dropped: the 409 curl.
- pickai: rule rail and results table (Desktop, live); per-model panel (Detail). Dropped: the blend editor.
- ai-consensus: a run in progress (Desktop, live); rounds panel (Detail). Dropped: the model picker.
- niftymonkey.dev: the homepage listing (Desktop, live); a notebook entry (Detail). Dropped: the philosophy page.
- costs-portal: dashboard with watchman (Desktop, live); project detail (Detail). Dropped: onboarding.
- review-kit: results cards by goal (Desktop, from the eval or a tablet capture); capture with waveform (Phone, live). Dropped: the eval tables.

**Small ones (one each):**
- idea-vault: refine wizard mid-flow (Desktop)
- session-scribe: generation in flight (Desktop)
- tool-radar: INDEX.md rendered (Desktop)
- tts-bake-off: `say.py` in a terminal, rendered (Desktop)

Who captures what is decided in the capture checklist (plan step 4), not here.

## 7. Key states

- **Default, dark.** As G2.
- **Light.** Hand-set peer palette. Screenshots keep their own theme. The live screen's sage hairline stays; the glow drops to the light-mode sage.
- **Reduced motion.** No print, no drop, no typing, no snap. Everything is visible at rest, in its final position and tilt.
- **No JavaScript.** Everything visible. Motion classes only hide content once a `js` class is on the root, so a failed script never leaves a blank page.
- **Narrow (below 900px).** One column. Fan under the hero text, capped at 32rem. Stacks keep their depth. Snap is proximity. Card positions live in CSS, not inline styles, so the mobile rules do not need `!important`.
- **Short laptop viewports (about 1280 x 720 with browser chrome).** Measured in the preview: sections run 739 to 887px tall against a 667px snapport. Every section must either fit the snapport or the snap must be proximity. See finding 1 below.
- **Images loading.** Every screen has width and height (or the frame ratio) so nothing shifts. Below-fold screens lazy-load. No skeleton, no shimmer.
- **Missing screenshot.** Not a state. The page ships when every shot is in; the drawn placeholders in the preview never reach production.
- **Keyboard.** Every link reachable, 2px sage focus ring. Snap does not trap focus.

## 8. Interaction

- Scroll is the whole interaction. Sections snap. Each section plays its motion once and never again. The trigger is the section's top crossing three quarters of the way up the viewport (`rootMargin: "0px 0px -25% 0px"`, threshold 0), not "30 percent of the section visible": on a phone a long-build section is two to three screens tall and the old rule fires a third of the way in, after the reader has already seen the top.
- The standalone draw motion (a screen filling top to bottom with a sage scan line) is not used on this page. If it ever is, the scan line moves with `transform`, not `top`.
- Each entry name links to the repo when public. Each entry with a live URL gets a `[live]` link in the meta line. Private entries say `[private]` and link nowhere.
- Hover changes color and border only. Nothing lifts, nothing moves.
- The terminal bar is the site's. Double-tap returns to top.

## 9. Content

- Title: `A year of building with AI`. Lede: `What I built between September 2025 and September 2026. The big ones get the full story. The rest get a picture and a paragraph, because that is what they were.` The count lives in the `total 15` line only; the lede does not restate it.
- Small text uses the site's tokens as the system says. Ink Faint itself gets lifted to pass AA in the build. See finding 2.
- Tier dividers: `The long builds · 5`, `The tools · 6`, `The small ones · 4`.
- Per entry: problem paragraph, hard parts, and stack line from `docs/showcase.md`, tightened to the lengths G2 uses (three hard items for a long build, one line for a tool, folded into the paragraph for a small one). Copy is a person talking. No superlatives.
- Meta line format: `drwxr-xr-x · public · 463 commits · stack`.
- Screen tags: short, lower case, what the screen is (`chat surface · citation cards`).
- Alt text: what the screen shows, not what the project is.

## 10. References for the build

- `design/showcase/preview/site.css`, `motion.js` (the `[data-enter]` observer), and `g2-f-with-stacks.html` for structure.
- impeccable `motion-design.md` for the drop and print easings (ease-out-quart or expo, no bounce).
- impeccable `spatial-design.md` for the stack geometry on narrow screens.
- DESIGN.md section 7 for the two motions and the live screen.

## 11. Findings from the shape review of G2

The impeccable checks (design laws, brand register, slop tests) run against the G2 preview and its CSS. Each is marked applied (already folded into this brief) or a call for Mark.

1. **Mandatory snap on sections taller than the viewport. Decided: proximity everywhere (Mark, 2026-09-06).** At 1280 x 720 the snapport is 667px and the sections measure 667, 763, 739, 673, 667, 887. With `y mandatory`, the browser snaps the next section's top into view before the reader reaches the bottom of the tall one, so content gets skipped or jumps. With `proximity` at every width, sections still land and the reader keeps control. DESIGN.md section 7 is updated to match.
2. **Ink Faint fails WCAG AA for small text. Fix the token in the build (Mark, 2026-09-06).** `#59616a` on `#0f1113` is about 3.0:1; the light pair `#7b838c` on `#f6f7f7` is about 3.6:1. AA needs 4.5:1 below 24px. In G2 that color carries the meta line (perms, stack, commit count), the tier labels, "What was hard", and `[private]`. The showcase uses the site's real tokens, so the build lifts `--text-faint` in `app/styles/colors.css` to a value that clears 4.5:1 on both grounds (about `#7a828b` dark, `#6b737c` light), then checks the homepage and notebook still read with metadata visibly below body text. DESIGN.md and `.impeccable/design.json` get the new values in the same change. No separate issue.
3. **Long-build names wrap mid-word. Applied.** `.big` is a fixed 4.6rem above 900px. Measured at 1280 wide: "champ-sage/" breaks onto two lines at the hyphen in a 445px column. The name is now a fluid clamp.
4. **Everything below the hero is invisible without JavaScript. Applied.** The at-rest state is `opacity: 0` and only the observer's `.in` class reveals it. The build gates those rules on a `js` class on the root element.
5. **The hero fan's live glow has no referent. Applied.** DESIGN.md's Two Jobs Rule: sage marks what is being talked about. The hero talks about nothing in particular, so the fan has no live screen.
6. **Five identical scenes, then six identical tools. Applied.** The brand register asks for variation in treatment, not just voice. Scenes alternate sides. The tools tier already varies by screen shape (a phone in review-kit); that is enough for a tier that is meant to read as a listing.
7. **The count is stated twice. Applied.** "Fifteen things" in the lede, then `total 15` under it. The lede drops the number.
8. **Small-one names are a flat type step. Applied.** 1rem name against 0.86rem text is a 1.16 ratio; the rule is 1.25 or more. Names go to Title size.
9. **Arrival trigger fires late on phones. Applied.** See section 8.
10. **Fixed 560px stack height. Applied.** It is what pushes scenes past a short viewport. Now viewport-relative.
11. **Checked and clean.** Easings are ease-out (quart and expo), no bounce. No layout properties animate in the motions this page uses. No side stripes, gradient text, glass, hero-metric block, or card grid. Hover changes color only. Reduced motion is handled. The phone screen is a bare screenshot, not a device mockup. The hero title being smaller than each project name is an accepted inversion: the projects are the content, the title is the frame, and the heading order stays correct.

## 12. Open questions for the build

- Whether The Hungry Grave is portrait. Decide at capture; it sets the frame in the fan and in the-cabinet's stack.
- Whether the fan's five screens are lazy or eager. Eager is right if the hero must finish its motion without a late image popping in.
- How the terminal renders are produced (static SVG, or HTML with the site's mono). Either is fine; SVG is cheaper to ship.
