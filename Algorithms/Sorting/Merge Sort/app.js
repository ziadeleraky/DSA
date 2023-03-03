const numbers = [38, 27, 43, 3, 9, 82, 10];

const mergeSort = (array) => {
  // base case
  // if the array contains one item
  if (array.length === 1) {
    return array;
  }

  // Split the array into right and left sides
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // console.log("left:", left);
  // console.log("right", right);

  // Recursively call mergeSort on the left and right sides
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let sortedArray = [];

  // while there are items in both arrays (left and right)
  while (left.length && right.length) {
    // if the first item in the left array is smaller than the first item in the right array
    if (left[0] < right[0]) {
      // push the left item into our sorted array
      sortedArray.push(left.shift());
    } else {
      // otherwise push the right item into our sorted array
      sortedArray.push(right.shift());
    }
  }

  // return the sorted array with any remaining items from left or right
  return [...sortedArray, ...left, ...right];
};

// time complexity: O(n log n) because we are splitting the array in half each time
// space complexity: O(n) because we are creating a new array each time

const answer = mergeSort(numbers);
console.log(answer); // [3, 9, 10, 27, 38, 43, 82]
