/**
 * Given the root of a binary tree, return the sum of all left leaves.
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

 /**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
    const queue = [root]
    const visited = new Set()
    let sum = 0

    while (queue.length) {
        const node = queue.shift()
        visited.add(node.val)

        if (node.left) {
            queue.push(node.left)
            if (!node.left.left && !node.left.right) {
                sum += node.left.val
            }
        }
        if (node.right) {
            queue.push(node.right)
        }
    }

    return sum
}

module.exports = {
    sumOfLeftLeaves,
    TreeNode
}