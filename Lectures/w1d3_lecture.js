////////////////////////////////////////////////////////////////////////////////
// W1D3 - Loops
////////////////////////////////////////////////////////////////////////////////

// Use loops to keep our code DRY!!!
// What is DRY?

// console.log(10);
// console.log(9);
// console.log(8);
// console.log(7);
// console.log(6);
// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);
// console.log(0);

//^notice how this gets very repetitive



////////////////////////////////////////////////////////////////////
// 1. For Loops
////////////////////////////////////////////////////////////////////

// MUST have all 3 elements!
// 1. initializer - declare and initialize counter variable
// 2. conditional - when loop stops
// 3. incrementor / decrementor - brings conditional closer to being `false`

function printFive() {
  // 1. initialization:
  //      - only occurs ONCE
  //      - declares counter variable `i`, starting at 0
  //      - `i` is commonly used as our counter variable :)

  // 2. conditional:
  //      - checks if conditional is true
  //      - keep looping while i <= 5

  // 3. incrementor:
  //      - increment `i` by 1

  for (var i = 0; i <= 5; i = i + 1) {
    console.log(i);
  }
}

// need to call our function in order for the function to run / execute
// printFive();






////////////////////////////////////////////////////////////////////
// 2. While Loops
////////////////////////////////////////////////////////////////////

function printFive() {
  var i = 0;                    // 1. initialize counter variable

  while (i <= 5) {              // 2. conditional, checks if i <= 5 ?
    console.log(i);             // 3. if true, executes code inside

    i = i + 1;                  // 4. incrementor** don't forget this!!
  }                             // repeats step 2 to 4
}                               // until our conditional becomes `false`


// printFive();

// Infinite loops -
// 1. check conditional
// 2. check incrementor / decrementor




////////////////////////////////////////////////////////////////////
// use `ctrl + c` to exit an infinite loop!!
////////////////////////////////////////////////////////////////////



// for (initializer; conditional; incrementor/decrementor) {
//   // code...
// }


// initializer
// while (conditional) {
//   // code...
//
//   incrementor / decrementor
// }

// Write a function `printChar` that takes in a string and
// prints out every character in the given string


function printChar(string) {
  // start at index i = 0
  // goes up to the LAST index (last index = string.length - 1)
  // i <= string.length (include the LENGTH itself) <-- do not want

  for (var i = 0; i < string.length; i = i + 1) {
    var char = string[i];           // represents each character in `string`
                                    // char = string[0] => "j"
    console.log(char);              // prints each character
  }
}

// printChar('jj is awesome!');

// Shortcuts
// i++        i += 1        i = i + 1       i++ only increment by 1!!
// i--        i -= 1        i = i - 1       i-- only decrement by 1!!
//            i *= 5        i = i * 5
//            i /= 5        i = i / 5






function printStr(string) {
  // don't forget the `var` keyword when declaring variables!!!
  // for (var i = 0; i < string.length; i++) {
  //   var char = string[i];
  //
  //   console.log(char);
  // }

  var i = 0;

  while (i < string.length) {
    var char = string[i];
    console.log(char);

    i++;
  }
}

// printStr('save me!');                   // <-- call function



// Incrementor / Decrementor Short-Hand Notations

// i = i + 1      i += 1      i++
// i = i - 1      i -= 1      i--
// i = i * 2      i *= 2
// i = i / 2      i /= 2




//////////////////////////////////////////////////////////////////
// Looping Keywords - `break` and `continue`
//////////////////////////////////////////////////////////////////

// `continue` - skips to the next iteration
function skipFive(num) {
  // don't do `num.length` because `num` is already a number
  for (var i = 0; i <= num; i += 1) {
    if (i === 5) {              // condition when to skip
      continue;                 // as soon as it hits `continue` it will INCREMENT!
    }                           // and not run any code below it!

    console.log(i);
  }
}

// skipFive(7);
// prints:
// 0
// 1
// 2
// 3
// 4
// 6
// 7



// `break` - exits the loop
function breakFive(num) {
  for (var i = 0; i <= num; i = i + 1) {
    if (i === 5) {
      // return;
      break;                    // exits out of the LOOP as soon as `break`
    } else {                    // keyword is hit
      console.log(i);
    }
  }

  // `break` vs `return`
  console.log("After the loop");
}

// breakFive(7);
// prints:
// 0
// 1
// 2
// 3
// 4



// `break` vs `return`
// break - exits out of the LOOP
// return - exits out of the entire FUNCTION













// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
// console.log(isPrime(2));           // => true
// console.log(isPrime(10));          // => false
// console.log(isPrime(11));          // => true
// console.log(isPrime(9));           // => false
// console.log(isPrime(2017));        // => true

// A prime number ONLY has 2 factors: 1 and itself!
// 2 is the smallest prime number
// Any number less than 2 are NOT prime!

function isPrime(num) {
  if (num < 2) {                      // check edge case first
    return false;                     // any number less than 2 can not be prime
  }


  // if a number has more than 2 factors it can not be prime
  // use a loop to find any *possible* additional factors
  // check for possible factors b/n 1 and num BUT NOT including 1 and itself!!
  for (var i = 2; i < num; i++) {     // 4      2 3 <-- factors?
    if (num % i === 0) {              // if a factor is found
      return false;                   // `num` can not be prime - return false
    }
  }

  return true;                        // need to wait to make sure there are NO
}                                     // additional factors before we can say
                                      // a number is prime







// console.log(sumNums(4));           // 1 + 2 + 3 + 4 = 10;
// console.log(sumNums(0));           // 0

function sumNums(num) {
  var sum = 0;                        // <-- stores our cummulative result

  for (var i = 1; i <= num; i++) {
    sum = sum + i;                    // adds `i` to stored `sum`
  }                                   // reassigns `sum` to its new value

  return sum;                         // return its cummulative sum after the loop
}




















//.
