import { defaultEquals } from "../utils/utils.js";
import LinkedList from "./linkedList.js";


class DoublyLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
    super(equalsFn);

    this.tail = undefined; // referência ao último elemento da lista.
  }

  insert(element, index) {

  }
}

export default DoublyLinkedList;
