import { verArr } from '@utils/util';

describe('Testing the utils', () => {
  test('Test verArr', () => {
    let result = verArr([1, 2, 3]);
    expect(result).toBe(true);

    result = verArr(['1']);
    expect(result).toBe(true);

    result = verArr([]);
    expect(result).toBe(false);

    result = verArr(123);
    expect(result).toBe(false);
  });
});
