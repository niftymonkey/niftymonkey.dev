/**
 * An entry's own account of how it is structured, for the contents rail.
 *
 * Authored, not derived. The author wrote the argument and is the only one who
 * knows where it turns, so the notebook never renames his sections or invents
 * headings he did not write. An entry that wants no rail exports none.
 */
export interface EntrySection {
  /** The id of the element this points at, without the `#`. */
  id: string;
  /** The rail's words for it, which need not be the heading's. */
  label: string;
  /**
   * Nests this section under a group heading of this name. A contiguous run
   * sharing a group is drawn beneath one heading; the name is the entry's own.
   */
  group?: string;
}
