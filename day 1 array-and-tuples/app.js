"use strict";
const numberList = [2, 5, 0, 6, 0, 5];
console.log(numberList);
console.log(numberList[numberList.length - 1] + 10);
const nameList = ["dillah", "barjo", "bejo"];
console.log(nameList[nameList.length - 1].slice(0, 3));
const getSubStr = (param) => param.str.slice(param.start, param.end);
console.log(getSubStr({
    str: "abdillah",
    start: 5,
    end: 8,
}));
// (type1 | type2 | ( type3 | type4 )arrayStmbol )arraySymbol
const multiDimensionArray = [1, "hello", [1, "hello"]];
console.log(multiDimensionArray);
console.log(multiDimensionArray.length);
// const multiDimensionArray2: MultiDimensionArray = [1, "hello", [1, "hello", null], null, []]; will throw error
const multiDimensionArray2 = [1, "hello", [1, "hello", null], null, [null, "hello"]];
console.log(multiDimensionArray2);
const cords = [1, 3];
const cords2 = [
    [-90, 1],
    [1, 90],
];
console.log(cords2);
var Subject;
(function (Subject) {
    Subject["BahasaIndonesia"] = "B.Indo";
    Subject["PKN"] = "PKN";
    Subject["Matematika"] = "Matematika";
    Subject["IPA"] = "IPA";
})(Subject || (Subject = {}));
const studentData = [
    {
        studentId: 732783278,
        name: "dillah",
        age: 19,
        gradeList: [
            { gradeId: 37287382, grade: 90, gradeName: Subject.BahasaIndonesia },
            { gradeId: 84398493, grade: 80, gradeName: Subject.Matematika },
        ],
    },
    {
        studentId: 347247264,
        name: "Jarjit",
        age: 20,
        gradeList: [
            { gradeId: 37287382, grade: 80, gradeName: Subject.BahasaIndonesia },
            { gradeId: 84398493, grade: 85, gradeName: Subject.Matematika },
        ],
    },
    //   ...
];
// console.log(studentData);
studentData.push({
    studentId: 8427838,
    name: "Mukidi",
    gradeList: [
        { grade: 90, gradeName: Subject.IPA, gradeId: 43473647 },
        { grade: 90, gradeName: Subject.Matematika, gradeId: 64376743 },
    ],
    age: 21,
});
console.log(JSON.stringify(studentData, null, 2));
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// Menggunakan IntelliSense
const myColor = Color.Red;
