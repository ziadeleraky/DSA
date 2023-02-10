class CustomizedArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Methods
  get(index) {
    return this.data[index];
    // time complexity: O(1)
  }

  // push method adds an item to the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
    // time complexity: O(1)
    // space complexity: O(1)
  }

  // pop method removes an item from the end of the array
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
    // time complexity: O(1)
    // space complexity: O(1)
  }

  // deleteIndex method removes an item from the array at a specific index
  deleteIndex(index) {
    const item = this.data[index];
    // shift all the items after the index to the left
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
    // time complexity: O(n) because of the shiftIndices method that iterates over the array
    // space complexity: O(1) because we are not creating any new data structure
  }

  // unshift method adds an item to the beginning of the array
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
    // time complexity: O(n) because of the for loop that iterates over the array
    // space complexity: O(1) because we are not creating any new data structure
  }

  // insert method adds an item to the array at a specific index
  insert(index, item) {
    // shift all the items after the index to the right
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
    // time complexity: O(n) because of the for loop that iterates over the array
    // space complexity: O(1) because we are not creating any new data structure
  }
}

// Testing the class methods
let arr = new CustomizedArray();
arr.push("Ziad");
arr.push("Ahmed");
arr.push("Mohamed");
arr.push("Eleraky");
arr.unshift("Dev");
arr.insert(4, "Ahmed");
console.log(arr);
