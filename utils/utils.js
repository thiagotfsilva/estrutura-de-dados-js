import { COMPARE } from "./compare.js";

function defaultEquals(itemA, itemB) {
  return itemA === itemB;
};

function defaultCompare(itemA, itemB) {
  if (itemA === itemB) {
    return 0;
  }

  return itemA < itemB ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN;
}

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export { defaultEquals, defaultCompare, defaultToString };
