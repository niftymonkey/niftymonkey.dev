'use client';

import { useTheme } from '@/components/theme/ThemeProvider';
import { TerminalPhilosophy } from './TerminalPhilosophy';
import { ProcessListPhilosophy } from './ProcessListPhilosophy';
import { ManPagePhilosophy } from './ManPagePhilosophy';

export function ThemedPhilosophy() {
  const { theme, isReady } = useTheme();

  if (!isReady) return null;

  switch (theme) {
    case 'terminal':
      return <TerminalPhilosophy />;
    case 'process-list':
      return <ProcessListPhilosophy />;
    case 'man-page':
      return <ManPagePhilosophy />;
  }
}
