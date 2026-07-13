import type { HTMLAttributes, ReactNode } from 'react';

export interface SupersessionBannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Small mono label. Defaults to "Supersedes an earlier note". */
  label?: string;
  /** The considered prose. Written as integrity, never as a warning. */
  children: ReactNode;
}

/**
 * States that an entry replaces, or is replaced by, another. This is the author
 * saying he learned more since. It is deliberately not an alert: no warning
 * color, no icon, no raised voice.
 */
export function SupersessionBanner({
  label = 'Supersedes an earlier note',
  children,
  className,
  ...rest
}: SupersessionBannerProps) {
  return (
    <div className={['nb-supersede', className ?? ''].filter(Boolean).join(' ')} {...rest}>
      <p className="nb-supersede__label">{label}</p>
      <div className="nb-supersede__body">{children}</div>
    </div>
  );
}
