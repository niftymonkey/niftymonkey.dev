'use client';

import { useEffect, useState } from 'react';

export interface ContentsLink {
  href: string;
  label: string;
}

const THEME_HREFS = new Set(['#amplifier', '#roles', '#verifying', '#rollout', '#risks']);

type ContentsRow =
  | { kind: 'group'; label: string; href?: string }
  | { kind: 'link'; href: string; label: string; sub?: boolean };

/**
 * Turns the flat contents links into display rows. The contiguous theme run
 * (#amplifier, #roles, …) sits under a plain "Themes" heading; every other link
 * stays a flat top-level row.
 */
function buildRows(links: ContentsLink[]): ContentsRow[] {
  const rows: ContentsRow[] = [];
  let inThemes = false;

  for (const link of links) {
    if (THEME_HREFS.has(link.href)) {
      if (!inThemes) {
        rows.push({ kind: 'group', label: 'Themes' });
        inThemes = true;
      }
      rows.push({ kind: 'link', href: link.href, label: link.label, sub: true });
    } else {
      inThemes = false;
      rows.push({ kind: 'link', href: link.href, label: link.label });
    }
  }

  return rows;
}

/**
 * The contents rail. The links are the author's own, lifted from the contents
 * nav he published with the entry, so the notebook never renames his sections.
 */
export function EntryContents({ links }: { links: ContentsLink[] }) {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const ids = ['overview', ...links.map((link) => link.href.slice(1))];

    // The active row is the last section whose heading has scrolled up to a line
    // just below the sticky bar. Unlike a thin mid-viewport intersection band,
    // this stays correct for short sections and for click-to-navigate, whatever
    // the order or size of the sections happens to be.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = 130;
      let current = 'overview';
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
  }, [links]);

  const rows = buildRows(links);

  return (
    <nav className="nb-contents" aria-label="On this page">
      <p className="nb-contents__label">On this page</p>
      {rows.map((row, index) =>
        row.kind === 'group' ? (
          row.href ? (
            <a
              key={`group-${index}`}
              href={row.href}
              className={`nb-contents__group${active === row.href.slice(1) ? ' is-active' : ''}`}
            >
              {row.label}
            </a>
          ) : (
            <p key={`group-${index}`} className="nb-contents__group">
              {row.label}
            </p>
          )
        ) : (
          <a
            key={row.href}
            href={row.href}
            className={`nb-contents__link${row.sub ? ' nb-contents__link--sub' : ''}${active === row.href.slice(1) ? ' is-active' : ''}`}
          >
            {row.label}
          </a>
        ),
      )}
    </nav>
  );
}
