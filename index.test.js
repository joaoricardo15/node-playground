const sum = require('.')

describe('sum', () => {
  test('should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
