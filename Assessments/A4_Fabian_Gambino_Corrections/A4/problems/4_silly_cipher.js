/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
// console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})) //=> 'cxxro'
// console.log(sillyCipher("apple", { a : "c", p : "x"})) //=> 'cxx..'
// console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})) //=> '.ee....q.q..q!'
// console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})) //=> 'dan..''

// function must return a new string because strings are not mutable
// we can create a new variable set to an empty string and concatenate as we loop through
// as we loop through if the char represents a valid key (not undefined) we
// replace the char with the value present in that matching key
// if the char is not present in the object we replace that char with a "."
// finally we return the new string (ciphered)

function sillyCipher(sentence, cipher){
  var ciphered = "";                              // create a var empty string to concat to and return later

  for (var i = 0; i < sentence.length; i += 1) {  // loop through the sentence string
    var char = sentence[i];                       // create var to refer to each char as we loop

    if (cipher[char] !== undefined) {             // check to see if the char exists in obj
      ciphered += cipher[char];                   // if it does, we concat char to empty string
    } else {
      ciphered += ".";                            // if it does not we concat a "."
    }
  }

  return ciphered;                                // finally we return the ciphered string
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
