/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/
// takes an array of numbers -- > [1, 6, 3, 4, 2, 0]
// return an array of indices whose elements sum to a multiple of three
// sum of two elements is divisible by three
// find the element indexes and add them to arr as a pair
// return pairs arr


function divisibleByThreePairSum(array) {

  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j += 1) {
      var num2 = array[j];
      var sum = num1 + num2;

      if (sum % 3 === 0) {
        pairs.push([i, j])
      }
    }
  }
  return pairs;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;
