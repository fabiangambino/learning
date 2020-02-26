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
console.log(whisper("Hey Anthony")); // => "...hey anthony..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
//
function whisper(string) {
  return "..." + string.toLowerCase() + "...";
}
