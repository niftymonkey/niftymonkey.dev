'use client';

import { useEffect, useState } from 'react';

export interface ContentsLink {
  href: string;
  label: string;
}

/**
 * The contents rail. The links are the author's own, lifted from the contents
 * nav he published with the entry, so the notebook never renames his sections.
 * Overview is the one addition: the design's rail starts at the top of the
 * page, and without it there is nothing to mark when you are up there.
 */
export function EntryContents({ links }: { links: ContentsLink[] }) {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const ids = ['top', ...links.map((link) => link.href.slice(1))];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="nb-contents" aria-label="On this page">
      <p className="nb-contents__label">On this page</p>
      <a
        href="#top"
        className={`nb-contents__link${active === 'top' ? ' is-active' : ''}`}
      >
        Overview
      </a>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`nb-contents__link${active === link.href.slice(1) ? ' is-active' : ''}`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
