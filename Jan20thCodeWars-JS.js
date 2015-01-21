//Problem #3
/*
Write a function that returns true if a given value is a true Int32 integer. It should accept two arguments:
int this value is the basis for any testing done. It should be a primitive 32-bit integer number value.
(Be careful: JavaScript can have 64-bit floats that happen to have no decimal place, and so may look like
integers. These are not valid Int32 values.) byteLength is an optional value (may be omitted or be a null or undefined value). 
If provided, it will be a primitive integer from 0 to 32. For the int to be valid, it should have no data (1s) beyond (byteLength) 
bits, counting from right to left.
*/

//Solution to problem #3

function isInt32(int, byteLength) {
  var bits = (byteLength == null || byteLength == undefined) ? 32 : byteLength; //ternary operator around null or defined, 
  																				//if both false assign byteLength as val, otherwise 32
  var allOnes = parseInt(new Array(bits+1).join('1'), 2); //study this line more
  return (int & allOnes) === int; //if int and allOnes which parseInt(arr) === int, its true, else, false. 
}