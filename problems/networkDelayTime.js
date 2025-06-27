/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // Dijkstra's algorithm
  const visited = new Set();
  const unvisited = Array.from({ length: n }, (_, i) => i + 1);
  const distances = unvisited.reduce(
    (prev, curr) => ({ ...prev, [curr]: [Infinity, null] }),
    {},
  );
  distances[k] = [0, null];

  while (unvisited.length) {
    unvisited.sort((a, b) => distances[a][0] - distances[b][0]);
    const closestNode = unvisited.shift();

    // If the shortest distance to the closest node is still Infinity,
    // then remaining nodes are unreachable and we can break
    if (distances[closestNode] === Infinity) {
      break;
    }

    visited.add(closestNode);

    const nodeDistance = distances[closestNode][0];
    times
      .filter((x) => x[0] === closestNode && !visited.has(x[1]))
      .forEach((connectedNode) => {
        const [_, destination, distance] = connectedNode;

        const destinationDistance = distances[destination][0];
        if (nodeDistance + distance < destinationDistance) {
          distances[destination][0] = nodeDistance + distance;
          distances[destination][1] = closestNode;
        }
      });
  }

  const nodeDistanceValues = Object.values(distances);
  if (nodeDistanceValues.some((x) => !isFinite(x[0]))) {
    return -1;
  }

  return nodeDistanceValues.sort((a, b) => b[0] - a[0])[0][0];
};

module.exports = networkDelayTime;
