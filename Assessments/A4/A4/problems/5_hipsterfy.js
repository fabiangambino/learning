/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"

// console.log(removeLastVowel("proper")); // => "propr"


function removeLastVowel(word) {
  var vowels = "aeiou";

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i];

    if (vowels.indexOf(char) !== -1) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}


function hipsterfy(sentence) {
  var words = sentence.split(" ");
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    var newWord= removeLastVowel(word);
    newWords.push(newWord);
  }

  return newWords.join(" ");
}






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
