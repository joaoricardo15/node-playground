/**
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * Return the answer in any order. A mapping of digits to letters
 * (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  // If no digits
  if (!digits) {
    return [];
  }

  const combinations = [];
  const addLetter = (substring) => {
    if (substring.length === digits.length) {
      combinations.push(substring);
      return;
    }

    switch (digits[substring.length]) {
      case "2":
        addLetter(substring + "a");
        addLetter(substring + "b");
        addLetter(substring + "c");
        break;
      case "3":
        addLetter(substring + "d");
        addLetter(substring + "e");
        addLetter(substring + "f");
        break;
      case "4":
        addLetter(substring + "g");
        addLetter(substring + "h");
        addLetter(substring + "i");
        break;
      case "5":
        addLetter(substring + "j");
        addLetter(substring + "k");
        addLetter(substring + "l");
        break;
      case "6":
        addLetter(substring + "m");
        addLetter(substring + "n");
        addLetter(substring + "o");
        break;
      case "7":
        addLetter(substring + "p");
        addLetter(substring + "q");
        addLetter(substring + "r");
        addLetter(substring + "s");
        break;
      case "8":
        addLetter(substring + "t");
        addLetter(substring + "u");
        addLetter(substring + "v");
        break;
      case "9":
        addLetter(substring + "w");
        addLetter(substring + "x");
        addLetter(substring + "y");
        addLetter(substring + "z");
        break;
    }
  };

  addLetter("");

  return combinations;
};

module.exports = letterCombinations;
