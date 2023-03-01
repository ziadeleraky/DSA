const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// selection sort algorithm
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        // update minIndex if current element is less than what we had previously
        minIndex = j;
      }
    }

    // swap using destructuring
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
};

// time complexity: O(n^2)
// space complexity: O(1)

selectionSort(numbers);
console.log(numbers);
