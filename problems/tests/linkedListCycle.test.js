const { ListNode } = require('../utils')
const hasCycle = require('../linkedListCycle')

describe('hasCycle', () => {
  const maxLenght = 1000
  const randomNumber1 = Math.floor(Math.random() * maxLenght)
  const randomNumber2 = Math.floor(Math.random() * maxLenght)
  const randomNumber3 = Math.floor(Math.random() * maxLenght)

  const list1 = new ListNode(randomNumber1)
  test('should return false when input is an single node list', () => {
    expect(hasCycle(list1)).toEqual(false)
  })

  const list2 = new ListNode(
    randomNumber1,
    new ListNode(randomNumber2, new ListNode(randomNumber3))
  )
  test('should return false when input is an linked list without a cycle', () => {
    expect(hasCycle(list2)).toEqual(false)
  })

  const list3 = new ListNode(
    randomNumber1,
    new ListNode(
      randomNumber2,
      new ListNode(randomNumber3, new ListNode(randomNumber1))
    )
  )
  test('should return true when input is an linked list with a cycle', () => {
    expect(hasCycle(list3)).toEqual(true)
  })
})
