/**
 * Given a three, return the elements around it in anticlockwise order.
 * Elements around it are the nodes at the left and right of the three in each layer.
 */

/**
 * Visual examples:
 *
 *                 1
 *
 * Answer: [1]
 * -----------------------------------
 *
 *                 1
 *              /  |  \
 *             2   3   4
 *
 * Answer: [2, 1, 4]
 * -----------------------------------
 *
 *                 3
 *            /    |    \
 *          4      6     9
 *        /   \   /    /   \
 *       2     7 1    4    12
 *     /   \        /   \
 *    13   10      11   14
 *                /  \
 *               5    8
 *
 *
 *
 * Answer: [5, 13, 2, 4, 3, 9, 12, 14, 8]
 * */

/**
 * @param {ListNode} head
 * @return {Array}
 */
const elementsAroundThree = (head) => {
  // Declare array for the eventual output
  const elementsAround = [head.val]

  // Declare array to handle nodes to be explored in each layer
  let nodesToExplore = head.children

  // Run until there is no more nodes to be explored
  while (nodesToExplore.length) {
    // Declare empty aray to add nodes of current layer
    const nextNodes = []

    // Loop through nodes to be explored
    for (let i = 0; i < nodesToExplore.length; i++) {
      // For each node
      const node = nodesToExplore[i]

      // Push its childen to be explored in the next run
      nextNodes.push(...node.children)

      // If node is the extreme right node
      if (i === 0) {
        // Add it to the start of output array
        elementsAround.unshift(node.val)
      }
      // If node is the extreme left node
      else if (i === nodesToExplore.length - 1) {
        // Add it to the end of output array
        elementsAround.push(node.val)
      }
    }

    // Set the next nodes to explore as the concatenation
    // of all children from all nodes in current layer
    nodesToExplore = nextNodes
  }

  return elementsAround
}

module.exports = elementsAroundThree
