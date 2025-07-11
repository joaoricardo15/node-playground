const { TreeNode } = require('./utils')

/**
 * You are given the root node of a binary search tree (BST) and a value to insert into the tree.
 * Return the root node of the BST after the insertion.
 * It is guaranteed that the new value does not exist in the original BST.
 *
 * Notice that there may exist multiple valid ways for the insertion,
 * as long as the tree remains a BST after insertion. You can return any of them.
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
  // Edge case of empty tree
  if (!root) {
    return new TreeNode(val)
  }

  // Complexity O(Log N)
  const insert = (node) => {
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val)
        return
      }

      return insert(node.left)
    } else {
      if (!node.right) {
        node.right = new TreeNode(val)
        return
      }

      return insert(node.right)
    }
  }

  insert(root)

  return root
}

module.exports = insertIntoBST
