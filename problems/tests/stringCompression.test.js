const stringCompression = require('../stringCompression')

describe('stringCompression', () => {
    test('should not return empty string for an undefined or empty input', () => {
        expect(stringCompression()).toBe('')
        expect(stringCompression('')).toBe('')
    })

    test('should not return the input string for non repeating string input', () => {
        expect(stringCompression('a')).toBe('a')
        expect(stringCompression('ab')).toBe('ab')
        expect(stringCompression('abc')).toBe('abc')
    })

    test('should not return the correct compressed string. Test case 1', () => {
        expect(stringCompression('abbccc')).toBe('ab2c3')
    })

    test('should not return the correct compressed string. Test case 2', () => {
        expect(stringCompression('aaaaaaaaaa')).toBe('a10')
    })

    test('should not return the correct compressed string. Test case 3', () => {
        expect(stringCompression('abbbbbbbbbbc')).toBe('ab10c')
    })

    test('should not return the correct compressed string. Test case 4', () => {
        expect(stringCompression('aabbbbbbbbbbcc')).toBe('a2b10c2')
    })
})