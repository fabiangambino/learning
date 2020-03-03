/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:
***********************************************************************/
// console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'

function removeVowels(word) {               // helper function
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var word_sans_vowels = "";

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];

    if (vowels.indexOf(char) === -1) {
      // if the char is not a vowel
      word_sans_vowels += char;
    }
  }
  return word_sans_vowels;
}

function abbreviate(sentence) {
  var abbreviated = []
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i]

    if (word.length > 4) {
      var word_sans_vowels = removeVowels(word);
      abbreviated.push(word_sans_vowels);
    } else {
      abbreviated.push(word);
    }
  }
  return abbreviated.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
