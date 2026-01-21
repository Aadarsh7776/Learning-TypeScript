// user defined datatypes
// Data Type:Array
var list = [1, 3, 5]; //basic syntax
console.log(list[1]);
list[1] = 5;
list[3] = 4; // Assigning value beyond current length expands the array (creates sparse array)
console.log(list);
var names = ["Shiv", "Aadarsh", "Parth"]; //generic syntax
console.log(names);
//Data Type:tuple
// Tuple is a fixed length and fixed type array
let a;
a = ["Hi", 1]; // Correct initialization according to tuple structure
// Tuples are fixed-length by type, but push/pop is allowed at runtime (unsafe)
console.log(a);
a.push("Hello");
console.log(a);
a.push("Hello,world!");
console.log(a);
//Data Type:Class
// Class representing Employee entity
class Employee {
    // Constructor to initialize object
    constructor(code, name) {
        this.empName = name;
        this.empCode = code;
    }
}
// Creating instances of Employee class
let emp1 = new Employee(121, "Shiv");
let emp2 = new Employee(122, "Aadarsh");
let emp3 = new Employee(123, "pauras");
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp3.empCode);
class Customer {
    constructor(name, balance) {
        this.Cname = name;
        this.CBalanace = balance;
    }
    deposit(amount) {
        this.CBalanace += amount;
        console.log(`disposit amount:${amount}`);
        console.log(`disposit amount:${this.CBalanace}`);
    }
    withdraw(amount) {
        this.CBalanace -= amount;
        console.log(`disposit amount:${amount}`);
        console.log(`Current balance:${this.CBalanace}`);
    }
}
let c1 = new Customer("Aadarsh", 3000);
console.log(c1);
console.log(c1.withdraw(200));
console.log(c1.deposit(1000));
