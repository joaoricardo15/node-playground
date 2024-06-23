const getLongestCommonPrefix = require(".")

describe('getLongestCommonPrefix', () => {
    test('isInputValid', () => {
        const invalidResponse = null
        expect(getLongestCommonPrefix()).toBe(invalidResponse)
        expect(getLongestCommonPrefix(null)).toBe(invalidResponse)
        expect(getLongestCommonPrefix('')).toBe(invalidResponse)
        expect(getLongestCommonPrefix(0)).toBe(invalidResponse)
        expect(getLongestCommonPrefix({})).toBe(invalidResponse)
        expect(getLongestCommonPrefix([])).toBe(invalidResponse)
    })

    test('isSingleString', () => {
        expect(getLongestCommonPrefix([''])).toBe('')
        expect(getLongestCommonPrefix(['hello'])).toBe('hello')
    })

    test('multipleStringsSharingPrefixes',() => {
        expect(getLongestCommonPrefix(['hello', 'hell'])).toBe('hell')
    })

    test('multipleStringsNotSharingPrefixes', () => {
        expect(getLongestCommonPrefix(['hello', 'world'])).toBe('')
    })


})