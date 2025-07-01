/* 
Problem Statement:
In many programming tasks, repeated calculations can be optimized to improve performance. 
One such technique is called memoization, which stores the results of expensive function calls in memory and returns the cached result when the same inputs occur again.

Task:
Write a function memoize that takes a single function fn as its argument and returns a new function that memoizes the results of fn.
The memoize function should optimize repeated function calls for the same input by storing previous results and returning these cached results instead of recalculating them.
Example Usage:
const slowFunction = (num) => {
  // Assume this function performs a computationally heavy operation
  return num * num; 
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(4)); // Outputs: 16
console.log(memoizedFunction(4)); // Outputs: 16 (This result should come from the cache)
console.log(memoizedFunction(5)); // Outputs: 25

Requirements:
- Ensure that your solution handles multiple types of arguments if possible.
- Consider edge cases and whether the input function could have varying numbers of parameters.
- The memoize function should work to any generic function.

Note: Using any built-in memoization libraries. 
*/

const memoize = (fn) => {
  const inputHistory = {}

  return (...input) => {
    if (inputHistory[input]) {
      return inputHistory[input]
    }

    const result = fn(...input)

    inputHistory[input] = result

    return result
  }
}

module.exports = memoize
