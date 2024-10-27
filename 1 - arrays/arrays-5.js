/* Ordenando elementos */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

numbers.reverse() // Reverte a ordem do array
console.log(numbers)

numbers.sort() // metodo sort deixa os elementos em ordem lexicográfica e pressupõe que todos os elementos são strings
console.log(numbers)

numbers.sort((a, b) => a - b) // devolverá um número negativo se b for maior que a, um número positivo se a for maior que b e zero se forem iguais
console.log(numbers)

// codigo anterior pode ser representado pelo código:

function compare(a, b) {
  if (a < b) {
    return -1
  }

  if (a > b) {
    return 1
  }

  return 0
}

numbers.sort(compare) // a função sort recebe um parâmetro chamado compareFunction, responsável pela ordenação
console.log(numbers)

// ordenação personalizada

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
]

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1
  }

  if (a.age > b.age) {
    return 1
  }

  return 0
}

console.log(friends.sort(comparePerson))

// ordenando strings

let names = ['Ana', 'ana', 'john', 'John']
names.sort() // [ 'Ana', 'John', 'ana', 'john' ] - compara os caracteres de acorod com o valor ASCII - A: 65, J:74, a: 97, j: 106

let names2 = ['Ana', 'ana', 'john', 'John']
names2.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1
  }

  if (a.toLowerCase() > b.toLowerCase()) {
    return 1
  }

  return 0
}) // [ 'Ana', 'ana', 'john', 'John' ]

let names3 = ['Ana', 'ana', 'john', 'John']
names3.sort((a, b) => a.localeCompare(b)) // [ 'ana', 'Ana', 'john', 'John' ]


/* Pesquisa */ 

// indexOf - lastIndexOf
console.log(numbers.indexOf(10)) // devolve o índice do primeiro elemento encontrado
console.log(numbers.indexOf(100))

numbers.push(10)
console.log(numbers.lastIndexOf(10)) // devolve o índice do ultimo elemento encontrado
console.log(numbers.lastIndexOf(100))

// ECMAScript 2015 - find - findIndex 
function multipleOf13(element, index, array) {
  return (element % 13 == 0)
}

console.log(numbers.find(multipleOf13)) // devolve o primeiro valor que satifaça a função de callBack
console.log(numbers.findIndex(multipleOf13)) // devolve o índice do primeiro valor que satifaça a função de callBack

// ECMAScript 2016 - includes - devolve true se um valor for encontrado e false caso contrário
console.log(numbers.includes(15))
console.log(numbers.includes(20))

let otherNumbers = [ 7,  6,  5,  4, 3,  2,  1]
console.log(otherNumbers.includes(4, 5)) // é possivel passar um índice de início a partir do qual queremos que o array faça a pesquisa do valor 

// convertendo um array em uma string

console.log(numbers.toString()) // exibi todos os elementos do array em uma única string
console.log(numbers.join('-')) // exibi os elemetos com um seprador
