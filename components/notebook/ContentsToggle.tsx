'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ds/Button';

/**
 * Collapses the contents rail to leave a single reading column. The state lives
 * on the document element so the rail, which is inside the entry's own markup,
 * can respond in CSS without the entry body needing to know this button exists.
 */
export function ContentsToggle() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.toc = open ? 'open' : 'closed';
    return () => {
      delete document.documentElement.dataset.toc;
    };
  }, [open]);

  return (
    <Button
      variant="icon"
      className="nb-contents-toggle"
      active={open}
      aria-pressed={open}
      onClick={() => setOpen((value) => !value)}
      title={open ? 'Hide contents' : 'Show contents'}
    >
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1.25" y="2.25" width="13.5" height="11.5" rx="1.5" />
        <line x1="10" y1="2.25" x2="10" y2="13.75" />
      </svg>
      <span className="sr-only">{open ? 'Hide contents' : 'Show contents'}</span>
    </Button>
  );
}
