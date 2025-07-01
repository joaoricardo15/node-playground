/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const search = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    mid
  while (high >= low) {
    mid = low + ((high - low) >> 1)
    if (arr[mid] > target) {
      high = mid - 1
    } else if (arr[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

module.exports = search
