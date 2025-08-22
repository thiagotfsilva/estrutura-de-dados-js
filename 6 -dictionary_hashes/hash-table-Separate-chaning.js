import { defaultToString } from "../utils/utils.js";
import LinkedList from "../4 - listas_ligadas/linkedList.js"
import ValuePair from "./valuePair.js";

class HashTableSeparateChaining {
  constructor(toString = defaultToString) {
    this.toString = toString;
    this.table = {}
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }

      this.table[position].push(new ValuePair(key, value));

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      // procura o valor no objeto linkedlist
      while (current != null) {
        // current.element.key nos tras a propriedade key no Objeto Node(next, element), sendo element a instancia de ValuePair
        if (current.element.key === key) {
          // se for a chave que procuramos, retornamos o value
          return current.element.value;
        }

        current = current.next; // iterando pela lista
      }
    }

    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }

          return true;
        }
      }
    }

    return false;
  }

  loseLoseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);      
    }

    return hash % 37; 
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
}

export default HashTableSeparateChaining;
