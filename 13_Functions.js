// Example 1: A simple function to say hello
// This function takes a name as input and prints a greeting message.
function sayHello(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
}

// Calling the function
sayHello("Maaz");
sayHello("Alice");

console.log("------------------------");

// Example 2: A function to add two numbers
// This function takes two numbers, adds them together, and returns the result.
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Storing the returned value in a variable and printing it
let result = addNumbers(5, 10);
console.log("The sum of 5 and 10 is: " + result);

console.log("------------------------");

// Example 3: A function to check if a number is even or odd
// This function uses the modulo operator (%) to find the remainder.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    } else {
        console.log(number + " is an Odd number.");
    }
}

// Calling the function with different numbers
checkEvenOrOdd(7);
checkEvenOrOdd(12);
