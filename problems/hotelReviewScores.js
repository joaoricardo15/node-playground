/**
 * Given a list of hotel reviews, return the top k hotels with the highest review scores.
 * For each word in the review, if it is in the positiveWords list, add 3 to the score.
 * If it is in the negativeWords list, subtract 1 from the score.
 * Reviews are space separated strings containing only alphabetic characters + '.' and ','.
 * Match of words should be case insensitive.
 * If two hotels have the same score, return the one with the smaller id.
 */

/**
 * @param {string} positiveKeyWords - space separeted string
 * @param {string} negativeKeyWords - space separeted string
 * @param {number[]} hotelIds
 * @param {string[]} reviews
 * @param {number} k
 */

function getHotelReviewScores(
  positiveKeyWords,
  negativeKeyWords,
  hotelIds,
  reviews,
  k,
) {
  // Create set of unique keyWords (for better performance)
  positiveKeyWords = new Set(positiveKeyWords.toLowerCase().split(" "));
  negativeKeyWords = new Set(negativeKeyWords.toLowerCase().split(" "));

  // Clear reviews -> Convert to array of lower case words, and delete all '.' and ','
  reviews = reviews.map((x) => x.toLowerCase().replace(/[.,]/g, "").split(" "));

  // Declare variable for all the hotels' counters
  const hotelScores = hotelIds.reduce(
    (prev, curr) => ({ ...prev, [curr]: 0 }),
    {},
  );

  // Loop through the reviews
  for (let i = 0; i < reviews.length; i++) {
    // Extrat array of words for each review
    const reviewWords = reviews[i];

    // Extract hotelId of review
    const hotelId = hotelIds[i];

    // Loop through the array of words
    for (let j = 0; j < reviewWords.length; j++) {
      // Extract word
      const reviewWord = reviewWords[j];

      // If word is in positiveKeyWords, increment counter
      if (positiveKeyWords.has(reviewWord)) {
        hotelScores[hotelId] = hotelScores[hotelId] + 3;
      }

      // If word is in positiveKeyWords, decrement counter
      if (negativeKeyWords.has(reviewWord)) {
        hotelScores[hotelId] -= 1;
      }
    }
  }

  // Sort hotel scores
  const sortedScores = Object.keys(hotelScores)
    .map((x) => Number(x))
    .sort((a, b) =>
      hotelScores[a] === hotelScores[b]
        ? a - b
        : hotelScores[b] - hotelScores[a],
    );

  // Return sorted counters until k
  return sortedScores.slice(0, k);
}

module.exports = {
  getHotelReviewScores,
};
