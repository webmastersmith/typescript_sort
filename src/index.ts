import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numCollection = new NumbersCollection([-1000, 5, -5, 0])
// console.log(numCollection.sort())
// console.log(numCollection.length)

const charCollection = new CharactersCollection('27Twinky')
// console.log(charCollection.sort())
// console.log(charCollection.length)

const list = new LinkedList()
list.add(1001)
list.add(2)
list.add(5)
list.add(4)
list.add(56)
// console.log(JSON.stringify(list, null, 2))
// console.log(list.length)
list.sort()
console.log(JSON.stringify(list, null, 2))
// console.log(list.at(5))

list.print()
