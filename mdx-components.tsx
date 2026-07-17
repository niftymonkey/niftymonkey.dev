import type { MDXComponents } from 'mdx/types';

/**
 * Global element mapping for every MDX file. Required by @next/mdx under the
 * App Router.
 *
 * Deliberately empty. An entry's prose renders as plain semantic elements and
 * is styled by the entry surface it sits in, so markdown stays markdown and
 * nothing here has to be consulted to read a `##`. Components an entry needs
 * are imported by name in the entry itself, where they are visible.
 *
 * Shared components precipitate out once enough has been written to see what
 * actually repeats. Do not seed this map speculatively.
 */
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
