import { containsDuplicate } from '.';

describe('Contains Duplicate', () => {
  test('Example 1', () => {
    const nums = [1, 2, 3, 1];
    const expected = true;
    const result = containsDuplicate(nums);
    expect(result).toBe(expected);
  });

  test('Example 2', () => {
    const nums = [1, 2, 3, 4];
    const expected = false;
    const result = containsDuplicate(nums);
    expect(result).toBe(expected);
  });

  test('Example 3', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const expected = true;
    const result = containsDuplicate(nums);
    expect(result).toBe(expected);
  });
});
