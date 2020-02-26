////////////////////////////////////////////////////////////////////////////////
// W1D1 - Welcome to JavaScript
////////////////////////////////////////////////////////////////////////////////

// Introduction
//  1. Name
//  2. Where are you from
//  3. Background

// Tips / Recommendations
//  1. Watch Alvin's video lectures / notes BEFORE attending the night's lecture
//  2. Take notes before hand, not recommended to take them DURING lecture
//  3. Practice makes perfect
//  4. Never giving up
//  5. Ask for help!


////////////////////////////////////////////////////////////////////////////////
// Intro to JavaScript
////////////////////////////////////////////////////////////////////////////////

// What is JavaScript?
// JavaScript is an object-based programming language -
// Meaning *almost* everything in JavaScript is an *object*
// Except for the **primitive data types**


// Data types in JavaScript are separated into two categories:
// 1. Primitive Data Types:
//      Numbers, Strings, Boolean, Null, Undefined
// 2. Non-Primitive Data Types:
//      Arrays, Objects...


// How do we run JavaScript?
// We will be using `node` to run our JavaScript files
// Node is a runtime environment for JavaScript code

// To run a JavaScript file outside of node use the command:
// `node file_name.js`



////////////////////////////////////////////////////////////////////////////////
// The Primitive Data Types
////////////////////////////////////////////////////////////////////////////////
// 1. Numbers
// 2. Booleans
// 3. Strings
// 4. Undefined
// 5. Null


// All primitive data types are **immutable**
// immutable - once we create a value for it, we can not modify it



////////////////////////////////////////////////////////////////////////////////
// 1. Numbers - Integers, Rational, Irrational
////////////////////////////////////////////////////////////////////////////////
// Integers:    -2, -1, 0, 1, 2
// Rational:    0.25, 0.5, 0.125
// Irrational:  0.333333..., 3.1415926546...


////////////////////////////////////////////////////////////////////////////////
// Number Operators
////////////////////////////////////////////////////////////////////////////////

10 + 3;                         // 13
10 * 3;                         // 30
10 - 3;                         // 7
10 / 3;                         // 3.3333
10 % 3;                         // 1
2 % 3;                          // 2



// Modulo (%) - returns the remainder
// Commonly used to test for divisibility
// Restrict something within a certain range




////////////////////////////////////////////////////////////////////////////////
// 2. Booleans - `true` or `false`
////////////////////////////////////////////////////////////////////////////////

// Booleans have two values: `true` or `false`

// Operators:
// Or (||)
true || true;                   // true
true || false;                  // true
false || true;                  // true
false || false;                 // false


// And (&&)
true && true;                   // true
true && false;                  // false
false && true;                  // false
false && false;                 // false


// Bang (!) - negate
!true;                          // false
!false;                         // true
!!true;                         // true




////////////////////////////////////////////////////////////////////////////////
// Comparators - Expressions with comparators will always evaluate to a `boolean`
////////////////////////////////////////////////////////////////////////////////

//    >    greater than
//    <    less than
//    >=   greater than or equal to
//    <=   less than or equal to
//    ===  strict equality
//    !==  not equal
//    ==   loose equality *NEVER USE THIS, EVER*


10 > 10;                        // false
10 >= 10;                       // true
10 < 11;                        // true
10 <= 10;                       // true
10 === 10;                      // true
10 !== 11;                      // true
0 === -0;                       // true
false !== true;                 // true


// Strict equality (===) vs. Loose equality(==)
10 == '10';                     // true
10 === '10';                    // false




// PEMDAS

// P - Parethesis
// E
// M/D -
// A/S

// compasion operators:
// and
// or



////////////////////////////////////////////////////////////////////////////////
// 3. Strings
////////////////////////////////////////////////////////////////////////////////

// JavaScript strings are wrapped inside a pair of ("") or ('')
// Valid strings:
"hello";
'hello';
"Let's do this!";

// Invalid - BE CONSISTENT!
// "hello'
// 'bootcamp prep"



// String Methods

// 1. Indexing - Returns the character at certain position
"hello"[0];                     // "h"
"hello"[1];                     // "e"
"hello"[2];                     // "l"
"hello"[6];                     // undefined
"hi bye"[2];                    // " "


// 2. Length - Returns the total number of characters in the string
"hello".length;                 // 5
"hi bye".length;                // 6


// 3. indexOf - Returns the index where the substring is first found
"hello".indexOf('e');           // 1
"hello".indexOf("l");           // 2
"hello".indexOf('llo');         // 2
"hello".indexOf('E');           // -1


// Other useful string methods
"hello".toUpperCase();          // "HELLO"
"HI".toLowerCase();             // "hi"
"hello".slice();                // "hello"
"hello".slice(1);               // "ello"
"hello".slice(1, 3);            // "el"



////////////////////////////////////////////////////////////////////////////////
// Variables - a reference to a value
////////////////////////////////////////////////////////////////////////////////

var str = "bootcamp prep";


// =      assignment / re-assignment
// ===    equality; when we want to check if something is equal


str;                            // "bootcamp prep"
str[0];                         // "b"
str[1];                         // "o"
str.indexOf("p");               // 7


// mutability and re-assignment
var food = "ramen";             // declaration and assignment

food[0] = "x";
food;                           // "ramen"

food = "pizza";                 // re-assignment
food;                           // "pizza"





// JavaScript variable names must begin with an alphabetical character
// Variable names in JavaScript follows the camelCase convention
var theLightBlueSky = "blue";


// Good variable naming conventions:
var num = 10;
var isEven = num % 2 === 0;


// Bad variable naming
var fish = 10;                  // misleading
// var null = 10;               // `null` is a reserved keyword
// var undefined = "defined";   // do not use reserved keywords as variable names!!

// Invalid variable names - must begin with an alphabetical character!!
// var 1str = "hello!";
// var (str) = "hello";



////////////////////////////////////////////////////////////////////////////////
// 4. Undefined
////////////////////////////////////////////////////////////////////////////////

var pokemon;

pokemon;                        //



// `undefined` is JavaScript's DEFAULT VALUE -

// Variable declared without an assigned value
// will automatically be assigned a default value of `undefined`

// More on `undefined` in tomorrow's lecture :)



////////////////////////////////////////////////////////////////////////////////
// 5. Null
////////////////////////////////////////////////////////////////////////////////

// ...





////////////////////////////////////////////////////////////////////////////////
// Conditionals
////////////////////////////////////////////////////////////////////////////////

// Mutually Exclusive - only 1 of these conditions will run

// if...
// if...else...
// if...else if...else...


// If the expression evalutes to a "truthy" value,
// The code inside the condition will run


var num = 12;                   // <-- try changing this value

// if

// if (num > 2) {
//   console.log("num is greater than 2");
// }


// if...else...
// if (num > 2) {
//   console.log("num is greater than 2");
// } else {
//   console.log("else num is less than 2");
// }



// if...else if...
// if (num > 2) {
//   console.log("num is greater than 2");
// } else if (num > 0) {
//   console.log("num is positive");
// }



var num = -10;

// if...else if...else
// if (num > 2) {
//   console.log("num is greater than 2");
// } else if (num > 0) {
//   console.log("num is positive");
// } else {
//   console.log("else num is less than 2 and not positive");
// }




var num = -10;                    // <-- play around with this value
// var num = "a";

// if...else if...else if...else
if (num > 2) {
  console.log("num is greater than 2");
} else if (num > 0) {
  console.log("num is positive");
} else if (num < 0) {
  console.log("num is negative");
} else {
  console.log("else num is less than 2, is not positive, nor negative");
}



// "falsey" values in JavaScript: false, 0, "", null, undefined, NaN
// Everything else is a "truthy" value: "a", 10, -10,...etc


// "truthy" values
// if (true) {
//   console.log("bootcamp prep is awesome!");
// }


// if (0) {
//   console.log("hello world");
// }




////////////////////////////////////////////////////////////////////////////////
// Conditionals Summary
////////////////////////////////////////////////////////////////////////////////

// There can only be one `if` condition
// `if` condition most come before everything else
// We can have as many `else if` condition as we want
// There can only be one `else` condition
// `else` condition does not take in any expressions

// any `else if` conditions MUST come AFTER `if`
// any `else` conditions MUST come AFTER `if` if there are no `else if`
// any `else` conditions MUST come AFTER `else if` if there are `else if`



//.
