const { TreeNode } = require("./utils")
/**
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
 * If such a node does not exist, return null.
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
    let currentNode = root
    while(currentNode) {
        if (val > currentNode.val) {
            currentNode = currentNode.right
        } else if (val < currentNode.val) {
            currentNode = currentNode.left
        } else {
            return currentNode
        }
    }

    return null
}

module.exports = searchBST