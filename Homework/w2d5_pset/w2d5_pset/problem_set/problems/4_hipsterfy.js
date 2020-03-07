/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
// console.log(hipsterfy("proper")); // => "propr"
// console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
// console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
// console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
// console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"

// helper function takes a word and finds the last char that is a vowel
// then returns a new word of the chars sliced up to but excluding the last vowel
// concatenated with the rest of the chars following the vowel
function removeLastVowel(word) {
  var vowels = "aeiou".split("");

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];
    if (vowels.indexOf(char) !== -1) {
      var newWord = word.slice(0, i) + word.slice(i + 1);
      return newWord;
    }
  }
}

function hipsterfy(sentence) {
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    words[i] = removeLastVowel(word);
  }

  return words.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
