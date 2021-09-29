// tuples are a fixed array-like structures that contains info regarding a certain object
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// ts creates an array
// specify that 0: always a string, 1: always a boolean, 2: always a number

// Creating type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// tuples aren't used that often

const carSpecs: [number, number] = [400, 3354];

// much more understandable than carspecs
const carStats = {
  horsepower: 400,
  weight: 3354,
};
