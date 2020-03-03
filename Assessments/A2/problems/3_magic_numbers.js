/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

console.log(magicNumbers(20)) // => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {

  var nums_to_max = []

  for (var i = 0; i < max; i += 1) {
    var isDivByEither = (i % 4 === 0 || i % 6 === 0)
    var isDivByBoth = (i % 4 === 0 && i % 6 === 0)

    if (isDivByEither && !isDivByBoth) {
      nums_to_max.push(i);
    }
  }
  return nums_to_max;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
