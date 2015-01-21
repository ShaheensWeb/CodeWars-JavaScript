// Problem #4 Below
/* Complete the solution so that it returns true if the first 
argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

// Solution to Problem #4
function solution(str, ending){
  console.log(str, ending) // for testing output
  var returnVal = ((str.substring(str.length - ending.length, str.length)) === ending);
  console.log(returnVal) // returnVal 
  return returnVal
}