const getDouble = require('./index')

describe('getDouble', () => {
    test('isInputValid', () => {
        expect(getDouble()).toBe(null)
    })

    test('isOutpuValid', () => {
        expect(getDouble(1)).toBe(2)
    })
})