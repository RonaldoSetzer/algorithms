# Valid Palindrome

## Description

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.

**Example 1:**
- _Input_: `s = "A man, a plan, a canal: Panama"`
- _Output_: `true`
- **Explanation:** "amanaplanacanalpanama" is a palindrome.

**Example 2:**
- _Input_: `s = "race a car"`
- _Output_: `false`
- **Explanation:** "raceacar" is not a palindrome.

**Example 3:**
- _Input_: `s = " "`
- _Output_: `true`
- **Explanation:** s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

**Constraints:**

- `1 <= s.length <= 2 * 105`
- `s` consists only of printable ASCII characters.
