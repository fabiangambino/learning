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
// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5

function mindPsAndQs(str) {
  var current_streak = 0;
  var longest_streak = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === "P" || char === "Q") {
      current_streak += 1;
      longest_streak = current_streak
    } else {
      current_streak = 0
    }
  }

  return longest_streak;
}






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
