const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// bubble sort algorithm
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
};

// time complexity: O(n^2)
// space complexity: O(1)

bubbleSort(numbers);
console.log(numbers); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
