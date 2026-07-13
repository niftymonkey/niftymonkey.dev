export const GITHUB_URL = 'https://github.com/niftymonkey';

export interface NavItem {
  label: string;
  href: string;
  /** Render as a glyph instead of a word. The label still reaches a screen reader. */
  icon?: 'github';
}

const ALL: Record<string, NavItem> = {
  home: { label: 'home', href: '/' },
  notebook: { label: 'notebook', href: '/notebook' },
  philosophy: { label: 'philosophy', href: '/philosophy' },
  github: { label: 'github', href: GITHUB_URL, icon: 'github' },
};

/**
 * An entry is its own surface: it sits under the notebook rather than being it,
 * so it links to everything, the notebook included.
 */
export type Surface = 'home' | 'notebook' | 'philosophy' | 'entry';

/**
 * The header carries navigation, not a table of contents. Philosophy is not a
 * peer of the notebook: it is somewhere you arrive at from the home page, which
 * links to it in prose. Keeping it out of the bar keeps the bar short enough to
 * survive a phone.
 */
export function navFor(current: Surface) {
  return (['home', 'notebook', 'github'] as const)
    .filter((key) => key !== current)
    .map((key) => ALL[key]);
}
