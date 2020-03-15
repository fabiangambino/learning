/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/
// console.log(vowelShift('bootcamp')); // => 'buutcemp'
// console.log(vowelShift('hello world')); // => 'hillu wurld'
// console.log(vowelShift('on the hunt')); // => 'un thi hant'


function vowelShift(sentence) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var words = sentence.split(" ");
  var newWord = "";
  var newSentence = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    for (var j = 0; j < word.length; j++) {
      var char = word[j];

      if (vowels.indexOf(char) === -1) {
        newWord += char;
      } else if (vowels.indexOf(char) === vowels.length - 1) {
        newWord += vowels[0];
      } else {
        newWord += vowels[vowels.indexOf(char) + 1]
      }
    }
    newSentence.push(newWord);
    newWord = "";
  }

  return newSentence.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
