/**
 *
 * @param {string} s
 * @returns {string}
 */
const stringCompression = (s) => {
  if (!s) {
    return ''
  }

  let i,
    j,
    counter = 0
  for (i = 0; i < s.length; ) {
    for (j = i + 1; s[i] === s[j]; j++) {
      counter++
    }

    if (counter === 0) {
      i++
    } else {
      s = s.slice(0, i + 1) + (counter + 1) + s.slice(j)
      i = i + 1 + (counter + 1).toString().length
      counter = 0
    }
  }

  return s
}

module.exports = stringCompression

/**
 * i = 0
 * j = 1
 * s = aabbbbbbbbbbcc
 *      ij
 * counter = 1
 * j = 2
 * s = aabbbbbbbbbbcc
 *      i j
 *
 * s => a2bbbbbbbbbbcc
 * i => 0 + 1 + 1
 * -------------------------
 * i = 2
 * j = 3
 * s = a2bbbbbbbbbbcc
 *       ij
 * counter = 1
 * ...
 * j = 12
 * s = a2bbbbbbbbbbcc
 *       i         j
 * counter = 10
 *
 * s => a2b10cc
 * i => 2 + 1 + 2
 * -------------------------
 * i = 5
 * j = 6
 * s = a2b10cc
 *          ij
 * counter = 1
 * j = 7
 * s = a2b10cc
 *          i j
 *
 * s => a2b10
 * i => 5 + 1 + 1
 */
