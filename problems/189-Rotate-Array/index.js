/**
 * https://leetcode.com/problems/rotate-array/description/
 *
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * solution 1
 * 数组的插入与删除 O(n) * O(n) = O(n^2)
 */
var rotate1 = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
}


/**
 * solution 2
 * 数组元素的访问 O(1) * n = O(n)
 */
var rotate2 = function(nums, k) {
  let tem = nums.concat([])
  let n = nums.length

  for (let i = 0; i < n; i ++) {
    nums[(i + k) % n] = tem[i]
  }
}
