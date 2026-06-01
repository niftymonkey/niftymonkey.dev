'use client';

import { createContext, useContext, useState, useCallback, useSyncExternalStore, type ReactNode } from 'react';
import { useThemeKeySequence } from './useThemeKeySequence';

export type Theme = 'terminal' | 'process-list' | 'man-page';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  switcherUnlocked: boolean;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = 'niftymonkey-theme';
const UNLOCKED_KEY = 'niftymonkey-switcher-unlocked';
const THEMES: Theme[] = ['terminal', 'process-list', 'man-page'];

function readStoredTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved && THEMES.includes(saved)) return saved;
  } catch {
    // localStorage unavailable
  }
  return 'terminal';
}

function readStoredUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCKED_KEY) === 'true';
  } catch {
    return false;
  }
}

const subscribeNoop = () => () => {};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const isReady = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);
  const [switcherUnlocked, setSwitcherUnlocked] = useState(readStoredUnlocked);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleUnlock = useCallback(() => {
    setSwitcherUnlocked(true);
    try {
      localStorage.setItem(UNLOCKED_KEY, 'true');
    } catch {
      // localStorage unavailable
    }
  }, []);

  useThemeKeySequence(handleUnlock);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switcherUnlocked, isReady }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
