"use strict";
class PersonWithSingleName {
    constructor(name) {
        this.firstName = name;
    }
}
class PersonWithLastName extends PersonWithSingleName {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }
}
function getPersonName(name) {
    if ("lastName" in name) {
        console.log(`The Name is ${name.firstName} ${name.lastName}`);
    }
    else {
        console.log(`The Name is ${name.firstName}`);
    }
}
const person1 = getPersonName(new PersonWithSingleName("Dillah"));
const person2 = getPersonName(new PersonWithLastName("Dillah", "Codes"));
