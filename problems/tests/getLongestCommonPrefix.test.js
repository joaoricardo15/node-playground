const getLongestCommonPrefix = require('../getLongestCommonPrefix')

describe('getLongestCommonPrefix', () => {
  test('should return undefined for invalid input', () => {
    expect(getLongestCommonPrefix()).toBe()
    expect(getLongestCommonPrefix(null)).toBe()
    expect(getLongestCommonPrefix('')).toBe()
    expect(getLongestCommonPrefix(0)).toBe()
    expect(getLongestCommonPrefix({})).toBe()
    expect(getLongestCommonPrefix([])).toBe()
  })

  test('should return string for a single string array', () => {
    expect(getLongestCommonPrefix([''])).toBe('')
    expect(getLongestCommonPrefix(['hello'])).toBe('hello')
  })

  test('should return a empty string for array of string that does not share a common prefix', () => {
    expect(getLongestCommonPrefix(['hello', 'world'])).toBe('')
  })

  test('should return common prefix for array of strings that share common prefix', () => {
    expect(getLongestCommonPrefix(['hello', 'hell'])).toBe('hell')
  })
})
