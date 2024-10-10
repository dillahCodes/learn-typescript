type TshirtColor = "blue" | "black" | "orange";
type TshirtSize = "small" | "medium" | "large";

type Tshirt = {
  size: TshirtColor;
  color: TshirtColor;
};

const myTshirtColor: TshirtColor = "orange";
const myTshirtSize: TshirtSize = "large";
console.log(`my t shirt color is ${myTshirtColor} and size is ${myTshirtSize}`);

const generateMyThirt = (data: Tshirt): Tshirt => data;
console.log(generateMyThirt({ color: "orange", size: "orange" }));

enum Mypet {
  SpeciesHorse = "horse",
  SpeciesDog = "dog",

  ColorBlack = "black",
  ColorWhite = "white",
}

const myPet: string = Mypet.SpeciesHorse;
console.log(myPet);
