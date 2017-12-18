/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 *   Given nums = [2, 7, 11, 15], target = 9,
 *   Because nums[0] + nums[1] = 2 + 7 = 9,
 *   return [0, 1].
 *
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// my solution
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    let anotherIndex = -1

    inner : for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === another) {
        anotherIndex = j
        break inner
      }
    }

    if (anotherIndex !== -1 && i !== anotherIndex) {
      return [i, anotherIndex]
    }
  }
}

// better solution
var betterTwoSum = function(nums, target) {
  let map = {},
    result = []
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (key in map) {
      return result.push(map[key],i)
    } else {
      map[nums[i]] = i
    }
  }
  return result
}
