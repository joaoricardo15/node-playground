const { sumOfLeftLeaves, TreeNode } = require("../sumOfLeftLeaves");

describe("sumOfLeftLeaves", () => {
  test("Example 1: Should return 0 for a tree with only one node", () => {
    const tree = new TreeNode(1);
    expect(sumOfLeftLeaves(tree)).toBe(0);
  });

  test("Example 2", () => {
    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );

    expect(sumOfLeftLeaves(tree)).toBe(24);
  });

  test("Example 3", () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3),
    );

    expect(sumOfLeftLeaves(tree)).toBe(4);
  });
});
