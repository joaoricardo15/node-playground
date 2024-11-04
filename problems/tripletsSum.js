/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/

/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
const sum = (nums) => {
    // Binary search
    nums.sort((a, b) => a - b)
    const triplets = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum > 0) {
                k--
            } else if (sum < 0) {
                j++
            } else {
                triplets.push([nums[i], nums[j], nums[k]])
                j++
                
                while (nums[j] === nums[j-1]) {
                    j++
                }
            }
            
        }
    }

    return triplets
}

module.exports = sum

// // Brute force
// const triplets = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     triplets.push(JSON.stringify([nums[i], nums[j], nums[k]].sort()))
//                 }
//             }
//         }
//     }
// return [...new Set(triplets)].map(x => JSON.parse(x))

// // Hash table
// const triplets = {}
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const missingValue = - (nums[i] + nums[j])
//             const triplet = [nums[i], nums[j], missingValue].sort()
//             if (!(triplet in triplets)) {
//                 if (nums.slice(j+1).includes(missingValue)) {
//                     triplets[triplet] = true
//                 }
//             }
//         }
//     }
// return O