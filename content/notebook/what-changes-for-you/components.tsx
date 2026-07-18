import type { ReactNode } from 'react';
import styles from './entry.module.css';

/**
 * This entry's own one-offs, per the notebook's rule: nothing precipitates into
 * the design system until a second entry needs it. These borrow the dossier's
 * visual language through the shared entry stylesheet rather than its
 * components, which stay the dossier's own.
 */

/** A position the entry takes: the essay's analogue of the dossier's theme. */
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
 * The position's footing: how firmly it is held, and why. The personal analogue
 * of the dossier's confidence chips, which rate evidence rather than stance,
 * boxed the way its working questions were.
 */
export function Footing({ children }: { children: ReactNode }) {
  return (
    <aside className="theme__q">
      <h4>Footing</h4>
      <p>{children}</p>
    </aside>
  );
}

/** A mode-of-work caption inside the practice section. */
export function Mode({ children }: { children: ReactNode }) {
  return <p className="tier">{children}</p>;
}
