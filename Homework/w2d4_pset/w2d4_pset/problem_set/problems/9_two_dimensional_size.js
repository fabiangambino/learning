/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

// console.log(arr1.length);
// console.log(twoDimensionalSize(arr1)); // => 9

// first we set a var count = 0
// next we are going to loop through the outer array to access each inner array
// we can get the number of items in each inner array by its length
// we take that length and add it to our counter on each iteration
// finally we return the count

function twoDimensionalSize(array) {
  var count = 0;

  for (var i = 0; i < array.length; i += 1) {
    var inner_arr = array[i];
    count += inner_arr.length;
  }
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalSize;
