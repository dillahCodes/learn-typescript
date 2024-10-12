type User = {
  fisrtName: string;
  lastName: string;
  email: string;
  age: number;
};

const generateUserData = (data: User): User => data;
console.log(generateUserData({ fisrtName: "dillah", lastName: "junian", email: "test123@gmail.com", age: 18 }));

const registerUser = (
  generateUserDataFunc: (data: User) => User,
  fisrtName: string,
  lastName: string,
  age: number,
  email: string
): User => {
  return generateUserDataFunc({ fisrtName, lastName, age, email });
};

console.log(registerUser(generateUserData, "Naruto", "Uzumaki", 20, "anjay123@gmail.com"));

const exponent = (number1: number, number2: number): number => number1 ** number2;
const division = (number1: number, number2: number): number => number1 / number2;

type FuncArr = ((number1: number, number2: number) => number)[];
type ArrValue = [number, number][];
const applyfunc = (mathFunc: FuncArr, val: ArrValue): number[] => {
  const res = [] as number[];

  for (let i = 0; i < mathFunc.length; i++) {
    const arrg = val[i];
    const func = mathFunc[i];
    const result = func(arrg[0], arrg[1]);
    res.push(result);
  }

  return res;
};

console.log(
  applyfunc(
    [exponent, division],
    [
      [3, 4],
      [12, 6],
    ]
  )
);
