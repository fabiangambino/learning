/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/
// console.log(favoriteWord('p', 'sinful caesar sipped his snifter')); // => 'sipped'
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter')); //=> 'caesar'
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter')); //=> 'sinful'
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter')); //=> ''


function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(" ");
  var result = "";
  var most = 0;

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (letterCount(word, favoriteLetter) > most) {
      most = letterCount(word, favoriteLetter);
      result = word;
    }
  }

  return result;
}


function letterCount(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];

    if (letter === char) {
      count += 1
    }
  }

  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
