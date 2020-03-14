/***********************************************************************
Write a function `commonisPrime` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonisPrime(12, 50); // => [ 2 ]
commonisPrime(6, 24); // => [ 2, 3 ]
commonisPrime(11,22); // => [ 11 ]
commonisPrime(45, 60); // => [ 3, 5 ]
***********************************************************************/
// console.log(commonisPrime(6, 24)); // => [ 2, 3 ]
// console.log(commonisPrime(11,22)); // => [ 11 ]
// console.log(commonisPrime(45, 60)); // => [ 3, 5 ]



function commonisPrime(num1, num2) {
  common_primes  = [];                                                    // store prime factors in common_primes

  for (var i = 2; i <= num1; i++) {                                       // loop up from smallest prime up to num1 inclusive
    if (num1 % i === 0 && isPrime(i) && num2 % i === 0 && isPrime(i)) {   // checks if i is factor of both nums and if factor is prime
      common_primes.push(i);                                              // pushes prime factor into common_primes array
    }
  }

  return common_primes;                                                   // returns array of common primes
}

// function returns true if a number is prime false otherwise
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonisPrime;
