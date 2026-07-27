'use client';

import { useEffect, useState } from 'react';
import type { EntrySection } from '@/content/notebook/sections';

/**
 * Reads which section the reader is in from live layout, right now.
 *
 * The active section is the last one whose heading has scrolled up to a line
 * just below the sticky bar. Unlike a thin mid-viewport intersection band, this
 * stays correct for short sections and for click-to-navigate, whatever the
 * order or size of the sections happens to be.
 *
 * Exported separately from the hook because the depth reporter needs the answer
 * on the way out, when a scheduled frame may never get to run.
 *
 * Returns undefined unless the whole section list is on the page. A client-side
 * navigation swaps the document before the entry's effects clean up, and reading
 * the next page's layout would score the reader against sections they never saw.
 */
export function measureActiveSection(ids: readonly string[]): string | undefined {
  const elements = ids.map((id) => document.getElementById(id));
  if (elements.some((el) => !el)) return undefined;

  const line = 130;
  let current = ids[0];
  for (const [i, el] of elements.entries()) {
    if (el && el.getBoundingClientRect().top <= line) current = ids[i];
  }
  // A short trailing section can never scroll its heading up to the line, so
  // once the page is scrolled to the end, snap to the last section.
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = ids[ids.length - 1];
  }
  return current;
}

/**
 * Which of an entry's sections the reader is currently in.
 *
 * One definition, two readers: the contents rail marks it, and the depth
 * reporter remembers the furthest it ever returned. Keeping the rule here means
 * the number that gets measured is the same one the reader sees highlighted.
 */
export function useActiveSection(sections: readonly EntrySection[]): string {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const ids = sections.map((section) => section.id);
    if (!ids.length) return;

    // Batched to an animation frame so a burst of scroll events costs one
    // layout read rather than one per event.
    let frame = 0;
    const update = () => {
      frame = 0;
      setActive((prev) => measureActiveSection(ids) ?? prev);
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

  return active;
}
