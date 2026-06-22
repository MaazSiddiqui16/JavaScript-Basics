let human = {
    'skin color': ['black', 'white','normal'],
    hands: 2,
    legs: 2
};

//Two ways to access the property of Objects
// 1. Dot Notation ( . ) (use when 'keys' doesn't have any special character).
// 2. Bracket Notation ( [] ) (use when 'keys' have special character).

//To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

console.log("Human hands:",human.hands); //accessing and printing the property of 'human' object using "dot notation".
console.log("Human skin color:",human['skin color']); //accessing and printing the property of 'human' object using "bracket notation".

//printing the exact same thing as above but with different method (using 'Template Literals').
console.log(`Human hands: ${human.hands}`);
console.log(`Human skin color: ${human['skin color']}`);


/* We "must" use bracket notation when accessing keys that have numbers, 
spaces, or special characters in them. Without bracket notation in these 
situations, our code would throw an error.*/
