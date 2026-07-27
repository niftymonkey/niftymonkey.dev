'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

/**
 * Reports once when a reader reaches an entry's closing section.
 *
 * Page views already say an entry was opened. This says it was read to the
 * end, which is the distinction worth having when deciding what to write next.
 *
 * It finds the closing section by class rather than by id because each entry
 * authors that section itself in MDX under its own id (`closing`, `recap`),
 * and the dossier's markup is frozen. Class is the thing they actually share.
 *
 * A zero threshold, not a fraction: the section is taller than a phone
 * viewport, so any fraction risks an end a small screen can never satisfy.
 * Its top edge entering the viewport already means the body has been scrolled
 * past. The observer disconnects on the first hit, so an entry reports at most
 * once per page load.
 *
 * Nothing renders and nothing is stored on the page: no counter, no reaction.
 */
export function ReadDepth({ slug }: { slug: string }) {
  useEffect(() => {
    const closing = document.querySelector('.nb-entry .recap');
    if (!closing) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      track('Entry read', { slug });
    });
    observer.observe(closing);

    return () => observer.disconnect();
  }, [slug]);

  return null;
}
