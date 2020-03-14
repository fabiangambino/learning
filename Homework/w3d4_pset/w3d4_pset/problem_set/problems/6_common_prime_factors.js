/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
***********************************************************************/
// console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22)); // => [ 11 ]
// console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]



function commonPrimeFactors(num1, num2) {
  var num1Primes = primeFactors(num1);
  var num2Primes = primeFactors(num2);
  var result = [];
  console.log(num1Primes);
  console.log(num2Primes);

  for (var i = 0; i < num1Primes.length; i++) {
    var ele1 = num1Primes[i];

    for (var j = 1; j < num2Primes.length; j++) {
      var ele2 = num2Primes[j];

      if (ele1 === ele2) {
        result.push(ele1);
      }
    }
  }

  return result;
}

// console.log(primeFactors(12));
// console.log(primeFactors(50));

function primeFactors(num) {
  var primes = [];

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      primes.push(i);
    }
  }

  return primes;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonPrimeFactors;
