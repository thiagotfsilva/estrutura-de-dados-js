import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Queue } from './queue.js';

describe('Queue', () => {
  describe('constructor', () => {
    it('should create an empty queue', () => {
      const queue = new Queue();
      assert.strictEqual(queue.size(), 0);
      assert.strictEqual(queue.isEmpty(), true);
    });
  });

  describe('enqueue', () => {
    it('should add an element to the queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      assert.strictEqual(queue.size(), 1);
      assert.strictEqual(queue.isEmpty(), false);
    });

    it('should add multiple elements to the queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      assert.strictEqual(queue.size(), 3);
    });

    it('should add elements of different types', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue('string');
      queue.enqueue({ key: 'value' });
      queue.enqueue(true);
      assert.strictEqual(queue.size(), 4);
    });
  });

  describe('dequeue', () => {
    it('should remove and return the first element', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      const result = queue.dequeue();
      assert.strictEqual(result, 1);
      assert.strictEqual(queue.size(), 1);
    });

    it('should return undefined for an empty queue', () => {
      const queue = new Queue();
      const result = queue.dequeue();
      assert.strictEqual(result, undefined);
    });

    it('should follow FIFO principle', () => {
      const queue = new Queue();
      queue.enqueue('first');
      queue.enqueue('second');
      queue.enqueue('third');
      assert.strictEqual(queue.dequeue(), 'first');
      assert.strictEqual(queue.dequeue(), 'second');
      assert.strictEqual(queue.dequeue(), 'third');
    });

    it('should handle multiple enqueue and dequeue operations', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      assert.strictEqual(queue.dequeue(), 1);
      queue.enqueue(3);
      assert.strictEqual(queue.dequeue(), 2);
      assert.strictEqual(queue.dequeue(), 3);
      assert.strictEqual(queue.size(), 0);
    });
  });

  describe('peek', () => {
    it('should return the first element without removing it', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      const result = queue.peek();
      assert.strictEqual(result, 1);
      assert.strictEqual(queue.size(), 2);
    });

    it('should return undefined for an empty queue', () => {
      const queue = new Queue();
      const result = queue.peek();
      assert.strictEqual(result, undefined);
    });

    it('should return the correct element after dequeue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      assert.strictEqual(queue.peek(), 2);
    });
  });

  describe('isEmpty', () => {
    it('should return true for a new queue', () => {
      const queue = new Queue();
      assert.strictEqual(queue.isEmpty(), true);
    });

    it('should return false when queue has elements', () => {
      const queue = new Queue();
      queue.enqueue(1);
      assert.strictEqual(queue.isEmpty(), false);
    });

    it('should return true after removing all elements', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.dequeue();
      assert.strictEqual(queue.isEmpty(), true);
    });
  });

  describe('size', () => {
    it('should return 0 for a new queue', () => {
      const queue = new Queue();
      assert.strictEqual(queue.size(), 0);
    });

    it('should return the correct size after enqueue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      assert.strictEqual(queue.size(), 1);
      queue.enqueue(2);
      assert.strictEqual(queue.size(), 2);
      queue.enqueue(3);
      assert.strictEqual(queue.size(), 3);
    });

    it('should return the correct size after dequeue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      assert.strictEqual(queue.size(), 2);
      queue.dequeue();
      assert.strictEqual(queue.size(), 1);
    });

    it('should handle mixed operations', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      queue.enqueue(3);
      assert.strictEqual(queue.size(), 2);
    });
  });

  describe('clear', () => {
    it('should remove all elements from the queue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.clear();
      assert.strictEqual(queue.size(), 0);
      assert.strictEqual(queue.isEmpty(), true);
    });

    it('should work on an already empty queue', () => {
      const queue = new Queue();
      queue.clear();
      assert.strictEqual(queue.size(), 0);
      assert.strictEqual(queue.isEmpty(), true);
    });

    it('should allow enqueue after clear', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.clear();
      queue.enqueue(2);
      assert.strictEqual(queue.size(), 1);
      assert.strictEqual(queue.peek(), 2);
    });
  });

  describe('toString', () => {
    it('should return undefined for an empty queue', () => {
      const queue = new Queue();
      const result = queue.toString();
      assert.strictEqual(result, undefined);
    });

    it('should return string representation of single element', () => {
      const queue = new Queue();
      queue.enqueue(1);
      assert.strictEqual(queue.toString(), '1');
    });

    it('should return comma-separated string of elements', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      assert.strictEqual(queue.toString(), '1,2,3');
    });

    it('should handle string elements', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
      assert.strictEqual(queue.toString(), 'a,b,c');
    });

    it('should handle mixed type elements', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue('text');
      queue.enqueue(true);
      assert.strictEqual(queue.toString(), '1,text,true');
    });

    it('should update correctly after dequeue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      assert.strictEqual(queue.toString(), '2,3');
    });
  });
});
