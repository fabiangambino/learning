/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

// function valuePair(obj1, obj2, key) {
//
//   var result = []
//
//   for (var pair_key in obj1) {
//     if (pair_key === key) {
//       result.push(obj1[pair_key]);
//     }
//   }
//
//   for (var pair_key in obj2) {
//     if (pair_key === key) {
//       result.push(obj2[pair_key]);
//     }
//   }
//   return result;
// }

function valuePair(obj1, obj2, key) {
  var val1 = obj1[key];               // bracket notation normally passes in strings
  var val2 = obj2[key];               // can only do this because the key holds a string value

  return [val1, val2];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
