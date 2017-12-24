/**
 * https://leetcode.com/problems/majority-element/description/
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */

// bad solution
var majorityElement1 = function(nums) {
  const len = nums.length / 2
  const helpObj = {}
  for (let i = 0; i < nums.length; i++) {
    if (helpObj[nums[i]]) {
      helpObj[nums[i]] ++
    } else {
      helpObj[nums[i]] = 1
    }

    if (helpObj[nums[i]] > len) {
      return nums[i]
    }
  }
}

// normal solution
// 将数组排序，诺存在个数大于 n/2 的元素，数组中间的元素必然是
var majorityElement3 = function(nums) {
  const len = nums.length
  if (len === 1) {
    return nums[0]
  }
  return nums.sort()[Math.trunc(nums.length / 2)]
}

// better solution
// Majority Vote Alogrithm 最大投票数算法
var majorityElement2 = function(nums) {
  let target = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i]
      count ++
    } else if (target === nums[i]) {
      count ++
    } else {
      count --
    }
  }

  return target
}
