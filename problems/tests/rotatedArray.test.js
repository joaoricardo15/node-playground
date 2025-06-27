const searchRotatedArray = require("../rotatedArray");

describe("sum", () => {
  test("should not return test case 1", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 0,
      output = 4;
    expect(searchRotatedArray(nums, target)).toBe(output);
  });

  test("should not return test case 2", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 3,
      output = -1;
    expect(searchRotatedArray(nums, target)).toBe(output);
  });

  test("should not return test case 3", () => {
    const nums = [1],
      target = 0,
      output = -1;
    expect(searchRotatedArray(nums, target)).toBe(output);
  });
});
