class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add() {}

  remove() {}

  peek() {}

  isEmpty() {}
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { Node, Queue };
