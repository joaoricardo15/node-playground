const countPrimes = require('./countPrimes')

describe('sum', () => {
    test('should not return the correct amount of prime number small than 0 -> []', () => {
        expect(countPrimes(0)).toBe(0)
    })

    test('should not return the correct amount of prime number small than 1 -> []', () => {
        expect(countPrimes(1)).toBe(0)
    })

    test('should not return the correct amount of prime number small than 2 -> []', () => {
        expect(countPrimes(2)).toBe(0)
    })

    test('should not return the correct amount of prime number small than 3 -> [2]', () => {
        expect(countPrimes(3)).toBe(1)
    })

    test('should not return the correct amount of prime number small than 10 -> [2, 3, 5, 7]', () => {
        expect(countPrimes(10)).toBe(4)
    })

    test('should not return the correct amount of prime number small than 20 -> [2, 3, 5, 7, 11, 13, 17, 19]', () => {
        expect(countPrimes(20)).toBe(8)
    })
})