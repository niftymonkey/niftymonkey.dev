# The Notebook: Design Brief

Status: ready for design. This document is the input to the visual design pass. It is not a design.

This document is self-contained. Everything the design needs is in it.

The author's own north star is reproduced in full as **Appendix A**. It is the constitution and this brief is the spec. Where the two disagree, the north star wins.

The first entry already exists as written content. What the design needs from it is its *demands*, which are enumerated in section 13. Do not treat it as a visual reference.

---

## 1. What we are building, and why

A notebook at `/notebook`: a small, permanent collection of engineering thinking worth keeping.

The author is a senior engineer who does not want to be a content creator and has never wanted to be one. He wants to be **easier to learn from**. Friends and colleagues repeatedly ask him for things he has already figured out, and he keeps repackaging the same answers by hand. The notebook is where an answer goes so it only has to be built once.

The first entry already exists. He wrote a long, cited, evidence-based dossier on adopting AI in software engineering, and he had to build it as a one-off standalone page because there was nowhere to put it. That is the proof of what this is: not a blog post, not a CMS record, a *made thing*.

The success condition is not traffic. It is: did it help the person it was for, did it clarify something confusing, did it become a reference someone returns to.

## 2. Who it is for

Experienced software engineers, tech leads, staff engineers, engineering managers, and people navigating AI-assisted development without hype. They are intelligent, busy, and skeptical. They have seen a lot of confident writing that turned out to be wrong. Respect their time and do not perform for them.

Design consequence: this reader trusts craft and distrusts polish. They will notice a well-set citation and they will bounce off an animated statistic.

## 3. The unit and the vocabulary

- The collection is a **notebook**. `/notebook`
- A thing in it is an **entry**. `/notebook/adopting-ai`
- An entry is *a page in a notebook*, not a blog post. Prose is the most common medium, not the definition. An entry may be an essay, a long cited dossier, an interactive explainer, or a video with real written substance around it.

The word "blog post" does not appear anywhere in the design, the copy, or the code.

## 4. The shell, and what it does not constrain

**The shell is never optional and there is no dropping out of it.** Every entry shares the same typography, chrome, reading surface, and identity. Consistency is a promise the notebook keeps.

**Inside the content flow, anything is allowed.** The author can drop in an interactive React component he built for that one entry because a static image would undersell the point. He can build a section-to-section navigation that suits how that particular argument moves. This is not an escape hatch out of the system, it is a freedom the system grants.

There is no component library to design up front. Shared components will precipitate out later, once enough has been written to see what actually repeats. Do not invent them now.

## 5. Time, decay, and honesty

Software engineering writing rots, and AI writing rots fast. The author's stated fear is a reader clicking in and finding a shelf of confidently wrong old things. The notebook handles this directly, and this is the feature that makes it a notebook and not a blog:

- **Entries are ordered newest first.** Not because new is exciting, but because old is misleading.
- **Every entry carries a published date and a last-reviewed date.** A 2024 essay he still stands behind should read as *maintained*, not as *stale*.
- **Entries can be superseded.** The new version links back to the old one. The old one carries a forward pointer and sinks in the index. It is never deleted and its URL never breaks.

Design consequence, and it is a hard one: the supersession banner must read as **integrity**, not as an error state. It is the author saying "I learned more since." It should look like a considered piece of writing, not a yellow warning box.

## 6. Structure of the index

The index is itself authored. He groups the work, orders it, and writes the connective tissue that says why these belong together and where to start. Grouping is optional and only appears when it earns its keep. Within any grouping, newest first.

No tag taxonomy. No auto-generated topic buckets. No archive by year.

## 7. The end of an entry

A hand-curated **related entries** section, chosen by the author per entry based on what actually connects. Not algorithmic, not "here is the newest other thing."

Not present anywhere: share buttons, reactions, view counts, an email capture, a subscribe modal, a comment section. RSS is not a design surface; if it exists it is a link in the footer and nothing more.

## 8. Scale, and the hardest requirement in this brief

**Three to six entries will exist twelve months from now.** The goal is not to publish frequently. The goal is to publish things worth keeping.

So the single hardest thing the design must do:

> **Make four entries feel like a body of work, and not like an empty shelf waiting to be filled.**

Most entries will also have *nothing related to them yet*. The related section must be graceful when empty, not apologetic.

## 9. Delight

The north star explicitly welcomes "the occasional small bit of delight." It lives in the craft, not in an effects layer.

Delight is: the measure is correct on every screen, a footnote resolves without moving the page, the reviewed date is written in the same voice as the prose, the interactive component inside an entry genuinely earns its place.

Delight is not: fade-in on scroll, hover parallax, animated counters, ambient motion, anything that draws attention to the container instead of the contents.

## 10. Media

Video is **designed for now and built later.** The design must prove two things and then stop:

1. The index can list a video entry next to a written one and neither looks like the exception.
2. An entry surface can lead with a player and still be a real page, with the argument available in text for the people who will not watch.

Do not build the player, the chapters, or the transcript experience. Just do not design them out.

## 11. Boundaries

**In scope:** the notebook, and nothing else. The index at `/notebook`, the entry surface, the time and supersession model, the related section, and the design system underneath all of it.

**Out of scope:** the rest of the site. A site exists at this domain. It is about the software the author builds. That is the entire extent of what this design needs to know about it.

**Design as though the notebook is the first thing being built here.** Do not go looking at what the site currently is, do not try to match it, and do not assume anything about how it looks. There is nothing there to harmonize with, for the purposes of this work.

The reason is not that the notebook is separate. It is the opposite. If this design is good, the author intends to extend it outward and let the rest of the site adopt it, replacing what is there now. The notebook is not a room being decorated to fit a house. **It is where the house's language gets invented.**

Therefore the deliverable is not a styled page. It is a **seed system**: type scale, color, spacing, rhythm, and voice, expressed *through* the notebook because the notebook is the hardest and most honest test of it. A later conversation will ask how a home page and a projects list would speak this same language. Design so that conversation is possible.

**Nothing is off the table on aesthetic grounds.** Any visual direction that genuinely serves the principles in this brief is fair game. The constraints in this document are about what the design must *do* for its reader, never about what it must look like.

## 12. Non-negotiables

Prioritize, in this order: readability, clarity, longevity, accessibility, focus on content.

Timeless over fashionable. If a choice is recognizably *of 2026*, it is wrong.

Avoid: visual clutter, trendy choices that age poorly, attention-grabbing mechanics, excessive animation, metrics-driven design.

Tone in every piece of copy the design generates: calm, curious, thoughtful, evidence-based, practical, respectful of complexity. Never hype-driven, performative, sensationalized, self-promotional, or absolutist. The author is not presenting himself as someone with all the answers.

## 13. What the entry surface must survive on day one

The AI adoption dossier becomes entry #1 and is ported in. `/ai-adoption` redirects to `/notebook/adopting-ai` and never breaks. This is deliberate: it is the hardest content that exists, so the shell must answer for it now rather than in the abstract.

Concretely, the entry surface must hold:

- A forty-minute read without fatiguing the reader
- Six major sections, with a way to navigate among them
- A citation and resources apparatus that is genuinely well set
- Four interactive controls embedded in the content flow
- Long-form prose, code, tables, and figures
- Light and dark, both first class
- Published date, reviewed date, entry kind, duration
- A supersession banner, when it applies

## 14. Technical context (constraints, not instructions)

Next.js App Router, TypeScript, Tailwind, statically rendered, deployed on Vercel. Entries will be authored as prose files with arbitrary React inline, with one-off components colocated next to the entry that uses them. The design should assume this is possible and should not be shaped by it.

---

## Appendix A: the author's north star

Reproduced in full. This is the constitution. Where it and the brief above disagree, this wins.

### Purpose

This site is not a personal brand, content machine, influencer platform, or growth engine.

It exists because some ideas are worth preserving, refining, and sharing. The primary goal is to make useful engineering thinking available to people who may benefit from it, especially engineers (experienced and otherwise) who are navigating complex technical and organizational problems.

The site should feel more like a well-maintained engineering notebook than a marketing platform.

### Intended audience

- Experienced software engineers
- Technical leads and staff engineers
- Engineering managers
- People navigating AI-assisted software development thoughtfully
- Colleagues and peers looking for practical experience rather than hype

This audience is intelligent, busy, and skeptical. Respect their time.

### Tone

The tone should be: calm, curious, thoughtful, evidence-based, practical, respectful of complexity.

The tone should not be: hype-driven, performative, sensationalized, self-promotional, absolutist.

The author is not presenting himself as someone with all the answers. He is sharing lessons learned, observations, experiments, and perspectives that others may find useful.

### Design principles

Prioritize:

1. Readability
2. Clarity
3. Longevity
4. Accessibility
5. Focus on content

Avoid:

- Visual clutter
- Trendy design choices that age poorly
- Attention-grabbing mechanics
- Excessive animations
- Metrics-driven design

The site should feel timeless rather than fashionable. Though the occasional small bit of "delight" built into the website is definitely welcome.

### Content philosophy

Every piece of content should answer at least one of these questions:

- What did I learn?
- What surprised me?
- What mistake did I make?
- What changed my mind?
- What would have helped me some amount of time ago?
- What might help another engineer think more clearly?

The goal is not to publish frequently.

The goal is to publish things _worth_ keeping and sharing.

### Success metrics

Do not optimize for: followers, subscribers, likes, shares, page views.

Instead optimize for: usefulness, clarity, durability, thoughtfulness.

The ideal outcome is someone saying:

> "This helped me think more clearly."

### Final principle

Craftsmanship and usefulness come first.

If others find value in the work, that is a welcome outcome. The work does not need a large audience to justify its existence.

---

## The line to design against

The author is not trying to become a content creator. He is trying to become **easier to learn from**.

> Build things because they are useful and worth keeping.
>
> Share them because they might help someone.
>
> Let the audience size take care of itself.

If the design serves that, it is right. If it serves an audience metric, it is wrong.
