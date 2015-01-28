// Problem set of JS 9
''' Write isArray polyfill function. Use Array.isArray to define method.

For example:
Array.isArray( [1,2,3] );  // true
Array.isArray( new Array() ); // true

Array.isArray( undefined ); // false
Array.isArray(17); // false'''

// This function should define if value is Array
Array.isArray = function(value) { //making a dot function, named isArray, with input (value). 
  if( Object.prototype.toString.call(value) === '[object Array]' ) { //The method given in the ECMAScript standard to find the class of Object is to use the toString method from Object.prototype.
    return true;  //if above if is true, its an array
  }else{
    return false;  //otherwise it has to be false, not an array. 
  }
};

//below is an extra solution
// This function should define if value is Array
Array.isArray = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

//basic one line solution doing what i did, since return will auto give a boolean of true or false, identical func, one less line.
