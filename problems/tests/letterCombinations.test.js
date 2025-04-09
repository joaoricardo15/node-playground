const letterCombinations = require('../letterCombinations')

describe('letterCombinations', () => {
    test('should return empty array', () => {
        expect(letterCombinations("")).toStrictEqual([])
    })

    test('should return correct list of possible letter combinations', () => {
        expect(letterCombinations("2")).toStrictEqual(["a","b","c"])
    })

    test('should return correct list of possible letter combinations', () => {
        expect(letterCombinations("23")).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
    })
})