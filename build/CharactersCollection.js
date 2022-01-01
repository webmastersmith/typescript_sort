"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    sort() {
        return this.data
            .split('')
            .sort((a, b) => {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();
            return lowerA > lowerB ? 1 : lowerA < lowerB ? -1 : 0;
        })
            .join('');
    }
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
