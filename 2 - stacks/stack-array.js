export class Stack {
  constructor() {
    this.items = []
  }

  // Adiciona um novo item no topo da pilha
  push(element) {
    this.items.push(element)
  }

  // Remove um item do topo da pilha 
  pop() {
    return this.items.pop()
  }

  // Devolve o item que está no topo da pilha
  peek() {
    return this.items[this.items.length - 1] // this.items.length - 1 retorna o ultimo item do array
  }

  // Verifica se a pilha está vazia.
  isEmpty() {
    return this.items.length === 0
  }

  // Verifica o tamanho da pilha
  size() {
    return this.items.length
  }

  // Esvazia a pilha
  clear() {
    this.items = []
  }
}


