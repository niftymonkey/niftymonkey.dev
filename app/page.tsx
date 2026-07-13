import Link from 'next/link';
import { TerminalBar } from '@/components/ds/TerminalBar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { navFor } from '@/components/site/nav';
import { projects, type Project } from '@/config/projects.config';

/**
 * The permission string is the status, written the way a directory listing
 * writes it: what everyone can read is live, what the group can read is in
 * beta, and what only the owner can touch is still being built.
 */
const PERMISSIONS: Record<Project['status'], string> = {
  live: 'drwxr-xr-x',
  beta: 'drwxr--r--',
  development: 'drw-------',
};

export default function Home() {
  const sorted = [...projects].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <>
      <TerminalBar path="~/dev" nav={navFor('home')} right={<ThemeToggle />} />

      <main className="nb-shell">
        <section className="nb-block">
          <p className="nb-prompt">whoami</p>
          <p className="nb-lede nb-lede--bio">
            Software engineer. Data/viz nerd. Coffee addict. AI, observability, and automation make
            me giddy.
          </p>
        </section>

        <section className="nb-block">
          <p className="nb-prompt">
            ls -la ./projects/
            <span className="nb-caret" />
          </p>
          <p className="nb-subtle">
            total {sorted.length} · a mix of live tools, betas, and things still taking shape
          </p>

          {sorted.map((project) => (
            <a key={project.id} className="nb-project" href={project.url} rel="noreferrer">
              <span className="nb-project__perms">{PERMISSIONS[project.status]}</span>
              <span>
                <span className="nb-project__head">
                  <span className="nb-project__name">{project.id}</span>
                  <span className={`nb-project__status nb-project__status--${project.status}`}>
                    [{project.status}]
                  </span>
                </span>
                <span className="nb-project__desc">{project.description}</span>
                <span className="nb-project__tech">{project.tech.join('  ·  ')}</span>
              </span>
            </a>
          ))}
        </section>

        <section className="nb-block">
          <p className="nb-prompt">cat philosophy.md</p>
          <p className="nb-teaser">
            Open source is not an ideology for me, it is a practical way to establish trust. When
            software makes claims about encryption or privacy, users should be able to verify them.
          </p>
          <Link className="nb-link" href="/philosophy">
            read the full philosophy &rarr;
          </Link>
        </section>
      </main>
    </>
  );
}
