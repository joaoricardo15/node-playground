const bubbleSort = require('./bubbleSort')
const quickSort = require('./quickSort')
const mergeSort = require('./mergeSort')

describe('Sorting', () => {
  const array = [2, 3, 1, 8, 9, 0, -2]
  const sortedArray = [-2, 0, 1, 2, 3, 8, 9]

  test('bubbleSort - should return the sorted array', () => {
    expect(bubbleSort(array)).toEqual(sortedArray)
  })

  test('quickSort - should return the sorted array', () => {
    expect(quickSort(array)).toEqual(sortedArray)
  })

  test('mergeSort - should return the sorted array', () => {
    expect(mergeSort(array)).toEqual(sortedArray)
  })
})
