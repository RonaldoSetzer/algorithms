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

  pop() {
    if (!this.top) {
      return null;
    }
    const value = this.top.value;
    this.top = this.top.next;

    this.size = Math.max(0, this.size - 1);

    return value;
  }

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
