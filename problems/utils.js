/********** Data sctructures **********/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function QuadThree(val, isLeaf, tl, tr, bl, br) {
  this.val = val
  this.isLeaf = isLeaf
  this.tl = tl
  this.tr = tr
  this.bl = bl
  this.br = br
}

function GraphNode(val, children) {
  this.val = val === undefined ? 0 : val
  this.children = children || []
}

/********** Methods **********/

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome = (s) => {
  const half = Math.floor(s.length / 2)
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }

  return true
}

/**
 * @param {number[]} array
 * @returns ListNode
 */
const getLinkedListFromArray = (array) => {
  return array
    .reverse()
    .reduce((prev, curr) => new ListNode(curr, prev), undefined)
}

module.exports = {
  ListNode,
  TreeNode,
  QuadThree,
  GraphNode,
  isPalindrome,
  getLinkedListFromArray,
}
