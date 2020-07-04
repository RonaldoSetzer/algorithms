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

  push(value) {
    if (!this.head) {
      this.unshift(value);
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = new Node(value);
    this.size++;
  }

  pop() {
    if (this.size === 1) {
      this.shift();
      this.size--;
      return;
    }

    this.size--;
    let tail = this.head;
    let count = 1;

    while (tail.next) {
      if (count === this.size) {
        tail.next = null;
        return;
      }
      tail = tail.next;
      count++;
    }
  }

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
