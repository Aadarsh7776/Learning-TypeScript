/* Variable Declaration Keywords
Same as JavaScript:
    let
    const
    var (avoid)
Rule:
    Use const by default
    Use let when value changes
    var has funvtion scope can be ssen outside its code block

type Annotations :
    Syntax
        let variableName: type = value;
*/



let message: string = "Hello,world!"
console.log(message) 

// function f(a) {
//  var a;
//  var a;
//  if (true) {
//  var a;
// } }
// let a = 10;
//  let a = 20; it gives error: can't re-declare 'a' in the same scope
// console.log(f(a))

// Shadowing
var currencySymbol = "$";
function showMoney(amount :string) {
 let currencySymbol = "€"; //Shadowing :declares an identifier which has already been declared in an outer scope
 console.log(currencySymbol + amount);
}
showMoney("100"); 

//  Hoisting Example
function hoistingDemo() {
    // --- var hoisting ---
    // @ts-ignore (to bypass TS compiler warnings for demo)
    console.log("var before declaration:", myVar); // Output: undefined
    var myVar = "Available but unassigned";

    // --- let hoisting ---
    try {
        // @ts-ignore
        console.log(myLet); 
    } catch (e) {
        console.log("let before declaration: ReferenceError! (TDZ)");
    }
    let myLet = "Available only after this line";
}

hoistingDemo();