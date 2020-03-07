/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/
// var str = "yes;!.?,-";
// console.log(removePunctuation(str));

// function titleize(title, stopWords) {
//
//   if (stopWords.indexOf(removePunctuation(title)) === -1) {
//     return false;
//   }
//
//   return true;
// }


// function returns a string without punctuation
// function removePunctuation(word) {
//   var punctuation = [";", "!", ".", "?", ",", "-"];
//   var letters = word.split("");
//   var letters_sans_punc = [];
//
//   for (var i = 0; i < letters.length; i += 1) {
//     var char = letters[i];
//     if (punctuation.indexOf(char) === -1) {
//       letters_sans_punc.push(char);
//     }
//
//   }
//
//   return letters_sans_punc.join("");
// }
//
//
//
// // checking to see if a string appear in stop words array
// function isStopWord(word, stopWords) {
//   if (stopWords.indexOf(word) > -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

function removePuncs(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  var lastChar = word[word.length - 1];

  if (punctuation.indexOf(lastChar !== -1)) {
    return word.slice(0, -1);
  } else {
    return word;
  }
}

function isStopWord(word, stopWords) {
  var newWord = removePuncs(word).toLowerCase();

  if (stopWords.indexOf(newWord) > -1 ) {
    return true;
  } else {
    return false;
  }
}

function titleize(word, stopWords) {
  var newSent = [];
  var words = title.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i].toLowerCase();;

    if (isStopWord(word, stopWords)) {
      newSent.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      newSent.push(word);
    }
  }

  return newSent.join(" ");
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
