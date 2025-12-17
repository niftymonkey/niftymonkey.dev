'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TypingAnimation } from './TypingAnimation';

interface HeroSectionProps {
  onAnimationComplete: () => void;
}

export function HeroSection({ onAnimationComplete }: HeroSectionProps) {
  const [showLsCommand, setShowLsCommand] = useState(false);
  const [showLoadingProjects, setShowLoadingProjects] = useState(false);

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
          <TypingAnimation
            text="Software Engineer. Data/Viz Nerd. Coffee Addict. AI, Observability, and Automation make me giddy."
            onComplete={() => setShowLsCommand(true)}
          />
        </p>

        {showLsCommand && (
          <>
            <p className="mt-6 text-terminal-cyan">&gt; ls -la ./projects/</p>
            <p className="ml-4 text-terminal-gray">
              <TypingAnimation
                text="Reading directory..."
                onComplete={() => {
                  setShowLoadingProjects(true);
                  onAnimationComplete();
                }}
              />
            </p>
          </>
        )}
      </div>
    </section>
  );
}
