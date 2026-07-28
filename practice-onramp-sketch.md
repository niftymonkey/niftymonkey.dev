# Sketch: giving the practice section an on-ramp

> Working document, disposable. The problem: the practice section is *simple*
> (twelve unentangled habits, each traceable to a position) but not *easy*
> (nothing tells a newcomer which three to start with or when to add the rest).
> Hickey's terms, and the gap is exactly the one his talk names: we delivered
> the parts list without the assembly order.

## The constraints this has to live inside

- **Length is the most-corrected axis.** The entry is ~1,950 words at 9 min.
  The practice section is ring-fenced as "allowed to be fatter," so this lands
  in the right place, but anything over ~200 added words should be a deliberate
  call, not drift. A bump to 10 min is possible and should be chosen, not
  discovered.
- **The modes-not-titles device is load-bearing** (it is what lets the entry
  cover juniors without being about juniors). Any new structure has to leave it
  standing.
- **The section's honesty is autobiographical.** The footing already confesses
  which habits are lived unevenly. So the on-ramp's ordering and its triggers
  can't be synthesized best practice; they have to be the order you'd actually
  tell someone, and signals you have actually caught yourself exhibiting.
- **No new visual grammar.** Prose and plain bullets already in the kit cover
  this. Nothing new to invent.

## Three shapes

### Shape A (recommended): an on-ramp dispatcher inside the practice section

A short passage after the modes-not-titles intro and before the first mode
block. It does two jobs: names the floor (the two or three habits to start
with), then routes into the existing lists with noticing-triggers ("when you
catch yourself doing X, it's time for Y"). The mode lists stay exactly as they
are; the on-ramp is an index into them, not a rewrite of them.

Why this one: it adds the assembly order without touching the parts. The three
modes are *situational* (you cycle among them daily); the on-ramp is *temporal*
(you pass through it once). Keeping them as separate ideas instead of merging
them into one ladder is the talk's own advice: don't braid two axes because
they arrived in the same feature request. Cost is ~150-200 words and zero
structural risk.

### Shape B: restructure the whole section into layers

Replace the three modes with a progression: layer one (starting out), layer
two (what you add when you notice the first signals), layer three (steady
state), layer four (leading others). This is the most literal reading of the
1-2-3 you described.

Why not: it braids the temporal axis into the situational one. "Leading
others" is not a later stage of the same skill; it's a different job that can
arrive on day one. The junior coverage that modes carry would need a new home.
And it re-litigates a section that took the most deliberate shaping in the
whole entry, for a payoff Shape A gets cheaper.

### Shape C: a third series entry (the on-ramp as its own thing)

"Adopting AI: The First Month" or similar. Full room for a real staged
program: stages with entry and exit criteria, exercises, checkpoints.

Why not yet: the guide should remain the one thing you hand an engineer, and
Mark framed the gap as "missing from how we're delivering" in *this* entry.
But Shapes A and C compose: ship A now, and if the on-ramp keeps wanting to
grow past its paragraph, that pressure is the evidence C deserves to exist.

## Drafted candidate for Shape A

Placement: in `entry.mdx`, immediately after "...a principal engineer learning
a new domain is, for that domain, junior again." and before the first `<Mode>`
block. Voice-checked against the entry; word cost ~170.

---

One more thing before the lists, because a dozen habits at once is nobody's
starting point. If working with AI is new to you, start with three: delegate
only what's bounded and machine-checkable, agree on the plan before any code
gets written, and read whatever comes back like a confident stranger wrote it.
That's the whole floor; everything else here is something you grow into, and
the signal to grow is something you'll notice, not a date on a calendar:

- Catch yourself skimming a diff you meant to read, and you're ready for the
  rest of the producing habits.
- Catch yourself sure the tool is helping, or sure it isn't, and it's time to
  start measuring instead of feeling.
- Find yourself learning something new with AI in hand, and the learning
  habits above stop being optional; they're the protection.
- Find other engineers' growth in your hands, and the third list is yours.

---

Notes on the draft:

- The three floor habits I picked are candidates, not conclusions. They're the
  three the rest of the entry leans on hardest (routing, the plan seam, the
  confident-stranger read), but the honest version is the three *you* would
  actually say first. This is where the unaudited-bullets thread from the fork
  cashes out: the floor should be habits you do without thinking, because
  "start where I started" is the only ordering the section's candor supports.
- The triggers are written as things a person catches themselves doing, in
  second person, because that's the entry's register. Each one needs the same
  audit: have you actually caught yourself skimming the diff? If a trigger
  isn't lived, it reads as generic advice and the section's footing stops
  covering it.
- The second trigger deliberately points at the measuring *position* rather
  than a practice bullet, because the receipts bullet was removed from the
  practice list on 07-18 as duplicative. The position carries the advice.
- "Nobody's starting point" echoes "nobody has measured" and the entry's habit
  of plain concessions; "not a date on a calendar" is doing the work of your
  "when you've gotten yourself in a good place" framing: promotion is noticed,
  not scheduled.

## What this costs the entry

~170 words, taking the entry to roughly 2,120. The 9 min label likely holds
(the threshold crossed at ~2,000 was already rounded); worth re-counting at
commit time. No component changes, no sections.ts changes (the on-ramp is
inside the existing practice section), no new rail row.
