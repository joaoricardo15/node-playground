const { ListNode, getLinkedListFromArray, mergeSortedLinkedLists } = require("./mergeTwoSortedLinkedLists")

describe('getLinkedListFromArray', () => {
    const maxLenght = 10
    const randomNumber1 = Math.floor(Math.random() * maxLenght);
    const randomNumber2 = Math.floor(Math.random() * maxLenght);

    test('should return single node when input is an single value array', () => {
        expect(getLinkedListFromArray([randomNumber1])).toEqual(new ListNode(randomNumber1))
    })

    test('should return linked node list when input is a multiple values array', () => {
        expect(getLinkedListFromArray([randomNumber1, randomNumber2])).toEqual(new ListNode(randomNumber1, new ListNode(randomNumber2)))
    })
})

describe('mergeSortedLists', () => {
    test('should return undefined for invalid input', () => {
        expect(mergeSortedLinkedLists()).toBe(undefined)
    })
   
    const emptyNode = new ListNode()

    test('should return empty node when input is a single empty node', () => {
        expect(mergeSortedLinkedLists()).toBe(undefined)
        expect(mergeSortedLinkedLists(emptyNode, undefined)).toBe(emptyNode)
        expect(mergeSortedLinkedLists(undefined, emptyNode)).toBe(emptyNode)
    })

    const maxLenght = 3
    const maxValue = 10

    const randomLenght1 = Math.floor(Math.random() * maxLenght);
    const randomList1 = Array(randomLenght1).fill().map(() => Math.round(Math.random() * maxValue)).sort()
    const randomLinkedList1 = getLinkedListFromArray(randomList1)

    const randomLenght2 = Math.floor(Math.random() * maxLenght);
    const randomList2 = Array(randomLenght2).fill().map(() => Math.round(Math.random() * maxValue)).sort()
    const randomLinkedList2 = getLinkedListFromArray(randomList2)

    test('should return same linked list when input is only one linked list', () => {
        expect(mergeSortedLinkedLists(randomLinkedList1, undefined)).toBe(randomLinkedList1)
        expect(mergeSortedLinkedLists(undefined, randomLinkedList2)).toBe(randomLinkedList2)
    })

    const mergedArray = randomList1.concat(randomList2).sort((a,b) => a - b)
    const mergedLinkedList = getLinkedListFromArray(mergedArray)

    test('should return merged linked lists when input is two linked lists', () => {
        expect(mergeSortedLinkedLists(randomLinkedList1, randomLinkedList2)).toEqual(mergedLinkedList)
    })
})