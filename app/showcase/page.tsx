import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import './showcase.css';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { navFor } from '@/components/site/nav';
import { entries, fan, TIER_LABELS, type Entry, type Tier } from '@/config/showcase.config';
import { Arrive } from './Arrive';
import { Shot } from './Shot';

const title = 'A year of building with AI';
const description =
  'Fifteen working projects built with AI between September 2025 and September 2026, each with its real screens.';

export const metadata: Metadata = {
  title: `${title} · niftymonkey.dev`,
  description,
  openGraph: {
    title,
    description,
    url: 'https://niftymonkey.dev/showcase',
    siteName: 'niftymonkey.dev',
    type: 'website',
    images: [
      {
        url: 'https://niftymonkey.dev/logo.png',
        width: 512,
        height: 512,
        alt: 'niftymonkey.dev logo',
      },
    ],
  },
};

interface PrintStyle extends CSSProperties {
  '--i': number;
}

/** The line's place in the print order: lines land top to bottom on arrival. */
const at = (i: number): PrintStyle => ({ '--i': i });

const PERMISSIONS: Record<Entry['visibility'], string> = {
  public: 'drwxr-xr-x',
  private: 'drw-------',
};

const TIER_COUNT: Record<Tier, number> = {
  long: entries.filter((e) => e.tier === 'long').length,
  tool: entries.filter((e) => e.tier === 'tool').length,
  small: entries.filter((e) => e.tier === 'small').length,
};

function Name({ entry }: { entry: Entry }) {
  return entry.repo ? (
    <a href={entry.repo} rel="noreferrer">
      {entry.id}
    </a>
  ) : (
    <>{entry.id}</>
  );
}

function Status({ entry }: { entry: Entry }) {
  const live = entry.live?.[0];
  if (live) {
    return (
      <a className="sc-head__status sc-live" href={live.href} rel="noreferrer">
        [live]
      </a>
    );
  }
  return (
    <span className={`sc-head__status sc-status--${entry.visibility}`}>[{entry.visibility}]</span>
  );
}

function Divider({ tier, tight }: { tier: Tier; tight?: boolean }) {
  return (
    <div className={`sc-divider${tight ? ' sc-divider--tight' : ''}`}>
      <h2 className="sc-label" data-i="" style={at(0)}>
        {TIER_LABELS[tier]} · <span className="sc-tier-count">{TIER_COUNT[tier]}</span>
      </h2>
      <span className="sc-divider__rule" />
    </div>
  );
}

/** A long build: one full-height scene, the words beside a stack of three. */
function Scene({
  entry,
  index,
  flip,
  divider,
}: {
  entry: Entry;
  index: number;
  flip: boolean;
  divider: boolean;
}) {
  const base = divider ? 1 : 0;
  return (
    <section className="sc-snap" data-enter="">
      {divider ? <Divider tier="long" /> : null}
      <article className={`sc-scene${flip ? ' sc-scene--flip' : ''}`}>
        <div className="sc-scene__text">
          <p className="sc-count" data-i="" style={at(base)}>
            {String(index).padStart(2, '0')} / {entries.length}
          </p>
          <h3 className="sc-name" data-i="" style={at(base + 1)}>
            <Name entry={entry} />
          </h3>
          <p className="sc-meta" data-i="" style={at(base + 2)}>
            {PERMISSIONS[entry.visibility]} · {entry.visibility} · {entry.commits} commits ·{' '}
            {entry.stack?.join(' · ')}
            {entry.live?.map((link) => (
              <span key={link.href}>
                {' · '}
                <a className="sc-live" href={link.href} rel="noreferrer">
                  [{link.label}]
                </a>
              </span>
            ))}
          </p>
          <p className="sc-p" data-i="" style={at(base + 3)}>
            {entry.problem}
          </p>
        </div>
        <div className="sc-stack">
          {entry.screens.map((screen, j) => (
            <Shot
              key={screen.tag}
              screen={screen}
              k={j}
              className={`sc-stack__shot--${j}`}
              sizes={j === 0 ? '(max-width: 900px) 100vw, 40rem' : '(max-width: 900px) 50vw, 20rem'}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

/** Two tools side by side: a two-screen stack above, a paragraph and one hard line below. */
function Pair({ pair, divider }: { pair: Entry[]; divider: boolean }) {
  return (
    <section className="sc-snap" data-enter="">
      {divider ? <Divider tier="tool" /> : null}
      <div className="sc-pair">
        {pair.map((entry, a) => (
          <article key={entry.id}>
            <div className="sc-mini">
              {entry.screens.map((screen, j) => (
                <Shot
                  key={screen.tag}
                  screen={screen}
                  k={j + a}
                  className={`sc-mini__shot--${j}`}
                  sizes={
                    j === 0 ? '(max-width: 900px) 84vw, 28rem' : '(max-width: 900px) 46vw, 16rem'
                  }
                />
              ))}
            </div>
            <div className="sc-head" data-i="" style={at(3 + a)}>
              <h3 className="sc-head__name">
                <Name entry={entry} />
              </h3>
              <Status entry={entry} />
              <span className="sc-meta">{entry.commits} commits</span>
            </div>
            <p className="sc-p sc-p--small" data-i="" style={at(4 + a)}>
              {entry.problem}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** The small ones: one section of four rows, the hard part folded into the paragraph. */
function Smalls({ rows }: { rows: Entry[] }) {
  return (
    <section className="sc-snap" data-enter="">
      <Divider tier="small" tight />
      {rows.map((entry, r) => (
        <article className="sc-small" key={entry.id}>
          <span className="sc-meta" data-i="" style={at(2 * r + 1)}>
            {entry.commits} commits
          </span>
          <div>
            <div className="sc-head" data-i="" style={at(2 * r + 1)}>
              <h3 className="sc-head__name">
                <Name entry={entry} />
              </h3>
              <Status entry={entry} />
            </div>
            <p className="sc-p sc-p--small" data-i="" style={at(2 * r + 2)}>
              {entry.problem}
            </p>
          </div>
          <Shot
            screen={entry.screens[0]}
            k={2 * r + 1}
            sizes="(max-width: 900px) 20rem, 14rem"
          />
        </article>
      ))}
    </section>
  );
}

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

export default function Showcase() {
  const long = entries.filter((e) => e.tier === 'long');
  const tools = entries.filter((e) => e.tier === 'tool');
  const small = entries.filter((e) => e.tier === 'small');

  return (
    <>
      {/* Before first paint, so the at-rest motion state can hide anything. */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <Arrive />
      <TerminalBar
        path="~/dev"
        subpath="showcase"
        nav={navFor('showcase')}
        right={<ThemeToggle />}
      />

      <main className="sc-page">
        <section className="sc-snap sc-hero" data-enter="">
          <div>
            <p className="nb-prompt">
              <span className="sc-typed">git log --since=2025-09-04</span>
              <span className="nb-caret" />
            </p>
            <h1 data-i="" style={at(8)}>
              {title}
            </h1>
            <p className="nb-lede" data-i="" style={at(10)}>
              What I built between September 2025 and September 2026. The big ones get the full
              story. The rest get a picture and a paragraph, because that is what they were.
            </p>
            <p className="sc-meta" data-i="" style={at(12)}>
              total {entries.length} · the long builds, the tools, and the small ones
            </p>
          </div>
          <div className="sc-fan">
            {fan.map((screen) => (
              <Shot
                key={screen.tag}
                screen={{ kind: 'capture', ...screen }}
                sizes="(max-width: 900px) 70vw, 24rem"
                priority
              />
            ))}
          </div>
        </section>

        {long.map((entry, i) => (
          <Scene key={entry.id} entry={entry} index={i + 1} flip={i % 2 === 1} divider={i === 0} />
        ))}

        {chunk(tools, 2).map((pair, i) => (
          <Pair key={pair[0].id} pair={pair} divider={i === 0} />
        ))}

        <Smalls rows={small} />
      </main>
    </>
  );
}
