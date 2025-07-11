const makeSmallestPalindrome = require('../ServiceNow/alphabeticallySmallestPalindrome')

describe('sum', () => {
  test('Example 1: Should return the alphabetiacally smallest palindrome', () => {
    const s = 'egcfe'
    const palindrome = 'efcfe'
    expect(makeSmallestPalindrome(s)).toBe(palindrome)
  })

  test('Example 2: Should return the alphabetiacally smallest palindrome', () => {
    const s = 'abcd'
    const palindrome = 'abba'
    expect(makeSmallestPalindrome(s)).toBe(palindrome)
  })

  test('Example 3: Should return the alphabetiacally smallest palindrome', () => {
    const s = 'seven'
    const palindrome = 'neven'
    expect(makeSmallestPalindrome(s)).toBe(palindrome)
  })
})
