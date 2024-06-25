/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. 
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k,
 * to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements 
 * of nums contain the unique elements in the order they were present in nums initially.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

/**
 * @param {array} nums
 * @returns {array}
 */

const removeDuplicatesFromSortedArray = (nums) => {
    if (!Array.isArray(nums)) {
        return
    }

    const uniqueArray = [...new Set(nums)]

    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i]
    }

    return uniqueArray.length
}

module.exports = removeDuplicatesFromSortedArray
