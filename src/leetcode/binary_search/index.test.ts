import { binarySearch } from './index'; 

describe('Binary Search', () => {
  test('Example 1', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const result = binarySearch(nums, target);
    expect(result).toBe(4);
  });

  test('Example 2', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const result = binarySearch(nums, target);
    expect(result).toBe(-1);
  });

  test('Target is first element', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = -1;
    const result = binarySearch(nums, target);
    expect(result).toBe(0);
  });

  test('Target is last element', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 12;
    const result = binarySearch(nums, target);
    expect(result).toBe(5);
  });

  test('Target not in array', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 15;
    const result = binarySearch(nums, target);
    expect(result).toBe(-1);
  });
});
