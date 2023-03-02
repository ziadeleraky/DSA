const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// 44 99 6 2 1 5 63 87 283 4 0
// 6 44 99 2 1 5 63 87 283 4 0
// ...

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    // current value
    let current = array[i];
    // previous value
    let j = i - 1;
    // if previous value is greater than current value then swap
    while (current < array[j] && j > -1) {
      array[j + 1] = array[j];
      j--;
    }
    // set current value to the next index 
    array[j + 1] = current;
  }
};

// time complexity: O(n^2)
// space complexity: O(1)

insertionSort(numbers);
console.log(numbers);
