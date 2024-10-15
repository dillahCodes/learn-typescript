// Parameters type is used to get type of function parameters
const add = (a: number, b: number) => a + b;

type ParametersType = Parameters<typeof add>; // [number, number]
const parameters: ParametersType = [1, 2];

const generateUser = (name: string, age: number) => {
  return {
    name: name,
    age: age,
  };
};

type ParametersType2 = Parameters<typeof generateUser>; // [string, number]
const parameters2: ParametersType2 = ["John", 30];
