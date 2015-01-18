/*PROBLEM #1:
You have an array of numbers 1 through 10. The array needs to be formatted correctly 
for the person reading the countdown of a spaceship launch. Unfortunately, the person reading 
the countdown only knows how to read strings. After the array is sorted correctly make sure it's
in a format he can understand. Between each number should be a space and after the final number (1) 
should be the word 'liftoff!'

Example:
// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!" */


//SOLUTION TO PROBLEM #1
function liftoff(instructions){ //function name: liftoff, input=list name=instructions
  var sortedInstructions = instructions.sort(function(a, b){return b-a}) //format values from highest to lowest
  var returnVal = '' //empty return string to add to 
  for (i = 0; i < instructions.length; i++) { //loop over length of list and add
    returnVal += sortedInstructions[i] + " " //highes to lowest number
  }
  returnVal += "liftoff!" //now add liftoff!
  return returnVal //and return the string
  
}