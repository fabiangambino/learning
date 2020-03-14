/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
***********************************************************************/
// console.log(commonFactors(12, 50)); // => [ 1, 2 ]
// console.log(commonFactors(6, 24)); // => [ 1, 2, 3, 6 ]
// console.log(commonFactors(11, 22)); // => [ 1, 11 ]
// console.log(commonFactors(45, 60)); // => [ 1, 3, 5, 15 ]

function commonFactors(num1, num2) {
  var num1Factors = factors(num1);
  var num2Factors = factors(num2);
  var result = [];

  for (var i = 0; i < num1Factors.length; i++) {
    var ele1 = num1Factors[i];

    for (var j = 0; j < num2Factors.length; j++) {
      var ele2 = num2Factors[j];

      if (ele1 === ele2) {
        result.push(ele1);
      }
    }
  }

  return result;
}

function factors(num) {
  var factors = [1];

  for (var i = 2; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonFactors;
