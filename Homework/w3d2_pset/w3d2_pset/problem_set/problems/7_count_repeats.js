/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/
// console.log(countRepeats('alvin')); //=> 0
// console.log(countRepeats('aaaalvin')); //=> 1
// console.log(countRepeats('pops')); //=> 1
// console.log(countRepeats('mississippi')); //=> 3
// console.log(countRepeats('hellobootcampprep')); //=> 4

// loop through the string and check to see if any chars appear more
// than once. if we find a char that repeats more than once we can
// add it to a repeated array. we should make sure that if that char
// already exists in the array, we do not add it again
// finally return the count of the repeated chars using repeated.length

function countRepeats(string) {
  var repeated = [];

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];

    if (charCount(string, char) >= 2 && repeated.indexOf(char) === -1){
      repeated.push(char);
    }
  }

  return repeated.length;
}

function charCount(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i += 1) {
    var currentChar = string[i];

    if (currentChar === char) {
      count += 1;
    }
  }

  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
