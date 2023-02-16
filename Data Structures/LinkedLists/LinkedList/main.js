class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = {
      value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = {
      value,
      next: this.head,
    }
    this.head = node;
    this.length++;
  }
}

const linkedlist = new LinkedList(10);
linkedlist.append(5);
linkedlist.prepend(1);
// linkedlist.append(16);
// linkedlist.append(20);
console.log(linkedlist);
