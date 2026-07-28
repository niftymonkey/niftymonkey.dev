# Actionability map: the "here's how" layer, synthesized

> Synthesis of `research-onramp-external.md` (primary-source web research) and
> `research-onramp-local-mining.md` (the verified record in ~/docs/ai-adoption).
> This is the cut that would actually go into an entry: per habit, the how, and
> the one or two links that earn a slot. The research files hold the depth.

## Per habit: the how, and the link that earns the slot

**1. Route by shape.** The how: before delegating, ask the guide's two
questions, and steal GitHub's keep-list: keep the ambiguous, the
security-critical, the cross-repo, and anything you want to learn from.
Anthropic's internal version is "task classification intuition": peripheral
and async-able vs core and supervised. Backlog exercise from the dossier:
list the work that arrives with its own pass/fail check (migrations, version
upgrades, test conversions, lint debt); that list is your delegation queue.
Link: GitHub cloud-agent best practices (the keep-vs-delegate list).

**2. Plan before code.** The how: have the AI interview you, one question at
a time, until it can write the spec; approve the plan; implement against it.
Exception worth teaching: if you could describe the diff in one sentence,
skip the ceremony. Links: Anthropic best practices (explore-plan-code);
Harper Reed's workflow post (copy-paste prompts for spec -> plan -> execute).

**3. Stranger review.** The how: machine checks first, then read for the
tells AI code actually has: duplication where reuse existed, brute-force
fixes that dodge root cause, verbose tests that assert nothing, any
weakening of CI (hard stop). Stock question from Anthropic's own teams:
"why are you doing this? Try something simpler." Link: GitHub's agent-PR
review post (named red flags plus a timed 10-minute protocol).
Honesty note: the automation-bias literature says resolve alone doesn't fix
skimming; the posture has to be backed by process (checks, gates).

**4. Machine-runnable check.** The how: before handing work over, name the
command that proves it worked (test suite, typecheck, build that fails
loudly); tell the agent to run it as it goes; require evidence, not
assertion. Checkpoint commits so wrong turns revert cheaply. Link: Anthropic
best practices ("give Claude a way to verify its work" and its escalation
ladder).

**5. Measure, don't feel.** The how: pick two or three cheap receipts and
check them monthly: delegated work that survived to merge without rework,
revert frequency, where the hours went. Warn about single numbers (the
Stanford case: PRs up 14%, quality down 9%, rework 2.6x). Link: METR's study
plus its 2026 update (the perception gap, and honest methodology in public).
**Finding: nobody teaches this as a personal habit. The entry would be first.**

**6. Steer at the seams.** The how: three seams (plan approval, first wrong
turn, final judgment). At the wrong-turn seam: after two failed corrections,
stop patching; reset with a better prompt or take the work back (starting
over often beats wrestling). Stopping rule: end the session when you feel
overwhelmed. Link: Böckeler's "The role of developer skills in agentic
coding" (concrete interventions organized by blast radius).

**7. Learning mode.** The how: ask concepts, tradeoffs, why-this-not-that,
then write the code yourself (the RCT's highest scorers used AI heavily, for
concepts only; the trap group wrote code but outsourced debugging). Attempt
first, with a real timebox. No-AI reps on a schedule. Tooling exists: tutor
mode / learning output styles that make you write the load-bearing lines.
Links: Osmani's "Don't Outsource the Learning"; Anthropic's Learning Output
Style plugin.

**8. Leading mode.** The how: run a 60-minute working-agreements session
(Atlassian's play, free, with template): what gets delegated by default,
what review AI output gets, what it never touches; revisit quarterly. Weekly
go-wrong log. Guard the training budget explicitly. Links: Atlassian's AI
Working Agreements play; Charity Majors's apprenticeship essay; Böckeler's
team-safeguards section.
Gap: no credible working-agreement template exists from a primary source;
the play is the closest runnable thing.

## What the research says about the staging itself

- **Signal-gated staging appears to be novel.** No resource teaches "add the
  habit when you notice X." Implicit orderings exist and mostly agree with
  our floor; GitHub's docs literally open with route-by-shape.
- **Play-first is supported**, not just tolerated: Anthropic's Inference team
  documents a personal trust staircase (test the easy thing first, build
  trust before complex tasks), and the record carries "using AI well is a
  skill learned by using it a lot." Vendor courses assume a play phase before
  their structured content.
- **The one substantive disagreement:** Anthropic's best-practices doc now
  lists the machine-runnable check FIRST, and Simon Willison argues the same:
  unverified delegation makes every other habit fail silently. Recommendation:
  pull habit 4 into the floor, delivered as its own near-universal play
  experience ("you spend an afternoon verifying work you delegated to save
  time"). Floor becomes four lessons, not three.
- **Planned fading** (deliberately reducing assistance as competence forms)
  is the pedagogy-side mirror of staged habits; Bainbridge warns the training
  never ends. Both belong in the entry's honesty, not its structure.

## Design implications for the B vs C call

- **The full how-to layer doesn't fit in the guide.** With techniques and
  links, practice would roughly double (~450 to ~900+ words), putting the
  entry back at v1 length (~2,600), the exact thing the hardest correction
  killed. Shape B can absorb only a thin version: a how-clause per bullet,
  no link apparatus.
- **Shape C carries it naturally.** A ~1,300-word on-ramp entry with a
  further-reading list has series precedent: the dossier already has a
  Resources section, so links-as-apparatus is established. The guide today
  deliberately links only to the dossier; keeping it that way preserves its
  character.
- **The novelty finding strengthens C.** If signal-gated staging exists
  nowhere, it is a position worth its own entry with its own footing, not a
  paragraph folded into an existing one.
