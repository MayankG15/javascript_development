// const student = {
//     fullname : "mayank goyal",
//     marks : 94.4,
//     printMarks: function () {
//         console.log("marks are = ",this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
//     calcTax2 : function () {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };

// karanArjun.__proto__ = employee;

// class ToyotaCar {
//     constructor(brand,mileage) {
//         console.log("create new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName= brand;
//     }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus",20);
// console.log(lexus);

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class child extends Parent {

// }

// let obj = new child(); 

// class Person{
//     constructor(name) {
//         this.species = "homo Species";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("Do Nothing");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         super(name);
//         this.branch = branch;
        
//     }
//     work() {
//         super.eat();
//         console.log(" solve problems, build something");
//     }
// }


// let engObj = new Engineer("chemical Engineer");
// let engObj = new Engineer("mayank goyal");

let DATA = "secret information";

class User {
    constructor(name,email) {
        this.name = name;
        this.email= email;
    }
    viewData() {
        console.log("data", DATA);
    }
}

class admin extends User {
    constructor(name,email){
        super(name,email);

    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("mayank","abc@123");
let student2 = new User("ritik","xyz@123");

let teacher1 = new User("dean","dean@123");

let admin1 = new admin("admin","aadmin@123");