const { Node, LinkedList } = require('./linked-list');

describe('LinkedList', () => {
  describe('LinkedList', () => {
    test('expect to printValues calls console.log with the pattern', () => {
      console.log = jest.fn();
      const ll = new LinkedList(3, 4, 5);
      ll.printValues();
      expect(console.log).toHaveBeenCalledWith('value: 3 :: next: 4');
    });
    test('expect to printValues calls console.log to each node', () => {
      console.log = jest.fn();
      const ll = new LinkedList(3, 4, 5);
      ll.printValues();
      expect(console.log).toHaveBeenCalledTimes(ll.size);
      // expect(console.log).toHaveBeenCalledWith('value: 3 next: 4');
    });
    test('expect to printValues calls console.log at least once', () => {
      console.log = jest.fn();
      const ll = new LinkedList(3, 4, 5);
      ll.printValues();
      expect(console.log).toHaveBeenCalled();
    });

    test('expect to reverse returns a list with one value', () => {
      const ll = new LinkedList(3);
      ll.reverse();
      expect(ll.split()).toEqual([3]);
    });

    test('expect to reverse returns a reversed linked-list', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.reverse();
      expect(ll.split()).toEqual([5, 4, 3, 2, 1, 0]);
    });

    test('expect to splice remove 2 and add 3 nodes at the index and decrement the size', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(1, 2, 10, 15, 20);
      expect(ll.size).toEqual([0, 10, 15, 20, 3, 4, 5].length);
    });

    test('expect to splice remove 2 and add 3 nodes at the index 0', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(0, 2, 0.5, 1.2, 1.8);
      expect(ll.split()).toEqual([0.5, 1.2, 1.8, 2, 3, 4, 5]);
    });

    test('expect to splice remove 2 nodes at the index 1', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(1, 2);
      expect(ll.split()).toEqual([0, 3, 4, 5]);
    });

    test('expect to splice remove 2 nodes at the index and decrement the size', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(1, 2);
      expect(ll.size).toEqual([0, 3, 4, 5].length);
    });

    test('expect to splice remove 2 nodes at the index 0', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(0, 2);
      expect(ll.split()).toEqual([2, 3, 4, 5]);
    });

    test('expect to splice remove 2 nodes at the index 1', () => {
      const ll = new LinkedList(0, 1, 2, 3, 4, 5);
      ll.splice(1, 2);
      expect(ll.split()).toEqual([0, 3, 4, 5]);
    });

    test('expect to contains return false', () => {
      const ll = new LinkedList(2, 3);
      expect(ll.contains(4)).toBe(false);
    });

    test('expect to contains return true', () => {
      const ll = new LinkedList(2, 3, 4);
      expect(ll.contains(3)).toBe(true);
    });

    test('expect to clear set size to 0', () => {
      const ll = new LinkedList(2);
      ll.clear();
      expect(ll.size).toEqual(0);
    });

    test('expect to clear remove head', () => {
      const ll = new LinkedList(2);
      ll.clear();
      expect(ll.isEmpty()).toBe(true);
    });

    test('expect to isEmpty return false', () => {
      const ll = new LinkedList(2);
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
      const ll = new LinkedList(0, 10, 20, 30);

      expect(ll.getValue(2)).toEqual(20);
    });

    test('expect to getNode repect boundary', () => {
      const ll = new LinkedList();

      expect(ll.getNode(-1)).toBeNull();
      expect(ll.getNode(10)).toBeNull();
    });

    test('expect to getNode return a node at the index', () => {
      const ll = new LinkedList(0, 10, 20, 30);

      expect(ll.getNode(2).value).toEqual(20);
    });

    test('expect to pop remove head', () => {
      const ll = new LinkedList(1);
      ll.pop();

      expect(ll.split()).toEqual([]);
    });

    test('expect to pop to remove the tail value', () => {
      const ll = new LinkedList(1, 2, 3);
      ll.pop();

      expect(ll.split()).toEqual([1, 2]);
    });

    test('expect to pop to decrement size', () => {
      const ll = new LinkedList(1, 2, 3);
      ll.pop();

      expect(ll.size).toEqual(2);
    });

    test('expect to push append multiple values and increment size', () => {
      const ll = new LinkedList();
      ll.push(1, 2, 3);
      expect(ll.size).toEqual(3);
    });

    test('expect to push append multiple values', () => {
      const ll = new LinkedList();
      ll.push(1, 2, 3);
      expect(ll.split()).toEqual([1, 2, 3]);
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

    test('expect to add multiple node to head position', () => {
      const ll = new LinkedList(5);
      ll.unshift(2, 3, 4);

      expect(ll.split()).toEqual([2, 3, 4, 5]);
    });
    test('expect to add a node to head position', () => {
      const ll = new LinkedList();
      const headValue = 2;
      ll.unshift(headValue);

      expect(ll.head.value).toEqual(headValue);
    });

    test('expect LinkedList constructor fill the list with multiple parameter values', () => {
      const ll = new LinkedList(1, 2, 3, 4);
      expect(ll.split()).toEqual([1, 2, 3, 4]);
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
