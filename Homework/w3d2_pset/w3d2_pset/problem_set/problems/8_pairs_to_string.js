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

// we want to loop through the outer array to access each inner array pair element
// and concat each item at index 0 by the number of times in index 1 to an empty string
// finally we want to return that string.


function pairsToString(arr) {

  for (var i = 0; i < arr.length; i += 1) {
    var pair = arr[i];
    var letter = pair[0];
    var num = pair[1];

    var 


  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
