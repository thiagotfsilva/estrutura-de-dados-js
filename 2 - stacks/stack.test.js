import test, { describe } from "node:test"
import { Stack } from "./stack.js";
import assert from "node:assert";

describe("stack", () => {
  const stack = new Stack();

  test("add element in stack", () => {
    stack.push(1);
    assert.equal(stack.size(), 1);
    assert.equal(stack.isEmpty(), false);
    assert.equal(stack.peek(), 1);
  });

  test("")

});
