class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append a node to the end of the linkedlist
  append(value) {
    const node = {
      value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  // time complexity: O(1) of appending a node to the end of the linkedlist
  // space complexity: O(1) of appending a node to the end of the linkedlist

  // prepend a node to the beginning of the linkedlist
  prepend(value) {
    const node = {
      value,
      next: null,
    };
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  // time complexity: O(1) of prepending a node to the beginning of the linkedlist
  // space complexity: O(1) of prepending a node to the beginning of the linkedlist

  // print the linkedlist as an array
  print() {
    const array = [];
    // Start with first item in the linkedlist
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // time complexity: O(n) of printing the linkedlist as an array
  // space complexity: O(n) of printing the linkedlist as an array

  // insert a node at a specific index
  insert(index, value) {
    // if index is greater than the length of the linkedlist, append the value to the end
    if (index >= this.length) {
      this.append(value);
      return this.print();
      // if index is 0, prepend the value to the beginning
    } else if (index === 0) {
      this.prepend(value);
      return this.print();
    }

    // create a new node
    const node = {
      value,
      next: null,
    };

    // traverse to the index before the index we want to insert at
    const prevIndex = this.traverseToIndex(index - 1);
    // store the next node in a variable so we can set the next of the new node to it
    const pointer = prevIndex.next;
    // set the next of the previous node to the new node
    prevIndex.next = node;
    // set the next of the new node to the pointer
    node.next = pointer;
    this.length++;
    return this.print();
  }
  // time complexity: O(n) of inserting a node at a specific index
  // space complexity: O(1) of inserting a node at a specific index

  // traverse to a specific index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // remove a node at a specific index
  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return this.print();
    }
    const prevIndex = this.traverseToIndex(index - 1);
    const pointer = prevIndex.next;
    prevIndex.next = pointer.next;
    this.length--;
    return this.print();
  }
  // time complexity: O(n) of removing a node at a specific index
  // space complexity: O(1) of removing a node at a specific index

  // reverse the linkedlist
  reverse() {
    // if the linkedlist is empty, return null
    if (!this.head) {
      return null;
    }
    // if the linkedlist only has one node, return the linkedlist
    if (!this.head.next) {
      return this.head;
    }
    // create three variables to keep track of the previous, current, and next nodes
    // set the previous node to null
    let prev = null;
    // set the current node to the head
    let current = this.head;
    // while the current node is not null
    while (current) {
      // keep track of the next node
      let next = current.next;
      // set the next of the current node to the previous node (which is null at first)
      current.next = prev;
      // set the previous node to the current node (which was the next node before we set the next of the current node to the previous node)
      prev = current;
      // set the current node to the next node (which was the next node before we set the next of the current node to the previous node)
      current = next;
    }
    // set the tail to the head
    this.head = prev;
    return this.print();
  }
}

// test cases
const linkedlist = new LinkedList(5);
linkedlist.append(15);
linkedlist.append(20);
linkedlist.insert(1, 10);
linkedlist.insert(4, 25);
linkedlist.insert(0, 0);
linkedlist.insert(0, -5);
linkedlist.append(35);
linkedlist.remove(2);
linkedlist.remove(0);
linkedlist.insert(5, 30);
linkedlist.reverse();
console.log(linkedlist.print());
