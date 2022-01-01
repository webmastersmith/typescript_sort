export class CharactersCollection {
  constructor(public data: string) {}

  sort(): string {
    return this.data
      .split('')
      .sort((a, b) => {
        const lowerA = a.toLowerCase()
        const lowerB = b.toLowerCase()
        return lowerA > lowerB ? 1 : lowerA < lowerB ? -1 : 0
      })
      .join('')
  }

  get length(): number {
    return this.data.length
  }
}
