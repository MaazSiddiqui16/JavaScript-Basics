// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

//1st way to create a Map - passing an array
let Avengers = new Map([
    [1, "Tony Stark"],
    [2, "Steve Rogers"],
    [3, "Thor Odinson"],
    [4, "Bruce Banner"],
    [5, "Hawk-eye"],
    [6, "Black Widow"]
]);

console.log("Map:",Avengers);
console.log("Map size:",Avengers.size);

//2nd way to create a Map - using set() method
let teams = new Map();
teams.set(1,"Pakistan");
teams.set(2,"India");
teams.set(3,"Sri Lanka");
teams.set(4,"Bangladesh");
teams.set(5,"Afghanistan");

console.log("\n",teams);
console.log("\nvalue of key '4' is:",teams.get(4)); //The get() method gets the value of a key in a Map.

teams.delete(5); //remove the element
console.log("\n",teams);

console.log(teams.has(2)); //returns true if a "key" exists in a Map


let output = "";
teams.forEach(function(val,key){
    output += key + " = " + val + "\n";
})

console.log(output);