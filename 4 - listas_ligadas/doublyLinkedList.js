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
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }

      this.count++;

      return true;
    }

    return false;
  }
}

export default DoublyLinkedList;
