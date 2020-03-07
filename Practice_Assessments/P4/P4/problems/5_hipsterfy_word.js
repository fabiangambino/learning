/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/
// console.log(hipsterfyWord('proper')) // => 'propr'
// console.log(hipsterfyWord('tonic')) // => 'tonc'
// console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
// console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

function hipsterfyWord(word) {
  var vowels = "aeiou".split("");

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var char = word[i].toLowerCase();

    if (vowels.indexOf(char) !== -1) {
      var newWord = word.slice(0, i) + word.slice(i + 1);
      return newWord;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
