//Problem 8 in JS
'''Your job is to write a function which increments a string, to create a new string. If the string already ends with a number,
 the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043
Attention: If the number has leading zeros the amount of digits should be considered. '''

//Solution to Problem 8 JS
function incrementString (input) {
  return input.replace(/\d*$/, function (n) {
    var z = Array.apply(null, Array(n.length + 1)).join('0');
    return r = (+n + 1), z.substring(('' + r).length) + r;
  });
}