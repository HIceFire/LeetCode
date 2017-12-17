/**
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * Given numRows, generate the first numRows of Pascal's triangle.
 * For example, given numRows = 5,
 */

/**
 * 杨辉三角（帕斯卡三角） arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res[i] = [1]
    } else if (i === 1) {
      res[i] = [1, 1]
    } else {
      res[i] = []
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          res[i][j] = 1
        } else {
          res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
        }
      }
    }
  }

  return res
}
