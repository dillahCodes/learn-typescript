"use strict";
const generateUserData = (data) => data;
console.log(generateUserData({ fisrtName: "dillah", lastName: "junian", email: "test123@gmail.com", age: 18 }));
const registerUser = (generateUserDataFunc, fisrtName, lastName, age, email) => {
    return generateUserDataFunc({ fisrtName, lastName, age, email });
};
console.log(registerUser(generateUserData, "Naruto", "Uzumaki", 20, "anjay123@gmail.com"));
const exponent = (number1, number2) => number1 ** number2;
const division = (number1, number2) => number1 / number2;
const applyfunc = (mathFunc, val) => {
    const res = [];
    for (let i = 0; i < mathFunc.length; i++) {
        const arrg = val[i];
        const func = mathFunc[i];
        const result = func(arrg[0], arrg[1]);
        res.push(result);
    }
    return res;
};
console.log(applyfunc([exponent, division], [
    [3, 4],
    [12, 6],
]));
