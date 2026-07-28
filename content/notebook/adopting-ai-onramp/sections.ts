import type { EntrySection } from '../sections';

/** The on-ramp's contents, in its own words and order. */
export const sections: readonly EntrySection[] = [
  { id: 'top', label: 'Overview' },
  { id: 'play', label: 'Just use the thing' },
  { id: 'first-weeks', label: 'The first weeks' },
  { id: 'signals', label: 'The signals' },
  { id: 'situations', label: 'The situations' },
  { id: 'closing', label: 'Where things stand' },
];
