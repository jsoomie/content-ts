import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./charactersCollection";
import { LinkedList } from "./LinkedList";

//  Sort numbers
const defaultNumArray = [10, 3, -5, 0, 8];
const numberArray = [10, 3, -5, 0, 8];
const numbersCollection = new NumbersCollection(numberArray);
numbersCollection.sort();
console.log(`${defaultNumArray} sorted => ${numbersCollection.data}`);

//  Sort characters
const defaultCharString = "XaatvAYzbk";
const characterString = "XaatvAYzbk";
const charactersCollection = new CharacterCollection(characterString);
charactersCollection.sort();
console.log(`${defaultCharString} sorted => ${charactersCollection.data}`);

//  Sort LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log("\nSorting through linkedlist...");
linkedList.sort();
linkedList.print();
