import type { ComponentType } from 'react';
import type { EntrySection } from './sections';
import { entries } from './entries';
import AdoptingAiEvidence from './adopting-ai-evidence/entry.mdx';
import { sections as adoptingAiEvidenceSections } from './adopting-ai-evidence/sections';
import AdoptingAiEngineer from './adopting-ai-engineer/entry.mdx';
import { sections as adoptingAiEngineerSections } from './adopting-ai-engineer/sections';

export interface EntryBody {
  /** The entry itself: a real component tree, compiled from its own file. */
  Body: ComponentType;
  /** The entry's account of its own structure, for the contents rail. */
  sections: readonly EntrySection[];
}

/**
 * Slug to body. Written out rather than resolved from the filesystem, because
 * at this size the map is worth reading, and because an entry that is listed
 * but cannot be imported should break the build rather than the page.
 *
 * `entries.ts` stays the index: what an entry is called, when it was written,
 * whether it still stands. This is where the writing itself is hung.
 */
export const bodies: Record<string, EntryBody> = {
  'adopting-ai-evidence': { Body: AdoptingAiEvidence, sections: adoptingAiEvidenceSections },
  'adopting-ai-engineer': { Body: AdoptingAiEngineer, sections: adoptingAiEngineerSections },
};

const unwritten = entries.filter((entry) => !(entry.slug in bodies));
if (unwritten.length) {
  throw new Error(
    `The notebook lists ${unwritten.map((e) => e.slug).join(', ')}, but nothing here says ` +
      `what to render. Add the entry to this map, or take it out of entries.ts. A listed ` +
      `entry that will not open is worse than one that was never listed.`,
  );
}
