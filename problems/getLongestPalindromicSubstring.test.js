const { getLongestPalindromicSubstring, isPalindrome } = require("./getLongestPalindromicSubstring")

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
        const invalidResponse = undefined
        expect(getLongestPalindromicSubstring()).toBe(invalidResponse)
        expect(getLongestPalindromicSubstring(0)).toBe(invalidResponse)
        expect(getLongestPalindromicSubstring([])).toBe(invalidResponse)
        expect(getLongestPalindromicSubstring({})).toBe(invalidResponse)
        expect(getLongestPalindromicSubstring('')).toBe(invalidResponse)
    })

    test('should return same string when input is a palindrome', () => {
        expect(getLongestPalindromicSubstring('abba')).toBe('abba')
    })
})