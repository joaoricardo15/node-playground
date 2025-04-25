const { getHotelReviewScores } = require('../hotelReviewScores')

describe('getHotelReviewScores', () => {
    test('should return the ranked array of hotelIds', () => {
        const positiveKeyWords = "good great excellent"
        const negativeKeyWords = "bad awful terrible"
        const hotelIds = [1, 2, 3]
        const reviews = [
            "The hotel was good, but the service was bad.",
            "The hotel was great, but the service was awful.",
            "The hotel was excellent and the food was great, but the service was terrible."
        ]
        const k = 2
        
        expect(getHotelReviewScores(
            positiveKeyWords,
            negativeKeyWords,
            hotelIds,
            reviews,
            k
        )).toStrictEqual([3, 1])
    })
})