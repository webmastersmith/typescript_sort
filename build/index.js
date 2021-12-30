"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    mySort() {
        // const { length } = this.collection
        // for (let i = 0; i < length; i++) {
        //   for (let j = 0; j < length - i - 1; j++) {
        //     if (this.collection[j] > this.collection[j + 1]) {
        //       const leftHand = this.collection[j]
        //       this.collection[j] = this.collection[j + 1]
        //       this.collection[j + 1] = leftHand
        //     }
        //   }
        // }
        // console.log(this.collection)
        console.log(this.collection.sort((a, b) => (a < b ? -1 : b < a ? 1 : 0)));
    }
}
const numSorter = new Sorter([10, 5, -5, 0]);
numSorter.mySort();
const stringSorter = new Sorter('apple'.split(''));
stringSorter.mySort();
