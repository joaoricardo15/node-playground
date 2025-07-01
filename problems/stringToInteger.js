/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
 * The algorithm for myAtoi(string s) is as follows:
 *  - Whitespace: Ignore any leading whitespace (" ").
 *  - Signedness: Determine the sign by checking if the next character is '-' or '+',
 *    assuming positivity is neither present.
 *  - Conversion: Read the integer by skipping leading zeros until a non-digit character is
 *    encountered or the end of the string is reached. If no digits were read, then the result is 0.
 *  - Rounding: If the integer is out of the 32-bit signed integer range [-2ˆ31, 2ˆ31 - 1],
 *    then round the integer to remain in the range. Specifically, integers less than -231
 *    should be rounded to -2ˆ31, and integers greater than 2ˆ31 - 1 should be rounded to 2ˆ31 - 1.
 */

const MIN_RANGE = -2147483648
const MAX_RANGE = 2147483647
const LEADING_CHARS = ['-', '+']
const NUMERIC_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

/**
 *
 * @param {string} s
 * @returns {number}
 */
const stringToInteger = (s) => {
  if (typeof s !== 'string') {
    return
  }

  // Handling empty spaces
  // s = s.replaceAll(/\s/g,'')

  // Handling non-digit character
  // s = s.replace(/[^0-9.,-]/g, ' ')

  let numberHasStarted = false
  for (let i = 0; i < s.length; i++) {
    if (!numberHasStarted) {
      if (!NUMERIC_CHARS.includes(s[i])) {
        if (!LEADING_CHARS.includes(s[i])) {
          return 0
        }
      }

      numberHasStarted = true
    }
  }

  // Parsing the integer (it already trims empty spaces and non-digit characterss)
  let n = parseInt(s)

  // Handling out our range
  if (n < MIN_RANGE) {
    n = MIN_RANGE
  } else if (n > MAX_RANGE) {
    n = MAX_RANGE
  }

  return n
}

module.exports = stringToInteger
