import { Queue } from "./queue.js";

// fila circular - hot potato
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  for(let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // enfileirar os itens de uma lista de nomes na fila
  }

  while (queue.size() > 1) { // quando restar apenas um item ele sera o vencedor
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // removemos um item do inicio da fila e o adicionamos no final    
    }

    elimitatedList.push(queue.dequeue()); // remove o item com a batata quente apo num passes
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
};


// aplicacao
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the hot potato game.`);
});

console.log(`The winner is: ${result.winner}`);
