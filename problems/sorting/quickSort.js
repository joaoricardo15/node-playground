/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const quickSort = (arr) => {
  // 0. Stop when there is only one element into the sub-array
  if (arr.length <= 1) {
    return arr
  }

  // 1. Pick a pivot (it will be the first element)
  const pivot = arr[0]

  // 2. Rearrange the elements around the pivot (all smaller to its right, all bigger to its left)
  const smallers = arr.filter((x) => x < pivot)
  const biggers = arr.filter((x) => x > pivot)

  // 3. Recusivaly apply the process to two sub-arrays
  return [...quickSort(smallers), pivot, ...quickSort(biggers)]
}

module.exports = quickSort
