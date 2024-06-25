const findIndexOfFirstOccurrence = require("./findIndexOfFirstOccurrence")

describe('findIndexOfFirstOccurrence', () => {
    test('should return undefined for invalid inout', () => {
        const invalidResponse = undefined
        expect(findIndexOfFirstOccurrence()).toBe(invalidResponse)
        expect(findIndexOfFirstOccurrence('', '')).toBe(invalidResponse)
        expect(findIndexOfFirstOccurrence('', undefined)).toBe(invalidResponse)
        expect(findIndexOfFirstOccurrence(undefined, '')).toBe(invalidResponse)
    })

    test('should return -1 when needle is not present in haystack', () => {
        expect(findIndexOfFirstOccurrence('hello', 'world')).toBe(-1)
    })

    test('should return -1 when needle is bigger than haystack', () => {
        expect(findIndexOfFirstOccurrence('hello', 'world!')).toBe(-1)
    })

    test('should return 0 when needle equals haystack', () => {
        expect(findIndexOfFirstOccurrence('hello', 'hello')).toBe(0)
    })

    test('should return index when needle is present in haystack', () => {
        expect(findIndexOfFirstOccurrence('hello', 'hell')).toBe(0)
        expect(findIndexOfFirstOccurrence('hello', 'ello')).toBe(1)
        expect(findIndexOfFirstOccurrence('hello', 'llo')).toBe(2)
        expect(findIndexOfFirstOccurrence('hello', 'lo')).toBe(3)
        expect(findIndexOfFirstOccurrence('hello', 'o')).toBe(4)  
    })
})