/*
 * Given a list of reservations, each with a hotelId, a start and end date,
 * return the hotels with more reservations than average of 7 last days.
 */

/**
 * Complexity O(N*D)
 * N = Number of reservations
 * D = Difference between ealiest and latest reservation dates
 *
 * @param {Array} reservations - {startDate, endDate}
 * @returns {Array} - An array of hotelIds with more reservations than average of 7 last days
 */
const getMostBusyDates = (reservations) => {
  // Extract the earliest and latest dates from all reservations
  const earliestDate = Math.min(...reservations.map((x) => x.startDate))
  const latestDate = Math.max(...reservations.map((x) => x.endDate))

  // Declare array and fulfill it all reservationDates (inclusive)
  const reservationDates = Array(latestDate - earliestDate + 1)
    .fill()
    .map((_, i) => i + earliestDate)

  // Declare an array with counters per reservation day, initiated with zeros
  const totalReservationsPerDate = reservationDates.reduce(
    (prev, curr) => ({ ...prev, [curr]: 0 }),
    {}
  )

  // Loop through the reservations
  for (let i = 0; i < reservations.length; i++) {
    const reservation = reservations[i]

    // Loop through the start of reservation til its end
    for (let j = reservation.startDate; j <= reservation.endDate; j++) {
      // Increment reservation date counter
      totalReservationsPerDate[j]++
    }
  }

  // Declare empty array to add the most busy days
  const mostBusyDates = []

  for (let i = 7; i < reservationDates.length; i++) {
    const reservationDate = reservationDates[i]

    // Calculate reservation average of last 7 days
    const average =
      Object.values(totalReservationsPerDate)
        .slice(i - 7, i)
        .reduce((prev, curr) => prev + curr, 0) / 7

    // Check whether the total amount of reservations in a specific date is higher than average of last 7 days
    if (totalReservationsPerDate[reservationDate] > average) {
      mostBusyDates.push(reservationDates[i])
    }
  }

  return mostBusyDates
}

module.exports = {
  mostBusyDays: getMostBusyDates,
}
