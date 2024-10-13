"use strict";
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`my name is ${this.name}`);
    }
    makeSound(times) {
        const res = Array.from({ length: times }).fill("Miaw..").join(" ");
        console.log(res);
    }
}
const cat1 = new Cat("Fuzi", "white");
cat1.makeSound(4);
cat1.speak();
cat1.makeSound(5);
