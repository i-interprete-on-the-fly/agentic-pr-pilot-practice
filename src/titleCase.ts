const SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to']);

/**
 * Capitalize each word, keeping short connector words lowercase
 * unless they are the first word.
 */
export function titleCase(input: string): string {
  return input
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word, index) =>
      index > 0 && SMALL_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(' ');
}
