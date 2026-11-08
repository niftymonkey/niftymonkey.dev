import type { EntrySection } from '../sections';

/** The essay's contents, in its own words and order. */
export const sections: readonly EntrySection[] = [
  { id: 'top', label: 'Overview' },
  { id: 'where-i-stand', label: 'Where I stand' },
  { id: 'four-things', label: 'Four things engineers loved' },
  { id: 'craft', label: 'Craft', group: 'What they loved' },
  { id: 'knowledge', label: 'Knowledge', group: 'What they loved' },
  { id: 'team', label: 'Team', group: 'What they loved' },
  { id: 'result', label: 'Result', group: 'What they loved' },
  { id: 'teams', label: 'What teams can do' },
  { id: 'sources', label: 'Sources' },
];
