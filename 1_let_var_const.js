//Difference between "let", "var", and "const".

console.log("\"let\" - example");
let my_name = "maaz";

// let my_name = "jawad"; - "let" doesn't allow you to create another variable with the same name.
console.log(my_name); //print "maaz"

my_name = "Muaaz";
console.log(my_name) //"let" allows reassignment.

{
    let my_name1 = "Fahad";
}

// console.log(my_name1); - you can not use "my_name1" variable outside the block using "let" because it is 
// "block scope".


console.log("\n\"var\" - example");
var age = 21;

var age = 20; //"var" allows you to create another variable with the same name.
console.log(age); //it will print "20" and not "21".

age = 40;
console.log(age); //"var" also allows reassignment.

{
    var age1 = 55;
}

console.log("age is "+ age1); //you can use "age1" variable outside the block using "var" because it is 
// "global scope"



console.log("\n\"const\" - example");
const gender = "male";

//const gender = "female"; - "const" just like "let" also doesn't allow you to create another variable with 
// same name.

console.log(gender);

/*gender = "female";
console.log(gender) - will give an Error "Assignment to constant variable" means reassignment is not allowed 
in "const".*/

{
    const gender1 = "M"
}

// console.log("Gender is " + gender1) cannot use 'gender1' variable outside the block using 'const' as well.