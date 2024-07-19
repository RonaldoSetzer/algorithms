package max_subarray

import (
	"testing"
)

func TestMaxSubArrayExample1(t *testing.T) {
	nums := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	expected := 6
	result := maxSubArray(nums)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxSubArrayExample2(t *testing.T) {
	nums := []int{1}
	expected := 1
	result := maxSubArray(nums)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}

func TestMaxSubArrayExample3(t *testing.T) {
	nums := []int{5, 4, -1, 7, 8}
	expected := 23
	result := maxSubArray(nums)
	if result != expected {
		t.Errorf("Expected %d, but got %d", expected, result)
	}
}
