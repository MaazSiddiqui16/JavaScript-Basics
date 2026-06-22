class Car {

    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);

  console.log("Car1 name:",myCar1.name);
  console.log("Car1 year:",myCar1.year);
  console.log("Car1 Age:",myCar1.age());
  console.log("Car2 name:",myCar2.name);
  console.log("Car2 year:",myCar2.year);
  console.log("Car2 Age:",myCar2.age());