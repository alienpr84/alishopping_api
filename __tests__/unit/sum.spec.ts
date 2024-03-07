import { sum } from '../../src/utils';

describe('Sum method', () => {
  const numberArr: number[] = [1, 2, 3, 4, 5];
  it(`should return 15 when ${JSON.stringify(numberArr)} is passed`, () => {
    expect(sum(numberArr)).toBe(15);
  });

  it(`should return 0 when an empty array is passed`, () => {
    expect(sum([])).toBe(0);
  });
});