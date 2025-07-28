import { COMPARE } from "../utils/compare.js";
import { defaultCompare, defaultEquals } from "../utils/utils";
import LinkedList from "./linkedList.js";

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if(this.isEmpty()) {
      return super.insert(element, 0);
    }

    const pos = this.getIndexNextSortedElement(element); //obtem o index correto para o elemento

    return super.insert(element, pos);
  }
 
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;

    for (; i < this.size(); i++) {
      const comp = this.compareFn(element, current.element);

      if (comp === COMPARE.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }

}

export default SortedLinkedList;
