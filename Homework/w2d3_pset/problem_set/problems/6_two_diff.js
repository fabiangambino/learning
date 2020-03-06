/***********************************************************************
Write a function `twoDiff(array)`, given an array of numbers, return a 2-D
array, where each of the sub array are indices of the two numbers such
that their difference is 2. If there are no such numbers, return an empty
array.

NOTE: The pairs are unique.
HINT: Account for negative difference too!

//Example:
// twoDiff([2, 3, 4, 6, 1, 7]) // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5]) // => [[0, 1], [1, 2], [3,4]]
// twoDiff([]) // => []
***********************************************************************/
// console.log(twoDiff([2, 3, 4, 6, 1, 7])) // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5])) // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([])) // => []

function twoDiff(array){

  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    var num1 = array[i];
    var num1_idx = array.indexOf(num1);

    for (var j = i + 1; j < array.length; j += 1) {
      var num2 = array[j];
      var num2_idx = array.indexOf(num2);

      if (num1 - num2 === 2 || num2 - num1 === 2) {
        result.push([num1_idx, num2_idx]);
      }
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDiff;
