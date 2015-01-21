/*  
Problem #2:
Let\'s make a prototype function which can \'move\' the element of an array, and then return the result as a new one.
The \'move\' function accepts two parameters. from and to, the former is the element you want to reordering, the latter is the destination index of your target element.

There are two condition you should aware:

If the target you assgin doesn\'t exist, return \'no target\'.
If the detination index is over the length of array, it should insert undefined to the blank until it has enough length to do the movement.
var arr = ["a", "b", "c"];

arr.move(0,2); // -> ["b", "c", "a"]
arr.move(2,0); // -> ["c", "a", "b"]
arr.move(1,5); // -> ["a", "c", undefined, undefined, undefined, "b"]
arr.move(5,1); // -> \'no target\'
arr            // -> still ["a", "b", "c"] */

// SOLUTION TO PROBLEM #2:

Array.prototype.move = function(from, to) {
  if (from >= this.length) return 'no target'
  
  var a = this.concat()
  var e = a.splice(from, 1)[0]
  
  if (to > a.length) {
    a[to] = e
  } else {
    a.splice(to, 0, e)
  }
  
  return a
}
// SOME EXTRA TESTING

var ArrayTest = ['a', 'b', 'e']
console.log("the origin array below")
console.log(ArrayTest.toString())
var newArr = ArrayTest.move(0, 2)
console.log("We Did, Array.move(0,2) If array below is ['b', 'e', 'a']")
console.log("Then we have correctly implemented the function .move")
console.log("<----- ARRAY BELOW AFTER .move ------->")
console.log((newArr).toString() + "\nWE DID ITTT :D")
