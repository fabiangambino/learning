/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/
console.log(reverb('running')); // => 'runninging'
console.log(reverb('wild')); // => 'wildild'
console.log(reverb('debugged')); // => 'debuggeded'
console.log(reverb('my')); // => 'my'


// function lastChars(word) {                               // MY SOLUTION
//   var vowels = "aeiou".split("");
//
//   for (var i = word.length - 1; i >= 0; i -= 1) {
//     var char = word[i];
//
//     if (vowels.indexOf(char) !== -1) {
//       var newWord = word.slice(i);
//       return newWord;
//     }
//   }
// }
//
// function reverb(word) {
//
//   if (lastChars(word) !== undefined) {
//     return word + lastChars(word);
//   } else {
//     return word;
//   }
// }

function reverb(word) {
  var vowels = "aeiou".split("");                           // THEIR SOLUTION

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char) !== -1) {
      var newWord = word + word.slice(i);
      return newWord;
    }
  }
  return word;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
