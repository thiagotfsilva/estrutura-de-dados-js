import Set from "./set.js";

const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1)); 
console.log(set.size()); 

set.add(2);
console.log(set.values());
console.log(set.has(2)); 
console.log(set.size()); 

set.delete(1);
console.log(set.values());
console.log(set.size()); 

set.delete(2);
console.log(set.values());
console.log(set.size()); 

