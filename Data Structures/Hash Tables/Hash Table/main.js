class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Hash function to generate a hash key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Set method to add a key value pair to the hash table
  set(key, value) {
    // Calculate the address using the hash function
    const address = this._hash(key);
    // If there is no value at the address, create an empty array
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // Push the key value pair to the array
    this.data[address].push([key, value]);
  }

  // Get method to get a value from the hash table
  get(key) {
    // Calculate the address using the hash function
    const address = this._hash(key);
    // Get the value at the address
    const container = this.data[address];
    // If there is a value at the address, loop through the array
    if (container) {
      for (let i = 0; i < container.length; i++) {
        // If the key matches the key in the array, return the value
        if (container[i][0] === key) {
          return container[i][1];
        }
      }
    }
  }

  // Get all the keys in the hash table
  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      // If there is a value at the address, loop through the array
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }

  // Get all the values in the hash table
  values() {
    const values = [];
    for (let i in this.data) {
      if (this.data[i]) {
        values.push(this.data[i][0][1]);
      }
    }
    return values;
  }
}

// test
// Create a new hash table
const hashTable = new HashTable(30);

// Add some key value pairs
hashTable.set("name", "ziad");
hashTable.set("age", 24);

// Get the value of a key
console.log(hashTable.get("name"));
console.log(hashTable.get("age"));
console.log(hashTable.keys());
console.log(hashTable.values());
