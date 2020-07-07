class LinkedList {
  constructor(...values) {
    this.head = null;
    this.size = 0;
    if (values.length) {
      this.push(...values);
    }
  }

  shift() {
    this.head = this.head.next;
    this.size--;
  }

  unshift(...values) {
    while (values.length) {
      this.head = new Node(values.pop(), this.head);
      this.size++;
    }
  }

  push(...values) {
    if (!this.head) {
      this.unshift(values.shift());
    }
    let tail = this.getNode(this.size - 1);
    while (values.length) {
      tail.next = new Node(values.shift());
      tail = tail.next;
      this.size++;
    }
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

  splice(index, deletCount, ...values) {
    let previousNode = this.getNode(index - 1);
    let nextChain = previousNode ? previousNode.next : this.head;

    let count = 0;
    while (count < deletCount && nextChain) {
      nextChain = nextChain.next;
      count++;
      this.size--;
    }

    while (values.length) {
      nextChain = new Node(values.pop(), nextChain);
      this.size++;
    }

    previousNode ? (previousNode.next = nextChain) : (this.head = nextChain);
  }

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

  contains(value) {
    let tail = this.head;
    while (tail) {
      if (tail.value === value) {
        return true;
      }
      tail = tail.next;
    }
    return false;
  }

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
