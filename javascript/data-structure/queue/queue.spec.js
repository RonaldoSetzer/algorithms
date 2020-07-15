const { Node, Queue } = require('./queue');

describe('Queue', () => {
  describe('Queue', () => {
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
