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
  } else if (number === 2) {
    return true;
  }

  for (var i = 3; i <  number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
