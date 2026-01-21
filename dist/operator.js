/**
 * TYPESCRIPT OPERATORS OVERVIEW
 */
// 1. Arithmetic Operators
let sum = 10 + 5; // Addition
let diff = 10 - 5; // Subtraction
let mult = 10 * 5; // Multiplication
let div = 10 / 5; // Division
let mod = 10 % 3; // Remainder (1)
let exp = Math.pow(2, 3); // Exponentiation (8)
let inc = 1;
inc++; // Post-increment
let dec = 1;
--dec; // Pre-decrement
// 2. Comparison Operators
//let isEqual = (5 == "5");    // true (Abstract equality) error:In strict TypeScript, comparing different types is considered a bug, even with ==
let isStrict = (5 === 5); // true (Strict equality - Recommended)
//let isNotEqual = (5 !== 6);  // always true ts will flag this pointless
let greater = (10 > 5); // true
let lesser = (10 < 20); // true
// 3. Logical Operators
let and = true && false; // Logical AND
let or = true || false; // Logical OR
let not = !true; // Logical NOT
// 4. Bitwise Operators
let bitAnd = 5 & 1; // AND
let bitOr = 5 | 1; // OR
let bitXor = 5 ^ 1; // XOR
let bitNot = ~5; // NOT
let leftShift = 5 << 1; // Left shift
let rightShift = 5 >> 1; // Right shift
// 5. Assignment Operators
let x = 10;
x += 5; // x = x + 5
x -= 2; // x = x - 2
x *= 3; // x = x * 3
x /= 4; // x = x / 4
x %= 2; // x = x % 2
x = Math.pow(// x = x % 2
x, 2); // x = x ** 2
// 6. Miscellaneous Operators
let ternary = (10 > 5) ? "yes" : "no"; // Conditional operator
let spread = [...[1, 2], 3]; // Spread operator
let Name = {
    fname: 'abc',
    lname: 'pqr'
};
console.log('fname' in Name);
let a1 = 'something';
console.log(typeof a1);
delete Name.fname;
console.log(Name);
