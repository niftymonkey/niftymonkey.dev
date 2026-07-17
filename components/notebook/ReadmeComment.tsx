'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The notebook index's README, rendered as a shell comment whose leading `#`
 * belongs to every visual line, not just the first.
 *
 * The text is one flowing string; the browser wraps it, with the prose and
 * `text-wrap: balance` deciding the breaks. We then count the visual rows and
 * draw that many `#` in a gutter that shares the text's line-height, so hash k
 * lands on row k. The marks live outside the text flow, so their number never
 * feeds back into where the text wraps. The count is remeasured on resize and
 * once the mono font has settled.
 */
export function ReadmeComment({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [rows, setRows] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const range = document.createRange();
      range.selectNodeContents(el);
      const tops = new Set<number>();
      for (const rect of range.getClientRects()) tops.add(Math.round(rect.top));
      setRows(Math.max(1, tops.size));
    };

    let frame = 0;
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          measure();
        });
    };

    measure();
    const observer = new ResizeObserver(schedule);
    observer.observe(el);
    // The mono face may arrive after first paint and shift where lines break.
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <p className="nb-readme">
      <span className="nb-readme__gutter" aria-hidden="true">
        {Array.from({ length: rows }, (_, row) => (
          <span className="nb-readme__hash" key={row}>
            #
          </span>
        ))}
      </span>
      <span className="nb-readme__text" ref={ref}>
        {text}
      </span>
    </p>
  );
}
