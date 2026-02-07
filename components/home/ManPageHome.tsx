import Link from 'next/link';
import { projects } from '@/config/projects.config';

const sortedProjects = [...projects].sort((a, b) => a.name.localeCompare(b.name));

export function ManPageHome() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <main className="max-w-4xl mx-auto px-8 pt-12 pb-24">
        {/* Man page header */}
        <div className="flex justify-between items-baseline border-b border-terminal-gray/30 pb-3 mb-10 font-courier">
          <span className="text-terminal-green font-bold">NIFTYMONKEY(1)</span>
          <span className="text-terminal-gray">Developer Manual</span>
          <span className="text-terminal-green font-bold">NIFTYMONKEY(1)</span>
        </div>

        {/* NAME */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">NAME</h2>
          <p className="ml-10 text-lg">
            <span className="font-courier text-terminal-green font-bold">niftymonkey</span>
            {' '}&mdash; software engineer, data/viz nerd, coffee addict
          </p>
        </section>

        {/* SYNOPSIS */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">SYNOPSIS</h2>
          <p className="ml-10 font-courier">
            <span className="font-bold text-terminal-green">niftymonkey</span>
            {' '}[<span className="text-terminal-cyan">--ai</span>]
            {' '}[<span className="text-terminal-cyan">--observability</span>]
            {' '}[<span className="text-terminal-cyan">--automation</span>]
            {' '}<span className="text-terminal-amber">&lt;project&gt;</span>
          </p>
        </section>

        {/* DESCRIPTION */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">DESCRIPTION</h2>
          <div className="ml-10 space-y-4 leading-relaxed text-lg">
            <p>
              I build software because I enjoy it and because it solves problems I
              actually have. Over time, some of those tools have become useful to other
              people too, which means I try to be more intentional about how I build and
              maintain them.
            </p>
            <p>
              My primary interests are AI integration, observability, and automation.
              Projects are open source by default, with an emphasis on transparency and
              practical utility.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">PROJECTS</h2>
          <div className="ml-10 space-y-7">
            {sortedProjects.map((project) => (
              <div key={project.id}>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-courier font-bold text-terminal-cyan hover:text-terminal-green transition-colors text-lg"
                  >
                    {project.name}
                  </a>
                  <span className="font-courier text-sm text-terminal-gray">
                    ({project.status})
                  </span>
                </div>
                <p className="mb-1.5">{project.description}</p>
                <p className="text-sm text-terminal-amber font-courier">
                  {project.tech.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEE ALSO */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">SEE ALSO</h2>
          <div className="ml-10 flex flex-wrap gap-x-8 gap-y-2 font-courier">
            <a
              href="https://github.com/niftymonkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              github(1)
            </a>
            <Link
              href="/philosophy"
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              philosophy(7)
            </Link>
          </div>
        </section>

        {/* Man page footer */}
        <div className="border-t border-terminal-gray/30 pt-5 mt-14">
          <div className="flex justify-between items-baseline font-courier">
            <span className="text-terminal-gray">niftymonkey.dev</span>
            <span className="text-terminal-gray">Developer Manual</span>
            <span className="text-terminal-gray">niftymonkey.dev</span>
          </div>
        </div>
      </main>
    </div>
  );
}
