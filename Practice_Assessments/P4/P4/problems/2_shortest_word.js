/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/
// console.log(shortestWord('app academy is cool')) //=> 'is'
// console.log(shortestWord('bootcamp prep')) //=> 'prep'

function shortestWord(sentence) {
  var words = sentence.split(" ");
  var shortestWord = words[0];

  for (var i = 1; i < words.length; i += 1) {
    var word = words[i];

    if (word.length < shortestWord.length) {
      shortestWord = word;
    }

  }
  return shortestWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
