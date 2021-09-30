import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./charactersCollection";
import { LinkedList } from "./LinkedList";

//  Sort numbers
const numberArray = [10, 3, -5, 0, 8];
const numbersCollection = new NumbersCollection(numberArray);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

//  Sort characters
const characterString = "XaatvAYzbk";
const charactersCollection = new CharacterCollection(characterString);
const charaterSorter = new Sorter(charactersCollection);
charaterSorter.sort();
console.log(charactersCollection.data);

//  Sort LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkSorter = new Sorter(linkedList);
linkSorter.sort();
linkedList.print();
