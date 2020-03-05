////////////////////////////////////////////////////////////////////////////////
// W2D2 - Controlling Complexity - Function Decomposition
////////////////////////////////////////////////////////////////////////////////

// What is good code?
//  - readability
//  - scalability (won't have to worry about in Bootcamp Prep)

// We don't have to worry about optimizing our code in Bootcamp Prep
// Only focus on getting a working piece of code
// And also making it more readable :)


// Decomposition - process of breaking down a larger complex problem
// into smaller, more manageable sub problems

// Why do we use decomposition or helper functions?
//  - To make our code more readable!
//  - Easier to manage
//  - Easier to test and debug


// Good programming practice:
// A function should only perform a single task,
// This is known as the Single Responsibility Principle
// When dealing with complex functions,
// It is advantageous to break down the function into smaller,
// helper functions



// example:
// Write a function `laligatSum(n)` that takes in a number
// and returns the laligatSum of that number.
// A number's laligat sum is the sum of all the prime numbers less than
// or equal to that number
//
// console.log(laligatSum(10));           // => 2 + 3 + 5 + 7 = 17
// console.log(laligatSum(11));           // => 28

function laligatSum(n) {
  var sum = 0;

  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {                  // isPrime(i) === true
      sum += i;
    }
  }

  return sum;
}

// helper
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}






// There is no hard rule to decide on when and how to decompose a large problem
// into multiple helper functions.
// Do what makes sense in the context of the problem.

// For example, in `laligatSum` it states that we are concerned with prime numbers
// so it would be great if we had an `isPrime` helper method


// How to tell you might need a helper function?
// If your function is getting too long and complicated, esp. having a nested loop,
// It might be advantageous to break it down using helper functions to keep
// your code clean and organized




////////////////////////////////////////////////////////////////////////////////
// W2D2 - Objects
////////////////////////////////////////////////////////////////////////////////

// Data Structures - contains to store / organizes data
//    - Array   []      a collection of related items
//    - Object  {}      models a single entity - ie: real life object


// objects are another JavaScript data structure we can use to store data
// objects are non-primitive data type
// objects are mutable
// objects have "key-value pairs"
// keys in JavaScript are always STRINGS!!
// values in JavaScript can be of ANY data type
// keys are UNIQUE vs. values are not unique
// objects are unordered vs. arrays are ordered (arrays are ordered by indices)



////////////////////////////////////////////////////////////////////////////////
// How to create an object
////////////////////////////////////////////////////////////////////////////////

// Two ways to create an object

// Method 1:
// Let's create our very first cat object :)
var cat = {
  "name": "whiskers",
  "age": 2,
  "color": "orange"
};

// console.log(cat);


// Method 2:
// Let's create a dog object
var dog = {};

// dog["name"] = "fido";
// dog["age"] = 4;
// dog["color"] = "brown";

dog.name = "fido";
dog.age = 4;
dog.color = "brown";

// console.log(dog);



////////////////////////////////////////////////////////////////////////////////
// Object methods - Dot Notation vs. Bracket Notation
////////////////////////////////////////////////////////////////////////////////

// keying into an object
// keying into an object with non-existing value
// dot notation vs. bracket notation

var pokemon = {
  "id": 25,
  "name": 'pikachu',
  "color": 'yellow',
  "type": 'electric',
  "weight": '50 lbs',
  "attacks": ['thunderbolt', 'agility', 'tail whip', 'growl'],
  "test-attr": true,
};


// Keying into an object to get its corresponding value
// 1. Using square bracket notation
pokemon["name"];                  // "pikachu"
pokemon["color"];                 // "yellow"
pokemon["attacks"];               // ['thunderbolt', 'agility', 'tail whip', 'growl']

// 2. Using dot notation
pokemon.name;                     // "pikachu"
pokemon.color;                    // "yellow"
pokemon.attacks;                  // ['thunderbolt', 'agility', 'tail whip', 'growl']

// When a key-value pair does not exist in object
pokemon["height"];                // undefined
pokemon.height;                   // undefined

// Similar to:
var arr = [10, 11, 12];
arr[10];                          // undefined



// Square bracket vs. Dot notation
// 1. Using variables
var potato = "color";

pokemon[potato];                  // "yellow"
pokemon.potato;                   // undefined; looks for the literal key of "potato"

// pokemon[potato] is EQUIVALENT to pokemon["color"]
// pokemon.potato is EQUIVALENT to pokemon["potato"]


// 2. Keys that are not valid variable names
pokemon["test-attr"];             // true
// pokemon.test-attr;             // throws an error


// Keys in JavaScript objects are strings and unique
// Keys that are NOT valid JavaScript variable names can NOT be accessed with dot notation (ie: test-attr)
// Keys represented by variables can be used with square bracket notation and NOT dot notation
// Dot notation always looks for the literal key




// Exercise:
function hasAttack(obj, str) {

}

// console.log(hasAttack(pokemon, 'growl'));      // => true;
// console.log(hasAttack(pokemon, 'fly'));        // => false;





////////////////////////////////////////////////////////////////////////////////
// Looping through an object
////////////////////////////////////////////////////////////////////////////////

// Write a function `printObj` that takes in an object and simply prints
// out each key-value pair of the object

var jigglypuff = {
  "name": 'jigglypuff',
  "id": 39,
  "gender": 'female',
  "color": 'pink',
  "weight": '10 lbs'
};

function printObj(obj) {
  for (var key in obj) {
    var value = obj[key];
    console.log(key + " - " + value);
  }
}

// printObj(jigglypuff);




////////////////////////////////////////////////////////////////////////////////
// Example
////////////////////////////////////////////////////////////////////////////////

// Write a function `elementCount` that takes in a word and returns an
// object where the keys represent each unique character in the word,
// and the value corresponds to the number of times each character appears
// in the string

// console.log(elementCount(''));         // => {}
// console.log(elementCount('pizzza'));    // => {p: 1, i: 1, z: 2, a: 1}

function elementCount(str) {
  var countObj = {};                      // {p:1, i:1, z:3}

  for (var i = 0; i < str.length; i++) {
    var char = str[i];                    // "p"

    if (countObj[char] !== undefined) {
      countObj[char] = countObj[char] + 1;
    } else {
       countObj[char] = 1;
    }
  }

  return countObj;
}





///////////////////////////////////////////////////////////////////////////////
// Objects vs. Arrays
////////////////////////////////////////////////////////////////////////////////

// arrays are commonly used to group similar data together
// arrays are ordered by their indices
var nums = [1, 2, 3];
var colors = ['red', 'violet', 'blue'];



// objects are used to model a single entity - describe a single item
// objects are unordered
var jigglypuff = { name: 'jigglypuff', id: 39, color: 'pink' };

var bootcamp = {
  "name": 'App Academy',
  "color": 'red',
  "year": 2012,
  "size": 1000,
  "teachers": ['Alvin', 'JJ', 'Anne', 'Roman', 'Brendan']
};




///////////////////////////////////////////////////////////////////////////////
// Bonus - Methods vs. Functions
////////////////////////////////////////////////////////////////////////////////

// methods are functions that belongs to an object
// every method is a function,
// but not every function is a method

var fido = {
  name: 'Fido',
  age: 4,
  bark: function() {
    console.log('woof woof');
  },
  purr: function() {
    console.log("dogs don't purr >.<");
  }
};

// fido.bark();                 // 'woof woof'
// fido.purr();                 // "dogs don't purr >.<"




////////////////////////////////////////////////////////////////////////////////
// Objects Quiz
////////////////////////////////////////////////////////////////////////////////

// 1. An object contains...
//  (a) key-value pairs
//  (b) elements
//  (c) numbers

// 2. If a key is not inside an object, what value do we get when accessing that key?
//  (a) 0
//  (b) undefined
//  (c) false

// 3. We can use variables as keys in an object by using...
//  (a) bracket notation []
//  (b) dot notation .
//  (c) both bracket and dot notation

// 4. Keys in an object can be what data type?
//  (a) strings
//  (b) number

// 5. Values in an object can be what data type?
//  (a) strings
//  (b) numbers
//  (c) booleans
//  (d) arrays
//  (e) any data type


//.
