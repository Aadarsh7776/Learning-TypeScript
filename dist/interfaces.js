// An Interface is a structure which acts as a contract in our
// application.
//  It defines the syntax for classes to follow, means a class which
// implements an interface is bound to implement all its members.
// Syntax:
// interface interface_name {
//  // variables' declaration
//  // methods' declaration
// }
const myCar = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022
};
console.log(myCar);
class Manager {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
const manager1 = new Manager("John doe", 21, "project manager");
console.log(manager1);
class SimpleCal {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
}
const calc = new SimpleCal();
console.log(calc.add(5, 6));
console.log(calc.sub(5, 6));
