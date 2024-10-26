// Métodos de array em javascript

/* Juntando vários arrays */
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]

let numbers = negativeNumbers.concat(zero, positiveNumbers) // junta vários arrays e devolve uma cópia dos arrays concatenados

console.log(numbers)

/* Funções de iteração */

// devolve true se x for multiplo de 2
/* function isEven(number) {
  return number % 2 === 0 ? true : false
} */

const isEven = x => x % 2 === 0

let numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Every - itera pelos elementos do array até que a função devolva false, caso não satisfaça a clausula retorna true
console.log("every", numbers_2.every(isEven)) // Como o nosso primeiro elemento do array numbers é o numero 1 e ele não é multiplo de 2, a função retornara false no primeiro elemento

// Some - itera pelos elementos do array até que a função devolva true
console.log("some", numbers_2.some(isEven))

// forEach - iteração por todo o array
numbers_2.forEach(x => console.log(x % 2 === 0)) // foreach vai passar por cada elemento do array e aplicar a condição determinada

// Map, filter e reduce
const myMap = numbers_2.map(isEven) // devolve um novo array com o resultado da função isEven nos elementos do array antigo

const evenNumbers = numbers_2.filter(isEven) // devolve um novo array com os elementos no qual a função isEven devolveu true

// função que soma todos os numeros do array
const total = numbers_2.reduce((previous, current) => previous + current) // recebe uma funcao com os seguintes parâmetros: previousValue, currentValue, index e array, sendo index e array opcionais

/* ECMAScript 6 -  novas funcionalidades */

// iterando com for...of
for (const n of numbers_2) {
  console.log(n % 2 === 0 ? 'even' : 'odd')
}

// @@iterator -  a classe array tem uma propriedade @@iterator
let iterator = numbers_2[Symbol.iterator]()
console.log("iterator", iterator.next().value) // 1
console.log("iterator", iterator.next().value) // 2
console.log("iterator", iterator.next().value) // 3
console.log("iterator", iterator.next().value) // 4

for (const n of iterator) {
  console.log(n) // 5 a 15
}

// entries, keys e values -  três formas de obter iteradores de array

let aEntries = numbers_2.entries() // obtém um iterador de chave/valor
console.log(aEntries.next().value) // [0, 1] -  posição 0, valor 1
console.log(aEntries.next().value) // [1, 2] -  posição 1, valor 2
console.log(aEntries.next().value) // [2, 3] -  posição 2, valor 3

for (const n of aEntries) {
  console.log(n) 
}


