'use client';

import type { EntrySection } from '@/content/notebook/sections';
import { useActiveSection } from './useActiveSection';

type ContentsRow =
  | { kind: 'group'; label: string }
  | { kind: 'link'; id: string; label: string; sub: boolean };

/**
 * Turns an entry's sections into display rows. A contiguous run sharing a group
 * is drawn beneath one heading of that name; everything else is a flat
 * top-level row. The grouping is whatever the entry said it was, so a second
 * entry that groups differently, or not at all, needs nothing here.
 */
function buildRows(sections: readonly EntrySection[]): ContentsRow[] {
  const rows: ContentsRow[] = [];
  let openGroup: string | undefined;

  for (const section of sections) {
    if (section.group && section.group !== openGroup) {
      rows.push({ kind: 'group', label: section.group });
    }
    openGroup = section.group;
    rows.push({
      kind: 'link',
      id: section.id,
      label: section.label,
      sub: Boolean(section.group),
    });
  }

  return rows;
}

/** The contents rail. The sections, their order and their words are the entry's own. */
export function EntryContents({ sections }: { sections: readonly EntrySection[] }) {
  const active = useActiveSection(sections);
  const rows = buildRows(sections);

  return (
    <nav className="nb-contents" aria-label="On this page">
      <p className="nb-contents__label">On this page</p>
      {rows.map((row, index) =>
        row.kind === 'group' ? (
          <p key={`group-${index}`} className="nb-contents__group">
            {row.label}
          </p>
        ) : (
          <a
            key={row.id}
            href={`#${row.id}`}
            className={`nb-contents__link${row.sub ? ' nb-contents__link--sub' : ''}${active === row.id ? ' is-active' : ''}`}
          >
            {row.label}
          </a>
        ),
      )}
    </nav>
  );
}
