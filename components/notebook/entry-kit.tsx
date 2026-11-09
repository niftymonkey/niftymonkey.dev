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
  /** Second line of the title, e.g. the part after "Adopting AI:". Omit for a single-line title. */
  tail?: string;
  dek: string;
  stamp: string;
  children?: ReactNode;
}) {
  return (
    <header className="masthead">
      <div className="masthead__inner">
        <h1>
          {title}
          {tail ? <> <span className="h1-tail">{tail}</span></> : null}
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
  /** Omit for an untitled opening, like an essay's intro that runs straight on from the masthead. */
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className={`theme ${styles.pos}`} id={id}>
      {title ? <h2 className="theme__title">{title}</h2> : null}
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
    <section className="theme__q">
      <h4>Footing</h4>
      <p>{children}</p>
    </section>
  );
}

/** A short index of parallel sections, so a reader can find their own before reading on. */
export function KindMap({ children }: { children: ReactNode }) {
  return <ul className={styles.map}>{children}</ul>;
}

export function KindMapRow({ href, kind, children }: { href: string; kind: string; children: ReactNode }) {
  return (
    <li className={styles.mapItem}>
      <a className={styles.mapRow} href={href}>
        <span className={styles.mapKind}>{kind}</span>
        <span className={styles.mapText}>{children}</span>
      </a>
    </li>
  );
}

/** Labelled rows that repeat across parallel sections, so one reads against the next. */
export function Ledger({ children }: { children: ReactNode }) {
  return <dl className={styles.ledger}>{children}</dl>;
}

export function LedgerRow({
  label,
  lead,
  children,
}: {
  label: string;
  /** Sets the row's text forward, for the line a reader should recognize themselves in. */
  lead?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={styles.ledgerRow}>
      <dt className={styles.ledgerLabel}>{label}</dt>
      <dd className={lead ? `${styles.ledgerBody} ${styles.ledgerLead}` : styles.ledgerBody}>{children}</dd>
    </div>
  );
}

/** A set of named things people do: a name to scan for, then what it means. */
export function Moves({ children }: { children: ReactNode }) {
  return <ul className={styles.moves}>{children}</ul>;
}

export function Move({ name, children }: { name: string; children: ReactNode }) {
  return (
    <li className={styles.move}>
      <span className={styles.moveName}>{name}</span>
      <span className={styles.moveText}>{children}</span>
    </li>
  );
}

/** A boxed set of moves addressed to the reader, in the dossier's working-questions frame. */
export function Decide({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="theme__q">
      <h4>{label}</h4>
      <Moves>{children}</Moves>
    </section>
  );
}

/** A group of sources, read as a reference list to scan rather than prose. */
export function SourceList({ children }: { children: ReactNode }) {
  return <ul className={styles.sources}>{children}</ul>;
}

/**
 * One source: the work's title as the link, with who made it and where it
 * lives underneath, so the list reads as references and not a wall of links.
 */
export function Source({
  by,
  title,
  href,
  note,
  paper,
}: {
  by: string;
  title: string;
  href: string;
  /** Where it appeared, when the title alone doesn't say, e.g. a survey or venue name. */
  note?: string;
  /** The paper behind a write-up, when both are cited. */
  paper?: string;
}) {
  const host = new URL(href).hostname.replace(/^www\./, '');
  return (
    <li className={styles.source}>
      <a className={styles.sourceTitle} href={href}>
        {title}
      </a>
      <span className={styles.sourceBy}>
        {by}
        {note ? `, ${note}` : null}
        <span className={styles.sourceHost}> · {host}</span>
        {paper ? (
          <>
            {' · '}
            <a className={styles.sourcePaper} href={paper}>
              paper
            </a>
          </>
        ) : null}
      </span>
    </li>
  );
}

/** A mode-of-work caption inside a practices section. */
export function Mode({ children }: { children: ReactNode }) {
  return <p className="tier">{children}</p>;
}
