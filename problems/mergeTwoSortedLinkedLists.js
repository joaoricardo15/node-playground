const { ListNode } = require('./utils')

/**
 * You are given the heads of two sortedlinked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode}
 */
const mergeSortedLinkedLists = (head1, head2) => {
  // Declare a variable to be the head of the merged list
  let mergedHead
  if (head1.val <= head2.val) {
    mergedHead = head1
    head1 = head1.next
  } else {
    mergedHead = head2
    head2 = head2.next
  }

  // Declare variable to be the current node
  let currentNode = mergedHead

  // Run until both lists are empty
  while (head1 && head2) {
    // Determine with node is smaller and append it to the merged list
    if (head1.val <= head2.val) {
      currentNode.next = head1
      head1 = head1.next
    } else {
      currentNode.next = head2
      head2 = head2.next
    }

    currentNode = currentNode.next
  }

  // Complete the merged list with the eventual remaining of the lists
  currentNode.next = head1 || head2

  // Return the merged list
  return mergedHead
}

module.exports = {
  ListNode,
  mergeSortedLinkedLists,
}
