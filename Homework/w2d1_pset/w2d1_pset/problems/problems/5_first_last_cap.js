/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:
***********************************************************************/
console.log(firstLastCap('hello BOOTCAMP PrEp')); // =>'HellO BootcamP PreP'
console.log(firstLastCap('what is on the radio')); // =>'WhaT IS ON ThE RadiO'


function firstLastCap(sentence) {

  var result = []
  var words = sentence.split(" ");

  for (i = 0; i < words.length; i += 1) {     // looping through words
     var word = words[i];
     var newWord = word.toLowerCase();
     var firstChar = newWord[0].toUpperCase();
     var lastChar = newWord[newWord.length - 1].toUpperCase();
     newWord = firstChar + newWord.slice(1, -1) + lastChar;
     result.push(newWord);
  }
  return result.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
