class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  shift() {
    this.head = this.head.next;
    this.size--;
  }

  unshift(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  push() {}

  pop() {}

  splice() {}

  getValue() {}

  getNode() {}

  contains() {}

  isEmpty() {}

  split() {
    let result = [];
    let tail = this.head;

    while (tail) {
      result.push(tail.value);
      tail = tail.next;
    }
    return result;
  }

  reverse() {}

  clear() {}

  printValues() {}
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { Node, LinkedList };
