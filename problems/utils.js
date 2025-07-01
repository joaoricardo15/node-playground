function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function GraphNode(val, children) {
  this.val = val === undefined ? 0 : val
  this.children = children || []
}

const getLinkedListFromArray = (array) => {
  return array
    .reverse()
    .reduce((prev, curr) => new ListNode(curr, prev), undefined)
}

module.exports = {
  ListNode,
  TreeNode,
  GraphNode,
  getLinkedListFromArray,
}
