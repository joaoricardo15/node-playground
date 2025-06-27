/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * The integer division should truncate toward zero, which means losing its fractional part.
 * For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1].
 * For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1,
 * and if the quotient is strictly less than -231, then return -231.
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divideTwoIntegers = function (dividend, divisor) {
  // Making both multiplier and divisor positive
  let negativeResult = false;
  if (dividend < 0 && divisor > 0) {
    dividend = -dividend;
    negativeResult = true;
  } else if (dividend > 0 && divisor < 0) {
    divisor = -divisor;
    negativeResult = true;
  } else if (dividend < 0 && divisor < 0) {
    dividend = -dividend;
    divisor = -divisor;
  }

  const dividePositiveIntegers = (dividend, divisor) => {
    // Edge cases
    if (dividend < divisor) {
      return 0;
    }
    if (dividend === divisor) {
      return 1;
    }
    if (divisor === 1) {
      return dividend;
    }

    const multiply = (a, b) => {
      if (
        a.toString().length + b.toString().length >
        dividend.toString().length + 1
      ) {
        return;
      }

      let sum = 0;
      for (let i = 0; i < b; i++) {
        sum += a;
      }

      return sum;
    };

    // Binary search
    let low = 1,
      high = dividend;
    while (low < high) {
      console.log(low, high, "---------");
      const mid = low + ((high - low) >> 3);
      console.log("mid:", mid);

      // Result will overflow
      if (
        mid.toString().length + divisor.toString().length >
        dividend.toString().length + 1
      ) {
        high = mid;
        continue;
      }

      const result = multiply(mid, divisor);
      console.log("result:", result);

      if (result === null) {
        high = mid;
        continue;
      }

      if (dividend > result && result + divisor > dividend) {
        return mid;
      }

      if (dividend > result) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  };

  const positiveDivision = dividePositiveIntegers(dividend, divisor);

  const negativeBound = 2147483648;

  if (negativeResult) {
    if (positiveDivision > negativeBound) {
      return -negativeBound;
    }

    return -positiveDivision;
  } else {
    if (positiveDivision > negativeBound - 1) {
      return negativeBound - 1;
    }

    return positiveDivision;
  }
};

module.exports = divideTwoIntegers;
