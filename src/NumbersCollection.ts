export class NumbersCollection {
  constructor(public data: number[]) {}

  sort(): number[] {
    return this.data.sort((a, b) => a - b)
  }

  get length(): number {
    return this.data.length
  }
}
