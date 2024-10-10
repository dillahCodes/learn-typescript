const numberList: number[] = [2, 5, 0, 6, 0, 5];
console.log(numberList);
console.log(numberList[numberList.length - 1] + 10);

const nameList: string[] = ["dillah", "barjo", "bejo"];
console.log(nameList[nameList.length - 1].slice(0, 3));

type SubsStr = {
  str: string;
  start: number;
  end: number;
};
const getSubStr = (param: SubsStr): string => param.str.slice(param.start, param.end);
console.log(
  getSubStr({
    str: "abdillah",
    start: 5,
    end: 8,
  })
);

// (type1 | type2 | ( type3 | type4 )arrayStmbol )arraySymbol
const multiDimensionArray: (number | string | (string | number)[])[] = [1, "hello", [1, "hello"]];
console.log(multiDimensionArray);
console.log(multiDimensionArray.length);

// clean version
type Primitive = number | string | null;
type NonEmptyArray = [string | null | number, ...(string | number | null)[]];
type MultiDimensionArray = (Primitive | NonEmptyArray)[];

// const multiDimensionArray2: MultiDimensionArray = [1, "hello", [1, "hello", null], null, []]; will throw error
const multiDimensionArray2: MultiDimensionArray = [1, "hello", [1, "hello", null], null, [null, "hello"]];
console.log(multiDimensionArray2);

const cords: [number, number] = [1, 3];
const cords2: [number, number][] = [
  [-90, 1],
  [1, 90],
];
console.log(cords2);

enum Subject {
  BahasaIndonesia = "B.Indo",
  PKN = "PKN",
  Matematika = "Matematika",
  IPA = "IPA",
}

type GradeDetails = {
  gradeId: number;
  grade: number;
  gradeName: Subject;
};

type Student = {
  studentId: number;
  name: string;
  gradeList: [GradeDetails, ...GradeDetails[]]; // non empty array
  age: number;
};

type ClassRoom = Student[];
const studentData: ClassRoom = [
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
      { gradeId: 37287382, grade: 80, gradeName: Subject.Matematika },
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

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// Menggunakan IntelliSense
const myColor: Color = Color.Red;
