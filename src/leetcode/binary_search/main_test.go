package binary_search

import "testing"

func TestBinarySearch(t *testing.T) {
    nums1 := []int{-1, 0, 3, 5, 9, 12}
    target1 := 9
    expected1 := 4
    if result := BinarySearch(nums1, target1); result != expected1 {
        t.Errorf("BinarySearch(%v, %d) = %d; want %d", nums1, target1, result, expected1)
    }

    nums2 := []int{-1, 0, 3, 5, 9, 12}
    target2 := 2
    expected2 := -1
    if result := BinarySearch(nums2, target2); result != expected2 {
        t.Errorf("BinarySearch(%v, %d) = %d; want %d", nums2, target2, result, expected2)
    }

    nums3 := []int{-1, 0, 3, 5, 9, 12}
    target3 := -1
    expected3 := 0
    if result := BinarySearch(nums3, target3); result != expected3 {
        t.Errorf("BinarySearch(%v, %d) = %d; want %d", nums3, target3, result, expected3)
    }

    nums4 := []int{-1, 0, 3, 5, 9, 12}
    target4 := 12
    expected4 := 5
    if result := BinarySearch(nums4, target4); result != expected4 {
        t.Errorf("BinarySearch(%v, %d) = %d; want %d", nums4, target4, result, expected4)
    }

    nums5 := []int{-1, 0, 3, 5, 9, 12}
    target5 := 15
    expected5 := -1
    if result := BinarySearch(nums5, target5); result != expected5 {
        t.Errorf("BinarySearch(%v, %d) = %d; want %d", nums5, target5, result, expected5)
    }
}
