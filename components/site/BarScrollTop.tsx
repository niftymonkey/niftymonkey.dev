'use client';

import { useEffect } from 'react';

const DOUBLE_TAP_MS = 300;

/**
 * Double-tap the terminal bar to return to the top, the way a phone's status
 * bar behaves. An entry can run forty minutes, and the bar is the one thing on
 * screen at every scroll position, so it is the natural thing to reach for.
 *
 * The listener lives on the document rather than on the bar itself. Each page
 * renders its own bar, so holding a reference to one would leave this attached
 * to a detached element the moment the reader navigates.
 *
 * Taps that land on a link or a button are left alone: those already do
 * something, and stealing them would be worse than not having this at all.
 * Everything else in the bar is fair game, including the breadcrumb.
 */
export function BarScrollTop() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const shouldScroll = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      if (!target.closest('.nb-bar')) return false;
      return !target.closest('a, button, input, select');
    };

    const toTop = (target: EventTarget | null) => {
      if (!shouldScroll(target)) return;
      window.scrollTo({ top: 0, behavior: reduced.matches ? 'auto' : 'smooth' });
    };

    const onDoubleClick = (event: MouseEvent) => toTop(event.target);

    // Touch browsers do not reliably emit dblclick on a double-tap, so pair the
    // taps by hand.
    let lastTap = 0;
    const onTouchEnd = (event: TouchEvent) => {
      if (!shouldScroll(event.target)) return;
      const now = performance.now();
      if (now - lastTap < DOUBLE_TAP_MS) {
        toTop(event.target);
        lastTap = 0;
        return;
      }
      lastTap = now;
    };

    document.addEventListener('dblclick', onDoubleClick);
    document.addEventListener('touchend', onTouchEnd);
    return () => {
      document.removeEventListener('dblclick', onDoubleClick);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return null;
}
