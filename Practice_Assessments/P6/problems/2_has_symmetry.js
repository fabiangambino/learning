/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) => true
hasSymmetry([1, 2, 3, 3, 4, 1]) => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) => false
*******************************************************************************/

function hasSymmetry(array) {
  var forwards = "";
  var backwards = "";

  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    forwards += ele;
  }

  for (var i = array.length - 1; i >= 0; i--) {
    var ele = array[i];
    backwards += ele;
  }

  if (forwards === backwards) {
    return true;
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hasSymmetry;
