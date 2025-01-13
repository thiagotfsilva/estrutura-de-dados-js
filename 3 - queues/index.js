import { Queue } from "./queue.js"

// usando a classe queue
const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue("Leandro")
queue.enqueue("Thiago")
console.log(queue.toString())

queue.enqueue("Camila")
console.log(queue.toString())

console.log(queue.size())
console.log(queue.isEmpty())

queue.dequeue()
queue.dequeue()

console.log(queue.toString())
