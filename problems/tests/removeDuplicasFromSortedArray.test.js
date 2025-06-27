const removeDuplicatesFromSortedArray = require("../removeDuplicasFromSortedArray");

describe("removeDuplicatesFromSortedArray", () => {
  test("should return undefined for invalid input", () => {
    expect(removeDuplicatesFromSortedArray()).toBe();
    expect(removeDuplicatesFromSortedArray({})).toBe();
    expect(removeDuplicatesFromSortedArray(null)).toBe();
    expect(removeDuplicatesFromSortedArray("array")).toBe();
    expect(removeDuplicatesFromSortedArray(100000)).toBe();
  });

  test("should return input length when input has no duplicates", () => {
    expect(removeDuplicatesFromSortedArray([])).toEqual(0);
    expect(removeDuplicatesFromSortedArray([1])).toEqual(1);
    expect(removeDuplicatesFromSortedArray([1, 2])).toEqual(2);
    expect(removeDuplicatesFromSortedArray([1, 2, 3])).toEqual(3);
  });

  test("should return same array when input has no duplicates", () => {
    let array = [1, 1, 2, 2, 3, 3];
    expect(removeDuplicatesFromSortedArray(array)).toEqual(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
  });
});
