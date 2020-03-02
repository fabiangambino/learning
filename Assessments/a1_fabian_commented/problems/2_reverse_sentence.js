/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  reversed = [];
  var words = sentence.split(" ");

  for (var i = words.length - 1; i >= 0; i -= 1) {
    var word = words[i];

    reversed.push(word);
  }
  return reversed.join(" ")
}

// great job in using split/join to reverse the order of each word
// try practicing this by using both `push` and `unshift`
// and see if there is a difference,
// do you think push has an advantage over unshift? 
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
