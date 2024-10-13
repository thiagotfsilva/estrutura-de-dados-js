// Acrescentando elementos

// Acrescentando elementos no final do array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10 // numbers.length referencia a última posição livre do array
numbers.push(11)
numbers.push(12, 13)

// inserindo na primeira posição

// prototype deixa método disponivel para todas as instancias de array
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1] // deslocando os elementos para a direita e deixando a primeira posição livre.
  }

  this[0] = value // adiciona o valor a primeira posição
}

numbers.insertFirstPosition(-1)
console.log("numbers", numbers)

numbers.unshift(-2) // unshift tem o mesmo comportamento do metodo insertFirstPosition
numbers.unshift(-4, -3)
console.log("numbers 2", numbers)

// removendo elementos no final do array
numbers.pop()
console.log(numbers)

// removendo um elemento da primeira posição
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1] // // deslocando os elementos para a esquerda entretanto o tamanho do array ainda continua 17. simplesmente os valores foram sobrescritos sem de fato removê-los
}

Array.prototype.reIndex = function(myArray) {
  const newArray = []
}
