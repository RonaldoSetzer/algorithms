const { Node, Stack } = require('./Stack');

describe('Stack', () => {
  describe('Stack', () => {
    test('expect an empty stack constructor', () => {
      const stack = new Stack();

      expect(stack.top).toBeNull();
      expect(stack.size).toEqual(0);
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
