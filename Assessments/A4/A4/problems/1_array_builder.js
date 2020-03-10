/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []


// function arrayBuilder(count) {                 // MY SOLUTION
//   var result = [];
//
//   for (key in count) {
//
//     for (var i = 0; i < count[key]; i += 1) {
//       if (true) {
//         result.push(key)
//       }
//     }
//   }
//   return result;
// }

function arrayBuilder(count) {
  var arr = [];

  for (var key in count) {
    var value = count[key];

    for (var i = 0; i < value; i += 1) {
      arr.push(key);
    }
  }

  return arr;
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
