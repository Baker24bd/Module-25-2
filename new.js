class Parson {
    constructor(firsName, lastName, salary){
        this.firsName = firsName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroParson = new Parson('Hero', 'Alom', 25000);
console.log(heroParson);