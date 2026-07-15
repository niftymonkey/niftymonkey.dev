import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { EntryRow } from '@/components/ds/EntryRow';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { EntryBehavior } from '@/components/notebook/EntryBehavior';
import { ContentsToggle } from '@/components/notebook/ContentsToggle';
import { EntryContents, type ContentsLink } from '@/components/notebook/EntryContents';
import { navFor } from '@/components/site/nav';
import { entries, getEntry } from '@/content/notebook/entries';

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

interface EntryBody {
  html: string;
  contents: ContentsLink[];
}

/**
 * The entry's body is the author's published markup, rendered as-is. Its words,
 * elements and order are untouched; only its clothes changed. See entry.css.
 *
 * The one structural lift: the entry shipped its contents as a horizontal bar
 * inside <main>. The notebook shows contents as a rail beside the reading
 * column, which the shell owns, so the nav is lifted out and its links are
 * handed to the rail. The links themselves are the author's, verbatim.
 */
async function readBody(slug: string): Promise<EntryBody> {
  const file = path.join(process.cwd(), 'content', 'notebook', slug, 'body.html');
  const raw = await readFile(file, 'utf-8');

  const nav = raw.match(/<nav class="toc"[\s\S]*?<\/nav>/);
  if (!nav) return { html: raw, contents: [] };

  const contents = [...nav[0].matchAll(/<a href="(#[^"]+)"[^>]*>([^<]+)<\/a>/g)].map(
    ([, href, label]) => ({ href, label }),
  );

  return { html: raw.replace(nav[0], ''), contents };
}

export default async function Entry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const { html, contents } = await readBody(slug);
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
          <span id="overview" aria-hidden="true" style={{ scrollMarginTop: '50vh' }} />
          <p className="nb-prompt nb-prompt--shell">
            cat {entry.slug}.md
            <span className="nb-caret" />
          </p>

          <article className="nb-entry" dangerouslySetInnerHTML={{ __html: html }} />

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

        {contents.length > 0 ? <EntryContents links={contents} /> : null}
      </div>

      <EntryBehavior />
    </>
  );
}
