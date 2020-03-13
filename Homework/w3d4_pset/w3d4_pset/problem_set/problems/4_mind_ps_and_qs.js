/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


function mindPsAndQs(str) {
  var current_streak = 0;
  var longest_streak = 0;
  var specialChars = "PQ"

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var next = str[i + 1];

    if (specialChars.indexOf(char) === -1) {
      continue;
    } else if (specialChars.indexOf(char) !== -1) && (specialChars.indexOf(char) !== -1) {

    }
  }
  return current_str
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
