import { truncate } from '../src';

describe('truncate', () => {
  it('returns short input unchanged', () => {
    expect(truncate('abc', 5)).toBe('abc');
  });

  it('cuts and appends the suffix', () => {
    expect(truncate('abcdefgh', 5)).toBe('abcd…');
  });

  it('rejects negative lengths', () => {
    expect(() => truncate('abc', -1)).toThrow(RangeError);
  });
});
