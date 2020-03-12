/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/
// console.log(signFlipCount([5, 6, 10, 3])); //=> 0
// console.log(signFlipCount([-12, 0, -3, -5])); //=> 0
// console.log(signFlipCount([-12, 10, -3, -5])); //=> 2
// console.log(signFlipCount([1, -2, -3, -4])); //=> 1
// console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3

function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length; i += 1) {
    var current_num = numbers[i];
    var next_num = numbers[i + 1];

    if (isNegative(current_num) && isPositive(next_num)) {
      count += 1;
    } else if ((isPositive(current_num)) && isNegative(next_num)) {
      count += 1
    }
  }
  
  return count;
}

function isNegative(num) {
  return num < 0;
}

function isPositive(num) {
  return num > 0;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = signFlipCount;
