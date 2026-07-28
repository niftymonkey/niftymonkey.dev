# External research: what already teaches the fundamentals of AI-assisted engineering

Research date: 2026-07-27. All sources below were fetched and read (primary pages, not secondary write-ups). "Free" means readable without payment; email-gated downloads are noted.

---

## Habit 1: Route by shape

**Named techniques and concepts:** task-suitability triage ("well-scoped vs. ambiguous"), issue-as-prompt, "start with simpler tasks" ramp, strengths/weaknesses inventory.

- **GitHub, "Best practices for using GitHub Copilot to work on tasks" (cloud agent)** - https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results - Free. The single closest primary match for route-by-shape: delegate tasks with a clear problem description, complete acceptance criteria, and file pointers; explicitly keep for yourself (a) complex/broadly-scoped work needing cross-repo or domain knowledge, (b) sensitive/production-critical/security work, (c) ambiguous tasks, and (d) "tasks where the developer wants to learn." Also names the "issue you assign to Copilot is a prompt" reframe.
- **GitHub, "Best practices for using GitHub Copilot"** - https://docs.github.com/en/copilot/get-started/best-practices - Free. Opens with "Understand Copilot's strengths and weaknesses" (best at: tests, repetitive code, debugging syntax, regexes; not a replacement for expertise) and "Choose the right tool for the job."
- **Anthropic, "Best practices for Claude Code"** - https://code.claude.com/docs/en/best-practices (redirect target of anthropic.com/engineering/claude-code-best-practices) - Free. The inverse heuristic: skip planning overhead for small clear tasks ("If you could describe the diff in one sentence, skip the plan"), which is itself a shape-routing rule.
- **Birgitta Böckeler, "The role of developer skills in agentic coding"** - https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html - Free. Practitioner evidence for what NOT to delegate: three "impact radius" failure categories (time-to-commit, team flow, long-term maintainability) showing where human context is load-bearing; includes "know early when to give up" as a skill.

## Habit 2: Agree on the plan before code gets written

**Named techniques and concepts:** explore-plan-code (plan mode), spec-first / spec-driven development (SDD), brainstorm-spec-plan-execute, "let the AI interview you," prompt plans + todo checklists.

- **Anthropic, "Best practices for Claude Code," section "Explore first, then plan, then code"** - https://code.claude.com/docs/en/best-practices - Free. The canonical vendor version: a four-phase workflow (explore in plan mode, produce a plan, implement against the plan, commit/PR), plus editing the plan before approving and the "let Claude interview you, then write SPEC.md" pattern.
- **Harper Reed, "My LLM codegen workflow atm"** - https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/ - Free. The most-copied practitioner recipe: idea-honing interview ("ask me one question at a time") producing spec.md, then a reasoning-model pass producing prompt_plan.md broken into small test-driven steps, then todo.md, then execution in discrete loops. Includes copy-paste prompts.
- **GitHub, "Spec-driven development with AI: get started with a new open source toolkit" (Spec Kit)** - https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/ and https://github.com/github/spec-kit - Free. Names and tools the spec-first discipline (specify, plan, tasks, implement).
- **Birgitta Böckeler, "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl"** - https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html - Free. Critical practitioner comparison of the three main SDD tools; useful for teaching what "agree on the plan" looks like across tools and where SDD over-promises.
- **GitHub, "Researching, planning, and iterating before opening a pull request"** (in the cloud-agent best-practices doc above) - Free. Vendor instruction to "agree on an approach with Copilot before any code is written."

## Habit 3: Review AI output like a stranger wrote it

**Named techniques and concepts:** CI-weakening check ("any CI weakening is a hard stop"), trace-one-critical-path, code-reuse/duplication sweep, require-a-failing-test, the 10-minute review protocol, functional-checks-first.

- **GitHub blog, "Agent pull requests are everywhere. Here's how to review them."** (May 2026) - https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/ - Free. The strongest single how-to found anywhere in this research: five named red flags (CI gaming, code-reuse blindness, hallucinated correctness, agentic ghosting, untrusted input in workflows), a timed 10-minute review protocol table, and copy-paste language for demanding smaller PRs. Frames the reviewer's job as exactly "you carry the context the agent lacks."
- **GitHub docs, "Review AI-generated code"** - https://docs.github.com/en/copilot/tutorials/review-ai-generated-code - Free. Five-step checklist: functional checks first (tests, static analysis), verify context and intent, assess quality, scrutinize dependencies (hallucinated packages, slopsquatting, licensing), spot AI-specific pitfalls (deleted/skipped tests, code that "looks right").
- **GitHub Copilot best practices, "Check Copilot's work"** - https://docs.github.com/en/copilot/get-started/best-practices - Free. Baseline: understand before implementing, review for maintainability not just function, back the review with automated tooling.
- **Addy Osmani, "Don't Outsource the Learning"** - https://addyosmani.com/blog/dont-outsource-learning/ - Free. Gives the exact stance in one line: "Treat AI output like a PR from a junior engineer. Read it. Critique it. Push back on it."

## Habit 4: Give every delegation a machine-runnable pass/fail check

**Named techniques and concepts:** verification loop / "give the agent a check it can run," acceptance criteria in the task, TDD-with-AI, test-then-refactor-keeping-green, stop hooks and goal conditions, evidence-not-assertion.

- **Anthropic, "Best practices for Claude Code," section "Give Claude a way to verify its work"** - https://code.claude.com/docs/en/best-practices - Free. The most explicit primary treatment: without a runnable check "you become the verification loop"; the check can be tests, build exit code, linter, fixture diff, or screenshot compare; an escalation ladder from in-prompt checks to goal conditions to deterministic Stop hooks to a second-opinion verification subagent; and "have Claude show evidence rather than asserting success."
- **Simon Willison, "AI-assisted development needs automated tests"** - https://simonwillison.net/2025/May/28/automated-tests/ - Free. The one-page argument: comprehensive test coverage "massively derisks" LLM use, because weird-but-working code can be proven correct and then refactored while keeping tests green. "Ask after the health of their test suite."
- **Harper Reed's TDD prompt** (in the workflow post above) - https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/ - Free. A reusable prompt that decomposes a spec into steps "small enough to be implemented safely with strong testing," each executed test-first.
- **Birgitta Böckeler, "TDD with GitHub Copilot"** (in the Exploring Gen AI series) - https://martinfowler.com/articles/exploring-gen-ai.html - Free. Practitioner memo on driving an assistant red-green-refactor.
- **GitHub cloud-agent best practices** - https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results - Free. "Complete acceptance criteria on what a good solution looks like" as a required property of a delegable task, and custom instructions so the agent "is able to build, test and validate its changes in its own development environment."

## Habit 5: Measure AI's value instead of feeling it

**Named techniques and concepts:** perception-vs-reality gap, self-report unreliability, task-level randomization, org-scale frameworks (DORA, DX AI Measurement Framework) scaled down.

- **METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"** - https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ - Free. The canonical evidence that feelings mislead: developers were 19% slower with AI while believing they were 20% faster, even after the fact. Also a model of careful scoping: an explicit table of claims the study does NOT support.
- **METR, "We are Changing our Developer Productivity Experiment Design"** (Feb 2026 update) - https://metr.org/blog/2026-02-24-uplift-update/ - Free. Methodological honesty in primary form: the follow-up shows probable speedup by late 2025 (original-cohort estimate -18%) but METR flags its own selection effects and calls the data weak evidence. Directly teaches why casual measurement goes wrong: selection of tasks and people biases everything.
- **DORA, "Impact of Generative AI in Software Development"** - https://dora.dev/ai/gen-ai-report/ - Free (email-gated PDF). Org-scale primary research; the relevant scaled-down lesson is measuring downstream outcomes (delivery throughput, stability) rather than AI usage itself.
- **DX, "AI Measurement Framework"** - https://getdx.com/research/measuring-ai-code-assistants-and-agents/ (PDF at https://getdx.com/uploads/ai-measurement-framework.pdf) - Free (vendor whitepaper). The most-cited practical framework for measuring AI coding tools (utilization, impact, cost dimensions); written for orgs but its metric menu is croppable to one engineer.
- **Gap:** no credible primary source was found teaching lightweight *personal* measurement (rework rate, survived-to-merge at individual scale). The guide's habit is ahead of the literature here; METR's perception-gap finding is the best available motivation, not a how-to.

## Habit 6: Steer at the seams

**Named techniques and concepts:** plan approval as a checkpoint, course-correct early (interrupt/rewind), "impact radius" triage of interventions, in-the-loop vs. on-the-loop vs. out-of-the-loop, harness engineering, review-before-PR iteration.

- **Anthropic, "Best practices for Claude Code," section "Course-correct early and often"** - https://code.claude.com/docs/en/best-practices - Free. Vendor version of seam-steering: interrupt mid-action, rewind to a checkpoint, and the rule that after two corrections on the same issue you should reset with a better prompt rather than keep patching; plan approval is the first seam, verification evidence the last.
- **Birgitta Böckeler, "The role of developer skills in agentic coding"** - https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html - Free. The best catalog of what steering actually looks like: concrete intervention examples organized by how long the feedback loop is if you miss them (commit, iteration, maintainability), which is an argument for steering at early seams.
- **"Humans and Agents in Software Engineering Loops"** (Exploring Gen AI series, martinfowler.com) - https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html - Free. Names the positions: humans out of the loop (vibe coding), in the loop (line-by-line gatekeeping, which bottlenecks), and "on the loop" (build and tune the harness that runs the loop). Directly supports "steer at the seams, not at every line."
- **GitHub cloud-agent doc, research-plan-iterate + batched review comments** - https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results - Free. Operationalizes two seams: agree on the plan before a PR exists, then steer via batched review comments.

## Habit 7: Learning mode

**Named techniques and concepts:** attempt-first ("open book exam" rules), No-AI Days, AI hygiene (interrogate the output), tutor-mode/Socratic prompting, explanation-before-code, re-derive by hand, Learning Mode tooling.

- **Addy Osmani, "Avoiding Skill Atrophy in the Age of AI"** - https://addyo.substack.com/p/avoiding-skill-atrophy-in-the-age - Free. The most complete practitioner treatment: named practices including "AI hygiene" (red-team the output, ask why it works), "No-AI Days," attempt-first (15-30 minutes on your own before asking), and reviewing AI code as if a colleague wrote it. Also catalogs warning signs of atrophy (debugging despair, blind copy-paste, fading recall).
- **Addy Osmani, "Don't Outsource the Learning"** - https://addyosmani.com/blog/dont-outsource-learning/ - Free. The updated (2026) version with evidence: cites an Anthropic RCT where AI-assisted learners matched speed but scored 50% vs 67% on comprehension, with conceptual-question askers above 65% and copy-pasters under 40% ("The tool didn't determine the outcome. The posture did."). Six named posture shifts: hypothesis before asking, explanation before code, Learning Mode when out of your depth, junior-PR review stance, re-derive by hand, ask the model to teach what it just did.
- **Anthropic, Learning Output Style plugin for Claude Code** - https://claude.com/plugins/learning-output-style - Free. Tooling that enforces the habit: pauses at meaningful decision points and asks the human to write 5-10 lines (business logic, design decisions) while handling boilerplate itself. A sibling Explanatory style exists at https://claude.com/plugins/explanatory-output-style.
- **GitHub cloud-agent doc** - https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results - Free. Vendor-side confirmation: "tasks where the developer wants to learn" are explicitly listed as tasks to keep, not delegate.

## Habit 8: Leading mode

**Named techniques and concepts:** apprenticeship framing (juniors as investment, not cost), "writing code is the easy part," team custom-rules files as codified agreements, "Go-wrong log" ritual, psychological safety around AI adoption.

- **Charity Majors, "Generative AI is not going to build your engineering team for you"** - https://charity.wtf/p/generative-ai-is-not-going-to-build-your-engineering-team-for-you (originally Stack Overflow blog, June 2024) - Free. The formation argument in primary form: software is an apprenticeship industry, ~7 years of writing/reviewing/deploying forges a senior, and replacing junior work with AI "cannibalizes our own future." The backbone for a training-budget-of-bounded-tasks position.
- **Birgitta Böckeler, "The role of developer skills in agentic coding," team/organization section** - https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html - Free. The closest credible thing to a working-agreement template found: shared custom-rules files iterated as a team, code-quality monitoring tuned for AI-typical smells (duplication), shift-left review hooks, a weekly "Go-wrong log" reflection ritual, and an explicit warning that delivery pressure ("you have AI now") degrades quality via cut corners.
- **Anthropic, "How Anthropic teams use Claude Code"** - https://www.anthropic.com/news/how-anthropic-teams-use-claude-code - Free. Vendor case studies of team-level usage patterns across departments; useful as concrete examples when writing a team's own agreement. A companion org-rollout guide, "Scaling Agentic Coding Across Your Organization," is at https://resources.anthropic.com/scaling-agentic-coding (free, gated download; not fetched for this research).
- **Gap:** no credible published team working-agreement *template* for AI use was found from a primary source; the search surfaced only low-quality SEO content mills. Böckeler's team section plus Majors's formation argument are the raw material; the template itself appears to be an open niche.

---

## Staged orderings found (Research Question 2)

Short answer: **no existing resource teaches these fundamentals as an explicit signal-gated on-ramp** ("floor habits first, add more when X appears"). Several credible resources have an implicit ordering, and they mostly agree with floor = (route by shape, plan first, read the output), with one systematic difference: they gate *autonomy* on *verification*, i.e. they move verification earlier the more unsupervised the work gets.

- **Anthropic Academy** (https://anthropic.skilljar.com/, free): course sequence is "Claude Code 101" (daily-workflow basics) before "Claude Code in Action" (https://anthropic.skilljar.com/claude-code-in-action), whose stated prerequisite is "developers who already use Claude Code for single prompts and want to move to longer, less supervised, team-wide workflows." In Action's internal order: Steer the Work (plan mode, course-correction) -> Configure (CLAUDE.md, skills, permissions, hooks) -> Automate -> Verify and Share, with the explicit principle "verify unsupervised runs in proportion to how little you watched them." Agreement: steering/planning are treated as entry-level; verification intensity scales with delegation depth. Disagreement: measurement never appears; team practices (plugins) come last, matching the guide's leading-mode-last position.
- **DeepLearning.AI, "Claude Code: A Highly Agentic Coding Assistant"** (https://www.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant, free during platform beta): lesson progression is explore/understand codebase -> CLAUDE.md and context control -> plan-first and thinking modes for features -> write tests and refactor -> parallel sessions via worktrees -> GitHub integration -> hooks -> MCP. Agreement: explore/context/plan before build, tests before scaling out to parallel/autonomous work.
- **Anthropic best-practices doc itself** (https://code.claude.com/docs/en/best-practices, free): notably orders "Give Claude a way to verify its work" as the FIRST practice, before explore-plan-code. This is the strongest disagreement found with a floor that defers verification: Anthropic now treats the machine-runnable check as the entry-level habit, not a later addition. (The rationale: without it, the human is the verification loop from day one.)
- **GitHub docs path** (free): Quickstart -> "Best practices" whose internal order is understand strengths/weaknesses (route by shape) -> choose the right tool -> thoughtful prompts -> check Copilot's work -> guide toward helpful outputs. Agreement: route-by-shape is literally the first thing GitHub teaches; reviewing output is in the floor. The cloud-agent doc adds "start by giving Copilot simpler tasks" as an explicit ramp.
- **NJIT CS 485 "AI-Assisted Software Engineering" (Sp26, Prof. Martin Kellogg)** (https://kelloggm.github.io/martinjkellogg.com/teaching/cs485-sp26/ with calendar at .../calendar/, free): semester order is intro codegen -> requirements engineering and dev specs (3 weeks!) -> build -> testing with LLMs incl. TDD and mutation-testing test quality -> deployment/monitoring -> static analysis and verification. Agreement: spec/plan before build is worth weeks of a university course. Disagreement: systematic verification is taught late (weeks 9-13) rather than as floor, though reflection essays force output-reading throughout.
- **Birgitta Böckeler / Exploring Gen AI series** (https://martinfowler.com/articles/exploring-gen-ai.html, free): chronological memos, not a curriculum; no staged ordering. The trajectory of the series itself (assistants -> agents -> harness engineering) mirrors capability growth, not pedagogy.
- **Addy Osmani, "Beyond Vibe Coding"** (https://beyond.addy.ie/, O'Reilly, **paid**): a structured book from vibe coding to AI-assisted engineering; the free adjacent essays (skill atrophy, don't-outsource-learning, the 70% problem at https://addyo.substack.com/p/the-70-problem-hard-truths-about) argue expertise-dependent staging (beginners need learning-mode guardrails from day one, seniors can delegate more), which supports gating learning-mode habits on a signal (experience level) rather than teaching them universally first.
- **Simon Willison** (https://simonwillison.net/2025/Mar/11/using-llms-for-code/, free): explicitly not staged, but his article's internal order (expectations -> context -> options -> tell-exactly -> test what it writes) puts "you have to test what it writes" as non-negotiable within the floor, and vibe-coding is framed as a *learning* activity for low-stakes work, not a production mode.
- **METR** (free): no pedagogy, but its perception-gap result is the standard citation for why measurement belongs in the progression at all.

**Net comparison to the proposed ordering:** floor = (route by shape, plan first, read the output) is well supported; GitHub's own docs open with route-by-shape and every credible source puts plan-before-code and output-reading at entry level. The main tension: Anthropic and Simon Willison both pull "machine-runnable check" into the floor rather than a second stage, on the argument that unverified delegation is what makes the other floor habits fail silently. Measurement as a taught habit appears nowhere in any curriculum (only in research orgs' own methodology), and staged learning-mode/leading-mode habits appear only implicitly (Osmani's expertise-gating, Academy's team-content-last). No resource uses signal-gated staging; that framing appears to be novel.

---

## Best further-reading shortlist (free-first)

1. **Anthropic, Best practices for Claude Code** - https://code.claude.com/docs/en/best-practices - Free. Covers four of the eight habits (verify, plan-first, steer, route small tasks) in one canonical vendor doc; the single highest-density link.
2. **Simon Willison, "Here's how I use LLMs to help me write code"** - https://simonwillison.net/2025/Mar/11/using-llms-for-code/ - Free. The most credible generalist walkthrough; sets expectations, context discipline, "test what it writes," and includes a full worked transcript.
3. **GitHub blog, "Agent pull requests are everywhere. Here's how to review them."** - https://github.blog/ai-and-ml/generative-ai/agent-pull-requests-are-everywhere-heres-how-to-review-them/ - Free. The best actionable review protocol found: named red flags plus a timed checklist a newcomer can run tomorrow.
4. **Harper Reed, "My LLM codegen workflow atm"** - https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/ - Free. Copy-paste prompts for spec -> plan -> test-driven execution; the fastest way to *do* plan-first rather than read about it.
5. **Birgitta Böckeler, "The role of developer skills in agentic coding"** - https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html - Free. Concrete steering interventions organized by feedback-loop length, plus the team safeguards section; earns the leading-mode slot too.
6. **METR early-2025 developer study (with its 2026 update)** - https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ - Free. The perception-vs-reality result that motivates measuring instead of feeling, from the org that also publishes its own methodological corrections.
7. **Addy Osmani, "Don't Outsource the Learning"** - https://addyosmani.com/blog/dont-outsource-learning/ - Free. Evidence-backed learning-mode postures (hypothesis first, explanation before code, re-derive by hand) in a short essay.
8. **Charity Majors, "Generative AI is not going to build your engineering team for you"** - https://charity.wtf/p/generative-ai-is-not-going-to-build-your-engineering-team-for-you - Free. The formation argument every leading-mode recommendation rests on.
9. **GitHub, cloud-agent task best practices** - https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results - Free. The clearest keep-vs-delegate list from a vendor, including "keep it if you want to learn from it."
10. **Anthropic Academy, "Claude Code in Action"** - https://anthropic.skilljar.com/claude-code-in-action - Free (registration). The only structured course that teaches verification proportional to autonomy; the natural "next step" link for readers who want a curriculum.

---

## Addendum (2026-07-27, after Mark's challenge): Matt Pocock / AI Hero

A real gap in the original sweep: the research prompt anchored on a named
candidate list that omitted Pocock, so aihero.dev never surfaced. Corrected
after fetching the primary pages directly.

- **Not paywalled overall.** The flagship "AI Coding for Real Engineers"
  2-week cohort (https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w)
  is PAID. Free layer: the AI Hero posts index (https://www.aihero.dev/posts),
  the open-source skills repo (https://github.com/mattpocock/Skills), a free
  7-day email course (https://www.aihero.dev/skills/subscribe), and free
  articles including "My 7 Phases Of AI Development" and "How To Make
  Codebases AI Agents Love."
- **Maps directly onto the habits.** Cohort page opens with the routing
  position as the two beginner errors ("they delegate everything" / "they
  delegate nothing"); week 2 leads with verification ("a green CI pipeline is
  non-negotiable when working with agents", red-green-refactor, encoding the
  team's quality bar into a skill, pre-commit hooks); planning is taught via
  PRDs, tracer bullets, and multi-phase plans; steering via AGENTS.md,
  progressive disclosure, and human-in-the-loop vs AFK ("Ralph") modes.
- **Core thesis matches the guide's Position 01**: AI is "a call for devs to
  deepen & upgrade our fundamental skillset: engineering"; the listed skills
  (communicating, anticipating, planning, decomposing, delegating,
  systematizing, parallelizing) are the old skills pointed at the new target.
- **Impact on the staged-orderings finding**: his cohort IS a staged
  fundamentals-first curriculum (fundamentals -> steering/planning ->
  feedback loops -> AFK autonomy), the strongest staged example found, ahead
  of the vendor courses. But it is calendar-staged (week 1 / week 2), not
  signal-gated, so the on-ramp's noticing mechanism still appears novel.
- **Shortlist implication**: "My 7 Phases Of AI Development" (free) and the
  skills repo are candidates for the further-reading shelf; the cohort would
  be a paid mention alongside Osmani's book.
