////////////////////////////////////////////////////////////////////////////////
// W1D4 - Arrays
////////////////////////////////////////////////////////////////////////////////

// Data structure - container to store / organize data


// Arrays -
// Represented by [] (square brackets)
// Linear sequential collection of items
// Each item is located physically next to each other in memory
// Each item in an array is called an `element`
// Elements are comma separated

var arr = [ 10, "hello", true, undefined, null, [ 10, 11 ] ];

// Built in data structure in JavaScript
// Commonly used to group items that are similar / related

var fruits = [ 'blueberries', 'oranges', 'strawberries' ];
var colors = [ 'blue', 'indigo', 'violet' ];
var nums = [ 10, 11, 12 ];





////////////////////////////////////////////////////////////////////////////////
// Array Methods - General
////////////////////////////////////////////////////////////////////////////////

var pokemons = [ 'pikachu', 'charizard', 'jigglypuff'];

// indexing
// length
// indexOf


pokemons[0];                        // "pikachu"
pokemons[1];                        // "charizard"
pokemons[3];                        // undefined

[].length;                          // 0
pokemons.length;                    // 3

pokemons.indexOf('pikachu');        // 0
pokemons.indexOf('squirtle');       // -1






// Mutability - strings vs. arrays
// Immutable - can not change the value once it has been created
// Mutable - can modify the value

var str = "hello";
var chars = [ "h", "e", "l", "l", "o" ];

chars[0] = 'x';
chars;                              // ['x', 'e', 'l', 'l', 'o']

str[0] = 'x';
str;                                // 'hello'

// strings can not be mutated but it can be reassigned

// primitive data types - numbers, strings, booleans, null, undefined

// **Note on mutability**
// JavaScript primitive data types are immutable! ie: strings
// Non-primitive data types are mutable! ie: arrays





////////////////////////////////////////////////////////////////////////////////
// Array Methods - Mutating
////////////////////////////////////////////////////////////////////////////////

// push, pop, shift, unshift
var nums = [ 10, 11, 12 ];


// method             return value        `nums` array            what it does
nums.push(13);        // 4                [10, 11, 12, 13]        adds an element to the end of the array
nums.pop();           // 13               [10, 11, 12]            removes the last element
nums.unshift(100);    // 4                [100, 10, 11, 12]       adds an element to the front of the array
nums.shift();         // 100              [10, 11, 12]            removes the first element




// Note we can add more than one items at a time using `push` and `unshift`

var nums2 = [10, 11];

nums2.push(100, 101, 102);                // [10, 11, 100, 101, 102]
nums2.unshift('hi', 'bye');               // ['hi', 'bye', 10, 11, 100, 101, 102]




////////////////////////////////////////////////////////////////////////////////
// Array Methods - Non-Mutating
////////////////////////////////////////////////////////////////////////////////

// concat, slice

var arr1 = [1,2,3];
var arr2 = [4,5,6];


arr1.concat(arr2);                              // [1,2,3,4,5,6];
arr1;                                           // [1,2,3]
arr2;                                           // [4,5,6]



var arr3 = [10, 11, 12, 13, 14];

arr3.slice(1);                                  // [11, 12, 13, 14]
arr3.slice(1, 4);                               // [11, 12, 13]
arr3.slice(1, -1);                              // [11, 12, 13]


// Array.slice(startIndex, endIndex)
// startIndex - inclusive
// endIndex - exclusive

"goodbye".slice(1);                             // "oodbye"
"hello".slice(1, -1);                           // 'ell'




////////////////////////////////////////////////////////////////////////////////
// String.split and Array.join
////////////////////////////////////////////////////////////////////////////////

var sentence = "we love programming";

var words = sentence.split(" ");    // ['we', 'love', 'programming']

words.join("-");                    // "we-love-programming"


"hello".split('');                  // ['h', 'e', 'l', 'l', 'o']
"hello".split("").join('-');        // "h-e-l-l-o"







////////////////////////////////////////////////////////////////////////////////
// Looping through arrays
////////////////////////////////////////////////////////////////////////////////

// Write a function `sumNums` that takes in an array of numbers, and returns
// the sum of all the elements in the array

// console.log(sumNums([10, 11, 12]))         // => 33 = 10 + 11 + 12
// console.log(sumNums([100, 101]));          // => 201
// console.log(sumNums([]));                  // => 0

function sumNums(arr) {
  var sum = 0;                             // 33

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];                       // 12

    sum = sum + num;                        // 21 + 12
  }

  return sum;
}










// Write a function `reverseStr(str)` that takes in a string as argument
// and returns a new string where every character is in reverse order

// console.log(reverseStr("hello"));          // "olleh"
// console.log(reverseStr("bootcamp"));       // "pmactoob"
// console.log(reverseStr(""));               // ""

function reverseStr(str) {                    // "hello"
  var reversed = "";                          // "olleh"

  for (var i = str.length - 1; i >= 0; i--) {
    var char = str[i];                        // "h"
    reversed = reversed + char;               // reversed += char
  }

  return reversed;
}









// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.

// console.log(maxValue([12, 6, 43, 2]));     // => 43
// console.log(maxValue([]));                 // => null
// console.log(maxValue([-4, -10, -0.43]));   // => -0.43

function maxValue(arr) {
  if (arr.length === 0) {
    return null;
  }

  // var max = null;                            // 0
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];                           // 12

    if (num > max) {
      max = num;
    }
  }

  return max;
}












////////////////////////////////////////////////////////////////////////////////
// Arrays Quiz
////////////////////////////////////////////////////////////////////////////////

// 1. How do we iterate through elements of an array?
//      (a) using a loop
//      (b) using a conditional
//      (c) using modulo

// 2. What type of data can an array store?
//      (a) Numbers
//      (b) Strings
//      (c) Booleans
//      (d) Any data type

// 3. What value do we get back if we try to index an array using an invalid
//    number index?
//      (a) error
//      (b) 0
//      (c) undefined

// 4. What method can we use to check if an element is inside an array?
//      (a) slice
//      (b) indexOf
//      (c) push




//.
