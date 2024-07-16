# Binary Search

## Description
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

> [!example]
> **Example 1:**
>_Input_: `nums = [-1,0,3,5,9,12], target = 9`
>_Output_: `4`
>**Explanation:** 9 exists in nums and its index is 4
>
>**Example 2:**
>_Input_: `nums = [-1,0,3,5,9,12], target = 2`
>_Output_: `-1`
>**Explanation:** 2 does not exist in nums so return -1

**Constraints:**
- `1 <= nums.length <= 104`
- `-104 < nums[i], target < 104`
- All the integers in `nums` are **unique**.
- `nums` is sorted in ascending order.