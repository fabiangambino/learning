/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
// console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
// console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
// console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
// console.log(nextTwoPrimes(97)); // => [ 101, 103 ]

// loop range starting at num + 1 and loop while results array length < 2
// use a helper function to determine if the current number is prime
// each time we find a prime number put it into a results array
// return results array finally


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nextTwoPrimes(num) {
  var results = [];

  for (var i = num + 1; results.length < 2; i += 1) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
