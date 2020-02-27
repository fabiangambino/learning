//logBetween

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

function logBetween(lowNum, highNum) {
  for (var i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

//logBetweenStepper

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
//logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
//logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15


function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i += step) {
    console.log(i);
  }
}

// printFives

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
//printFives(20) // prints
// 0
// 5
// 10
// 15

//function printFives(max) {
//  for (var i = 0; i < max; i += 5) {
//    console.log(i);
//  }
//}

function printFives(max) {
  for (var i = 0; i < max; i += 1) {
    if ( i % 5 === 0)
      console.log(i);
    }
}

// printReserve

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max) {
  for (var i = max - 1; i <= max && i > min; i -= 1) {
    console.log(i);
  }
}

// sumNums

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// console.log(sumNums(4)); // => 10
// console.log(sumNums(10)); // => 55
// console.log(sumNums(365)); // => 66795

function sumNums(max) {
  var sum = 0
  for (var i = 1; i >=1 && i <= max; i +=1) {
    sum += i
  }
  return sum
}

// isFactorOf

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// console.log(isFactorOf(6,2)); // => true
// console.log(isFactorOf(-6, 2)); // => true
// console.log(isFactorOf(5,0)); // => false
// console.log(isFactorOf(22, 7)); // => false

function isFactorOf(number, factor) {
  return number % factor === 0
}

// fizzBuzz

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
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
    for (var i = 0; i >= 0 && i < max; i += 1) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log(i);
      }
    }
}

// isPrime

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

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
