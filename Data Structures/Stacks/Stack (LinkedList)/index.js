class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // add a node to the top of the stack
  push(value) {
    const node = new Node(value);
    // if stack is empty
    if (this.length === 0) {
      // set the new node as the top and bottom of the stack
      this.top = node;
      this.bottom = node;
      // if stack is not empty
    } else {
      // store the current top in a variable
      const pointer = this.top;
      // set the new node as the top
      this.top = node;
      // set the next property of the new node to the old top
      this.top.next = pointer;
    }
    this.length++;
  }
  // time complexity: O(1)
  // space complexity: O(1)

  // remove a node from the top of the stack
  pop() {
    // if stack is empty
    if (this.length === 0) {
      return null;
    }
    // if stack has only one node
    if (this.top === this.bottom) {
      // set the top and bottom to null
      this.top = null;
      this.bottom = null;
      this.length--;
      return this;
    }
    // store the current top in a variable
    const poppedItem = this.top;
    // set the next property of the new top to null
    this.top = this.top.next;
    this.length--;
    return poppedItem;
  }
  // time complexity: O(1)
  // space complexity: O(1)

  // return the top node of the stack
  peek() {
    return this.top;
  }

  // check if the stack is empty
  isEmpty() {
    return console.log(this.length === 0);
  }

  // print the stack in an array
  print() {
    const array = [];
    let current = this.top;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
  }
  // time complexity: O(n) as we have to traverse the whole stack
  // space complexity: O(n) as we are creating a new array to store the stack
}

// test cases
const stack = new Stack();
stack.push(1);
stack.push(1);
stack.pop();
stack.push(10);
stack.push(100);
stack.push(1000);
stack.pop();
console.log('-- Peak Method --\n', stack.peek());
stack.print();
