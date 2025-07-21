import { defaultEquals } from "../utils/utils.js";
import LinkedList from "./linkedList.js";
import DoublyNode from './doublyNode.js';


class DoublyLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
    super(equalsFn);

    this.tail = undefined; // referência ao último elemento da lista.
  }

  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if(index === 0) { // inserir um elemneto no início da fila.
        if(this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node; // primeiro elemento da lista
        }
      } else if(index === this.count){ // inserir no final da fila
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node; // ultimo elemento
      } else {
        const previous = this.getElementAt(index - 1); // Encontrar o nó anterior à posição desejada
        current = previous.next; // Encontrar o nó atual na posição desejada
        node.next = current; // aponta o proximo no para no atual
        previous.next = node; // no anterior aponta para o novo no
        current.prev = node; 
        node.prev = previous;
      }

      this.count++;

      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined; // Se houver apenas um item, atualizmos tail também
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) { // ultimo item 
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index); // verificar metodo
        
        const previous = current.prev;
        // Faz ligação de previous com next de current - pula esse elemento para removê-lo
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

export default DoublyLinkedList;
