const { ListNode } = require('./utils')

/**
 * Given the head of a linked list,
 * remove the nth node from the end of the list and return its head.
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // Edge case 1
  // If the list has only one node
  if (n === 1 && head.next === null) {
    return null;
  }

  // Declare a first pointer and set it to the head
  let pointer1 = head;

  // Declare a second pointer and move it n steps ahead
  let pointer2 = head;
  for (let i = 0; i < n; i++) {
    pointer2 = pointer2.next;
  }

  // Move both pointers until the second pointer reaches the end
  while (pointer2 && pointer2.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  // Edge cases
  // If the node to be removed is the end node
  if (pointer1.next === pointer2) {
    pointer1.next = null;
  }
  // If the node to be removed is the head node
  else if (pointer2 === null) {
    return pointer1.next;
  }
  // If the node to be removed is in the middle
  else {
    pointer1.next = pointer1.next.next;
  }

  return head;
};

module.exports = {
  ListNode,
  removeNthFromEnd,
};
