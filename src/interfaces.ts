
// An Interface is a structure which acts as a contract in our
// application.
//  It defines the syntax for classes to follow, means a class which
// implements an interface is bound to implement all its members.
// Syntax:
// interface interface_name {
//  // variables' declaration
//  // methods' declaration
// }

interface Car {
    make :string
    model: string
    year:number
}

const myCar : Car = {
    make : 'Toyota',
    model :'Corolla',
    year : 2022
}

console.log(myCar)

interface Employee1 {
    name: string;
    age: number;
    position: string;
}

class Manager implements Employee1 {
    name: string
    age:number
    position : string
    constructor(name:string, age:number , position:string){
        this.name = name
        this.age = age
        this.position = position
    }
}

const manager1 = new Manager("John doe",21,"project manager")

console.log(manager1)

interface Calculator {
    add(a:number ,b:number):number,
    sub(a:number ,b:number):number
}

class SimpleCal implements Calculator{
    add(a:number ,b:number):number {
        return a + b
    }

    sub(a:number ,b:number):number {
        return a - b
    }
    
}

const calc = new SimpleCal()
console.log(calc.add(5,6))
console.log(calc.sub(5,6))
