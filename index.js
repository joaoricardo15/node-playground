/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return
  }

  return a + b
}

module.exports = sum
