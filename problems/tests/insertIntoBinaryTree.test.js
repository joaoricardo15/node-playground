const { TreeNode } = require('../utils')
const insertIntoBST = require('../insertIntoBinaryTree')

describe('insertInBinaryTree', () => {
  test('Example 0: Should return the new tree', () => {
    const tree = new TreeNode()
    const target = 1
    const subTree = new TreeNode(undefined, undefined, new TreeNode(1))
    expect(insertIntoBST(tree, target)).toEqual(subTree)
  })
  
  test('Example 1: Should return the right index', () => {
    const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
    const target = 5
    const subTree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(5)))
    expect(insertIntoBST(tree, target)).toEqual(subTree)
  })
})