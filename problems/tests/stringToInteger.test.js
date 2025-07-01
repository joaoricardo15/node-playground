const stringToInteger = require('../stringToInteger')

describe('stringToInteger', () => {
  test('should return undefined for invalid input', () => {
    expect(stringToInteger()).toBe()
  })

  test('should return the corresponsing integer', () => {
    expect(stringToInteger('42')).toBe(42)
  })

  test('should return the correct integer when input has leading characters "-" or "+"', () => {
    expect(stringToInteger('+42')).toBe(42)
    expect(stringToInteger('-42 ')).toBe(-42)
  })

  test('should return the correct integer when input has leading zeros', () => {
    expect(stringToInteger('+042')).toBe(42)
    expect(stringToInteger('-042')).toBe(-42)
  })

  test('should return the correct integer when input has non-digit characters', () => {
    expect(stringToInteger('1337c0d32')).toBe(1337)
    expect(stringToInteger('words and 987')).toBe(0)
  })

  test('should return min/max integer when input is out of range', () => {
    expect(stringToInteger('2147483648')).toBe(2147483647)
    expect(stringToInteger('-2147483649')).toBe(-2147483648)
  })
})
