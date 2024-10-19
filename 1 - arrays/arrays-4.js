// Métodos de array em javascript

// Juntando vários arrays
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]

let numbers = negativeNumbers.concat(zero, positiveNumbers) // junta vários arrays e devolve uma cópia dos arrays concatenados

console.log(numbers)
