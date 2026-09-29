'use client';

import { useLayoutEffect } from 'react';

/**
 * Plays each section's entrance once, when its top crosses three quarters of
 * the way up the viewport. On a phone a long-build section is two or three
 * screens tall, so "a third of it visible" would fire after the reader had
 * already seen the top.
 *
 * The `js` class on the root is what lets the at-rest state hide anything at
 * all. An inline script sets it before first paint on a full load; this sets
 * it before paint on a client-side navigation, where inline scripts do not run.
 * Without either, everything is visible at rest and nothing is lost.
 */
export function Arrive() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -25% 0px', threshold: 0 },
    );

    document.querySelectorAll('[data-enter]').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove('js');
    };
  }, []);

  return null;
}
