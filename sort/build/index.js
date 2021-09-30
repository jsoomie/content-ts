"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var charactersCollection_1 = require("./charactersCollection");
var numberArray = [10, 3, -5, 0, 8];
var numbersCollection = new NumbersCollection_1.NumbersCollection(numberArray);
var numbersSorter = new Sorter_1.Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);
var characterString = "XaatvAYzbk";
var charactersCollection = new charactersCollection_1.CharacterCollection(characterString);
var charaterSorter = new Sorter_1.Sorter(charactersCollection);
charaterSorter.sort();
console.log(charactersCollection.data);