import type { HTMLAttributes, ReactNode } from 'react';
import { Chip, type ChipTone } from './Chip';

export interface EvidenceCardProps extends HTMLAttributes<HTMLElement> {
  /** Short id, e.g. "E1". */
  id?: string;
  /** Confidence tone, which drives the chip color. */
  tone?: ChipTone;
  /** Chip text, e.g. "High confidence" or "Contested · perception gap". */
  confidenceLabel?: string;
  /** Tooltip explaining the rating. */
  tip?: string;
  /** The claim, set in mono. */
  claim: string;
  /** Verbatim quote, set in readable sans italic. */
  quote?: ReactNode;
  /** Citation. Renders the collapsible apparatus when present. */
  source?: ReactNode;
  context?: ReactNode;
  caveat?: ReactNode;
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="nb-evidence__row">
      <span className="nb-evidence__row-label">{label}</span>
      <span>{children}</span>
    </div>
  );
}

/** The notebook's citation unit: a rated claim, the quote, and the apparatus behind it. */
export function EvidenceCard({
  id,
  tone = 'high',
  confidenceLabel = 'High confidence',
  tip,
  claim,
  quote,
  source,
  context,
  caveat,
  className,
  ...rest
}: EvidenceCardProps) {
  const hasApparatus = Boolean(source || context || caveat);

  return (
    <article
      id={id}
      data-conf={tone}
      className={['nb-evidence', className ?? ''].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="nb-evidence__head">
        {id ? <span className="nb-evidence__id">{id.toUpperCase()}</span> : null}
        <Chip tone={tone} title={tip}>
          {confidenceLabel}
        </Chip>
      </div>

      <h3 className="nb-evidence__claim">{claim}</h3>

      {quote ? <blockquote className="nb-evidence__quote">{quote}</blockquote> : null}

      {hasApparatus ? (
        <details className="nb-evidence__more">
          <summary>
            Source{context ? ', context' : ''}
            {caveat ? ' & caveats' : ''}
          </summary>
          <div className="nb-evidence__rows">
            {source ? <Row label="Source">{source}</Row> : null}
            {context ? <Row label="Context">{context}</Row> : null}
            {caveat ? <Row label="Caveat">{caveat}</Row> : null}
          </div>
        </details>
      ) : null}
    </article>
  );
}
