/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/
var arr1 = [6, 3, 7, 2];
var arr2 = [0, 1, -5, 3, 6];
// console.log(min(arr1));
// console.log(max(arr1));
// console.log(min(arr2));
// console.log(max(arr2));
// console.log(minMaxProduct([6, 3, 7, 2])) // => 14
// console.log(minMaxProduct([0, 1, -5, 3, 6])) // => -30

function min(array) {
  var min = array[0];

  for (var i = 1; i < array.length; i += 1) {
    var num = array[i];

    if (num < min) {
      min = num;
    }
  }
  return min;
}

function max(array) {
  var max = array[0];

  for (var i = 1; i < array.length; i += 1) {
    var num = array[i];

    if (num > max) {
      max = num;
    }
  }
  return max;
}


function minMaxProduct(array){

  return min(array) * max(array);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
