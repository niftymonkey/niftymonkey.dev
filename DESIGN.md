---
name: niftymonkey.dev
description: An engineering logbook rendered as a terminal. Mono chrome, system sans for reading, one sage signal.
colors:
  signal-sage: "oklch(0.77 0.09 158)"
  signal-sage-soft: "oklch(0.70 0.08 158)"
  signal-sage-wash: "oklch(0.77 0.09 158 / 0.10)"
  status-high: "oklch(0.78 0.10 158)"
  status-medium: "oklch(0.80 0.11 82)"
  status-contested: "oklch(0.72 0.13 32)"
  terminal-ground: "#0f1113"
  raised-sheet: "#15181b"
  title-bar: "#181c1f"
  ink-strong: "#edf0f2"
  ink-soft: "#949ca4"
  ink-faint: "#59616a"
  hairline: "#23272c"
  hairline-strong: "#2c3138"
  paper-ground-light: "#f6f7f7"
  raised-sheet-light: "#ffffff"
  title-bar-light: "#eef1f1"
  ink-strong-light: "#14181b"
  ink-soft-light: "#4c545c"
  ink-faint-light: "#7b838c"
  hairline-light: "#e4e7e9"
  hairline-strong-light: "#d3d8db"
  signal-sage-light: "oklch(0.48 0.09 158)"
typography:
  display:
    fontFamily: "SF Mono, JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "clamp(1.70rem, 4vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "0.02em"
  headline:
    fontFamily: "SF Mono, JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "1.50rem"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "0.02em"
  title:
    fontFamily: "SF Mono, JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "1.24rem"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "0.02em"
  lead:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.16rem"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
  small:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "SF Mono, JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "SF Mono, JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.14em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.7rem"
  "4": "1rem"
  "5": "1.4rem"
  "6": "1.8rem"
  "7": "2.4rem"
  "8": "3.2rem"
components:
  prompt-line:
    textColor: "{colors.signal-sage}"
    typography: "{typography.small}"
  terminal-bar:
    backgroundColor: "{colors.title-bar}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.meta}"
    padding: "0.7rem 1.4rem"
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.7rem"
  button-pill-hover:
    backgroundColor: "{colors.title-bar}"
    textColor: "{colors.ink-strong}"
  button-pill-active:
    backgroundColor: "{colors.signal-sage-wash}"
    textColor: "{colors.signal-sage}"
  link-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.meta}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 1rem"
  link-button-hover:
    backgroundColor: "{colors.title-bar}"
    textColor: "{colors.ink-strong}"
  listing-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    padding: "1.4rem 0.7rem"
  listing-row-hover:
    backgroundColor: "{colors.title-bar}"
  card:
    backgroundColor: "{colors.raised-sheet}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "1.4rem"
  callout-question:
    backgroundColor: "{colors.signal-sage-wash}"
    textColor: "{colors.ink-strong}"
    rounded: "{rounded.lg}"
    padding: "1.4rem"
---

# Design System: niftymonkey.dev

## 1. Overview

**Creative North Star: "The Engineering Logbook"**

A lab notebook for software, rendered as a terminal. The chrome is monospace: the sticky title bar, the prompt line that opens every surface, every label, date, and heading. The reading is system sans: anything a person reads for minutes. Dark is the native ground and light is a first-class peer, never a fallback. One accent, a muted sage, has exactly two jobs: naming a thing's kind, and marking what is live right now (the prompt, the current section, a re-review mark). It is a signal, never decoration.

The system is quiet on purpose. Its reader is an experienced engineer who trusts craft and distrusts polish, and who will bounce off an animated statistic. Delight lives in precision: the measure is right on every screen, a footnote resolves without moving the page, the reviewed date is written in the same voice as the prose. Nothing loads from a font CDN; both families are system stacks, so there is nothing to rot and nothing to flash.

This system rejects, by name: startup case study pages with metric callouts and testimonials, AI hype posts with counter animations and sparkle icons, GitHub profile READMEs with badge rows and stats widgets, and anything metrics-driven (animated statistics, counters, tickers). Motion is allowed when it has a job; see section 7.

**Key Characteristics:**
- Mono carries chrome and titles; sans carries the reading load.
- Dark-native, light as an equal. Both palettes are hand-set, not inverted.
- One sage accent, two jobs (kind and live), never used for decoration.
- Flat surfaces. Hairline borders and three surface tints make edges; shadow is a dark-mode aid only.
- Corners are barely there (2 to 8px). This is paper and terminal, not a rounded consumer app.
- Two motions, each with a job: words print, screens drop. They play once, on arrival. Hover changes color only.
- A calm, generous vertical rhythm on a 0.25rem to 3.2rem scale.

## 2. Colors

Tinted graphite neutrals in the dark, paper-white neutrals in the light, and one sage signal shared by both. The strategy is Restrained: the accent covers well under a tenth of any screen, and its rarity is what makes it legible.

### Primary
- **Signal Sage** (`oklch(0.77 0.09 158)` dark, `oklch(0.48 0.09 158)` light): the live mark. The prompt line and its caret, the current section in the contents rail, an entry's kind label, a re-review date, the `[live]` status on a project row, the focus ring. Never a heading color, never a fill for its own sake.
- **Signal Sage Soft** (`oklch(0.70 0.08 158)`): the accent stepped back one notch, for list bullets and group labels that belong to the accent family but must not compete with the live mark.
- **Sage Wash** (`oklch(0.77 0.09 158 / 0.10)`): a tenth-strength tint behind an active control or the philosophy page's core question. The only place the accent becomes a surface.

### Tertiary
Three epistemic status tones, used only for rated evidence and project status, never for decoration:
- **Status High** (`oklch(0.78 0.10 158)`): confident, well-supported. Same hue as the accent, so "live" and "trusted" rhyme.
- **Status Medium** (`oklch(0.80 0.11 82)`): amber, for mixed evidence and beta status.
- **Status Contested** (`oklch(0.72 0.13 32)`): rust, for claims under dispute.

Each has a matching wash at 12 to 15 percent alpha for a chip background.

### Neutral (dark, the native ground)
- **Terminal Ground** (`#0f1113`): the page. A graphite tinted toward blue-green, never pure black.
- **Raised Sheet** (`#15181b`): cards, figures, panels that sit on the ground.
- **Title Bar** (`#181c1f`): the sticky terminal bar, hover rows, insets.
- **Ink Strong** (`#edf0f2`): headings, entry titles, project names.
- **Ink Soft** (`#949ca4`): body prose and secondary text. The default body color.
- **Ink Faint** (`#59616a`): metadata, comments, permission strings, disabled controls.
- **Hairline** (`#23272c`) and **Hairline Strong** (`#2c3138`): the only edge treatment. Strong is for emphasised rules and the column-head underline.

### Neutral (light, the equal peer)
- **Paper Ground** (`#f6f7f7`), **Raised Sheet Light** (`#ffffff`), **Title Bar Light** (`#eef1f1`).
- **Ink Strong Light** (`#14181b`), **Ink Soft Light** (`#4c545c`), **Ink Faint Light** (`#7b838c`).
- **Hairline Light** (`#e4e7e9`) and **Hairline Strong Light** (`#d3d8db`).

### Named Rules
**The Two Jobs Rule.** Sage names a kind or marks what is live. It does nothing else. If a sage element is neither a label of kind nor the current or active thing, it is wrong.

**The No Pure Rule.** Never `#000` or `#fff` as text or ground. Every neutral is tinted. The one exception is the light raised sheet, which is paper white on purpose.

**The Hand-Set Peer Rule.** Light mode is its own palette, chosen by hand. Never derive it by inverting or filtering the dark one.

## 3. Typography

**Display Font:** SF Mono (with JetBrains Mono, ui-monospace, Cascadia Code, Menlo, Consolas, monospace)
**Body Font:** system-ui (with -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif)
**Label/Mono Font:** same as display

**Character:** Two system stacks, no webfonts, a longevity choice. Mono carries the personality: chrome, metadata, labels, and every heading, including the masthead. Sans carries the reading load. The pairing reads as a terminal window you can read a long essay inside.

### Hierarchy
- **Display** (600, `clamp(1.70rem, 4vw, 2.35rem)`, 1.18): the masthead h1 of a surface. Mono, tracking 0.02em, never negative.
- **Headline** (600, 1.50rem, 1.18): section titles (h2). Mono.
- **Title** (600, 1.24rem, 1.18): entry and card titles (h3), the title in a listing row. Mono, `text-wrap: balance`.
- **Lead** (400, 1.16rem, 1.4): deks and standfirsts. Sans, max width 44rem.
- **Body** (400, 1rem at a 17px base, 1.68): long-form reading. Sans. The reading column is 42rem wide, which lands the measure at about 70ch.
- **Small** (400, 0.86rem, 1.6): captions, row descriptions, comment lines. Sans.
- **Meta** (400, 0.74rem, 1.6): dates, kinds, nav links, the path in the title bar. Mono, Ink Faint or Ink Soft.
- **Label** (400, 0.68rem, tracking 0.14em, uppercase): column heads, eyebrows, pill buttons, section dividers. Mono, Ink Faint. Eyebrows may widen to 0.22em.

### Named Rules
**The Mono Heading Rule.** Every heading is mono, semibold, and tracked at or slightly above zero. A sans heading or a negatively tracked heading breaks the terminal frame.

**The Prompt Rule.** Every surface opens with a prompt line: `> ` in sage, then a command in mono small. The command names what the surface is (`whoami`, `ls -la ./projects/`, `cat philosophy.md`). A live prompt may carry a blinking caret; a prompt that is a label may not.

**The Seventy Rule.** Body prose never exceeds the 42rem reading column. Wider text is chrome, a table, or a figure, not prose.

## 4. Elevation

Flat. Edges are made by 1px hairlines and by stacking the three surface tints (ground, raised sheet, title bar), the way sheets sit on a desk. The single shadow exists only in dark mode, where a hairline alone can vanish against the ground; in light mode it is `none`, and the peer palette relies on borders entirely. Depth is never a response to hover; a hover changes background and color, not lift.

### Shadow Vocabulary
- **Card, dark only** (`box-shadow: 0 1px 3px rgba(0,0,0,.30), 0 18px 40px -28px rgba(0,0,0,.55)`): a raised sheet or figure on the terminal ground. Ambient, not structural. Set to `none` in the light palette.

### Named Rules
**The Borders Make Edges Rule.** If an element needs an edge, give it a hairline. If a hairline is not enough in the dark, the card shadow may help. Nothing else lifts.

**The No Glass Rule.** No backdrop blur, no glassmorphism. The title bar's `saturate(1.2)` filter is the only backdrop effect and it is not a blur.

## 5. Components

Restrained and exact. Controls look like terminal chrome: mono, uppercase, hairline-bordered, transparent until touched. Nothing is filled with the accent at rest.

### Buttons
- **Shape:** two variants only. Pill (999px radius, `0.25rem 0.7rem` padding) for labelled toggles like the contents rail switch. Icon (4px radius, `0.25rem 0.5rem`) for square controls like the theme toggle.
- **Default:** transparent background, Ink Faint text, 1px Hairline border, mono Label type, uppercase, tracked 0.14em.
- **Hover / Focus:** Ink Strong text, Title Bar background, Hairline Strong border. Transition is 120ms on background, color, and border only. Focus-visible is a 2px sage outline offset 2px.
- **Active (`is-active`):** sage text, sage border, Sage Wash background. This is the one filled state and it means "on right now".
- **Link button (`nb-link`):** the "read the full philosophy" affordance. Meta mono, Ink Soft, 1px Hairline border, 8px radius, `0.5rem 1rem` padding, same hover as a pill.

### Chips
- **Style:** the entry stamp. Mono Label at 0.68rem, tracked 0.08em, uppercase, Ink Faint, 1px Hairline border, pill radius, `0.3rem 0.7rem`.
- **Status chips:** the evidence-card rating. Status tone text on its matching wash. Never used outside rated evidence and project status.

### Cards / Containers
- **Corner Style:** 8px for cards and banners, 6px for figures and rows, 2px for schematic frames and the terminal window.
- **Background:** Raised Sheet on Terminal Ground. Paper white on Paper Ground in light.
- **Shadow Strategy:** the dark-only card shadow. None in light.
- **Border:** always a 1px Hairline. A card without a border is a mistake in the light palette.
- **Internal Padding:** 1.4rem (space-5).
- **The core question callout (`nb-question`):** the one accent-tinted container. Sage 1px border, Sage Wash background, 8px radius, sage uppercase label above sans 1.2rem Ink Strong text. Use once per surface at most.
- **Cards are not the default.** The philosophy principles use them because each principle is a discrete object. Lists, rows, and plain flow come first.

### Navigation
- **The Terminal Bar:** sticky masthead on every surface. Title Bar background, 1px Hairline bottom edge, `0.7rem 1.4rem` padding, max width 66rem. Left: the mono path (`~/dev`, `~/notebook`) in Ink Soft with an optional leaf crumb in Ink Faint. Right: mono Meta nav links in Ink Faint that go Ink Strong on hover, then the controls slot. On a phone the path collapses to its leaf, which turns Ink Strong and semibold, and the nav block drops below whole rather than splintering.
- **The contents rail:** a sticky column at 13.5rem, 1px Hairline left edge, mono Label heading, sans Small links in Ink Faint. The active link turns Ink Strong with a 2px sage left edge. This is the one place a colored left edge is allowed, because it is a position marker on a rail, not a stripe on a card. It disappears below 900px along with its toggle.
- **Double-tap the bar** returns to top; the bar is `user-select: none` for that reason.

### Listing Row (signature)
The homepage project listing and the notebook index share one shape: a grid row with a mono gutter on the left and the content on the right, `1.4rem 0.7rem` padding, 1px Hairline bottom edge, Title Bar background on hover, no border-radius. The gutter carries a permission string (`drwxr-xr-x`) or a date and kind. The row is a link; the whole row is the target. Superseded rows sit at 50 percent opacity with a 1px strikethrough on the title, never a warning color. On a phone the grid collapses to one column.

### Prompt Line and Caret (signature)
`.nb-prompt` is mono Small in sage with a `> ` sigil. `.nb-caret` is a 0.5em by 1.05em block of currentColor that blinks on a 1.15s step, the one recurring flourish. It stops under `prefers-reduced-motion`.

### Inputs / Fields
None exist on the site today. If one is needed, it follows the button: transparent, 1px Hairline, mono or sans body text, sage focus outline, 4px radius.

## 6. Do's and Don'ts

### Do:
- **Do** open every surface with a prompt line in sage (`> whoami`), and put the blinking caret only on a prompt that is live.
- **Do** set every heading in mono at weight 600 with tracking at or above zero.
- **Do** keep body prose in the 42rem reading column and use sans for anything read for minutes.
- **Do** hand-set both palettes. Dark ground `#0f1113`, light ground `#f6f7f7`, and never derive one from the other.
- **Do** make edges with 1px hairlines and the three surface tints. Reach for the dark-only card shadow when a hairline vanishes, and for nothing else.
- **Do** reserve sage for kind labels and live state: the prompt, the current section, a re-review mark, an active toggle, the `[live]` status.
- **Do** write status as a directory listing writes it: `drwxr-xr-x` for live, `drwxr--r--` for beta, `drw-------` for in development.
- **Do** show real screens and real decision records. The work is the proof.
- **Do** respect `prefers-reduced-motion`: the caret stops, arrival motion is skipped, smooth scroll and scroll snapping turn off.
- **Do** meet WCAG 2.2 AA: 4.5:1 on text, a visible 2px sage focus ring, keyboard reach to everything, and alt text on every screenshot that says what the screen shows.

### Don't:
- **Don't** build a startup case study page: no problem, solution, results layout, no metric callouts, no testimonials.
- **Don't** build an AI hype post: no "I built 15 apps with AI!", no counter animations, no sparkle icons, no tweet-thread tone.
- **Don't** build a GitHub profile README: no badge rows, no pinned repo cards, no stats widgets.
- **Don't** add anything metrics-driven: no animated statistics, no counters, no tickers or marquees. Motion without a job (ambient drift, hover parallax) is decoration and is cut.
- **Don't** add share buttons, reactions, view counts, email capture, subscribe modals, or comment sections.
- **Don't** use `#000` or `#fff` on the ground or as ink.
- **Don't** use sage as a heading color, a fill at rest, a gradient, or a decoration.
- **Don't** use a colored `border-left` wider than 1px on a card, list item, callout, or alert. The 2px sage edge on the contents rail's active link is the only exception, and it is a rail marker.
- **Don't** use gradient text, glassmorphism, or a hero-metric block.
- **Don't** load a webfont. Both families are system stacks by design.
- **Don't** put a sans heading anywhere, or track a heading negatively.
- **Don't** move anything on hover. Hover changes background, color, and border in 120ms. Arrival motion (section 7) is the only choreography.
- **Don't** nest cards, and don't reach for a card when a row or plain flow would do.
- **Don't** make anything that reads as visibly 2026.

## 7. Motion

Two motions, and each one means something. Both play once, when their section arrives on screen, and never again. Both are skipped under `prefers-reduced-motion`.

**Words print.** Text is output being written to the terminal. Lines land top to bottom, each about 110ms after the last, with a small rise (8px) and a fade. The prompt line types itself on load and keeps its blinking caret. Tier rules draw from left to right.

**Screens drop.** A screenshot is an object set down on the desk. It drops in from slightly above (about 60px), settles into a small rest tilt (1 to 3 degrees), and stops. In a stack, screens land one after another, about 150ms apart, the live one first. A screen that stands alone may instead draw in from the top with a 2px sage scan line at the edge, the frame buffer filling.

**The live screen.** In any stack, one screen is the one being talked about. It carries a sage hairline and a soft sage glow. This is the accent's live job, not decoration: it names which screen the words are about.

**Sections arrive.** The showcase scrolls section to section with proximity scroll snapping at every width, so a section lands where the reader can see all of it and the page never fights the wheel. Mandatory snap is out: sections can run taller than a laptop viewport, and mandatory snap then jumps past their bottom.

**Named rules.** The No Loop Rule: nothing repeats, nothing tickers, nothing drifts. The One Arrival Rule: a section plays its motion once; scrolling back does not replay it. The Hover Rule: hover changes color and border only, and nothing moves.

