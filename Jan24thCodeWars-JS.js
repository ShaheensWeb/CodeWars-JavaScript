// Welcome to day 7! Heres the JS Problem set below
// Not that hard of a problem set 
''' You\'re given a string which contains single space separated words. Your task is to reverse the order of words in the string:

reverseWords("hello world!") // => "world! hello"
reverseWords("foobar")       // => "foobar"
reverseWords("kata editor")  // => "editor kata"
As you can see, a word in the sense of this kata is any non-space sequence of ASCII characters.''' 

// Solution to problem above

function reverseWords(str){
  var returnVal = str.split(' ').reverse().join(' ');  //use a place holder
  return returnVal; // reverse those words with given split place holder val
}

/* above was my first submission, which was correct
but programmers really like 1 line solutions, so look below */

function reverseWords(str){ //reverseWords = Function name, str = function parameter input string
  return (str.split(' ').reverse().join(' ')); //return it all in one line
}

