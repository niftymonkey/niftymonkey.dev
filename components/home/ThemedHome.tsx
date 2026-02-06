'use client';

import { useTheme } from '@/components/theme/ThemeProvider';
import { TerminalHome } from './TerminalHome';
import { ProcessListHome } from './ProcessListHome';
import { ManPageHome } from './ManPageHome';

export function ThemedHome() {
  const { theme, isReady } = useTheme();

  if (!isReady) return null;

  switch (theme) {
    case 'terminal':
      return <TerminalHome />;
    case 'process-list':
      return <ProcessListHome />;
    case 'man-page':
      return <ManPageHome />;
  }
}
