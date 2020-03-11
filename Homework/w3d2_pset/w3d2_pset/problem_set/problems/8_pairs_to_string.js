/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/
// loop through the array to access each inner element pair
// create a var to access each letter and a different var for each number
// we need to concat the letter to an empty string by the number of times
// finally we return the string

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

function pairsToString(arr) {
  var specialString = ""

  for (var i = 0; i < arr.length; i += 1) {
    var pair = arr[i];
    var letter = pair[0];
    var number = pair[1];

    for (var j = 1; j <= number; j += 1) {
      specialString += letter;
    }
  }

  return specialString;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
