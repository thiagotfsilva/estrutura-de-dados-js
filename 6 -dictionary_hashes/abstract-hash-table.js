import { defaultToString } from "../utils/utils";

class AbstractHashTable {
  constructor(toStrFn = defaultToString) {
    if (this.constructor == AbstractHashTable) {
      throw new Error("classe não pode ser estanciada");
    }

    this.toStrFn = toStrFn;
  }

  loseLoseHashCode(key) {
    if (typeof key === 'number') { // verifica se key é um número
      return key;
    }

    const tableKey = this.toStrFn(key); // transforma key em uma string
    let hash = 0; // armazena os valores dos caracteres ASCII que compões a Key

    // iteramos pelos caracteres de key e somamos o valor ASCII do caractere correspodente na tabela ASCII na variavel hash.
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);      
    }

    /**
      para garantir que o valor retornado esteja dentro de um intervalo fixo de números.

      Por que usar o resto da divisão (% 37)?
      Distribuição dos índices: O objetivo de uma função hash é transformar uma chave (string, número, etc.) em um índice para armazenar valores em uma tabela. 
      Usar o operador % (módulo) limita o resultado a um intervalo de 0 até 36 (no caso de 37).
      Evitar índices fora do array: Sem o módulo, o valor de hash poderia ser muito grande, causando erros ou desperdício de memória.
      37 é arbitrário: O número 37 foi escolhido arbitrariamente, mas normalmente se usa um número primo para ajudar a distribuir os valores de forma mais uniforme e reduzir colisões.
      Exemplo
      Se o valor de hash for 1234:

      1234 % 37 = 14
      O índice retornado será 14, que pode ser usado para armazenar o valor na tabela.
      Resumindo
      Usar o resto da divisão garante que o índice gerado pela função hash sempre caia dentro do tamanho da tabela, tornando o armazenamento eficiente e seguro. 
          
    */


    return hash % 37; // ????
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
}
