import type { ReactNode } from 'react';
import styles from './entry-kit.module.css';

/**
 * The entry kit: shared building blocks for essay-style notebook entries.
 *
 * These began as one-offs inside the second entry and precipitated here the
 * moment a second use existed, per the notebook's rule. They own the fixes a
 * plain-markdown entry needs on this site (prose margins, list markers, the
 * masthead-to-content gap), so every entry using them inherits those fixes
 * from one place. The dossier still carries its own private versions of the
 * same ideas; migrating it onto this kit is optional future work.
 */

/**
 * The entry's opening block: title, dek, and date stamp. An entry with more
 * front matter than that (the dossier's reader guide and provenance) passes it
 * as children, rendered after the stamp inside the same flow.
 */
export function Masthead({
  title,
  tail,
  dek,
  stamp,
  children,
}: {
  title: string;
  /** Second line of the title, e.g. the part after "Adopting AI:". */
  tail: string;
  dek: string;
  stamp: string;
  children?: ReactNode;
}) {
  return (
    <header className="masthead">
      <div className="masthead__inner">
        <h1>
          {title} <span className="h1-tail">{tail}</span>
        </h1>
        <p className="dek">{dek}</p>
        <p className="stamp">{stamp}</p>
        {children}
      </div>
    </header>
  );
}

/** A section the entry asserts: the essay's analogue of the dossier's theme. */
export function Position({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={`theme ${styles.pos}`} id={id}>
      <h2 className="theme__title">{title}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

/**
 * How firmly the position is held, and why. The personal analogue of the
 * dossier's confidence chips, which rate evidence rather than stance, boxed
 * the way its working questions were.
 */
export function Footing({ children }: { children: ReactNode }) {
  return (
    <aside className="theme__q">
      <h4>Footing</h4>
      <p>{children}</p>
    </aside>
  );
}

/** A mode-of-work caption inside a practices section. */
export function Mode({ children }: { children: ReactNode }) {
  return <p className="tier">{children}</p>;
}
