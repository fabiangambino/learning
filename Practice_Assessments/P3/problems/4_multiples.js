/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

// 2 * 1  = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8 stop here result < 10 (max)
// 2 * 5 = 10
// console.log(multiples(10, 2)) //=> [ 2, 4, 6, 8 ]
// console.log(multiples(15, 3)) //=> [ 3, 6, 9, 12 ]


function multiples(max, num){
  // returns an array of numbers
  var num_multiples = [];

  for (var i = 1; i < max; i += 1) {
    var product = num * i;

    if (product < max) {
      num_multiples.push(product);
    }
  }
  return num_multiples;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
