import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Screen } from '@/config/showcase.config';

interface ShotStyle extends CSSProperties {
  '--r': string;
  '--k'?: number;
}

export interface ShotProps {
  screen: Screen;
  /** Drop order within a stack. Omit for a screen that does not drop on arrival. */
  k?: number;
  /** Positioning class for the slot the screen occupies. */
  className?: string;
  /** The rendered width hint, so the browser fetches a sensible size. */
  sizes: string;
  /** Above the fold: fetch eagerly and preload. */
  priority?: boolean;
}

/**
 * One screen in one of the page's frames: a captured image or terminal output
 * rendered from text. The frame is what the capture was cut to and the image
 * covers it from the top left, so an off-ratio capture loses its far edge
 * rather than being squashed.
 */
export function Shot({ screen, k, className, sizes, priority }: ShotProps) {
  const classes = [
    'sc-shot',
    `sc-frame--${screen.frame}`,
    screen.live ? 'sc-shot--live' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const style: ShotStyle = { '--r': `${screen.tilt}deg` };
  if (k !== undefined) style['--k'] = k;

  return (
    <div className={classes} style={style} data-k={k !== undefined ? '' : undefined}>
      {screen.kind === 'capture' ? (
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="sc-shot__img"
        />
      ) : (
        <pre className="sc-term" role="img" aria-label={screen.alt}>
          {screen.lines.map((line, i) =>
            line.cmd !== undefined ? (
              <span key={i}>
                <span className="sc-term__prompt">&gt;</span> <b>{line.cmd}</b>
                {'\n'}
              </span>
            ) : (
              <span key={i}>
                {line.out}
                {'\n'}
              </span>
            ),
          )}
        </pre>
      )}
      <span className="sc-shot__tag">{screen.tag}</span>
    </div>
  );
}
