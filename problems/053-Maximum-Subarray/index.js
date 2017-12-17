/**
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 * Kadane's Algorithm - 卡登算法 - 解决最大子序列之和
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let temSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    temSum = Math.max(nums[i], nums[i] + temSum)
    maxSum = Math.max(maxSum, temSum)
  }
  return maxSum
}
