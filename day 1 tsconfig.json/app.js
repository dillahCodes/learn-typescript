"use strict";
// declare data type in variable
// variableKeyword variableName: dataType = value;
const myName = "abdillah";
const myAge = 19;
console.log(`my name is ${myName} and my age is ${myAge}`);
const myInfo = (info) => {
    return info;
};
const generateMyInfo = myInfo({
    age: 19,
    name: "abdillah juniansyah",
    address: "rajeg",
});
console.log(generateMyInfo);
// function with no return
// keyword variableName = (params: paramstype): void => {}
const myinfo2 = (info) => {
    console.log(info);
};
myinfo2({
    age: 19,
    name: "dill",
    address: "jakarta",
});
