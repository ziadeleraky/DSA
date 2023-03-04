const numbers = [38, 27, 43, 3, 9, 82, 10];

// quick sort algorithm
const quickSort = (array) => {
  // base case - if array is empty or has only one element, return it
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const lessThanPivot = [];
  const greaterThanPivot = [];

  // loop through the array and push elements into lessThanPivot or greaterThanPivot
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      lessThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  // recursively call quickSort on lessThanPivot and greaterThanPivot and concatenate them with pivot
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};

// time complexity: O(n log n)
// space complexity: O(n)

console.log(quickSort(numbers)); // [ 3, 9, 10, 27, 38, 43, 82 ]
