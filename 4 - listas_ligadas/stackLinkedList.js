import DoublyLinkedList from "./doublyLinkedList.js";

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items.removeAt(this.size() - 1);
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.getElementAt(this.size() - 1).element;
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }
} 

export default StackLinkedList;
