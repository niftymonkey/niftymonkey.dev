import type { HTMLAttributes } from 'react';

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  /** Small sage mono eyebrow, e.g. "Theme 01". */
  eyebrow?: string;
  /** Section title, set in mono. */
  title: string;
  /** Anchor id, doubles as the scroll and nav target. */
  id?: string;
}

/** A numbered section marker (eyebrow plus mono title) for dividing a long entry. */
export function SectionHeading({ eyebrow, title, id, className, ...rest }: SectionHeadingProps) {
  return (
    <div id={id} className={['nb-section', className ?? ''].filter(Boolean).join(' ')} {...rest}>
      {eyebrow ? <p className="nb-section__eyebrow">{eyebrow}</p> : null}
      <h2 className="nb-section__title">{title}</h2>
    </div>
  );
}
