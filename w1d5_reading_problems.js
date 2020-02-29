// isInside

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false

function isInside(array, ele) {
  if (array.indexOf(ele) === -1) {
     return false;
  }
  return true;
}

// reverseStr

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'

function reverseStr(str) {
  var reversed = ""
  for (var i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
}

// luckySevens

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max) {
  var array = [];

  for (var i = 0; i <= max; i += 1) {
    if (i % 7 === 0 && i !== 0) {
      array.push(i);
    }
  }
  return array;
}

// copyMachine

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {
  var array = [];

  for (var i = 1; i <= num; i += 1) {
    array.push(element);
  }
  return array;
}

// everyOtherWord

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]

function everyOtherWord(sentence) {
  var array = [];
  var split_sentence = sentence.split(" ");

  for (var i = 0; i < split_sentence.length; i += 1) {
    if (i % 2 === 0) {
      array.push(split_sentence[i]);
    }
  }
  return array;
}

// wordYeller

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
var sent = "Stop it now! Please, wont you stop?";
console.log(wordYeller(sent));
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words)); // === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

// function wordYeller(sentence) {
//   var yelled = []
//   var split_sentence = sentence.split(" ")
//
//   for (var i = 0; i < split_sentence.length; i += 1) {
//     var last_letter = split_sentence[i][-1];
//
//     if (last_letter === "." || last_letter === "," || last_letter === "!" || last_letter === "?" || last_letter === ";" || last_letter === ":") {
//       yelled.push(split_sentence[i]);
//     }
//   }
//   return yelled;
// }

function wordYeller(sentence) {
  var yelled = [];
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word[word.length-1] === "." || word[word.length-1] === "," || word[word.length-1] === "!" || word[word.length-1] === "?" || word[word.length-1] === ";" || word[word.length-1] === ":") {
      yelled.push(words[i]);
    }
  }
  return yelled;
}








// arraySubstring

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]








// evenCaps

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"
