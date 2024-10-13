"use strict";
const person = {
    employeeId: 3483478,
    position: "FS DEV",
    salary: 900000,
    hireDate: new Date(),
    name: "dillah",
    age: 20,
    height: 180,
    sayHello: function () {
        console.log(`hello my name is ${this.name} and my position is ${this.position}`);
    },
};
person.sayHello();
const person2 = {
    employeeId: 473674637,
    name: "ABDILLAH",
    position: "MANAGER IT",
    employees: [
        {
            employeeId: 908320,
            name: "kiku",
            position: "FE DEV",
            salary: 60000,
            age: 21,
            manager: {
                name: "ABDILLAH",
                department: "FS DEV",
            },
            hireDate: new Date(),
            sayHello: function () {
                var _a;
                console.log(`hello my name is ${this.name} and my position is ${this.position} and my manager is ${(_a = this.manager) === null || _a === void 0 ? void 0 : _a.name}`);
            },
        },
    ],
    teamSize: 0,
    department: "FS DEV",
    sayHello: function () {
        console.log(`hello my name is ${this.name} and my positon is ${this.position}`);
    },
    salary: 300000,
    hireDate: new Date(),
    age: 25,
};
person2.sayHello();
person2.employees[0].sayHello();
