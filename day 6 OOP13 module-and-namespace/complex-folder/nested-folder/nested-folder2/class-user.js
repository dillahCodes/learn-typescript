"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.height = data.height;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age} and my height is ${this.height}`);
    }
    updateUserData(data) {
        if (data.name)
            this.name = data.name;
        if (data.age)
            this.age = data.age;
        if (data.height)
            this.height = data.height;
    }
}
exports.default = User;
