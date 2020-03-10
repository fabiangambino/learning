/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/
// console.log(longestWord('app academy is cool')); // => 'academy'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('bootcamp')); // => 'bootcamp'
// console.log(longestWord('')); // => ''

// separate the string into individual words and count the length of each word
// return the word with the longest length
// if the word lengths are equal return the last one

function longestWord(sentence) {
  var words = sentence.split(" ");                    // splitting up sentence into individual words
  var longestWord = words[0];                         // we start with longest word at first index

  for (var i = 0; i < words.length; i += 1) {         // loop through the array of words to access each word
    var current_word = words[i];                      // create var to make code more easily readable

    if (current_word.length >= longestWord.length) {  // check if the current word length is greater or equal to longestWord
      longestWord = current_word;                     // if lenght is greater reassign longest word
    }
  }

  return longestWord;                                 // return the final value of longestWord
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
