/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

// console.log(highestScore(students)); //=> 'TD2'

function highestScore(students) {

  var score = 0;
  var bestStudent = ""

  for (var i = 0; i < students.length; i ++) {
    var studentObj = students[i];
    var firstName = studentObj.name.split(" ")[0];
    var lastName = studentObj.name.split(" ")[1];
    var studentId = studentObj.id;
    var studentScore = studentObj.score;

    if (studentScore > score) {
      bestStudent = firstName[0] + lastName[0] + studentId;
      score = studentScore;
    }

  }

  return bestStudent;
}

// great work on highestScore, this is the toughest problem in this assessment
// good work updated `bestStudent` if we find a higher score
// one thing to note is, although we can assume that `scores` will never be negative
// also think of possibility that someone can put a negative score in our test cases
// think how we would take that into consideration
// -AL

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
