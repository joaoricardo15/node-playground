/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2ˆ31 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

const MIN_RANGE = -2147483648 // Math.pow(2, 31) * -1
const MAX_RANGE = 2147483647  // Math.pow(2, 31) - 1

/**
 * 
 * @param {number} x 
 * @returns {number}
 */
const getReverseInteger = (x) => {
    // Input validation
    if (typeof x !== 'number') {
        return
    }

    let reversedInt = parseInt(x.toString().split('').reverse().join(''))
    if (x < 0) {
        reversedInt *= -1
    }

    // Handling edge cases
    if (reversedInt < MIN_RANGE || reversedInt > MAX_RANGE) {
        return 0
    }

    return reversedInt
}

module.exports = getReverseInteger