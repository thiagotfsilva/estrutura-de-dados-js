export class Stack {
  constructor() {
    this.count = 0 // ajuda a manter o controle do tamanho da pilha
    this.items = {}
  }

  // adiciona um elemento a pilha e incrementa o contador para controlar o tamanho da pilha
  push(element) {
    this.items[this.count] = element
    this.count++
  }

  // retorna o tamanho da pilha
  size() {
    return this.count
  }

  // verifica se a pilha está vazia
  isEmpty() {
    return this.count === 0
  }

  // remove o elemento no topo da pilha e retorna o elemento
  pop() {
    if (this.isEmpty()) {
      return undefined // se a pilha estiver vazia retorna undefined
    }

    this.count--
    const result = this.items[this.count] // pega o item que vai ser removido para retorna-lo
    delete this.items[this.count] // remove o elemento no topo da pilha

    return result
  }

  // retorna o item no topo da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1] //pega o item que esta no topo da pilha
  }

  // limpa a pilha
  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ""
    }

    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }
}



