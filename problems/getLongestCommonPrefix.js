/***********************************************************
 * Write a function to find the longest common
 * prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 ***********************************************************/

/**
 * @param {string[]} arr
 * @returns {string}
 */
const getLongestCommonPrefix = (arr) => {
  if (!arr || typeof arr[0] !== "string") {
    return;
  }

  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    for (let j = prefix.length; j > 0; j--) {
      if (prefix.substring(0, j) !== word.substring(0, j)) {
        prefix = prefix.slice(0, -1);
      }
    }
  }

  return prefix;
};

module.exports = getLongestCommonPrefix;
