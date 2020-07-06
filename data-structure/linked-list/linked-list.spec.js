const { Node, LinkedList } = require('./linked-list');

describe('LinkedList', () => {
  describe('LinkedList', () => {
    test('expect to contains return false', () => {
      const ll = new LinkedList();
      ll.push(2);
      ll.push(3);
      expect(ll.contains(4)).toBe(false);
    });

    test('expect to contains return true', () => {
      const ll = new LinkedList();
      ll.push(2);
      ll.push(3);
      ll.push(4);
      expect(ll.contains(3)).toBe(true);
    });

    test('expect to clear set size to 0', () => {
      const ll = new LinkedList();
      ll.push(2);
      ll.clear();
      expect(ll.size).toEqual(0);
    });

    test('expect to clear remove head', () => {
      const ll = new LinkedList();
      ll.push(2);
      ll.clear();
      expect(ll.isEmpty()).toBe(true);
    });

    test('expect to isEmpty return false', () => {
      const ll = new LinkedList();
      ll.push(2);
      expect(ll.isEmpty()).toBe(false);
    });

    test('expect to isEmpty return true', () => {
      const ll = new LinkedList();
      expect(ll.isEmpty()).toBe(true);
    });

    test('expect to getValue repect boundary', () => {
      const ll = new LinkedList();

      expect(ll.getValue(-1)).toBeNull();
      expect(ll.getValue(10)).toBeNull();
    });

    test('expect to getValue return a node at the index', () => {
      const ll = new LinkedList();
      ll.push(0);
      ll.push(10);
      ll.push(20);
      ll.push(30);
      ll.pop();

      expect(ll.getValue(2)).toEqual(20);
    });

    test('expect to getNode repect boundary', () => {
      const ll = new LinkedList();

      expect(ll.getNode(-1)).toBeNull();
      expect(ll.getNode(10)).toBeNull();
    });

    test('expect to getNode return a node at the index', () => {
      const ll = new LinkedList();
      ll.push(0);
      ll.push(10);
      ll.push(20);
      ll.push(30);
      ll.pop();

      expect(ll.getNode(2).value).toEqual(20);
    });

    test('expect to pop remove head', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.pop();

      expect(ll.split()).toEqual([]);
    });

    test('expect to pop to remove the tail value', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.push(2);
      ll.push(3);
      ll.pop();

      expect(ll.split()).toEqual([1, 2]);
    });

    test('expect to pop to decrement size', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.push(2);
      ll.push(3);
      ll.pop();

      expect(ll.size).toEqual(2);
    });

    test('expect to push to increment size', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.push(2);
      ll.push(3);

      expect(ll.size).toEqual(3);
    });

    test('expect to push add a node to the tail position', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.push(2);
      ll.push(3);

      expect(ll.split()).toEqual([1, 2, 3]);
    });

    test('expect to push add a node next head', () => {
      const ll = new LinkedList();
      ll.push(1);
      ll.push(2);

      expect(ll.head.next.value).toEqual(2);
    });

    test('expect to push adds head when does not have one', () => {
      const ll = new LinkedList();
      ll.push(1);

      expect(ll.head.value).toEqual(1);
    });

    test('expect to remove the head and set head.next to the new head', () => {
      const ll = new LinkedList();
      ll.unshift(1);
      ll.unshift(2);
      ll.shift();

      expect(ll.head.value).toEqual(1);
    });

    test('expect to split returns all values in an array', () => {
      const ll = new LinkedList();
      ll.unshift(1);
      ll.unshift(2);

      expect(ll.split()).toEqual([2, 1]);
    });

    test('expect to decrement size', () => {
      const ll = new LinkedList();
      ll.unshift(1);
      ll.unshift(1);
      ll.shift();

      expect(ll.size).toEqual(1);
    });

    test('expect to remove head node', () => {
      const ll = new LinkedList();
      ll.unshift(1);
      ll.shift();

      expect(ll.head).toEqual(null);
    });

    test('expect to increment size', () => {
      const ll = new LinkedList();
      const previousValue = 1;
      const headValue = 2;
      ll.unshift(previousValue);
      ll.unshift(headValue);

      expect(ll.size).toEqual(2);
    });

    test('expect to add a node to head position and link with previous head', () => {
      const ll = new LinkedList();
      const previousValue = 1;
      const headValue = 2;
      ll.unshift(previousValue);
      ll.unshift(headValue);

      expect(ll.head.next.value).toEqual(previousValue);
    });

    test('expect to add a node to head position', () => {
      const ll = new LinkedList();
      const headValue = 2;
      ll.unshift(headValue);

      expect(ll.head.value).toEqual(headValue);
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
