const { TreeNode } = require('./utils')
/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *   - The left subtree of a node contains only nodes with keys less than the node's key.
 *   - The right subtree of a node contains only nodes with keys greater than the node's key.
 *   - Both the left and right subtrees must also be binary search trees.
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  const checkBST = (node, min, max) => {
    if (!node) {
      return true
    }

    if (node.left && (node.left.val >= node.val || node.left.val <= min)) {
      return false
    }

    if (node.right && (node.right.val <= node.val || node.right.val >= max)) {
      return false
    }

    const newMin = Math.max(min, node.val)
    const newMax = Math.min(max, node.val)

    return checkBST(node.left, min, newMax) && checkBST(node.right, newMin, max)
  }

  return checkBST(root, -Infinity, Infinity)
}

module.exports = {
  isValidBST,
}
