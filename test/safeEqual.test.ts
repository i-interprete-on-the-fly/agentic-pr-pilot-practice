import { safeEqual } from '../src';

describe('safeEqual', () => {
  it('matches equal strings', () => {
    expect(safeEqual('s3cret', 's3cret')).toBe(true);
  });

  it('rejects different strings and lengths', () => {
    expect(safeEqual('s3cret', 's3creT')).toBe(false);
    expect(safeEqual('s3cret', 's3cret!')).toBe(false);
  });
});
