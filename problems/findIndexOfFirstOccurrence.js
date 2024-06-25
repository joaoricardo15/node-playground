/**
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */

const findIndexOfFirstOccurrence = (haystack, needle) => {
    // Validating input
    if (typeof haystack !== 'string' || !haystack.length || typeof needle !== 'string' || !needle.length) {
        return
    }

    const notFoundResponse = -1

    // Edge cases
    if (needle.length > haystack.length) {
        return notFoundResponse
    }
    if (needle.length === haystack.length) {
        return needle === haystack ? 0 : notFoundResponse
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        const subString = haystack.substring(i, i + needle.length)
        if (subString === needle)
            return i
    }

    return notFoundResponse
}

module.exports = findIndexOfFirstOccurrence