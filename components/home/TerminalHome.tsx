'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/config/projects.config';
import { ProjectCard } from '@/components/ProjectCard';
import { HeroSection } from '@/components/HeroSection';

const STORAGE_KEY = 'niftymonkey-visit-count';
const MAX_ANIMATED_VISITS = 3;

function StaticHero() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/logo-small.png"
          alt="NiftyMonkey Logo"
          width={80}
          height={80}
          className="flex-shrink-0"
          priority
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-terminal-green break-words">niftymonkey.dev</h1>
      </div>
      <div className="space-y-2 text-lg">
        <p className="text-terminal-cyan">&gt; whoami</p>
        <p className="ml-4">
          Software Engineer. Data/Viz Nerd. Coffee Addict. AI, Observability, and Automation make me giddy.
        </p>
        <p className="mt-6 text-terminal-cyan">&gt; ls -la ./projects/</p>
        <p className="ml-4 text-terminal-gray">Reading directory...</p>
      </div>
    </section>
  );
}

export function TerminalHome() {
  const [showProjects, setShowProjects] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [animating, setAnimating] = useState<boolean | null>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    try {
      const count = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      const nextCount = count + 1;
      localStorage.setItem(STORAGE_KEY, String(nextCount));
      if (nextCount <= MAX_ANIMATED_VISITS) {
        setAnimating(true);
      } else {
        setAnimating(false);
        setShowProjects(true);
        setShowReplay(true);
      }
    } catch {
      setAnimating(false);
      setShowProjects(true);
      setShowReplay(true);
    }
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setShowProjects(true);
    setShowReplay(true);
  }, []);

  useEffect(() => {
    if (showProjects && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showProjects]);

  const replayAnimation = useCallback(() => {
    setShowProjects(false);
    setShowReplay(false);
    setAnimating(null);
    setTimeout(() => setAnimating(true), 0);
  }, []);

  if (animating === null) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="container mx-auto px-4 pt-8 pb-24">
        <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden">
          <div className="bg-terminal-gray/20 px-4 py-2 flex items-center gap-2 border-b border-terminal-gray">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-terminal-gray text-xs ml-2">~/dev</span>
            {showReplay && (
              <button
                onClick={replayAnimation}
                className="ml-auto text-terminal-gray hover:text-terminal-cyan text-xs transition-colors"
                title="Replay intro animation"
              >
                &#9654; replay
              </button>
            )}
          </div>

          <div className="p-4">
            {animating ? (
              <HeroSection onAnimationComplete={handleAnimationComplete} />
            ) : (
              <StaticHero />
            )}

            {showProjects && (
              <section ref={projectsRef} className="mt-4 ml-4">
                <div className="text-terminal-gray text-sm mb-2">
                  total {projects.length}
                </div>
                {[...projects].sort((a, b) => a.name.localeCompare(b.name)).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </section>
            )}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-terminal-gray text-sm">niftymonkey.dev</p>
            <div className="flex gap-6">
              <Link
                href="/philosophy"
                className="text-terminal-cyan hover:text-terminal-green transition-colors"
              >
                Philosophy
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
