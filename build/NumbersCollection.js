"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    sort() {
        return this.data.sort((a, b) => a - b);
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
