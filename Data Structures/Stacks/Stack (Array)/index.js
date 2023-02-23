class Stack {
  constructor() {
    this.data = [];
  }

  // Add element to the top of the stack
  push(value) {
    return this.data.push(value);
  }

  // Remove element from the top of the stack
  pop() {
    return this.data.pop();
  }

  // Return the top element of the stack
  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    return console.log(this.data);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(10);
stack.push(100);
stack.push(1000);
stack.pop();
console.log("Peek Method ->", stack.peek());
stack.print();
