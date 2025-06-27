/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // Implementing the Sieve of Eratosthenes
  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter((x) => x).length;
};

module.exports = countPrimes;
