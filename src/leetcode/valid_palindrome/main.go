package valid_palindrome

import (
	"strings"
  "unicode"
)

func isAlphanumeric(c byte) bool {
	return unicode.IsLetter(rune(c)) || unicode.IsDigit(rune(c))
}

func isPalindrome(s string) bool {
	if len(s) == 0 {
		return true
	}
  str := strings.ToLower(s)
	left, right := 0, len(s)-1

	for left < right {
		if !isAlphanumeric(str[left]) {
			left++
			continue
		}
		if !isAlphanumeric(str[right]) {
			right--
			continue
		}
		if str[left] != str[right] {
			return false
		}
		left++
		right--
	}
	return true
}
