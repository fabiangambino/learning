////////////////////////////////////////////////////////////////////////////////
// W1D2 - Functions
////////////////////////////////////////////////////////////////////////////////

// What is a function?
// A function is a procedure of code that will run when called

// we only need to define a function once
// but we can call it as many times as we please

// Why is it useful?
// great programmers hate repeating themselves,
// we call this the DRY rule (Don't Repeat Yourself)
// to avoid repeating expressions over and over again, we use functions :)


// console.log("hello anne");
// console.log("hello alvin");
// console.log("hello danny");

function sayHello(name) {
  console.log("hello " + name);
  // "hello " + "alvin"
}

// sayHello("alvin");
// sayHello("danny");
// sayHello("oliver");



// Write a function `add` that takes in two numbers `num1` and `num2`
// and returns the sum of the two numbers:

// 1. function declaration - blueprint
function add(num1, num2) {
  return num1 + num2;
}


// 2. calling the function
// console.log(add(10, 12));




// Passing in too many and too few arguments
// console.log(add(10, 11, 12));     // 21; any extra arguments will be ignored in JS
// console.log(add(10));             // NaN; assigns default value of undefined
// console.log(add());               // NaN; undefined + undefined





////////////////////////////////////////////////////////////////////////////////
// Ways to Define a Function
////////////////////////////////////////////////////////////////////////////////


// 1. Function Declaration - very flexible, order doesn't matter
function functionName1(params1, params2) {
  // code ....
}


// 2. Function Expression - order does matter - call the function BELOW its definition
var functionName2 = function(params1, params2) {
  // code ...
};






////////////////////////////////////////////////////////////////////////////////
// `return` vs `console.log`
////////////////////////////////////////////////////////////////////////////////

// let's define a function `average` that takes in two numbers `num1`
// and `num2` as arguments and `returns` the average of the two numbers

function average(num1, num2) {
  // console.log( (num1 + num2) / 2);    // prints 11
  return (num1 + num2) / 2;
}

// return vs. console.log
var result = average(10, 12);         // store its return value to a variable
// console.log(result + 5);




// If we don't have a 'return' in our function, the function will return `undefined`
// JavaScript default value is `undefined` if there is no specified value





////////////////////////////////////////////////////////////////////////////////
// Early Returns
////////////////////////////////////////////////////////////////////////////////

function foo() {
  console.log('Before return');
  var num = 10;

  if (num > 0) {
    return 'Exiting the Function';
  }

  return 'Exiting 2';
  console.log('After return');
}

// console.log(foo());
// console.log('After return');




////////////////////////////////////////////////////////////////////////////////
// Function examples
////////////////////////////////////////////////////////////////////////////////

// Example 1:
// Write a function `isOdd` that takes in a number as an argument
// and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals
// and without using conditionals

// console.log(isOdd(2));             // => false
// console.log(isOdd(5));             // => true
// console.log(isOdd(-17));           // => true

// 1. Using Conditionals
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


// 2. Without Conditionals
function isOdd(num) {
  return num % 2 !== 0;
}




// Example 2:
// Write a function `fiveOrSeven` that takes in a number as an argument
// and returns `true` if the number is either divisible by 5 or 7
// BUT not both return `true`
// and returns `false` otherwise
// Write two versions of this function, unsing conditionals and without using conditionals

// console.log(fiveOrSeven(15));      // => true
// console.log(fiveOrSeven(35));      // => false
// console.log(fiveOrSeven(12));      // => false

function fiveOrSeven(num) {
  var isDivByEither = num % 5 === 0 || num % 7 === 0;
  var isDivByBoth = num % 5 === 0 && num % 7 === 0;

  if (isDivByEither && !isDivByBoth) {
    return true;
  } else {
    return false;
  }
}






////////////////////////////////////////////////////////////////////////////////

// Modulo (%) -
// practical use cases for modulo:
// checks for divisibility, ie: isOdd, threeOrSeven
  // checks if a number is even or odd (is evenly divisible by 2)
  // checks if a number is a factor of `num` (num % i === 0)
  // checks if a number is a multiple of `num` (i % num === 0)

// can be used to restrict our data within a certain range; more on this in future problems :)


////////////////////////////////////////////////////////////////////////////////

// Functions Quiz:
// 1. What happens when a function is called?
//    (a) the function is deleted
//    (b) the code inside the function definition is run    // <---
//    (c) the function is saved

// 2. If a return statement is not hit during the execution of a function,
//    what value is automatically returned?
//    (a) undefined                                         // <---
//    (b) 0
//    (c) null

// 3. After a function is defined, how many times are we able
//    to call the function?
//    (a) once
//    (b) three times
//    (c) as many times as we please                        // <---

// 4. How would we call a function named myFunc?
//    (a) myFunc()                                          // <---
//    (b) (myFunc)
//    (c) myFunc[]


//.

////////////////////////////////////////////////////////////////////////////////

// today we learned how to write functions in JavaScript that does a simple task,
// later through the course we'll learn to how decompose more complex functions,
// into smaller more manageable pieces - known as `helper functions`
// a function should only do one thing (known as the Single Responsibility Principle)
// also makes the structure of your code more transparent

// more on code styling and function decomposition in week 3 of the course, so stay tuned :)

////////////////////////////////////////////////////////////////////////////////


//.
