/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/
// count up to three unique vowels
// loop through string to check for vowels
// if found then increment counter by 1
// if counter >= 3 return true else return false

// console.log(threeUniqueVowels('delicious')); // => true
// console.log(threeUniqueVowels('bootcamp prep')); // => true
// console.log(threeUniqueVowels('bootcamp')); // => false
// console.log(threeUniqueVowels('dog')); // => false
// console.log(threeUniqueVowels('go home')); // => false


function threeUniqueVowels(string) {
  var vowels = "aeiou".split("");
  var words = string.split(" ");
  var hasVowels = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    for (var j = 0; j < word.length; j++) {
      var char = word[j];
      if (vowels.indexOf(char) !== -1 && hasVowels.indexOf(char) === -1) {
        hasVowels.push(char);
      }
    }
  }
  if (hasVowels.length >= 3) {
    return true;
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
