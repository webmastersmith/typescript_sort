export class Node {
  next: Node | null = null
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }
    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = node
  }

  sort(): void {
    if (!this.head) throw new Error('Not a valid Linked List.')
    let node: Node | null = this.head
    let arr = []
    while (node) {
      arr.push(node.data)
      node = node.next
    }
    arr.sort((a, b) => a - b)
    this.head = arr.reduceRight(
      (prev: any, cur: any) => ({ data: cur, next: prev }),
      null
    )
  }

  get length(): number {
    if (!this.head) return 0
    let node: Node | null = this.head
    let count: number = 0
    while (node) {
      // while not null
      count++
      node = node.next
    }
    return count
  }

  at(index: number): number {
    if (!this.head) {
      throw new Error('Index out of bounds!')
    }
    let node: Node | null = this.head
    let count: number = 1
    while (node) {
      if (count === index) return node.data
      count++
      node = node.next
    }
    throw new Error('Index out of bounds!')
  }

  print(): void {
    if (!this.head) return
    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
