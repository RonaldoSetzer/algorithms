class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }

    this.size++;
  }

  remove() {
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size = Math.max(0, this.size - 1);

    return value;
  }

  peek() {
    return this.head && this.head.value;
  }

  isEmpty() {}
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { Node, Queue };
