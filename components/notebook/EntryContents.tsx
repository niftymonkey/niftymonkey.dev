'use client';

import { useEffect, useState } from 'react';
import type { EntrySection } from '@/content/notebook/sections';

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
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    if (!ids.length) return;

    // The active row is the last section whose heading has scrolled up to a line
    // just below the sticky bar. Unlike a thin mid-viewport intersection band,
    // this stays correct for short sections and for click-to-navigate, whatever
    // the order or size of the sections happens to be.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = 130;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // A short trailing section can never scroll its heading up to the line, so
      // once the page is scrolled to the end, snap to the last section.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

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
