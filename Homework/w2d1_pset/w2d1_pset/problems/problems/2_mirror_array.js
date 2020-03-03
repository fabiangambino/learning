/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
  var mirrored = [];

  for (var i = 0; i < array.length; i += 1) {
    mirrored.push(array[i]);
  }
  for (var i = array.length - 1; i >= 0 ; i -= 1) {
    mirrored.push(array[i]);
  }
  return mirrored;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
