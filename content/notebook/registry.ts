import type { ComponentType } from 'react';
import type { EntrySection } from './sections';
import AdoptingAi from './adopting-ai/entry.mdx';
import { sections as adoptingAiSections } from './adopting-ai/sections';

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
  'adopting-ai': { Body: AdoptingAi, sections: adoptingAiSections },
};
