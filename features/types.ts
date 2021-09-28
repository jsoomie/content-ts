/**
 * FEATURES
 *
 * GOAL:
 * 1. Familiarize with different types
 */

// Types are references to different properties + functions that a value has

// today will now contain all the methods and functions that is attached to Date
const today = new Date();
today.getDate();

// ts infer types
const person = {
  age: 20,
};

class Color {
  constructor(
    private name: string,
    private hexadecimal: string,
    private associate: string,
    private others: string = "another thing, but it isn't listed here"
  ) {}

  hex() {
    return `${this.hexadecimal}`;
  }

  association() {
    return `The color ${this.name} is usually associated with ${this.associate}`;
  }

  colorName() {
    return `This color is ${this.name}`;
  }

  altAssocation() {
    return `Besides ${this.associate}, the color ${this.name} is also associated with ${this.others}`;
  }
}

const red = new Color("red", "#FF0000", "love");
console.log(red.hex(), red.association(), red.colorName(), red.altAssocation());

const blue = new Color("blue", "#0000FF", "serenity", "wisdom");
console.log(
  blue.hex(),
  blue.association(),
  blue.colorName(),
  blue.altAssocation()
);
