import { twoSum } from ".";

test('returns indices of the two numbers such that they add up to the target (Example 1)', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('returns indices of the two numbers such that they add up to the target (Example 2)', () => {
  const nums = [3, 2, 4];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([1, 2]);
});

test('returns indices of the two numbers such that they add up to the target (Example 3)', () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('returns indices of the two numbers such that they add up to the target (Custom Example)', () => {
  const nums = [1, 2, 3, 7];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([1, 3]);
});

test('returns indices of the two numbers such that they add up to the target (Edge Case)', () => {
  const nums = [-1, -2, -3, -4, -5];
  const target = -8;
  expect(twoSum(nums, target)).toEqual([2, 4]);
});
