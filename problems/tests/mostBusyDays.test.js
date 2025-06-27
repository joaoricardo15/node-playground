const { mostBusyDays } = require("../mostBusyDays");

describe("sum", () => {
  test("should return the correct amount of busy days", () => {
    const inputs = [
      {
        startDate: 2,
        endDate: 10,
      },
      {
        startDate: 5,
        endDate: 15,
      },
      {
        startDate: 8,
        endDate: 15,
      },
    ];

    expect(mostBusyDays(inputs)).toStrictEqual([9, 10]);
  });
});
