/**
 
    In ordinary chess, the pieces are only of two colors, black and white. In our version of chess, we are including new pieces with unique movements.
    
    One of the most powerful pieces in this version is the red knight.

    The red knight can move to six different positions based on its current position (UpperLeft, UpperRight, Right, LowerRight, LowerLeft, Left).

    |   | UL |   | UR |   |
    -----------------------
    |   |    |   |    |   |
    -----------------------
    | L |    | x |    | R |
    -----------------------
    |   |    |   |    |   |
    -----------------------
    |   | LL |   | LR |   |


    The board is a grid of size n x n. Each cell is identified with a pair of coordinates (i, j), 
    
    where i is the row number and j is the column number, both zero-indexed.
    
    Thus, (0, 0) is the upper-left corner and (n-1, n-1) is the bottom-right corner.

    Complete the function printShortestPath, which takes as input the grid size n, 

    and the coordinates of the starting and ending position (i_start, j_start) and (i_end, j_end) respectively, as input. 
    
    The function does not return anything. Given the coordinates of the starting position of the red knight and 
    
    the coordinates of the destination, print the minimum number of moves that the red knight has to make in order to reach the destination and after that, 
    
    print the order of the moves that must be followed to reach the destination in the shortest way. 
    
    If the destination cannot be reached, print only the word "Impossible".

    Note: There may be multiple shortest paths leading to the destination. Hence, assume that the red knight considers its possible neighbor locations in the following order of priority: UL, UR, R, LR, LL, L. In other words, if there are multiple possible options, the red knight prioritizes the first move in this list, as long as the shortest path is still achievable. Check sample input  for an illustration.

    **Constraints**

    the starting and the ending positions are different
    
    **Output Format**

    If the destination can be reached, print two lines. In the first line, print a single integer 
    
    denoting the minimum number of moves that the red knight has to make in order to reach the destination. 
    
    In the second line, print the space-separated sequence of moves.

    If the destination cannot be reached, print a single line containing only the word Impossible.
 */

/**
 *
 * @param {number} n
 * @param {number} i_start
 * @param {number} j_start
 * @param {number} i_end
 * @param {number} j_end
 */
const printShortestPath = (n, i_start, j_start, i_end, j_end) => {
  // Edge case
  const verticalDistance = Math.abs(i_start - i_end)
  const horizontalDistance = Math.abs(j_start - j_end)
  if (
    (verticalDistance === 0 && horizontalDistance % 2 !== 0) ||
    verticalDistance % 2 !== 0
  ) {
    return console.log('Impossible')
  }

  /* Solution will be implemented with the Dijkstra's algorithm */

  // Set to store the already explored nodes
  const exploredNodes = new Set()

  // Array to store the nodes yet to be explored (a node should always be in the nodes map before added here)
  const nodesToExplore = [[i_start, j_start]]

  // Map to determine how to reach a node
  // { "i,j": [total_moves, move, i_start, j_start] }
  const nodeMap = new Map()
  nodeMap.set([i_start, j_start].join(','), [0, null, null, null])

  while (nodesToExplore.length) {
    // Sort nodes based on Euclidean distance
    nodesToExplore.sort((a, b) => {
      const distance_a = Math.abs(a[0] - i_end) + Math.abs(a[1] - j_end)
      const distance_b = Math.abs(b[0] - i_end) + Math.abs(b[1] - j_end)
      return distance_a - distance_b
    })
    // Get closest node from target node
    const exploringNode = nodesToExplore.shift()
    const [i_exploring, j_exploring] = exploringNode
    exploredNodes.add(exploringNode.join(','))

    if (i_exploring === i_end && j_exploring === j_end) {
      // Reserve algorithm to determine the route
      const moves = []
      const findRouteWithBackPropagation = (node, first = false) => {
        // Retrieve node mapping
        const [totalMoves, move, i, j] = nodeMap.get(node.join(','))
        if (first) {
          console.log(totalMoves)
        }

        moves.unshift(move)
        if (i === i_start && j === j_start) {
          return
        }

        findRouteWithBackPropagation([i, j])
      }

      findRouteWithBackPropagation(exploringNode, true)

      return console.log(moves.join(' '))
    }

    // Get all possible positions from the start position
    const nextNodes = getPossibleNodes(n, i_exploring, j_exploring)
    // console.log("nextNodes:", nextNodes)

    // Determine the total amount of moves for the next nodes
    const [totalMovesExploringNode] = nodeMap.get(exploringNode.join(','))
    const totalMovesToNextNode = totalMovesExploringNode + 1

    // For each next possible node
    nextNodes.forEach((nextNode) => {
      const [move_next, i_next, j_next] = nextNode

      // Register node into nodes map
      const nextNodeMapping = nodeMap.get([i_next, j_next].join(','))
      if (!nextNodeMapping || nextNodeMapping[0] > totalMovesToNextNode) {
        nodeMap.set([i_next, j_next].join(','), [
          totalMovesToNextNode,
          move_next,
          i_exploring,
          j_exploring,
        ])
      }

      // Add unexplored nodes to the list of nodes to be explored
      if (!exploredNodes.has([i_next, j_next].join(','))) {
        nodesToExplore.push([i_next, j_next])
      }
    })
  }

  console.log('Impossible')
}

/**
 *
 * @param {number} n
 * @param {number} i
 * @param {number} j
 * @returns [move, i, j]
 */
const getPossibleNodes = (n, i, j) => {
  const nodes = []

  // UpperLeft
  if (i - 2 >= 0 && j - 1 >= 0) nodes.push(['UL', i - 2, j - 1])
  // UpperRight
  if (i - 2 >= 0 && j + 1 <= n - 1) nodes.push(['UR', i - 2, j + 1])
  // Right
  if (j + 2 <= n - 1) nodes.push(['R', i, j + 2])
  // LowerRight
  if (i + 2 <= n - 1 && j + 1 <= n - 1) nodes.push(['LR', i + 2, j + 1])
  // LowerLeft
  if (i + 2 <= n - 1 && j - 1 >= 0) nodes.push(['LL', i + 2, j - 1])
  // Left
  if (j - 2 >= 0) nodes.push(['L', i, j - 2])

  return nodes
}

module.exports = printShortestPath
