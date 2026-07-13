import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** "pill" = mono uppercase capsule; "icon" = square button holding a glyph. */
  variant?: 'pill' | 'icon';
  /** Paint in the accent to mark the current/active state. */
  active?: boolean;
  children?: ReactNode;
}

/** The notebook's utility buttons: the theme toggle (pill) and the contents toggle (icon). */
export function Button({ variant = 'pill', active, children, className, ...rest }: ButtonProps) {
  const classes = ['nb-btn', `nb-btn--${variant}`, active ? 'is-active' : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
