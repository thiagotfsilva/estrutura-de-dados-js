// arrays bidimensionais e multidimensionais

// bidimensionais - array de arrays
let averageTemp = []
averageTemp[0] = [72, 75, 79, 79, 81, 81]
averageTemp[1] = [81, 79, 75, 75, 73, 72]

console.log(averageTemp) // cada linha representa um dia e cada coluna representa a temperatura de cada hora do dia

//iterando elementos de um array bidimensional - i representa as linhas e j representa as colunas
function printMatrix(myMatrix) {
  for(let i = 0; i < myMatrix.length; i++) {
    for(let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j])
    }
  }
}

printMatrix(averageTemp)


// multidimensionais
const matrix3x3x3 = []

for(let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [] // precisamos inicializar cada array
  for(let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = []
    for(let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z // cada célula contém a soma i (linha) + j (coluna) + z (profundidade) da matriz
    }
  }
}

console.log(matrix3x3x3)

// exibindo conteudo do array
for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3.length; j++) {
    for (let z = 0; z < matrix3x3x3.length; z++) {
      console.log(matrix3x3x3[i][j][z])      
    }
  }  
}
