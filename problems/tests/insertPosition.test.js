const insertPosition = require("../insertPosition");

describe("sum", () => {
  test("should return correct position. Test case 1", () => {
    expect(insertPosition([1, 3, 5, 6], 5)).toBe(2);
  });

  test("should return correct position. Test case 2", () => {
    expect(insertPosition([1, 3, 5, 6], 2)).toBe(1);
  });

  test("should return correct position. Test case 3", () => {
    expect(insertPosition([1, 3, 5, 6], 7)).toBe(4);
  });
});
