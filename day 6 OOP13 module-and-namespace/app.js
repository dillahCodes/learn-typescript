"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const complex_1 = require("./complex-folder/nested-folder/complex");
const class_user_1 = __importDefault(require("./complex-folder/nested-folder/nested-folder2/class-user"));
const math_operation_1 = require("./util/math-operation");
const sum_1 = __importDefault(require("./util/sum"));
console.log((0, sum_1.default)(1, 2));
console.log((0, complex_1.complex)());
const user1 = new class_user_1.default({ name: "Dillah", age: 23, height: 190 });
user1.sayHello();
user1.updateUserData({ name: "nana" });
user1.sayHello();
console.log(math_operation_1.MathOperation.add(1, 2));
console.log(math_operation_1.MathOperation.multiply(1, 2));
console.log(math_operation_1.MathOperation.subtract(1, 2));
