/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

// first split the string into words in an array
// next we are going to loop through and check for elements "me" and reassign them as "you"
// finally join the string together again with join " "


function fromMeToYou(sentence) {

  words = sentence.split(" ")
  for (var i = 0; i < words.length; i += 1) {
    if (words[i] === "me") {
      words[i] = "you"
    }
  }
  return words.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
