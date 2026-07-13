import type { HTMLAttributes, ReactNode } from 'react';

export interface CalloutProps extends HTMLAttributes<HTMLElement> {
  /** Small mono label. Defaults to "Working questions". */
  title?: string;
  /** Body, typically a list of questions. */
  children: ReactNode;
}

/** A quiet aside on a faint accent tint: the notebook's working-questions block. */
export function Callout({ title = 'Working questions', children, className, ...rest }: CalloutProps) {
  return (
    <aside className={['nb-callout', className ?? ''].filter(Boolean).join(' ')} {...rest}>
      <p className="nb-callout__title">{title}</p>
      <div className="nb-callout__body">{children}</div>
    </aside>
  );
}
