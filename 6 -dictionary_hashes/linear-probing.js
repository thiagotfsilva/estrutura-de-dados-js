import ValuePair from "./valuePair.js";

class HashTableLinearProbinh {
  constructor(toString = defaultToString) {
    this.toString = toString;
    this.table = {}
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
  
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        // caso a position esteja ocupada
        let index = position + 1; // 
  
        // procurando proxima posicao livre
        while (this.table[index] != null) {
          index++;
        }
  
        this.table[index] = new ValuePair(key,value);
      }

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }

      let index = position + 1;

      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] !== null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }

    return undefined
  }

  remove(key) {
    const position = this.hashCode(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let index = position + 1;

      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] !== null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
    }

    return false
  }

  loseLoseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);      
    }

    return hash % 37; 
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
  // como não sabemos se há mais elementos com mesmo hash, temos de verificar se a remoção tem algum efeito colateral.
  // se houver posição com efeito colateral, é necessário mover o elemento que sofreu colisão uma position para trás afim de que tenhamos posições vazias.
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;

    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key); // calcular o hash da position atual
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]; // movendo elemento atual para uma position removevdPOsition
        delete this.table[index]; // apaga elemento atual 
        removedPosition = index;
      }

      index++;
    }
  }
}

export default HashTableLinearProbinh;
