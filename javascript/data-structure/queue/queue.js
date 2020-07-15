class Queue {
  constructor() {}

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
