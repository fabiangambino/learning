/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/
// console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep')) //=> true
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye')) //=> false

function phraseFinder(words, phrase){
  var phrase_words = phrase.split(" ");
  var counter = 0

  for (var i = 0; i < phrase_words.length; i += 1) {
    var phrase_word = phrase_words[i];

    if (words.indexOf(phrase_word) !== -1) {
      counter += 1;
    }
  }
  if (counter !== 2) {
    return false;
  }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
