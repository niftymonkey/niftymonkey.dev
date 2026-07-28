# Prototype: Shape C, the on-ramp as a third series entry (v2, with the meat)

> Straight-markdown prototype, disposable. v2 folds in the play-first reframe
> and the research. If this shipped it would be MDX on the entry kit at
> `adopting-ai-onramp`, listed around 6 min, related-paired with both existing
> entries. Blockquotes stand in for footing boxes. Every link below is free
> and was fetched as a primary source during research.

---

# Adopting AI: The On-Ramp

**What should I actually do first?**

Published July 2026

## What this is

[The dossier](/notebook/adopting-ai-evidence) holds the evidence. [The
guide](/notebook/adopting-ai-engineer) holds my positions: what I believe an
engineer should do as AI is adopted where they work. This entry holds the
order. If AI landed where you work last month, the guide hands you a dozen
habits at once, and a dozen habits at once is nobody's starting point. Nobody
starts with habits anyway; everybody starts by playing with the thing. So
this entry is built on the way you'll actually arrive: play first, and let
what happens while you play tell you which habit you're ready for. Nothing
here is new advice; it's the guide's practices arriving in the order your own
use will ask for them, each with the concrete way to do it and something free
to read when you want more.

## First, just use the thing

You're going to spend your first stretch playing: throwing tasks at it,
poking at its limits, getting a feel. Good. That's not a detour from the
fundamentals; it's where they come from. A few experiences are near-universal
in those weeks, and each one is teaching a habit. Catch the lesson while it's
happening:

- **It nails something you expected to take an hour, then confidently
  botches something trivial.** That contrast is the routing lesson: the tool
  is task-shaped. Delegate the bounded and checkable (migrations, test
  scaffolding, boilerplate, conversions); keep work that needs your context
  close. The how: before delegating, ask the guide's two questions (is it
  bounded and well-specified? can a machine tell you it worked?), and steal
  the keep-list from [GitHub's own delegation
  guidance](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results):
  keep the ambiguous, the security-critical, and anything you want to learn
  from.
- **Work that looked finished turns out subtly wrong later.** That's the
  review lesson: read what comes back like a confident stranger wrote it,
  because one did. The how: run the machine checks first, then hunt the tells
  AI code actually has: duplicated code where reuse existed, brute-force
  fixes that dodge the root cause, tests that assert nothing, any weakening
  of CI (that last one is a hard stop). [GitHub's ten-minute review protocol
  for agent PRs](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/)
  is the checklist version. And keep one stock question loaded: why this?
  Try something simpler.
- **You keep interrupting it mid-flight to redirect.** That's the planning
  lesson: agree on the plan before code gets written. The how: have the AI
  interview you, one question at a time, until it can write the spec; approve
  the plan; let it implement against the plan. [Anthropic's
  explore-plan-code](https://code.claude.com/docs/en/best-practices) is the
  canonical version; [Harper Reed's workflow
  post](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) has
  copy-paste prompts. One exception worth keeping: if you could describe the
  diff in one sentence, skip the ceremony.
- **You spend an afternoon verifying work you delegated to save time.**
  That's the verification lesson, and it's the one the best sources now put
  first: give every delegation a check the machine can run, or you've
  delegated the typing and kept the verification. The how: before handing
  work over, name the command that proves it worked (the test suite, the
  typecheck, a build that fails loudly), tell the agent to run it as it
  goes, and make it [show evidence rather than assert
  success](https://code.claude.com/docs/en/best-practices). Commit
  checkpoints so a wrong turn costs a revert, not an argument.

You'll know this layer is holding when routing stops being a decision you
make and starts being a reflex you notice yourself having. That takes a few
weeks of real work, not a weekend of experiments.

> **Footing.** Firm. Every credible source teaches these at entry level;
> GitHub's docs literally open with route-by-shape. One departure I've made
> deliberately: the machine-check habit sits in the floor here, not later,
> which is where Anthropic and Simon Willison both put it, on the argument
> that unverified delegation makes the other floor habits fail silently.

## When the signals show up

Keep working that way and the work keeps teaching. Two signals in
particular. Don't add the habit before its signal; unprompted habits are the
ones that don't stick.

- **You catch yourself sure the tool is helping, or sure it isn't.** That
  certainty is a feeling, and feelings are the wrong instrument: in [METR's
  randomized trial](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/),
  developers believed AI had sped them up by 20% while measurement showed the
  work taking longer (METR has since revised the result upward; the gap
  between belief and measurement is the part that survives). The how: pick
  two or three cheap receipts and check them monthly: how much delegated work
  survived to merge without rework, how often it got reverted, where the
  hours actually went. As far as I can tell, no course or vendor doc teaches
  measuring your own AI use; this habit is the one place this series is ahead
  of the material it cites.
- **The same wrong turn shows up twice.** Steer at the seams (the plan, the
  first wrong turn, the final judgment) instead of hovering over every line.
  The how: after two failed corrections on the same problem, stop patching;
  reset with a better prompt that incorporates what you learned, or take the
  work back yourself. Starting over often beats wrestling. And borrow the
  stopping rule from [the best practitioner writing on
  this](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html):
  end the session when you feel overwhelmed by what's going on.

> **Footing.** Firm on the habits; honest about the mechanism: nothing I can
> find stages practices on noticed signals, so the trigger framing is mine.
> The closest things, vendor course sequences, agree on the order without
> naming the idea.

## The situations

The last habits don't arrive on a calendar. They arrive with situations, and
the situations recur at every level of seniority; a principal engineer
learning a new domain is, for that domain, starting over.

**The first time you're learning something new with AI in hand**, the
settings flip. Producing optimizes for output; learning runs on the opposite
rules. Ask it concepts, tradeoffs, why this instead of that, then write the
code yourself: in the one randomized trial we have, the highest scorers used
AI heavily, for concepts, and wrote their own code, while the group that
wrote code but outsourced the debugging landed near the bottom. Attempt
first, with a real timebox, before asking. Keep some reps with no assistance
at all. [Osmani's essays](https://addyosmani.com/blog/dont-outsource-learning/)
name these postures; if your tool has a [learning
mode](https://claude.com/plugins/learning-output-style) that makes you write
the load-bearing lines yourself, turn it on.

**The first time another engineer's growth is your job**, the on-ramp goes
from something you climb to something you maintain for other people. Run a
working-agreements hour with the whole team ([Atlassian's
play](https://www.atlassian.com/team-playbook/plays/ai-working-agreements)
is free and takes sixty minutes): what gets delegated by default, what
review AI output gets before merge, what it must never touch; revisit it
quarterly. Keep a weekly go-wrong log of where AI-generated code caused
friction. And guard the training budget: the bounded tasks agents do best
are the ones juniors have always learned on, and [software is an
apprenticeship industry](https://charity.wtf/p/generative-ai-is-not-going-to-build-your-engineering-team-for-you).

> **Footing.** The learning-mode flip is the best-evidenced claim in the
> series; the trial data lives in the dossier. The leading-mode tools are
> thinner: the working-agreement template you'd hope exists doesn't, so the
> play plus the guide's third mode is the closest runnable thing.

## Further reading

Everything above links where it's used. If you want a shelf instead:

- [Anthropic, Best practices for Claude Code](https://code.claude.com/docs/en/best-practices):
  four of these habits in one vendor doc; the highest-density link here.
- [Simon Willison, Here's how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/):
  the most credible generalist walkthrough, with a full worked transcript.
- [GitHub, how to review agent pull requests](https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/):
  the named red flags and the timed protocol.
- [Harper Reed, My LLM codegen workflow atm](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/):
  the fastest way to do plan-first rather than read about it.
- [Birgitta Böckeler, The role of developer skills in agentic coding](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html):
  what steering concretely looks like, and the team safeguards.
- [METR's developer productivity study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
  and [its own 2026 correction](https://metr.org/blog/2026-02-24-uplift-update/):
  why you measure, from an org that measures itself in public.
- [Addy Osmani, Don't Outsource the Learning](https://addyosmani.com/blog/dont-outsource-learning/):
  the learning-mode postures, with the evidence.
- [Anthropic Academy](https://anthropic.skilljar.com/): the only structured
  course sequence that scales verification with autonomy; the natural next
  step if you want a curriculum.

## Where things stand

The order isn't the advice; the guide is the advice, and the evidence for it
is the dossier's. The order is what makes the advice survivable: play first,
catch the lessons your own use serves up, add each habit when its signal
arrives, and don't mistake the calendar for the signal. When the evidence
moves, this entry moves with the series it belongs to.

---

## Prototype notes (not part of the entry)

- **~1,350 words plus the reading list; call it 6 min.** The guide stays
  untouched at 9 min. A newcomer gets handed this, then graduates to the
  guide.
- **Links-as-apparatus has series precedent**: the dossier carries a
  Resources section. The guide deliberately links only to the dossier;
  shipping C preserves that character. Folding this material into the guide
  (Shape B with full meat) would roughly double its practice section and put
  the entry back at v1 length.
- **The novelty finding** (nothing out there teaches signal-gated staging)
  turns the on-ramp from a convenience into a position with its own footing,
  which is an argument for it being an entry rather than a paragraph.
- **Wiring if it ships**: slug `adopting-ai-onramp`, related-paired both
  ways with guide and dossier, sections.ts rail (What this is / Just use the
  thing / The signals / The situations / Further reading / Where things
  stand), and a one-line pointer added to the guide's practice intro
  ("if you want these in the order they'll actually arrive, the on-ramp
  entry is that order").
- **All quotes and numbers trace** to `research-onramp-external.md` and
  `research-onramp-local-mining.md`; the refuted "verification loops
  predicted comprehension 4.7x" claim was deliberately not used.
