const { isPalindrome } = require('./utils')

/**
 * Given a string s, return the longest palindromic substring in s
 * (a string is palindromic if it reads the same forward and backward).
 */

/**
 * @param {string} s
 * @returns {string}
 */
const getLongestPalindromicSubstring = (s) => {
  if (typeof s !== 'string' || !s.length) {
    return
  }

  let longestPalindrome = s[0]
  for (let start = 0; start < s.length; start++) {
    for (let end = start; end < s.length; end++) {
      const subString = s.substring(start, end + 1)
      if (subString.length > longestPalindrome.length) {
        if (isPalindrome(subString)) {
          longestPalindrome = subString
        }
      }
    }
  }

  return longestPalindrome
}

module.exports = getLongestPalindromicSubstring
