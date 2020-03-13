/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/
// "aeiou"
//  if the word has an a vowel in it ... place the vowel in a hasVowels array
//  only if that vowel doesn't already exist in the hasVowels array
//  if count of hasVowels array === 5 then return true .... else return false

console.log(hasAllVowels('have you gone biking?')); // => true
console.log(hasAllVowels('get out of the way, silly')); // => true
console.log(hasAllVowels('bootcamp prep')); // => false
console.log(hasAllVowels('hello world')); // => false

function hasAllVowels(str) {
  var hasVowels = [];
  var vowels = "aeiou".split("");
  var joinedWords = str.split(" ").join("");

  for (var i = 0; i < joinedWords.length; i ++) {
    var char = joinedWords[i];

    if (vowels.indexOf(char) !== -1 && hasVowels.indexOf(char) === -1) {
      hasVowels.push(char);
    }
  }

  if (hasVowels.length === 5) {
    return true;
  } else {
    return false;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
