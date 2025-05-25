import { defaultEquals } from "../utils/utils.js";
import Node from "./node.js";

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // armazena os número de elementos na lista
    this.head = undefined; // referência ao primeiro elemento
    this.equalsFn = equalsFn; // para auxiliar a encontrar um elemento específico na lista ligada. Para uma comparação de igualdade entre dois valores na lista.
  }

  push(element) {
    const node = new Node(element);
    let current;

    // cenário em que a lista esta vazia.
    if(this.head == null) {
      this.head = node; // set the head to the new node
    } else {
      current = this.head; 

      while(current.next != null) { // obtém oo último item
        current = current.next; // caso current.next nao seja null ou undefined, o loop pula para o proximo elemento
      }

      current.next = node; // atribui o novo elemento a next para criar a ligação.
    }

    this.count++; // incrementa o contador de elementos
  }

  removeAt(index) {
    // verificar valores fora do intervalo
    if (index >= 0 && index < this.count) {
      let current = this.head;

      //remove o primeiro item
      if (index === 0) {
        this.head = current.next; // o segundo elemento da lista vai para a cabeça.
        
      } else {
      /* 
        let previous; // elemento anterior ao que estamos percorrendo
        //percorre a lista até encontrar o elemento desejado e o remove ajustando as referências.
        for (let i = 0; i < index; i++) {
          previous = current; // referência ao elemento antes de current
          current = current.next; // sempre faz referência ao elemento atual que estamos percorrendo. A variavel current vai armazenar o elemento que queremos remover.
        }
      */
        const previous = this.getElementAt(index - 1)
        current = previous.next;
        // faz a ligacao de previous com next de current : pula esse elemento para removê-lo
        previous.next = current.next; //
      }

      this.count--;

      return current.element;
    }

    return undefined;
  }

  // percorre a lista ate encontrar a posição desejado(index)
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head; 

      for (let i = 0; i < index && current != null; i--) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  insert(element, index) {
    
  }
}

export default LinkedList;
