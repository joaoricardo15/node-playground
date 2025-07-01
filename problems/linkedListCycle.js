const { ListNode } = require('./utils')

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let curr = head;
  const visited = new Set();
  while (curr) {
    if (visited.has(curr.val)) {
      return true;
    }
    visited.add(curr.val);
    curr = curr.next;
  }

  return false;
};

module.exports = {
  ListNode,
  hasCycle,
};
