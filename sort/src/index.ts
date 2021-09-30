import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./charactersCollection";

const numberArray = [10, 3, -5, 0, 8];
const numbersCollection = new NumbersCollection(numberArray);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const characterString = "XaatvAYzbk";
const charactersCollection = new CharacterCollection(characterString);
const charaterSorter = new Sorter(charactersCollection);
charaterSorter.sort();
console.log(charactersCollection.data);
