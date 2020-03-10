/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/
// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []

// loop through the object by key and place the key string inside of a results array
// by the number of times of the value of that key's value

function arrayBuilder(count) {
  var result = [];                // create a results array to store out strings

  for (var key in count) {        // loop through the object by key value pair
    var value = count[key];       // create a variable value to store the value of the key being iterated on

    for (var i = 0; i < value; i += 1) {    // loop up to the value number of times to perform repeated push
      result.push(key);                     // push the key string into the result
    }
  }

  return result;                  // return the result
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
