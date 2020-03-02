/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/
// 9 div 1 = 9
// 9 div 2 = 4.5
// 9 div 3 = 3

function isSquare(number) {

  for (var i = 1; i < number; i += 1) {
    if (number / i === i) {
      return true;
    }
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isSquare;
