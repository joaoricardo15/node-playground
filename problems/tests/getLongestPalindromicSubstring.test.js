const {
  getLongestPalindromicSubstring,
  isPalindrome,
} = require('../getLongestPalindromicSubstring')

describe('isPalindrome', () => {
  test('should return false for non palindromic inputs', () => {
    expect(isPalindrome('abc')).toBe(false)
  })

  test('should return false for non palindromic inputs', () => {
    expect(isPalindrome('abba')).toBe(true)
  })
})

describe('getLongestPalindromicSubstring', () => {
  test('should return undefined for invalid input', () => {
    expect(getLongestPalindromicSubstring()).toBe()
    expect(getLongestPalindromicSubstring(0)).toBe()
    expect(getLongestPalindromicSubstring([])).toBe()
    expect(getLongestPalindromicSubstring({})).toBe()
    expect(getLongestPalindromicSubstring('')).toBe()
  })

  test('should return same string when input is a palindrome', () => {
    expect(getLongestPalindromicSubstring('abba')).toBe('abba')
  })
})
