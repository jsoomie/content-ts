"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var charactersCollection_1 = require("./charactersCollection");
var LinkedList_1 = require("./LinkedList");
//  Sort numbers
var defaultNumArray = [10, 3, -5, 0, 8];
var numberArray = [10, 3, -5, 0, 8];
var numbersCollection = new NumbersCollection_1.NumbersCollection(numberArray);
numbersCollection.sort();
console.log(defaultNumArray + " sorted => " + numbersCollection.data);
//  Sort characters
var defaultCharString = "XaatvAYzbk";
var characterString = "XaatvAYzbk";
var charactersCollection = new charactersCollection_1.CharacterCollection(characterString);
charactersCollection.sort();
console.log(defaultCharString + " sorted => " + charactersCollection.data);
//  Sort LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log("\nSorting through linkedlist...");
linkedList.sort();
linkedList.print();
