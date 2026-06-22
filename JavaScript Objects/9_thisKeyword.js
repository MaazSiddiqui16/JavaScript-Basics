let person = {
    name: "maaz",
    age: 21,

    Intro() //inside this method we are using the keyword "this" without "this" a method cannot access the internal properties of an object.
    {
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.Intro();