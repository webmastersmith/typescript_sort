"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numCollection = new NumbersCollection_1.NumbersCollection([-1000, 5, -5, 0]);
// console.log(numCollection.sort())
// console.log(numCollection.length)
const charCollection = new CharactersCollection_1.CharactersCollection('27Twinky');
// console.log(charCollection.sort())
// console.log(charCollection.length)
const list = new LinkedList_1.LinkedList();
list.add(1001);
list.add(2);
list.add(5);
list.add(4);
list.add(56);
// console.log(JSON.stringify(list, null, 2))
// console.log(list.length)
list.sort();
console.log(JSON.stringify(list, null, 2));
// console.log(list.at(5))
list.print();
