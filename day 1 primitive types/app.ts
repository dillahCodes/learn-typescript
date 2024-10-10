// let age: number = 20; // explicit type
// or
// let age = 20; // implicit type
let age;
age = 30;

let result = null; // any
result = "hello";
result = 90;

let result2: null | string;
result2 = "hello world";

let result3: null | string | number | boolean | string[] | { message: string };
result3 = ["Hello", "World"]; // Valid sring array
result3 = { message: "Hi" }; // Valid obj
result3 = !result2; // valid boolean

console.log(result3);

// void
type studentInfo = {
  studentName: string;
  studentPhone: string;
  studentId: number;
};
const noReturnAnything = (info: studentInfo): void => {
  console.log(info);
};
noReturnAnything({ studentName: "dillah", studentId: 2023804110, studentPhone: "6290329032" });
const onlyReturnName = (info: studentInfo): string => {
  return info.studentName;
};
console.log(
  onlyReturnName({
    studentName: "dillah",
    studentId: 9340403,
    studentPhone: "90394094",
  })
);
