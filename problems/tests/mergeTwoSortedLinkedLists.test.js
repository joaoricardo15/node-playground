const { getLinkedListFromArray } = require('../utils')
const { mergeSortedLinkedLists } = require('../mergeTwoSortedLinkedLists')

describe('mergeSortedLists', () => {
  const maxLenght = 10
  const maxValue = 10

  const randomLenght1 = Math.floor(Math.random() * maxLenght)
  const randomList1 = Array(randomLenght1)
    .fill()
    .map(() => Math.round(Math.random() * maxValue))
    .sort((a, b) => a - b)
  const randomLinkedList1 = getLinkedListFromArray(randomList1)

  const randomLenght2 = Math.floor(Math.random() * maxLenght)
  const randomList2 = Array(randomLenght2)
    .fill()
    .map(() => Math.round(Math.random() * maxValue))
    .sort((a, b) => a - b)
  const randomLinkedList2 = getLinkedListFromArray(randomList2)

  const mergedArray = randomList1.concat(randomList2).sort((a, b) => a - b)
  const mergedLinkedList = getLinkedListFromArray(mergedArray)

  test('should return merged linked lists when input is two linked lists', () => {
    expect(
      mergeSortedLinkedLists(randomLinkedList1, randomLinkedList2)
    ).toEqual(mergedLinkedList)
  })
})
