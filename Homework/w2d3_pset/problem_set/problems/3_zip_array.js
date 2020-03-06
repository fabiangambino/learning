/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/

// function zipArray(arr1, arr2) {
//
//   var pairs = [];
//
//   for (var i = 0; i < arr1.length; i += 1) {
//     var letter = arr1[i];
//
//     for (var j = 0; j < arr2.length; j += 1) {
//       var num = arr2[j];
//
//       if (i === j) {
//         pairs.push([letter, num])
//       }
//     }
//   }
//   return pairs;
// }

// don't need to loop twice because the array lengths are the same so we can access
// each array's sister element by accessing the same index

function zipArray(arr1, arr2) {
  var zipped = [];

  for (var i = 0; i < arr1.length; i += 1) {
    var ele1 = arr1[i];
    var ele2 = arr2[i];

    zipped.push([ele1, ele2]);
  }
  return zipped;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = zipArray;
