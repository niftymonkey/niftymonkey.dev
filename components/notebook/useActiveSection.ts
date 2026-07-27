'use client';

import { useEffect, useState } from 'react';
import type { EntrySection } from '@/content/notebook/sections';

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

  return active;
}
