class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push() {}

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
