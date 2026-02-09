'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SECTIONS: Record<string, string> = {
  '1': '/',
  '3': 'https://github.com/niftymonkey',
  '7': '/philosophy',
};

export function ManPageNav() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const route = SECTIONS[e.key];
      if (!route) return;
      if (route.startsWith('http')) {
        window.open(route, '_blank', 'noopener,noreferrer');
      } else {
        router.push(route);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return null;
}
