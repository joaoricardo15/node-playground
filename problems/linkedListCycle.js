function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
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
