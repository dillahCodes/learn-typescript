"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //   greet method
    greet() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
    //  how get private property
    //   you must define getter method to get property name
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const person1 = new Person("Dillah", 19);
person1.greet();
console.log(person1.getName());
person1.setName("Naruto");
person1.age = 20;
person1.greet();
