'use client';

import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import type { EntrySection } from '@/content/notebook/sections';
import { useActiveSection } from './useActiveSection';

/**
 * Reports how far into an entry a reader got, once, as they leave.
 *
 * Page views say an entry was opened. This says where it lost them, which is
 * the question worth asking when deciding what to write next. Reaching the end
 * needs no separate event: the closing section is the last section, so a
 * finished read is simply the last bucket.
 *
 * One event per visit, not one per section crossed. Vercel bills per event and,
 * more to the point, a cookieless dashboard cannot tell one reader's five
 * milestones from five readers, so a single report at the end is both cheaper
 * and the only shape that reads honestly.
 *
 * Known bias, accepted: the report goes out at the first sign of leaving, so a
 * reader who switches tabs mid-entry and returns to finish is recorded at the
 * depth they had when they switched. Waiting for a truer signal means risking
 * no signal, since a closing tab grants no second chance. Depth therefore reads
 * as a floor, never an overstatement.
 */
export function ReadDepth({
  slug,
  sections,
}: {
  slug: string;
  sections: readonly EntrySection[];
}) {
  const active = useActiveSection(sections);
  const furthest = useRef(0);
  const sent = useRef(false);

  useEffect(() => {
    const index = sections.findIndex((section) => section.id === active);
    if (index > furthest.current) furthest.current = index;
  }, [active, sections]);

  useEffect(() => {
    const report = () => {
      const index = furthest.current;
      // Nobody who never left the opening section has told us anything a page
      // view didn't. Those visits stay countable as views minus depth events.
      if (sent.current || index <= 0) return;
      sent.current = true;
      // The index rides along inside the value, zero-padded, because Pro allows
      // an event only two properties and the dashboard orders buckets by count.
      // Padding is what makes them sort back into the order they are read in.
      const position = String(index).padStart(2, '0');
      track('Entry depth', { slug, furthest: `${position}-${sections[index].id}` });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') report();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', report);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', report);
      // Following a link to another entry unmounts this without ever hiding the
      // page, which is the one exit route the two listeners above cannot see.
      report();
    };
  }, [slug, sections]);

  return null;
}
