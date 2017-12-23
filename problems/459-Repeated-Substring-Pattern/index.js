/**
 *  https://leetcode.com/problems/repeated-substring-pattern/
 *  Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 *  Example1:
 *    Input: "abab"
 *    Output: True
 *    Explanation: It's the substring "ab" twice.
 *
 *  Example 2:
 *    Input: "aba"
 *    Output: False
 *
 *  Example 3:
 *    Input: "abcabcabcabc"
 *    Output: True
 *    Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */

// my solution
function isAlign(str, i) {
  let unit = str.substring(0, i)
  for (let j = 1; j < str.length / i; j++) {
    let currentStr = str.substring(j * i, (j + 1) * i)
    if (currentStr !== unit) {
      return false
    }
  }
  return true
}

var repeatedSubstringPattern = function(s) {
  const len = s.length
  if (len < 2) {
    return false
  }
  const halfLen = Math.floor(len / 2) + 1
  for (let i = 1; i < halfLen; i++) {
    if (len % i !== 0) {
      continue
    }
    if (isAlign(s, i)) {
      return true
    }
  }

  return false
}

/**
 * better solution
 *
 * 假设最小不可拆分字符串为 a，当前字符串str == a * n
 * if (n 大于等于 2) {
 *   a * 2n - a * 2 === a * (2n - 2) 必然大于等于 a
 * }
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, s.length * 2 - 1).includes(s)
}
