/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; //=> {
  one: "one",
  three: "three"
}
***********************************************************************/
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

var matchingPairs = objectSelect(obj, isEqual);

console.log(matchingPairs); //=> {
//   one: "one",
//   three: "three"
// }

function objectSelect(obj, callback) {
  var result = {};

  for (var key in obj) {
    if (callback(key, obj[key])) {
      result[key] = key;
    }
  }
  return result;
}

function isEqual(a, b) {
  return a === b;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSelect;
