//Problem set 6 -> JS -> Jan 23rd, 2015
''' A palindrome is a string which reads the same forward and 
backward. It can be a word or a sentence. Examples are:

abba
Mom!
Dad?
If I had a hi-fi...
Create a function which determines for a given string if it\'s a palidrome or not. For this task the following properties must be fulfilled:

return a boolean value
consider an empty string as a legal word
ignore case
ignore whitespace and punctuation
'''
//Solution to problem 6
function isPalindrome(word)
{
  word = word.replace(/[^a-z]/gi,'').toLowerCase(); //lower case the word
  return word.split('').reverse().join('') === word; //split, reverse, and join the white space, if that triple equals(js equality)
  //then you found the right word, and return will auto to boolean
}
