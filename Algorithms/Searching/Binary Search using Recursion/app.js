const binarySearch = (arr, target) => {
  return recBinarySearch(arr, target, 0, arr.length - 1);
};

const recBinarySearch = (arr, target, leftIndex, rightIndex) => {
  // base case
  if (leftIndex > rightIndex) {
    return false;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  // recursive case
  // if the target is equal to the middle element, return true
  if (target === arr[middleIndex]) {
    return true;
    // if the target is less than the middle element, search the left half of the array
  } else if (target < arr[middleIndex]) {
    return recBinarySearch(arr, target, leftIndex, middleIndex - 1);
    // if the target is greater than the middle element, search the right half of the array
  } else {
    return recBinarySearch(arr, target, middleIndex + 1, rightIndex);
  }
};

// time complexity: O(log n) - divide and conquer algorithm
// space complexity: O(log n) - because of the call stack (recursion)

// test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // true
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
