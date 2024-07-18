package two_sum

import (
	"reflect"
	"testing"
)

func TestTwoSum_Example1(t *testing.T) {
	nums := []int{2, 7, 11, 15}
	target := 9
	want := []int{0, 1}
	got := twoSum(nums, target)
	if !reflect.DeepEqual(got, want) {
		t.Errorf("twoSum() = %v, want %v", got, want)
	}
}

func TestTwoSum_Example2(t *testing.T) {
	nums := []int{3, 2, 4}
	target := 6
	want := []int{1, 2}
	got := twoSum(nums, target)
	if !reflect.DeepEqual(got, want) {
		t.Errorf("twoSum() = %v, want %v", got, want)
	}
}

func TestTwoSum_Example3(t *testing.T) {
	nums := []int{3, 3}
	target := 6
	want := []int{0, 1}
	got := twoSum(nums, target)
	if !reflect.DeepEqual(got, want) {
		t.Errorf("twoSum() = %v, want %v", got, want)
	}
}

func TestTwoSum_CustomExample(t *testing.T) {
	nums := []int{1, 2, 3, 7}
	target := 9
	want := []int{1, 3}
	got := twoSum(nums, target)
	if !reflect.DeepEqual(got, want) {
		t.Errorf("twoSum() = %v, want %v", got, want)
	}
}

func TestTwoSum_EdgeCase(t *testing.T) {
	nums := []int{-1, -2, -3, -4, -5}
	target := -8
	want := []int{2, 4}
	got := twoSum(nums, target)
	if !reflect.DeepEqual(got, want) {
		t.Errorf("twoSum() = %v, want %v", got, want)
	}
}
