let dog = {
    legs: 4,
    breed: 'German Shepherd',
    Barking()  //creating a method (using ES6's new way).
    {
        console.log("Bow....Bow..!!");
    } ,

    sleep: function()  //creating another method (using old way).
    {
        console.log("Zzz... Goodnight, world!");
    }
};

dog.Barking(); //calling the method.
dog.sleep();