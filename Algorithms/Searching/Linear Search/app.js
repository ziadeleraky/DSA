// linear search algorithm
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

// time complexity: O(n)
// space complexity: O(1)

// test cases
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(arr, 5)); // true
console.log(linearSearch(arr, 10)); // false