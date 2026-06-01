'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({ text, speed = 15, className = '', onComplete }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const firedRef = useRef(false);

  const isComplete = currentIndex >= text.length;

  useEffect(() => {
    if (currentIndex >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (!isComplete || firedRef.current) return;
    const timeout = setTimeout(() => {
      firedRef.current = true;
      onComplete?.();
    }, 500);

    return () => clearTimeout(timeout);
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </span>
  );
}
