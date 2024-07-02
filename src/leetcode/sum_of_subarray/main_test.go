package leetcode

import (
    "testing"
    "github.com/stretchr/testify/assert"
)

func TestSumOfSubarray(t *testing.T) {
    result := SumOfSubarray([]int{1, 2, 3, 4, 5})
    assert.Equal(t, 15, result)
}
