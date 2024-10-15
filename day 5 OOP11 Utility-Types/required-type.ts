interface CatData {
  name?: string;
  age?: number;
  breed?: string;
  color?: string;
}

function createFullCatData(data: Required<CatData>): CatData {
  return data;
}
function createCatData(data: CatData): CatData {
  return data;
}

// required type make all optional interface to required
let cat = createFullCatData({ name: "fuzi", age: 5, color: "black", breed: "german" });
console.log(cat);

// only assign name and age to  type
cat = createCatData({ name: "fuzi", age: 5 });
console.log(cat);
