const sum = require('.')

describe('sum', () => {
  test('should not return undefined for invalid input', () => {
    expect(sum()).toBe()
  })

  test('should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
