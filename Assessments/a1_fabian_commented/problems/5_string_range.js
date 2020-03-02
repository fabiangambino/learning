/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/

function stringRange(min, max, step) {
  var array = []

  for (var i = min; i <= max; i += step) {
    array.push(i);
  }
  return array.join("");
}

// great work in joining each element back on ""

// for extra practice, instead of using an array, try 
// instantiating and "" and practice string concatenation as well

// keep up the great work :)
// -AL
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange;
