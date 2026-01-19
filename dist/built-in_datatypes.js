// built-in types
// Data type: string
let str = "String";
console.log(str);
// Data type: Number
let num = 123;
console.log(num);
// Data type: Boolean
let bool = true;
console.log(bool);
// Data type: Undefined
let undef = undefined;
console.log(undef);
// Data type: Null
let empty = null;
console.log(empty);
// Data type: Void
let void_var = undefined;
// In non-strict mode: void can be undefined | null
// In strict mode: void = only undefined
//in typescript void is mainly meant for functions
console.log(void_var);
// Data type: Void
void_var = null;
//not valid in modern strict typescript where strictNullChecks = true
console.log(void_var);
/*
void_var = 123//will throw error because we can't assign value to null variable because it doesn't have any value
console.log(void_var)
*/
// Data type:any
let data = 10;
// We use any as an "escape hatch" to opt out of type-checking, allowing a variable to behave like dynamic JavaScript when its structure is unknown or too complex to define.
//use of any is not prefered cause once you use it typescript stops protecting you 
// for safer side we can use unknown
console.log(data);
data = "hello";
console.log(data);
data = true;
console.log(data);
// Data type:unknown
let value;
value = 10;
console.log(value);
value = "hello";
// console.log(value.toUpperCase()) will throw error
// Must check type before use
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function helloUser() {
    console.log("this is a welcome message");
}
helloUser();
