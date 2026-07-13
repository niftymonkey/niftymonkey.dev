export const THEME_STORAGE_KEY = 'nb-theme';

/**
 * Resolves the theme before first paint: stored choice, else system light,
 * else dark. Runs as a blocking inline script so the page never flashes the
 * wrong ground. When nothing is stored it leaves `data-theme` unset, which
 * lets the `prefers-color-scheme` rules in colors.css stay authoritative.
 */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
