"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperation = void 0;
var MathOperation;
(function (MathOperation) {
    function add(a, b) {
        return a + b;
    }
    MathOperation.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperation.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperation.multiply = multiply;
})(MathOperation || (exports.MathOperation = MathOperation = {}));
