/**
 * Returns the correct URL for a public asset, respecting the Vite base path.
 * Use this for all /images/... references so they work on GitHub Pages.
 *
 * Example: assetUrl('/images/hero_tree.jpg')
 *   → in dev:  /images/hero_tree.jpg
 *   → in prod: /Wedding_invitation/images/hero_tree.jpg
 */
export function assetUrl(path: string): string {
  // import.meta.env.BASE_URL is set by vite.config.ts `base` field
  // It always ends with '/', path always starts with '/'
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
