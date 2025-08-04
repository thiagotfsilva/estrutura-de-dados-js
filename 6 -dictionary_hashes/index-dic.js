import Dictionary from "./dictionary.js";

const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "john@email.com");
dictionary.set("Tyrion", "tyrionf@email.com");

console.log(dictionary.hasKey("Gandalf"));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));

dictionary.remove("John");

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
