import { slugify } from '../src';

describe('slugify', () => {
  it('lowercases and joins words with dashes', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('strips accents', () => {
    expect(slugify('Crème brûlée')).toBe('creme-brulee');
  });

  it('trims leading and trailing separators', () => {
    expect(slugify('  --Hi--  ')).toBe('hi');
  });
});
