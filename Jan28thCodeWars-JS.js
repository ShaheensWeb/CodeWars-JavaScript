//Question for problem 10, js, codewars DAILY :D

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters that occur more than once in the given string. The given string can be assumed to contain only uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'

*/

// Solution to Problem 10 JS
function duplicateCount(text){ //function name: duplicateCount, input = text
  text = text.toLowerCase() //lower case it to avoid errors of cap case differences
  return text.split('').filter(function (c, i) { //return a function that split each value filtering with input param c, i
    return text.indexOf(c) == i && text.indexOf(c) != text.lastIndexOf(c) //count the max recurrence and return value using
  }).length //the length of the value. 
} //end func