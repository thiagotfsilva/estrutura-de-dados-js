export class Deque {
  constructor() {
    this.count = 0; // ajuda a controlar o tamanho

    this.lowestCount = 0; // ajuda a controlar o primeiro elemento.
    this.items = {};
  }

  // adiciona um elemento na frente do deque
  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // caso lowestCount for igual a 0
      for (let i =  this.count; i > 0; i--) { // desloca os elemento para a direita
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // adiciona um elemento no fim do deque
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // remove o primeiro elemento do deque
  removeFront() {
    if(this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++; // essa adiçao controla qual sera o proximo elemento a ser deletado
    return result;
  }

  // remove o ultimo elemento do deque
  removeBack() {
    if(this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count]; // remove o elemento no inicio do deque
    delete this.items[this.count];

    return result;
  }

  // devolve o primeiro elemento do deque
  peekFront() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  // devolve o ultimo eleento do deque
  peekBack() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  // devolve true se a fila não tiver nenhum elemento, e false se o tamanho for maior que 0
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
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
