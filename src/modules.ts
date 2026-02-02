//namespace: Internal Modules are used to organize code within a single project or file.

namespace Mathoperations {
    export function add(a :number, b:number):number{
        return a + b ;
    }
        export function subtract(a :number, b:number):number{
        return a - b ;
    }
}

let result :number = Mathoperations.add(5,8)
console.log(result)


// External Modules are used when code is split across multiple files.
// refer calculator.js for external module
