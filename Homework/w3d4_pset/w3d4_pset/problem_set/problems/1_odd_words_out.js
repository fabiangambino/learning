/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
// split the sentence into an array of words
// loop through the array and check if each word.length is not odd and push
// them into a results array
// finally join the results array on space and return it

// console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'
// console.log(oddWordsOut('what is the answer')); // => 'what is answer'

function oddWordsOut(sentence) {
  var result = [];
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i ++) {
    var word = words[i];

    if (word.length % 2 === 0) {
      result.push(word);
    }
  }

  return result.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
