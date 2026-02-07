'use client';

import { useState } from 'react';
import { useTheme, type Theme } from './ThemeProvider';

const themes: { id: Theme; label: string }[] = [
  { id: 'terminal', label: 'terminal' },
  { id: 'process-list', label: 'process-list' },
  { id: 'man-page', label: 'man-page' },
];

export function ThemeSwitcher() {
  const { theme, setTheme, switcherUnlocked } = useTheme();
  const [expanded, setExpanded] = useState(false);

  if (!switcherUnlocked) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono">
      {expanded ? (
        <div className="border border-terminal-gray bg-terminal-dark rounded-lg overflow-hidden shadow-lg min-w-[200px]">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-terminal-gray/20 border-b border-terminal-gray">
            <span className="text-terminal-green text-xs font-bold">$ theme</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-terminal-gray hover:text-terminal-cyan text-xs transition-colors"
            >
              [x]
            </button>
          </div>
          {/* Theme list */}
          <div className="p-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setExpanded(false);
                }}
                className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors ${
                  theme === t.id
                    ? 'text-terminal-green bg-terminal-gray/20'
                    : 'text-terminal-gray hover:text-terminal-cyan hover:bg-terminal-gray/10'
                }`}
              >
                {theme === t.id && <span className="mr-2">*</span>}
                {t.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="px-3 py-1.5 text-xs border border-terminal-gray bg-terminal-dark rounded text-terminal-green hover:text-terminal-cyan hover:border-terminal-cyan transition-colors shadow-lg"
        >
          $ theme
        </button>
      )}
    </div>
  );
}
