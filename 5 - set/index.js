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


console.log("**************************************");

const setA = new Set();
setA.add(1);
setA.add(3);
setA.add(5);
setA.add(7);
setA.add(9);

const setB = new Set();
setB.add(2);
setB.add(4);
setB.add(6);
setB.add(8);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(5);
setC.add(7);

const setUnion = setA.union(setB);
console.log(setUnion.values());

const setIntercetion = setA.intersection(setC);
console.log(setIntercetion.values());

const setDifference = setB.difference(setC);
console.log(setDifference.values());

