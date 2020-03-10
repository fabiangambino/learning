/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/
console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(6, 10)); //=> 30
console.log(leastCommonMultiple(24, 26)); //=> 312


function leastCommonMultiple(num1, num2) {          // MY SOLUTION

  for (var i = 1; true; i += 1) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
