// logEach

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
  for (var i = 0; i < array.length; i += 1) {
    console.log(i + ": " + array[i]);
  }
}

// range

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// console.log(range(1,4)); // => [1,2,3,4]
// console.log(range(4,2)); // => []

function range(start, end) {
  var arr = []
  for (var i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr
}

// sumArray

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

function sumArray(array) {
  var running_total = 0
  for (var i = 0; i < array.length; i += 1) {
    running_total += array[i];
  }
  return running_total
}

// capWords

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words) {
  var result = []
  for (var i = 0; i < words.length; i += 1) {
    result.push(words[i].toUpperCase());
  }
  return result
}

// wordPeriods

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// console.log(wordPeriods('hello world')); // => 'hello. world.'
// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

function wordPeriods(sentence) {
  var result_arr = []
  var split_sentence = sentence.split(" ")
  for (var i = 0; i < split_sentence.length; i += 1) {
    result_arr.push(split_sentence[i] + ".");
  }
  return result_arr.join(" ")
}

// maxValue

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// console.log(maxValue([12, 6, 43, 2])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

function maxValue(array) {
  var max = null;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (num > max || max === null) {
      max = num
    }
  }
  return max;
}

// myIndexOf

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// console.log(myIndexOf([1,2,3,4],4)) // => 3
// console.log(myIndexOf([5,6,7,8],2)) // => -1

function myIndexOf(array, target) {
  for (var i = 0; i < array.length; i += 1) {
    var element = array[i]

    if (element === target) {
      return i
    }
  }return -1;
}

// factorArray

// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

function factorArray(array, number) {
  result_arr = []

  for (var i = 0; i < array.length; i += 1) {
    var element = array[i];

    if (number % element === 0) {
      result_arr.push(element);
    }
  }
  return result_arr;
}
