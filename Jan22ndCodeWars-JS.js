// Problem #5 - JS
''' Write a solution to cleanup arrays. This can exisit entirely in the squeakyClean function or contain multiple helper functions.

It should test for valid values, invalid values and edge cases.

Example scenario:

You are building a web app that records user interactions for analytics. Your app should only be interested in real values. For example, \'cta-clicked' or 'header-clicked' would be acceptable values that you'd want your app to store in an array.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = [\'click1\',\'click2\',null,'','',\'submitForm\'];
the solution you write should return this:

var cleanedArray = [\'click1', 'click2','submitForm\']
'''

function squeakyClean(arr) {
  var newArr = [] //new array we will return
  var i = 0 //incrementer
  while (i < arr.length){ //over the array length
    if ((arr[i] !== null) && (arr[i] !== '') && (arr[i] !== undefined) && (arr[i] !== 0)){ //if meets all four not criterias
      newArr.push(arr[i]) // push it to the new array
    }
    i++ //iterate the i to avoid getting stuck in while
  }
  return newArr //return the new array with valid values
}

//Alternative below, using the .filer function with Boolean checker for true, to then filter by all Trues.  
function squeakyClean(arr) {
  return arr.filter(Boolean);
}