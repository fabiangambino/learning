/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

function myIndexOf(array, ele){

  for (var i = 0; i < array.length; i += 1) {
    var char = array[i];

    if (char === ele) {
      return i;
    }
  }
  
  return -1;
}

// excellent work on myIndexOf
// styling and indentation looks awesome as well
// with a small note, there is no need for a vertical line space on line 16 :)
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
