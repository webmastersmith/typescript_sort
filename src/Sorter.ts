import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

interface SmartSort {
  sort(): number[] | string
  length: number
}
export class Sorter {
  constructor(public collection: SmartSort) {}

  sort() {
    console.log(this.collection.sort())
  }
  get length() {
    return this.collection.length
  }
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

  // if (typeof this.collection === 'string') {
  //   console.log(
  //     this.collection
  //       .split('')
  //       .sort((a, b) => (a < b ? -1 : b < a ? 1 : 0))
  //       .join('')
  //   )
  // }
}
