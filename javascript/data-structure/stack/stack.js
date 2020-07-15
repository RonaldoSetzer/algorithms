class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;

    this.size++;
  }

  pop() {}

  peek() {}

  isEmpty() {}
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { Node, Stack };
