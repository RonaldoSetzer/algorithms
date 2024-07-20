package contains_duplicate

import (
	"testing"
)

func TestContainsDuplicate(t *testing.T) {
	t.Run("Example 1", func(t *testing.T) {
		nums := []int{1, 2, 3, 1}
		expected := true
		result := containsDuplicate(nums)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})

	t.Run("Example 2", func(t *testing.T) {
		nums := []int{1, 2, 3, 4}
		expected := false
		result := containsDuplicate(nums)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})

	t.Run("Example 3", func(t *testing.T) {
		nums := []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}
		expected := true
		result := containsDuplicate(nums)
		if result != expected {
			t.Errorf("expected %v, got %v", expected, result)
		}
	})
}
