import type { ReactNode } from 'react';

/**
 * The dossier's own components, colocated with the entry that uses them.
 *
 * These are one-offs, not a library. Only what genuinely repeats in this entry
 * lives here: the seventeen evidence cards, the five themes, the stat tiles,
 * the provenance panels, the working questions, the resources. The entry's
 * singletons (its masthead, guide, glance, precedent, recap) stay written out
 * in the entry itself, where there is exactly one of each to read.
 *
 * If a second entry ever needs one of these, that is the moment it precipitates
 * out into the design system. Not before.
 */

export type Confidence = 'high' | 'med' | 'contra';

/* ---------------------------------------------------------- evidence cards */

interface EvidenceCardProps {
  /** Card id, lowercase: "e1". Renders uppercased as the card's badge. */
  id: string;
  confidence: Confidence;
  /** The chip's words, e.g. "High confidence" or "Contrarian · perception gap". */
  label: string;
  /** The chip's tooltip: what the rating means and how it was earned. */
  tip: string;
  children: ReactNode;
}

/**
 * A rated claim with its quotation and the apparatus behind it. The head is
 * fixed; everything below it is the entry's, in the order it wrote them.
 */
export function EvidenceCard({ id, confidence, label, tip, children }: EvidenceCardProps) {
  return (
    <article className="card" id={id}>
      <div className="card__head">
        <span className="card__id">{id.toUpperCase()}</span>
        <span className={`chip chip--${confidence}`} data-tip={tip} tabIndex={0}>
          {label}
        </span>
      </div>
      {children}
    </article>
  );
}

export function Claim({ children }: { children: ReactNode }) {
  return <h3 className="card__claim">{children}</h3>;
}

export function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="card__quote">{children}</blockquote>;
}

/** The collapsed apparatus. `source` is the short label shown on the summary. */
export function Apparatus({ source, children }: { source: string; children: ReactNode }) {
  return (
    <details className="cardx">
      <summary>
        <span className="cardx__src">{source}</span>
        <span className="cardx__hint">source, context &amp; caveats</span>
      </summary>
      {children}
    </details>
  );
}

export function Source({ children }: { children: ReactNode }) {
  return (
    <div className="card__row card__cite">
      <span className="card__row-lbl">Source</span>
      <span>{children}</span>
    </div>
  );
}

export function Context({ children }: { children: ReactNode }) {
  return (
    <div className="card__row">
      <span className="card__row-lbl">Context</span>
      <span className="txt">{children}</span>
    </div>
  );
}

export function Caveat({ children }: { children: ReactNode }) {
  return (
    <div className="card__row card__caveat">
      <span className="card__row-lbl">Caveat</span>
      <span className="txt">{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ themes */

export function Theme({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="theme" id={id}>
      <h2 className="theme__title">{title}</h2>
      {children}
    </section>
  );
}

export function ThemeIntro({ children }: { children: ReactNode }) {
  return <p className="theme__intro">{children}</p>;
}

/**
 * What a theme deliberately leaves for the reader to answer. Every theme ends
 * in one, which is why it is a component and the glance is not.
 */
export function WorkingQuestions({ children }: { children: ReactNode }) {
  return (
    <aside className="theme__q">
      <h4>Working questions</h4>
      {children}
    </aside>
  );
}

/* -------------------------------------------------------------- stat tiles */

type StatKind = 'perceived' | 'measured';

const STAT_TAG: Record<StatKind, string> = {
  perceived: 'Self-reported',
  measured: 'Measured',
};

interface StatProps {
  kind: StatKind;
  /** The figure. `text` sets it in prose rather than as a numeral. */
  num: ReactNode;
  text?: boolean;
  label: ReactNode;
  src: ReactNode;
}

/** A single measure, tagged with whether it was believed or measured. */
export function Stat({ kind, num, text, label, src }: StatProps) {
  return (
    <div className={`stat stat--${kind}`}>
      <span className={`stat__tag stat__tag--${kind}`}>{STAT_TAG[kind]}</span>
      <div className={`stat__num${text ? ' stat__num--text' : ''}`}>{num}</div>
      <div className="stat__lbl">{label}</div>
      <div className="stat__src">{src}</div>
    </div>
  );
}

/** The tile where belief and measurement are set against each other. */
export function StatGap({
  head,
  num,
  label,
  foot,
  src,
}: {
  head: string;
  num: ReactNode;
  label: ReactNode;
  foot: ReactNode;
  src: ReactNode;
}) {
  return (
    <div className="stat stat--gap">
      <div className="stat__gaptop">
        <div className="stat__gaphead">{head}</div>
        <span className="stat__tag stat__tag--measured">Measured</span>
      </div>
      <div className="stat__num">{num}</div>
      <div className="stat__lbl">{label}</div>
      <div className="stat__foot">{foot}</div>
      <div className="stat__src">{src}</div>
    </div>
  );
}

/* -------------------------------------------------------------- provenance */

/** One panel of how the research was made. `gist` is the summary's one line. */
export function ProvPanel({
  label,
  gist,
  children,
}: {
  label: string;
  gist: string;
  children: ReactNode;
}) {
  return (
    <details className="prov">
      <summary>
        <span className="prov__lbl">{label}</span>
        <span className="prov__gist">{gist}</span>
      </summary>
      {children}
    </details>
  );
}

/* --------------------------------------------------------------- resources */

export function Tier({ children }: { children: ReactNode }) {
  return <p className="tier">{children}</p>;
}

/**
 * Something a team can actually run. `note` carries the honesty: what it costs,
 * what it assumes, where it is gated.
 */
export function Resource({
  id,
  meta,
  link,
  note,
}: {
  id?: string;
  meta: ReactNode;
  link: ReactNode;
  note: ReactNode;
}) {
  return (
    <li id={id}>
      <span className="rmeta">{meta}</span>
      <span className="rlink">{link}</span>
      <span className="rnote">{note}</span>
    </li>
  );
}
