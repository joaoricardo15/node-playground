/***********************************************************
 * Write a function to find the longest common 
 * prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 ***********************************************************/

/**
 * @param {array} a
 * @returns {string}
 */
const getLongestCommonPrefix = (a) => {
    if (!a || typeof a[0] !== 'string') {
        return
    }

    let prefix = a[0]
    for (let i=1; i<a.length; i++) {
        const word = a[i]
        for (let j=prefix.length; j>0; j--) {
            if (prefix.substring(0, j) !== word.substring(0, j)) {
                prefix = prefix.slice(0,-1)
            }
        }
    }

    return prefix
}

module.exports = getLongestCommonPrefix