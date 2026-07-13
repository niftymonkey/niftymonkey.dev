import type { HTMLAttributes, ReactNode } from 'react';

export type ChipTone = 'neutral' | 'accent' | 'high' | 'medium' | 'contested';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color role. Kind tags use "neutral"/"accent"; evidence uses the status tones. */
  tone?: ChipTone;
  /** Solid accent fill, reserved for the single headline entry's kind tag. */
  filled?: boolean;
  /** "play" prepends a small video triangle. */
  icon?: 'play' | null;
  children?: ReactNode;
}

/** A small monospace label: a kind tag ("Dossier · 40 min") or a confidence chip. */
export function Chip({ tone = 'neutral', filled, icon, children, className, ...rest }: ChipProps) {
  const classes = [
    'nb-chip',
    `nb-chip--${tone}`,
    filled ? 'nb-chip--filled' : '',
    icon === 'play' ? 'nb-chip__play' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
