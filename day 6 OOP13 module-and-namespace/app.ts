import { complex } from "./complex-folder/nested-folder/complex";
import User from "./complex-folder/nested-folder/nested-folder2/class-user";
import { MathOperation } from "./util/math-operation";
import add from "./util/sum";

console.log(add(1, 2));
console.log(complex());

const user1 = new User({ name: "Dillah", age: 23, height: 190 });
user1.sayHello();
user1.updateUserData({ name: "nana" });
user1.sayHello();

console.log(MathOperation.add(1, 2));
console.log(MathOperation.multiply(1, 2));
console.log(MathOperation.subtract(1, 2));
