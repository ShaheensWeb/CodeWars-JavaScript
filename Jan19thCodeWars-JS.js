	
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
     
    Array.prototype.move = function (target_index, new_index) {
    	if (target_index >= this.length) { return "no target"; } //check the bounds
   
    	var tmp = this.slice(); //copy the array form dot function of (this) to get a copy of it to temp
    	var elem = String(tmp.splice(target_index, 1)); //Use temp to modify and splice given target index
  
    	(new_index >= this.length) ? tmp[new_index] = elem : tmp.splice(new_index, 0, elem); //ternary operator (a>b)?true:false
  
    	return tmp;//return the ahrray back
    };
 
    // SOME EXTRA TESTING
     
    var ArrayTest = ['a', 'b', 'e']
    console.log("Below is the array we are testing")
    console.log(ArrayTest.toString())
    var NewArray = ArrayTest.move(0, 1)
    console.log("If array below is ['b', 'a', 'e']. Then move is correctly implemented")
    console.log(NewArray.toString())
    console.log("We Did it!!!")

