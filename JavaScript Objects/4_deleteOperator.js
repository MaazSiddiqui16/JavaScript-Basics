let human = {
    hands: 2,
    hair_color: ['black', 'brown', 'white'],
    tail: ['big', 'small', 'medium']
};

console.log("\nBefore Deleting the property of 'human' Object." );
console.log(human);

delete human.tail; //using 'delete' keyword to delete the property of an object.

console.log("\nAfter Deleting the property of 'human' Object." );
console.log(human);
