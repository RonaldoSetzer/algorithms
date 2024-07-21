package valid_palindrome

import (
	"testing"
)

func TestIsPalindrome(t *testing.T) {
	t.Run("Example 1", func(t *testing.T) {
		s := "A man, a plan, a canal: Panama"
		expected := true
		result := isPalindrome(s)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})

	t.Run("Example 2", func(t *testing.T) {
		s := "race a car"
		expected := false
		result := isPalindrome(s)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})

	t.Run("Example 3", func(t *testing.T) {
		s := " "
		expected := true
		result := isPalindrome(s)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})
}
