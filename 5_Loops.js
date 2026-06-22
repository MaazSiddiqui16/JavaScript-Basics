// Loops can execute a block of code a number of times.
// There are 6 different kinds of loops in JS.
/*
    1) for      - loops through a block of code a number of times
    2) for/in   - loops through the properties of an object
    3) for/of   - loops through the values of an iterable object (Arrays,Strings)
    4) while    - loops through a block of code while a specified condition is true
    5) do/while - loops through a block of code at least once, even if the condition is false.
    6) forEach() - It is a method that is call upon any "Array"
*/

// "for" loop (when "index" is important) - Example
let ARRAY = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index <= 9 ; index++) {
    console.log("Element " + index + ": " + ARRAY[index]); // Here referring to "ARRAY" is important
}


// "for/in" loop - Example
let Book = {                            //creating "Object"
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Year_Of_Publication: 1960,
    Language: "English"
};

console.log("");

for (const key in Book) {
    console.log(key + ": " + Book[key]);
}


// "for/of" loop (when "index" is not important) - Example
let myArray = [1,2,3,4,5];

console.log("");

for (const elements of myArray) {
    console.log(elements); // Here referring to "myArray" is not important.
}


//"while" loop - Example
let i = 1;

console.log("");

while (i <= 10) {
    console.log("Value of i is:",i)
    i++;
}


// "do-while" loop - Example
let a = 101;

console.log("");

do {
    console.log(a); // The code inside "do" will execute at least once then it will check condition
    a++;
} while (a <= 110)


// "for-each" loop - Example 1
let names = ["Maaz" , "Dheeraj" , "Zubair" , "Ajay" , "Ali"];

console.log("");

names.forEach(function(values) {    // 1 param only for "values"
    console.log(values); // only values will print
});


// "for-each" loop - Example 2
console.log("");

names.forEach(function(values,index) {  // 2 param for both index and values
    console.log(index +": "+ values); // Now index will also print
});
