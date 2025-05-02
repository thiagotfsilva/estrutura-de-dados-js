import { Deque } from "./deque.js"
import { Queue } from "./queue.js"

// usando a classe queue
const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("Leandro");
queue.enqueue("Thiago");
console.log(queue.toString());

queue.enqueue("Camila");
console.log(queue.toString());

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());

// usando a classe deque
const deque = new Deque();
console.log('**** Deque ****');
console.log(deque.isEmpty());

deque.addBack("John");
deque.addBack("Jack");
console.log(deque.toString());

deque.addBack("Camilla");
console.log(deque.toString());
console.log(deque.size());

console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());

deque.removeBack();
console.log(deque.toString());

deque.addFront("Ricardo");
console.log(deque.toString());
