const getReverseInteger = require("../getReverseInteger")

describe('getReverseInteger', () => {
    test('should return undefined for invalid input', () => {
        expect(getReverseInteger()).toBe()
        expect(getReverseInteger('')).toBe()
    })

    test('should return 0 for input out of range', () => {
        expect(getReverseInteger(-2147483649)).toBe(0)
        expect(getReverseInteger(2147483648)).toBe(0)
    })

    test('should return the reversed integer', () => {
        expect(getReverseInteger(-231)).toBe(-132)
        expect(getReverseInteger(230)).toBe(32)
    })
})