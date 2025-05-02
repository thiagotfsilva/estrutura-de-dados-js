export class Queue {
  constructor() {
    this.count = 0; //  controla onde novos elementos serão adicionados (final da fila)
    this.lowestCount = 0; // controla qual elemento deve ser removido (início da fila)
    this.items = {};
  }

  // método adiciona um novo elemento no final da fila
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  } 

  // remove o primeiro elemento da fila -  o item que está a frente. Também devolve o elemento removido
  dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount];
    this.lowestCount++; // essa adição controla qual sera o proximo item a ser deletado
    return result;
  }

  // devolve o primeiro elemento da fila - o primeiro item adicionado e o priemiro que será removido da fila.
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  // devolve true se a fila não tiver nenhum elemento, e false se o tamanho for maior que 0
  isEmpty() {
    return this.size() === 0;
  }

  // devolve o número de elementos contidos na fila
  size() {
    return this.count - this.lowestCount;
  }

  // limpa todos elementos da fila
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
  
    let objString = `${this.items[this.lowestCount]}`; // Adiciona o primeiro elemento
    for (let i = this.lowestCount + 1; i < this.count; i++) { // Começa do próximo elemento
      objString = `${objString},${this.items[i]}`;
    }
  
    return objString;
  }
}
