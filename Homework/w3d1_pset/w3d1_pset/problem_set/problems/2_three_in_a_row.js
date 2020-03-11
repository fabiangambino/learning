/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/
// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;


function threeInARow(arr) {                          
  var count = 1;

  for (var i = 0; i < arr.length; i += 1) {
    var num = arr[i];
    var next_num = arr[i + 1];

    if (num === next_num) {
      count += 1;
    }
  }
  if (count === 3) {
    return true;
  }
  return false;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
