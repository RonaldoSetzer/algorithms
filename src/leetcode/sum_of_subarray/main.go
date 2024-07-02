package leetcode

func SumOfSubarray(arr []int) int {
    sum := 0
    for _, num := range arr {
        sum += num
    }
    return sum
}
