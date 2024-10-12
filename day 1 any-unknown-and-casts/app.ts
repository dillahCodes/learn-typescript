// any making variable disable types check
let number: any = "1";
number = 1;
console.log(number);

// unknown is same as any, but tighter.
let someValue: unknown;
someValue = 900;
someValue = "hello world";

// someValue = someValue + 8  //this will throw error because the variable type in unknown
// you must validate the variable data type before change the value
if (typeof someValue === "number") {
  console.log(someValue + 900);
} else if (typeof someValue === "string") {
  console.log(someValue.length);
}

// type cast
const result = (someValue as string) + " i'm dillahCodes";
console.log(result);

// unknown case
const inputProcess = (input: unknown): void => {
  if (typeof input === "string") {
    console.log("processing input string");
  } else if (typeof input === "number") {
    console.log("processing rating");
  } else if (input instanceof Blob) {
    console.log("processing file");
  } else {
    console.log("invalid type");
  }
};

inputProcess("hello dillah");
inputProcess(90);
inputProcess(new Blob());
inputProcess([1, 2, 3]); // invalid type
