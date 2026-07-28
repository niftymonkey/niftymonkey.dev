import type { ReactNode } from 'react';

/**
 * The on-ramp's own components, colocated per the notebook's rule: one-offs
 * live with the entry that uses them, and precipitate into the entry kit the
 * moment a second entry needs them. Not before.
 */

/**
 * One recognizable moment from early AI use: the symptom a reader can spot
 * themselves in, tagged with the habit it teaches. Children carry the lived
 * story in prose; the labeled rows (Move, Read) carry the practice and the
 * source material, so neither hides inside a paragraph.
 */
export function Moment({
  habit,
  title,
  children,
}: {
  /** The habit this moment teaches, rendered as the block's mono tag. */
  habit: string;
  /** The symptom, phrased the way it feels from the chair. */
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="moment">
      <span className="moment__tag">{habit}</span>
      <h3 className="moment__symptom">{title}</h3>
      {children}
    </article>
  );
}

/**
 * The tier's trigger kind, as a kicker under the section title: what has to
 * happen to you before this section's habits are worth adopting. The three
 * tiers differ only on this axis, so it's stated where each one starts.
 */
export function Arrives({ children }: { children: ReactNode }) {
  return <p className="arrives">{children}</p>;
}

/** The concrete practice: what to do when this moment is yours. */
export function Move({ children }: { children: ReactNode }) {
  return (
    <div className="moment__row">
      <span className="moment__lbl">The move</span>
      <span className="txt">{children}</span>
    </div>
  );
}

/** Where to go deeper, as its own row so the link never hides in prose. */
export function Read({ children }: { children: ReactNode }) {
  return (
    <div className="moment__row">
      <span className="moment__lbl">Read</span>
      <span className="txt">{children}</span>
    </div>
  );
}
