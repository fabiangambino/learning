/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/
console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}));
//=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]


function valueConcat(array, obj) {
  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    var firstName = array[i];

    if (obj[firstName] !== undefined) {
      result.push(firstName + obj[firstName])
    } else {
      result.push(firstName);
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
