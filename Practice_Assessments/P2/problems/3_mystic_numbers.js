/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/
//
// we will loop in reverse and push in the numbers divisible by either but not both
// this way they will be added in sequential reverse order


function mysticNumbers(max) {

  var mystic_nums = []

  for (var i = max; i >= 4; i -= 1) {
      var isDivByEither = (i % 4 === 0 || i % 6 === 0);
      var isDivByBoth = (i % 4 === 0 && i % 6 === 0);

      if (isDivByEither && !isDivByBoth) {
        mystic_nums.push(i);
      }
  }
  return mystic_nums;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mysticNumbers;
