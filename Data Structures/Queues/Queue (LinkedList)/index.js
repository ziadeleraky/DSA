class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // add to the end of the queue
  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      // make the last node point to the new node
      this.last.next = node;
      // make the new node the last node
      this.last = node;
    }
    this.length++;
    return this;
  }
  // time complexity: O(1)
  // space complexity: O(1)

  // peek at the first node in the queue
  peek() {
    return this.first;
  }

  // remove from the beginning of the queue
  dequeue() {
    // if the queue is empty, return null
    if (this.length === 0) {
      return null;
    }
    // if there is only one node in the queue, set the first and last to null
    if (this.last === this.first) {
      this.last = null;
    }
    // store the first node in a variable
    const pointer = this.first;
    // make the first node point to the second node
    this.first = this.first.next;
    this.length--;
    return pointer;
  }
  // time complexity: O(1)
  // space complexity: O(1)

  isEmpty() {
    return console.log(this.length === 0);
  }

  // print the queue in an array
  print() {
    const array = [];
    let current = this.first;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return console.log(array);
  }
}

// test cases
const queue = new Queue();
queue.isEmpty(); // true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3); // 1, 2, 3
queue.dequeue(); // 2, 3
queue.print(); // [2, 3]
console.log(queue.peek()); // 2
queue.isEmpty(); // false
