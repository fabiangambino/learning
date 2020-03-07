/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/
// console.log(factorial(1)); // => 1
// console.log(factorial(4)); // => 24
// console.log(factorial(5)); // => 120
// console.log(factorial(10)); // => 3628800

// function factorial(n) {
//   var product = 0;
//
//   for (var i = 1; i < n; i += 1){
//     var num1 = i;
//
//     for (var j = i + 1; j < n; j += 1) {
//       var num2 = j;
//
//       if (num2 === num1 + 1) {
//         product = num1 * num2;
//       }
//     }
//   }
//   return product;
// }

function factorial(n) {
  var product = 1;

  for (var i = 1; i <= n; i += 1){
    product *= i;

  }

  return product;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = factorial;
