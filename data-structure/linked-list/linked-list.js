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
    const tail = this.getNode(this.size - 1);
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

  getValue(index) {
    const node = this.getNode(index);
    return (node && node.value) || null;
  }

  getNode(index) {
    let tail = this.head;
    let count = 0;
    while (tail) {
      if (count === index) {
        return tail;
      }
      count++;
      tail = tail.next;
    }
    return null;
  }

  contains() {}

  isEmpty() {
    return !this.head;
  }

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

  clear() {
    this.size = 0;
    this.head = null;
  }

  printValues() {}
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { Node, LinkedList };
