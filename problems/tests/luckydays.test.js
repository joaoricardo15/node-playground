const findPrimeDates = require('../luckydays')

describe('sum', () => {
  test('Example 1: should not return the right amount of lucky dates', () => {
    const d1 = '02-08-2025'
    const d2 = '04-09-2025'
    const luckyDates = 5
    expect(findPrimeDates(d1, d2)).toBe(luckyDates)
  })

  test('Example 2: should not return the right amount of lucky dates', () => {
    const d1 = '25-06-2365'
    const d2 = '07-09-8847'
    const luckyDates = 846403
    expect(findPrimeDates(d1, d2)).toBe(luckyDates)
  })

  test('Example 3: should not return the right amount of lucky dates', () => {
    const d1 = '18-08-4265'
    const d2 = '01-09-9400'
    const luckyDates = 670604
    expect(findPrimeDates(d1, d2)).toBe(luckyDates)
  })

  test('Example 4: should not return the right amount of lucky dates', () => {
    const d1 = '07-07-7463'
    const d2 = '19-08-9176'
    const luckyDates = 223842
    expect(findPrimeDates(d1, d2)).toBe(luckyDates)
  })
})
