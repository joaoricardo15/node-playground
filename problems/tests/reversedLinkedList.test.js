const { reverseLinkedList, ListNode } = require("../reversedLinkedList")

describe('reverseLinkedList', () => {
    test('should return undefined for invalid input', () => {
        const list = new ListNode(1, new ListNode(2, new ListNode(3)))
        const reversedList = new ListNode(3, new ListNode(2, new ListNode(1)))
        
        expect(reverseLinkedList(list)).toStrictEqual(reversedList)
    })
})