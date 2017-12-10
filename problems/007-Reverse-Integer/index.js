/**
 * https://leetcode.com/problems/reverse-integer/
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *   Input: 123
 *   Output:  321
 *
 * Example 2:
 *   Input: -123
 *   Output: -321
 *
 * Example 3:
 *   Input: 120
 *   Output: 21
 *
 * Note:
 *   Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res = ''
  var u = x > 0 ? 1 : -1
  var x = Math.abs(x)
  const maxInt = Math.pow(2, 31) - 1

  if (x < 10) {
    return x
  }

  while (x >= 1) {
    res += x % 10
    x = Math.floor(x / 10)
  }

  res = parseInt(res)
  return res > maxInt ? 0 : res * u
}
