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

export { defaultEquals, defaultCompare};
