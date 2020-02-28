/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  var array = []

  for (var i = 0; i < arr1.length; i += 1) {
    for (var idx2 = 0; idx2 < arr2.length; idx2 += 1) {
      if (arr1[i] === arr2[idx2]) {
        array.push(arr1[i]);
      }
    }
  }
  return array;
}

// create a results array that can be returned later
// compare each element to every element in the other array
// if the element exists add it to the results array
// return the results array

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
