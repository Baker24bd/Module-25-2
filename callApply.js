const normalParson = {
    firstName: 'korim',
    lastName: 'uddin',
    salary: 30000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// normalParson.chargeBill(150);
// console.log(normalParson.salary);

const heroParson = {
    firstName: 'hero',
    lastName: 'alom',
    salary: 35000,
}

const friendsParson = {
    firstName: 'hero',
    lastName: 'jamal',
    salary: 34000,
}

// const heroChargeBill = normalParson.chargeBill.bind(heroParson);
// heroChargeBill(1500);
// heroChargeBill(1500);
// console.log(heroParson.salary);
// console.log(normalParson.salary);

// const friendChargeBill = normalParson.chargeBill.bind(friendsParson);
// friendChargeBill(3200);
// friendChargeBill(100);
// console.log(friendsParson.salary);

// normalParson.chargeBill.call(heroParson, 500, 50, 10);
// console.log(heroParson.salary);

// normalParson.chargeBill.call(friendsParson, 1000, 500, 100);
// console.log(friendsParson.salary);
// console.log(normalParson.salary);

normalParson.chargeBill.apply(heroParson, [1500, 400, 50]);
normalParson.chargeBill.apply(heroParson, [1000, 450, 100]);
console.log(heroParson.salary);