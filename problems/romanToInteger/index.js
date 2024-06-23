/*******************************
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer.

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*******************************/

const romanCharsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    // Implementing constrainsts
    if (
        typeof s !== 'string' || 
        s.length == 0 || 
        s.length > 15 || 
        s.split('').some(char => !Object.keys(romanCharsMap).includes(char))
    ) {
        return null
    }

    // Proper logic
    let count = 0
    for (let i=0; i<s.length; i++) {
        const currentValue = romanCharsMap[s[i]]
        const nextValue = romanCharsMap[s[i+1]]
        
        if (currentValue < nextValue) {
            count += nextValue - currentValue
            i++
        } else {
            count += currentValue
        }
    }

    return count
}

module.exports = romanToInt