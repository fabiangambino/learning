/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
console.log(unique([1, 1, 2, 3, 3])) // => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var dedup = []

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (dedup.indexOf(num) === -1) {
      dedup.push(num);
    }
  }
  return dedup;
}

// function unique(array) {
//   var uniques = []
//
//   for (var i = 0; i < array.length; i += 1) {
//     var num = array[i];
//
//     if (array.indexOf(num) === 0) {
//       uniques.push(num)
//     }
//   }
//   return uniques;
// }

// great job on your if condition checking
// if `num` is not inside `dedup` then push in `num`
// for extra practice, try solving this using
// `array.indexOf(num) === something`
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
