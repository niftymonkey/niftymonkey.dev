import type { EntrySection } from '../sections';

/** The essay's contents, in its own words and order. */
export const sections: readonly EntrySection[] = [
  { id: 'top', label: 'Overview' },
  { id: 'expect', label: 'What to expect' },
  { id: 'directing', label: 'Directing', group: 'Positions' },
  { id: 'routing', label: 'Routing', group: 'Positions' },
  { id: 'perception', label: 'Measuring', group: 'Positions' },
  { id: 'formation', label: 'Over-reliance', group: 'Positions' },
  { id: 'practice', label: 'Practice', group: 'Positions' },
  { id: 'closing', label: 'Where this leaves you' },
];
