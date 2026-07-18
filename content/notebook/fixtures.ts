import type { NotebookEntry } from './entries';

/**
 * NOT REAL WRITING. These entries do not exist and must never be published.
 *
 * The design handoff's notebook index shipped with five entries; only the
 * dossier (now `adopting-ai-evidence`) was real then. These four are the
 * invented ones, kept solely so the
 * index can be rendered at a realistic size during development and checked for
 * the things a one-entry index cannot exercise: a video row sitting next to a
 * written one without either looking like the exception, and a superseded
 * entry reading as integrity rather than as a broken link.
 *
 * Reachable only at /notebook?fixtures=1, and only outside production. See
 * `isFixturesEnabled` below, which is the single gate.
 */
export const fixtureEntries: readonly NotebookEntry[] = [
  {
    slug: 'reading-code-you-didnt-write',
    title: "Reading code you didn't write",
    description: 'When the machine writes and you review, the bottleneck moves to your eyes.',
    kind: 'essay',
    duration: '11 min',
    published: '2026-05',
  },
  {
    slug: 'a-small-harness-for-coding-agents',
    title: 'A small harness for coding agents',
    description:
      'The loop I put around an agent: adjust the pieces, watch the failure modes change.',
    kind: 'interactive',
    duration: '16 min',
    published: '2026-03',
    reviewed: '06',
  },
  {
    slug: 'directing-not-authoring',
    title: 'Directing, not authoring',
    description:
      'A short talk on the role shift from writing code to steering it, with the argument in text.',
    kind: 'video',
    published: '2025-11',
  },
  {
    slug: 'notes-on-ai-pair-programming',
    title: 'Notes on AI pair programming',
    description:
      'Early notes from my first year. The current thinking lives in the evidence dossier above.',
    kind: 'essay',
    duration: '7 min',
    published: '2024-08',
    superseded: true,
  },
];

/**
 * Fixtures require BOTH a non-production build and an explicit opt-in, so there
 * is no single flag that could leak invented writing onto the live site.
 */
export function isFixturesEnabled(searchParam: string | undefined): boolean {
  return process.env.NODE_ENV !== 'production' && searchParam === '1';
}
