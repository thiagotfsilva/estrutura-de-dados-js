// Acrescentando  e removendo elementos

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


// Cria um novo array e copia todos os valores diferentes de undefined do array original para o novo array
Array.prototype.reIndex = function(myArray) {
  const newArray = []

  for(let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      console.log(myArray[i])
      newArray.push(myArray[i])
    }
  }

  return newArray
}

// Remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1] // deslocando os elementos para a direita 
  }
  return this.reIndex(this)
}

// Atribui o novo array para o antigo
numbers = numbers.removeFirstPosition()

//Remover um elemento do inicio do array
numbers.shift()
console.log(numbers)

// removendo elementos de uma posição específica
numbers.splice(5, 3) // especifica a posição/index a partir do qual queremos fazer a remoção e a quantidade de elementos que queremos remover 
console.log(numbers)
// Adicionando elementos de uma posição específica
numbers.splice(5, 0, 4, 5, 6) // especifica a posição/index a partir do qual queremos adicionar os elementos, o segundo argumento e quantidade que queremos remover, terceiro argumento em diante são os numeors que queremos adicionar
console.log(numbers)
// remover e acrescentar
numbers.splice(5, 3, 4, 5, 6)
console.log(numbers)
