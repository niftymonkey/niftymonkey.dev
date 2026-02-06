import Link from 'next/link';
import { principles, type Principle } from '@/config/principles.config';

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <div className="border border-terminal-gray/50 rounded p-4">
      <h3 className="text-terminal-green font-bold mb-2">{principle.title}</h3>
      <p className="text-foreground/80 text-sm">{principle.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-terminal-gray border-t border-terminal-gray/30 pt-4">
        {principle.details.map((detail, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-terminal-cyan shrink-0">-</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TerminalPhilosophy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="container mx-auto px-4 pt-8 pb-16">
        <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden">
          <div className="bg-terminal-gray/20 px-4 py-2 flex items-center gap-2 border-b border-terminal-gray">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-terminal-gray text-xs ml-2">~/philosophy</span>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-8">
              <div className="text-terminal-cyan mb-2">&gt; cat README.md</div>
              <h1 className="text-2xl md:text-3xl font-bold text-terminal-green mb-4">
                How I Build Software
              </h1>
              <div className="text-base md:text-lg space-y-4">
                <p className="text-foreground/90">
                  I build software because I enjoy it and because it solves problems I personally have.
                  Over time, some of those tools have become useful to other people too, which means
                  I need to be more intentional about how I build things.
                </p>
                <p className="text-foreground/90">
                  The core question:
                </p>
                <p className="text-terminal-amber">
                  How can I build software that is transparent and trustworthy, while leaving monetization
                  as an option?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((principle) => (
                <PrincipleCard key={principle.id} principle={principle} />
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-terminal-gray text-sm">niftymonkey.dev</p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-terminal-cyan hover:text-terminal-green transition-colors"
              >
                Home
              </Link>
              <a
                href="https://github.com/niftymonkey"
                className="text-terminal-cyan hover:text-terminal-green transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
