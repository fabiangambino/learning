/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {

  var reverse_seq = [];

  for (var i = end - 1; i > start; i -= 1) {
    if (i !== end && i !== start) {
      reverse_seq.push(i);
    }
  }
  return reverse_seq;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
