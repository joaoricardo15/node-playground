const { TreeNode } = require('../utils')
const searchBST = require('../searchInBinaryTree')

describe('searchBST', () => {
  test('Example 0: Should return null for value not found', () => {
    const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
    const target = 5
    expect(searchBST(tree, target)).toEqual(null)
  })
  
  test('Example 1: Should return the right tree node', () => {
    const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
    const target = 2
    const subTree = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    expect(searchBST(tree, target)).toEqual(subTree)
  })
})