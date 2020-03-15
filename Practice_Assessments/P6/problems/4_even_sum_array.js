/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/
// console.log(evenSumArray([6, 7, 5])) //=> [ 12, 12, 6 ]
// console.log(evenSumArray([2, 8, 3, 5])) //=> [ 2, 20, 2, 6 ]

function evenSumArray(array) {
  //ENGLISH DOESN"T MAKE ANY SENSE NOT SURE WHAT I"M BEING ASKED
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var sum = 0;

    for (var j = 1; j <= num; j++) {
      if (j % 2 === 0) {
        sum += j;
      }
    }
    result.push(sum);
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
