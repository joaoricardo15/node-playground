const { getTrue } = require('../index')

describe('Index', () => {
    test('getTrue', () => {
        expect(getTrue()).toBe(true)
    })
})