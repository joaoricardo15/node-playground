/**
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where
 * the product of all the elements in the subarray is strictly less than k.
 *
 * Example:
 * Input: nums = [10,5,2,6], k = 100
 * Output: 8
 *
 * Explanation: The 8 subarrays that have product less than 100 are:
 * [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  // Declare a variable to store the total amount of subarrays
  let subArrays = 0

  // Iterate over the array (starting index of window)
  for (let i = 0; i < nums.length; i++) {
    // Declare a variable to store the local product (for improved performance)
    let product = 1

    // Iterate over the remaining array (ending index of window)
    for (let j = i; j < nums.length; j++) {
      // Update the local product
      product *= nums[j]

      // Test local product aginst k
      if (product < k) {
        subArrays++
      } else {
        break
      }
    }
  }
  // Return the total amount of subarrays
  return subArrays
}

module.exports = numSubarrayProductLessThanK
