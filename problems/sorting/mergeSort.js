/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)

  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

const merge = (left, right) => {
  let sortedArr = []
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

module.exports = mergeSort
