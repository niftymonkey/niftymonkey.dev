export type EntryKind = 'dossier' | 'essay' | 'interactive' | 'video';

export interface NotebookEntry {
  slug: string;
  title: string;
  /** One line, in the author's own words. Taken from the entry itself, never written for it. */
  description: string;
  kind: EntryKind;
  /**
   * Reading or watch time, derived from the entry rather than estimated by hand.
   * Optional: not every kind of entry has an honest duration to state.
   */
  duration?: string;
  /** Month first published, e.g. "2026-07". */
  published: string;
  /** Month last reviewed, when the author has gone back and stood behind it again. */
  reviewed?: string;
  /** A forward pointer shown under the row, e.g. a supersession relationship. */
  note?: string;
  /** Retired but kept: still reachable, still linked, never deleted. */
  superseded?: boolean;
  /**
   * Curated by hand, per entry, because the author wrote both ends and is the
   * only one who knows what actually connects. Never algorithmic, never "here
   * is the newest other thing". Empty is the honest answer until it isn't.
   */
  related?: readonly string[];
}

/**
 * The notebook, newest first. Recency is not novelty here: software engineering
 * writing rots, and this field rots fast, so the freshest thing leads and the
 * old work sinks rather than disappearing.
 *
 * Everything in this list is real and published. Fixtures used to exercise the
 * design at scale live in ./fixtures.ts and never ship.
 */
export const entries: readonly NotebookEntry[] = [
  {
    slug: 'adopting-ai-engineer',
    title: "Adopting AI: An Engineer's Guide",
    description:
      'What should I, as a software engineer, expect to think about and do differently as AI is adopted where I work?',
    kind: 'essay',
    duration: '9 min',
    published: '2026-07',
    related: ['adopting-ai-evidence'],
  },
  {
    slug: 'adopting-ai-evidence',
    title: 'Adopting AI: The Evidence So Far',
    description:
      'What the current evidence shows about bringing AI into an engineering organization: where the gains land, what they depend on, and how the work changes.',
    kind: 'dossier',
    duration: '34 min',
    published: '2026-07',
    related: ['adopting-ai-engineer'],
  },
];

export function getEntry(slug: string): NotebookEntry | undefined {
  return entries.find((entry) => entry.slug === slug);
}

/** Newest first, with superseded work kept but sunk to the bottom. */
export function sortEntries(list: readonly NotebookEntry[]): NotebookEntry[] {
  return [...list].sort((a, b) => {
    if (a.superseded !== b.superseded) return a.superseded ? 1 : -1;
    return b.published.localeCompare(a.published);
  });
}
