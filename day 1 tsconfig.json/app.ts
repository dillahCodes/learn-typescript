// declare data type in variable
// variableKeyword variableName: dataType = value;
const myName: string = "abdillah";
const myAge: number = 19;

console.log(`my name is ${myName} and my age is ${myAge}`);

// declare data type in function
// keyword variableName  = (params: type): returnType => {}
type PersonInfo = {
  name: string;
  age: number;
  address: string;
};
const myInfo = (info: PersonInfo): PersonInfo => {
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
const myinfo2 = (info: PersonInfo): void => {
  console.log(info);
};
myinfo2({
  age: 19,
  name: "dill",
  address: "jakarta",
});
