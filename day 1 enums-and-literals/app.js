"use strict";
const myTshirtColor = "orange";
const myTshirtSize = "large";
console.log(`my t shirt color is ${myTshirtColor} and size is ${myTshirtSize}`);
const generateMyThirt = (data) => data;
console.log(generateMyThirt({ color: "orange", size: "orange" }));
var Mypet;
(function (Mypet) {
    Mypet["SpeciesCat"] = "cat";
    Mypet["SpeciesDog"] = "dog";
    Mypet["ColorBlack"] = "black";
    Mypet["ColorWhite"] = "white";
})(Mypet || (Mypet = {}));
const myPet = Mypet.SpeciesCat;
console.log(myPet);
