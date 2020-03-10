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
// console.log(removeLastVowel("try")); // => "propr"

// separate the string into an array of words using split
// loop through the array of words to access each word
// loop through that word in referse to find the last vowel
// at the last vowel we can use slicing to return the word without last vowel (helper function helpful)
// be sure to have a condition to account for words with no vowels
// once all words have last vowels removed we can join them together by space and return


function hipsterfy(sentence) {
  var words = sentence.split(" ");            // split the sentence into individual words

  for (i = 0; i < words.length; i += 1) {     // loop through the words array
    var word = words[i];                      // create var to refer to each word
    words[i] = removeLastVowel(word);         // reassign value at index to thew newWord
  }

  return words.join(" ");                     // joined the words back into a string
}

function removeLastVowel(word) {
  var vowels = 'aeiou'                                    // created a vowels string for checking

  for (var i = word.length; i >= 0; i -= 1) {             // loop through word backwards starting at last index
    var char = word[i];                                   // create var to refer to individual chars

    if (vowels.indexOf(char) !== -1) {                    // check if char is found in vowels string
      var newWord = word.slice(0, i) + word.slice(i + 1); // assign newWord var to slice of word excluding last vowel
      return newWord;                                     // return newWord before it can look for other vowels
    }
  }
  return word;                                            // if word has no vowels return word
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
