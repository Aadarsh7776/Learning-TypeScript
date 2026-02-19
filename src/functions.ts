
//named function
function display() { console.log("Hello TypeScript!"); }
display(); //Output: Hello TypeScript

//Anonymous function:is defined as an expression.
let display2 = function () { console.log("Hello TypeScript!"); };
display2(); //Output: Hello TypeScript!

function Greet(greeting: string, name: string): string { return greeting + ' ' + name + '!'; }
Greet('Hello', 'abc');//OK, returns "Hello Steve!"
// Greet('Hi');  Compiler Error: Expected 2 arguments, but got 1.
// Greet('Hi','xyz','abc'); Compiler Error: Expected 2 arguments, but got 3.


//optional parameters
function Greet2(greeting: string, name?: string): string { return greeting + ' ' + name + '!'; }
Greet2('Hello', 'abc');//OK, returns "Hello Steve!"
Greet2('Hi'); // OK, returns "Hi undefined!".
// Greet2('Hi','abc','xyz'); Compiler Error: Expected 2 arguments, but got 3.

//default parameters
function Greet3(name: string, greeting: string = "Hello"): string { return greeting + ' ' + name + '!'; }
Greet3('abc');
Greet3('xyz', 'Hi');
Greet3('pqr');

//REST parameter :allows us to pass zero and any type of arguments of the specified type of function

// function function_name(...rest: type[]) {
//   Type of the is the type of the array.
// } 

function getAverage(...args: number[]) {
    var avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
}
console.log("Average of the given numbers is : " +getAverage(10, 20, 30, 40, 50));
console.log("Average of the given numbers is : " + getAverage(1.5, 3.5, 5.5, 7.5, 9.5));
console.log("Average of the given numbers is : " + getAverage(2, 4, 6));


//Arrow Function
let sum3 = (x: number, y: number): number => {
 return x + y; }
sum3(10, 20); //returns 30

let Print = () => console.log("Hello TypeScript");
Print(); //Output: Hello TypeScript

//function overloading : multiple functions with the same name but different parameter
// types and return type.

function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a: any, b:any): any {
return a + b; }
add("Hello ", "abc")