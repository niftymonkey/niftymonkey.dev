'use client';

import { useEffect, useRef } from 'react';

const TARGET = 'theme';
const TIMEOUT_MS = 2000;

export function useThemeKeySequence(onUnlock: () => void) {
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (timerRef.current) clearTimeout(timerRef.current);

      if (e.key.toLowerCase() === TARGET[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === TARGET.length) {
          indexRef.current = 0;
          onUnlock();
          return;
        }
        timerRef.current = setTimeout(() => {
          indexRef.current = 0;
        }, TIMEOUT_MS);
      } else {
        indexRef.current = 0;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onUnlock]);
}
