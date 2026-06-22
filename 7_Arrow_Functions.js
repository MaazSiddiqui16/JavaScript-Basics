// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax.


// syntax of arrow function
let test = () => {
    console.log("Arrow function testing");
}

test(); //calling arrow function


// A function that multiply 2 numbers.
let mul = (a,b) => a * b; 
console.log(mul(4,4));


// this works only if the function has only 1 statement.
let hello = () => "Hello jee!!"; 
console.log(hello());


// you can pass parameters (if you want)
let hello2 = (val) => "Hello " + val; 
console.log(hello2("Universe"));


// In fact, if you have only one parameter, you can skip the parentheses as well
let hello3 = val => "Hello " + val;
console.log(hello3("bhai"));


// my arrow function
let myarrowfunc = (a,b,c) => {
    let sum = a + b + c;
    let avg = sum/3;
    console.log("sum is:",sum);
    console.log("avg is:",avg.toFixed(4));
}

myarrowfunc(1,5,4);