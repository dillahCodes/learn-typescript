"use strict";
var _a;
const arr = [
    { name: "Dillah", age: 19, major: "infomation system" },
    { name: "kurama", age: 20, major: "informatics" },
];
const lastStudentName = (_a = arr.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(lastStudentName);
// 2 dimension array
const arr2 = [
    [
        { name: "Dillah", age: 19, major: "infomation system" },
        { name: "aji", age: 19, major: "infomation system" },
    ],
];
const lastStudentName2 = arr2.pop().pop().name;
console.log(lastStudentName2);
