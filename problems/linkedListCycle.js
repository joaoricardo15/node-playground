function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let curr = head,
    subList = new Set();
  while (curr) {
    if (subList.has(curr.val)) {
      return true;
    }
    subList.add(curr.val);
    curr = curr.next;
  }

  return false;
};

module.exports = {
  ListNode,
  hasCycle,
};
