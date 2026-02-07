'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { principles } from '@/config/principles.config';

function fakePid(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = ((hash << 4) - hash + id.charCodeAt(i)) | 0;
  return (Math.abs(hash) % 99000) + 1000;
}

function priorityLabel(index: number): { char: string; color: string } {
  if (index === 0) return { char: 'H', color: 'text-htop-green' };
  if (index < 3) return { char: 'M', color: 'text-htop-cyan' };
  return { char: 'L', color: 'text-htop-yellow' };
}

export function ProcessListPhilosophy() {
  const [tickedIn, setTickedIn] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTickedIn(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-htop-bg text-htop-text font-mono">
      <main className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="mb-8">
          <div className="flex items-baseline gap-4 mb-4">
            <h1 className="text-htop-cyan text-xl font-bold">philosophy</h1>
            <span className="text-htop-muted text-sm">pid {fakePid('philosophy')} | {principles.length} principles loaded</span>
          </div>
          <div className="text-base space-y-3 mb-6">
            <p className="text-htop-text">
              I build software because I enjoy it and because it solves problems I personally have.
              Over time, some of those tools have become useful to other people too, which means
              I need to be more intentional about how I build things.
            </p>
            <p className="text-htop-yellow">
              How can I build software that is transparent and trustworthy, while leaving monetization
              as an option?
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-htop-cyan hover:text-htop-green transition-colors">
              [home]
            </Link>
            <a
              href="https://github.com/niftymonkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-htop-cyan hover:text-htop-green transition-colors"
            >
              [github]
            </a>
          </div>
        </div>

        <div className="border border-htop-muted/30 rounded overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_50px] gap-4 px-4 py-2.5 bg-htop-surface text-sm font-bold border-b border-htop-muted/30">
            <span className="text-htop-muted">PID</span>
            <span className="text-htop-green">PRINCIPLE</span>
            <span className="text-htop-muted text-center">PRI</span>
          </div>

          {principles.map((principle, index) => {
            const pid = fakePid(principle.id);
            const pri = priorityLabel(index);
            const isExpanded = expanded === principle.id;

            return (
              <div key={principle.id}>
                <button
                  onClick={() => setExpanded(isExpanded ? null : principle.id)}
                  className="w-full grid grid-cols-[60px_1fr_50px] gap-4 px-4 py-3 text-sm hover:bg-htop-surface/80 transition-colors border-b border-htop-muted/10 text-left"
                  style={{
                    opacity: tickedIn ? 1 : 0,
                    transition: 'opacity 0.6s ease-out',
                  }}
                >
                  <span className="text-htop-muted">{pid}</span>
                  <div className="min-w-0">
                    <span className="text-htop-green font-bold">{principle.title}</span>
                    <span className="text-htop-muted ml-3 text-xs hidden sm:inline">{principle.summary}</span>
                  </div>
                  <span className={`${pri.color} text-center font-bold`}>{pri.char}</span>
                </button>
                {isExpanded && (
                  <div className="px-4 py-3 bg-htop-surface/40 border-b border-htop-muted/10">
                    <p className="text-sm text-htop-text mb-3 sm:hidden">{principle.summary}</p>
                    <ul className="space-y-1.5 text-sm ml-[76px]">
                      {principle.details.map((detail, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-htop-cyan shrink-0">-</span>
                          <span className="text-htop-text">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
