type Student = {
  name: string;
  age: number;
  major: string;
};

const arr: Student[] = [
  { name: "Dillah", age: 19, major: "infomation system" },
  { name: "kurama", age: 20, major: "informatics" },
];

const lastStudentName = arr.pop()?.name;
console.log(lastStudentName);

// 2 dimension array
const arr2: Student[][] = [
  [
    { name: "Dillah", age: 19, major: "infomation system" },
    { name: "aji", age: 19, major: "infomation system" },
  ],
];
const lastStudentName2 = arr2.pop()!.pop()!.name;
console.log(lastStudentName2);

// recap
// ? ==> chacking and then moving forward
// ! ==> forcing us to move forward
