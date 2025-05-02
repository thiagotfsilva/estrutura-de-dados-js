import { Deque } from "./deque.js";

// palíndromo
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i)); // inseri todos os caracteres no deque
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    // compara o caractere do inicio e do final da string
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
