/**
 * 
 * @param {number} n 
 * @returns {number}
 */

const getDouble = (n) => {
    if (typeof n !== 'number') {
        return null
    }

    return 2*n
}

module.exports = getDouble