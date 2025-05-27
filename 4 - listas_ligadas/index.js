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
