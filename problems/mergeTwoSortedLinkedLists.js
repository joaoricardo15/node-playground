/**
 * You are given the heads of two sortedlinked lists list1 and list2.
 * Merge the two lists into one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoSortedLinkedLists = (list1, list2) => {
    if (!list1 || !list2) {
        return list1 || list2
    }

    const array1 = [], array2 = []
    getArrayFromLinkedList(list1, array1)
    getArrayFromLinkedList(list2, array2)
    
    const mergedArray = array1.concat(array2).sort((a,b) => a - b)
    
    return getLinkedListFromArray(mergedArray)
}

const getArrayFromLinkedList = (list, array) => {
    array.push(list.val)
    if (list.next) {
        getArrayFromLinkedList(list.next, array)
    }
}

const getLinkedListFromArray = (array) => {
    return array.reverse().reduce((prev, curr) => new ListNode(curr, prev), undefined)
}

module.exports = {
    ListNode,
    mergeSortedLinkedLists: mergeTwoSortedLinkedLists,
    getArrayFromLinkedList,
    getLinkedListFromArray
}