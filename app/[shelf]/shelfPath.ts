/**
 * The shelf's URL segment is configuration, not code. This repository is
 * public, so writing the path into a folder name would publish the one thing
 * the shelf depends on staying quiet. It lives in the environment instead, and
 * can be changed without touching a line of this.
 */
export function isShelfSegment(segment: string) {
  const configured = process.env.SHELF_PATH;
  return typeof configured === 'string' && configured.length > 0 && segment === configured;
}
