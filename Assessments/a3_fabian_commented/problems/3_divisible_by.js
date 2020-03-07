/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/
console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]



function divisibleByFivePairSum(array){

  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j += 1) {
      var num2 = array[j];
      var sum = num1 + num2;

      if (sum % 5 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

// excellent work! great variable naming as well
// note we dont need a vertical line space on line 16
// we dont need a vertical space any time our code is directly under the start of a new block `{`
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
