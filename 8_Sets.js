//Set is a collection of unique values.
//Each value can only occur once in a Set.

//1st way to create a set - passing an array.
let letters = new Set(["a","b","c"]); //passing an array to a "Set"
console.log("Set1:",letters);
console.log("Set1 size:",letters.size);

//2nd way to create a set - using add() method
let names = new Set();
names.add("maaz");
names.add("zubair");
names.add("bilal");
names.add("javed");
names.add("Ajay"); //only this "Ajay" will be saved.
names.add("Ajay");
names.add("Ajay");
console.log("\nset2:",names);
console.log("Set2 size:",names.size);

console.log();

let values = "";
names.forEach(function(value){
    values += value +"\n";
})
console.log(values);

console.log(names.values()); //returns "set iterator"

let del = names.delete("Ajay"); //Returns true (if element deleted successfully)
console.log(del);
console.log(names);

console.log(names.has("maaz"));  //Returns true if a value exists in the Set

letters.clear(); // delete/remove all elements in a set.
console.log(letters);