"use strict";
class Person {
    constructor(name, age, height, address, email) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.address = address;
        this.email = email;
        this.name = name;
        this.age = age;
        this.address = address;
        this.height = height;
        this.email = email;
    }
    sayHello() {
        console.log(`hello my name is ${this.name}`);
    }
    // set keyword must only have 1 parameter
    set setName(name) {
        this.name = name;
    }
    //  get keyword can't have parameter but should return some value
    get getName() {
        return this.name;
    }
}
const person1 = new Person("Dillah", 19, 180, "Rajeg", "test@gmail.com");
person1.sayHello();
person1.setName = "Naruto";
person1.sayHello();
console.log(person1.getName);
