/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:
***********************************************************************/
// console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8]


function peakFinder(array) {

  var peak_indexes = [];
  var first = array[0];
  var last = array[array.length -1];

  if (first > array[1]) {
    peak_indexes.push(0);
  }

  for (var i = 1; i < array.length; i += 1) {
      var num = array[i];
      if (num > array[i - 1] && num > array[i + 1]) {
        peak_indexes.push(i);
      }
  }
  if (last > array[array.length - 2]) {
    peak_indexes.push(array.length -1);
  }
  return peak_indexes;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;
