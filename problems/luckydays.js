/**
 * Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive).
 * To see if a date is lucky:
 *   Firstly, sequentially concatinate the date, month and year, into a new integer  erasing the leading zeroes.
 *   Now if  is divisible by either 4 or 7, then we call the date a lucky date.
 *
 * For example, let's take the date "02-08-2024".
 * After concatinating the day, month and year, we get = 2082024. As is divisible by so the date "02-08-2024" is called a lucky date.
 *
 * Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.
 *
 * Note: You can modify at most five lines in the given code and you cannot add or remove lines to the code.
 * To restore the original code, click on the icon to the right of the language selector.
 */

const monthTotalDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const updateLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    monthTotalDays[2] = 29
  } else {
    monthTotalDays[2] = 28
  }
}

const findPrimeDates = (d1, d2) => {
  // Declare a variable to store the lucky dates
  let luckyDates = 0

  // Declare a variable to store the date that needs to be compared
  let [day, month, year] = getNumericDateProperties(d1)

  // Extract final dates for comparison
  const [finalDay, finalMonth, finalYear] = getNumericDateProperties(d2)

  while (true) {
    // Transform the current date into concateneted number
    const numericDate = (day * 100 + month) * 10000 + year

    // Apply lucky date criteria and eventually add the date to the lucky dates
    if (numericDate % 4 === 0 || numericDate % 7 === 0) {
      luckyDates++
    }

    // If reached final date, break
    if (year === finalYear && month === finalMonth && day === finalDay) {
      break
    }

    // Increment the current date
    day++
    if (day > monthTotalDays[month]) {
      day = 1
      month++
      if (month > 12) {
        month = 1
        year++

        // Update leap year
        updateLeapYear(year)
      }
    }
  }

  return luckyDates
}

const getNumericDateProperties = (date) => {
  const [day, month, year] = date.split('-')
  return [Number(day), Number(month), Number(year)]
}

module.exports = findPrimeDates
