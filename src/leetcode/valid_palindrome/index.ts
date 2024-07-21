
function isValidChar(c: string): boolean {
  return /^[a-zA-Z0-9]$/.test(c);
}

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
