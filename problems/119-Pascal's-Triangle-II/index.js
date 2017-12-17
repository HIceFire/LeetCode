/**
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * Given an index k, return the kth row of the Pascal's triangle.
 * For example, given k = 3,
 * Return [1,3,3,1].
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// my solution => Time Limit Exceeded!!! 递归性能竟然这么差劲？？？
var getRow = function(rowIndex) {
  const recursion = (i, j) => {
    if (j === 0 || i === j) {
      return 1
    }
    return recursion(i - 1, j - 1) + recursion(i - 1, j)
  }

  let res = []
  for (let i = 0; i < rowIndex + 1; i ++) {
    res[i] = recursion(rowIndex, i)
  }

  return res
}

// better solution
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  } else if (rowIndex === 1) {
    return [1, 1]
  }

  let res = [1, 1]
  while (--rowIndex) {
    for (let i = res.length - 1; i > 0; i--) {
      res[i] = res[i] + res[i - 1]
    }
    res.push(1)
  }

  return res
}
