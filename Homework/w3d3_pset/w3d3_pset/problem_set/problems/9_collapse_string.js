/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/
// console.log(collapseString('apple')); //=> 'aple'
// console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'
// console.log(collapseString('hello   app academy')); //=> 'helo ap academy'


function collapseString(str) {
  var result = ""

  for (var i = 0; i < str.length; i += 1) {
    var current_char = str[i];
    var next_char = str[i + 1];

    if (current_char !== next_char) {
      result += current_char;
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
