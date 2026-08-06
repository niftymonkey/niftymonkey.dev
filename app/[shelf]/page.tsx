import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { list } from '@vercel/blob';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { isShelfSegment } from './shelfPath';
import './shelf.css';

/**
 * The shelf is unlisted, not secret-by-robots: naming it in robots.txt would
 * publish the one thing worth keeping quiet. Nothing on the site links here,
 * and noindex covers the case where the path leaks into a crawler's queue.
 */
export const metadata: Metadata = {
  title: 'shelf',
  robots: { index: false, follow: false, nocache: true },
};

// The listing has to reflect whatever was uploaded a minute ago, so it is read
// per request rather than baked at build time.
export const dynamic = 'force-dynamic';

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value < 10 ? value.toFixed(1) : Math.round(value)} ${units[unit]}`;
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export default async function Shelf({ params }: { params: Promise<{ shelf: string }> }) {
  const { shelf } = await params;
  if (!isShelfSegment(shelf)) notFound();

  const { blobs } = await list();
  const items = [...blobs].sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());

  return (
    <>
      <TerminalBar path="~/shelf" right={<ThemeToggle />} />

      <main className="shelf">
        <p className="shelf__prompt">ls -lt ./shelf/</p>
        <p className="shelf__total">
          total {items.length}
          {items.length > 0
            ? ` · ${formatSize(items.reduce((sum, item) => sum + item.size, 0))}`
            : ''}
        </p>

        {items.length === 0 ? (
          <p className="shelf__empty">nothing on the shelf yet.</p>
        ) : (
          <ul className="shelf__list">
            {items.map((item) => {
              const href = `/${shelf}/f/${item.pathname
                .split('/')
                .map(encodeURIComponent)
                .join('/')}`;
              return (
                <li className="shelf__item" key={item.pathname}>
                  <a className="shelf__name" href={href}>
                    {item.pathname}
                  </a>
                  <a className="shelf__dl" href={`${href}?dl=1`}>
                    download
                  </a>
                  <span className="shelf__meta">
                    {formatDate(item.uploadedAt)} · {formatSize(item.size)}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}
