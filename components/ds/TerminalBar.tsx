import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';
import type { NavItem } from '@/components/site/nav';

function GitHubIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.23 1.89.87 2.35.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export interface TerminalBarProps extends HTMLAttributes<HTMLElement> {
  /** Mono path shown as the identity, e.g. "~/notebook". */
  path: string;
  /** The leaf you are currently on, e.g. "adopting-ai". Renders as a breadcrumb. */
  subpath?: string;
  /** Right-hand slot for controls (theme toggle, contents toggle). */
  right?: ReactNode;
  /** Inner container max-width; defaults to the shell width, nav edge to edge. */
  maxWidth?: string;
  /** Cross-navigation. Every surface links to the others. */
  nav?: readonly NavItem[];
}

/**
 * Sticky terminal-window title bar, the masthead of every surface.
 *
 * On a phone the location collapses to its leaf: `~/notebook/adopting-ai`
 * becomes `adopting-ai`, because the ancestry is chrome and the leaf is the
 * answer to "where am I". The leaf is set apart from the nav links beside it
 * so it reads as a breadcrumb rather than as somewhere else you could go.
 */
export function TerminalBar({
  path,
  subpath,
  right,
  maxWidth = 'var(--width-shell)',
  nav = [],
  className,
  ...rest
}: TerminalBarProps) {
  return (
    <header className={['nb-bar', className ?? ''].filter(Boolean).join(' ')} {...rest}>
      <div className="nb-bar__inner" style={{ maxWidth }}>
        <span className={`nb-bar__loc${subpath ? ' nb-bar__loc--crumbed' : ''}`}>
          <span className="nb-bar__path">{path}</span>
          {subpath ? (
            <>
              <span className="nb-bar__sep" aria-hidden="true">
                /
              </span>
              <span className="nb-bar__crumb">{subpath}</span>
            </>
          ) : null}
        </span>

        <div className="nb-bar__right">
          {nav.length > 0 ? (
            <nav className="nb-bar__nav">
              {nav.map((item) => {
                const content = item.icon === 'github' ? <GitHubIcon /> : item.label;
                const className = item.icon ? 'nb-bar__nav-icon' : undefined;

                return item.href.startsWith('http') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    rel="noreferrer"
                    className={className}
                    aria-label={item.icon ? item.label : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={className}>
                    {content}
                  </Link>
                );
              })}
            </nav>
          ) : null}
          {right}
        </div>
      </div>
    </header>
  );
}
