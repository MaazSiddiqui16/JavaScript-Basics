// there are total 8 Data Types in JavaScript
// 7 - Primitive (null,undefined,boolean,String,Number,BigInt,Symbol)
// 1 - Non-Primitive (Object) - ex: Object, Array, and Date
// Primitive types are predefined (already defined).
// Non-primitive types are created by the programmer and is not defined by Java (except for String)

/* Remember we don't specify any data type while declaring & initializing a 
variable because JS is a dynamically-typed Language. */

let a = 5; // Here "a" is a Number
console.log(a);

let b = "Hello"; // Here "b" is a String (Single Quotes can be used)
console.log(b);

let c = true; // Here "c" is a boolean (either True or False)
console.log(c);

let d; // Here "d" is undefined
console.log(d);

let e = null; // Here "e" is null (empty)
console.log(e);


//BigInt - Example
let f = 999999999999999; // "Number" data type can accurately represent integer values upto 15 digits.
console.log("15 Digit Number : " + f); // print "999999999999999"

f = 9999999999999999; //Now this 16 digit value will round-off
console.log("16 Digit Number : " + f); // print "10000000000000000"

/* so for solving above issue we must append "n" at the last. 
            or 
call "BigInt()" function and pass the value inside the "()"
*/

f = BigInt("9999999999999999999");
console.log("BigInt : " + f);
console.log(typeof f);


//Symbol - Example
/* we can pass any type of value inside "Symbol()" */
let sym1 = Symbol("id-1"); // Here "sym1" is symbol which contains a unique value. ("id-1") is called "identifier" or description
let sym2 = Symbol("id-1"); // Here "sym2" is symbol which contains a unique value.
console.log(sym1 === sym2); // "sym1" and "sym2" are still 2 diff. values. so it will print "false".
console.log("Symbol is : " + sym1.toString());
console.log("Symbol Description/identifier is : " + sym1.description);

/* One way to use "Symbols" inside the Objects */
let Person = {
    name: "xyz",
    gender: "male",
    [sym1]: 1  //here we are using "sym1" as a key which is taken from above (line 46).
};

Person[sym2] = 2; //Another way to use "Symbols" inside the Objects.

console.log(Person);
console.log("Person name is : " + Person.name);
console.log("Symbol1 value inside \"Person\" Object is : " + Person[sym1]); // to access "symbol" value inside the object.
console.log("Symbol2 value inside \"Person\" Object is : " + Person[sym2]);
console.log(JSON.stringify(Person)); //converting the object "Person" into JSON format.


//Object - Example
let g = [1,2,3,4]; // Here "g" is an Array
console.log(g); // print all elements of an array

let person = {          //Here "person" is an Object which have properties.
    First_Name: "Maaz",
    Last_Name: "Siddiqui",
    Age: 21
    //and so on....
};

let h = new Date(); //creating obj for "date" class;
console.log("Date : " + h.getDate() + "-" + h.getMonth() + "-" + h.getFullYear());
