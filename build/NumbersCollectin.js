"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    sort() {
        console.log(this.data.sort((a, b) => a - b));
    }
}
exports.NumbersCollection = NumbersCollection;
