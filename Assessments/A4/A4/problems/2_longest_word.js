/*******************************************************************************
Write a function estWord(sentence) that returns the est word of a sentence.
If there are ties, the function should return the later word.

Examples:

estWord('app academy is cool'); // => 'academy'
estWord('hate having hungry hippos'); // => 'hippos'
estWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/
console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('bootcamp')); // => 'bootcamp'
console.log(longestWord('')); // => ''



// function longestWord(sentence) {                      //// NOT FINISHED
//   var words = sentence.split(" ");
//   var wordLengthsArr = [];
//   var longestWordIdx = null;
//
//   for (var i = 0; i < words.length; i += 1) {
//     var word = words[i];
//     wordLengthsArr.push(word.length);
//   }
//
//   var current_item = wordLengthsArr[0];
//   for (var i = 0; i < wordLengthsArr.length; i += 1) {
//     var item = wordLengthsArr[i];
//     if (item > current_item) {
//       current_item = item;
//     }
//   }
//
// }

function longestWord(sentence) {
  var longest = "";
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
