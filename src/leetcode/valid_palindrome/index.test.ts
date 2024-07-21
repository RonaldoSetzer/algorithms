import { isPalindrome } from '.';

describe('Valid Palindrome', () => {
  test('Example 1', () => {
    const s = "A man, a plan, a canal: Panama";
    const expected = true;
    const result = isPalindrome(s);
    expect(result).toBe(expected);
  });

  test('Example 2', () => {
    const s = "race a car";
    const expected = false;
    const result = isPalindrome(s);
    expect(result).toBe(expected);
  });

  test('Example 3', () => {
    const s = " ";
    const expected = true;
    const result = isPalindrome(s);
    expect(result).toBe(expected);
  });
});
