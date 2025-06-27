const sum = require("../tripletsSum");

describe("sum", () => {
  test("should return test case 1", () => {
    expect(
      sum([-1, 0, 1, 2, -1, -4])
        .map((x) => x.sort())
        .sort(),
    ).toEqual(
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ]
        .map((x) => x.sort())
        .sort(),
    );
  });

  test("should return test case 2", () => {
    expect(
      sum([0, 1, 1])
        .map((x) => x.sort())
        .sort(),
    ).toEqual([].map((x) => x.sort()).sort());
  });

  test("should return test case 3", () => {
    expect(
      sum([0, 0, 0])
        .map((x) => x.sort())
        .sort(),
    ).toEqual([[0, 0, 0]].map((x) => x.sort()).sort());
  });
});
