/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/
var arr1 = [
  [1,2,4,5],
  [2,7,4],
  [1,4,5,2,7]
]

console.log(countInnerElement(arr1)) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

function countInnerElement(arr) {

  var num_counts = {};


  for (i = 0; i < arr.length; i += 1) {
    var inner_arr = arr[i];
    var sum = 0

    for (j = 0; j < inner_arr.length; j += 1) {
        var num = inner_arr[j];

        if (num_counts[num] === undefined) {
          num_counts[num] = num;
        }
    }

  }
  return num_counts;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countInnerElement;
