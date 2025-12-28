'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from "@/config/projects.config";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showProjects && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showProjects]);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="container mx-auto px-4 pt-8 pb-16">
        {/* Terminal Window */}
        <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-terminal-gray/20 px-4 py-2 flex items-center gap-2 border-b border-terminal-gray">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-terminal-gray text-xs ml-2">~/dev</span>
          </div>

          {/* Terminal content */}
          <div className="p-4">
            <HeroSection onAnimationComplete={() => setShowProjects(true)} />

            {/* Projects Output */}
            {showProjects && (
              <section ref={projectsRef} className="mt-4 ml-4">
                <div className="text-terminal-gray text-sm mb-2">
                  total {projects.length}
                </div>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </section>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-terminal-gray text-sm">
              niftymonkey.dev
            </p>
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
