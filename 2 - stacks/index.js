import { Stack } from "./stack.js"

// Convertendo números decimais para binários
function decimalToBinary(decNumber) {
  let number = decNumber
  let rem
  let binaryString = ""
  const remStack = new Stack()

  while (number > 0) {
    rem = Math.floor(number % 2) // obtem o resto da divisão
    remStack.push(rem) // adiciona a pilha
    number = Math.floor(number / 2) // atualiza o numero que sera divido por dois
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))

// Conversor de decimal para as bases entre 2 e 36
function baseConverter(decNumber, base) {
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let number = decNumber
  let rem
  let baseString = ""
  const remStack = new Stack()
 
  if (!(base >= 2 && base <= 36)) {
    return ""
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(baseConverter(1, 2))
console.log(baseConverter(100345, 8))
