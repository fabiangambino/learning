/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/
// console.log(objectToString({a : 2, b: 4, c: 1})) //=> 'aabbbbc'
// console.log(objectToString({b: 1, o: 2, t: 1})) //=> 'boot'

function objectToString(count) {
  var result = "";

  for (key in count) {
    var value = count[key];
    while (value > 0) {
       result += key

       value -= 1
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = objectToString;
