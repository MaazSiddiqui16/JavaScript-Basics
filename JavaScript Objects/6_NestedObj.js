let human = {
    'skin color': ['black', 'white','normal'],
    hands: 2,
    legs: 2,
    lips: {             //creating nested object
        upperlip: 1,    //property of 'lips' object.
        lowerlip: 1
    }
};

console.log("human lips:",human.lips); //printing the properties of 'lips' Object.
console.log(`Upperlip: ${human.lips.upperlip}`); //accessing prop. of 'lips'
console.log(`Lowerlip: ${human.lips.lowerlip}`);
