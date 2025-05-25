import LinkedList from "./linkedList.js"

const list = new LinkedList();
list.push(12);
list.push(24);
list.push(36);

console.log(list);

list.removeAt(1);

console.log(list);
