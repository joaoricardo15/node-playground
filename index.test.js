const { getTrue } = require('./index')

describe('index', () => {
    test('getTrue', () => {
        expect(getTrue()).toBe(true)
    })
})