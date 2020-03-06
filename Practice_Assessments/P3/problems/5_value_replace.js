/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/
// return a new array
// for each element in the array, if a corresponding key exists in the object, reassign that element
// to the key's value
// if no key exists, leave it alone and move to the next element
// finally return the result array

// console.log(valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'}));
//=> [ 'placements', 'operations', 'tommy' ]

function valueReplace(array, obj){
  var result = [];

  // array loop
  for (var i = 0; i < array.length; i += 1) {
    var ele  = array[i];                                // element 'a'

    if (obj[ele] !== undefined) {
      result.push(obj[ele]);
    } else {
      result.push(ele);
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
