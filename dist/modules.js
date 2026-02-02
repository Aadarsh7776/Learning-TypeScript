//namespace: Internal Modules are used to organize code within a single project or file.
var Mathoperations;
(function (Mathoperations) {
    function add(a, b) {
        return a + b;
    }
    Mathoperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Mathoperations.subtract = subtract;
})(Mathoperations || (Mathoperations = {}));
let result = Mathoperations.add(5, 8);
console.log(result);
// External Modules are used when code is split across multiple files.
// refer calculator.js for external module
