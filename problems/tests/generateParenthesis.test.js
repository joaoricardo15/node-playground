const generateParenthesis = require('../generateParenthesis')

describe('generateParenthesis', () => {
    test('should return one valid paranthesis', () => {
        expect(generateParenthesis(1)).toStrictEqual(["()"])
    })

    test('should return correct list of possible valid paranthesis', () => {
        expect(generateParenthesis(2)).toStrictEqual(["(())", "()()"])
    })

    test('should return correct list of possible valid paranthesis', () => {
        expect(generateParenthesis(3)).toStrictEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
    })
})