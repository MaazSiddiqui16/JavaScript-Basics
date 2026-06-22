let age = 45;
let num = Math.floor(Math.random() * 10) + 1; //returns a random num from (1-10)

// Conditionals - Example 1 (Checking eligibility for voting)
if (age >= 18)
{
    console.log("You are eligible for vote");
}

else 
{
    console.log("You are not eligible for vote");
}


// Conditionals - Example 2 (Finding Odd and Even Number)
if (num % 2 == 0) 
{
    console.log(`\n${num} is a Even number`); //using "Template Literal"
} 
else 
{
    console.log(`\n${num} is a Odd number`);
}


// Conditionals with "else-if" - Example 3 (Doing Comparison b/w two variables)
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

console.log(`\nValue of a is: ${a}`);
console.log(`Value of b is: ${b}`);

if (a === b) 
{
    console.log(`${a} is equal to ${b}`);
} 

else if(a > b)
{
    console.log(`${a} is greater than ${b}`);
}

else 
{
    console.log(`${a} is less than ${b}`);
}


// "Switch" Statement - Example 1
let day = Math.floor(Math.random() * 7) + 1;

switch (day) {
    case 1:
        console.log("\nMonday");
        break;

    case 2:
        console.log("\nTuesday");
        break;

    case 3:
        console.log("\nWednesday");
        break;

    case 4:
        console.log("\nThursday");
        break;

    case 5:
        console.log("\nFriday");
        break;

    case 6:
        console.log("\nSaturday");
        break;

    case 7:
        console.log("\nSunday");
        break;

    default:
        console.log("\nInvalid Day!!!!");
        break;
}