"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        console.log(this.collection.sort());
    }
    get length() {
        return this.collection.length;
    }
}
exports.Sorter = Sorter;
