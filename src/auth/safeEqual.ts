import { timingSafeEqual } from 'node:crypto';

/**
 * Compare two secrets without leaking their contents through timing.
 * Sensitive area: agents must not change this file (see the pilot's guardrail).
 */
export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a, 'utf8');
  const right = Buffer.from(b, 'utf8');
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}
