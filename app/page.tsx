'use client';

import { useState, useEffect, useRef } from 'react';
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
        <HeroSection onAnimationComplete={() => setShowProjects(true)} />

        {/* Projects Section */}
        {showProjects && (
          <section ref={projectsRef}>
            <h2 className="text-2xl text-terminal-amber mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-terminal-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-terminal-gray text-sm">
              niftymonkey.dev
            </p>
            <a
              href="https://github.com/niftymonkey"
              className="text-terminal-cyan hover:text-terminal-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
