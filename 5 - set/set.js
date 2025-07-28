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

  union(otherSet) {

  };

}

export default Set;
