class Set {
  constructor() {
    this.items = {};    
  };

  add(element) {
    if (!this.has(element)) { 
      this.items[element] = element; // elemento adicionado como chave e valor para ajudar a procurá-lo
      return true;
    }

    return false;
  };

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  };

  // verifica se um elemento contém no conjunto.
  has(element) {
    // return element in this.items; //informa se o objeto tem a propiedade especificada na cadeia de objetos

    return Object.prototype.hasOwnProperty.call(this.items, element); // informa se o objto tem a propriedade especificada direto no objeto
  };

  clear() {
    this.items = {};
  };

  size() {
    return Object.keys(this.items).length;
  };

  sizeLegacy() {
    let count = 0;
    for (const key in this.items) { // itera por cada propriedade do objeto
      if (this.items.hasOwnProperty(key)) { // verificamos se e uma propriedade do objeto
        count++;
      }
    }

    return count;
  };

  values() {
    return Object.values(this.items); // devolve um array com os alores de todas as propriedades de um dado objeto
  };

  valuesLegacy() {
    let values = [];

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }

    return values;
  };

  // função pura. 
  // não modificam a instância atual da classe set. são funcoes puras, 
  // apenas geram um novo resultado.
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  };

  intersection(otherSet) {
    const intersectionSet = new Set();

    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  };

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubSet = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubSet = false;
        return false;
      }

      return true;
    });

    return isSubSet;
  }

}

export default Set;
