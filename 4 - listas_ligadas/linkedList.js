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
}

export default LinkedList;
