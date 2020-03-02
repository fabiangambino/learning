/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
  var array = []

  for (var i = start; i <= end; i += 1) {
    array.push(i);
  }
  return array;
}

// excellent work on `range`
// while calling our array `array` totally works 
// as a rule of thumb, we always want to practice good variable naming conventions
// try giving our variables a more descriptive name :)
// keep up the great work
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
