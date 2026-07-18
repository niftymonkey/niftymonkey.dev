import type { Metadata } from 'next';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { EntryRow } from '@/components/ds/EntryRow';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { navFor } from '@/components/site/nav';
import { ReadmeComment } from '@/components/notebook/ReadmeComment';
import { entries, sortEntries, type NotebookEntry } from '@/content/notebook/entries';
import { fixtureEntries, isFixturesEnabled } from '@/content/notebook/fixtures';

export const metadata: Metadata = {
  title: 'The notebook · niftymonkey.dev',
  description: 'A small, permanent collection of engineering thinking worth keeping.',
};

function Rows({ list }: { list: NotebookEntry[] }) {
  return (
    <>
      {list.map((entry) => (
        <EntryRow
          key={entry.slug}
          date={entry.published}
          reviewed={entry.reviewed}
          kind={entry.kind}
          duration={entry.duration}
          title={entry.title}
          description={entry.description}
          note={entry.note}
          href={`/notebook/${entry.slug}`}
          video={entry.kind === 'video'}
          superseded={entry.superseded}
        />
      ))}
    </>
  );
}

export default async function Notebook({
  searchParams,
}: {
  searchParams: Promise<{ fixtures?: string }>;
}) {
  const { fixtures } = await searchParams;
  const showFixtures = isFixturesEnabled(fixtures);

  const all = sortEntries(showFixtures ? [...entries, ...fixtureEntries] : entries);
  const open = all.filter((entry) => !entry.superseded);
  const closed = all.filter((entry) => entry.superseded);
  const established = all.reduce(
    (earliest, entry) => (entry.published < earliest ? entry.published : earliest),
    all[0]?.published ?? '',
  );

  return (
    <>
      <TerminalBar path="~/notebook" nav={navFor('notebook')} right={<ThemeToggle />} />

      <main className="nb-shell">
        <p className="nb-prompt">cat README</p>

        <ReadmeComment text="engineering thinking worth keeping, written as carefully as i can and revisited so it stays honest as the ground moves." />

        {/* -t sorts by time, newest first. The flag is the ordering rule. */}
        <p className="nb-prompt nb-prompt--list">
          ls -lt ./entries/
          <span className="nb-caret" />
        </p>

        <p className="nb-subtle">
          total {all.length} · est. {established.slice(0, 4)} · {open.length} open
          {closed.length > 0 ? ` · ${closed.length} closed` : ''}
        </p>

        <div className="nb-index__head" aria-hidden="true">
          <span>Date · Rev</span>
          <span>Kind</span>
          <span>Entry</span>
        </div>

        <Rows list={open} />

        {closed.length > 0 ? (
          <>
            <p className="nb-index__divider"># closed · superseded, kept unbroken</p>
            <Rows list={closed} />
          </>
        ) : null}

        {showFixtures ? (
          <p className="nb-index__divider">
            # showing development fixtures. these entries are not real and never ship.
          </p>
        ) : null}
      </main>
    </>
  );
}
