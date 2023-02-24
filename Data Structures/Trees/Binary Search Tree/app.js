class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a node into the tree
  insert(value) {
    const node = new Node(value);
    // if there is no root, then the node is the root
    if (!this.root) {
      this.root = node;
    }
    // if there is a root, then we need to find the correct position
    else {
      let current = this.root;
      while (true) {
        // if the value is less than the current node, go left
        if (value < current.value) {
          // if there is no left child, then the node is the left child
          if (!current.left) {
            current.left = node;
            return this;
          }
          // if there is a left child, then we need to move to the left child
          current = current.left;
        }
        // if the value is greater than the current node, go right
        else if (value > current.value) {
          // if there is no right child, then the node is the right child
          if (!current.right) {
            current.right = node;
            return this;
          }
          // if there is a right child, then we need to move to the right child
          current = current.right;
        } else {
          // if the value is equal to the current node, then we don't need to insert it
          return this;
        }
      }
    }
  }
  // time complexity: O(log n)
  // space complexity: O(1)

  // find a node in the tree
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      // if the value is less than the current node, go left
      if (value < current.value) {
        current = current.left;
        // if the value is greater than the current node, go right
      } else if (value > current.value) {
        current = current.right;
        // if the value is equal to the current node, then we found it
      } else if (value === current.value) {
        return current;
        // if the value is not equal to the current node, then we didn't find it
      } else {
        return false;
      }
    }
  }
  // time complexity: O(log n)
  // space complexity: O(1)
}

// test cases
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
/* 
                  9
                /   \
              4     20
            /  \   /  \
          1    6 15   170
*/
console.log(tree);
