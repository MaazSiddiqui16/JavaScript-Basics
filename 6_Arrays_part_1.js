
let countries = ["Pakistan","India","China","Sri lanka","Bangladesh"];

console.log("Array elements:",countries); // Print all elements
console.log("Array Length:",countries.length); // print Array length
console.log("First element:",countries[0]); // print only first element
console.log("Last element:",countries[countries.length]); // "undefined"
console.log("Last element:",countries[countries.length - 1]); // print last ele.

countries[5] = "Afghanistan"; // adding new country at index "5".
console.log("\nAdding new Country:",countries); // Print modified Array


countries[2] = "Australia"; //replacing "China" at 3rd position with "Australia".
console.log("\nReplacing the Country:",countries); // Array is modified


let mixArray = [12, "Maaz", 0.68, 'L' , false];
console.log("\nArray with multiple data types:",mixArray);

//printing array elements using "for/of" loop
console.log("");
for (const ArrayElements of countries) {
    console.log(ArrayElements);
}

/*********** Arrays have built-in methods in JS **********/
let array = [1,2,3];

// The push() method adds new items to the end of an array.
console.log("\nPush:",array.push(4)); // return new length of an array
console.log(array); // it alters original array


// The unshift() method adds new elements to the beginning of an array.
console.log("\nunshift:",array.unshift(0)); // return new length of an array.
console.log(array); // it alters original array.


// The pop() method removes (pops) the last element of an array.
console.log("\npop:",array.pop()); // return "removed" element.
console.log(array); // it alters original array.


// The shift() method removes the first item of an array.
console.log("\nshift:",array.shift()); // return "shifted" element
console.log(array); // it alters original array.


console.log("\nat:",array.at(2));
console.log(array); //no alter in org array bcz "at" just returns an element at specified index.

console.log("\nindexOf:",array.indexOf(3));
console.log(array); //no alter in org array bcz "indexOf" returns an index of specified element.

console.log("\nincludes:",array.includes(2));
console.log(array); // no alter in org array bcz "includes" returns boolean value.

console.log("\nfill:",array.fill(5)); // "fill" returns a new array with all elements replaced with "5" in this example
console.log(array);

console.log("\nconcat:",array.concat(4,5)); //"concat" will not alter original array but returns new array
console.log(array);

array.pop();
array.pop();
array.pop();
array.push(1,2,3);

console.log("\nreverse:",array.reverse());
console.log(array);

console.log("\nsort:",array.sort());
console.log(array);

console.log("\njoin:",array.join("-")); //"join" will not alter original array but returns new array
console.log(array);

console.log("\ntoString:",array.toString()); //"toString" will not alter original array but returns new array
console.log(array);

console.log("\nslice",array.slice(0,2));
console.log(array);

console.log("\nValidating an array:",Array.isArray("[1,2,3]")); //false
console.log("\nValidating an array:",Array.isArray(array)); //true

console.log("\nMaking an array from string:",Array.from("123456"));