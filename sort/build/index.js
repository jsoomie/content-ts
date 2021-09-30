"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var charactersCollection_1 = require("./charactersCollection");
var LinkedList_1 = require("./LinkedList");
//  Sort numbers
var numberArray = [10, 3, -5, 0, 8];
var numbersCollection = new NumbersCollection_1.NumbersCollection(numberArray);
var numbersSorter = new Sorter_1.Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);
//  Sort characters
var characterString = "XaatvAYzbk";
var charactersCollection = new charactersCollection_1.CharacterCollection(characterString);
var charaterSorter = new Sorter_1.Sorter(charactersCollection);
charaterSorter.sort();
console.log(charactersCollection.data);
//  Sort LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
var linkSorter = new Sorter_1.Sorter(linkedList);
linkSorter.sort();
linkedList.print();
