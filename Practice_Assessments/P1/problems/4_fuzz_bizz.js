/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
  var numbers = [];

  for (var i = 2; i < max; i += 1) {
    var isDivByEither = (i % 2 === 0) || (i % 7 === 0);
    var isDivByBoth = (i % 2 === 0) && (i % 7 === 0);

    if (isDivByEither && !isDivByBoth) {
      numbers.push(i);
    }
  }
  return numbers;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fuzzBizz;
