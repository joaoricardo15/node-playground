const isTrue = require('./index')

describe('Index', () => {
    test('isTrue', () => {
        expect(isTrue()).toBe(true)
    })
})