import type { EntrySection } from '../sections';

/**
 * The dossier's contents, in the author's own words and order. These are the
 * links the entry published with itself; the five themes carry the group so the
 * rail draws them together the way the argument does.
 */
export const sections: readonly EntrySection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'provenance', label: 'Provenance' },
  { id: 'glance', label: 'At a glance' },
  { id: 'amplifier', label: 'Amplifier', group: 'Themes' },
  { id: 'roles', label: 'Roles', group: 'Themes' },
  { id: 'verifying', label: 'Verifying', group: 'Themes' },
  { id: 'rollout', label: 'Rollout', group: 'Themes' },
  { id: 'risks', label: 'Risks', group: 'Themes' },
  { id: 'resources', label: 'Resources' },
  { id: 'recap', label: 'Where things stand' },
];
