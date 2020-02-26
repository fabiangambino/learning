// isOdd

// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

// isOdd with CONDITIONAL
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// isOdd without conditional
function isOdd(num) {
  return num % 2 !== 0;
}

//plusFive

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// console.log(plusFive(10));  // => 15
// console.log(plusFive(2));   // => 7
// console.log(plusFive(-8));  // => -3
//

function plusFive(num) {
  return num + 5;
}

//threeOrSeven

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// console.log(threeOrSeven(3));   // => true
// console.log(threeOrSeven(42));  // => true
// console.log(threeOrSeven(8));   // => false
//

// theeOrSeven with CONDITIONAL
function threeOrSeven(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

// theeOrSeven without condtional
function threeOrSeven(num) {
  return num % 3 === 0 || num % 7 === 0;
}

// hello

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
  console.log("Hello, " + str);
}

// yell

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
// console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
  return string.toUpperCase() + "!!!";
}

// whisper

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// console.log(whisper("Hey Anthony")); // => "...hey anthony..."
// console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
//
function whisper(string) {
  return "..." + string.toLowerCase() + "...";
}

// isSubstring

// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// console.log(isSubstring("The cat went to the store", "he cat went")); // => true
// console.log(isSubstring("Time to program", "time")); // => true
// console.log(isSubstring("Jump for joy", "joys")); // => false
//

// isSubstring with CONDITIONAL
function isSubstring(searchString, subString) {
  if (searchString.indexOf(subString) !== -1) {
    return true;
  } else {
    return false;
  }
}

// isSubstring without conditional
function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) > -1;
}

// echo

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// console.log(echo("Mom!")); // => "MOM! ... Mom! ... mom!"
// console.log(echo("hey")); // => "HEY ... hey ... hey"
// console.log(echo("JUMp")); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
  var allUpper = string.toUpperCase();
  var allLower = string.toLowerCase();
  return allUpper + "..." + string + "..." + allLower;
}

// isEven

// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// console.log(isEven(2)); // => true
// console.log(isEven(5)); // => false
//
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// averageOfFour

// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// console.log(averageOfFour(10, 10, 15, 5)); // => 10
// console.log(averageOfFour(3, 10, 11, 4)); // => 7
// console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
  var sum = num1 + num2 + num3 + num4
  var avg = sum / 4
  return avg
}
