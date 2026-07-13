'use client';

import { useEffect } from 'react';

/**
 * The entry's own behaviour, carried over from the dossier unchanged apart from
 * its theme button, which the site chrome now owns.
 *
 * Two things happen here, and each exists for a reason the author wrote down: a
 * link into a collapsed evidence card must open it, or the reader lands on a
 * shut box; and printing a collapsed card would print a headline with no
 * evidence under it. Scroll-spy now lives with the rail that it drives.
 */
export function EntryBehavior() {
  useEffect(() => {
    const openCard = (hash: string) => {
      if (!hash || hash.length < 2) return;
      const el = document.getElementById(hash.slice(1));
      if (!el?.classList.contains('card')) return;
      const details = el.querySelector<HTMLDetailsElement>('.cardx');
      if (details) details.open = true;
    };

    openCard(window.location.hash);
    const onHashChange = () => openCard(window.location.hash);
    window.addEventListener('hashchange', onHashChange);

    let reopened: HTMLDetailsElement[] = [];
    const onBeforePrint = () => {
      reopened = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'));
      reopened.forEach((d) => {
        d.open = true;
      });
    };
    const onAfterPrint = () => {
      reopened.forEach((d) => {
        d.open = false;
      });
      reopened = [];
    };
    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('afterprint', onAfterPrint);
    };
  }, []);

  return null;
}
