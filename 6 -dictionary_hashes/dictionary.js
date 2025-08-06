import { defaultToString } from "../utils/utils.js";
import ValuePair from "./valuePair.js";

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {}; // table[key] = {key, value}
  };

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    };

    return false;
  };

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    };

    return false;
  };

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  };

  get(key) {
    /* if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }

    return undefined; */

    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  };

  clear() {
    this.table = {};
  };

  size() {
    return Object.keys(this.table).length; // quantos valores estão armazenados
  };

  isEmpty() {
    return this.size() === 0;
  };

  keys() {
    /* const keys = [];
    const valuePairs = this.keyValues();

    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key);      
    }

    return keys; */
    return this.keyValues().map(valuePair => valuePair.key);
  };

  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  };

  keyValues() {
    /* const valuePairs = [];
    for (const key in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]);
      }
    }

    return valuePairs; */

    return Object.values(this.table);
  };

  forEach(callBackFn) {
    const valuePairs = this.keyValues();

    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i].key, valuePairs[i].value);

      if (result === false) {
        break;
      }
    }
  };

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;

    for (let i = 0; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;      
    }

    return objString;
  }
}; 

export default Dictionary;
