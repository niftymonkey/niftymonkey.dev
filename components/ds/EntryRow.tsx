import Link from 'next/link';

export interface EntryRowProps {
  /** Published date, e.g. "2026-06". */
  date: string;
  /** Last-reviewed marker shown with a sage re-review glyph, e.g. "07". Omit if never re-reviewed. */
  reviewed?: string;
  /** Kind: dossier | essay | interactive | video. */
  kind: string;
  /** Reading or watch time, e.g. "40 min". */
  duration?: string;
  /** Entry title (sentence case, mono). */
  title: string;
  /** One-line description in readable sans. */
  description: string;
  /** Optional forward pointer, e.g. "supersedes notes-on-ai-pair-programming". */
  note?: string;
  href?: string;
  /** Prepends the video play triangle. */
  video?: boolean;
  /** Retired-but-kept entry: dimmed, struck title, no hover. */
  superseded?: boolean;
}

/**
 * One line of the plaintext collection.
 *
 * The kind label and the re-review mark carry the accent, on every row alike;
 * everything else is quiet.
 */
export function EntryRow({
  date,
  reviewed,
  kind,
  duration,
  title,
  description,
  note,
  href,
  video,
  superseded,
}: EntryRowProps) {
  const classes = ['nb-row', superseded ? 'nb-row--superseded' : ''].filter(Boolean).join(' ');

  const body = (
    <>
      <span className="nb-row__when">
        <span className="nb-row__date">{date}</span>
        {reviewed ? (
          <span className="nb-row__rev" title={`Last reviewed ${reviewed}`}>
            &#8635; {reviewed}
          </span>
        ) : null}
      </span>

      <span className="nb-row__kind">
        <span className="nb-row__kind-name">
          {video ? <span className="nb-row__play" aria-hidden="true" /> : null}
          {kind}
        </span>
        {duration ? <span className="nb-row__duration">{duration}</span> : null}
      </span>

      <span className="nb-row__main">
        <span className="nb-row__title">{title}</span>
        <span className="nb-row__desc">{description}</span>
        {note ? <span className="nb-row__note">{note}</span> : null}
      </span>
    </>
  );

  if (!href || superseded) {
    return <div className={classes}>{body}</div>;
  }

  return (
    <Link className={classes} href={href}>
      {body}
    </Link>
  );
}
