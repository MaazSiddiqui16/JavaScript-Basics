let array = [10,26,3,16,20];

// map() - Example 1
console.log("\nmap:",array.map(Math.sqrt)); //"map" will not alter original array but returns new array
console.log(array);

// map() - Example 2
console.log("\nmap:",array.map(multiply)); //"map" will not alter original array but returns new array
console.log(array);

function multiply(num){
    return num * 10;
}


// The filter() method creates a new array filled with elements that pass a test provided by a function.
console.log("\nfilter:",array.filter(AgeCheck)); // not alter original array but returns new array
console.log(array);

function AgeCheck(age){
    return age >= 18;
}

// The every() method checks if "every" array elements pass a test (provided as a callback function).
console.log("\nevery:",array.every(AgeCheck)); // return boolean value and does not alter the original array.
console.log(array); // print false - bcz not every elem in array is > than 1


// The some() method checks if "any" array elements pass a test (provided as a callback function).
console.log("\nsome;",array.some(AgeCheck)); // return boolean value and does not alter the original array.
console.log(array); // print true - bcz some elem in array is > than 1


// The reduce() method returns a single value: the function's accumulated result.
console.log("\nreduce:",array.reduce(add)); // not alter the original array but returns new array.
console.log(array);

function add(total, num2){
    return total + num2; // 1) 1+2=3 , 2) 3+3=6
}


// The flat() method concatenates sub-array elements. - Example 1
let subArray = [1,2,3,[4,5]]; // Sub-Array
console.log("\nflat1:",subArray.flat()); // not alter the original array but returns new array.
console.log(subArray);

//"flat" - Example 2
subArray = [1,2,[3,[4,5,6],7],8];
console.log("\nflat2:",subArray.flat()); // not alter the original array but returns new array.
console.log(subArray); // not accurate results

console.log("\nflat3:",subArray.flat(2)); // (optional) param of "flat" is basically "depth" of an array by default value is "1".
console.log(subArray); // now accurate results


// The find() method returns the value of the "first" element that passes a test.
console.log("\nfind:",array.find(AgeCheck)); // returns single value of an array which passes the test.
console.log(array);

// The findIndex() method returns the index of the "first" element that passes a test.
console.log("\nfindIndex:",array.findIndex(AgeCheck)); // returns index of "first" array element which passes the test.
console.log(array);


// The splice() method adds and/or removes array elements.
console.log("\nsplice:",array.splice(1,0,12,34)); // it alters original array and returns empty array.
console.log(array);

//splice(1,0,12,34) - "1" is index, "0" is how many elem you want to delete
// "12,34" is the new elements we are adding in original array.
//NEGATIVE VALUES is also allowed in 1st and 2nd param only.