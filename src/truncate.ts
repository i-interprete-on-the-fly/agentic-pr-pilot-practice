/**
 * Shorten text to at most `maxLength` characters, appending `suffix` when cut.
 */
export function truncate(input: string, maxLength: number, suffix = '…'): string {
  if (maxLength < 0) {
    throw new RangeError('maxLength must be >= 0');
  }
  if (input.length <= maxLength) {
    return input;
  }
  if (maxLength <= suffix.length) {
    return suffix.slice(0, maxLength);
  }
  return input.slice(0, maxLength - suffix.length) + suffix;
}
