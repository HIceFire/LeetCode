/**
 * https://leetcode.com/problems/invert-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null
  }

  let _left = arguments.callee(root.right)
  let _right = arguments.callee(root.left)

  root.left = _left
  root.right = _right
  return root
}
