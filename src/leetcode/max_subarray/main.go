package max_subarray

func Max(num, i int) int{
  if num > i {
    return num
  }
  return i
}

func maxSubArray(nums []int) int {
  max, sum := nums[0], 0
  for _, num :=range nums {
    sum = Max(num, sum + num)
    max = Max(max, sum)
  }
  return max
}
