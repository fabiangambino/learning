/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
  var min = array[0];
  var max = array[0];

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  return max - min;
}

// excellent work on minMaxDiff
// for this problem, we can assume that the array has at least 2 numbers
// why is this signficant?
// does it matter if we used an `if...else if...` vs. two `if` conditions?
// is one more beneficial than the other?
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
