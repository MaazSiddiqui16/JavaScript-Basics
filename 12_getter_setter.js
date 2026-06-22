class car{
    constructor(brand){
        this.carname = brand;
    }

    get cname(){
        return this.carname;
    }

    set cname(val){
        this.carname = val;
    }
}

let c = new car("Mehran");
console.log(c.cname); // getter example (remember - no parenthesis used)

c.cname = "Toyota"; // setter example
console.log(c.cname); // (remember - no parenthesis used)