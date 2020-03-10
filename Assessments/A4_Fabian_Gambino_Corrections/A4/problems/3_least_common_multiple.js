/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/
// console.log(leastCommonMultiple(2, 3)) //=> 6
// console.log(leastCommonMultiple(6, 10)) //=> 30
// console.log(leastCommonMultiple(24, 26)) //=> 312

// because we are looking for lowest common multiple we can start at 1
// and check if each number is divibile by 1 and move up (1 ... 2 ... 3 etc.)
// to see which number is the lowest common lowest common multiple divisible by
// both and return that number


function leastCommonMultiple(num1, num2) {

  for (var i = 1; true; i += 1) {            // we are starting at 1 and looping up infinitely until condition met
    if (i % num1 === 0 && i % num2 === 0) {  // checking if current num (i) divisible by both num1 && num2
      return i;                              // if so we return (i) and infinite loop ends only when i is found
    }
  }
}                                            // infinite loop will only work because at some point we return (i)



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
