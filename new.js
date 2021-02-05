class Parson {
    constructor(firsName, lastName, salary){
        this.firsName = firsName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroParson = new Parson('Hero', 'Alom', 25000);
console.log(heroParson);
const friendsParson = new Parson('Hero', 'kalam', 20000);
console.log(friendsParson);

function Parson1(firsName, lastName, salary){
    this.firsName = firsName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldParson = new Parson1('Niha', 'AKter', 1200);
console.log(oldParson);