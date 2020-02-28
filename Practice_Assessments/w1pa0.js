
// average

/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
*/
// console.log(average(10, 20)); // => 15
// console.log(average(5, 7)); // => 6
// console.log(average(24, 32)); // => 28


function average(num1, num2) {
  var sum = num1 + num2
  var avg = sum / 2
  return avg
}

// tripler

/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
*/
// console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
// console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]


function tripler(array) {
  var triple = []
  for (var i = 0; i < array.length; i += 1) {
    triple.push(array[i] * 3)
  }
  return triple
}

// oddRange

/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
*/
// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6)); // => [ 1, 3, 5 ]


function oddRange(end) {
  var arr = []
  for (var i = 1; i <= end; i += 2) {
    arr.push(i);
    }
  return arr
}
