/*
Name: Shaheen Ghazazani
August 14th, 2015
Codewars - Js - Nested array summing practice

Instructions:

You are given an array of values.
Sum every number value in the array, and any nested arrays (to any depth). Ignore all other types of values.

Targeted CS concepts:
  Fundamentals
  Recursion
  Algorithms
  Computability Theory
  Theoretical Computer Science
  Arrays
  
Test Cases:
  Test.assertEquals(arraySum([1, 2]), 3);
  Test.assertEquals(arraySum([1, 2, 3]), 6);
  Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);
  
*/

function arraySum(arr) {
    var sum=0; //total sum to return
    for(var a=0;a<arr.length;a++){  //within the first array
        if(typeof arr[a]=="number"){ //is it a number?
            sum+=arr[a]; //if so just add it
        }else if(arr[a] instanceof Array){ //if its an array
            sum+=arraySum(arr[a]); //recusively call it, allowing us to get nested sums
        }
    }
    return sum; //return total clump of integer values combined into one sum
}