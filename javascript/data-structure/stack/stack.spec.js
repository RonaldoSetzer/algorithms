const { Node, Stack } = require('./Stack');

describe('Stack', () => {
  describe('Stack', () => {
    test('expect to pop returns the null to empty stack', () => {
      const stack = new Stack();
      const value = stack.pop();

      expect(value).toBeNull();
    });

    test('expect to pop returns the value of last node', () => {
      const stack = new Stack();
      stack.push(5);
      stack.push(15);
      const value = stack.pop();

      expect(value).toBe(15);
    });

    test('expect to pop to removes the top node', () => {
      const stack = new Stack();
      stack.push(5);
      stack.push(10);
      stack.push(11);
      stack.pop();

      expect(stack.top.value).toEqual(10);
    });

    test('expect to pop decreament the size', () => {
      const stack = new Stack();
      stack.push(5);
      stack.push(10);
      stack.push(11);
      stack.pop();

      expect(stack.size).toEqual(2);
    });

    test('expect to push set top with the new value', () => {
      const stack = new Stack();
      stack.push(5);
      stack.push(15);

      expect(stack.top.value).toEqual(15);
    });

    test('expect to push set top with the first value', () => {
      const stack = new Stack();
      stack.push(5);

      expect(stack.top.value).toEqual(5);
    });

    test('expect to the method push to increament the size', () => {
      const stack = new Stack();
      stack.push(0);

      expect(stack.size).toEqual(1);
    });

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
