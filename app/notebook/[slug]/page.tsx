import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { EntryRow } from '@/components/ds/EntryRow';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { EntryBehavior } from '@/components/notebook/EntryBehavior';
import { ContentsToggle } from '@/components/notebook/ContentsToggle';
import { EntryContents } from '@/components/notebook/EntryContents';
import { navFor } from '@/components/site/nav';
import { entries, getEntry } from '@/content/notebook/entries';
import { bodies } from '@/content/notebook/registry';

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return { title: `${entry.title} · niftymonkey.dev`, description: entry.description };
}

export default async function Entry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  const body = bodies[slug];
  if (!entry || !body) notFound();

  const { Body, sections } = body;
  const related = entries.filter((other) => entry.related?.includes(other.slug));

  return (
    <>
      <TerminalBar
        path="~/notebook"
        subpath={entry.slug}
        maxWidth="66rem"
        nav={navFor('entry')}
        right={
          <>
            <ContentsToggle />
            <ThemeToggle />
          </>
        }
      />

      <div className="nb-entry-shell">
        <div className="nb-entry-column">
          {/*
            The rail's first row points here rather than at a heading, so that
            clicking it lands on the entry as it first loads. It is the shell's
            anchor, not the entry's, which is why it lives out here.
          */}
          <span id={sections[0]?.id} aria-hidden="true" style={{ scrollMarginTop: '50vh' }} />
          <p className="nb-prompt nb-prompt--shell">
            cat {entry.slug}.md
            <span className="nb-caret" />
          </p>

          <article className="nb-entry">
            <Body />
          </article>

          {related.length > 0 ? (
            <section className="nb-related">
              <p className="nb-prompt">related</p>
              {related.map((other) => (
                <EntryRow
                  key={other.slug}
                  date={other.published}
                  reviewed={other.reviewed}
                  kind={other.kind}
                  duration={other.duration}
                  title={other.title}
                  description={other.description}
                  href={`/notebook/${other.slug}`}
                />
              ))}
            </section>
          ) : null}
        </div>

        {sections.length > 0 ? <EntryContents sections={sections} /> : null}
      </div>

      <EntryBehavior />
    </>
  );
}
