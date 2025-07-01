/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const combinations = []

  const addElement = (substring, open, close) => {
    if (open === n && close === n) {
      combinations.push(substring)
      return
    }

    if (open < n) {
      addElement(substring + '(', open + 1, close)
    }

    if (open > close) {
      addElement(substring + ')', open, close + 1)
    }
  }

  addElement('', 0, 0)

  return combinations
}

module.exports = generateParenthesis
