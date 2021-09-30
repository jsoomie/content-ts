import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberArray = [10, 3, -5, 0, 8];
const numbersCollection = new NumbersCollection(numberArray);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
