/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:
*******************************************************************************/
console.log(isPrime(-7)) // => false
console.log(isPrime(2)) // => true
console.log(isPrime(11)) // => true
console.log(isPrime(15)) // => false


function isPrime(number) {

  if (number < 2) {
    return false;
  } else if (number === 2) {                // the number === 2 case is actually
    return true;                            // being taken care of somewhere else in our code
  }                                      

  for (var i = 3; i <  number; i += 1) {    // we need to start i at 2
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// great work on isPrime
// although this code passed all the example test cases
// try calling isPrime(4) with this code, notice that isPrime(4) returns `true`
// we want to start our loop at `i = 2` instead of 3, 
// if a number has only 2 as an extra factor (like 4) our code will not work as expected
// the else if statement on line 17 is not necessary,
// it is being taken care of on line 26
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
