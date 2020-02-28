// Define a function `fizzBuzz(max)` that takes a number and prints every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

function fizzBuzz(max) {
  for (var i = 0; i < max; i++) {
    var isDivByEither = i % 3 === 0 || i % 5 === 0;
    var isDivByBoth = i % 3 === 0 && i % 5 === 0;

    // if (isDivByEither && !isDivByBoth) {
    //   console.log(i);
    // }
    if (isDivByBoth) {
      continue;
    } else if (isDivByEither) {
      console.log(i);
    }
  }
}


// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
// console.log(isPrime(2));        // => true
// console.log(isPrime(10));       // => false
// console.log(isPrime(11));       // => true
// console.log(isPrime(9));        // => false
// console.log(isPrime(2017));     // => true

// 1. a prime number has only 2 factors: 1 and itself
// 2. lowest prime number is 2

function isPrime(num) {
  // not prime - less 2, more than 2 factors
  if (num < 2) {
    return false;
  }

  // 9      2 3 4 5 6 7 8
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


















//.
