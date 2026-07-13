'use client';

import { THEME_STORAGE_KEY } from './ThemeScript';

function resolveCurrent(): 'light' | 'dark' {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="3.1" />
      <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2L3.1 3.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M13.4 9.6A5.8 5.8 0 0 1 6.4 2.6a5.8 5.8 0 1 0 7 7Z" />
    </svg>
  );
}

/**
 * Flips the ground and persists the choice under `nb-theme`, shared by every
 * surface. The icon shows where the toggle will take you: a sun on the dark
 * ground, a moon on the light one. Which icon shows is decided in CSS from the
 * resolved theme rather than from React state, so it is right on the server,
 * right before hydration, and right when the visitor has expressed no
 * preference at all.
 */
export function ThemeToggle() {
  function toggle() {
    const next = resolveCurrent() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // A visitor who blocks storage still gets the toggle, just not the memory of it.
    }
  }

  return (
    <button type="button" className="nb-btn nb-btn--icon nb-theme-toggle" onClick={toggle}>
      <span className="nb-theme-toggle__label nb-theme-toggle__label--dark">
        <SunIcon />
      </span>
      <span className="nb-theme-toggle__label nb-theme-toggle__label--light">
        <MoonIcon />
      </span>
      <span className="sr-only">Switch colour theme</span>
    </button>
  );
}
