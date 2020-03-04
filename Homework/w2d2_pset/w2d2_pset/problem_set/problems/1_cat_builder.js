/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:
***********************************************************************/
var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
// cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
console.log(cat1);
var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
//cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
console.log(cat2);

function catBuilder(name, color, toys) {
  var cat = {
    "name": name,
    "color": color,
    "toys": toys
  }
  return cat;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = catBuilder;
