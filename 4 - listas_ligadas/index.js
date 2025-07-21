import DoublyLinkedList from "./doublyLinkedList.js";
import LinkedList from "./linkedList.js"

const list = new LinkedList();
list.push(12);
list.push(24);
list.push(36);

console.log(list);

list.removeAt(1);


list.insert(57);
list.insert(58);
list.insert(60);

console.log(list);

let elm = list.indexOf(60);
console.log(elm);

console.log(list);

console.log("*************");

const listaDuplamenteLigada = new DoublyLinkedList();

listaDuplamenteLigada.insert("Carlos", 0);
listaDuplamenteLigada.insert("Luiz", 1);
listaDuplamenteLigada.insert("Marcos", 2);
listaDuplamenteLigada.insert("Carmem", 3);

listaDuplamenteLigada.removeAt(2);

console.log(listaDuplamenteLigada.toString());
