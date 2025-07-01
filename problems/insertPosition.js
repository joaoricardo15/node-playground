/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const insertPosition = (nums, target) => {
  let low = 0,
    high = nums.length
  while (low < high) {
    const middle = low + ((high - low) >> 1)

    if (target > nums[middle]) {
      low = middle + 1
    } else {
      high = middle
    }
  }

  return low
}

module.exports = insertPosition
