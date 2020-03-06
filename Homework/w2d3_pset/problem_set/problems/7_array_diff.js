/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The
function should return a new array, containing the elements of arr1 that
are not also in arr2.

Note: Assume both arrays have unique elements.
//Example:
// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// arrayDiff(array1, array2) // => [1, 2, 43 ,4]

// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// arrayDiff(array3, array4) // => ['a', 'ab', 'c', 'c']
***********************************************************************/

// loop through arr1 and peak in arr2 to see if that element exists in arr2.
// if not then push that element into a result array and return it

// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// console.log(arrayDiff(array1, array2)) // => [1, 2, 43 ,4]
//
// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// console.log(arrayDiff(array3, array4)) // => ['a', 'ab', 'c', 'c']

function arrayDiff(arr1, arr2){

  var diffs = [];

  for (var i = 0; i < arr1.length; i += 1) {
    var ele = arr1[i];

    if (arr2.indexOf(ele) === -1) {
      diffs.push(ele);
    }
  }
  return diffs;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayDiff;
