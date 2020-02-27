// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.

// Write two versions of this function, using conditionals and without using conditionals

// Examples:
// console.log(isSubstring("The cat went to the store", "he cat went"));     // => true
// console.log(isSubstring("Time to program", "time"));                      // => true**
// console.log(isSubstring("Jump for joy", "joys"));                         // => false

function isSubstring(searchString, subString) {
  // 1. check if `subString` is found inside `searchString` - use indexOf
  // 2. example 2 - case insensitive* - lowercase everything first!!
  // 3. whole.indexOf(part) -> returns a number (index)

  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  if (lowerSearchStr.indexOf(lowerSubStr) !== -1) {
    return true;
  } else {
    return false;
  }
}







//.
