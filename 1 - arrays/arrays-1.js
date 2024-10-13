// Inicializando um array

// let daysOfWeek = new Array()
// daysOfWeek = new Array(7)
// daysOfWeek = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday')

let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// Acessando elementos e fazendo iteração em um array

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i])
}


console.log("*****************")
// descobrir quais são os primeiros 20 da sequência fibonacci, sabendo que os dois primeiros sao 1 e 2

const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 2

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] // cada termo subsequente corresponde à soma dos dois anteriores.
}

console.log(fibonacci)


