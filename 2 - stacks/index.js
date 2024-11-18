import { Stack } from "./stack-array.js"
import { Stack as StackObj } from "./stack.js"

// Pilha baseada em array
const stack = new Stack()
console.log("Pilha esta vazia:", stack.isEmpty())

stack.push(5)
stack.push(12)
console.log("Item no topo da pilha:", stack.peek())
console.log("Tamanho da pilha:", stack.size())
console.log("Pilha esta vazia:", stack.isEmpty())

stack.pop()
console.log("Tamanho da pilha:", stack.size())

// Pilha baseada em objeto
const stackObj = new StackObj()
console.log(stackObj.isEmpty())

stackObj.push(2)
stackObj.push(5)
console.log(stackObj.size())
console.log(stackObj.peek())

stackObj.pop()
console.log(stackObj.size())
console.log(stackObj.toString())
