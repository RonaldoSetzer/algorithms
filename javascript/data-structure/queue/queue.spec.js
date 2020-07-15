const { Node, Queue } = require('./queue');

describe('Queue', () => {
  describe('Queue', () => {
    test('expect to add method increament the tail', () => {
      const queue = new Queue();
      queue.add(5);
      queue.add(10);

      expect(queue.tail.value).toEqual(10);
    });

    test('expect to add set tail with the first value', () => {
      const queue = new Queue();
      queue.add(5);

      expect(queue.tail.value).toEqual(5);
    });

    test('expect to add set head with the first value', () => {
      const queue = new Queue();
      queue.add(5);

      expect(queue.head.value).toEqual(5);
    });

    test('expect to the method add to increament the size', () => {
      const queue = new Queue();
      queue.add(0);

      expect(queue.size).toEqual(1);
    });

    test('expect an empty queue constructor', () => {
      const queue = new Queue();

      expect(queue.head).toBeNull();
      expect(queue.tail).toBeNull();
      expect(queue.size).toEqual(0);
    });
  });

  describe('Node', () => {
    const node = new Node(5);

    test('expect Node constructor to store the value', () => {
      expect(node.value).toEqual(5);
    });

    test('expect Node constructor to store a value to next', () => {
      const nodeWithNext = new Node(5, node);
      expect(nodeWithNext.next).toEqual(node);
    });

    test('expect Node constructor to set null when does not inform a value to next', () => {
      expect(node.next).toBeNull();
    });
  });
});
