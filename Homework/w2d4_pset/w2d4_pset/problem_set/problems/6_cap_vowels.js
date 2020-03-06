/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/
// console.log(capVowels('hello world')); // => 'hEllO wOrld'
// console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'
// console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'



function capVowels(string) {
  var vowels = ["a", "e", "i", "o", "u"]
  var letters = string.toLowerCase().split("");

  for (var i = 0; i < letters.length; i += 1) {
    var letter = letters[i];

    if (vowels.indexOf(letter) !== -1) {
      letters[i] = letter.toUpperCase();
    }
  }
  return letters.join("");
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
