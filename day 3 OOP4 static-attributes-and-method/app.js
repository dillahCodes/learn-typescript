"use strict";
class Dog {
    constructor(name) {
        Dog.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}
Dog.instanceCount = 0;
const dog1 = new Dog("Wif"); // 1
console.log(Dog.instanceCount);
const dog2 = new Dog("Dogs"); // 2
console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount); // 1
