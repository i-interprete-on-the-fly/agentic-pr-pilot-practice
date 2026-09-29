import { titleCase } from '../src';

describe('titleCase', () => {
  it('capitalizes each word', () => {
    expect(titleCase('hello brave new world')).toBe('Hello Brave New World');
  });

  it('lowercases the rest of each word', () => {
    expect(titleCase('hELLO wORLD')).toBe('Hello World');
  });

  it('keeps small connector words lowercase', () => {
    expect(titleCase('the lord of the rings')).toBe('The Lord of the Rings');
    expect(titleCase('war and peace')).toBe('War and Peace');
  });

  it('capitalizes a small word when it is the first word', () => {
    expect(titleCase('a tale of two cities')).toBe('A Tale of Two Cities');
    expect(titleCase('of mice and men')).toBe('Of Mice and Men');
  });

  it('collapses extra whitespace and trims the ends', () => {
    expect(titleCase('  hello   \t big \n world  ')).toBe('Hello Big World');
  });

  it('returns an empty string for empty input', () => {
    expect(titleCase('')).toBe('');
  });

  it('returns an empty string for whitespace-only input', () => {
    expect(titleCase('   \t\n ')).toBe('');
  });
});
