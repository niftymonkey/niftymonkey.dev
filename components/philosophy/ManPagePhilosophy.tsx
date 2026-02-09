import Link from 'next/link';
import { principles } from '@/config/principles.config';
import { ManPageNav } from '@/components/man-page/ManPageNav';

export function ManPagePhilosophy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      <ManPageNav />
      <main className="max-w-4xl mx-auto px-8 pt-12 pb-24">
        {/* Man page header */}
        <div className="flex justify-between items-baseline border-b border-terminal-gray/30 pb-3 mb-10 font-courier">
          <Link href="/philosophy" className="text-terminal-green font-bold hover:text-terminal-cyan transition-colors">PHILOSOPHY(7)</Link>
          <span className="text-terminal-gray">Developer Manual</span>
          <Link href="/philosophy" className="text-terminal-green font-bold hover:text-terminal-cyan transition-colors">PHILOSOPHY(7)</Link>
        </div>

        {/* NAME */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">NAME</h2>
          <p className="ml-10 text-lg">
            <span className="font-courier text-terminal-green font-bold">philosophy</span>
            {' '}&mdash; how I build software
          </p>
        </section>

        {/* SYNOPSIS */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">SYNOPSIS</h2>
          <p className="ml-10 font-courier">
            <span className="font-bold text-terminal-green">niftymonkey</span>
            {' '}--philosophy
            {' '}[<span className="text-terminal-cyan">--transparent</span>]
            {' '}[<span className="text-terminal-cyan">--open-core</span>]
            {' '}[<span className="text-terminal-cyan">--sustainable</span>]
          </p>
        </section>

        {/* DESCRIPTION */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">DESCRIPTION</h2>
          <div className="ml-10 space-y-4 leading-relaxed text-lg">
            <p>
              I build software because I enjoy it and because it solves problems I personally have.
              Over time, some of those tools have become useful to other people too, which means
              I need to be more intentional about how I build things.
            </p>
            <p className="text-terminal-amber">
              The core question: How can I build software that is transparent and trustworthy,
              while leaving monetization as an option?
            </p>
          </div>
        </section>

        {/* PRINCIPLES */}
        {principles.map((principle) => (
          <section key={principle.id} className="mb-10">
            <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">
              {principle.title.toUpperCase()}
            </h2>
            <div className="ml-10 space-y-3">
              <p className="text-lg leading-relaxed">{principle.summary}</p>
              <div className="space-y-2 text-base">
                {principle.details.map((detail, i) => (
                  <p key={i} className="flex gap-3">
                    <span className="text-terminal-cyan shrink-0 font-courier">&bull;</span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* SEE ALSO */}
        <section className="mb-10">
          <h2 className="font-courier font-bold text-terminal-green text-xl mb-3">SEE ALSO</h2>
          <div className="ml-10 flex flex-wrap gap-x-8 gap-y-2 font-courier">
            <Link
              href="/"
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              niftymonkey(1)
            </Link>
            <a
              href="https://github.com/niftymonkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
            >
              github(3)
            </a>
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
