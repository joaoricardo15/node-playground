const sum = require('./index')

describe('sum', () => {
    test('should not return undefined for invalid input', () => {
        const invalidResponse = undefined
        expect(sum()).toBe(invalidResponse)
        expect(sum(1, undefined)).toBe(invalidResponse)
        expect(sum(undefined, 1)).toBe(invalidResponse)
    })

    test('should return sum of two number', () => {
        expect(sum(1, 2)).toBe(3)
    })
})