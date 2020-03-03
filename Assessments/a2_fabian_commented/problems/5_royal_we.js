/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

// I    --> we
// mine --> ours
// my   --> our
// me   --> us

function royalWe(sentence) {

  var words = sentence.split(" ")

  for (var i = 0; i < words.length; i += 1) {
    if (words[i] === "I") {
      words[i] = "we";
    } else if (words[i] === "mine") {
      words[i] = "ours";
    } else if (words[i] === "my") {
      words[i] = "our";
    } else if (words[i] === "me") {
      words[i] = "us";
    }
  }
  return words.join(" ");
}

// excellent annotations, and great job mutating the given array
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
