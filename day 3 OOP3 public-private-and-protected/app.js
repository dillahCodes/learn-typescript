"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`hello my name is ${this.name}`);
    }
}
const person1 = new Person("Dillah", 20);
// person1.sayHello(); // Property 'sayHello' is protected and only accessible within class 'Person' and its subclasses.
class Employee extends Person {
    constructor(employeeName, employeeAge, position) {
        super(employeeName, employeeAge);
        this.position = position;
        this.position = position;
    }
    employeeSayHello() {
        this.sayHello();
        console.log(`and my position is ${this.position}`);
    }
    set employeeSetPosition(position) {
        this.position = position;
    }
    set employeeName(name) {
        this.name = name;
    }
}
const person2 = new Employee("Naruto", 20, "Hokage");
person2.employeeSayHello();
person2.employeeName = "Sikamaru";
person2.employeeSayHello();
