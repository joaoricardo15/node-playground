const search = require("../binarySearch")

describe("search", () => {
  test("Example 1: Should return the right index", () => {
    const nums = [-1,0,3,5,9,12]
    const target = 9
    expect(search(nums, target)).toBe(4);
  })

  test("Example 2: Should return -1 (not found)", () => {
    const nums = [-1,0,3,5,9,12]
    const target = 2
    expect(search(nums, target)).toBe(-1);
  })
})
