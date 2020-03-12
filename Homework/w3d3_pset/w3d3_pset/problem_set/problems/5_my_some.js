/***********************************************************************
Write a function `mySome(arr, cb)` that takes in an array and a callback.
The function should call the callback for every element of the array.
The function should return true if the callback returns true when passed
in any element of the array. The function should return false otherwise.

Example:

function isNegative(num) {
  return num < 0;
}

mySome([10, -10, 11, 4], isNegative); // => true
mySome([-10, -10, -11, -4], isNegative); // => true
mySome([2, 4, 6, 8], isNegative); // => false
***********************************************************************/
// console.log(mySome([10, -10, 11, 4], isNegative)); // => true
// console.log(mySome([-10, -10, -11, -4], isNegative)); // => true
// console.log(mySome([2, 4, 6, 8], isNegative)); // => false

function isNegative(num) {
  return num < 0;
}

function mySome(arr, cb) {
  var bools = [];

  for (var i = 0; i < arr.length; i += 1) {
    var num = arr[i];
    bools.push(cb(num));
  }

  if (bools.indexOf(true) > -1) {
    return true;
  } else {
    return false;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mySome;
