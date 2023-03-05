const binarySearch = (arr, target) => {
  // start with the left and right index of the array
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // console.log(arr[leftIndex], arr[rightIndex], arr[middleIndex]);
    // check if the target is equal to the middle element
    if (target === arr[middleIndex]) {
      return true;
      // if the target is less than the middle element, move the right index to the left
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
      // if the target is greater than the middle element, move the left index to the right
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return false;
};

// time complexity: O(log n) - logarithmic time - the number of operations is reduced by half with each iteration
// space complexity: O(1)

// test case
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;
console.log(binarySearch(arr, target));
