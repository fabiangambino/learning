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
// first we want to split the sentence into an array of words
// next we want to loop the the array by word and count the number of times
// the letter appears in the word and store count in a letterCount array
// later we will loop through the array to return the word at the index of greatest count
// 
//

console.log(favoriteWord('p', 'sinful caesar sipped his snifter')); // => 'sipped'
console.log(favoriteWord('a', 'sinful caesar sipped his snifter')); //=> 'caesar'
console.log(favoriteWord('s', 'sinful caesar sipped his snifter')); //=> 'sinful'
console.log(favoriteWord('x', 'sinful caesar sipped his snifter')); //=> ''


function favoriteWord(favoriteLetter, sentence) {






}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
