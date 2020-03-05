// Nested Loops - loop inside of a loop

// print out the following:

// class1:                          // <-- outer loop
//   student1                       // <--- inner loop
//   student2
//   student3
// class2:
//   student1
//   student2
//   student3
// class3:
//   student1
//   student2
//   student3

// class1
// class2
// class3

function printClass() {
  for (var i = 1; i <= 3; i++) {
    console.log("class", i);
                                        // inner loop iterate 3 times before `i` increments
    for (var j = 1; j <= 3; j++) {      // inner loop must complete
      console.log("    student", j);    // entire loop before the outer
    }                                   // loop can increment
  }
}

// printClass();











//  return an array of pairs (students are allowed to pair
// up with "them selfs" )
var arr = ['Jason', 'Clara', 'Ricky'];
// pairs(arr) =>
// [
//   'Jason Jason',
//   'Jason Clara',
//   'Jason Ricky',
//   'Clara Jason',
//   'Clara Clara',
//   'Clara Ricky',
//   'Ricky Jason',
//   'Ricky Clara',
//   'Ricky Ricky',
// ]

function allPairs(array) {          // ["Jason", "Clara", "Ricky"]
  var pairs = [];                   // []

  for (var i = 0; i < array.length; i++) {
    var student1 = array[i];        // "Jason"

    for (var j = 0; j < array.length; j++) {      // looping through same array
      var student2 = array[j];      // "Jason"

      pairs.push(student1 + " " + student2);
    }
  }

  return pairs;
}

// console.log(allPairs(arr));










// return an array of unique pairs (students are not
// allowed to pair up with students they paired
// with before)

var arr = ['Jason', 'Clara', 'Ricky'];

// uniquePairs(arr) =>
// [
//   'Jason Clara',
//   'Jason Ricky',
//   'Clara Ricky',
// ]

function uniquePairs(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i++) {
    var student1 = array[i];        // "Jason"

    for (var j = i + 1; j < array.length; j++) {
      var student2 = array[j];      // "Clara"

      // want to make sure `j` is always greater than `i`
      // so that we never go back and pair with itself
      // or anything before it - to prevent duplicates
      pairs.push(student1 + " " + student2);
    }
  }

  return pairs;
}

// console.log(uniquePairs(arr));








// Multidimensional Arrays - Arrays within an array

//print out each element of the subArray
var arr = [
  [1, 2, 3, 4],                     // each element is an array
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

function printSubArrEle(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    var innerArr = arr[i];          // [1, 2, 3, 4]

     for (var j = 0; j < innerArr.length; j++) {
       var num = innerArr[j];       // 1

       sum += num;
       // console.log(num);
     }
  }

  return sum;
}

// console.log(printSubArrEle(arr));
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  // 10
  // 11
  // 12










// return an arary of pairs' indicies that sums up to 6
// (should be unique)
// console.log(sixSum([1,3,5,6,0,3]));  // => [[0, 2], [1, 5], [3,4]]
// console.log(sixSum([1,3,4]));        // => []

// returns an array of INDICES (NOT the number itself)
// get unique pairs
function sixSum(arr) {
  var pairs = [];

  for (var i = 0; i < arr.length; i++) {
    var num1 = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      var num2 = arr[j];

      // check if sum is equal to 6
      if (num1 + num2 === 6) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}





// break time :)





//.
