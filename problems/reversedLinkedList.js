/**
 * Given the head of a linked list,
 * return the head of the reserved linked list.
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {
  // Write your code here

  const nodes = [];

  const digIntoList = (node) => {
    nodes.unshift(node);

    if (node.next === null) {
      return;
    }

    digIntoList(node.next);
  };

  digIntoList(head);

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  nodes[nodes.length - 1].next = null;

  return nodes[0];
}

module.exports = {
  ListNode,
  reverseLinkedList,
};
