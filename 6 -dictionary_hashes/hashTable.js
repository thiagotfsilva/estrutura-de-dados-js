import { defaultToString } from '../utils/utils.js';
import ValuePair from './valuePair.js';

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key); //encontramos posicao na tabela
      this.table[position] = new ValuePair(key, value);
      return true;
    }

    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }

    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]; // devolve o valor da chave apartir da posição
    return valuePair == null ? undefined : valuePair.value;
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

  isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const keys = Object.keys(this.table); 
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;

    for (let i = 1; i < keys.length; i++) {
      objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;      
    }

    return objString;
  }
}

export default HashTable;
