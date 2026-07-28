# Local mining: actionable backing for the on-ramp habits

Mined 2026-07-27 from the verified research record in `/home/mlo/docs/ai-adoption/` (the repo behind
"Adopting AI: The Evidence So Far" and the draft engineer entry). Every item cites the in-repo file it
was found in and the original external source as that record names it. Text in quotation marks is
verbatim per the record's own verification (the record re-checked quotes character-for-character
against fetched sources; where the record narrated instead of quoting, that is noted). Refuted claims
from `pass-two-findings.md` section 5 were treated as off-limits and none appear below.

In-repo files cited (all under `/home/mlo/docs/ai-adoption/`):

- `pass-two-findings.md` (staging cards E18-E51, refutation ledger)
- `hard-tasks-findings.md` (bounded-task evidence)
- `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (verified detail cut for fit)
- `research-artifacts/anthropic-how-teams-use-claude-code.txt` (full extracted vendor PDF)
- `research-artifacts/bockeler-role-of-developer-skills.txt` (full article capture)
- `adopting-ai-dossier/index.html` (published dossier, cards E1-E17 and Resources)
- `metr-followup.txt` (METR 2026 update, raw capture)

---

## Habit 1: Route by shape (delegate bounded, machine-checkable tasks; keep complex/contextual work close)

**1.1 Anthropic's task-classification practice (the closest thing to a routing rule in the record).**
The Claude Code team's tip is literally to build this habit: "Develop task classification intuition"
and, quoted on card E20: "Learn to distinguish between tasks that work well asynchronously (peripheral
features, prototyping) versus those needing synchronous supervision (core business logic, critical
fixes)." The full text adds the operational split: abstract tasks on the product's edges run in
auto-accept mode; core functionality gets detailed prompts and real-time monitoring.
In-repo: `pass-two-findings.md` (E20); `research-artifacts/anthropic-how-teams-use-claude-code.txt`
(pages 5-6). External: Anthropic, "How Anthropic teams use Claude Code," vendor PDF,
https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf

**1.2 The concrete shapes that won, and the shapes that didn't.** Every large measured or reported
gain sits on bounded, well-specified, mechanically checkable work: Airbnb's 3.5K-file Enzyme-to-RTL
test migration (6 weeks vs a 1.5-year manual estimate, 75% of files in one 4-hour bulk run), Google's
int32-to-int64 ID migration ("The total time spent on the migration was reduced by an estimated 50%
as reported by the engineers doing the migration"), Amazon's Java upgrades, Slack's test conversion
(the sober 22% floor of the same task family), Peng et al.'s single bounded greenfield task (55.8%
faster). Every small number sits on complex work in existing code (McKinsey: under 10% on
high-complexity tasks; Stanford SWEPR 2x2: 0-10% brownfield/complex). The file's own recommendation:
"'pick bounded mechanical work first' is the single most actionable rollout guidance the evidence
supports." Concrete routable shapes named across the record: migrations, framework conversions,
version upgrades, test scaffolding and conversion, lint-debt burndown, repetitive changes across many
files, documentation drafts, boilerplate.
In-repo: `hard-tasks-findings.md` (sections 2 and 4); `adopting-ai-dossier/index.html` (E10, E15).
External: Airbnb Engineering, "Accelerating Large-Scale Test Migration with LLMs,"
https://airbnb.tech/infrastructure/accelerating-large-scale-test-migration-with-llms/ ; Google, "How
is Google using AI for internal code migrations?", https://arxiv.org/abs/2501.06972 ; Slack
Engineering, https://slack.engineering/balancing-old-tricks-with-new-feats-ai-powered-conversion-from-enzyme-to-react-testing-library-at-slack/ ;
Peng et al., https://arxiv.org/abs/2302.06590 ; McKinsey, "Unleashing developer productivity with
generative AI."

**1.3 A second routing test: does the work arrive with a check?** The dossier's E10 context row states
the routing rule in one line: E8 is about building a pass/fail signal where none exists, and "This is
the other move: some work arrives with one, and that is where the wins concentrate. The check is what
makes the work delegable, not what makes it free." A working question makes it a backlog exercise:
list which bounded, mechanically checkable work is already in the backlog (framework migrations,
version upgrades, test conversions, lint-debt burndown), because "each item arrives with its own
pass/fail check."
In-repo: `adopting-ai-dossier/index.html` (E10 context + Theme 03 working questions). External:
dossier synthesis over Airbnb/Google/NBER sources above.

**1.4 Practitioners already route this way (observed behavior, not advice).** METR's follow-up study
documents developers doing shape-routing spontaneously: "Some developers told us the types of tasks
they attempted were different with agentic AI, leaning on the strengths of AI." One participant:
"I avoid issues like AI can finish things in just 2 hours, but I have to spend 20 hours."
In-repo: `metr-followup.txt`; `hard-tasks-findings.md` (section 2, closing). External: METR, "We are
Changing our Developer Productivity Experiment Design,"
https://metr.org/blog/2026-02-24-uplift-update/

**1.5 The negative half: where routing to AI actively hurts.** The BCG field experiment (758
consultants) found that on a task deliberately chosen outside AI's capability frontier, "consultants
using AI were 19 percentage points less likely to produce correct solutions compared to those without
AI," because "Outside of it, humans relied too much on the AI." Meta's CodeCompose adds a
code-specific signal: "we found that CodeCompose is not helpful in scenarios where developers use
specialized APIs and libraries." Both give the engineer concrete keep-it-close markers: work outside
the tool's demonstrated competence, and work dense in internal/specialized context.
In-repo: `pass-two-findings.md` (E38, E24). External: Dell'Acqua et al., "Navigating the Jagged
Technological Frontier," https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf ;
Meta, "AI-Assisted Code Authoring at Scale," https://arxiv.org/html/2305.12050

**1.6 One team's shape-spotting heuristics.** Anthropic's Data Science team routes to the agent work
that is "too complex for editor macros but not large enough for major development effort" (merge
conflicts, semi-complicated refactors), and delegates whole implementations only where the work is
"relatively low context" (standalone visualization apps that don't require understanding the
monorepo). Growth Marketing's tip: "Identify API-enabled repetitive tasks," i.e. look for repetitive
workflows against tools with APIs.
In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (pages 11-12, 16). External:
Anthropic teams PDF (above).

---

## Habit 2: Agree on the plan before code gets written

**2.1 The vendor's own best-practices sequence.** Claude Code best practices prescribes the opposite
of one-shotting, per the record: section "Explore first, then plan, then code." Opening line:
"Letting Claude jump straight to coding can produce code that solves the wrong problem." For larger
features: "have Claude interview you first," so it asks about "technical implementation, UI/UX, edge
cases, and tradeoffs." And the payoff line: "Time spent making the spec precise pays off more than
time spent watching the implementation."
In-repo: `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (section 1, Anthropic best practices);
`adopting-ai-dossier/index.html` (E5). External: Anthropic, "Claude Code best practices,"
https://code.claude.com/docs/en/best-practices

**2.2 Two Anthropic teams' concrete plan-first workflows.** Growth Marketing: "Thoroughly brainstorm
and prompt plan before coding": spend significant time upfront in Claude.ai thinking through the
entire workflow, have it "create a comprehensive prompt and code structure" for the coding agent to
reference, and "work step-by-step rather than asking for one-shot solutions." Legal: "Plan
extensively in Claude.ai first": flesh out the entire idea conversationally, "Then ask Claude to
summarize everything into a step-by-step prompt for implementation," and during implementation ask it
to slow down and do one step at a time.
In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (pages 16, 22);
`research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md`. External: Anthropic teams PDF (above).

**2.3 Specs as durable artifacts.** Anthropic's Security Engineering team writes specifications in
markdown, stores them in the codebase, and has the agent "write, review, and execute" them; their
coding workflow starts with pseudocode, then guided test-driven development with periodic check-ins.
In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (page 7). External: Anthropic
teams PDF (above).

**2.4 What good plan-shaped prompting looks like (peer-reviewed).** The STEM-education study found
prompt craft contributed positively when it entailed "(a) decomposition into constraints and
interfaces, (b) contrastive requests (two designs with pros/cons), (c) test or failure-case
generation prior to code acceptance, and (d) traceability requirements (e.g., "explain invariants you
rely on")." That is a four-part checklist for the planning conversation itself.
In-repo: `pass-two-findings.md` (E22). External: International Journal of STEM Education (2025),
https://link.springer.com/article/10.1186/s40594-025-00592-w

**2.5 A team-level version: plan AI's role per project.** Atlassian's "Define AI's Project Role" play
(60 minutes): "Planning out why and how AI could be used to improve project outcomes from the
beginning will drive the best results."
In-repo: `pass-two-findings.md` (section 8 addendum, stage map). External: Atlassian Team Playbook,
https://www.atlassian.com/team-playbook/plays/ai-working-agreements (hub; play under
/team-playbook/plays/)

---

## Habit 3: Review AI output like a confident stranger wrote it

**3.1 Böckeler's review discipline and her concrete defect catalog.** Her first individual safeguard:
"Always carefully review AI-generated code." followed by "It's very rare that I do NOT find something
to fix or improve." The article doubles as a reviewer's checklist of what AI output specifically gets
wrong, sorted by how long the feedback loop is (her three impact radii: time to commit, team flow in
the iteration, long-term maintainability): misdiagnosed problems and rabbit holes; too much up-front
work instead of a vertical slice; brute-force fixes instead of root-cause analysis (raising Docker
memory limits instead of asking why memory blew up); workflow-complicating changes (two run commands
instead of one, broken hot reload); verbose and redundant tests ("more tests are not necessarily
better"); lack of reuse (duplicate components, inline CSS); overly complex or verbose code
(unnecessary constructor parameters that ignore the existing dependency-injection chain). Also her
pairing rationale: "Four eyes catch more than two, and two brains are less complacent than one."
In-repo: `research-artifacts/bockeler-role-of-developer-skills.txt`; `adopting-ai-dossier/index.html`
(E4). External: Birgitta Böckeler, "The role of developer skills in agentic coding," martinfowler.com,
March 2025.

**3.2 Why "trust but skim" fails: the automation-bias numbers.** When a decision aid is wrong, people
follow it: erroneous advice raised the risk of an incorrect decision by 26% (RR 1.26) in pooled
clinical studies; in radiology, wrong AI suggestions collapsed correct readings at every experience
level (roughly 80% down to 20-46%), with experience conferring only partial resilience. And the
canonical review: automation bias "cannot be prevented by training or instructions," which the record
reads as an argument "for process and tooling defenses, not awareness campaigns alone." Actionable
consequence: the stranger-review posture has to be built into process (checks, gates, review norms),
not into resolve.
In-repo: `pass-two-findings.md` (E26, E27, E31). External: Goddard et al., JAMIA 2012,
https://doi.org/10.1136/amiajnl-2011-000089 ; Dratsch et al., Radiology 2023,
https://pubs.rsna.org/doi/10.1148/radiol.222176 ; Parasuraman and Manzey, Human Factors 2010,
https://journals.sagepub.com/doi/10.1177/0018720810376055

**3.3 A named anti-pattern with a named countermeasure.** Thoughtworks Radar placed "Complacency with
AI-generated code" on Hold three editions running, with the countermeasure "reinforcing established
practices such as TDD and static analysis, and embedding them directly into coding workflows."
Böckeler's team-level list is the concrete version: code-quality monitoring (Sonarqube, Codescene)
with duplication watched more closely than before; pre-commit hooks and IDE-integrated review
(shift-left); team custom-rule files that codify good practices; and a weekly ritual: "you could keep
a "Go-wrong" log of events where AI-generated code led to friction on the team, or affected
maintainability, and reflect on them once a week."
In-repo: `adopting-ai-dossier/index.html` (E17);
`research-artifacts/bockeler-role-of-developer-skills.txt`;
`research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (Thoughtworks edition details). External:
Thoughtworks Technology Radar Vol. 33; Böckeler (above).

**3.4 Challenge the output's complexity by default.** Anthropic's Data Science team tip, "Interrupt
for simplicity when needed": "don't hesitate to stop Claude and ask "why are you doing this? Try
something simpler."" Backed by the observation that "The model tends toward more complex solutions by
default but responds well to requests for simpler approaches." A reviewer's stock question, verbatim.
In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (page 12);
`pass-two-findings.md` (E25). External: Anthropic teams PDF (above).

**3.5 Calibrate reviewers with worked wrong examples.** The CACM aviation-lessons piece recommends:
"Use onboarding techniques and tutorials to make users aware that overreliance is a common
phenomenon, giving them examples of correct and incorrect output." A ready-made onboarding exercise:
show new adopters real correct and incorrect AI output side by side and name overreliance as an
expected failure mode.
In-repo: `pass-two-findings.md` (E29). External: Sellen and Horvitz, CACM,
https://cacm.acm.org/opinion/the-rise-of-the-ai-co-pilot-lessons-for-design-from-aviation-and-beyond/

**3.6 Same review bar as human code.** Google routes every AI-authored migration change through the
same human review as human-written code (80% of landed changes were fully AI-authored, all reviewed),
and explicitly leaves long-term quality an open question.
In-repo: `hard-tasks-findings.md` (sections 2-3). External: Google, https://arxiv.org/abs/2501.06972

---

## Habit 4: Give every delegation a pass/fail check the machine can run

**4.1 The vendor's central prescription, stated as mechanism.** Dossier card E8 quotes Claude Code
best practices: "Claude stops when the work looks done. Without a check it can run, 'looks done' is
the only signal available, and you become the verification loop… Give Claude something that produces
a pass or fail, and the loop closes on its own."
In-repo: `adopting-ai-dossier/index.html` (E8). External: Anthropic, "Claude Code best practices,"
https://code.claude.com/docs/en/best-practices

**4.2 The teams' implementation: self-sufficient loops plus checkpoints.** From E20 (verbatim): "Set
up Claude to verify its own work by running builds, tests, and lints automatically. This allows
Claude to work longer autonomously and catch its own mistakes, especially effective when you ask
Claude to generate tests before writing code." The paired safety mechanism: "Teams emphasize starting
from a clean git state and committing checkpoints regularly so they can easily revert any incorrect
changes if Claude goes off track." The RL team's version: "Use a checkpoint-heavy workflow" and
"Regularly commit your work as Claude makes changes so you can easily roll back when experiments
don't work out."
In-repo: `pass-two-findings.md` (E20); `research-artifacts/anthropic-how-teams-use-claude-code.txt`
(pages 5-6, 20). External: Anthropic teams PDF (above).

**4.3 The measured wins ran on machine checks: Airbnb's verification state machine.** The record's
description of how the marquee case actually worked: each file ran through "a state machine of
automated validations with retry loops," with retries and prompts of "anywhere between 40,000 to
100,000 tokens, pulling in as many as 50 related files." Their loop even has a name: "After running
this 'sample, tune, sweep' loop for 4 days, we had pushed our completed files from 75% to 97%." The
last 3% was fixed by hand. The hard-tasks file's synthesis: "The gains ride on automated verification
(E7): every successful case gave the model a machine-checkable pass/fail loop." Google adds a
discipline worth copying: it pre-declared its own success bar before starting ("we have defined
success as AI saving at least 50% of the time for the end-to-end work").
In-repo: `hard-tasks-findings.md`; `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (Airbnb and
Google detail); `adopting-ai-dossier/index.html` (E10 context). External: Airbnb and Google (above).

**4.4 Repo-readiness questions to make the habit auditable.** The dossier's Theme 03 working
questions operationalize this habit per repository: "If an agent finished a change in one of our
repos right now, what could it run to learn whether the work is actually done: the test suite, a
typecheck, a build that fails loudly? In how many of our repos does that signal exist and run in
minutes?" And the tune-up list for repos that will receive delegated work: a faster test suite,
stricter lint and type gates, the context files and conventions an agent reads before it starts.
In-repo: `adopting-ai-dossier/index.html` (Theme 03 working questions, E9). External: dossier
synthesis; Anthropic, "How Claude Code works in large codebases" (E9's harness claim).

---

## Habit 5: Measure AI's value instead of feeling it (cheap receipts)

**5.1 Why feel is not evidence.** METR: developers "expected AI to speed them up by 24%, and even
after experiencing the slowdown, they still believed AI had sped them up by 20%" (measured: 19%
longer, wide CI; METR has since said it believes developers are now more sped up than the 2025
estimate, which moves the direction but not the self-assessment lesson). Stanford perception gap:
r = 0.17, "People misjudge their productivity by ~30 percentile points," "Only 1 in 3 people
estimated their productivity within one quartile" (n=43).
In-repo: `adopting-ai-dossier/index.html` (E16, overview tile); `metr-orig.txt` / `metr-followup.txt`;
`research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (Stanford SWEPR detail). External: METR,
https://metr.org/blog/2026-02-24-uplift-update/ ; Denisov-Blanch, Stanford SWEPR talk,
youtube.com/watch?v=JvosMkuNxF8 (talk, not a paper; cite ranges only).

**5.2 The cheap receipts the record itself names.** The dossier's working questions supply the
candidate metric set, phrased for adoption as-is: "the rework rate on merged changes, defects that
escape to production, how often changes get reverted"; "If we adopted three numbers next quarter to
see whether AI is helping, which three: time from merge to production deploy, rework rate on merged
changes, developer-reported time saved?"; and the minimal version: "Before scaling anything on
enthusiasm, what is the cheapest real measurement we could attach to one team's next sprint?"
In-repo: `adopting-ai-dossier/index.html` (Theme 02 and Theme 05 working questions). External:
dossier synthesis over E6/E16/E17/E13.

**5.3 Why single numbers mislead: the counterexamples to watch for.** Stanford case study (350-person
org, four months before/after): PRs +14%, code quality -9%, rework 2.6x, effective output roughly
flat; "the PR count alone would have read as a win." NBER: commits +180% cumulative but releases
+30%, so measure at the release end, not the commit end. Fenton (the mammography CAD precedent):
"No single measure is sufficient to judge the effect of computer-aided detection on interpretive
performance." Meta's measurement hygiene: count only suggestions displayed at least 750ms, and treat
acceptance rate as exposure, not productivity ("acceptance rate alone does not establish
productivity," narrated in the record).
In-repo: `adopting-ai-dossier/index.html` (E2 context, E7); `pass-two-findings.md` (E24, E32);
`research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (NBER and Stanford scoping). External: NBER WP
35275, https://nber.org/papers/w35275 ; Fenton et al., NEJM 2007; Meta CodeCompose (above).

**5.4 Ready-made measurement frameworks (with their guardrails).** DX: "Effectively measuring AI code
assistants and agents requires focusing on three key dimensions: utilization, impact, and cost,"
where impact is time saved, satisfaction, and delivery, not raw usage; the Core 4's "four
counterbalanced dimensions" exist because "changes to one dimension, such as speed, may negatively
affect others." Guardrails the record insists travel with it: "Speed and throughput metrics, when
used in isolation, often incite fear and counterproductive behaviors from developers," never use for
individual performance evaluation, and code-generation volume is "particularly susceptible to
gaming." GitClear's telemetry gives the codebase-side receipts to watch: duplicated-block rate,
copy/paste vs moved lines (refactoring proxy), and share of new lines revised within a month. DX's
free AI ROI calculator exists but its central input is self-reported hours saved, "precisely the
number this document shows people get wrong": use it for the cost side only.
In-repo: `adopting-ai-dossier/index.html` (E13, E17, Resources); `pass-two-findings.md` (E45).
External: DX, getdx.com/research ; GitClear reports,
https://gitclear-public.s3.us-west-2.amazonaws.com/GitClear-AI-Copilot-Code-Quality-2025.pdf

**5.5 A before/after instrument any team can run.** Atlassian's AI Working Agreements play has teams
survey their confidence before the workshop and repeat the same questions after; the Measure AI ROI
play stages a value assessment ("Measuring the ROI of AI turns vague AI experiments into focused,
accountable investments."). Both free and facilitator-ready.
In-repo: `pass-two-findings.md` (E21 and section 8 addendum). External: Atlassian Team Playbook,
https://www.atlassian.com/team-playbook/plays/ai-working-agreements

---

## Habit 6: Steer at the seams (the plan, the first wrong turn, the final judgment)

**6.1 The loop is the work: the one-third number and its two workflows.** Anthropic's RL team: the
agent "only works on first attempt about one-third of the time, requiring either additional guidance
or manual intervention." Their play, "Try one-shot first, then collaborate": "Give Claude a quick
prompt and let it attempt the full implementation first. If it works (about one-third of the time),
you've saved significant time. If not, then switch to a more collaborative, guided approach." The
Data Science alternative for bounded work, "Treat it like a slot machine": "Save your state before
letting Claude work, let it run for 30 minutes, then either accept the result or start fresh rather
than trying to wrestle with corrections. Starting over often has a higher success rate than trying to
fix Claude's mistakes." Best practices adds the reset rule at the first-wrong-turn seam: "After two
failed corrections, `/clear` and write a better initial prompt incorporating what you learned." The
record is explicit that the ten teams do not agree on tactics (iterate vs discard-and-restart), which
is itself useful: the seam is fixed, the tactic is contextual.
In-repo: `pass-two-findings.md` (E25); `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (section
1, Anthropic report detail); `research-artifacts/anthropic-how-teams-use-claude-code.txt` (pages 12,
20). External: Anthropic teams PDF and best practices (above).

**6.2 What steering concretely looks like (Böckeler's worked sessions).** "Even in those successful
sessions, I intervened, corrected and steered all the time." Her named interventions: pulling the
tool back from misdiagnosis rabbit holes early ("Many of those times I can pull the tool back from
the edge of those rabbit holes based on my previous experience"); redirecting broad up-front work
into one vertical slice; catching brute-force fixes at review; knowing when to give up ("I knew early
when to give up, and either start a new session with AI or work on the problem myself"). Her explicit
stopping rule: "Stop AI coding sessions when you feel overwhelmed by what's going on." Either revise
the prompt and start fresh, or fall back to manual implementation ("artisanal coding"). Her framing
of intervening at the beginning rather than the end: misunderstood requirements are caught by "a
developer watching them work and intervening at the beginning, rather than at the end."
In-repo: `research-artifacts/bockeler-role-of-developer-skills.txt`; `adopting-ai-dossier/index.html`
(E4). External: Böckeler (above).

**6.3 The mechanism argument for active following.** Casner's pilot study: the cognitive skills that
faded were the ones the automation absorbed, and retention "may depend on the extent to which pilots
follow along when automation is used to fly the aircraft." The record's transfer: passive supervision
is the documented risk posture; the steering habit (predict what should happen next, notice when it
doesn't) is the countermeasure. Complacency emerges under multiple-task load, in novices and experts
alike, so parallel-tasking while an agent runs is exactly the exposure condition.
In-repo: `pass-two-findings.md` (E30, E26). External: Casner et al., Human Factors 2014,
https://gwern.net/doc/technology/2014-casner.pdf ; Parasuraman and Manzey (above).

**6.4 Supervision effort scales with criticality (the seam placement rule).** The synchronous-mode
description: for critical features touching business logic, Anthropic's teams give "detailed prompts
with specific implementation instructions" and "monitor the process in real-time"; for peripheral
prototyping they review "the 80% complete solution before taking over for final refinements." The
final-judgment seam is preserved in both modes: a human takes over before merge.
In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (page 5). External: Anthropic
teams PDF (above).

---

## Habit 7: Learning mode (tutor not typist; attempt first; never outsource the debugging; keep no-assistance reps)

**7.1 What the highest scorers in the RCT concretely did.** In the Anthropic skill-formation RCT (52
mostly-junior engineers, unfamiliar library), the largest high-scoring cluster (n=7) "used AI for
concepts only and wrote the code themselves." High scorers ranged 65% to 86%. The counterintuitive
trap cluster: "people who wrote their own code and used AI to debug and verify it, asked more
questions, scored poorly and were slower": doing the typing but outsourcing the debugging still
gutted the learning. Full delegators "completed the task the fastest" but "at the cost of learning
the library," and the score gap was widest on debugging questions (AI group 50% vs 67% hand-coding).
Calibration the record insists on: the group-level gap is randomized-trial solid; the cluster splits
rest on small cells, read them as directional.
In-repo: `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (Anthropic skill study, E14);
`adopting-ai-dossier/index.html` (E14); `pass-two-findings.md` (E51 calibration). External: Shen &
Tamkin, "How AI Impacts Skill Formation," arXiv 2601.20245; Anthropic Research,
anthropic.com/research.

**7.2 Attempt-first and No-AI reps, as practiced.** Osmani's catalog of countermeasures practitioners
actually use: "One experienced dev instituted "No-AI Days": one day a week where he writes code from
scratch, reads errors fully, and uses actual documentation instead of AI." And the rule: "Always
attempt a problem yourself before asking the AI." Goel's version of the cost, offered as a feature:
build from scratch occasionally, "You'll write worse code, but you'll understand every line of it."
In-repo: `pass-two-findings.md` (E23, E49). External: Addy Osmani, "Avoiding Skill Atrophy in the Age
of AI," https://addyo.substack.com/p/avoiding-skill-atrophy-in-the-age ; Namanyay Goel,
https://nmn.gl/blog/ai-and-learning

**7.3 Four instructional-design patterns for keeping AI in a scaffolding role.** Peer-reviewed and
directly liftable: "dedicated 'critique-the-AI' phases, planned fading of AI assistance through
offline tasks, verification journals, and contrastive prompting." Same study: students conflate
prompt-engineering skill with programming skill itself, a trap worth naming to learners; and the
study's stance is that AI's educational value depends on human mediation, not the tool. The
three-arm RCT (Bassner, n=275) adds: only the scaffolded hint-first tutor increased intrinsic
motivation; the unrestricted solution-giving assistant did not. For learners, configure or prompt the
assistant to give hints and concepts, not solutions.
In-repo: `pass-two-findings.md` (E22, E41). External: IJ STEM Education 2025,
https://link.springer.com/article/10.1186/s40594-025-00592-w ; Bassner et al.,
https://doi.org/10.1016/j.caeai.2025.100537

**7.4 The mechanism: generation beats reading.** "The generation effect refers to the finding that
subjects who generate information (e.g., produce synonyms) remember the information better than they
do material that they simply read." Pooled effect 0.40 across 86 studies; g = 0.41 for learning from
texts, "not attributable to time-on-task." This is the record's mechanism-level answer to why reading
AI output is not equivalent to writing the code, and the direct justification for tutor-not-typist.
In-repo: `pass-two-findings.md` (E35). External: Bertsch et al., Memory & Cognition 2007; Schindler
and Richter, Educational Psychology Review 2023, https://doi.org/10.1007/s10648-023-09758-w

**7.5 Warning signs to self-monitor.** Prompting behavior is diagnostic: in the novice study, "The
most common prompts were to get direct answers or explanations, indicating cognitive offloading to
the tool." Answer-extraction prompting is the observable symptom of typist-mode. The framework paper
adds why self-monitoring is needed at all: "AI-induced skill decay may operate outside the
performer's awareness because the disuse is only at the level of cognitive skill engagement, not with
engagement with the task," and AI assistants "may promote illusions of understanding." The offloading
literature's shape: performance built on an external aid can degrade below the never-aided baseline
when the aid is withdrawn, an argument for periodically checking what you can do with the tool off.
Also relevant to confidence calibration: "higher confidence in GenAI is associated with less critical
thinking, while higher self-confidence is associated with more critical thinking," and the CHI paper
warns that without regular practice on routine low-stakes tasks, cognitive abilities can deteriorate:
keep the easy reps, don't delegate all of them.
In-repo: `pass-two-findings.md` (E44, E37, E36, E39). External: Mahmoud et al., CHASE 2026; Cognitive
Research: Principles and Implications 2024,
https://link.springer.com/article/10.1186/s41235-024-00572-8 ; Richmond and Taylor, Nature Reviews
Psychology 2025; Lee et al., CHI 2025 (Microsoft Research/CMU).

**7.6 The honest counterweight.** Calculators alongside traditional instruction mostly improved
paper-and-pencil skills (79-report meta-analysis; grade four the exception). The record's careful
scoping: the study never compared integration modes, so it proves deskilling is not inevitable, not
which pattern protects skill (the stronger integration-mode claim was refuted in review and must not
be used).
In-repo: `pass-two-findings.md` (E34; refutation item 14). External: Hembree and Dessart, JRME 1986.

---

## Habit 8: Leading mode (training budget, human formation-critical review, working agreements, countermeasures as normal)

**8.1 The training-budget warning, from experiment and from the field independently.** The BCG
paper's named danger: "An immediate danger emerging from these findings, for instance, is that people
will stop delegating work inside the frontier to junior workers, creating long-term training deficits
(Beane, 2019)." Godbolt arrives at the same place from the semiconductor-EDA precedent: "if
experienced developers like me can leverage multiple AI assistants to handle work traditionally done
by juniors, how do newcomers gain the experience needed to eventually become senior programmers?" and
"The "apprenticeship model" of programming might become more important, not less." The record pairs
them deliberately: the same concern from a randomized experiment and from field experience.
In-repo: `pass-two-findings.md` (E38, E50). External: Dell'Acqua et al. (above); Matt Godbolt,
https://xania.org/202504/ai-in-coding

**8.2 Keep pairing and review human where formation is the point.** Thoughtworks: "we advise against
fully replacing pair programming with AI"; assistants deliver some individual benefits ("getting
unstuck, learning about a new technology, onboarding") and none of the team benefits ("keeping the
work-in-progress low, reducing handoffs and relearning, making continuous integration possible or
improving collective code ownership"). The interview-room failure mode leaders are already seeing:
"Sure, the code works, but ask why it works that way instead of another way? Crickets. Ask about edge
cases? Blank stares." The dossier's working question turns it into practice: which practices keep the
debugging muscle exercised: "incident rotations, postmortems that walk the diagnosis, review comments
that ask why and not just what?"
In-repo: `pass-two-findings.md` (E47, E49); `adopting-ai-dossier/index.html` (Theme 05 working
questions). External: Thoughtworks Radar,
https://www.thoughtworks.com/radar/techniques/replacing-pair-programming-with-ai ; Goel (above).

**8.3 Working agreements: a runnable 60-minute play with a template.** Atlassian's AI Working
Agreements play: free, public, facilitated, 60 minutes, copyable whiteboard template (recreatable by
hand, no Atlassian account needed), discussion prompts naming responsible-use standards ("What are
our standards for responsible use? (e.g., always review AI outputs, never share sensitive data, flag
unclear results)"), identical pre- and post-workshop confidence surveys, and a built-in cadence:
"Set a quarterly reminder to revisit and update your AI working agreements as the team's tools and
needs evolve." The dossier frames its content for engineering teams as: what the team defaults to AI
for, what review AI output gets before merging, and what it must never touch. Vendor caveat: outcome
figures (82% more aligned) are Atlassian self-reported.
In-repo: `pass-two-findings.md` (E21 + section 8 addendum); `adopting-ai-dossier/index.html`
(Resources). External: https://www.atlassian.com/team-playbook/plays/ai-working-agreements

**8.4 Making countermeasures normal: schedulable formats.** The record's stock of rituals that frame
staying sharp as routine rather than remediation: Anthropic's internal spread mechanism ("The team
held sessions where members demonstrated their Claude Code workflows to each other. This helped
spread best practices"); Atlassian's AI Team Microlearning ("a short session inside a recurring team
meeting where everyone experiments with AI at the same time, then shares what they learned"), AI Use
Case Demos, AI Innovation Day, and Fix It Friday ("Regular experimentation as a team offers tangible
examples of AI use cases, highlights their value, and builds team member confidence"); Böckeler's
weekly go-wrong-log reflection; the E22 critique-the-AI phases run as class-wide (team-wide)
practice; and E29's onboarding that names overreliance as an expected phenomenon for everyone, which
is the framing device that keeps countermeasures from reading as punishment. Böckeler adds the
cultural precondition: high-pressure "you have AI now, deliver faster" environments push corner
cutting, while trust and psychological safety let people share their AI struggles so the team learns
faster.
In-repo: `pass-two-findings.md` (E20, E21 addendum, E22, E29);
`research-artifacts/bockeler-role-of-developer-skills.txt`. External: Anthropic teams PDF; Atlassian
Team Playbook; Sellen and Horvitz; Böckeler (all above).

**8.5 Org-level scaffolding for leaders running an adoption.** GitHub's AI Adoption Playbook (its own
internal enablement program, published CC BY 4.0): eight pillars (advocates, policy and guardrails,
communities of practice, a named owner, executive sponsorship, learning and development, right-fit
tooling, metrics) with a dated 30/90/ongoing checklist, and a copyable two-tier tool policy (vetted
tools safe for confidential data; everything else public/non-sensitive only). Anthropic's Champion
Kit: a thirty-day playbook for the person spreading the practice, with a weekly time budget, a table
of the five objections each paired with a demonstration to offer instead of an argument, and weekly
success signals. Shopify's Lutke memo shows the mandate end of the spectrum (AI usage in performance
and peer reviews, headcount requests gated on demonstrating AI cannot do the work, pre-provisioned
tooling, internal Slack channels sharing prompts); the record carries it as what one company decided,
not as measured outcome.
In-repo: `adopting-ai-dossier/index.html` (Resources);
`research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (section 2); `pass-two-findings.md` (E19).
External: github.com/github/ai-adoption-playbook ; code.claude.com/docs/en/champion-kit ; Lutke memo,
https://x.com/tobi/status/1909231499448401946

---

## Staged adoption material

Evidence and artifacts that adoption works as a sequence built on fundamentals, which validates a
layered on-ramp:

1. **Meta's phased rollout as measurement plan.** Language-by-language waves, 25% of developers at a
   time; "This method of doing the rollout steadily in phases helped us measure the effects of
   CodeCompose in practice at every step... and iterate on the product experience... before rolling
   out further." (Note from the record: no gating criterion existed; it was iteration, not gates.)
   In-repo: `pass-two-findings.md` (E18); `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md`.
   External: Meta CodeCompose, https://arxiv.org/html/2305.12050

2. **Vendor guidance is explicitly ordered.** GitHub enterprise guide: Getting started, then
   Governance basics, then Adopting agents; first step is approval, not deployment. DX frames its
   three dimensions as "tracking the natural lifecycle of AI adoption: teams first prioritize
   adoption and usage, then measuring impact, then the governance of standardization and spend."
   The dossier's Theme 04 header generalizes: every vendor and analyst playbook read for it leads
   with organizational and governance work, then a small pilot, then expansion, "rather than a
   technical big-bang," the same shape organizations used for CI/CD, Git, and test automation
   (the comparison is the dossier's own).
   In-repo: `adopting-ai-dossier/index.html` (E12, E13, Theme 04 intro). External: GitHub docs;
   DX research (above).

3. **Individual-level staging, from the tool-builder's own teams.** The Inference team's on-ramp
   tips are a personal staircase: "Test knowledge base functionality first" (check whether asking
   beats searching), then "Start with code generation": "Give Claude specific instructions and ask it
   to write logic, then verify correctness. This helps build trust in the tool's capabilities before
   using it for more complex tasks." The task-classification and checkpoint habits then build on that
   base. This is the clearest in-record support for fundamentals-first habit layering at the
   individual level.
   In-repo: `research-artifacts/anthropic-how-teams-use-claude-code.txt` (page 10). External:
   Anthropic teams PDF (above).

4. **Packaged programs are time-staged.** GitHub's playbook ends in a 30-day / 90-day / ongoing
   checklist (30: executive sponsor, named owner, v1 usage policy, baseline your numbers; 90:
   advocates, communities of practice, resource hub, early wins). Anthropic's Champion Kit runs a
   thirty-day arc with a per-week success signal ("in week one, someone asks a question; by week
   four, someone other than you is answering them"). Atlassian's eight plays map onto an adoption
   arc: norms and governance first (Working Agreements), then learning and skill-building
   (Microlearning, Innovation Day), then use-case identification, demos, applied time, and ROI
   measurement last.
   In-repo: `adopting-ai-dossier/index.html` (Resources); `pass-two-findings.md` (section 8
   addendum); `research-artifacts/MATERIAL-NOT-IN-THE-DOSSIER.md` (section 2). External: GitHub
   playbook; Champion Kit; Atlassian Team Playbook (above).

5. **Fundamentals gate the payoff.** Stanford SWEPR: code health (tests, types, documentation,
   modularity, code quality) explains roughly 40% of the variation in measured AI gains; DORA: "AI's
   primary role in software development is that of an amplifier." Both argue the on-ramp's early
   layers (checks, review discipline, measurement) are what make the later layers pay.
   In-repo: `adopting-ai-dossier/index.html` (E1, overview tiles). External: DORA 2025,
   dora.dev/dora-report-2025 ; Denisov-Blanch talk (ranges only).

6. **Learning-side staging: planned fading.** The E22 patterns include "planned fading of AI
   assistance through offline tasks": assistance is deliberately reduced as competence forms, the
   pedagogical mirror of a staged on-ramp. Bainbridge's final irony runs the other way and warns
   against treating training as a phase that ends: "it is the most successful automated systems, with
   rare need for manual intervention, which may need the greatest investment in human operator
   training." Rollout plans that cut training as the tool improves have the sign backwards.
   In-repo: `pass-two-findings.md` (E22, E28). External: IJ STEM Education 2025; Bainbridge 1983,
   https://gwern.net/doc/sociology/technology/1983-bainbridge.pdf

7. **Skill grows with use, but deliberately.** Lutke: "using AI well is a skill that needs to be
   carefully learned by… using it a lot." Combined with the routing and engagement evidence above,
   the record supports "high-volume use inside guardrails" rather than "cautious trickle" as the
   later stage.
   In-repo: `pass-two-findings.md` (E19). External: Lutke memo (above).

## Nothing found for

No habit is entirely unbacked; all eight have at least one concrete technique traceable to the
record. The thin spots, honestly stated:

- **Habit 4** as an individual practice ("every delegation gets a machine check") is backed by
  vendor guidance and case-study correlation, not by any controlled comparison of checked vs
  unchecked delegation. Note the refutation ledger: the "verification loops predicted comprehension,
  4.7x" claim was refuted (post-hoc subgroups of 7-8 people) and must not be used as backing.
- **Habit 5's personal-scale receipts**: the record's measurement material is mostly org-level (DX,
  DORA, GitClear, Meta). The individual "cheap receipts" framing (own rework rate, where the time
  went) is synthesized in the dossier's working questions and the engineer-entry draft, not sourced
  to a named practitioner's personal practice.
- **Habit 3's stranger-review posture** has strong mechanism evidence (automation bias) and
  practitioner practice (Böckeler), but no study measures whether adopting the posture improves
  review outcomes; the automation literature in fact warns instructions alone don't fix bias, which
  is why the backing emphasizes process mechanisms over exhortation.
- **Habit 8's "training budget"** is a reasoned countermeasure derived from the E38/E50 warnings; no
  organization in the record documents actually running a junior-task reservation policy.
- **Staged adoption at the individual-habit level** (habits building on habits) is supported by
  analogy and by the artifacts in the staged-adoption section; no source in the record tests a
  staged versus all-at-once introduction of practices.
