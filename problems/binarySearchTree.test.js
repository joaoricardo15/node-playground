const { TreeNode } = require("./utils")
const { isValidBST } = require("./binarySearchTree");

describe("isValidBST", () => {
    test("Example 0: Should return true for an empty tree", () => {
        const tree = new TreeNode()
        expect(isValidBST(tree)).toBe(true)
    })
    
    test("Example 1: Should return true for a valid tree", () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3))
        expect(isValidBST(tree)).toBe(true)
    })

    test("Example 2: Should return false for an invalid tree", () => {
        const tree = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))
        expect(isValidBST(tree)).toBe(false)
    })

    test("Example 3: Should return true for a valid tree", () => {
        const tree = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)))
        expect(isValidBST(tree)).toBe(false)
    })

    test("Example 4: Should return true for a valid tree", () => {
        const tree = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)))
        expect(isValidBST(tree)).toBe(true)
    })
})