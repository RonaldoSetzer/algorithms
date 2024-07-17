import { isAnagram } from ".";

describe('Valid Anagram', () => {
  test('Example 1', () => {
    const s = "anagram";
    const t = "nagaram";
    expect(isAnagram(s, t)).toBe(true);
  });

  test('Example 2', () => {
    const s = "rat";
    const t = "car";
    expect(isAnagram(s, t)).toBe(false);
  });

  test('Different lengths', () => {
    const s = "hello";
    const t = "helloo";
    expect(isAnagram(s, t)).toBe(false);
  });

  test('Empty strings', () => {
    const s = "";
    const t = "";
    expect(isAnagram(s, t)).toBe(true);
  });

  test('Single character same', () => {
    const s = "a";
    const t = "a";
    expect(isAnagram(s, t)).toBe(true);
  });

  test('Single character different', () => {
    const s = "a";
    const t = "b";
    expect(isAnagram(s, t)).toBe(false);
  });
});
